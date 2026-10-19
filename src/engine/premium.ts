import { CARDS, cardOfDay, type LearnCard } from '../content/cards';
import { unitOf } from '../content/course';

/** Store product ids; the same ids are created in Play Console (Monetize → Products). */
export const SUBSCRIPTIONS = ['premium_monthly', 'premium_yearly'] as const;
export const LIFETIME = 'premium_lifetime';
export const PRODUCT_IDS: readonly string[] = [...SUBSCRIPTIONS, LIFETIME];

/** B1 and B2 are Premium; the alphabet, A1 and A2 stay free. */
export function isPremiumLesson(id: string): boolean {
  const level = unitOf(id)?.level;
  return level === 'B1' || level === 'B2';
}

/** Free cards: the first three of every theme and the first five of each general kind. */
const FREE_CARDS: ReadonlySet<string> = (() => {
  const seen: Record<string, number> = {};
  const free = new Set<string>();
  for (const card of CARDS) {
    const group = card.theme ?? card.kind;
    const n = (seen[group] = (seen[group] ?? 0) + 1);
    if (n <= (card.theme ? 3 : 5)) free.add(card.id);
  }
  return free;
})();

/** Today's card is always open, whatever group it is in. `today` is a local YYYY-MM-DD. */
export function isCardFree(card: LearnCard, today: string): boolean {
  return FREE_CARDS.has(card.id) || cardOfDay(today).id === card.id;
}

/** Without Premium, one review session a day. */
export function practiceAllowed(lastPracticeDay: string | null, today: string): boolean {
  return lastPracticeDay !== today;
}
