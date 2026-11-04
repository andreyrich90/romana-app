import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

import { usdLabel, WEB_PLANS, WEB_SELLING, type WebPlanId } from '../engine/webPlans';
import { supabase } from '../lib/supabase';
import { usePalette } from '../lib/theme';
import { useAuth } from '../state/auth';
import { usePremium } from '../state/premium';
import { useProgress } from '../state/progress';
import { Button } from './ui';

/** How long the page keeps asking after the buyer left for the payment page. */
const WAIT_MS = 15 * 60 * 1000;
const EVERY_MS = 5000;

/**
 * The site only, never the Android app (Google Play forbids pointing to another way to
 * pay there). The buyer must be signed in: the payment is tied to the account, and the
 * account then has Premium on every device.
 */
export function WebCheckout() {
  const c = usePalette();
  const { t } = useProgress();
  const { session } = useAuth();
  const { refreshGrant } = usePremium();
  const { paid } = useLocalSearchParams<{ paid?: string }>();
  const [chosen, setChosen] = useState<WebPlanId>('year');
  const [waiting, setWaiting] = useState(paid === '1');
  const [error, setError] = useState(false);
  const until = useRef(0);

  // After the payment page: ask every few seconds until the webhook has opened Premium.
  useEffect(() => {
    if (!waiting || !session) return;
    until.current = Date.now() + WAIT_MS;
    const timer = setInterval(async () => {
      if (Date.now() > until.current) {
        clearInterval(timer);
        setWaiting(false);
        return;
      }
      if (await refreshGrant()) clearInterval(timer);
    }, EVERY_MS);
    return () => clearInterval(timer);
  }, [waiting, session, refreshGrant]);

  if (!session) {
    return (
      <View style={{ gap: 10 }}>
        <Text style={[s.note, { color: c.muted, textAlign: 'center' }]}>{t.webSignInFirst}</Text>
        <Button tone="primary" onPress={() => router.push('/account')}>
          {t.webSignIn}
        </Button>
      </View>
    );
  }

  if (!WEB_SELLING) {
    return <Text style={[s.note, { color: c.muted, textAlign: 'center' }]}>{t.webSoon}</Text>;
  }

  const plans = WEB_PLANS.filter((p) => p.payUrl);
  const selected = plans.find((p) => p.id === chosen) ?? plans[0];
  const name = (id: WebPlanId) => (id === 'year' ? t.planYearly : id === 'month' ? t.planMonthly : t.planLifetime);
  const note = (id: WebPlanId) => (id === 'year' ? t.webYear : id === 'month' ? t.webMonth : t.once);

  const buy = async () => {
    if (!supabase || !selected?.payUrl) return;
    setError(false);
    // Open the tab first: a browser blocks a window opened after an await.
    const tab = window.open('', '_blank');
    const { error: e } = await supabase.rpc('web_checkout', { p_plan: selected.id });
    if (e) {
      tab?.close();
      setError(true);
      return;
    }
    if (tab) tab.location.assign(selected.payUrl);
    else window.location.assign(selected.payUrl);
    setWaiting(true);
  };

  return (
    <View style={{ gap: 10 }}>
      {plans.map((plan) => {
        const on = selected?.id === plan.id;
        return (
          <Pressable
            key={plan.id}
            accessibilityRole="radio"
            accessibilityState={{ selected: on }}
            onPress={() => setChosen(plan.id)}
            style={[s.plan, { backgroundColor: on ? c.blueSoft : c.surface, borderColor: on ? c.blue : c.line }]}
          >
            <View style={[s.radio, { borderColor: on ? c.blue : c.line }]}>
              {on && <View style={[s.radioDot, { backgroundColor: c.blue }]} />}
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[s.planName, { color: c.ink }]}>{name(plan.id)}</Text>
              <Text style={[s.planNote, { color: c.muted }]}>{note(plan.id)}</Text>
            </View>
            {plan.id === 'year' && <Text style={[s.best, { backgroundColor: c.ochre, color: c.onBlue }]}>{t.best}</Text>}
            <Text style={[s.price, { color: c.ink }]}>{usdLabel(plan.usd)}</Text>
          </Pressable>
        );
      })}
      <Button tone="primary" disabled={!selected} onPress={buy}>
        {`${t.buyPremium} · ${selected ? usdLabel(selected.usd) : ''}`}
      </Button>
      {waiting && (
        <View style={s.wait}>
          <ActivityIndicator color={c.blue} />
          <Text style={[s.small, { color: c.muted, flex: 1 }]}>{t.webWaiting}</Text>
        </View>
      )}
      {error && <Text style={[s.note, { color: c.bad, textAlign: 'center' }]}>{t.premiumError}</Text>}
      <Text style={[s.small, { color: c.muted }]}>{t.webNote}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  note: { fontSize: 15, lineHeight: 21 },
  small: { fontSize: 12, lineHeight: 17, textAlign: 'center' },
  plan: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 2, borderBottomWidth: 4, borderRadius: 16, padding: 14 },
  radio: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  radioDot: { width: 12, height: 12, borderRadius: 6 },
  planName: { fontSize: 17, fontWeight: '800' },
  planNote: { fontSize: 13 },
  best: { fontSize: 11, fontWeight: '800', textTransform: 'uppercase', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8, overflow: 'hidden' },
  price: { fontSize: 17, fontWeight: '800' },
  wait: { flexDirection: 'row', alignItems: 'center', gap: 10, justifyContent: 'center' },
});
