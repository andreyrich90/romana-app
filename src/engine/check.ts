import type { Exercise, Lang } from '../content/types';

export type Answer = string | string[];

export type Verdict = {
  ok: boolean;
  /** Accepted, but the learner should see the correct spelling. */
  note?: 'diacritics' | 'typo';
  /** The correct answer as it should be displayed. */
  answer: string;
  /** Translation of the answer, when the prompt did not already show it. */
  meaning?: string;
  /** Romanian text to speak when the verdict is shown. */
  say?: string;
};

/** Lower-case, unify legacy cedilla letters (ş ţ) with comma-below ones (ș ț), drop punctuation. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/ş/g, 'ș')
    .replace(/ţ/g, 'ț')
    .replace(/[.,!?;:«»"'…]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Strip diacritics: ă â î ș ț → a a i s t. */
export function bare(s: string): string {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

export function levenshtein(a: string, b: string): number {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return row[b.length];
}

/**
 * Typed answers forgive what a phone keyboard makes hard: missing diacritics are
 * accepted outright, and one slip is accepted in answers longer than six letters.
 * Both still show the correct spelling.
 */
export function checkTyped(input: string, answers: string[]): Pick<Verdict, 'ok' | 'note'> {
  const v = normalize(input);
  let best: Pick<Verdict, 'ok' | 'note'> = { ok: false };
  for (const a of answers) {
    const n = normalize(a);
    if (v === n) return { ok: true };
    if (bare(v) === bare(n)) best = { ok: true, note: 'diacritics' };
    else if (!best.ok && n.length > 6 && levenshtein(bare(v), bare(n)) <= 1) best = { ok: true, note: 'typo' };
  }
  return best;
}

export function check(ex: Exercise, answer: Answer, lang: Lang): Verdict {
  switch (ex.kind) {
    case 'pickNative':
      return { ok: answer === ex.correct[lang], answer: ex.correct[lang] };
    case 'pickRo':
      return { ok: answer === ex.correct, answer: ex.correct, say: ex.correct };
    case 'listen':
      return { ok: answer === ex.ro, answer: ex.ro, meaning: ex.tr[lang] };
    case 'tiles': {
      const said = Array.isArray(answer) ? answer.join(' ') : answer;
      const accepted = [ex.words.join(' '), ...(ex.also ?? [])].map(normalize);
      return { ok: accepted.includes(normalize(said)), answer: ex.shown, say: ex.shown };
    }
    case 'type':
      return { ...checkTyped(String(answer), ex.answers), answer: ex.shown, say: ex.shown };
    default:
      // intro, tip and match are not checked against an answer.
      return { ok: true, answer: '' };
  }
}

/** What to reveal when the learner skips. */
export function reveal(ex: Exercise, lang: Lang): Verdict {
  return { ...check(ex, [], lang), ok: false, note: undefined };
}

export function isGraded(ex: Exercise): boolean {
  return ex.kind !== 'intro' && ex.kind !== 'tip';
}
