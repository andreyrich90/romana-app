import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Title } from '../components/ui';
import { DayCard } from '../components/DayCard';
import { CARDS, cardOfDay, type CardKind, type CardTheme, type LearnCard } from '../content/cards';
import type { Lang, Word } from '../content/types';
import { bare, normalize } from '../engine/check';
import { usePalette } from '../lib/theme';
import { day } from '../state/model';
import { useProgress } from '../state/progress';

const KINDS: CardKind[] = ['word', 'phrase', 'topic'];
const THEMES: CardTheme[] = ['work', 'docs', 'health', 'shop', 'transport', 'home', 'bank', 'food', 'social', 'travel', 'post', 'school', 'leisure'];
const ICON: Record<CardKind | CardTheme, string> = { work: '💼', docs: '📄', health: '🩺', shop: '🛒', transport: '🚌', home: '🏠', bank: '🏦', food: '🍽', social: '👋', travel: '🧳', post: '📦', school: '🎒', leisure: '⚽', word: '📝', phrase: '💬', topic: '💡' };

type Group = CardKind | CardTheme;
type Filter = 'all' | Group;

const fold = (x: string) => bare(normalize(x));

/** Themed cards go to their theme; the rest to their kind. */
const groupOf = (card: LearnCard): Group => card.theme ?? card.kind;
const GROUPS: Group[] = [...THEMES, ...KINDS];

/**
 * Whether a card matches the query, and the example or expression that did, if the
 * headline itself did not — shown under the card so the reader sees why it came up.
 */
function match(card: LearnCard, q: string, lang: Lang): { hit: boolean; via?: Word } {
  if (!q) return { hit: true };
  if (fold(card.ro).includes(q) || fold(card.tr[lang]).includes(q)) return { hit: true };
  const via = [...card.expressions, ...card.examples].find((w) => fold(w.ro).includes(q) || fold(w.tr[lang]).includes(q));
  return via ? { hit: true, via } : { hit: false };
}

/** The card library: search, a filter per theme and kind, today's card, then the groups. */
export default function Cards() {
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { progress, t } = useProgress();
  const lang = progress.lang;
  const today = cardOfDay(day(new Date()));
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const q = fold(query.trim());

  // Every card that passes the search, with the line that matched, grouped for display.
  const found = useMemo(
    () =>
      CARDS.map((card) => ({ card, ...match(card, q, lang) }))
        .filter((r) => r.hit)
        .map((r) => ({ card: r.card, via: r.via })),
    [q, lang],
  );
  const count = (g: Group) => found.filter((r) => groupOf(r.card) === g).length;
  const groups = GROUPS.filter((g) => filter === 'all' || filter === g)
    .map((g) => ({ key: g, rows: found.filter((r) => groupOf(r.card) === g) }))
    .filter((g) => g.rows.length);
  const label = (g: Group) => ((THEMES as string[]).includes(g) ? t.cardThemes[g] : t.cardKinds[g]);

  const chip = (key: Filter, text: string, n: number) => {
    const on = filter === key;
    return (
      <Pressable
        key={key}
        onPress={() => setFilter(key)}
        accessibilityRole="button"
        accessibilityState={{ selected: on }}
        style={[s.chip, { backgroundColor: on ? c.blue : c.surface, borderColor: on ? c.blue : c.line }]}
      >
        <Text style={[s.chipText, { color: on ? c.onBlue : c.ink }]}>
          {text} <Text style={{ color: on ? c.onBlue : c.muted }}>{n}</Text>
        </Text>
      </Pressable>
    );
  };

  return (
    <ScrollView
      style={{ backgroundColor: c.bg }}
      contentContainerStyle={[s.body, { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 40 }]}
      keyboardShouldPersistTaps="handled"
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

      <View style={[s.searchBox, { backgroundColor: c.surface, borderColor: c.line }]}>
        <Text style={s.searchIcon}>🔎</Text>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder={t.search}
          placeholderTextColor={c.muted}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="search"
          style={[s.input, { color: c.ink }]}
        />
        {query ? (
          <Pressable onPress={() => setQuery('')} hitSlop={10} accessibilityRole="button" accessibilityLabel={t.close}>
            <Text style={[s.clear, { color: c.muted }]}>✕</Text>
          </Pressable>
        ) : null}
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.chips} style={s.chipsWrap}>
        {chip('all', t.cardsAll, found.length)}
        {GROUPS.filter((g) => count(g) > 0 || filter === g).map((g) => chip(g, `${ICON[g]} ${label(g)}`, count(g)))}
      </ScrollView>

      {!q && filter === 'all' && <DayCard card={today} />}

      {groups.length === 0 && <Text style={[s.empty, { color: c.muted }]}>{t.nothingFound}</Text>}

      {groups.map((g) => (
        <View key={g.key} style={s.group}>
          <Text style={[s.groupTitle, { color: c.ochre }]}>
            {ICON[g.key]} {label(g.key)}
          </Text>
          <View style={[s.list, { backgroundColor: c.surface, borderColor: c.line }]}>
            {g.rows.map(({ card, via }, i) => (
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
                  {via && (
                    <Text style={[s.via, { color: c.blue }]} numberOfLines={2}>
                      {via.ro} — {via.tr[lang]}
                    </Text>
                  )}
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
  via: { fontSize: 14, lineHeight: 19, marginTop: 2 },
  searchBox: { flexDirection: 'row', alignItems: 'center', gap: 8, borderWidth: 2, borderRadius: 14, paddingHorizontal: 12 },
  searchIcon: { fontSize: 16 },
  input: { flex: 1, paddingVertical: 12, fontSize: 16 },
  clear: { fontSize: 16, fontWeight: '700', paddingHorizontal: 4 },
  chipsWrap: { marginHorizontal: -16, flexGrow: 0 },
  chips: { gap: 8, paddingHorizontal: 16 },
  chip: { borderWidth: 2, borderRadius: 20, paddingVertical: 7, paddingHorizontal: 12 },
  chipText: { fontSize: 14, fontWeight: '700' },
  empty: { fontSize: 15, textAlign: 'center', paddingVertical: 24 },
});
