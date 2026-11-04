import { router } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Platform, Pressable, ScrollView, Share, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '../components/ui';
import { myPartnerStats, partnerLink, type PartnerStats } from '../lib/referral';
import { usePalette } from '../lib/theme';
import { useAuth } from '../state/auth';
import { useProgress } from '../state/progress';

/** A partner's own statistics: what their link brought, in total and over 30 days. */
export default function PartnerScreen() {
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { t } = useProgress();
  const { session } = useAuth();
  const [rows, setRows] = useState<PartnerStats[] | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const goBack = () => (router.canGoBack() ? router.back() : router.replace('/'));

  const load = useCallback(() => {
    myPartnerStats().then(setRows);
  }, []);
  useEffect(load, [load, session?.user.id]);
  const reload = () => {
    setRows(null);
    load();
  };

  const share = async (link: string) => {
    if (Platform.OS === 'web' && typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(link).catch(() => {});
      setCopied(link);
      return;
    }
    Share.share({ message: link }).catch(() => {});
  };

  const metric = (label: string, all: number, last: number) => (
    <View key={label} style={[s.metric, { backgroundColor: c.surface, borderColor: c.line }]}>
      <Text style={[s.metricLabel, { color: c.muted }]}>{label}</Text>
      <View style={s.pair}>
        <View>
          <Text style={[s.metricValue, { color: c.ink }]}>{all}</Text>
          <Text style={[s.metricSub, { color: c.muted }]}>{t.partnerAll}</Text>
        </View>
        <View>
          <Text style={[s.metricValue30, { color: c.blue }]}>{last}</Text>
          <Text style={[s.metricSub, { color: c.muted }]}>{t.partner30}</Text>
        </View>
      </View>
    </View>
  );

  // Sums over every link the account sees: for an admin, all partners together.
  const sum = (k: keyof Omit<PartnerStats, 'code' | 'name'>) => (rows ?? []).reduce((n, r) => n + r[k], 0);
  const grid = (g: (k: 'clicks' | 'installs' | 'signups' | 'purchases') => [number, number]) => (
    <View style={s.grid}>
      {metric(t.partnerInstalls, ...g('installs'))}
      {metric(t.partnerPurchases, ...g('purchases'))}
      {metric(t.partnerClicks, ...g('clicks'))}
      {metric(t.partnerSignups, ...g('signups'))}
    </View>
  );

  return (
    <ScrollView
      style={{ backgroundColor: c.bg }}
      contentContainerStyle={[s.body, { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 40 }]}
    >
      <Pressable onPress={goBack} hitSlop={10} accessibilityRole="button" style={s.backWrap}>
        <Text style={[s.back, { color: c.muted }]}>← {t.back}</Text>
      </Pressable>
      <Text style={[s.title, { color: c.ink }]}>{t.partnerTitle}</Text>

      {!session ? (
        <Text style={[s.note, { color: c.muted }]}>{t.partnerSignIn}</Text>
      ) : rows === null ? (
        <ActivityIndicator color={c.blue} />
      ) : rows.length === 0 ? (
        <Text style={[s.note, { color: c.muted }]}>{t.partnerNone}</Text>
      ) : (
        <>
        {rows.length > 1 && (
          <View style={{ gap: 12 }}>
            <Text style={[s.section, { color: c.ochre }]}>{t.partnerTotal}</Text>
            {grid((k) => [sum(k), sum(`${k}_30` as const)])}
          </View>
        )}
        {rows.map((r) => {
          const link = partnerLink(r.code);
          return (
            <View key={r.code} style={{ gap: 12 }}>
              <View style={[s.linkBox, { backgroundColor: c.blueSoft, borderColor: c.blueEdge }]}>
                <Text style={[s.linkLabel, { color: c.muted }]}>
                  {t.partnerLink}
                  {r.name ? ` · ${r.name}` : ''}
                </Text>
                <Text style={[s.link, { color: c.ink }]} selectable>
                  {link}
                </Text>
                <Button tone="primary" onPress={() => share(link)}>
                  {copied === link ? t.partnerCopied : Platform.OS === 'web' ? t.partnerCopy : t.partnerShare}
                </Button>
              </View>
              {grid((k) => [r[k], r[`${k}_30` as const]])}
            </View>
          );
        })}
        </>
      )}

      {session && rows && rows.length > 0 && (
        <>
          <Text style={[s.small, { color: c.muted }]}>{t.partnerHow}</Text>
          <Pressable onPress={reload} style={s.ghostBtn} accessibilityRole="button">
            <Text style={[s.ghost, { color: c.muted }]}>{t.partnerRefresh}</Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  body: { paddingHorizontal: 16, gap: 16, maxWidth: 560, width: '100%', alignSelf: 'center' },
  backWrap: { alignSelf: 'flex-start', paddingVertical: 4 },
  back: { fontSize: 15, fontWeight: '700' },
  title: { fontSize: 26, fontWeight: '800' },
  note: { fontSize: 15, lineHeight: 21 },
  linkBox: { borderWidth: 2, borderRadius: 18, padding: 16, gap: 10 },
  linkLabel: { fontSize: 12, fontWeight: '800', letterSpacing: 1, textTransform: 'uppercase' },
  link: { fontSize: 16, fontWeight: '700' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  metric: { flexGrow: 1, flexBasis: '45%', borderWidth: 2, borderRadius: 16, padding: 14, gap: 2 },
  metricLabel: { fontSize: 13, fontWeight: '700' },
  metricValue: { fontSize: 30, fontWeight: '800', fontVariant: ['tabular-nums'] },
  metricSub: { fontSize: 12 },
  metricValue30: { fontSize: 22, fontWeight: '800', fontVariant: ['tabular-nums'] },
  pair: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 },
  section: { fontSize: 13, fontWeight: '800', letterSpacing: 1, textTransform: 'uppercase' },
  small: { fontSize: 13, lineHeight: 18 },
  ghostBtn: { alignSelf: 'center', paddingVertical: 10, paddingHorizontal: 8 },
  ghost: { fontSize: 13, fontWeight: '700', letterSpacing: 0.8, textTransform: 'uppercase' },
});
