import { router, useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ExerciseView } from '../components/exercises/ExerciseView';
import { Button, Card, Label, Title } from '../components/ui';
import { COURSE } from '../content/course';
import type { Lang } from '../content/types';
import { check, type Answer } from '../engine/check';
import { nextStage, PASS, placement, stageQuestions, type Results } from '../engine/placement';
import { usePalette } from '../lib/theme';
import { useAuth } from '../state/auth';
import { GOALS } from '../state/model';
import { useProgress } from '../state/progress';

type Step = 'hello' | 'level' | 'test' | 'result' | 'goal';

/** Which placement stage each self-assessed level starts the test at; the beginner skips it. */
const FIRST_STAGE = [0, 1, 3, 5, 7];

const noop = () => {};

/**
 * First run: interface language, a self-assessed level, a short placement test, and
 * the daily goal. `?retake=1` (from the profile) runs only the level and test and can
 * only move the start point forward.
 */
export default function Welcome() {
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { retake } = useLocalSearchParams<{ retake?: string }>();
  const again = retake === '1';
  const { progress, t, setLang, completeOnboarding, placeAt } = useProgress();
  const auth = useAuth();
  const lang = progress.lang;

  const [step, setStep] = useState<Step>(again ? 'level' : 'hello');
  const [level, setLevel] = useState<number | null>(null);
  const [goal, setGoal] = useState(progress.dailyGoal);
  const [startAt, setStartAt] = useState<string | null>(null);

  // The test: the stage being asked, its questions, and how the stages went.
  const [results, setResults] = useState<Results>({});
  const [stage, setStage] = useState(1);
  const [qi, setQi] = useState(0);
  const [right, setRight] = useState(0);
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [asked, setAsked] = useState(0);
  const questions = useMemo(() => stageQuestions(stage), [stage]);

  const finish = (at: string | null) => {
    if (again) {
      placeAt(at);
      router.back();
    } else {
      completeOnboarding(at, goal);
      router.replace('/');
    }
  };

  const chooseLevel = () => {
    if (level === null) return;
    if (level === 0) {
      setStartAt(null);
      setStep('result');
      return;
    }
    setResults({});
    setStage(FIRST_STAGE[level]);
    setQi(0);
    setRight(0);
    setAsked(0);
    setAnswer(null);
    setStep('test');
  };

  const nextQuestion = (a: Answer | null) => {
    const ok = a !== null && check(questions[qi], a, lang).ok;
    const score = right + (ok ? 1 : 0);
    setAsked((n) => n + 1);
    setAnswer(null);
    if (qi + 1 < questions.length) {
      setQi(qi + 1);
      setRight(score);
      return;
    }
    const done = { ...results, [stage]: score >= PASS };
    const next = nextStage(done, FIRST_STAGE[level ?? 1]);
    setResults(done);
    setQi(0);
    setRight(0);
    if (next === null) {
      setStartAt(placement(done));
      setStep('result');
    } else {
      setStage(next);
    }
  };

  const unit = COURSE.find((u) => u.lessons.some((l) => l.id === startAt));

  const steps: Step[] = again ? ['level', 'test', 'result'] : ['hello', 'level', 'test', 'result', 'goal'];
  const at = steps.indexOf(step);
  const back = () => {
    if (step === 'test') return setStep('level');
    if (again && step === 'level') return router.back();
    setStep(step === 'goal' ? 'result' : step === 'result' ? 'level' : 'hello');
  };

  const action =
    step === 'hello'
      ? { label: t.start, onPress: () => setStep('level'), disabled: false }
      : step === 'level'
        ? { label: t.next, onPress: chooseLevel, disabled: level === null }
        : step === 'test'
          ? { label: t.next, onPress: () => nextQuestion(answer), disabled: answer === null }
          : step === 'result'
            ? { label: t.next, onPress: () => (again ? finish(startAt) : setStep('goal')), disabled: false }
            : { label: t.letsGo, onPress: () => finish(startAt), disabled: false };

  return (
    <View style={[s.screen, { backgroundColor: c.bg, paddingTop: insets.top + 12 }]}>
      <View style={[s.dots, { backgroundColor: c.sunk }]} accessibilityRole="progressbar" accessibilityValue={{ now: at + 1, min: 1, max: steps.length }}>
        {steps.map((k, i) => (
          <View
            key={k}
            style={[s.dot, { backgroundColor: i <= at ? c.blue : c.line }, i === at && s.dotOn]}
          />
        ))}
      </View>

      <ScrollView
        style={s.scroll}
        contentContainerStyle={[s.body, { paddingBottom: 24 }]}
        keyboardShouldPersistTaps="handled"
      >
        {step === 'hello' && (
          <View style={s.gap}>
            <Text style={[s.logo, { color: c.ink }]}>
              Română<Text style={{ color: c.blue }}>.</Text>
            </Text>
            <Title>{t.welcomeTitle}</Title>
            <Text style={[s.text, { color: c.muted }]}>{t.welcomeSub}</Text>
            <Label>{t.explainIn}</Label>
            <View style={s.langs}>
              {(['ru', 'ua'] as Lang[]).map((l) => (
                <Pressable
                  key={l}
                  onPress={() => setLang(l)}
                  accessibilityRole="button"
                  accessibilityState={{ selected: lang === l }}
                  style={[
                    s.option,
                    s.langOption,
                    { backgroundColor: lang === l ? c.blueSoft : c.surface, borderColor: lang === l ? c.blue : c.line },
                  ]}
                >
                  <Text style={[s.optionTag, { color: lang === l ? c.blue : c.ink }]}>
                    {l === 'ru' ? 'Русский' : 'Українська'}
                  </Text>
                </Pressable>
              ))}
            </View>
            {auth.enabled && (
              <Pressable onPress={() => router.push('/account')} hitSlop={8} style={s.linkWrap}>
                <Text style={[s.link, { color: c.blue }]}>{t.haveAccount}</Text>
              </Pressable>
            )}
          </View>
        )}

        {step === 'level' && (
          <View style={s.gap}>
            <Title>{t.levelTitle}</Title>
            <View style={[s.list, { backgroundColor: c.surface, borderColor: c.line }]}>
              {t.levels.map((l, i) => {
                const on = level === i;
                return (
                  <Pressable
                    key={l.tag}
                    onPress={() => setLevel(i)}
                    accessibilityRole="radio"
                    accessibilityState={{ selected: on }}
                    style={[
                      s.row,
                      i > 0 && { borderTopWidth: 1, borderTopColor: c.line },
                      on && { backgroundColor: c.blueSoft },
                    ]}
                  >
                    <View style={[s.iconWrap, { backgroundColor: on ? c.surface : c.sunk }]}>
                      <Text style={s.icon}>{l.icon}</Text>
                    </View>
                    <View style={{ flex: 1, gap: 6 }}>
                      <View style={[s.chip, { backgroundColor: on ? c.blue : c.sunk }]}>
                        <Text style={[s.chipText, { color: on ? '#fff' : c.muted }]}>{l.tag}</Text>
                      </View>
                      <Text style={[s.optionText, { color: c.ink }]}>{l.text}</Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>
        )}

        {step === 'test' && (
          <View style={s.gap}>
            <Text style={[s.small, { color: c.muted }]}>
              {t.testTitle} · {t.questionN(asked + 1)}
            </Text>
            <Text style={[s.text, { color: c.muted }]}>{t.testSub}</Text>
            <ExerciseView
              key={`${stage}-${qi}`}
              ex={questions[qi]}
              lang={lang}
              t={t}
              verdict={null}
              onAnswer={setAnswer}
              onMatched={noop}
              onSubmit={noop}
              pool={[]}
              wordBank={false}
              onWordBank={noop}
            />
            <Pressable onPress={() => nextQuestion(null)} hitSlop={8} style={s.linkWrap}>
              <Text style={[s.link, { color: c.muted }]}>{t.dontKnow}</Text>
            </Pressable>
          </View>
        )}

        {step === 'result' && (
          <View style={s.gap}>
            <Title>{t.resultTitle}</Title>
            <Card>
              <Text style={s.bigIcon}>{startAt ? '🧭' : '🔤'}</Text>
              <Text style={[s.text, { color: c.ink }]}>
                {unit && unit.level !== 'A0'
                  ? t.resultUnit(t.levelNames[unit.level], unit.title[lang])
                  : t.resultAlphabet}
              </Text>
              {unit && unit.level !== 'A0' && <Text style={[s.small, { color: c.muted }]}>{t.resultNote}</Text>}
            </Card>
            {!again && startAt !== null && (
              <Pressable
                onPress={() => {
                  setStartAt(null);
                  setStep('goal');
                }}
                hitSlop={8}
                style={s.linkWrap}
              >
                <Text style={[s.link, { color: c.muted }]}>{t.fromZero}</Text>
              </Pressable>
            )}
          </View>
        )}

        {step === 'goal' && (
          <View style={s.gap}>
            <Title>{t.goalTitle}</Title>
            {GOALS.map((g) => {
              const on = goal === g;
              return (
                <Pressable
                  key={g}
                  onPress={() => setGoal(g)}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: on }}
                  style={[s.option, { backgroundColor: on ? c.blueSoft : c.surface, borderColor: on ? c.blue : c.line }]}
                >
                  <Text style={[s.optionTag, { color: on ? c.blue : c.ink, flex: 1 }]}>{t.goalNames[g]}</Text>
                  <Text style={[s.optionTag, { color: on ? c.blue : c.muted }]}>{g} ⚡</Text>
                </Pressable>
              );
            })}
            <Text style={[s.small, { color: c.muted }]}>{t.goalNote}</Text>
          </View>
        )}
      </ScrollView>

      <View style={[s.bar, { borderTopColor: c.line, backgroundColor: c.bg, paddingBottom: insets.bottom + 14 }]}>
        {step !== 'hello' && (
          <Pressable
            onPress={back}
            accessibilityRole="button"
            accessibilityLabel={t.back}
            hitSlop={6}
            style={({ pressed }) => [s.backBtn, { borderColor: c.line, backgroundColor: c.surface }, pressed && { opacity: 0.7 }]}
          >
            <Text style={[s.backArrow, { color: c.ink }]}>←</Text>
          </Pressable>
        )}
        <Button tone="primary" disabled={action.disabled} onPress={action.onPress} style={{ flex: 1 }}>
          {action.label}
        </Button>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1 },
  dots: { flexDirection: 'row', alignSelf: 'center', alignItems: 'center', gap: 8, paddingVertical: 9, paddingHorizontal: 14, borderRadius: 20, marginBottom: 8 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  dotOn: { width: 26 },
  scroll: { flex: 1 },
  body: { paddingHorizontal: 16, paddingTop: 16, maxWidth: 560, width: '100%', alignSelf: 'center', flexGrow: 1 },
  gap: { gap: 14 },
  logo: { fontSize: 30, fontWeight: '800', marginTop: 12 },
  text: { fontSize: 16, lineHeight: 23 },
  small: { fontSize: 14, lineHeight: 20 },
  langs: { flexDirection: 'row', gap: 10 },
  langOption: { flex: 1, justifyContent: 'center' },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  list: { borderWidth: 2, borderRadius: 20, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingVertical: 16, paddingHorizontal: 14 },
  iconWrap: { width: 52, height: 52, borderRadius: 26, alignItems: 'center', justifyContent: 'center' },
  icon: { fontSize: 30 },
  chip: { alignSelf: 'flex-start', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 3 },
  chipText: { fontSize: 12, fontWeight: '800', letterSpacing: 1, textTransform: 'uppercase' },
  bigIcon: { fontSize: 40 },
  optionTag: { fontSize: 16, fontWeight: '800' },
  optionText: { fontSize: 15, lineHeight: 21 },
  linkWrap: { alignSelf: 'center', paddingVertical: 6 },
  link: { fontSize: 15, fontWeight: '700' },
  bar: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    maxWidth: 560,
    width: '100%',
    alignSelf: 'center',
  },
  backBtn: { width: 56, borderWidth: 2, borderBottomWidth: 4, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  backArrow: { fontSize: 22, fontWeight: '700' },
});
