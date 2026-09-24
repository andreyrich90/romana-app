import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SpeakButton, Title } from '../components/ui';
import { COURSE } from '../content/course';
import { bare, normalize } from '../engine/check';
import { usePalette } from '../lib/theme';
import { useProgress } from '../state/progress';

const fold = (s: string) => bare(normalize(s));

/** Every word and phrase from the lessons already completed, grouped by unit, searchable both ways. */
export default function Words() {
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { progress, t } = useProgress();
  const lang = progress.lang;
  const [query, setQuery] = useState('');

  const groups = useMemo(() => {
    const q = fold(query);
    return COURSE.map((unit) => ({
      unit,
      words: unit.lessons
        .filter((l) => l.lesson && l.id in progress.completed)
        .flatMap((l) => l.lesson!.words)
        .filter((w) => !q || fold(w.ro).includes(q) || fold(w.tr[lang]).includes(q)),
    })).filter((g) => g.words.length);
  }, [query, progress.completed, lang]);

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
      <Text style={[s.sub, { color: c.muted }]}>{t.dictionarySub}</Text>

      {learnedAny && (
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

      {!learnedAny ? (
        <Text style={[s.sub, { color: c.muted }]}>{t.dictionaryEmpty}</Text>
      ) : groups.length === 0 ? (
        <Text style={[s.sub, { color: c.muted }]}>{t.nothingFound}</Text>
      ) : (
        groups.map(({ unit, words }) => (
          <View key={unit.id} style={s.group}>
            <Text style={[s.h, { color: c.ink }]}>
              {unit.title[lang]} <Text style={{ color: c.muted, fontStyle: 'italic', fontWeight: '600' }}>· {unit.ro}</Text>
            </Text>
            {words.map((w) => (
              <View key={w.ro} style={[s.word, { backgroundColor: c.surface, borderColor: c.line }]}>
                <SpeakButton text={w.ro} size={36} />
                <Text style={[s.ro, { color: c.ink }]}>{w.ro}</Text>
                <Text style={[s.tr, { color: c.muted }]}>{w.tr[lang]}</Text>
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
  input: { borderWidth: 2, borderRadius: 14, paddingHorizontal: 14, paddingVertical: 12, fontSize: 16 },
  group: { gap: 8 },
  h: { fontSize: 17, fontWeight: '800', marginTop: 6 },
  word: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 2, borderRadius: 14, paddingVertical: 8, paddingHorizontal: 12 },
  ro: { fontWeight: '700', fontSize: 16, flexShrink: 1 },
  tr: { marginLeft: 'auto', flexShrink: 1, textAlign: 'right' },
});
