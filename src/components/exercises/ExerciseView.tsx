import * as Haptics from 'expo-haptics';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import type { Exercise, Lang } from '../../content/types';
import type { Answer, Verdict } from '../../engine/check';
import { bankFor } from '../../engine/wordBank';
import type { UI } from '../../i18n/ui';
import { speak } from '../../lib/speech';
import { usePalette } from '../../lib/theme';
import { TapText } from '../PhraseSheet';
import { Button, Card, Label, RichText, SpeakButton, Title } from '../ui';

type Props = {
  ex: Exercise;
  lang: Lang;
  t: (typeof UI)[Lang];
  /** Set once the answer has been checked; the exercise shows it and stops taking input. */
  verdict: Verdict | null;
  onAnswer: (a: Answer | null) => void;
  onMatched: (missed: boolean) => void;
  /** Enter on the keyboard in the typing exercise. */
  onSubmit: () => void;
  /** Romanian words from the whole lesson, for the typing exercise's word bank. */
  pool: string[];
  /** The learner prefers building typed answers from word tiles. */
  wordBank: boolean;
  onWordBank: (on: boolean) => void;
};

function shuffle<T>(a: T[]): T[] {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

/** Shuffle once per mounted exercise, not on every render. */
function useShuffled<T>(make: () => T[]): T[] {
  return useMemo(() => shuffle(make()), []); // eslint-disable-line react-hooks/exhaustive-deps
}

export function ExerciseView(props: Props) {
  switch (props.ex.kind) {
    case 'intro':
      return <Intro {...props} ex={props.ex} />;
    case 'tip':
      return <Tip {...props} ex={props.ex} />;
    case 'pickNative':
    case 'pickRo':
    case 'listen':
      return <Choice {...props} />;
    case 'tiles':
      return <Tiles {...props} ex={props.ex} />;
    case 'match':
      return <Match {...props} ex={props.ex} />;
    case 'type':
      return <Typed {...props} ex={props.ex} />;
  }
}

function Intro({ ex, lang, t }: Props & { ex: Extract<Exercise, { kind: 'intro' }> }) {
  const c = usePalette();
  useEffect(() => {
    const id = setTimeout(() => speak(ex.ro), 250);
    return () => clearTimeout(id);
  }, [ex.ro]);
  return (
    <View style={s.gap}>
      <Label>{t.newWord}</Label>
      <Card>
        <View style={s.phrase}>
          <SpeakButton text={ex.ro} />
          <TapText style={[s.ro, { color: c.ink }]} tr={ex.tr} note={ex.note}>
            {ex.ro}
          </TapText>
        </View>
        <Text style={[s.tr, { color: c.muted }]}>{ex.tr[lang]}</Text>
        <View style={[s.dash, { borderColor: c.line }]} />
        <Text style={[s.note, { color: c.muted }]}>{ex.note[lang]}</Text>
      </Card>
    </View>
  );
}

function Tip({ ex, lang, t }: Props & { ex: Extract<Exercise, { kind: 'tip' }> }) {
  const c = usePalette();
  return (
    <View style={s.gap}>
      <Label>{t.tip}</Label>
      <Title>{ex.title}</Title>
      <Card>
        {ex.body[lang].map((p, i) => (
          <RichText key={i}>{p}</RichText>
        ))}
        <View>
          {ex.rows.map((r) => (
            <Pressable key={r.ro} onPress={() => speak(r.ro)} style={[s.row, { borderColor: c.line }]}>
              <TapText style={[s.rowRo, { color: c.ink }]}>{r.ro}</TapText>
              <Text style={[s.rowTr, { color: c.muted }]}>{r.tr[lang]}</Text>
            </Pressable>
          ))}
        </View>
      </Card>
    </View>
  );
}

/** pickNative, pickRo and listen: one prompt, four options. */
function Choice({ ex, lang, t, verdict, onAnswer }: Props) {
  const c = usePalette();
  const [pick, setPick] = useState<string | null>(null);
  const [showText, setShowText] = useState(false);

  const { options, correct, spoken } = useMemo(() => {
    if (ex.kind === 'pickNative')
      return { correct: ex.correct[lang], spoken: ex.q, options: [ex.correct, ...ex.wrong].map((o) => o[lang]) };
    if (ex.kind === 'pickRo') return { correct: ex.correct, spoken: null, options: [ex.correct, ...ex.wrong] };
    if (ex.kind === 'listen') return { correct: ex.ro, spoken: ex.ro, options: [ex.ro, ...ex.wrong] };
    return { correct: '', spoken: null, options: [] as string[] };
  }, [ex, lang]);
  const shuffled = useShuffled(() => options);

  useEffect(() => {
    if (!spoken) return;
    const id = setTimeout(() => speak(spoken), 300);
    return () => clearTimeout(id);
  }, [spoken]);

  return (
    <View style={s.gap}>
      <Label>{ex.kind === 'pickNative' ? t.pickNative : ex.kind === 'pickRo' ? t.pickRo : t.listen}</Label>

      {ex.kind === 'pickNative' && (
        <View style={s.phrase}>
          <SpeakButton text={ex.q} />
          <TapText style={[s.ro, { color: c.ink }]} hint={!verdict}>
            {ex.q}
          </TapText>
        </View>
      )}
      {ex.kind === 'pickRo' && <Title>«{ex.q[lang]}»</Title>}
      {ex.kind === 'listen' && (
        <View style={{ alignItems: 'center', gap: 10 }}>
          <View style={s.listen}>
            <SpeakButton text={ex.ro} size={96} />
            <SpeakButton text={ex.ro} size={62} slow />
          </View>
          {showText ? (
            <Title style={{ textAlign: 'center' }}>«{ex.tr[lang]}»</Title>
          ) : (
            <Pressable onPress={() => setShowText(true)} hitSlop={8}>
              <Text style={[s.ghost, { color: c.muted }]}>{t.cantListen}</Text>
            </Pressable>
          )}
        </View>
      )}

      <View style={s.options}>
        {shuffled.map((o, i) => {
          const tone = verdict
            ? o === correct
              ? 'right'
              : o === pick && !verdict.ok
                ? 'wrong'
                : 'plain'
            : o === pick
              ? 'selected'
              : 'plain';
          return (
            <Button
              key={o}
              tone={tone}
              disabled={!!verdict}
              style={s.option}
              onPress={() => {
                setPick(o);
                onAnswer(o);
                if (ex.kind === 'pickRo') speak(o);
              }}
            >
              <View style={s.optionInner}>
                <Text style={[s.num, { color: c.muted, borderColor: c.line }]}>{i + 1}</Text>
                <Text style={[s.optionText, { color: c.ink }]}>{o}</Text>
              </View>
            </Button>
          );
        })}
      </View>
    </View>
  );
}

function Prompt({ text }: { text: string }) {
  const c = usePalette();
  return (
    <View style={s.promptRow}>
      <View style={[s.avatar, { backgroundColor: c.ochreSoft }]}>
        <Text style={{ color: c.ochre, fontWeight: '800', fontSize: 20 }}>A</Text>
      </View>
      <View style={[s.bubble, { backgroundColor: c.surface, borderColor: c.line }]}>
        <Text style={{ color: c.ink, fontSize: 18 }}>{text}</Text>
      </View>
    </View>
  );
}

function Tiles({ ex, lang, t, verdict, onAnswer }: Props & { ex: Extract<Exercise, { kind: 'tiles' }> }) {
  const bank = useShuffled(() => [...ex.words, ...ex.extra]);
  return (
    <View style={s.gap}>
      <Label>{t.tiles}</Label>
      <Prompt text={ex.q[lang]} />
      <WordBank bank={bank} locked={!!verdict} onChange={(words) => onAnswer(words.length ? words : null)} />
    </View>
  );
}

/** An answer line above a bank of word tiles: tap a tile to move it up, tap it again to send it back. */
function WordBank({ bank, locked, onChange }: { bank: string[]; locked: boolean; onChange: (words: string[]) => void }) {
  const c = usePalette();
  const [chosen, setChosen] = useState<number[]>([]);

  const set = (next: number[]) => {
    setChosen(next);
    onChange(next.map((i) => bank[i]));
  };

  return (
    <>
      <View style={[s.answerLine, { borderColor: c.line }]}>
        {chosen.map((i) => (
          <Button key={i} disabled={locked} style={s.tile} onPress={() => set(chosen.filter((x) => x !== i))}>
            {bank[i]}
          </Button>
        ))}
      </View>
      <View style={s.bank}>
        {bank.map((w, i) => {
          const used = chosen.includes(i);
          return (
            <View key={i} style={{ opacity: used ? 0 : 1 }} pointerEvents={used ? 'none' : 'auto'}>
              <Button
                disabled={locked || used}
                style={s.tile}
                onPress={() => {
                  speak(w);
                  set([...chosen, i]);
                }}
              >
                {w}
              </Button>
            </View>
          );
        })}
      </View>
    </>
  );
}

function Match({ ex, lang, t, onMatched }: Props & { ex: Extract<Exercise, { kind: 'match' }> }) {
  const left = useShuffled(() => ex.pairs.map((p, k) => ({ k, s: p.ro })));
  const right = useShuffled(() => ex.pairs.map((p, k) => ({ k, s: p.tr[lang] })));
  const [sel, setSel] = useState<{ side: 'l' | 'r'; k: number } | null>(null);
  const [done, setDone] = useState<number[]>([]);
  const [flash, setFlash] = useState<{ l: number; r: number } | null>(null);
  const missed = useRef(false);

  const tap = (side: 'l' | 'r', k: number, label: string) => {
    if (done.includes(k)) return;
    if (side === 'l') speak(label);
    if (!sel || sel.side === side) return setSel({ side, k });
    if (sel.k === k) {
      const next = [...done, k];
      setDone(next);
      setSel(null);
      if (next.length === ex.pairs.length) setTimeout(() => onMatched(missed.current), 250);
    } else {
      missed.current = true;
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
      setFlash(side === 'l' ? { l: k, r: sel.k } : { l: sel.k, r: k });
      setSel(null);
      setTimeout(() => setFlash(null), 450);
    }
  };

  const col = (items: { k: number; s: string }[], side: 'l' | 'r') => (
    <View style={s.col}>
      {items.map(({ k, s: label }) => {
        const isDone = done.includes(k);
        const tone = flash && flash[side] === k ? 'wrong' : sel?.side === side && sel.k === k ? 'selected' : 'plain';
        return (
          <View key={k} style={{ opacity: isDone ? 0.35 : 1 }}>
            <Button tone={tone} disabled={isDone} style={s.pair} onPress={() => tap(side, k, label)}>
              {label}
            </Button>
          </View>
        );
      })}
    </View>
  );

  return (
    <View style={s.gap}>
      <Label>{t.match}</Label>
      <View style={s.pairs}>
        {col(left, 'l')}
        {col(right, 'r')}
      </View>
    </View>
  );
}

const LETTERS = ['ă', 'â', 'î', 'ș', 'ț'];

function Typed({
  ex,
  lang,
  t,
  verdict,
  onAnswer,
  onSubmit,
  pool,
  wordBank,
  onWordBank,
}: Props & { ex: Extract<Exercise, { kind: 'type' }> }) {
  const c = usePalette();
  const [value, setValue] = useState('');
  const [sel, setSel] = useState({ start: 0, end: 0 });
  const bank = useShuffled(() => bankFor(ex.shown, pool));

  const change = (v: string) => {
    setValue(v);
    onAnswer(v.trim() ? v : null);
  };
  const insert = (ch: string) => {
    const next = value.slice(0, sel.start) + ch + value.slice(sel.end);
    const at = sel.start + ch.length;
    setSel({ start: at, end: at });
    change(next);
  };
  const toggle = () => {
    // Switching modes starts the answer over: half a typed sentence cannot become tiles.
    setValue('');
    onAnswer(null);
    onWordBank(!wordBank);
  };

  return (
    <View style={s.gap}>
      <Label>{t.type}</Label>
      <Prompt text={ex.q[lang]} />
      {wordBank ? (
        <WordBank bank={bank} locked={!!verdict} onChange={(words) => onAnswer(words.length ? words.join(' ') : null)} />
      ) : (
        <>
          <TextInput
            value={value}
            onChangeText={change}
            onSelectionChange={(e) => setSel(e.nativeEvent.selection)}
            editable={!verdict}
            autoFocus
            multiline
            submitBehavior="blurAndSubmit"
            returnKeyType="done"
            onSubmitEditing={onSubmit}
            autoCorrect={false}
            autoCapitalize="sentences"
            placeholder={t.placeholder}
            placeholderTextColor={c.muted}
            style={[s.input, { color: c.ink, backgroundColor: c.surface, borderColor: c.line }]}
          />
          <View style={s.letters}>
            {LETTERS.map((ch) => (
              <Button key={ch} disabled={!!verdict} style={s.letter} onPress={() => insert(ch)}>
                {ch}
              </Button>
            ))}
          </View>
        </>
      )}
      {!verdict && (
        <Pressable onPress={toggle} hitSlop={8} style={s.modeToggle} accessibilityRole="button">
          <Text style={[s.ghost, { color: c.blue }]}>{wordBank ? t.useKeyboard : t.useBank}</Text>
        </Pressable>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  gap: { gap: 18 },
  phrase: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  ro: { fontSize: 26, fontWeight: '700', flexShrink: 1 },
  tr: { fontSize: 20 },
  dash: { borderTopWidth: 2, borderStyle: 'dashed' },
  note: { fontSize: 16, lineHeight: 23 },
  row: { flexDirection: 'row', justifyContent: 'space-between', gap: 12, paddingVertical: 9, borderTopWidth: 1 },
  rowRo: { fontWeight: '700', fontSize: 16 },
  rowTr: { fontSize: 15, flexShrink: 1, textAlign: 'right' },
  listen: { flexDirection: 'row', alignItems: 'flex-end', gap: 14 },
  ghost: { fontSize: 13, fontWeight: '700', letterSpacing: 0.8, textTransform: 'uppercase' },
  options: { gap: 10 },
  option: { alignItems: 'stretch' },
  optionInner: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  num: { borderWidth: 2, borderRadius: 7, width: 28, height: 28, textAlign: 'center', lineHeight: 24, fontSize: 12, fontWeight: '700' },
  optionText: { fontSize: 18, fontWeight: '500', flexShrink: 1 },
  promptRow: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
  avatar: { width: 52, height: 52, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  bubble: { flex: 1, borderWidth: 2, borderRadius: 16, paddingVertical: 10, paddingHorizontal: 14 },
  answerLine: { minHeight: 64, borderBottomWidth: 2, flexDirection: 'row', flexWrap: 'wrap', gap: 8, paddingBottom: 10 },
  bank: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' },
  tile: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 13 },
  pairs: { flexDirection: 'row', gap: 10 },
  col: { flex: 1, gap: 10 },
  pair: { minHeight: 56 },
  input: { minHeight: 120, borderWidth: 2, borderRadius: 16, padding: 14, fontSize: 19, textAlignVertical: 'top' },
  letters: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  letter: { minWidth: 48, paddingVertical: 8, paddingHorizontal: 10 },
  modeToggle: { alignSelf: 'flex-start', paddingVertical: 6 },
});
