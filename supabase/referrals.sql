-- Premium granted by e-mail, and the partner (referral) links with their statistics.
-- Run once in the Supabase dashboard: SQL Editor → New query → paste → Run.
-- Safe to run again: every statement is idempotent.

-- ── Premium for a given e-mail, for good ────────────────────────────────────
-- Rows are added by hand (SQL editor). Nobody can read the table from the app;
-- has_premium_grant() answers only "is the signed-in account on the list".
create table if not exists public.premium_grants (
  email      text primary key,
  note       text,
  created_at timestamptz not null default now()
);
alter table public.premium_grants enable row level security;

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
  );
$$;
revoke all on function public.has_premium_grant() from public, anon;
grant execute on function public.has_premium_grant() to authenticated;

-- ── Partners and what their links brought ──────────────────────────────────
-- A partner is a code (the part after /r/ in the link) owned by an e-mail.
-- Whoever signs in with that e-mail sees the code's statistics in the app.
create table if not exists public.ref_partners (
  code       text primary key check (code ~ '^[a-z0-9_-]{2,32}$'),
  email      text not null,
  name       text,
  created_at timestamptz not null default now()
);
alter table public.ref_partners enable row level security;

-- One row per event. `device` is a random id the app or the page keeps for itself,
-- so a repeated click or a reinstall from the same phone counts once.
create table if not exists public.ref_events (
  id         bigint generated always as identity primary key,
  code       text not null references public.ref_partners (code) on delete cascade,
  kind       text not null check (kind in ('click', 'install', 'signup', 'purchase')),
  device     text not null check (length(device) between 8 and 64),
  user_id    uuid references auth.users (id) on delete set null,
  product    text,
  created_at timestamptz not null default now(),
  unique (code, kind, device)
);
alter table public.ref_events enable row level security;
create index if not exists ref_events_code_kind on public.ref_events (code, kind);

-- The only way in: the page and the app report events through this function.
-- An unknown code or kind is ignored rather than raised, so a stale link never errors.
create or replace function public.ref_track(p_code text, p_kind text, p_device text, p_product text default null)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if p_kind not in ('click', 'install', 'signup', 'purchase') then return; end if;
  if not exists (select 1 from public.ref_partners where code = lower(p_code)) then return; end if;
  insert into public.ref_events (code, kind, device, user_id, product)
  values (lower(p_code), p_kind, left(p_device, 64), auth.uid(), left(p_product, 64))
  on conflict (code, kind, device) do nothing;
end;
$$;
revoke all on function public.ref_track(text, text, text, text) from public;
grant execute on function public.ref_track(text, text, text, text) to anon, authenticated;

-- Admins see every partner's statistics, not only their own codes.
create table if not exists public.ref_admins (
  email      text primary key,
  created_at timestamptz not null default now()
);
alter table public.ref_admins enable row level security;

-- Statistics for the codes owned by the signed-in e-mail (every code for an admin):
-- totals and the last 30 days.
create or replace function public.ref_my_stats()
returns table (
  code text, name text,
  clicks bigint, installs bigint, signups bigint, purchases bigint,
  clicks_30 bigint, installs_30 bigint, signups_30 bigint, purchases_30 bigint
)
language sql
stable
security definer
set search_path = ''
as $$
  select p.code, p.name,
    count(*) filter (where e.kind = 'click'),
    count(*) filter (where e.kind = 'install'),
    count(*) filter (where e.kind = 'signup'),
    count(*) filter (where e.kind = 'purchase'),
    count(*) filter (where e.kind = 'click'    and e.created_at > now() - interval '30 days'),
    count(*) filter (where e.kind = 'install'  and e.created_at > now() - interval '30 days'),
    count(*) filter (where e.kind = 'signup'   and e.created_at > now() - interval '30 days'),
    count(*) filter (where e.kind = 'purchase' and e.created_at > now() - interval '30 days')
  from public.ref_partners p
  left join public.ref_events e on e.code = p.code
  where lower(p.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
     or exists (select 1 from public.ref_admins a where lower(a.email) = lower(coalesce(auth.jwt() ->> 'email', '')))
  group by p.code, p.name
  order by p.code;
$$;
revoke all on function public.ref_my_stats() from public, anon;
grant execute on function public.ref_my_stats() to authenticated;

-- Examples (run by hand, with real values):
--   insert into public.ref_admins (email) values ('admin@gmail.com') on conflict do nothing;
--   insert into public.premium_grants (email, note) values ('someone@gmail.com', 'gift') on conflict do nothing;
--   insert into public.ref_partners (code, email, name) values ('anna', 'anna@gmail.com', 'Anna') on conflict do nothing;
