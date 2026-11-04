-- Premium bought on the website (Buy Me a Coffee). Run after referrals.sql.
-- Run once in the Supabase dashboard: SQL Editor → New query → paste → Run.
-- Safe to run again: every statement is idempotent.

-- One row per checkout: `pending` when the buyer leaves for the payment page,
-- `paid` once the webhook confirms the money, `refunded` if it went back.
-- Written only by the server (the webhook) and the web_checkout() function below.
create table if not exists public.web_premium (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  email      text not null,
  plan       text not null check (plan in ('month', 'year', 'lifetime')),
  status     text not null default 'pending' check (status in ('pending', 'paid', 'refunded')),
  created_at timestamptz not null default now(),
  paid_at    timestamptz,
  -- End of the paid window; null on a paid lifetime row.
  paid_until timestamptz,
  paid_ref   text,
  amount     numeric,
  currency   text
);
alter table public.web_premium enable row level security;
create index if not exists web_premium_user on public.web_premium (user_id, status);

-- Every webhook body, verbatim, so a payment can never exist on their side and nowhere on ours.
create table if not exists public.web_payment_events (
  id         bigint generated always as identity primary key,
  event_key  text not null unique,
  event_type text,
  email      text,
  amount     numeric,
  currency   text,
  premium_id uuid references public.web_premium (id) on delete set null,
  matched    boolean not null default false,
  payload    jsonb,
  created_at timestamptz not null default now()
);
alter table public.web_payment_events enable row level security;

-- Opens (or reuses) the signed-in buyer's pending checkout for a plan, just before the
-- payment page. Its time is what lets a payment from another mailbox still find its buyer.
create or replace function public.web_checkout(p_plan text)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_id uuid;
  v_email text := lower(coalesce(auth.jwt() ->> 'email', ''));
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  if p_plan not in ('month', 'year', 'lifetime') then raise exception 'unknown plan'; end if;
  select id into v_id from public.web_premium
   where user_id = auth.uid() and plan = p_plan and status = 'pending'
   order by created_at desc limit 1;
  if v_id is null then
    insert into public.web_premium (user_id, email, plan) values (auth.uid(), v_email, p_plan)
    returning id into v_id;
  else
    update public.web_premium set created_at = now(), email = v_email where id = v_id;
  end if;
  return v_id;
end;
$$;
revoke all on function public.web_checkout(text) from public, anon;
grant execute on function public.web_checkout(text) to authenticated;

-- What the signed-in account bought on the site: lifetime, or until when.
create or replace function public.my_web_premium()
returns table (lifetime boolean, paid_until timestamptz)
language sql
stable
security definer
set search_path = ''
as $$
  select
    bool_or(w.plan = 'lifetime'),
    max(w.paid_until)
  from public.web_premium w
  where w.user_id = auth.uid() and w.status = 'paid';
$$;
revoke all on function public.my_web_premium() from public, anon;
grant execute on function public.my_web_premium() to authenticated;

-- Premium for the signed-in account: a gift by e-mail, or a paid web purchase still running.
create or replace function public.has_premium_grant()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
      select 1 from public.premium_grants g
      where lower(g.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
    )
    or exists (
      select 1 from public.web_premium w
      where w.user_id = auth.uid() and w.status = 'paid'
        and (w.plan = 'lifetime' or w.paid_until > now())
    );
$$;
revoke all on function public.has_premium_grant() from public, anon;
grant execute on function public.has_premium_grant() to authenticated;
