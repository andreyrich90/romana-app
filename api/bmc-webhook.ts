/// <reference types="node" />
// Buy Me a Coffee → Premium on the website.
//
// POST /api/bmc-webhook, signed with BMC_WEBHOOK_SECRET. Needs SUPABASE_SERVICE_ROLE_KEY
// (server-only, set in Vercel) and the project URL in EXPO_PUBLIC_SUPABASE_URL.
//
// Only payments that name one of our extras (src/engine/webPlans.ts) are handled. The
// Buy Me a Coffee account may sell other things, so anything else is answered 200 and
// left alone — never matched by amount or e-mail.
import { createClient } from '@supabase/supabase-js';

import { addMonths, planForExtraIds } from '../src/engine/webPlans';
import { classify, extraIds, readEvent, refineKind, verifySignature } from './_bmc';

/** A payment from another mailbox still finds its buyer if exactly one checkout opened this recently. */
const RECENT_MS = 20 * 60 * 1000;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

export async function POST(request: Request): Promise<Response> {
  const secret = process.env.BMC_WEBHOOK_SECRET ?? '';
  const url = process.env.EXPO_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? '';
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';
  if (!secret || !url || !key) return json({ error: 'Not configured' }, 503);

  const raw = await request.text();
  if (!verifySignature(raw, request.headers.get('x-signature-sha256'), secret)) {
    return json({ error: 'Bad signature' }, 401);
  }
  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: 'Bad JSON' }, 400);
  }

  const plan = planForExtraIds(extraIds(body));
  if (!plan) return json({ ok: true, ignored: 'not a Română product' });

  const { eventType, email, amount, currency, eventKey } = readEvent(body, raw);
  const kind = refineKind(classify(eventType), body);
  const db = createClient(url, key, { auth: { persistSession: false } });

  // Record first: a retried delivery is a no-op, and the money is on record whatever follows.
  const { data: ev, error: evErr } = await db
    .from('web_payment_events')
    .insert({ event_key: eventKey, event_type: eventType, email, amount, currency, payload: body })
    .select('id')
    .single();
  if (evErr) {
    if (evErr.code === '23505') return json({ ok: true, duplicate: true });
    console.error('[bmc] event insert', evErr.message);
    return json({ error: 'Could not record' }, 500);
  }
  if (kind === 'other') return json({ ok: true, kind });

  // Which checkout: by e-mail first; for a payment, else the single one opened just now.
  type Row = { id: string; user_id: string; plan: string; created_at: string };
  let row: Row | null = null;
  const status = kind === 'paid' ? 'pending' : 'paid';
  if (email) {
    const { data } = await db
      .from('web_premium')
      .select('id, user_id, plan, created_at')
      .eq('plan', plan.id)
      .eq('status', status)
      .eq('email', email)
      .order('created_at', { ascending: false })
      .limit(1);
    row = data?.[0] ?? null;
  }
  if (!row && kind === 'paid') {
    const since = new Date(Date.now() - RECENT_MS).toISOString();
    const { data } = await db
      .from('web_premium')
      .select('id, user_id, plan, created_at')
      .eq('plan', plan.id)
      .eq('status', 'pending')
      .gte('created_at', since)
      .limit(2);
    if (data?.length === 1) row = data[0];
  }
  if (!row) return json({ ok: true, kind, matched: false });

  await db.from('web_payment_events').update({ premium_id: row.id, matched: true }).eq('id', ev.id);

  if (kind === 'refund') {
    await db.from('web_premium').update({ status: 'refunded', paid_until: new Date().toISOString() }).eq('id', row.id);
    return json({ ok: true, kind, matched: true });
  }

  // Paying again before the end adds the time on top of what is left.
  let paidUntil: string | null = null;
  if (plan.months !== null) {
    const { data: active } = await db
      .from('web_premium')
      .select('paid_until')
      .eq('user_id', row.user_id)
      .eq('status', 'paid')
      .not('paid_until', 'is', null)
      .order('paid_until', { ascending: false })
      .limit(1);
    const left = active?.[0]?.paid_until ? new Date(active[0].paid_until) : null;
    const start = left && left.getTime() > Date.now() ? left : new Date();
    paidUntil = addMonths(start, plan.months).toISOString();
  }
  const { error: upErr } = await db
    .from('web_premium')
    .update({ status: 'paid', paid_at: new Date().toISOString(), paid_until: paidUntil, paid_ref: eventKey, amount, currency })
    .eq('id', row.id);
  if (upErr) {
    console.error('[bmc] premium update', upErr.message);
    return json({ error: 'Could not update' }, 500);
  }

  // Count the purchase for the partner whose link brought this account, if any.
  const { data: ref } = await db
    .from('ref_events')
    .select('code')
    .eq('user_id', row.user_id)
    .order('created_at', { ascending: false })
    .limit(1);
  const code = ref?.[0]?.code;
  if (code) {
    await db
      .from('ref_events')
      .upsert(
        {
          code,
          kind: 'purchase',
          device: `web:${row.id}`,
          user_id: row.user_id,
          product: `web_${plan.id}`,
          source: 'web',
          // The extra's own price (the payload's amount fields differ between event kinds);
          // the database works out the partner's share.
          amount: plan.usd,
          currency: 'USD',
        },
        { onConflict: 'code,kind,device', ignoreDuplicates: true },
      );
  }
  return json({ ok: true, kind, matched: true, plan: plan.id });
}
