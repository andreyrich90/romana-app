import { COURSE } from '../content/course';
import type { Exercise, Lesson } from '../content/types';
import type { Recall } from '../state/model';
import { isGraded } from './check';

export const PRACTICE_ID = 'practice';
const SIZE = 12;
const MAX_MATCH = 2;

export const exerciseKey = (lesson: Lesson, index: number) => lesson.keys?.[index] ?? `${lesson.id}#${index}`;

type Candidate = { key: string; ex: Exercise; rank: number };

/** Every graded exercise of the lessons already completed, with its repetition key. */
function candidates(completed: Record<string, unknown>): { key: string; ex: Exercise }[] {
  const out: { key: string; ex: Exercise }[] = [];
  for (const unit of COURSE) {
    for (const meta of unit.lessons) {
      if (!meta.lesson || !(meta.id in completed)) continue;
      meta.lesson.exercises.forEach((ex, i) => {
        if (isGraded(ex)) out.push({ key: `${meta.id}#${i}`, ex });
      });
    }
  }
  return out;
}

/**
 * How urgently an exercise needs practice; lower comes first. Exercises due today rank by
 * box (least known first) and then by past mistakes. Exercises answered before repetition
 * tracking existed have no record yet and count as due. Everything else only fills the
 * session up, in random order.
 */
function rank(recall: Recall | undefined, today: string, random: () => number): number {
  if (!recall) return 10 + random();
  if (recall.due <= today) return recall.box * 2 - Math.min(recall.misses, 5) * 0.3 + random() * 0.1;
  return 100 + random();
}

/** Exercises due for practice today. */
export function dueCount(completed: Record<string, unknown>, recall: Record<string, Recall>, today: string): number {
  return candidates(completed).filter(({ key }) => !recall[key] || recall[key].due <= today).length;
}

export function buildPractice(
  completed: Record<string, unknown>,
  recall: Record<string, Recall>,
  today: string,
  random: () => number = Math.random,
): Lesson | null {
  const ranked: Candidate[] = candidates(completed)
    .map((c) => ({ ...c, rank: rank(recall[c.key], today, random) }))
    .sort((a, b) => a.rank - b.rank);
  const picked: Candidate[] = [];
  let matches = 0;
  for (const c of ranked) {
    if (picked.length >= SIZE) break;
    if (c.ex.kind === 'match') {
      if (matches >= MAX_MATCH) continue;
      matches++;
    }
    picked.push(c);
  }
  if (!picked.length) return null;
  // Most urgent first would put all the hard ones together; mix them.
  for (let i = picked.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [picked[i], picked[j]] = [picked[j], picked[i]];
  }
  return {
    id: PRACTICE_ID,
    title: { ru: 'Тренировка', ua: 'Тренування' },
    words: [],
    exercises: picked.map((c) => c.ex),
    keys: picked.map((c) => c.key),
  };
}
