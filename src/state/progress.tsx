import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import type { Lang } from '../content/types';
import { UI } from '../i18n/ui';

const KEY = 'romana.progress.v1';

type LessonRecord = { bestAccuracy: number; times: number };

type Progress = {
  lang: Lang;
  xp: number;
  streak: number;
  /** Local date (YYYY-MM-DD) of the last completed lesson; drives the streak. */
  lastDay: string | null;
  completed: Record<string, LessonRecord>;
  /** Build typed answers from word tiles instead of the keyboard. Remembered across lessons. */
  wordBank: boolean;
};

const initial: Progress = { lang: 'ru', xp: 0, streak: 0, lastDay: null, completed: {}, wordBank: false };

function day(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

/** The streak survives only if the previous lesson was today or yesterday. */
function liveStreak(p: Progress, now = new Date()): number {
  if (!p.lastDay) return 0;
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  return p.lastDay === day(now) || p.lastDay === day(yesterday) ? p.streak : 0;
}

type Ctx = {
  ready: boolean;
  progress: Progress & { streak: number };
  t: (typeof UI)[Lang];
  setLang: (lang: Lang) => void;
  setWordBank: (on: boolean) => void;
  completeLesson: (id: string, xp: number, accuracy: number) => void;
};

const ProgressContext = createContext<Ctx | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress>(initial);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((raw) => {
        if (raw) setProgress({ ...initial, ...JSON.parse(raw) });
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  const update = useCallback((fn: (p: Progress) => Progress) => {
    setProgress((prev) => {
      const next = fn(prev);
      AsyncStorage.setItem(KEY, JSON.stringify(next)).catch(() => {});
      return next;
    });
  }, []);

  const setLang = useCallback((lang: Lang) => update((p) => ({ ...p, lang })), [update]);
  const setWordBank = useCallback((wordBank: boolean) => update((p) => ({ ...p, wordBank })), [update]);

  const completeLesson = useCallback(
    (id: string, xp: number, accuracy: number) =>
      update((p) => {
        const today = day(new Date());
        const streak = p.lastDay === today ? p.streak : liveStreak(p) + 1;
        const prev = p.completed[id];
        return {
          ...p,
          xp: p.xp + xp,
          streak,
          lastDay: today,
          completed: {
            ...p.completed,
            [id]: { bestAccuracy: Math.max(prev?.bestAccuracy ?? 0, accuracy), times: (prev?.times ?? 0) + 1 },
          },
        };
      }),
    [update],
  );

  const value = useMemo<Ctx>(
    () => ({
      ready,
      progress: { ...progress, streak: liveStreak(progress) },
      t: UI[progress.lang],
      setLang,
      setWordBank,
      completeLesson,
    }),
    [ready, progress, setLang, setWordBank, completeLesson],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): Ctx {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}
