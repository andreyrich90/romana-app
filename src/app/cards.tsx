import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Title } from '../components/ui';
import { DayCard } from '../components/DayCard';
import { CARDS, cardOfDay, type CardKind } from '../content/cards';
import { usePalette } from '../lib/theme';
import { day } from '../state/model';
import { useProgress } from '../state/progress';

const KINDS: CardKind[] = ['word', 'phrase', 'topic'];
const ICON: Record<CardKind, string> = { word: '📝', phrase: '💬', topic: '💡' };

/** The card library: today's card first, then every card by kind. */
export default function Cards() {
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { progress, t } = useProgress();
  const lang = progress.lang;
  const today = cardOfDay(day(new Date()));

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
      <Title>{t.cards}</Title>
      <Text style={[s.sub, { color: c.muted }]}>{t.cardsSub}</Text>

      <DayCard card={today} />

      {KINDS.map((kind) => (
        <View key={kind} style={s.group}>
          <Text style={[s.groupTitle, { color: c.ochre }]}>
            {ICON[kind]} {t.cardKinds[kind]}
          </Text>
          <View style={[s.list, { backgroundColor: c.surface, borderColor: c.line }]}>
            {CARDS.filter((k) => k.kind === kind).map((card, i) => (
              <Pressable
                key={card.id}
                accessibilityRole="button"
                onPress={() => router.push({ pathname: '/card/[id]', params: { id: card.id } })}
                style={({ pressed }) => [
                  s.row,
                  i > 0 && { borderTopWidth: 1, borderTopColor: c.line },
                  pressed && { backgroundColor: c.sunk },
                ]}
              >
                <View style={{ flex: 1, gap: 2 }}>
                  <Text style={[s.ro, { color: c.ink }]}>{card.ro}</Text>
                  <Text style={[s.tr, { color: c.muted }]}>{card.tr[lang]}</Text>
                </View>
                <Text style={[s.chev, { color: c.muted }]}>›</Text>
              </Pressable>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  body: { paddingHorizontal: 16, gap: 12, maxWidth: 640, width: '100%', alignSelf: 'center' },
  backWrap: { alignSelf: 'flex-start', paddingVertical: 4 },
  back: { fontSize: 15, fontWeight: '700' },
  sub: { fontSize: 15, lineHeight: 21 },
  group: { gap: 8, marginTop: 8 },
  groupTitle: { fontSize: 13, fontWeight: '800', letterSpacing: 1, textTransform: 'uppercase' },
  list: { borderWidth: 2, borderRadius: 18, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 14, paddingHorizontal: 16 },
  ro: { fontSize: 18, fontWeight: '800' },
  tr: { fontSize: 14, lineHeight: 19 },
  chev: { fontSize: 26, fontWeight: '600' },
});
