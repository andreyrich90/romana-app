import type { Session } from '@supabase/supabase-js';
import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { Platform } from 'react-native';

import { SITE_URL, supabase, supabaseProviders } from '../lib/supabase';

/** Error keys shown to the learner; the text for each is in src/i18n/ui.ts under `authErrors`. */
export type AuthError =
  | 'invalid'
  | 'exists'
  | 'weak'
  | 'unconfirmed'
  | 'email'
  | 'network'
  | 'unknown'
  /** The learner closed the Google window: not an error worth a message. */
  | 'cancelled';

type Result = { ok: true } | { ok: false; error: AuthError };

type Ctx = {
  /** Accounts are available: the build has Supabase keys. */
  enabled: boolean;
  ready: boolean;
  session: Session | null;
  /** The learner arrived from a password-reset email and should set a new password. */
  recovering: boolean;
  signIn: (email: string, password: string) => Promise<Result>;
  /** Google is switched on in the Supabase project (Authentication → Providers). */
  googleEnabled: boolean;
  /** On the web the page leaves for Google and comes back signed in; in the app a browser sheet opens. */
  signInWithGoogle: () => Promise<Result>;
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

/** Query and fragment parameters of the URL Google's round trip ends on. */
function paramsOf(url: string): Record<string, string> {
  const out: Record<string, string> = {};
  const parts = url.split(/[?#]/).slice(1);
  for (const part of parts) {
    for (const pair of part.split('&')) {
      const [k, v = ''] = pair.split('=');
      if (k) out[decodeURIComponent(k)] = decodeURIComponent(v.replace(/\+/g, ' '));
    }
  }
  return out;
}

const AuthContext = createContext<Ctx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(!supabase);
  const [recovering, setRecovering] = useState(false);
  const [googleEnabled, setGoogleEnabled] = useState(false);

  useEffect(() => {
    supabaseProviders().then((p) => setGoogleEnabled(!!p.google));
  }, []);

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

  const signInWithGoogle = useCallback(async (): Promise<Result> => {
    if (!supabase) return fail();
    if (Platform.OS === 'web') {
      // The page itself goes to Google; the session comes back in the URL and detectSessionInUrl picks it up.
      const { error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: SITE_URL } });
      return error ? fail(error.message) : { ok: true };
    }
    // romana://auth-callback in a build, exp://…/--/auth-callback in Expo Go. Both must be allowed in Supabase.
    const redirectTo = Linking.createURL('auth-callback');
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo, skipBrowserRedirect: true },
    });
    if (error || !data.url) return fail(error?.message);
    const res = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);
    if (res.type !== 'success') return { ok: false, error: 'cancelled' };
    const p = paramsOf(res.url);
    if (p.error_description || p.error) return fail(p.error_description || p.error);
    if (p.code) {
      const r = await supabase.auth.exchangeCodeForSession(p.code);
      return r.error ? fail(r.error.message) : { ok: true };
    }
    if (p.access_token && p.refresh_token) {
      const r = await supabase.auth.setSession({ access_token: p.access_token, refresh_token: p.refresh_token });
      return r.error ? fail(r.error.message) : { ok: true };
    }
    return fail();
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
      googleEnabled,
      signInWithGoogle,
      signUp,
      resetPassword,
      setNewPassword,
      signOut,
      deleteAccount,
    }),
    [ready, session, recovering, signIn, googleEnabled, signInWithGoogle, signUp, resetPassword, setNewPassword, signOut, deleteAccount],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): Ctx {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
