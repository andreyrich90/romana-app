import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '../components/ui';
import { COURSE, isUnlocked } from '../content/course';
import type { Lang, LessonMeta } from '../content/types';
import { usePalette } from '../lib/theme';
import { useProgress } from '../state/progress';

/** Nodes of the lesson path zig-zag like a trail, one offset per position in the unit. */
const OFFSETS = [0, -52, -74, -40, 28];

export default function Home() {
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { progress, t, setLang } = useProgress();
  const lang = progress.lang;
  const [open, setOpen] = useState<string | null>(null);

  const status = (l: LessonMeta) =>
    l.id in progress.completed ? 'done' : !isUnlocked(l.id, progress.completed) ? 'locked' : l.lesson ? 'open' : 'soon';

  return (
    <View style={{ flex: 1, backgroundColor: c.bg, paddingTop: insets.top }}>
      <View style={[s.top, { borderColor: c.line }]}>
        <Text style={[s.logo, { color: c.ink }]}>
          Română<Text style={{ color: c.blue }}>.</Text>
        </Text>
        <View style={s.stats}>
          <Text style={[s.stat, { color: c.ochre }]} accessibilityLabel={`${t.streak}: ${progress.streak}`}>
            🔥 {progress.streak}
          </Text>
          <Text style={[s.stat, { color: c.blue }]} accessibilityLabel={`${t.xp}: ${progress.xp}`}>
            ⚡ {progress.xp}
          </Text>
        </View>
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
      </View>

      <ScrollView contentContainerStyle={[s.scroll, { paddingBottom: insets.bottom + 32 }]}>
        {COURSE.map((unit, ui) => (
          <View key={unit.id} style={s.unitBlock}>
            <View style={[s.unit, { backgroundColor: ui === 0 ? c.blue : c.surface, borderColor: ui === 0 ? c.blueEdge : c.line }]}>
              <Text style={[s.unitKicker, { color: ui === 0 ? c.onBlue : c.muted }]}>
                {unit.level} · {t.unit} {ui + 1}
              </Text>
              <Text style={[s.unitTitle, { color: ui === 0 ? c.onBlue : c.ink }]}>{unit.title[lang]}</Text>
              <Text style={[s.unitRo, { color: ui === 0 ? c.onBlue : c.muted }]}>{unit.ro}</Text>
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
        ))}
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  top: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 2 },
  logo: { fontSize: 22, fontWeight: '800', letterSpacing: -0.3 },
  stats: { flex: 1, flexDirection: 'row', justifyContent: 'center', gap: 14 },
  stat: { fontSize: 16, fontWeight: '800', fontVariant: ['tabular-nums'] },
  seg: { flexDirection: 'row', borderRadius: 12, padding: 3 },
  segBtn: { paddingVertical: 6, paddingHorizontal: 11, borderRadius: 9 },
  segText: { fontWeight: '700', fontSize: 14 },
  scroll: { paddingHorizontal: 16, paddingTop: 20, gap: 28 },
  unitBlock: { gap: 18 },
  unit: { borderRadius: 20, borderWidth: 2, borderBottomWidth: 5, padding: 18, gap: 2 },
  unitKicker: { fontSize: 12, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase', opacity: 0.85 },
  unitTitle: { fontSize: 24, fontWeight: '800' },
  unitRo: { fontSize: 15, fontStyle: 'italic', opacity: 0.9 },
  path: { alignItems: 'center', gap: 14 },
  node: { alignItems: 'center', gap: 6 },
  dot: { width: 68, height: 62, borderRadius: 34, borderBottomWidth: 6, alignItems: 'center', justifyContent: 'center' },
  dotText: { fontSize: 22, fontWeight: '800' },
  nodeLabel: { fontSize: 13, fontWeight: '700' },
  pop: { marginTop: 4, width: 240, borderWidth: 2, borderRadius: 16, padding: 14, gap: 10 },
  popTitle: { fontWeight: '800', fontSize: 16 },
});
