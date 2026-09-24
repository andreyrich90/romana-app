import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View, type StyleProp, type TextStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { POS_LABEL } from '../content/glossary';
import type { Bi } from '../content/types';
import { gloss, phraseInfo, reading, wordsIn } from '../engine/phrases';
import { usePalette } from '../lib/theme';
import { useProgress } from '../state/progress';
import { SpeakButton } from './ui';

type Tab = 'translation' | 'words' | 'explain';

type Open = {
  ro: string;
  /** The word that was tapped, shown first on the Words tab. */
  word?: string;
  /** Before the exercise is answered: words only, no translation of the whole phrase. */
  hint?: boolean;
  /** Overrides the course index, e.g. the card's own translation. */
  tr?: Bi;
  /** Shown on the Explanation tab. */
  note?: Bi;
};

const Ctx = createContext<((o: Open) => void) | null>(null);

/** One sheet for the whole app; any TapText opens it. */
export function PhraseProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<Open | null>(null);
  const show = useCallback((o: Open) => setOpen(o), []);
  return (
    <Ctx.Provider value={show}>
      {children}
      <PhraseSheet open={open} onClose={() => setOpen(null)} />
    </Ctx.Provider>
  );
}

/**
 * Romanian text whose words can be tapped for a translation, as on a phone dictionary.
 * `hint` keeps the whole-phrase translation back until the exercise has been answered.
 */
export function TapText({
  children,
  style,
  hint,
  tr,
  note,
}: {
  children: string;
  style?: StyleProp<TextStyle>;
  hint?: boolean;
  tr?: Bi;
  note?: Bi;
}) {
  const c = usePalette();
  const show = useContext(Ctx);
  const parts = children.split(/([\p{L}\-’']+)/u);
  if (!show) return <Text style={style}>{children}</Text>;
  return (
    <Text style={style}>
      {parts.map((p, i) =>
        i % 2 ? (
          <Text
            key={i}
            onPress={() => show({ ro: children, word: p, hint, tr, note })}
            style={[s.tappable, { textDecorationColor: c.muted }]}
            suppressHighlighting
          >
            {p}
          </Text>
        ) : (
          p
        ),
      )}
    </Text>
  );
}

function PhraseSheet({ open, onClose }: { open: Open | null; onClose: () => void }) {
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { progress, t } = useProgress();
  const lang = progress.lang;
  const [tab, setTab] = useState<Tab>('words');
  const [last, setLast] = useState<Open | null>(null);

  // A new phrase opens on the Words tab, with the tapped word first.
  if (open && open !== last) {
    setLast(open);
    setTab('words');
  }

  const data = useMemo(() => {
    if (!open) return null;
    const info = phraseInfo(open.ro);
    const all = wordsIn(open.ro);
    const tapped = open.word?.toLowerCase();
    const words = tapped
      ? [...all.filter((w) => w.toLowerCase() === tapped), ...all.filter((w) => w.toLowerCase() !== tapped)]
      : all;
    return { tr: open.tr ?? info.tr, say: reading(open.ro, lang), words };
  }, [open, lang]);

  if (!open || !data) return null;
  const tabs: [Tab, string][] = [
    ['translation', t.tabTranslation],
    ['words', t.tabWords],
    ...(open.note ? ([['explain', t.tabExplain]] as [Tab, string][]) : []),
  ];

  return (
    <Modal visible transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={s.scrim} onPress={onClose} accessibilityLabel={t.close} />
      <View style={[s.sheet, { backgroundColor: c.bg, paddingBottom: insets.bottom + 16 }]}>
        <View style={[s.grip, { backgroundColor: c.line }]} />
        <View style={s.head}>
          <Text style={[s.kicker, { color: c.good }]}>{t.phraseTitle}</Text>
          <Pressable onPress={onClose} hitSlop={10} accessibilityRole="button" accessibilityLabel={t.close}>
            <Text style={[s.close, { color: c.muted }]}>✕</Text>
          </Pressable>
        </View>
        <View style={s.phraseRow}>
          <Text style={[s.phrase, { color: c.ink }]}>{open.ro}</Text>
          <SpeakButton text={open.ro} size={44} />
        </View>

        <View style={[s.tabs, { backgroundColor: c.sunk }]}>
          {tabs.map(([k, label]) => (
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

        <ScrollView style={s.scroll} contentContainerStyle={s.list}>
          {tab === 'translation' && (
            <>
              <View style={[s.card, { backgroundColor: c.surface, borderColor: c.line }]}>
                <Text style={[s.cardKicker, { color: c.good }]}>{lang === 'ru' ? 'Русский' : 'Українська'}</Text>
                <Text style={[s.big, { color: c.ink }]}>
                  {open.hint ? t.afterAnswer : (data.tr?.[lang] ?? t.noTranslation)}
                </Text>
              </View>
              <View style={[s.card, { backgroundColor: c.surface, borderColor: c.line }]}>
                <Text style={[s.cardKicker, { color: c.muted }]}>{t.howToRead}</Text>
                <Text style={[s.say, { color: c.ink }]}>≈ «{data.say}»</Text>
              </View>
            </>
          )}

          {tab === 'words' &&
            data.words.map((w, i) => {
              const g = gloss(w);
              return (
                <View
                  key={w}
                  style={[s.card, { backgroundColor: c.surface, borderColor: i === 0 && open.word ? c.blue : c.line }]}
                >
                  <View style={s.wordHead}>
                    <View style={{ flex: 1, gap: 2 }}>
                      <Text style={[s.word, { color: c.ink }]}>{w}</Text>
                      {g && (
                        <Text style={[s.meta, { color: c.muted }]}>
                          {POS_LABEL[g[1]][lang]}
                          {g[0] ? ` · ${t.baseForm}: ${g[0]}` : ''}
                        </Text>
                      )}
                    </View>
                    <SpeakButton text={w} size={40} />
                  </View>
                  <Text style={[s.meaning, { color: g ? c.ink : c.muted }]}>
                    {g ? (lang === 'ru' ? g[2] : g[3]) : t.notInGlossary}
                  </Text>
                  <Text style={[s.meta, { color: c.muted }]}>≈ «{reading(w, lang)}»</Text>
                </View>
              );
            })}

          {tab === 'explain' && open.note && (
            <View style={[s.card, { backgroundColor: c.surface, borderColor: c.line }]}>
              <Text style={[s.body, { color: c.ink }]}>{open.note[lang]}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
}

const s = StyleSheet.create({
  tappable: { textDecorationLine: 'underline', textDecorationStyle: 'dotted' },
  scrim: { flex: 1, backgroundColor: 'rgba(8,12,30,0.55)' },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    maxHeight: '85%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 8,
    gap: 12,
    maxWidth: 640,
    alignSelf: 'center',
    width: '100%',
  },
  grip: { alignSelf: 'center', width: 44, height: 5, borderRadius: 3 },
  head: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  kicker: { fontSize: 12, fontWeight: '800', letterSpacing: 1.2, textTransform: 'uppercase' },
  close: { fontSize: 20, fontWeight: '700' },
  phraseRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  phrase: { flex: 1, fontSize: 22, fontWeight: '800', lineHeight: 29 },
  tabs: { flexDirection: 'row', borderRadius: 14, padding: 4, gap: 4 },
  tab: { flex: 1, paddingVertical: 9, borderRadius: 10, alignItems: 'center' },
  tabText: { fontSize: 14, fontWeight: '700' },
  scroll: { flexGrow: 0 },
  list: { gap: 10, paddingBottom: 8 },
  card: { borderWidth: 2, borderRadius: 16, padding: 14, gap: 6 },
  cardKicker: { fontSize: 11, fontWeight: '800', letterSpacing: 1, textTransform: 'uppercase' },
  big: { fontSize: 18, lineHeight: 25, fontWeight: '600' },
  say: { fontSize: 17, lineHeight: 24 },
  wordHead: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  word: { fontSize: 20, fontWeight: '800' },
  meta: { fontSize: 13 },
  meaning: { fontSize: 16, lineHeight: 22 },
  body: { fontSize: 15, lineHeight: 22 },
});
