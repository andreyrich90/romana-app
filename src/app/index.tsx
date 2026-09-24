import { Redirect, router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DailyGoal } from '../components/DailyGoal';
import { Button } from '../components/ui';
import { COURSE, isUnlocked, lessonIndex } from '../content/course';
import type { Lang, LessonMeta } from '../content/types';
import { dueCount, PRACTICE_ID } from '../engine/practice';
import { usePalette } from '../lib/theme';
import { day, walletWords } from '../state/model';
import { useAuth } from '../state/auth';
import { useProgress } from '../state/progress';

/** Nodes of the lesson path zig-zag like a trail, one offset per position in the unit. */
const OFFSETS = [0, -52, -74, -40, 28];

export default function Home() {
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { ready, progress, t, setLang } = useProgress();
  const auth = useAuth();
  const initial = auth.session?.user.email?.[0]?.toUpperCase();
  const lang = progress.lang;
  const [open, setOpen] = useState<string | null>(null);
  const hasLessons = Object.keys(progress.completed).length > 0;
  const walletCount = walletWords(progress).length;
  const due = hasLessons ? dueCount(progress.completed, progress.recall, day(new Date())) : 0;

  const status = (l: LessonMeta) =>
    l.id in progress.completed
      ? 'done'
      : !isUnlocked(l.id, progress.completed, progress.startAt)
        ? 'locked'
        : l.lesson
          ? 'open'
          : 'soon';

  // Open on the unit the learner is working through, not always on the alphabet.
  const scroller = useRef<ScrollView>(null);
  const unitY = useRef<Record<string, number>>({});
  const scrolled = useRef(false);
  // The first lesson still to do from the start point on; skipped earlier lessons do not count.
  const current = COURSE.find((u) =>
    u.lessons.some(
      (l) =>
        l.lesson &&
        !(l.id in progress.completed) &&
        lessonIndex(l.id) >= lessonIndex(progress.startAt) &&
        isUnlocked(l.id, progress.completed, progress.startAt),
    ),
  )?.id;
  const scrollToCurrent = (unitId: string, y: number) => {
    unitY.current[unitId] = y;
    if (scrolled.current || unitId !== current || COURSE[0].id === unitId) return;
    scrolled.current = true;
    setTimeout(() => scroller.current?.scrollTo({ y: Math.max(0, y - 12), animated: false }), 0);
  };
  useEffect(() => {
    scrolled.current = false;
  }, [progress.startAt]);

  if (ready && !progress.onboarded) return <Redirect href="/welcome" />;

  return (
    <View style={{ flex: 1, backgroundColor: c.bg, paddingTop: insets.top }}>
      <View style={[s.top, { borderColor: c.line }]}>
        <Text style={[s.logo, { color: c.ink }]}>
          Română<Text style={{ color: c.blue }}>.</Text>
        </Text>
        <Pressable
          style={s.stats}
          onPress={() => router.push('/profile')}
          accessibilityRole="button"
          accessibilityLabel={t.profile}
        >
          <Text style={[s.stat, { color: c.ochre }]} accessibilityLabel={`${t.streak}: ${progress.streak}`}>
            🔥 {progress.streak}
          </Text>
          <Text style={[s.stat, { color: c.blue }]} accessibilityLabel={`${t.xp}: ${progress.xp}`}>
            ⚡ {progress.xp}
          </Text>
        </Pressable>
        <View style={[s.seg, { backgroundColor: c.sunk }]}>
          {(['ru', 'ua'] as Lang[]).map((l) => (
            <Pressable
              key={l}
              accessibilityRole="button"
              accessibilityState={{ selected: lang === l }}
              onPress={() => setLang(l)}
              style={[s.segBtn, lang === l && { backgroundColor: c.surface }]}
            >
              <Text style={[s.segText, { color: lang === l ? c.ink : c.muted }]}>{l.toUpperCase()}</Text>
            </Pressable>
          ))}
        </View>
        {auth.enabled && (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t.account}
            onPress={() => router.push('/account')}
            style={({ pressed }) => [
              s.avatar,
              initial
                ? { backgroundColor: c.blue, borderColor: c.blueEdge }
                : { backgroundColor: c.sunk, borderColor: c.line },
              pressed && { opacity: 0.7 },
            ]}
          >
            <Text style={[s.avatarText, { color: initial ? c.onBlue : c.muted }]}>{initial ?? '👤'}</Text>
          </Pressable>
        )}
      </View>

      <ScrollView ref={scroller} contentContainerStyle={[s.scroll, { paddingBottom: insets.bottom + 32 }]}>
        <View style={s.today}>
          <DailyGoal />
          <Pressable
            accessibilityRole="button"
            disabled={!hasLessons}
            onPress={() => router.push({ pathname: '/lesson/[id]', params: { id: PRACTICE_ID } })}
            style={({ pressed }) => [
              s.practice,
              { backgroundColor: hasLessons ? c.blueSoft : c.sunk, borderColor: hasLessons ? c.blue : c.line },
              pressed && { transform: [{ translateY: 2 }] },
            ]}
          >
            <Text style={s.practiceIcon}>🔁</Text>
            <View style={{ flex: 1 }}>
              <Text style={[s.practiceTitle, { color: c.ink }]}>{t.practice}</Text>
              <Text style={[s.practiceSub, { color: c.muted }]}>{hasLessons ? t.practiceSub : t.practiceEmpty}</Text>
            </View>
            {hasLessons && due > 0 && (
              <Text style={[s.badge, { backgroundColor: c.ochre, color: c.onBlue }]}>{due}</Text>
            )}
          </Pressable>
          {walletCount > 0 && (
            <Pressable
              accessibilityRole="button"
              onPress={() => router.push({ pathname: '/lesson/[id]', params: { id: 'wallet' } })}
              style={({ pressed }) => [
                s.practice,
                { backgroundColor: c.surface, borderColor: c.line },
                pressed && { transform: [{ translateY: 2 }] },
              ]}
            >
              <Text style={s.practiceIcon}>👛</Text>
              <View style={{ flex: 1 }}>
                <Text style={[s.practiceTitle, { color: c.ink }]}>{t.walletTrain}</Text>
                <Text style={[s.practiceSub, { color: c.muted }]}>{t.walletTrainSub(walletCount)}</Text>
              </View>
            </Pressable>
          )}
          <View style={s.links}>
            {[
              ['📖', t.dictionary, '/words'],
              ['🏆', t.achievements, '/profile'],
            ].map(([icon, label, href]) => (
              <Pressable
                key={href + label}
                accessibilityRole="button"
                onPress={() => router.push(href as '/words' | '/profile')}
                style={({ pressed }) => [
                  s.link,
                  { backgroundColor: c.surface, borderColor: c.line },
                  pressed && { opacity: 0.7 },
                ]}
              >
                <Text style={[s.linkText, { color: c.ink }]}>
                  {icon} {label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
        {COURSE.map((unit, ui) => {
          // The first unit of each level gets the filled header, so A2 visibly starts somewhere.
          const lead = ui === 0 || COURSE[ui - 1].level !== unit.level;
          return (
            <View key={unit.id} style={s.unitBlock} onLayout={(e) => scrollToCurrent(unit.id, e.nativeEvent.layout.y)}>
              <View
                style={[
                  s.unit,
                  { backgroundColor: lead ? c.blue : c.surface, borderColor: lead ? c.blueEdge : c.line },
                ]}
              >
                <Text style={[s.unitKicker, { color: lead ? c.onBlue : c.muted }]}>
                  {unit.kicker
                    ? unit.kicker[lang]
                    : `${unit.level} · ${t.unit} ${COURSE.filter((u, j) => j <= ui && u.level === unit.level).length}`}
                </Text>
                <Text style={[s.unitTitle, { color: lead ? c.onBlue : c.ink }]}>{unit.title[lang]}</Text>
                <Text style={[s.unitRo, { color: lead ? c.onBlue : c.muted }]}>{unit.ro}</Text>
              </View>

              <View style={s.path}>
                {unit.lessons.map((l, li) => {
                  const st = status(l);
                  const bg = st === 'done' ? c.good : st === 'open' ? c.ochre : c.sunk;
                  const edge = st === 'done' ? c.goodEdge : st === 'open' ? c.ochreEdge : c.line;
                  const isOpen = open === l.id;
                  return (
                    <View key={l.id} style={[s.node, { transform: [{ translateX: OFFSETS[li % OFFSETS.length] }] }]}>
                      <Pressable
                        accessibilityRole="button"
                        accessibilityLabel={l.title[lang]}
                        onPress={() => setOpen(isOpen ? null : l.id)}
                        style={({ pressed }) => [
                          s.dot,
                          { backgroundColor: bg, borderBottomColor: edge },
                          st === 'open' && { boxShadow: `0 0 0 6px ${c.ochreSoft}` },
                          pressed && { transform: [{ translateY: 3 }], borderBottomWidth: 3 },
                        ]}
                      >
                        <Text style={[s.dotText, { color: st === 'done' || st === 'open' ? '#fff' : c.muted }]}>
                          {st === 'done' ? '✓' : st === 'open' ? '★' : st === 'locked' ? '🔒' : li + 1}
                        </Text>
                      </Pressable>
                      <Text style={[s.nodeLabel, { color: st === 'locked' || st === 'soon' ? c.muted : c.ink }]}>
                        {l.title[lang]}
                      </Text>
                      {isOpen && (
                        <View style={[s.pop, { backgroundColor: c.surface, borderColor: c.line }]}>
                          <Text style={[s.popTitle, { color: c.ink }]}>
                            {t.lesson} {li + 1} · {l.title[lang]}
                          </Text>
                          {st === 'locked' ? (
                            <Text style={{ color: c.muted }}>{t.locked}</Text>
                          ) : st === 'soon' ? (
                            <Text style={{ color: c.muted }}>{t.soon}</Text>
                          ) : (
                            <Button
                              tone="primary"
                              onPress={() => {
                                setOpen(null);
                                router.push({ pathname: '/lesson/[id]', params: { id: l.id } });
                              }}
                            >
                              {st === 'done' ? t.repeat : t.start}
                            </Button>
                          )}
                        </View>
                      )}
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 2,
  },
  logo: { fontSize: 22, fontWeight: '800', letterSpacing: -0.3 },
  stats: { flex: 1, flexDirection: 'row', justifyContent: 'center', gap: 14 },
  stat: { fontSize: 16, fontWeight: '800', fontVariant: ['tabular-nums'] },
  seg: { flexDirection: 'row', borderRadius: 12, padding: 3 },
  segBtn: { paddingVertical: 6, paddingHorizontal: 11, borderRadius: 9 },
  segText: { fontWeight: '700', fontSize: 14 },
  avatar: { width: 36, height: 36, borderRadius: 18, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontSize: 16, fontWeight: '800' },
  today: { gap: 12 },
  practice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 2,
    borderBottomWidth: 5,
    borderRadius: 18,
    padding: 14,
  },
  practiceIcon: { fontSize: 26 },
  practiceTitle: { fontSize: 17, fontWeight: '800' },
  practiceSub: { fontSize: 13, lineHeight: 18 },
  badge: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    textAlign: 'center',
    lineHeight: 28,
    fontWeight: '800',
    overflow: 'hidden',
    paddingHorizontal: 6,
  },
  links: { flexDirection: 'row', gap: 10 },
  link: { flex: 1, borderWidth: 2, borderBottomWidth: 4, borderRadius: 14, paddingVertical: 10, alignItems: 'center' },
  linkText: { fontSize: 15, fontWeight: '700' },
  scroll: { paddingHorizontal: 16, paddingTop: 20, gap: 28 },
  unitBlock: { gap: 18 },
  unit: { borderRadius: 20, borderWidth: 2, borderBottomWidth: 5, padding: 18, gap: 2 },
  unitKicker: { fontSize: 12, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase', opacity: 0.85 },
  unitTitle: { fontSize: 24, fontWeight: '800' },
  unitRo: { fontSize: 15, fontStyle: 'italic', opacity: 0.9 },
  path: { alignItems: 'center', gap: 14 },
  node: { alignItems: 'center', gap: 6 },
  dot: {
    width: 68,
    height: 62,
    borderRadius: 34,
    borderBottomWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotText: { fontSize: 22, fontWeight: '800' },
  nodeLabel: { fontSize: 13, fontWeight: '700' },
  pop: { marginTop: 4, width: 240, borderWidth: 2, borderRadius: 16, padding: 14, gap: 10 },
  popTitle: { fontWeight: '800', fontSize: 16 },
});
