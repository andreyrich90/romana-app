import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CITIZENSHIP } from '../content/citizenship';
import { usePalette } from '../lib/theme';
import { usePremium } from '../state/premium';
import { useProgress } from '../state/progress';

const ICONS = ['✋', '🎵', '🏛', '🗺', '💬'];

/** Preparing for the citizenship oath and interview: five lessons, Premium only. */
export default function CitizenshipScreen() {
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { progress, t } = useProgress();
  const { premium } = usePremium();
  const lang = progress.lang;
  const goBack = () => (router.canGoBack() ? router.back() : router.replace('/'));
  const open = (id: string) =>
    premium
      ? router.push({ pathname: '/lesson/[id]', params: { id } })
      : router.push({ pathname: '/premium', params: { reason: 'citizenship' } });

  return (
    <ScrollView
      style={{ backgroundColor: c.bg }}
      contentContainerStyle={[s.body, { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 40 }]}
    >
      <Pressable onPress={goBack} hitSlop={10} accessibilityRole="button" style={s.backWrap}>
        <Text style={[s.back, { color: c.muted }]}>← {t.back}</Text>
      </Pressable>

      <View style={[s.hero, { backgroundColor: c.blue, borderColor: c.blueEdge }]}>
        <Text style={s.flag}>🇷🇴</Text>
        <Text style={[s.title, { color: c.onBlue }]}>{t.czTitle}</Text>
        <Text style={[s.sub, { color: c.onBlue }]}>{t.czSub}</Text>
        {!premium && <Text style={[s.badge, { backgroundColor: c.ochre, color: c.onBlue }]}>💎 Premium</Text>}
      </View>

      <Text style={[s.intro, { color: c.muted }]}>{t.czIntro}</Text>

      <View style={[s.list, { backgroundColor: c.surface, borderColor: c.line }]}>
        {CITIZENSHIP.map((lesson, i) => {
          const done = lesson.id in progress.completed;
          return (
            <Pressable
              key={lesson.id}
              accessibilityRole="button"
              onPress={() => open(lesson.id)}
              style={({ pressed }) => [
                s.row,
                i > 0 && { borderTopWidth: 1, borderTopColor: c.line },
                pressed && { backgroundColor: c.sunk },
              ]}
            >
              <Text style={s.icon}>{ICONS[i]}</Text>
              <View style={{ flex: 1, gap: 2 }}>
                <Text style={[s.rowTitle, { color: c.ink }]}>
                  {i + 1}. {lesson.title[lang]}
                </Text>
                <Text style={[s.rowSub, { color: c.muted }]} numberOfLines={1}>
                  {lesson.words.map((w) => w.ro).join(' · ')}
                </Text>
              </View>
              <Text style={[s.mark, { color: done ? c.good : c.muted }]}>{done ? '✓' : premium ? '›' : '💎'}</Text>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  body: { paddingHorizontal: 16, gap: 16, maxWidth: 560, width: '100%', alignSelf: 'center' },
  backWrap: { alignSelf: 'flex-start', paddingVertical: 4 },
  back: { fontSize: 15, fontWeight: '700' },
  hero: { borderWidth: 2, borderBottomWidth: 5, borderRadius: 22, padding: 20, alignItems: 'center', gap: 6 },
  flag: { fontSize: 40 },
  title: { fontSize: 24, fontWeight: '800', textAlign: 'center' },
  sub: { fontSize: 15, textAlign: 'center', opacity: 0.9 },
  badge: { marginTop: 4, fontSize: 12, fontWeight: '800', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, overflow: 'hidden' },
  intro: { fontSize: 15, lineHeight: 21 },
  list: { borderWidth: 2, borderRadius: 18, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 14, paddingHorizontal: 16 },
  icon: { fontSize: 26 },
  rowTitle: { fontSize: 17, fontWeight: '800' },
  rowSub: { fontSize: 13 },
  mark: { fontSize: 22, fontWeight: '700' },
});
