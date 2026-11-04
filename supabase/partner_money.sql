-- What each partner's purchases were worth, and the partner's share of them.
-- Run after referrals.sql and web_premium.sql, once, in the Supabase dashboard:
-- SQL Editor → New query → paste → Run. Safe to run again: every statement is idempotent.

-- ── The partner's share ─────────────────────────────────────────────────────
-- 0.5 = half of the price. Change it per partner by hand if a deal differs:
--   update public.ref_partners set share = 0.4 where code = 'anna';
alter table public.ref_partners add column if not exists share numeric not null default 0.5
  check (share >= 0 and share <= 1);

-- ── What a purchase was ─────────────────────────────────────────────────────
-- source: 'play' (Google Play, in the app) or 'web' (Buy Me a Coffee, on the site).
-- amount/currency: the price. Play purchases carry the list price in euros (a buyer
-- abroad pays Play's own conversion of it); web purchases what the webhook reported.
-- earned: the partner's share of it, fixed when the purchase is recorded, so changing
-- `share` later never rewrites what was already earned.
-- order_ref: Google Play's order number (GPA.…), to look the purchase up in the Play
-- Console before paying out.
alter table public.ref_events add column if not exists source    text check (source in ('play', 'web'));
alter table public.ref_events add column if not exists amount    numeric;
alter table public.ref_events add column if not exists currency  text;
alter table public.ref_events add column if not exists earned    numeric;
alter table public.ref_events add column if not exists order_ref text;

-- List prices, one place. Product ids: Google Play's, and web_<plan> from the site.
create or replace function public.ref_list_price(p_product text, out amount numeric, out currency text, out source text)
language sql
immutable
set search_path = ''
as $$
  select v.amount, v.currency, v.source
  from (values
    ('premium_monthly',  2.99::numeric, 'EUR', 'play'),
    ('premium_yearly',  19.99::numeric, 'EUR', 'play'),
    ('premium_lifetime', 29.99::numeric, 'EUR', 'play'),
    ('web_month',        2.99::numeric, 'USD', 'web'),
    ('web_year',        19.99::numeric, 'USD', 'web'),
    ('web_lifetime',    29.99::numeric, 'USD', 'web')
  ) as v (product, amount, currency, source)
  where v.product = p_product;
$$;

-- Every purchase row gets its source, price and the partner's share, whoever wrote it:
-- the app (through ref_track, which cannot pass a price) or the site's webhook.
create or replace function public.ref_events_price()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  lp record;
begin
  if new.kind <> 'purchase' then return new; end if;
  select * into lp from public.ref_list_price(new.product);
  new.source := coalesce(new.source, lp.source, case when new.product like 'web\_%' then 'web' else 'play' end);
  -- A price from the app is never trusted: Play purchases always take the list price.
  if new.source = 'play' or new.amount is null then
    new.amount := lp.amount;
    new.currency := lp.currency;
  end if;
  new.currency := upper(coalesce(new.currency, lp.currency));
  if new.earned is null then
    new.earned := round(coalesce(new.amount, 0) * coalesce((select p.share from public.ref_partners p where p.code = new.code), 0.5), 2);
  end if;
  return new;
end;
$$;
drop trigger if exists ref_events_price on public.ref_events;
create trigger ref_events_price before insert on public.ref_events
  for each row execute function public.ref_events_price();

-- Purchases recorded before this file existed.
update public.ref_events e
   set source   = (public.ref_list_price(e.product)).source,
       amount   = (public.ref_list_price(e.product)).amount,
       currency = (public.ref_list_price(e.product)).currency,
       earned   = round((public.ref_list_price(e.product)).amount
                  * coalesce((select p.share from public.ref_partners p where p.code = e.code), 0.5), 2)
 where e.kind = 'purchase' and e.amount is null
   and (public.ref_list_price(e.product)).amount is not null;

-- ── The app's way in, now with Google Play's order number ───────────────────
-- A purchase is keyed by its order, so one phone buying a month and later the
-- lifetime plan counts twice; the same order reported twice counts once.
drop function if exists public.ref_track(text, text, text, text);
create or replace function public.ref_track(p_code text, p_kind text, p_device text, p_product text default null, p_order text default null)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_order text := case when p_order ~ '^GPA\.[0-9-]{10,40}(\.\.[0-9]+)?$' then p_order end;
  v_device text := left(p_device, 64);
begin
  if p_kind not in ('click', 'install', 'signup', 'purchase') then return; end if;
  if not exists (select 1 from public.ref_partners where code = lower(p_code)) then return; end if;
  if p_kind = 'purchase' then
    v_device := left(coalesce(v_order, left(p_device, 40) || ':' || coalesce(p_product, '')), 64);
  end if;
  insert into public.ref_events (code, kind, device, user_id, product, order_ref)
  values (lower(p_code), p_kind, v_device, auth.uid(), left(p_product, 64), case when p_kind = 'purchase' then v_order end)
  on conflict (code, kind, device) do nothing;
end;
$$;
revoke all on function public.ref_track(text, text, text, text, text) from public;
grant execute on function public.ref_track(text, text, text, text, text) to anon, authenticated;

-- ── What the partner (or an admin) sees ─────────────────────────────────────
-- Who the signed-in account may see: its own codes, or every code for an admin.
create or replace function public.ref_visible_codes()
returns setof text
language sql
stable
security definer
set search_path = ''
as $$
  select p.code from public.ref_partners p
  where lower(p.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
     or exists (select 1 from public.ref_admins a where lower(a.email) = lower(coalesce(auth.jwt() ->> 'email', '')));
$$;
revoke all on function public.ref_visible_codes() from public, anon;

-- Sales per link, package, source and currency: all time and this calendar month
-- (Romanian time). The screen adds them up into totals.
create or replace function public.ref_my_sales()
returns table (
  code text, product text, source text, currency text,
  sold bigint, revenue numeric, earned numeric,
  sold_month bigint, revenue_month numeric, earned_month numeric
)
language sql
stable
security definer
set search_path = ''
as $$
  select e.code, e.product, e.source, e.currency,
    count(*),
    coalesce(sum(e.amount), 0),
    coalesce(sum(e.earned), 0),
    count(*) filter (where e.created_at >= m.start),
    coalesce(sum(e.amount) filter (where e.created_at >= m.start), 0),
    coalesce(sum(e.earned) filter (where e.created_at >= m.start), 0)
  from public.ref_events e
  cross join (select date_trunc('month', now() at time zone 'Europe/Bucharest') at time zone 'Europe/Bucharest' as start) m
  where e.kind = 'purchase' and e.code in (select public.ref_visible_codes())
  group by e.code, e.product, e.source, e.currency
  order by e.code, e.source, e.product;
$$;
revoke all on function public.ref_my_sales() from public, anon;
grant execute on function public.ref_my_sales() to authenticated;

-- The latest purchases one by one. The Play order number is shown to admins only.
create or replace function public.ref_my_purchases()
returns table (
  code text, created_at timestamptz, product text, source text,
  amount numeric, currency text, earned numeric, order_ref text
)
language sql
stable
security definer
set search_path = ''
as $$
  select e.code, e.created_at, e.product, e.source, e.amount, e.currency, e.earned,
    case when exists (select 1 from public.ref_admins a where lower(a.email) = lower(coalesce(auth.jwt() ->> 'email', '')))
         then coalesce(e.order_ref, case when e.device like 'web:%' then e.device end) end
  from public.ref_events e
  where e.kind = 'purchase' and e.code in (select public.ref_visible_codes())
  order by e.created_at desc
  limit 100;
$$;
revoke all on function public.ref_my_purchases() from public, anon;
grant execute on function public.ref_my_purchases() to authenticated;
