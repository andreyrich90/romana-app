import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

import { cleanCode, codeFromReferrer } from '../engine/referralCode';
import { SITE_URL, supabase } from './supabase';

export { cleanCode };

/**
 * Partner links: SITE_URL/r/<code>. The web page records the click and sends Android
 * visitors to Google Play with `referrer=ref=<code>`; the installed app reads that back
 * from the Play Install Referrer on its first start and keeps the code. Sign-ins and
 * purchases on that device are then reported against the same code.
 *
 * Everything here is best-effort: a failure costs a line in a partner's statistics,
 * never a lesson or a purchase.
 */
const CODE_KEY = 'romana.ref.code';
const DEVICE_KEY = 'romana.ref.device';
const REFERRER_CHECKED_KEY = 'romana.ref.checked';

export const PLAY_URL = 'https://play.google.com/store/apps/details?id=pro.seajobs.romana';

export const partnerLink = (code: string) => `${SITE_URL.replace(/\/$/, '')}/r/${code}`;

/** Google Play passes `referrer` through to the installed app untouched. */
export const playLinkFor = (code: string) => `${PLAY_URL}&referrer=${encodeURIComponent(`ref=${code}`)}`;

function randomId(): string {
  const hex = '0123456789abcdef';
  let s = '';
  for (let i = 0; i < 32; i++) s += hex[Math.floor(Math.random() * 16)];
  return s;
}

/** A random id this device keeps, so a repeated click or reinstall counts once. */
export async function deviceId(): Promise<string> {
  try {
    const have = await AsyncStorage.getItem(DEVICE_KEY);
    if (have) return have;
    const id = randomId();
    await AsyncStorage.setItem(DEVICE_KEY, id);
    return id;
  } catch {
    return randomId();
  }
}

export async function storedCode(): Promise<string | null> {
  try {
    return cleanCode(await AsyncStorage.getItem(CODE_KEY));
  } catch {
    return null;
  }
}

export async function rememberCode(code: string) {
  try {
    await AsyncStorage.setItem(CODE_KEY, code);
  } catch {}
}

export type RefKind = 'click' | 'install' | 'signup' | 'purchase';

export async function trackRef(code: string, kind: RefKind, product?: string) {
  if (!supabase) return;
  try {
    await supabase.rpc('ref_track', { p_code: code, p_kind: kind, p_device: await deviceId(), p_product: product ?? null });
  } catch {}
}

/** Reports an event for the code this device came with, if it came with one. */
export async function trackStored(kind: RefKind, product?: string) {
  const code = await storedCode();
  if (code) await trackRef(code, kind, product);
}

/** First start on Android: read where Google Play says the install came from, once. */
export async function captureInstallReferrer() {
  if (Platform.OS !== 'android') return;
  try {
    if (await AsyncStorage.getItem(REFERRER_CHECKED_KEY)) return;
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const Application = require('expo-application') as typeof import('expo-application');
    const referrer = await Application.getInstallReferrerAsync();
    await AsyncStorage.setItem(REFERRER_CHECKED_KEY, '1');
    const code = codeFromReferrer(referrer ?? '');
    if (!code) return;
    await rememberCode(code);
    await trackRef(code, 'install');
  } catch {
    // Play services unavailable now: try again on the next start.
  }
}

export type PartnerStats = {
  code: string;
  name: string | null;
  clicks: number;
  installs: number;
  signups: number;
  purchases: number;
  clicks_30: number;
  installs_30: number;
  signups_30: number;
  purchases_30: number;
};

/** Statistics for the partner codes owned by the signed-in e-mail; empty for everyone else. */
export async function myPartnerStats(): Promise<PartnerStats[]> {
  if (!supabase) return [];
  const { data, error } = await supabase.rpc('ref_my_stats');
  if (error || !Array.isArray(data)) return [];
  return data.map((r) => ({
    ...r,
    clicks: Number(r.clicks),
    installs: Number(r.installs),
    signups: Number(r.signups),
    purchases: Number(r.purchases),
    clicks_30: Number(r.clicks_30),
    installs_30: Number(r.installs_30),
    signups_30: Number(r.signups_30),
    purchases_30: Number(r.purchases_30),
  }));
}
