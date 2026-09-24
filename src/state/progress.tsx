import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

import type { Lang } from '../content/types';
import { UI } from '../i18n/ui';
import { supabase } from '../lib/supabase';
import { useAuth } from './auth';
import {
  applyAnswer,
  applyLessonDone,
  applyWallet,
  applyXp,
  furtherStart,
  initial,
  liveStreak,
  merge,
  sanitize,
  synced,
  type Progress,
} from './model';

/** Anyone who has already studied has, in effect, been placed: they never see the first-run questions. */
const hasStudied = (p: Pick<Progress, 'xp' | 'completed'>) => p.xp > 0 || Object.keys(p.completed).length > 0;

/**
 * Progress saved before the alphabet unit existed: the learner started at A1, so keep
 * everything from A1 lesson 1 open rather than sending them back to the letters.
 */
function migrate(p: Progress): Progress {
  if (p.onboarded || !hasStudied(p)) return p;
  return { ...p, onboarded: true, startAt: furtherStart(p.startAt, 'u1l1') };
}

const KEY = 'romana.progress.v1';

/** How long to wait after a change before saving it to the account, so a lesson's burst of updates is one request. */
const PUSH_DELAY_MS = 2000;

export type SyncState = 'off' | 'syncing' | 'saved' | 'error';

type Ctx = {
  ready: boolean;
  progress: Progress & { streak: number };
  t: (typeof UI)[Lang];
  /** Where the account copy stands; `off` for a guest. */
  sync: SyncState;
  setLang: (lang: Lang) => void;
  setWordBank: (on: boolean) => void;
  setDailyGoal: (goal: number) => void;
  /** A finished lesson (or practice, which earns XP but is not a course lesson). */
  finishSession: (id: string, xp: number, accuracy: number, practice?: boolean) => void;
  /** One graded answer, for spaced repetition. */
  recordAnswer: (key: string, ok: boolean) => void;
  /** First run done: start where the test (or the learner) chose, with the chosen daily goal. */
  completeOnboarding: (startAt: string | null, dailyGoal: number) => void;
  /** A retaken test: moves the start point forward only. */
  placeAt: (startAt: string | null) => void;
  /** Save a word or phrase to the wallet, or take it out. */
  setInWallet: (ro: string, on: boolean) => void;
};

const ProgressContext = createContext<Ctx | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { session } = useAuth();
  const userId = session?.user.id ?? null;

  const [progress, setProgress] = useState<Progress>(initial);
  const [ready, setReady] = useState(false);
  /** Sync state of one account; a different (or no) account reads as not yet synced. */
  const [status, setStatus] = useState<{ user: string; state: SyncState } | null>(null);
  const sync: SyncState = !userId || !supabase ? 'off' : status?.user === userId ? status.state : 'syncing';
  const latest = useRef(progress);
  useEffect(() => {
    latest.current = progress;
  }, [progress]);
  /** The account whose copy has been merged in; changes are pushed only after that. */
  const linked = useRef<string | null>(null);
  const previousUser = useRef<string | null>(null);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((raw) => {
        if (raw) setProgress(migrate({ ...initial, ...JSON.parse(raw) }));
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  const update = useCallback((fn: (p: Progress) => Progress) => {
    setProgress((prev) => {
      const next = fn(prev);
      latest.current = next;
      AsyncStorage.setItem(KEY, JSON.stringify(next)).catch(() => {});
      return next;
    });
  }, []);

  // Signing in: merge this device's progress with the account's, then keep them in step.
  // Signing out: the progress belonged to the account, so the device starts clean.
  useEffect(() => {
    if (!ready) return;
    const was = previousUser.current;
    previousUser.current = userId;
    if (!userId || !supabase) {
      linked.current = null;
      if (was && !userId) update((p) => ({ ...initial, lang: p.lang, wordBank: p.wordBank, onboarded: p.onboarded }));
      return;
    }
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase.from('progress').select('data').eq('user_id', userId).maybeSingle();
      if (cancelled) return;
      if (error) {
        setStatus({ user: userId, state: 'error' });
        return;
      }
      const merged = data ? merge(synced(latest.current), sanitize(data.data)) : synced(latest.current);
      // An account that has studied elsewhere needs no first-run questions on this device.
      update((p) => ({ ...p, ...merged, onboarded: p.onboarded || hasStudied(merged) || merged.startAt !== null }));
      const { error: saveError } = await supabase
        .from('progress')
        .upsert({ user_id: userId, data: merged, updated_at: new Date().toISOString() });
      if (cancelled) return;
      linked.current = userId;
      setStatus({ user: userId, state: saveError ? 'error' : 'saved' });
    })();
    return () => {
      cancelled = true;
    };
  }, [ready, userId, update]);

  // Every later change goes to the account too.
  useEffect(() => {
    if (!supabase || !userId || linked.current !== userId) return;
    const id = setTimeout(async () => {
      setStatus({ user: userId, state: 'syncing' });
      const { error } = await supabase!
        .from('progress')
        .upsert({ user_id: userId, data: synced(latest.current), updated_at: new Date().toISOString() });
      setStatus({ user: userId, state: error ? 'error' : 'saved' });
    }, PUSH_DELAY_MS);
    return () => clearTimeout(id);
  }, [
    progress.xp,
    progress.streak,
    progress.lastDay,
    progress.freezes,
    progress.completed,
    progress.recall,
    progress.xpByDay,
    progress.practiceCount,
    progress.startAt,
    progress.wallet,
    userId,
  ]);

  const setLang = useCallback((lang: Lang) => update((p) => ({ ...p, lang })), [update]);
  const setWordBank = useCallback((wordBank: boolean) => update((p) => ({ ...p, wordBank })), [update]);

  const setDailyGoal = useCallback((dailyGoal: number) => update((p) => ({ ...p, dailyGoal })), [update]);

  const finishSession = useCallback(
    (id: string, xp: number, accuracy: number, practice = false) =>
      update((p) => {
        const withXp = applyXp(p, xp);
        return practice
          ? { ...withXp, practiceCount: withXp.practiceCount + 1 }
          : applyLessonDone(withXp, id, accuracy);
      }),
    [update],
  );

  // Exercises without a key (the wallet session) are not tracked for spaced repetition.
  const recordAnswer = useCallback(
    (key: string, ok: boolean) => {
      if (key) update((p) => applyAnswer(p, key, ok));
    },
    [update],
  );

  const completeOnboarding = useCallback(
    (startAt: string | null, dailyGoal: number) =>
      update((p) => ({ ...p, startAt: furtherStart(p.startAt, startAt), dailyGoal, onboarded: true })),
    [update],
  );

  const setInWallet = useCallback(
    (ro: string, on: boolean) => update((p) => applyWallet(p, ro, on)),
    [update],
  );

  const placeAt = useCallback(
    (startAt: string | null) => update((p) => ({ ...p, startAt: furtherStart(p.startAt, startAt) })),
    [update],
  );

  const value = useMemo<Ctx>(
    () => ({
      ready,
      progress: { ...progress, streak: liveStreak(progress) },
      t: UI[progress.lang],
      sync,
      setLang,
      setWordBank,
      setDailyGoal,
      finishSession,
      recordAnswer,
      completeOnboarding,
      placeAt,
      setInWallet,
    }),
    [
      ready,
      progress,
      sync,
      setLang,
      setWordBank,
      setDailyGoal,
      finishSession,
      recordAnswer,
      completeOnboarding,
      placeAt,
      setInWallet,
    ],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): Ctx {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}
