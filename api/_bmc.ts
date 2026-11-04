/// <reference types="node" />
// Reading a Buy Me a Coffee webhook: the signature check and the payload hunt.
// The same helpers as SeaJobs' lib/bmcWebhook.ts, where they were proven on real
// payments. The payload is searched rather than declared: its shape differs between
// event kinds, and a strict parser would drop a real payment the day a key is renamed.
// The `_` prefix keeps Vercel from serving this file as a route.
import crypto from 'node:crypto';

/** HMAC-SHA256 of the raw body under the signing secret, hex, in `x-signature-sha256`. */
export function verifySignature(raw: string, header: string | null, secret: string): boolean {
  if (!header || !secret) return false;
  const expected = crypto.createHmac('sha256', secret).update(raw, 'utf8').digest('hex');
  const got = header.trim().replace(/^sha256=/i, '').toLowerCase();
  if (got.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(got), Buffer.from(expected));
}

type Json = Record<string, unknown>;

function pick(obj: unknown, keys: string[], depth = 0): unknown {
  if (depth > 6 || obj === null || typeof obj !== 'object') return undefined;
  const o = obj as Json;
  for (const k of keys) {
    const v = o[k];
    if (v !== undefined && v !== null && v !== '') return v;
  }
  for (const v of Object.values(o)) {
    const found = pick(v, keys, depth + 1);
    if (found !== undefined) return found;
  }
  return undefined;
}

const str = (v: unknown): string | null => {
  const s = typeof v === 'string' ? v.trim() : typeof v === 'number' ? String(v) : '';
  return s || null;
};

const num = (v: unknown): number | null => {
  const n = typeof v === 'number' ? v : typeof v === 'string' ? Number(v.replace(',', '.')) : NaN;
  return Number.isFinite(n) ? n : null;
};

export type BmcEvent = { eventType: string; email: string | null; amount: number | null; currency: string | null; eventKey: string };

export function readEvent(body: unknown, raw: string): BmcEvent {
  return {
    eventType: str(pick(body, ['type', 'event', 'event_type'])) ?? 'unknown',
    email: str(pick(body, ['supporter_email', 'payer_email', 'email']))?.toLowerCase() ?? null,
    amount: num(pick(body, ['amount', 'total_amount', 'support_coffee_price', 'value'])),
    currency: str(pick(body, ['currency', 'currency_code'])),
    eventKey:
      str(pick(body, ['id', 'purchase_id', 'payment_id', 'transaction_id', 'object_id'])) ??
      crypto.createHash('sha256').update(raw).digest('hex').slice(0, 40),
  };
}

/** Only "purchased" is money; an unrecognised type is never a payment. Refund verbs are read first. */
export function classify(eventType: string): 'paid' | 'refund' | 'other' {
  const t = eventType.toLowerCase();
  if (t.includes('refund') || t.includes('chargeback') || t.includes('cancel')) return 'refund';
  if (t.includes('updated') || t.includes('edited') || t.includes('changed')) return 'other';
  if (t.includes('purchas') || t.includes('sale') || t.includes('order')) return 'paid';
  return 'other';
}

const SETTLED = ['succeeded', 'success', 'successful', 'paid', 'completed', 'complete', 'captured', 'ok'];

/** The body corrects the type: refunded is a refund, an unknown status is not money. */
export function refineKind(kind: 'paid' | 'refund' | 'other', body: unknown): 'paid' | 'refund' | 'other' {
  const refunded = pick(body, ['refunded']) === true || str(pick(body, ['refunded_at'])) !== null;
  const status = str(pick(body, ['status', 'payment_status']))?.toLowerCase() ?? null;
  if (refunded) return 'refund';
  if (kind === 'paid' && status !== null && !SETTLED.includes(status)) return 'other';
  return kind;
}

/** The extra (product) ids a payment names: `data.extras[].id`. */
export function extraIds(body: unknown): number[] {
  const found: number[] = [];
  const seen = new Set<unknown>();
  const walk = (node: unknown, key?: string) => {
    if (!node || typeof node !== 'object' || seen.has(node)) return;
    seen.add(node);
    if (Array.isArray(node)) {
      for (const item of node) {
        if (key === 'extras' && item && typeof item === 'object') {
          const id = (item as Json).id;
          if (typeof id === 'number') found.push(id);
          else if (typeof id === 'string' && /^\d+$/.test(id)) found.push(Number(id));
        }
        walk(item, key);
      }
      return;
    }
    for (const [k, v] of Object.entries(node as Json)) walk(v, k);
  };
  walk(body);
  return found;
}
