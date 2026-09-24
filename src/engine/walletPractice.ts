import { GLOSSARY } from '../content/glossary';
import type { Bi, Exercise, Lesson, Word } from '../content/types';
import { gloss, phraseInfo } from './phrases';

export const WALLET_ID = 'wallet';
/** Words per session; each gets one to three exercises, plus a matching round. */
const WORDS = 8;

/** The first sense of a glossary meaning, without its asides: «у меня есть; …» → «у меня есть». */
const short = (s: string) =>
  s
    .split(';')[0]
    .replace(/\s*\([^)]*\)/g, '')
    .trim();

/** A saved word with a meaning in both languages, or null if the course has none for it. */
export function walletWord(ro: string): Word | null {
  const g = gloss(ro);
  if (g && g[1] !== 'syl') return { ro, tr: { ru: short(g[2]), ua: short(g[3]) } };
  const tr = phraseInfo(ro).tr;
  return tr ? { ro, tr } : null;
}

function shuffle<T>(a: T[], random: () => number): T[] {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

/** Distractors: other saved words first, then glossary words, never repeating a text. */
function others(target: Word, saved: Word[], random: () => number): Word[] {
  const fill = shuffle(
    Object.keys(GLOSSARY)
      .map(walletWord)
      .filter((w): w is Word => !!w && !w.ro.includes('-')),
    random,
  );
  const out: Word[] = [];
  const seenRo = new Set([target.ro.toLowerCase()]);
  const seenTr = new Set([target.tr.ru, target.tr.ua]);
  for (const w of [...shuffle(saved, random), ...fill]) {
    if (seenRo.has(w.ro.toLowerCase()) || seenTr.has(w.tr.ru) || seenTr.has(w.tr.ua)) continue;
    seenRo.add(w.ro.toLowerCase());
    seenTr.add(w.tr.ru);
    seenTr.add(w.tr.ua);
    out.push(w);
    if (out.length === 3) break;
  }
  return out;
}

/**
 * A session over the wallet: up to WORDS saved words picked at random, as translate,
 * pick the Romanian and listen in turn (a small wallet repeats each word in several of
 * these), then one matching round. `null` when
 * nothing saved has a meaning to test.
 */
export function buildWalletPractice(savedRo: string[], random: () => number = Math.random): Lesson | null {
  const saved = savedRo.map(walletWord).filter((w): w is Word => !!w);
  if (saved.length === 0) return null;
  const chosen = shuffle(saved, random).slice(0, WORDS);
  // A small wallet still makes a real session: each word comes back in more forms.
  const rounds = chosen.length <= 2 ? 3 : chosen.length <= 4 ? 2 : 1;
  const plan = Array.from({ length: rounds }, (_, r) => chosen.map((w, i) => ({ w, kind: (i + r) % 3 }))).flat();
  const exercises: Exercise[] = plan.map(({ w, kind }) => {
    const wrong = others(w, saved, random);
    if (kind === 0) return { kind: 'pickNative', q: w.ro, correct: w.tr, wrong: wrong.map((o) => o.tr) };
    if (kind === 1) return { kind: 'pickRo', q: w.tr, correct: w.ro, wrong: wrong.map((o) => o.ro) };
    return { kind: 'listen', ro: w.ro, tr: w.tr, wrong: wrong.map((o) => o.ro) };
  });
  // A matching round needs pairs whose translations differ in both languages.
  const pairs: Word[] = [];
  const seen = new Set<string>();
  for (const w of chosen) {
    if (seen.has(w.tr.ru) || seen.has(w.tr.ua)) continue;
    seen.add(w.tr.ru);
    seen.add(w.tr.ua);
    pairs.push(w);
    if (pairs.length === 5) break;
  }
  if (pairs.length >= 3) exercises.push({ kind: 'match', pairs });
  const title: Bi = { ru: 'Слова из кошелька', ua: 'Слова з гаманця' };
  return {
    id: WALLET_ID,
    title,
    // No spaced-repetition keys: these are not course exercises.
    keys: exercises.map(() => ''),
    words: chosen,
    exercises,
  };
}
