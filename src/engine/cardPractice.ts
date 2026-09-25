import { findCard, type LearnCard } from '../content/cards';
import type { Bi, Exercise, Lesson, Word } from '../content/types';

/** Card sessions play in the lesson screen under `card-<id>`. */
export const CARD_PREFIX = 'card-';
export const isCardSession = (id: string) => id.startsWith(CARD_PREFIX);
export const cardSessionId = (cardId: string) => CARD_PREFIX + cardId;

function shuffle<T>(a: T[], random: () => number): T[] {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

/** Three other translations from the same card, none equal to the answer in either language. */
function wrongFor(target: Word, pool: Word[], random: () => number): Bi[] {
  const seen = new Set([target.tr.ru, target.tr.ua]);
  const out: Bi[] = [];
  for (const w of shuffle(pool, random)) {
    if (seen.has(w.tr.ru) || seen.has(w.tr.ua)) continue;
    seen.add(w.tr.ru);
    seen.add(w.tr.ua);
    out.push(w.tr);
    if (out.length === 3) break;
  }
  return out;
}

/**
 * A short session over one card: its examples as "pick the translation", its expressions
 * as a matching round, then its own "how do you say it" tasks typed in. Nothing here is a
 * course exercise, so none of it enters spaced repetition.
 */
export function buildCardPractice(card: LearnCard, random: () => number = Math.random): Lesson {
  const pool = [...card.examples, ...card.expressions];
  const exercises: Exercise[] = [];
  for (const ex of shuffle(card.examples, random).slice(0, 3)) {
    const wrong = wrongFor(ex, pool, random);
    if (wrong.length === 3) exercises.push({ kind: 'pickNative', q: ex.ro, correct: ex.tr, wrong });
  }
  const pairs: Word[] = [];
  const seen = new Set<string>();
  for (const w of card.expressions) {
    if (seen.has(w.tr.ru) || seen.has(w.tr.ua) || seen.has(w.ro)) continue;
    seen.add(w.tr.ru);
    seen.add(w.tr.ua);
    seen.add(w.ro);
    pairs.push(w);
    if (pairs.length === 5) break;
  }
  if (pairs.length >= 3) exercises.push({ kind: 'match', pairs });
  for (const p of card.practice) exercises.push({ kind: 'type', q: p.q, answers: p.answers, shown: p.shown });
  return {
    id: cardSessionId(card.id),
    title: card.tr,
    keys: exercises.map(() => ''),
    words: [{ ro: card.ro, tr: card.tr }, ...card.expressions.slice(0, 3)],
    exercises,
  };
}

export function cardSession(id: string, random: () => number = Math.random): Lesson | null {
  const card = findCard(id.slice(CARD_PREFIX.length));
  return card ? buildCardPractice(card, random) : null;
}
