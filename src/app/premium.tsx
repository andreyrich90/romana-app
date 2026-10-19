import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Linking, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PLAY_URL } from '../components/GetTheApp';
import { Button } from '../components/ui';
import { usePalette } from '../lib/theme';
import { usePremium } from '../state/premium';
import { useProgress } from '../state/progress';

/** Why the learner landed here: a locked lesson, card or the day's second practice. */
type Reason = 'lesson' | 'card' | 'practice';

/** The paywall: what Premium opens, the plans with Play's own prices, restore and manage. */
export default function PremiumScreen() {
  const { reason } = useLocalSearchParams<{ reason?: Reason }>();
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { t } = useProgress();
  const p = usePremium();
  const [chosen, setChosen] = useState('premium_yearly');
  const goBack = () => (router.canGoBack() ? router.back() : router.replace('/'));
  const selected = p.plans.find((x) => x.id === chosen) ?? p.plans[0];
  const lock = reason === 'lesson' ? t.lockLesson : reason === 'card' ? t.lockCard : reason === 'practice' ? t.lockPractice : null;

  const planName = (id: string) => (id === 'premium_yearly' ? t.planYearly : id === 'premium_monthly' ? t.planMonthly : t.planLifetime);
  const planNote = (id: string) => (id === 'premium_yearly' ? t.perYear : id === 'premium_monthly' ? t.perMonth : t.once);

  return (
    <ScrollView
      style={{ backgroundColor: c.bg }}
      contentContainerStyle={[s.body, { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 40 }]}
    >
      <Pressable onPress={goBack} hitSlop={10} accessibilityRole="button" style={s.backWrap}>
        <Text style={[s.back, { color: c.muted }]}>← {t.back}</Text>
      </Pressable>

      <View style={[s.hero, { backgroundColor: c.blue, borderColor: c.blueEdge }]}>
        <Text style={s.gem}>💎</Text>
        <Text style={[s.heroTitle, { color: c.onBlue }]}>{t.premiumTitle}</Text>
        <Text style={[s.heroSub, { color: c.onBlue }]}>{p.premium ? t.premiumThanks : t.premiumSub}</Text>
      </View>

      {lock && !p.premium && (
        <Text style={[s.lock, { backgroundColor: c.ochreSoft, borderColor: c.ochreEdge, color: c.ink }]}>🔒 {lock}</Text>
      )}

      <View style={[s.perks, { backgroundColor: c.surface, borderColor: c.line }]}>
        {t.premiumPerks.map((perk) => (
          <Text key={perk} style={[s.perk, { color: c.ink }]}>
            {perk}
          </Text>
        ))}
      </View>

      {p.premium ? (
        <View style={{ gap: 10 }}>
          <Text style={[s.active, { color: c.good }]}>{t.premiumActive}</Text>
          {p.available && (
            <Button tone="plain" onPress={p.manage}>
              {t.manageSub}
            </Button>
          )}
        </View>
      ) : !p.available ? (
        <View style={{ gap: 10 }}>
          <Text style={[s.note, { color: c.muted, textAlign: 'center' }]}>
            {Platform.OS === 'web' ? t.premiumWeb : t.premiumIos}
          </Text>
          {Platform.OS === 'web' && (
            <Button tone="primary" onPress={() => Linking.openURL(PLAY_URL)}>
              Google Play
            </Button>
          )}
        </View>
      ) : p.loading ? (
        <View style={s.center}>
          <ActivityIndicator color={c.blue} />
          <Text style={{ color: c.muted }}>{t.plansLoading}</Text>
        </View>
      ) : p.plans.length === 0 ? (
        <Text style={[s.note, { color: c.muted, textAlign: 'center' }]}>{t.plansNone}</Text>
      ) : (
        <View style={{ gap: 10 }}>
          {p.plans.map((plan) => {
            const on = selected?.id === plan.id;
            return (
              <Pressable
                key={plan.id}
                accessibilityRole="radio"
                accessibilityState={{ selected: on }}
                onPress={() => setChosen(plan.id)}
                style={[
                  s.plan,
                  { backgroundColor: on ? c.blueSoft : c.surface, borderColor: on ? c.blue : c.line },
                ]}
              >
                <View style={[s.radio, { borderColor: on ? c.blue : c.line }]}>
                  {on && <View style={[s.radioDot, { backgroundColor: c.blue }]} />}
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={[s.planName, { color: c.ink }]}>{planName(plan.id)}</Text>
                  <Text style={[s.planNote, { color: c.muted }]}>{planNote(plan.id)}</Text>
                </View>
                {plan.id === 'premium_yearly' && (
                  <Text style={[s.best, { backgroundColor: c.ochre, color: c.onBlue }]}>{t.best}</Text>
                )}
                <Text style={[s.price, { color: c.ink }]}>{plan.price}</Text>
              </Pressable>
            );
          })}
          <Button tone="primary" disabled={p.busy || !selected} onPress={() => selected && p.buy(selected.id)}>
            {p.busy ? '…' : `${t.buyPremium} · ${selected?.price ?? ''}`}
          </Button>
          {p.error && <Text style={[s.note, { color: c.bad, textAlign: 'center' }]}>{t.premiumError}</Text>}
          <Text style={[s.small, { color: c.muted }]}>{t.renewNote}</Text>
        </View>
      )}

      {p.available && !p.premium && (
        <Pressable onPress={p.restore} disabled={p.busy} style={s.ghostBtn} accessibilityRole="button">
          <Text style={[s.ghost, { color: c.muted }]}>{t.restore}</Text>
        </Pressable>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  body: { paddingHorizontal: 16, gap: 16, maxWidth: 560, width: '100%', alignSelf: 'center' },
  backWrap: { alignSelf: 'flex-start', paddingVertical: 4 },
  back: { fontSize: 15, fontWeight: '700' },
  hero: { borderWidth: 2, borderBottomWidth: 5, borderRadius: 22, padding: 22, alignItems: 'center', gap: 6 },
  gem: { fontSize: 44 },
  heroTitle: { fontSize: 26, fontWeight: '800' },
  heroSub: { fontSize: 16, textAlign: 'center', opacity: 0.9 },
  lock: { borderWidth: 2, borderRadius: 14, padding: 12, fontSize: 15, lineHeight: 21, overflow: 'hidden' },
  perks: { borderWidth: 2, borderRadius: 18, padding: 16, gap: 12 },
  perk: { fontSize: 16, lineHeight: 22, fontWeight: '600' },
  plan: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 2, borderBottomWidth: 4, borderRadius: 16, padding: 14 },
  radio: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  radioDot: { width: 12, height: 12, borderRadius: 6 },
  planName: { fontSize: 17, fontWeight: '800' },
  planNote: { fontSize: 13 },
  best: { fontSize: 11, fontWeight: '800', textTransform: 'uppercase', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8, overflow: 'hidden' },
  price: { fontSize: 17, fontWeight: '800' },
  active: { fontSize: 20, fontWeight: '800', textAlign: 'center' },
  note: { fontSize: 15, lineHeight: 21 },
  small: { fontSize: 12, lineHeight: 17, textAlign: 'center' },
  center: { alignItems: 'center', gap: 8, paddingVertical: 16 },
  ghostBtn: { alignSelf: 'center', paddingVertical: 10, paddingHorizontal: 8 },
  ghost: { fontSize: 13, fontWeight: '700', letterSpacing: 0.8, textTransform: 'uppercase' },
});
