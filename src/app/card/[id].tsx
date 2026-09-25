import { router, useLocalSearchParams } from 'expo-router';
import type { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TapText, WalletButton } from '../../components/PhraseSheet';
import { Button, RichText, SpeakButton } from '../../components/ui';
import { findCard } from '../../content/cards';
import type { Word } from '../../content/types';
import { cardSessionId } from '../../engine/cardPractice';
import { reading } from '../../engine/phrases';
import { usePalette } from '../../lib/theme';
import { useProgress } from '../../state/progress';

/** One card: the headline with its reading, meaning, examples, expressions, a note and practice. */
export default function CardScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { progress, t } = useProgress();
  const lang = progress.lang;
  const card = findCard(id);
  const goBack = () => (router.canGoBack() ? router.back() : router.replace('/cards'));

  if (!card) {
    return (
      <View style={[s.center, { backgroundColor: c.bg }]}>
        <Button tone="primary" onPress={goBack}>
          ←
        </Button>
      </View>
    );
  }

  const row = (w: Word, i: number, numbered: boolean) => (
    <View key={w.ro} style={[s.row, i > 0 && { borderTopWidth: 1, borderTopColor: c.line }]}>
      {numbered && (
        <View style={[s.num, { backgroundColor: c.blueSoft }]}>
          <Text style={[s.numText, { color: c.blue }]}>{i + 1}</Text>
        </View>
      )}
      <View style={{ flex: 1, gap: 3 }}>
        <TapText style={[s.rowRo, { color: c.ink }]} tr={w.tr}>
          {w.ro}
        </TapText>
        <Text style={[s.rowTr, { color: c.muted }]}>{w.tr[lang]}</Text>
      </View>
      <SpeakButton text={w.ro} size={36} />
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

      <View style={[s.hero, { backgroundColor: c.surface, borderColor: c.line }]}>
        <Text style={[s.kicker, { color: c.ochre }]}>{t.cardKinds[card.kind]}</Text>
        <View style={s.heroRow}>
          <TapText style={[s.headline, { color: c.ink }]} tr={card.tr}>
            {card.ro}
          </TapText>
          <SpeakButton text={card.ro} size={48} />
        </View>
        <Text style={[s.say, { color: c.muted }]}>≈ «{reading(card.ro, lang)}»</Text>
        <View style={s.heroFoot}>
          <View style={[s.trChip, { backgroundColor: c.blueSoft }]}>
            <Text style={[s.trChipText, { color: c.blue }]}>= {card.tr[lang]}</Text>
          </View>
          {card.kind !== 'topic' && <WalletButton ro={card.ro.replace(/[.!?]$/, '')} />}
        </View>
      </View>

      <Section title={t.cardMeaning} icon="⭐">
        <Text style={[s.text, { color: c.ink }]}>{card.meaning[lang]}</Text>
      </Section>

      <Section title={t.examples} icon="💬">
        <View style={[s.list, { borderColor: c.line }]}>{card.examples.map((w, i) => row(w, i, true))}</View>
      </Section>

      <Section title={t.expressions} icon="📌">
        <View style={[s.list, { borderColor: c.line }]}>{card.expressions.map((w, i) => row(w, i, false))}</View>
      </Section>

      <Section title={t.remember} icon="💡">
        <RichText style={s.text}>{card.remember[lang]}</RichText>
      </Section>

      {card.quote && (
        <View style={[s.quote, { backgroundColor: c.ochreSoft, borderColor: c.ochreEdge }]}>
          <TapText style={[s.quoteRo, { color: c.ink }]} tr={card.quote.tr}>
            {card.quote.ro}
          </TapText>
          <Text style={[s.rowTr, { color: c.muted }]}>{card.quote.tr[lang]}</Text>
        </View>
      )}

      <Button
        tone="primary"
        onPress={() => router.push({ pathname: '/lesson/[id]', params: { id: cardSessionId(card.id) } })}
      >
        {t.practiceCard}
      </Button>
    </ScrollView>
  );
}

function Section({ title, icon, children }: { title: string; icon: string; children: ReactNode }) {
  const c = usePalette();
  return (
    <View style={[s.section, { backgroundColor: c.surface, borderColor: c.line }]}>
      <Text style={[s.sectionTitle, { color: c.ink }]}>
        {icon} {title}
      </Text>
      {children}
    </View>
  );
}

const s = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  body: { paddingHorizontal: 16, gap: 14, maxWidth: 640, width: '100%', alignSelf: 'center' },
  backWrap: { alignSelf: 'flex-start', paddingVertical: 4 },
  back: { fontSize: 15, fontWeight: '700' },
  hero: { borderWidth: 2, borderRadius: 22, padding: 18, gap: 6 },
  kicker: { fontSize: 12, fontWeight: '800', letterSpacing: 1.2, textTransform: 'uppercase' },
  heroRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  headline: { flex: 1, fontSize: 36, fontWeight: '800', lineHeight: 44 },
  say: { fontSize: 17 },
  heroFoot: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginTop: 6 },
  trChip: { borderRadius: 12, paddingHorizontal: 12, paddingVertical: 6, flexShrink: 1 },
  trChipText: { fontSize: 16, fontWeight: '800' },
  section: { borderWidth: 2, borderRadius: 18, padding: 16, gap: 10 },
  sectionTitle: { fontSize: 16, fontWeight: '800' },
  text: { fontSize: 16, lineHeight: 23 },
  list: { gap: 0 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10 },
  num: { width: 26, height: 26, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  numText: { fontSize: 13, fontWeight: '800' },
  rowRo: { fontSize: 17, fontWeight: '700', lineHeight: 23 },
  rowTr: { fontSize: 14, lineHeight: 19 },
  quote: { borderWidth: 2, borderRadius: 18, padding: 16, gap: 4 },
  quoteRo: { fontSize: 18, fontStyle: 'italic', fontWeight: '700', lineHeight: 25 },
});
