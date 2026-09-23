import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

import type { Lang } from '../content/types';
import { UI } from '../i18n/ui';
import { supabase } from '../lib/supabase';
import { useAuth } from './auth';
import { day, initial, liveStreak, merge, sanitize, synced, type Progress } from './model';

const KEY = 'romana.progress.v1';

/** How long to wait after a change before saving it to the account, so a lesson's burst of updates is one request. */
const PUSH_DELAY_MS = 800;

export type SyncState = 'off' | 'syncing' | 'saved' | 'error';

type Ctx = {
  ready: boolean;
  progress: Progress & { streak: number };
  t: (typeof UI)[Lang];
  /** Where the account copy stands; `off` for a guest. */
  sync: SyncState;
  setLang: (lang: Lang) => void;
  setWordBank: (on: boolean) => void;
  completeLesson: (id: string, xp: number, accuracy: number) => void;
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
        if (raw) setProgress({ ...initial, ...JSON.parse(raw) });
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
      if (was && !userId) update((p) => ({ ...initial, lang: p.lang, wordBank: p.wordBank }));
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
      update((p) => ({ ...p, ...merged }));
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
  }, [progress.xp, progress.streak, progress.lastDay, progress.completed, userId]);

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
      sync,
      setLang,
      setWordBank,
      completeLesson,
    }),
    [ready, progress, sync, setLang, setWordBank, completeLesson],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): Ctx {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}
