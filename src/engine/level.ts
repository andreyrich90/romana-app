/** XP needed to reach each level; after the table every level takes another 1000. */
const THRESHOLDS = [0, 50, 120, 220, 350, 520, 750, 1000, 1300, 1700, 2200, 2800, 3500, 4300, 5200];

export type Level = { level: number; from: number; to: number };

export function levelOf(xp: number): Level {
  let i = 0;
  while (i + 1 < THRESHOLDS.length && xp >= THRESHOLDS[i + 1]) i++;
  if (i < THRESHOLDS.length - 1) return { level: i + 1, from: THRESHOLDS[i], to: THRESHOLDS[i + 1] };
  const last = THRESHOLDS[THRESHOLDS.length - 1];
  const extra = Math.floor((xp - last) / 1000);
  return { level: THRESHOLDS.length + extra, from: last + extra * 1000, to: last + (extra + 1) * 1000 };
}
