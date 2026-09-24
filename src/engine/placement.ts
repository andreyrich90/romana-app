import { COURSE, unitStart } from '../content/course';
import type { Exercise } from '../content/types';

/**
 * The placement test walks the course in stages of two units. Each stage asks
 * PER_STAGE real questions from those units; PASS right answers mean the learner
 * already knows them. It climbs from the starting stage until a stage fails, or,
 * when the very first one fails, steps down until one passes.
 */
export const STAGES: [string, string][] = [
  ['u1', 'u2'],
  ['u3', 'u4'],
  ['u5', 'u6'],
  ['u7', 'u8'],
  ['u9', 'u10'],
  ['u11', 'u12'],
  ['u13', 'u14'],
  ['u15', 'u16'],
  ['u17', 'u18'],
];
export const PER_STAGE = 3;
export const PASS = 2;

type Choice = Extract<Exercise, { kind: 'pickNative' | 'pickRo' }>;

function shuffle<T>(a: T[], random: () => number): T[] {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

function choicesOf(unitId: string): Choice[] {
  const unit = COURSE.find((u) => u.id === unitId);
  return (unit?.lessons ?? [])
    .flatMap((l) => l.lesson?.exercises ?? [])
    .filter((e): e is Choice => e.kind === 'pickNative' || e.kind === 'pickRo');
}

/** Questions for a stage (1-based): one from each unit, the rest from either. */
export function stageQuestions(stage: number, random: () => number = Math.random): Choice[] {
  const [a, b] = STAGES[stage - 1];
  const fromA = shuffle(choicesOf(a), random);
  const fromB = shuffle(choicesOf(b), random);
  const picked = [fromA[0], fromB[0]];
  const rest = shuffle([...fromA.slice(1), ...fromB.slice(1)], random);
  return shuffle([...picked, ...rest.slice(0, PER_STAGE - picked.length)], random);
}

/** Stage results so far: stage number → passed. */
export type Results = Record<number, boolean>;

/** The next stage to test, or `null` when the placement is settled. */
export function nextStage(results: Results, first: number): number | null {
  const tested = Object.keys(results).map(Number);
  if (tested.length === 0) return first;
  const passed = tested.filter((s) => results[s]);
  const failed = tested.filter((s) => !results[s]);
  if (failed.length === 0) {
    const top = Math.max(...passed);
    return top < STAGES.length ? top + 1 : null;
  }
  if (passed.length > 0) return null;
  // Only failures so far: step down until something passes.
  const low = Math.min(...failed);
  return low > 1 ? low - 1 : null;
}

/** Where to start: the unit after the highest stage passed. Nothing passed → A1 unit 1. */
export function placement(results: Results): string {
  const passed = Object.keys(results)
    .map(Number)
    .filter((s) => results[s]);
  if (passed.length === 0) return unitStart('u1');
  const top = Math.max(...passed);
  return unitStart(top < STAGES.length ? STAGES[top][0] : STAGES[STAGES.length - 1][1]);
}
