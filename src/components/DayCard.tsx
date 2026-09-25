import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { LearnCard } from '../content/cards';
import { usePalette } from '../lib/theme';
import { useProgress } from '../state/progress';

/** Today's card as a large tile; the home screen shows the same one. */
export function DayCard({ card }: { card: LearnCard }) {
  const c = usePalette();
  const { progress, t } = useProgress();
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => router.push({ pathname: '/card/[id]', params: { id: card.id } })}
      style={({ pressed }) => [
        s.day,
        { backgroundColor: c.ochreSoft, borderColor: c.ochreEdge },
        pressed && { opacity: 0.8 },
      ]}
    >
      <Text style={s.dayIcon}>✨</Text>
      <View style={{ flex: 1, gap: 2 }}>
        <Text style={[s.dayKicker, { color: c.ochre }]}>{t.ofTheDay}</Text>
        <Text style={[s.dayRo, { color: c.ink }]}>{card.ro}</Text>
        <Text style={[s.tr, { color: c.muted }]}>{card.tr[progress.lang]}</Text>
      </View>
      <Text style={[s.chev, { color: c.ochre }]}>›</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  day: { flexDirection: 'row', alignItems: 'center', gap: 14, borderWidth: 2, borderBottomWidth: 4, borderRadius: 18, padding: 16 },
  dayIcon: { fontSize: 30 },
  dayKicker: { fontSize: 12, fontWeight: '800', letterSpacing: 1.2, textTransform: 'uppercase' },
  dayRo: { fontSize: 22, fontWeight: '800' },
  tr: { fontSize: 14, lineHeight: 19 },
  chev: { fontSize: 26, fontWeight: '600' },
});
