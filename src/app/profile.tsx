import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DailyGoal } from '../components/DailyGoal';
import { Card, Title } from '../components/ui';
import { COURSE } from '../content/course';
import { achievements } from '../engine/achievements';
import { levelOf } from '../engine/level';
import { usePalette } from '../lib/theme';
import { addDays, day, GOALS } from '../state/model';
import { useProgress } from '../state/progress';

/** Monday-first week containing today, as YYYY-MM-DD. */
function thisWeek(now = new Date()): string[] {
  const today = day(now);
  const offset = (now.getDay() + 6) % 7;
  return Array.from({ length: 7 }, (_, i) => addDays(today, i - offset));
}

export default function Profile() {
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { progress, t, setDailyGoal } = useProgress();
  const lang = progress.lang;
  const lvl = levelOf(progress.xp);
  const lvlPct = Math.round((100 * (progress.xp - lvl.from)) / (lvl.to - lvl.from));
  const week = thisWeek();
  const today = day(new Date());
  const weekMax = Math.max(progress.dailyGoal, ...week.map((d) => progress.xpByDay[d] ?? 0));
  const lessonsDone = COURSE.flatMap((u) => u.lessons).filter((l) => l.id in progress.completed).length;
  const list = achievements(progress);
  const earned = list.filter((a) => a.value >= a.target).length;

  const stats: [string, string][] = [
    [t.totalXp, `⚡ ${progress.xp}`],
    [t.bestStreak, `🔥 ${Math.max(progress.bestStreak, progress.streak)}`],
    [t.lessonsDone, `📘 ${lessonsDone}`],
  ];

  return (
    <ScrollView
      style={{ backgroundColor: c.bg }}
      contentContainerStyle={[s.body, { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 40 }]}
    >
      <Pressable
        onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}
        hitSlop={10}
        accessibilityRole="button"
        style={s.backWrap}
      >
        <Text style={[s.back, { color: c.muted }]}>← {t.back}</Text>
      </Pressable>
      <Title>{t.profile}</Title>

      <Card style={{ gap: 8 }}>
        <View style={s.row}>
          <Text style={[s.level, { color: c.blue }]}>{t.levelN(lvl.level)}</Text>
          <Text style={[s.muted, { color: c.muted }]}>{t.toNextLevel(lvl.to - progress.xp)}</Text>
        </View>
        <View style={[s.track, { backgroundColor: c.sunk }]}>
          <View style={[s.fill, { width: `${lvlPct}%`, backgroundColor: c.blue }]} />
        </View>
      </Card>

      <View style={s.statRow}>
        {stats.map(([label, value]) => (
          <View key={label} style={[s.stat, { backgroundColor: c.surface, borderColor: c.line }]}>
            <Text style={[s.statValue, { color: c.ink }]}>{value}</Text>
            <Text style={[s.statLabel, { color: c.muted }]}>{label}</Text>
          </View>
        ))}
      </View>

      <DailyGoal />

      <Text style={[s.h, { color: c.ink }]}>{t.thisWeek}</Text>
      <Card style={s.chart}>
        {week.map((d, i) => {
          const xp = progress.xpByDay[d] ?? 0;
          const met = xp >= progress.dailyGoal;
          return (
            <View key={d} style={s.col}>
              <Text style={[s.colValue, { color: xp ? c.ink : c.muted }]}>{xp || ''}</Text>
              <View style={[s.bar, { backgroundColor: c.sunk }]}>
                <View
                  style={[
                    s.barFill,
                    { height: `${Math.round((100 * xp) / weekMax)}%`, backgroundColor: met ? c.good : c.ochre },
                  ]}
                />
              </View>
              <Text style={[s.colDay, { color: d === today ? c.blue : c.muted, fontWeight: d === today ? '800' : '600' }]}>
                {t.weekDays[i]}
              </Text>
            </View>
          );
        })}
      </Card>

      <Text style={[s.h, { color: c.ink }]}>{t.goalTitle}</Text>
      <View style={s.goals}>
        {GOALS.map((g) => {
          const on = progress.dailyGoal === g;
          return (
            <Pressable
              key={g}
              onPress={() => setDailyGoal(g)}
              accessibilityRole="button"
              accessibilityState={{ selected: on }}
              style={[s.goal, { backgroundColor: on ? c.blueSoft : c.surface, borderColor: on ? c.blue : c.line }]}
            >
              <Text style={[s.goalXp, { color: on ? c.blue : c.ink }]}>{g} ⚡</Text>
              <Text style={[s.goalName, { color: c.muted }]}>{t.goalNames[g]}</Text>
            </Pressable>
          );
        })}
      </View>
      <Text style={[s.muted, { color: c.muted }]}>{t.goalNote}</Text>
      <Text style={[s.muted, { color: c.muted }]}>
        🧊 {t.freezes}: {progress.freezes}. {t.freezeHint}
      </Text>

      <Pressable
        onPress={() => router.push({ pathname: '/welcome', params: { retake: '1' } })}
        accessibilityRole="button"
        style={[s.retake, { backgroundColor: c.surface, borderColor: c.line }]}
      >
        <Text style={[s.goalXp, { color: c.ink }]}>🧭 {t.retakeTest}</Text>
      </Pressable>

      <Text style={[s.h, { color: c.ink }]}>
        {t.achievements} · {earned}/{list.length}
      </Text>
      <View style={s.grid}>
        {list.map((a) => {
          const got = a.value >= a.target;
          return (
            <View
              key={a.id}
              style={[s.ach, { backgroundColor: c.surface, borderColor: got ? c.ochre : c.line, opacity: got ? 1 : 0.75 }]}
            >
              <Text style={[s.achIcon, !got && s.dim]}>{a.icon}</Text>
              <Text style={[s.achTitle, { color: c.ink }]}>{a.title[lang]}</Text>
              <Text style={[s.achDesc, { color: c.muted }]}>{a.desc[lang]}</Text>
              {!got && (
                <View style={[s.achTrack, { backgroundColor: c.sunk }]}>
                  <View style={[s.fill, { width: `${Math.round((100 * a.value) / a.target)}%`, backgroundColor: c.ochre }]} />
                </View>
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  body: { paddingHorizontal: 16, gap: 14, maxWidth: 560, width: '100%', alignSelf: 'center' },
  backWrap: { alignSelf: 'flex-start', paddingVertical: 4 },
  back: { fontSize: 15, fontWeight: '700' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' },
  level: { fontSize: 22, fontWeight: '800' },
  muted: { fontSize: 14, lineHeight: 20 },
  track: { height: 12, borderRadius: 99, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: 99 },
  statRow: { flexDirection: 'row', gap: 10 },
  stat: { flex: 1, borderWidth: 2, borderRadius: 16, paddingVertical: 12, paddingHorizontal: 6, alignItems: 'center', gap: 2 },
  statValue: { fontSize: 18, fontWeight: '800', fontVariant: ['tabular-nums'] },
  statLabel: { fontSize: 12, textAlign: 'center' },
  h: { fontSize: 18, fontWeight: '800', marginTop: 6 },
  chart: { flexDirection: 'row', justifyContent: 'space-between', gap: 6, paddingVertical: 14 },
  col: { flex: 1, alignItems: 'center', gap: 4 },
  colValue: { fontSize: 11, fontWeight: '700', fontVariant: ['tabular-nums'], height: 14 },
  bar: { width: '70%', height: 90, borderRadius: 8, justifyContent: 'flex-end', overflow: 'hidden' },
  barFill: { width: '100%', borderRadius: 8 },
  colDay: { fontSize: 12 },
  goals: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  goal: { flexGrow: 1, flexBasis: '22%', minWidth: 70, borderWidth: 2, borderBottomWidth: 4, borderRadius: 14, paddingVertical: 10, alignItems: 'center' },
  goalXp: { fontSize: 16, fontWeight: '800' },
  goalName: { fontSize: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  retake: { borderWidth: 2, borderBottomWidth: 4, borderRadius: 14, paddingVertical: 12, alignItems: 'center' },
  ach: { flexBasis: '47%', flexGrow: 1, borderWidth: 2, borderRadius: 16, padding: 12, gap: 4 },
  achIcon: { fontSize: 28 },
  dim: { opacity: 0.4 },
  achTitle: { fontSize: 15, fontWeight: '800' },
  achDesc: { fontSize: 13, lineHeight: 18 },
  achTrack: { height: 8, borderRadius: 99, overflow: 'hidden', marginTop: 4 },
});
