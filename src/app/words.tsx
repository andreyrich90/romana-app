import { router, useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { WalletButton } from '../components/PhraseSheet';
import { SpeakButton, Title } from '../components/ui';
import { COURSE } from '../content/course';
import { POS_LABEL } from '../content/glossary';
import { bare, normalize } from '../engine/check';
import { gloss, phraseInfo } from '../engine/phrases';
import { usePalette } from '../lib/theme';
import { walletWords } from '../state/model';
import { useProgress } from '../state/progress';

const fold = (s: string) => bare(normalize(s));

type Tab = 'all' | 'wallet';

/**
 * The dictionary: every word from completed lessons, grouped by unit, and the wallet —
 * the words the learner saved from the phrase sheet. Both searchable both ways.
 */
export default function Words() {
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { tab: initialTab } = useLocalSearchParams<{ tab?: string }>();
  const { progress, t } = useProgress();
  const lang = progress.lang;
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState<Tab>(initialTab === 'wallet' ? 'wallet' : 'all');
  const q = fold(query);

  const groups = useMemo(
    () =>
      COURSE.map((unit) => ({
        unit,
        words: unit.lessons
          .filter((l) => l.lesson && l.id in progress.completed)
          .flatMap((l) => l.lesson!.words)
          .filter((w) => !q || fold(w.ro).includes(q) || fold(w.tr[lang]).includes(q)),
      })).filter((g) => g.words.length),
    [q, progress.completed, lang],
  );

  // The wallet keeps words it was given the moment they were saved; old entries stay even
  // if a lesson changes. Meaning: the glossary for a single word, the course for a phrase.
  const saved = useMemo(
    () =>
      walletWords(progress)
        .map((ro) => {
          const g = gloss(ro);
          const tr = g ? (lang === 'ru' ? g[2] : g[3]) : (phraseInfo(ro).tr?.[lang] ?? '');
          const meta = g ? `${POS_LABEL[g[1]][lang]}${g[0] ? ` · ${t.baseForm}: ${g[0]}` : ''}` : '';
          return { ro, tr, meta };
        })
        .filter((w) => !q || fold(w.ro).includes(q) || fold(w.tr).includes(q)),
    [progress, q, lang, t.baseForm],
  );
  const walletCount = walletWords(progress).length;
  const learnedAny = Object.keys(progress.completed).length > 0;

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
      <Title>{t.dictionary}</Title>

      <View style={[s.tabs, { backgroundColor: c.sunk }]}>
        {(
          [
            ['all', t.allWords],
            ['wallet', `👛 ${t.wallet}${walletCount ? ` · ${walletCount}` : ''}`],
          ] as [Tab, string][]
        ).map(([k, label]) => (
          <Pressable
            key={k}
            onPress={() => setTab(k)}
            accessibilityRole="tab"
            accessibilityState={{ selected: tab === k }}
            style={[s.tab, tab === k && { backgroundColor: c.surface }]}
          >
            <Text style={[s.tabText, { color: tab === k ? c.ink : c.muted }]}>{label}</Text>
          </Pressable>
        ))}
      </View>

      {(tab === 'wallet' ? walletCount > 0 : learnedAny) && (
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder={t.search}
          placeholderTextColor={c.muted}
          autoCorrect={false}
          autoCapitalize="none"
          style={[s.input, { color: c.ink, backgroundColor: c.surface, borderColor: c.line }]}
        />
      )}

      {tab === 'wallet' ? (
        walletCount === 0 ? (
          <Text style={[s.sub, { color: c.muted }]}>{t.walletEmpty}</Text>
        ) : saved.length === 0 ? (
          <Text style={[s.sub, { color: c.muted }]}>{t.nothingFound}</Text>
        ) : (
          saved.map((w) => (
            <View key={w.ro} style={[s.card, { backgroundColor: c.surface, borderColor: c.line }]}>
              <SpeakButton text={w.ro} size={36} />
              <View style={{ flex: 1, gap: 2 }}>
                <Text style={[s.ro, { color: c.ink }]}>{w.ro}</Text>
                {!!w.meta && <Text style={[s.meta, { color: c.muted }]}>{w.meta}</Text>}
                <Text style={[s.trWallet, { color: c.ink }]}>{w.tr}</Text>
              </View>
              <WalletButton ro={w.ro} compact />
            </View>
          ))
        )
      ) : !learnedAny ? (
        <Text style={[s.sub, { color: c.muted }]}>{t.dictionaryEmpty}</Text>
      ) : groups.length === 0 ? (
        <Text style={[s.sub, { color: c.muted }]}>{t.nothingFound}</Text>
      ) : (
        groups.map(({ unit, words }) => (
          <View key={unit.id} style={s.group}>
            <Text style={[s.h, { color: c.ink }]}>
              {unit.title[lang]}{' '}
              <Text style={{ color: c.muted, fontStyle: 'italic', fontWeight: '600' }}>· {unit.ro}</Text>
            </Text>
            {words.map((w) => (
              <View key={w.ro} style={[s.word, { backgroundColor: c.surface, borderColor: c.line }]}>
                <SpeakButton text={w.ro} size={36} />
                <View style={{ flex: 1, gap: 2 }}>
                  <Text style={[s.ro, { color: c.ink }]}>{w.ro}</Text>
                  <Text style={[s.tr, { color: c.muted }]}>{w.tr[lang]}</Text>
                </View>
                <WalletButton ro={w.ro} compact />
              </View>
            ))}
          </View>
        ))
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  body: { paddingHorizontal: 16, gap: 14, maxWidth: 560, width: '100%', alignSelf: 'center' },
  backWrap: { alignSelf: 'flex-start', paddingVertical: 4 },
  back: { fontSize: 15, fontWeight: '700' },
  sub: { fontSize: 15, lineHeight: 21 },
  tabs: { flexDirection: 'row', borderRadius: 14, padding: 4, gap: 4 },
  tab: { flex: 1, paddingVertical: 9, borderRadius: 10, alignItems: 'center' },
  tabText: { fontSize: 14, fontWeight: '700' },
  input: { borderWidth: 2, borderRadius: 14, paddingHorizontal: 14, paddingVertical: 12, fontSize: 16 },
  group: { gap: 8 },
  h: { fontSize: 17, fontWeight: '800', marginTop: 6 },
  word: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 2, borderRadius: 14, paddingVertical: 8, paddingHorizontal: 12 },
  card: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 2, borderRadius: 14, padding: 12 },
  ro: { fontWeight: '700', fontSize: 16 },
  tr: { fontSize: 14 },
  trWallet: { fontSize: 15, lineHeight: 21 },
  meta: { fontSize: 12 },
});
