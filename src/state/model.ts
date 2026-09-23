import type { Lang } from '../content/types';

export type LessonRecord = { bestAccuracy: number; times: number };

export type Progress = {
  lang: Lang;
  xp: number;
  streak: number;
  /** Local date (YYYY-MM-DD) of the last completed lesson; drives the streak. */
  lastDay: string | null;
  completed: Record<string, LessonRecord>;
  /** Build typed answers from word tiles instead of the keyboard. Remembered across lessons. */
  wordBank: boolean;
};

/** What is stored in the account. Interface language and input mode stay per device. */
export type Synced = Pick<Progress, 'xp' | 'streak' | 'lastDay' | 'completed'>;

export const initial: Progress = { lang: 'ru', xp: 0, streak: 0, lastDay: null, completed: {}, wordBank: false };

export function day(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

/** The streak survives only if the previous lesson was today or yesterday. */
export function liveStreak(p: Pick<Progress, 'streak' | 'lastDay'>, now = new Date()): number {
  if (!p.lastDay) return 0;
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  return p.lastDay === day(now) || p.lastDay === day(yesterday) ? p.streak : 0;
}

export function synced(p: Progress): Synced {
  return { xp: p.xp, streak: p.streak, lastDay: p.lastDay, completed: p.completed };
}

const num = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) && v >= 0 ? v : 0);

/** Account data comes from the network: keep only well-formed fields. */
export function sanitize(raw: unknown): Synced {
  const r = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
  const completed: Record<string, LessonRecord> = {};
  if (r.completed && typeof r.completed === 'object') {
    for (const [id, rec] of Object.entries(r.completed as Record<string, unknown>)) {
      const x = (rec && typeof rec === 'object' ? rec : {}) as Record<string, unknown>;
      completed[id] = { bestAccuracy: Math.min(100, num(x.bestAccuracy)), times: num(x.times) };
    }
  }
  const lastDay = typeof r.lastDay === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(r.lastDay) ? r.lastDay : null;
  return { xp: num(r.xp), streak: num(r.streak), lastDay, completed };
}

/**
 * Combine two copies of the same learner's progress — this device and the account.
 * Every field takes the larger value, so the merge can run any number of times, in
 * either order, and never loses a completed lesson. The price: XP earned as a guest on
 * a second device is not added on top of the account's XP, only compared with it.
 */
export function merge(a: Synced, b: Synced): Synced {
  const completed: Record<string, LessonRecord> = { ...a.completed };
  for (const [id, rec] of Object.entries(b.completed)) {
    const mine = completed[id];
    completed[id] = mine
      ? { bestAccuracy: Math.max(mine.bestAccuracy, rec.bestAccuracy), times: Math.max(mine.times, rec.times) }
      : rec;
  }
  const la = a.lastDay ?? '';
  const lb = b.lastDay ?? '';
  const [lastDay, streak] =
    la === lb ? [a.lastDay, Math.max(a.streak, b.streak)] : la > lb ? [a.lastDay, a.streak] : [b.lastDay, b.streak];
  return { xp: Math.max(a.xp, b.xp), streak, lastDay, completed };
}
