import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { Linking, Platform } from 'react-native';

import { LIFETIME, PRODUCT_IDS, SUBSCRIPTIONS } from '../engine/premium';
import { day } from './model';

/**
 * Premium is bought through Google Play Billing (expo-iap). Ownership is whatever Play
 * reports for this device's Google account; the last answer is cached so the app opens
 * as Premium offline. There is no server check: an entitlement lives only on Android.
 */
type Iap = typeof import('expo-iap');
// The native module does not exist on the web or in Expo Go; nothing here may import it there.
const iap: Iap | null = Platform.OS === 'android' ? safeRequire() : null;
function safeRequire(): Iap | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require('expo-iap') as Iap;
  } catch {
    return null;
  }
}

const CACHE_KEY = 'romana.premium.v1';
const PRACTICE_KEY = 'romana.practiceDay.v1';
const PACKAGE = 'pro.seajobs.romana';

export type Plan = {
  id: string;
  kind: 'subs' | 'in-app';
  /** The store's own formatted price, e.g. "19,99 €". */
  price: string;
  offerToken?: string;
};

type Ctx = {
  /** Billing can work on this device (an Android build from Google Play). */
  available: boolean;
  /** The cached answer has been read; before that `premium` is always false. */
  ready: boolean;
  premium: boolean;
  /** Plans in display order: yearly, monthly, lifetime; those the store did not return are missing. */
  plans: Plan[];
  loading: boolean;
  busy: boolean;
  error: string | null;
  buy: (id: string) => Promise<void>;
  restore: () => Promise<void>;
  manage: () => void;
  /** The day of the last finished review session, for the free one-a-day limit. */
  practiceDay: string | null;
  markPractice: () => void;
};

const PremiumContext = createContext<Ctx | null>(null);

const ORDER = ['premium_yearly', 'premium_monthly', LIFETIME];

export function PremiumProvider({ children }: { children: ReactNode }) {
  const [premium, setPremium] = useState(false);
  const [ready, setReady] = useState(false);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(!!iap);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [practiceDay, setPracticeDay] = useState<string | null>(null);

  const remember = useCallback((on: boolean) => {
    setPremium(on);
    AsyncStorage.setItem(CACHE_KEY, on ? '1' : '0').catch(() => {});
  }, []);

  /** Asks Play what this account owns, acknowledging anything not yet acknowledged. */
  const refresh = useCallback(async () => {
    if (!iap) return;
    const purchases = await iap.getAvailablePurchases();
    const ours = purchases.filter((p) => PRODUCT_IDS.includes(p.productId) && p.purchaseState === 'purchased');
    for (const p of ours) {
      // Unacknowledged purchases are refunded by Google after three days.
      if ('isAcknowledgedAndroid' in p && p.isAcknowledgedAndroid === false) {
        await iap.finishTransaction({ purchase: p, isConsumable: false }).catch(() => {});
      }
    }
    remember(ours.length > 0);
  }, [remember]);

  useEffect(() => {
    AsyncStorage.multiGet([CACHE_KEY, PRACTICE_KEY])
      .then(([[, cached], [, practice]]) => {
        if (cached === '1') setPremium(true);
        setPracticeDay(practice);
      })
      .catch(() => {})
      .finally(() => setReady(true));
    if (!iap) return;
    const lib = iap;
    let alive = true;
    const onPurchase = lib.purchaseUpdatedListener((p) => {
      if (!PRODUCT_IDS.includes(p.productId) || p.purchaseState !== 'purchased') return;
      lib.finishTransaction({ purchase: p, isConsumable: false }).catch(() => {});
      remember(true);
      setBusy(false);
    });
    const onError = lib.purchaseErrorListener((e) => {
      setBusy(false);
      if (e.code !== 'user-cancelled') setError(e.message || 'error');
    });
    (async () => {
      try {
        await lib.initConnection();
        const [subs, items] = await Promise.all([
          lib.fetchProducts({ skus: [...SUBSCRIPTIONS], type: 'subs' }),
          lib.fetchProducts({ skus: [LIFETIME], type: 'in-app' }),
        ]);
        const found: Plan[] = [];
        for (const p of [...(subs ?? []), ...(items ?? [])]) {
          if (p.platform !== 'android') continue;
          if (p.type === 'subs') {
            // The base plan is the offer without an offer id of its own.
            const offer = p.subscriptionOffers.find((o) => !o.id) ?? p.subscriptionOffers[0];
            if (offer?.offerTokenAndroid) found.push({ id: p.id, kind: 'subs', price: offer.displayPrice, offerToken: offer.offerTokenAndroid });
          } else {
            found.push({ id: p.id, kind: 'in-app', price: p.displayPrice });
          }
        }
        found.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));
        if (alive) setPlans(found);
        await refresh();
      } catch {
        // Offline or Play unavailable: keep the cached answer.
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
      onPurchase.remove();
      onError.remove();
    };
  }, [refresh, remember]);

  const buy = useCallback(
    async (id: string) => {
      const plan = plans.find((p) => p.id === id);
      if (!iap || !plan) return;
      setError(null);
      setBusy(true);
      try {
        if (plan.kind === 'subs') {
          await iap.requestPurchase({
            type: 'subs',
            request: { google: { skus: [id], subscriptionOffers: [{ sku: id, offerToken: plan.offerToken! }] } },
          });
        } else {
          await iap.requestPurchase({ type: 'in-app', request: { google: { skus: [id] } } });
        }
      } catch (e) {
        setBusy(false);
        setError(e instanceof Error ? e.message : 'error');
      }
    },
    [plans],
  );

  const restore = useCallback(async () => {
    setError(null);
    setBusy(true);
    try {
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'error');
    } finally {
      setBusy(false);
    }
  }, [refresh]);

  const manage = useCallback(() => {
    Linking.openURL(`https://play.google.com/store/account/subscriptions?package=${PACKAGE}`).catch(() => {});
  }, []);

  const markPractice = useCallback(() => {
    const today = day(new Date());
    setPracticeDay(today);
    AsyncStorage.setItem(PRACTICE_KEY, today).catch(() => {});
  }, []);

  const value = useMemo<Ctx>(
    () => ({ available: !!iap, ready, premium, plans, loading, busy, error, buy, restore, manage, practiceDay, markPractice }),
    [ready, premium, plans, loading, busy, error, buy, restore, manage, practiceDay, markPractice],
  );
  return <PremiumContext.Provider value={value}>{children}</PremiumContext.Provider>;
}

export function usePremium(): Ctx {
  const ctx = useContext(PremiumContext);
  if (!ctx) throw new Error('usePremium must be used inside PremiumProvider');
  return ctx;
}
