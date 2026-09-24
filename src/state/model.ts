import { lessonIndex } from '../content/course';
import type { Lang } from '../content/types';

export type LessonRecord = { bestAccuracy: number; times: number };

/**
 * One exercise's place in spaced repetition (Leitner boxes). A right answer moves it up
 * a box and further into the future; a wrong one sends it back to box 0, due today.
 */
export type Recall = {
  box: number;
  /** YYYY-MM-DD from which the exercise is due for practice. */
  due: string;
  misses: number;
  /** Epoch ms of the last answer — decides which copy wins when two devices merge. */
  t: number;
};

export type Progress = {
  lang: Lang;
  xp: number;
  /** Days in a row the daily goal was met. */
  streak: number;
  /** Local date (YYYY-MM-DD) the daily goal was last met; drives the streak. */
  lastDay: string | null;
  bestStreak: number;
  /** Streak freezes in reserve: each covers one missed day. One is earned every 7 days, at most 2 kept. */
  freezes: number;
  /** XP earned per local day, last 90 days — the daily goal and the week chart read it. */
  xpByDay: Record<string, number>;
  completed: Record<string, LessonRecord>;
  /** Spaced-repetition state per exercise, keyed `lessonId#index`. */
  recall: Record<string, Recall>;
  practiceCount: number;
  /** XP a day that counts as a day of study. */
  dailyGoal: number;
  /** Build typed answers from word tiles instead of the keyboard. Remembered across lessons. */
  wordBank: boolean;
  /**
   * Where the placement test put the learner (a lesson id): it and everything before it
   * are open. `null` starts at the very beginning, the alphabet.
   */
  startAt: string | null;
  /** The first-run questions (level, test, goal) have been answered on this device. */
  onboarded: boolean;
};

/** What is stored in the account. Interface language, input mode and the goal stay per device. */
export type Synced = Omit<Progress, 'lang' | 'wordBank' | 'dailyGoal' | 'onboarded'>;

export const GOALS = [10, 20, 30, 50] as const;
export const MAX_FREEZES = 2;
/** Days until an exercise in box n is due again. */
export const INTERVALS = [0, 1, 3, 7, 14, 30];
const KEEP_DAYS = 90;

export const initial: Progress = {
  lang: 'ru',
  xp: 0,
  streak: 0,
  lastDay: null,
  bestStreak: 0,
  freezes: 0,
  xpByDay: {},
  completed: {},
  recall: {},
  practiceCount: 0,
  dailyGoal: 20,
  wordBank: false,
  startAt: null,
  onboarded: false,
};

/** The further of two start points; a test can move the learner forward, never back. */
export function furtherStart(a: string | null, b: string | null): string | null {
  return lessonIndex(b) > lessonIndex(a) ? b : a;
}

export function day(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function parseDay(s: string): Date {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function addDays(s: string, n: number): string {
  const d = parseDay(s);
  d.setDate(d.getDate() + n);
  return day(d);
}

/** Whole days from `a` to `b` (both YYYY-MM-DD). */
export function daysBetween(a: string, b: string): number {
  return Math.round((parseDay(b).getTime() - parseDay(a).getTime()) / 86_400_000);
}

export function todayXp(p: Pick<Progress, 'xpByDay'>, now = new Date()): number {
  return p.xpByDay[day(now)] ?? 0;
}

/**
 * The streak as it stands today. It survives a gap of missed days as long as there are
 * enough freezes to cover them; the freezes are only spent when the next goal is met.
 */
export function liveStreak(p: Pick<Progress, 'streak' | 'lastDay' | 'freezes'>, now = new Date()): number {
  if (!p.lastDay) return 0;
  const missed = daysBetween(p.lastDay, day(now)) - 1;
  return missed <= 0 || missed <= p.freezes ? p.streak : 0;
}

/** Freezes that would be spent to keep the streak alive today (0 when none are needed or the streak is lost). */
export function freezesNeeded(p: Pick<Progress, 'lastDay' | 'freezes'>, now = new Date()): number {
  if (!p.lastDay) return 0;
  const missed = daysBetween(p.lastDay, day(now)) - 1;
  return missed > 0 && missed <= p.freezes ? missed : 0;
}

function prune(xpByDay: Record<string, number>, today: string): Record<string, number> {
  const out: Record<string, number> = {};
  for (const [d, v] of Object.entries(xpByDay)) if (daysBetween(d, today) < KEEP_DAYS) out[d] = v;
  return out;
}

/**
 * A finished lesson or practice: add XP to today, and when today's total first reaches
 * the goal, extend the streak (spending freezes for missed days if needed).
 */
export function applyXp(p: Progress, xp: number, now = new Date()): Progress {
  const today = day(now);
  const before = p.xpByDay[today] ?? 0;
  const after = before + xp;
  let { streak, lastDay, freezes, bestStreak } = p;
  if (after >= p.dailyGoal && lastDay !== today) {
    const spend = freezesNeeded(p, now);
    const alive = liveStreak(p, now) > 0;
    streak = alive ? streak + 1 : 1;
    freezes -= spend;
    if (streak % 7 === 0) freezes = Math.min(MAX_FREEZES, freezes + 1);
    lastDay = today;
    bestStreak = Math.max(bestStreak, streak);
  }
  return {
    ...p,
    xp: p.xp + xp,
    streak,
    lastDay,
    freezes,
    bestStreak,
    xpByDay: prune({ ...p.xpByDay, [today]: after }, today),
  };
}

export function applyLessonDone(p: Progress, id: string, accuracy: number): Progress {
  const prev = p.completed[id];
  return {
    ...p,
    completed: {
      ...p.completed,
      [id]: { bestAccuracy: Math.max(prev?.bestAccuracy ?? 0, accuracy), times: (prev?.times ?? 0) + 1 },
    },
  };
}

export function applyAnswer(p: Progress, key: string, ok: boolean, now = new Date()): Progress {
  const today = day(now);
  const prev = p.recall[key];
  const box = ok ? Math.min((prev?.box ?? 0) + 1, INTERVALS.length - 1) : 0;
  return {
    ...p,
    recall: {
      ...p.recall,
      [key]: {
        box,
        due: addDays(today, INTERVALS[box]),
        misses: (prev?.misses ?? 0) + (ok ? 0 : 1),
        t: now.getTime(),
      },
    },
  };
}

export function synced(p: Progress): Synced {
  const { lang: _l, wordBank: _w, dailyGoal: _g, onboarded: _o, ...rest } = p;
  return rest;
}

const num = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) && v >= 0 ? v : 0);
const isDay = (v: unknown): v is string => typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v);
const obj = (v: unknown) => (v && typeof v === 'object' ? (v as Record<string, unknown>) : {});

/** Account data comes from the network: keep only well-formed fields. */
export function sanitize(raw: unknown): Synced {
  const r = obj(raw);
  const completed: Record<string, LessonRecord> = {};
  for (const [id, rec] of Object.entries(obj(r.completed))) {
    const x = obj(rec);
    completed[id] = { bestAccuracy: Math.min(100, num(x.bestAccuracy)), times: num(x.times) };
  }
  const xpByDay: Record<string, number> = {};
  for (const [d, v] of Object.entries(obj(r.xpByDay))) if (isDay(d)) xpByDay[d] = num(v);
  const recall: Record<string, Recall> = {};
  for (const [k, v] of Object.entries(obj(r.recall))) {
    const x = obj(v);
    if (isDay(x.due)) {
      recall[k] = { box: Math.min(INTERVALS.length - 1, num(x.box)), due: x.due, misses: num(x.misses), t: num(x.t) };
    }
  }
  return {
    xp: num(r.xp),
    streak: num(r.streak),
    lastDay: isDay(r.lastDay) ? r.lastDay : null,
    bestStreak: num(r.bestStreak),
    freezes: Math.min(MAX_FREEZES, num(r.freezes)),
    xpByDay,
    completed,
    recall,
    practiceCount: num(r.practiceCount),
    startAt: typeof r.startAt === 'string' && lessonIndex(r.startAt) >= 0 ? r.startAt : null,
  };
}

/**
 * Combine two copies of the same learner's progress — this device and the account.
 * Every field takes the larger (or later) value, so the merge can run any number of
 * times, in either order, and never loses a completed lesson. The price: XP earned as a
 * guest on a second device is not added on top of the account's XP, only compared with it.
 */
export function merge(a: Synced, b: Synced): Synced {
  const completed: Record<string, LessonRecord> = { ...a.completed };
  for (const [id, rec] of Object.entries(b.completed)) {
    const mine = completed[id];
    completed[id] = mine
      ? { bestAccuracy: Math.max(mine.bestAccuracy, rec.bestAccuracy), times: Math.max(mine.times, rec.times) }
      : rec;
  }
  const xpByDay: Record<string, number> = { ...a.xpByDay };
  for (const [d, v] of Object.entries(b.xpByDay)) xpByDay[d] = Math.max(xpByDay[d] ?? 0, v);
  const recall: Record<string, Recall> = { ...a.recall };
  for (const [k, v] of Object.entries(b.recall)) {
    const mine = recall[k];
    recall[k] = !mine || v.t > mine.t || (v.t === mine.t && v.box > mine.box) ? v : mine;
  }
  const la = a.lastDay ?? '';
  const lb = b.lastDay ?? '';
  const later = la === lb ? null : la > lb ? a : b;
  const [lastDay, streak, freezes] = later
    ? [later.lastDay, later.streak, later.freezes]
    : [a.lastDay, Math.max(a.streak, b.streak), Math.max(a.freezes, b.freezes)];
  return {
    xp: Math.max(a.xp, b.xp),
    streak,
    lastDay,
    bestStreak: Math.max(a.bestStreak, b.bestStreak, streak),
    freezes,
    xpByDay,
    completed,
    recall,
    practiceCount: Math.max(a.practiceCount, b.practiceCount),
    startAt: furtherStart(a.startAt, b.startAt),
  };
}
