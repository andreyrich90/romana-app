/** Money in the partner statistics: sums kept apart per currency, never converted. */

export type Amount = { currency: string; value: number };

const SIGN: Record<string, string> = { EUR: '€', USD: '$' };

/** Adds amounts up per currency; euros first, then dollars, then anything else by code. */
export function sumByCurrency(items: Amount[]): Amount[] {
  const map = new Map<string, number>();
  for (const { currency, value } of items) {
    const c = (currency || '').toUpperCase();
    map.set(c, (map.get(c) ?? 0) + value);
  }
  const rank = (c: string) => (c === 'EUR' ? 0 : c === 'USD' ? 1 : 2);
  return [...map.entries()]
    .map(([currency, value]) => ({ currency, value: Math.round(value * 100) / 100 }))
    .sort((a, b) => rank(a.currency) - rank(b.currency) || a.currency.localeCompare(b.currency));
}

export function moneyLabel({ currency, value }: Amount): string {
  const sign = SIGN[currency];
  const n = value.toFixed(2);
  return sign ? `${sign}${n}` : `${n} ${currency}`;
}

/** "€26.50 + $10.00"; "0" when there is nothing. */
export function moneyTotal(items: Amount[]): string {
  const sums = sumByCurrency(items).filter((a) => a.value !== 0);
  return sums.length ? sums.map(moneyLabel).join(' + ') : '0';
}

export type PlanKind = 'month' | 'year' | 'lifetime';

/** Google Play's product ids and the site's web_<plan> both name one of three packages. */
export function planOfProduct(product: string): PlanKind | null {
  if (product === 'premium_monthly' || product === 'web_month') return 'month';
  if (product === 'premium_yearly' || product === 'web_year') return 'year';
  if (product === 'premium_lifetime' || product === 'web_lifetime') return 'lifetime';
  return null;
}
