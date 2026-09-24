import 'react-native-url-polyfill/auto';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { AppState, Platform } from 'react-native';

const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
const anonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

/** Where links in confirmation and password-reset emails lead. */
export const SITE_URL =
  Platform.OS === 'web' && typeof window !== 'undefined'
    ? window.location.origin
    : (process.env.EXPO_PUBLIC_SITE_URL ?? 'https://romana-app-seven.vercel.app');

/**
 * `null` when the build has no Supabase keys: the app then works exactly as before,
 * as a guest with progress kept on the device, and the account button is hidden.
 */
export const supabase: SupabaseClient | null =
  url && anonKey
    ? createClient(url, anonKey, {
        auth: {
          storage: AsyncStorage,
          persistSession: true,
          autoRefreshToken: true,
          // On the web, links from confirmation and reset emails land here with the session in the URL.
          detectSessionInUrl: Platform.OS === 'web',
        },
      })
    : null;

// A native app is not a browser tab: refresh the session only while the app is in front.
if (supabase && Platform.OS !== 'web') {
  AppState.addEventListener('change', (state) => {
    if (state === 'active') supabase.auth.startAutoRefresh();
    else supabase.auth.stopAutoRefresh();
  });
}

/**
 * Which sign-in providers the Supabase project has switched on, from its public settings.
 * The Google button appears only once Google is enabled in the dashboard, so a build never
 * shows a button that cannot work. Any failure reads as "none".
 */
export async function supabaseProviders(): Promise<Record<string, boolean>> {
  if (!url || !anonKey) return {};
  try {
    const res = await fetch(`${url}/auth/v1/settings`, { headers: { apikey: anonKey } });
    if (!res.ok) return {};
    const body = (await res.json()) as { external?: Record<string, boolean> };
    return body.external ?? {};
  } catch {
    return {};
  }
}
