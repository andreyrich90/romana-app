import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CONTACT_EMAIL, LEGAL, UPDATED } from '../content/legal';
import { usePalette } from '../lib/theme';
import { useProgress } from '../state/progress';
import { Title } from './ui';

const CONTACT = { ru: 'Связаться с нами', ua: 'Звʼязатися з нами', en: 'Contact' };
const UPDATED_LABEL = { ru: 'Обновлено', ua: 'Оновлено', en: 'Last updated' };

/** A plain, readable page for the privacy policy or the account-deletion instructions. */
export function LegalPage({ doc }: { doc: 'privacy' | 'deletion' }) {
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { progress, t } = useProgress();
  const [lang, setLang] = useState<'ru' | 'ua' | 'en'>(progress.lang);
  const d = LEGAL[lang][doc];

  return (
    <ScrollView
      style={{ backgroundColor: c.bg }}
      contentContainerStyle={[s.body, { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 40 }]}
    >
      <View style={s.bar}>
        <Pressable
          onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}
          hitSlop={10}
          accessibilityRole="button"
        >
          <Text style={[s.back, { color: c.muted }]}>← {t.back}</Text>
        </Pressable>
        <View style={[s.seg, { backgroundColor: c.sunk }]}>
          {(['ru', 'ua', 'en'] as const).map((l) => (
            <Pressable
              key={l}
              onPress={() => setLang(l)}
              accessibilityRole="button"
              accessibilityState={{ selected: lang === l }}
              style={[s.segBtn, lang === l && { backgroundColor: c.surface }]}
            >
              <Text style={[s.segText, { color: lang === l ? c.ink : c.muted }]}>{l.toUpperCase()}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <Title>{d.title}</Title>
      <Text style={[s.meta, { color: c.muted }]}>
        {UPDATED_LABEL[lang]}: {UPDATED}
      </Text>
      <Text style={[s.p, { color: c.ink }]}>{d.intro}</Text>

      {d.sections.map((sec) => (
        <View key={sec.h} style={s.section}>
          <Text style={[s.h, { color: c.ink }]}>{sec.h}</Text>
          {sec.p.map((p) => (
            <Text key={p} style={[s.p, { color: c.ink }]}>
              {p}
            </Text>
          ))}
        </View>
      ))}

      {CONTACT_EMAIL ? (
        <View style={s.section}>
          <Text style={[s.h, { color: c.ink }]}>{CONTACT[lang]}</Text>
          <Text selectable style={[s.p, { color: c.blue }]}>
            {CONTACT_EMAIL}
          </Text>
        </View>
      ) : null}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  body: { paddingHorizontal: 16, gap: 14, maxWidth: 680, width: '100%', alignSelf: 'center' },
  bar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  back: { fontSize: 15, fontWeight: '700' },
  seg: { flexDirection: 'row', borderRadius: 12, padding: 3 },
  segBtn: { paddingVertical: 5, paddingHorizontal: 10, borderRadius: 9 },
  segText: { fontWeight: '700', fontSize: 13 },
  meta: { fontSize: 13 },
  section: { gap: 8, marginTop: 6 },
  h: { fontSize: 18, fontWeight: '800' },
  p: { fontSize: 16, lineHeight: 24 },
});
