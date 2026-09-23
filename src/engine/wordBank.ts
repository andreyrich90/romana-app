import type { Exercise, Lesson } from '../content/types';
import { normalize } from './check';

const PUNCT = /^[.,!?;:«»"…—-]+|[.,!?;:«»"…—-]+$/g;

/** The words of a sentence as tiles: "Am douăzeci de ani." → ["Am", "douăzeci", "de", "ani"]. */
export function tokens(sentence: string): string[] {
  return sentence
    .split(/\s+/)
    .map((w) => w.replace(PUNCT, ''))
    .filter(Boolean);
}

function romanianPhrases(ex: Exercise): string[] {
  switch (ex.kind) {
    case 'intro':
      return [ex.ro];
    case 'tip':
      return ex.rows.map((r) => r.ro);
    case 'pickNative':
      return [ex.q];
    case 'pickRo':
      return [ex.correct, ...ex.wrong];
    case 'listen':
      return [ex.ro, ...ex.wrong];
    case 'tiles':
      return [ex.shown, ...ex.extra];
    case 'match':
      return ex.pairs.map((p) => p.ro);
    case 'type':
      return [ex.shown];
  }
}

/**
 * Every Romanian word the lesson uses, to draw distractors from. A phrase's first
 * word is lower-cased so a distractor's capital letter does not give away that it
 * cannot start the answer; words that are capitalised mid-phrase (România) keep it.
 */
export function lessonPool(lesson: Lesson): string[] {
  const seen = new Map<string, string>();
  for (const ex of lesson.exercises) {
    for (const phrase of romanianPhrases(ex)) {
      tokens(phrase).forEach((w, i) => {
        if (/\d/.test(w)) return;
        const key = normalize(w);
        if (!key) return;
        const form = i === 0 ? w.toLowerCase() : w;
        if (!seen.has(key) || i > 0) seen.set(key, form);
      });
    }
  }
  return [...seen.values()];
}

/** The answer's words plus `count` distractors from the pool that are not in the answer. */
export function bankFor(answer: string, pool: string[], count = 3, random = Math.random): string[] {
  const words = tokens(answer);
  const used = new Set(words.map(normalize));
  const candidates = pool.filter((w) => !used.has(normalize(w)));
  const picked: string[] = [];
  while (picked.length < count && candidates.length) {
    picked.push(candidates.splice(Math.floor(random() * candidates.length), 1)[0]);
  }
  return [...words, ...picked];
}
