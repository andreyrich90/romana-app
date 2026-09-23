import type { Exercise, Lesson } from '../content/types';
import { isGraded, type Verdict } from './check';

export const MAX_HEARTS = 5;

export type Step = { ex: Exercise; id: number; retry: boolean };

export type Session = {
  queue: Step[];
  pos: number;
  hearts: number;
  /** Steps finished correctly; the progress bar is done / total. */
  done: number;
  total: number;
  /** Ids of graded exercises answered wrong at least once. */
  missed: number[];
  graded: number;
  phase: 'answering' | 'feedback';
  verdict: Verdict | null;
  startedAt: number;
};

export type Action =
  | { type: 'verdict'; verdict: Verdict }
  /** A matching exercise finished; `missed` if any pair was tried wrong on the way. */
  | { type: 'matched'; missed: boolean }
  | { type: 'next' };

export function startSession(lesson: Lesson): Session {
  return {
    queue: lesson.exercises.map((ex, id) => ({ ex, id, retry: false })),
    pos: 0,
    hearts: MAX_HEARTS,
    done: 0,
    total: lesson.exercises.length,
    missed: [],
    graded: lesson.exercises.filter(isGraded).length,
    phase: 'answering',
    verdict: null,
    startedAt: Date.now(),
  };
}

export function current(s: Session): Step | undefined {
  return s.queue[s.pos];
}

export function isFinished(s: Session): boolean {
  return s.pos >= s.queue.length;
}

export function isOut(s: Session): boolean {
  return s.hearts <= 0;
}

/**
 * A wrong answer costs a heart and sends the exercise to the end of the queue,
 * so the lesson ends only when everything has been answered right once.
 */
export function reduce(s: Session, a: Action): Session {
  const step = current(s);
  if (!step) return s;
  switch (a.type) {
    case 'verdict': {
      if (a.verdict.ok) return { ...s, done: s.done + 1, phase: 'feedback', verdict: a.verdict };
      return {
        ...s,
        hearts: s.hearts - 1,
        missed: s.missed.includes(step.id) ? s.missed : [...s.missed, step.id],
        queue: [...s.queue, { ...step, retry: true }],
        phase: 'feedback',
        verdict: a.verdict,
      };
    }
    case 'matched':
      return {
        ...s,
        done: s.done + 1,
        missed: a.missed && !s.missed.includes(step.id) ? [...s.missed, step.id] : s.missed,
        phase: 'feedback',
        verdict: { ok: true, answer: '' },
      };
    case 'next':
      // Intro and tip cards have no feedback phase: continuing counts them as done.
      return {
        ...s,
        done: s.phase === 'answering' ? s.done + 1 : s.done,
        pos: s.pos + 1,
        phase: 'answering',
        verdict: null,
      };
  }
}

export type Result = { xp: number; accuracy: number; seconds: number; perfect: boolean };

export function result(s: Session): Result {
  const perfect = s.missed.length === 0;
  return {
    xp: 10 + (perfect ? 5 : 0) + s.hearts,
    accuracy: s.graded ? Math.round((100 * (s.graded - s.missed.length)) / s.graded) : 100,
    seconds: Math.round((Date.now() - s.startedAt) / 1000),
    perfect,
  };
}
