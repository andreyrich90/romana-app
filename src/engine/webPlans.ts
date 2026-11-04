/**
 * Premium sold on the website through Buy Me a Coffee, for everyone who is not in the
 * Android app: computers, iPhones, any browser. One payment, no auto-renewal; paying again
 * before the end adds the time on top. Bought on the site, Premium opens for the account
 * everywhere, the Android app included.
 *
 * Whether a plan sells is one field: paste the Buy Me a Coffee extra's link into `payUrl`.
 * The price shown is `usd`, so it must match the product the link points at — the checkout
 * charges dollars, and the page must show exactly what will be charged.
 *
 * The webhook (api/bmc-webhook.ts) recognises a plan only by the extra id in the link,
 * never by the amount: the same Buy Me a Coffee account may sell other things.
 */
export type WebPlanId = 'month' | 'year' | 'lifetime';

export type WebPlan = {
  id: WebPlanId;
  usd: number;
  /** Months of access; null for lifetime. */
  months: number | null;
  payUrl: string | null;
};

export const WEB_PLANS: WebPlan[] = [
  { id: 'year', usd: 19.99, months: 12, payUrl: 'https://buymeacoffee.com/seajobs.pro/e/595046' },
  { id: 'month', usd: 2.99, months: 1, payUrl: 'https://buymeacoffee.com/seajobs.pro/e/595044' },
  { id: 'lifetime', usd: 29.99, months: null, payUrl: 'https://buymeacoffee.com/seajobs.pro/e/595047' },
];

export const WEB_SELLING = WEB_PLANS.some((p) => p.payUrl);

/** `https://buymeacoffee.com/<page>/e/123456` → 123456. */
export function extraIdOf(url: string | null): number | null {
  const m = /\/e\/(\d+)/.exec(url ?? '');
  return m ? Number(m[1]) : null;
}

/** The plan a payment names, by the extra ids in its body; undefined when it names none of ours. */
export function planForExtraIds(ids: number[]): WebPlan | undefined {
  return WEB_PLANS.find((p) => {
    const id = extraIdOf(p.payUrl);
    return id !== null && ids.includes(id);
  });
}

export const usdLabel = (usd: number) => `$${usd.toFixed(2)}`;

/** Adds months, clamping the day: 31 January + 1 month is the end of February. */
export function addMonths(from: Date, months: number): Date {
  const d = new Date(from.getTime());
  const day = d.getUTCDate();
  d.setUTCDate(1);
  d.setUTCMonth(d.getUTCMonth() + months);
  const last = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0)).getUTCDate();
  d.setUTCDate(Math.min(day, last));
  return d;
}
