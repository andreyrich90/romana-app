import { router } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Platform, Pressable, ScrollView, Share, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '../components/ui';
import { moneyAll, moneyTotal, planOfProduct } from '../engine/partnerMoney';
import {
  myPartnerPurchases,
  myPartnerSales,
  myPartnerStats,
  partnerLink,
  playLinkFor,
  type PartnerPurchase,
  type PartnerSale,
  type PartnerStats,
} from '../lib/referral';
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
  const [sales, setSales] = useState<PartnerSale[]>([]);
  const [purchases, setPurchases] = useState<PartnerPurchase[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const goBack = () => (router.canGoBack() ? router.back() : router.replace('/'));

  const load = useCallback(() => {
    Promise.all([myPartnerStats(), myPartnerSales(), myPartnerPurchases()]).then(([r, sl, pu]) => {
      setSales(sl);
      setPurchases(pu);
      setRows(r);
    });
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

  const metric = (label: string, all: number, last: number, lastLabel: string = t.partner30, third = false) => (
    <View key={label} style={[s.metric, third && s.third, { backgroundColor: c.surface, borderColor: c.line }]}>
      <Text style={[s.metricLabel, { color: c.muted }]}>{label}</Text>
      <View style={s.pair}>
        <View>
          <Text style={[s.metricValue, { color: c.ink }]}>{all}</Text>
          <Text style={[s.metricSub, { color: c.muted }]}>{t.partnerAll}</Text>
        </View>
        <View>
          <Text style={[s.metricValue30, { color: c.blue }]}>{last}</Text>
          <Text style={[s.metricSub, { color: c.muted }]}>{lastLabel}</Text>
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

  const planName = (product: string) => {
    const plan = planOfProduct(product);
    return plan === 'year' ? t.planYearly : plan === 'month' ? t.planMonthly : plan === 'lifetime' ? t.planLifetime : product;
  };
  const sourceName = (source: string) => (source === 'web' ? t.partnerWeb : t.partnerPlay);

  // Earnings and the per-package breakdown, for one link or (code null) for all of them.
  const money = (code: string | null) => {
    const mine = sales.filter((x) => code === null || x.code === code);
    const amounts = (k: 'revenue' | 'earned' | 'revenue_month' | 'earned_month') => mine.map((x) => ({ currency: x.currency, value: x[k] }));
    // How many of each package, Google Play and the site together.
    const count = (plan: 'month' | 'year' | 'lifetime', k: 'sold' | 'sold_month') =>
      mine.filter((x) => planOfProduct(x.product) === plan).reduce((n, x) => n + x[k], 0);
    // One line per package and source, the links added together.
    type Line = { product: string; source: string; sold: number; soldMonth: number; revenue: { currency: string; value: number }[]; earned: { currency: string; value: number }[] };
    const lines = new Map<string, Line>();
    // Every package from both places is listed, at zero until something is bought.
    for (const [product, source, currency] of [
      ['premium_yearly', 'play', 'EUR'],
      ['premium_monthly', 'play', 'EUR'],
      ['premium_lifetime', 'play', 'EUR'],
      ['web_year', 'web', 'USD'],
      ['web_month', 'web', 'USD'],
      ['web_lifetime', 'web', 'USD'],
    ] as const) {
      lines.set(`${planOfProduct(product)}|${source}`, { product, source, sold: 0, soldMonth: 0, revenue: [{ currency, value: 0 }], earned: [{ currency, value: 0 }] });
    }
    for (const x of mine) {
      const key = `${planOfProduct(x.product) ?? x.product}|${x.source}`;
      const line = lines.get(key) ?? { product: x.product, source: x.source, sold: 0, soldMonth: 0, revenue: [], earned: [] };
      line.sold += x.sold;
      line.soldMonth += x.sold_month;
      line.revenue.push({ currency: x.currency, value: x.revenue });
      line.earned.push({ currency: x.currency, value: x.earned });
      lines.set(key, line);
    }
    const order = (p: string) => ['year', 'month', 'lifetime'].indexOf(planOfProduct(p) ?? '');
    const sorted = [...lines.values()].sort((a, b) => a.source.localeCompare(b.source) || order(a.product) - order(b.product));
    return (
      <View style={{ gap: 10 }}>
        <View style={[s.earn, { backgroundColor: c.surface, borderColor: c.good }]}>
          <Text style={[s.metricLabel, { color: c.muted }]}>{t.partnerEarned}</Text>
          <View style={s.pair}>
            <View style={{ flexShrink: 1 }}>
              <Text style={[s.earnValue, { color: c.ink }]}>{moneyTotal(amounts('earned_month'))}</Text>
              <Text style={[s.metricSub, { color: c.muted }]}>{t.partnerMonth}</Text>
            </View>
            <View style={{ flexShrink: 1, alignItems: 'flex-end' }}>
              <Text style={[s.earnValue, { color: c.good }]}>{moneyTotal(amounts('earned'))}</Text>
              <Text style={[s.metricSub, { color: c.muted }]}>{t.partnerAll}</Text>
            </View>
          </View>
          <Text style={[s.metricSub, { color: c.muted }]}>
            {t.partnerRevenue}: {moneyTotal(amounts('revenue_month'))} {t.partnerMonth} · {moneyTotal(amounts('revenue'))} {t.partnerAll}
          </Text>
        </View>
        <View style={s.grid}>
          {metric(t.planMonthly, count('month', 'sold'), count('month', 'sold_month'), t.partnerMonth, true)}
          {metric(t.planYearly, count('year', 'sold'), count('year', 'sold_month'), t.partnerMonth, true)}
          {metric(t.planLifetime, count('lifetime', 'sold'), count('lifetime', 'sold_month'), t.partnerMonth, true)}
        </View>
        <View style={[s.table, { backgroundColor: c.surface, borderColor: c.line }]}>
          <Text style={[s.metricLabel, { color: c.muted }]}>{t.partnerByPlan}</Text>
          {sorted.map((l) => (
            <View key={`${l.product}|${l.source}`} style={s.tableRow}>
              <View style={{ flex: 1 }}>
                <Text style={[s.rowTitle, { color: c.ink }]}>{planName(l.product)}</Text>
                <Text style={[s.metricSub, { color: c.muted }]}>
                  {sourceName(l.source)}
                  {l.soldMonth > 0 ? ` · ${l.soldMonth} ${t.partnerPcs} ${t.partnerMonth}` : ''}
                </Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={[s.rowTitle, { color: c.ink }]}>
                  {l.sold} {t.partnerPcs} · {moneyAll(l.revenue)}
                </Text>
                <Text style={[s.metricSub, { color: c.good }]}>
                  {t.partnerYou} {moneyAll(l.earned)}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  };

  const date = (iso: string) => new Date(iso).toLocaleDateString(undefined, { day: '2-digit', month: '2-digit', year: 'numeric' });

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
            {money(null)}
            {grid((k) => [sum(k), sum(`${k}_30` as const)])}
          </View>
        )}
        {rows.map((r) => {
          const link = partnerLink(r.code);
          const play = playLinkFor(r.code);
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
                <Text style={[s.linkLabel, { color: c.muted, marginTop: 6 }]}>{t.partnerPlayLink}</Text>
                <Text style={[s.linkSmall, { color: c.ink }]} selectable>
                  {play}
                </Text>
                <Button tone="plain" onPress={() => share(play)}>
                  {copied === play ? t.partnerCopied : Platform.OS === 'web' ? t.partnerCopy : t.partnerShare}
                </Button>
                <Text style={[s.small, { color: c.muted }]}>{t.partnerPlayNote}</Text>
              </View>
              {money(r.code)}
              {grid((k) => [r[k], r[`${k}_30` as const]])}
            </View>
          );
        })}
        </>
      )}

      {session && rows && rows.length > 0 && (
        <View style={{ gap: 10 }}>
          <Text style={[s.section, { color: c.ochre }]}>{t.partnerRecent}</Text>
          {purchases.length === 0 ? (
            <Text style={[s.note, { color: c.muted }]}>{t.partnerNoSales}</Text>
          ) : (
            <View style={[s.table, { backgroundColor: c.surface, borderColor: c.line }]}>
              {purchases.map((p, i) => (
                <View key={`${p.created_at}-${i}`} style={s.tableRow}>
                  <View style={{ flex: 1 }}>
                    <Text style={[s.rowTitle, { color: c.ink }]}>
                      {planName(p.product)} · {sourceName(p.source)}
                    </Text>
                    <Text style={[s.metricSub, { color: c.muted }]} selectable>
                      {date(p.created_at)}
                      {rows.length > 1 ? ` · ${p.code}` : ''}
                      {p.order_ref ? ` · ${t.partnerOrder} ${p.order_ref}` : ''}
                    </Text>
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={[s.rowTitle, { color: c.ink }]}>{moneyTotal([{ currency: p.currency, value: p.amount }])}</Text>
                    <Text style={[s.metricSub, { color: c.good }]}>
                      {t.partnerYou} {moneyTotal([{ currency: p.currency, value: p.earned }])}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      )}

      {session && rows && rows.length > 0 && (
        <>
          <Text style={[s.small, { color: c.muted }]}>{t.partnerMoneyHow}</Text>
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
  linkSmall: { fontSize: 13, fontWeight: '600' },
  link: { fontSize: 16, fontWeight: '700' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  metric: { flexGrow: 1, flexBasis: '45%', borderWidth: 2, borderRadius: 16, padding: 14, gap: 2 },
  third: { flexBasis: '30%', paddingHorizontal: 10 },
  metricLabel: { fontSize: 13, fontWeight: '700' },
  metricValue: { fontSize: 30, fontWeight: '800', fontVariant: ['tabular-nums'] },
  metricSub: { fontSize: 12 },
  metricValue30: { fontSize: 22, fontWeight: '800', fontVariant: ['tabular-nums'] },
  pair: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 },
  earn: { borderWidth: 2, borderRadius: 16, padding: 14, gap: 6 },
  earnValue: { fontSize: 24, fontWeight: '800', fontVariant: ['tabular-nums'] },
  table: { borderWidth: 2, borderRadius: 16, padding: 14, gap: 12 },
  tableRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  rowTitle: { fontSize: 15, fontWeight: '700' },
  section: { fontSize: 13, fontWeight: '800', letterSpacing: 1, textTransform: 'uppercase' },
  small: { fontSize: 13, lineHeight: 18 },
  ghostBtn: { alignSelf: 'center', paddingVertical: 10, paddingHorizontal: 8 },
  ghost: { fontSize: 13, fontWeight: '700', letterSpacing: 0.8, textTransform: 'uppercase' },
});
