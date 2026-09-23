import type { Session } from '@supabase/supabase-js';
import { router } from 'expo-router';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { SITE_URL, supabase } from '../lib/supabase';

/** Error keys shown to the learner; the text for each is in src/i18n/ui.ts under `authErrors`. */
export type AuthError = 'invalid' | 'exists' | 'weak' | 'unconfirmed' | 'email' | 'network' | 'unknown';

type Result = { ok: true } | { ok: false; error: AuthError };

type Ctx = {
  /** Accounts are available: the build has Supabase keys. */
  enabled: boolean;
  ready: boolean;
  session: Session | null;
  /** The learner arrived from a password-reset email and should set a new password. */
  recovering: boolean;
  signIn: (email: string, password: string) => Promise<Result>;
  /** `needsConfirm` when the project requires the email to be confirmed before the first sign-in. */
  signUp: (email: string, password: string) => Promise<Result & { needsConfirm?: boolean }>;
  resetPassword: (email: string) => Promise<Result>;
  setNewPassword: (password: string) => Promise<Result>;
  signOut: () => Promise<void>;
  deleteAccount: () => Promise<Result>;
};

function classify(message: string | undefined): AuthError {
  const m = (message ?? '').toLowerCase();
  if (m.includes('invalid login')) return 'invalid';
  if (m.includes('already registered') || m.includes('already been registered')) return 'exists';
  if (m.includes('password')) return 'weak';
  if (m.includes('not confirmed')) return 'unconfirmed';
  if (m.includes('email')) return 'email';
  if (m.includes('fetch') || m.includes('network')) return 'network';
  return 'unknown';
}

const fail = (message?: string): Result => ({ ok: false, error: classify(message) });

const AuthContext = createContext<Ctx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(!supabase);
  const [recovering, setRecovering] = useState(false);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth
      .getSession()
      .then(({ data }) => setSession(data.session))
      .finally(() => setReady(true));
    const { data } = supabase.auth.onAuthStateChange((event, s) => {
      setSession(s);
      if (event === 'PASSWORD_RECOVERY') {
        setRecovering(true);
        router.push('/account');
      }
    });
    return () => data.subscription.unsubscribe();
  }, []);

  const signIn = useCallback(async (email: string, password: string): Promise<Result> => {
    if (!supabase) return fail();
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    return error ? fail(error.message) : { ok: true };
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    if (!supabase) return fail();
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: { emailRedirectTo: SITE_URL },
    });
    if (error) return fail(error.message);
    // Supabase answers a sign-up for an existing address with a user that has no identities.
    if (data.user && data.user.identities?.length === 0) return fail('already registered');
    return { ok: true as const, needsConfirm: !data.session };
  }, []);

  const resetPassword = useCallback(async (email: string): Promise<Result> => {
    if (!supabase) return fail();
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo: SITE_URL });
    return error ? fail(error.message) : { ok: true };
  }, []);

  const setNewPassword = useCallback(async (password: string): Promise<Result> => {
    if (!supabase) return fail();
    const { error } = await supabase.auth.updateUser({ password });
    if (error) return fail(error.message);
    setRecovering(false);
    return { ok: true };
  }, []);

  const signOut = useCallback(async () => {
    await supabase?.auth.signOut();
  }, []);

  const deleteAccount = useCallback(async (): Promise<Result> => {
    if (!supabase) return fail();
    const { error } = await supabase.rpc('delete_my_account');
    if (error) return fail(error.message);
    await supabase.auth.signOut();
    return { ok: true };
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      enabled: !!supabase,
      ready,
      session,
      recovering,
      signIn,
      signUp,
      resetPassword,
      setNewPassword,
      signOut,
      deleteAccount,
    }),
    [ready, session, recovering, signIn, signUp, resetPassword, setNewPassword, signOut, deleteAccount],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): Ctx {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
