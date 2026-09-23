import * as Haptics from 'expo-haptics';
import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ExerciseView } from '../../components/exercises/ExerciseView';
import { Button, SpeakButton, Title } from '../../components/ui';
import { findLesson } from '../../content/course';
import type { Lesson } from '../../content/types';
import { check, isGraded, reveal, type Answer, type Verdict } from '../../engine/check';
import { current, isFinished, isOut, reduce, result, startSession, type Session } from '../../engine/session';
import { speak } from '../../lib/speech';
import { usePalette } from '../../lib/theme';
import { useProgress } from '../../state/progress';

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lesson = findLesson(id);
  const c = usePalette();
  // Restarting remounts the player, which is the simplest way to reset its reducer.
  const [attempt, setAttempt] = useState(0);
  if (!lesson) {
    return (
      <View style={[s.center, { backgroundColor: c.bg }]}>
        <Button tone="primary" onPress={() => router.back()}>
          ←
        </Button>
      </View>
    );
  }
  return <Player key={attempt} lesson={lesson} onRestart={() => setAttempt((n) => n + 1)} />;
}

function Player({ lesson, onRestart }: { lesson: Lesson; onRestart: () => void }) {
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { progress, t, completeLesson } = useProgress();
  const lang = progress.lang;

  const [session, dispatch] = useReducer(reduce, lesson, startSession);
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [confirmQuit, setConfirmQuit] = useState(false);
  const saved = useRef(false);

  const step = current(session);
  const finished = isFinished(session);
  const out = isOut(session) && session.phase === 'answering';

  useEffect(() => {
    if (finished && !saved.current) {
      saved.current = true;
      const r = result(session);
      completeLesson(lesson.id, r.xp, r.accuracy);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
    }
  }, [finished, session, completeLesson, lesson.id]);

  const showVerdict = useCallback(
    (v: Verdict) => {
      Haptics.notificationAsync(v.ok ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Error).catch(
        () => {},
      );
      if (v.say) speak(v.say);
      dispatch({ type: 'verdict', verdict: v });
    },
    [],
  );

  const onMain = () => {
    if (!step) return;
    if (session.phase === 'feedback' || !isGraded(step.ex)) {
      setAnswer(null);
      dispatch({ type: 'next' });
      return;
    }
    if (answer !== null) showVerdict(check(step.ex, answer, lang));
  };

  if (finished) return <Results lesson={lesson} session={session} onAgain={onRestart} />;
  if (out) {
    return (
      <View style={[s.center, { backgroundColor: c.bg, paddingTop: insets.top, paddingBottom: insets.bottom }]}>
        <Text style={s.bigHeart}>💔</Text>
        <Title style={{ color: c.bad, textAlign: 'center' }}>{t.outTitle}</Title>
        <Text style={[s.sub, { color: c.muted }]}>{t.outBody}</Text>
        <View style={s.endButtons}>
          <Button tone="primary" onPress={onRestart}>
            {t.restart}
          </Button>
          <Pressable onPress={() => router.back()} style={s.ghostBtn}>
            <Text style={[s.ghost, { color: c.muted }]}>{t.toCourse}</Text>
          </Pressable>
        </View>
      </View>
    );
  }
  if (!step) return null;

  const graded = isGraded(step.ex);
  const v = session.verdict;
  const feedback = session.phase === 'feedback' && v;
  const pct = Math.round((100 * session.done) / session.total);
  const mainTone = feedback ? (v.ok ? 'good' : 'bad') : 'primary';
  const mainLabel = feedback || !graded ? t.cont : t.check;
  const praise = t.praise[(session.pos * 7 + session.done) % t.praise.length];

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: c.bg }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={[s.top, { paddingTop: insets.top + 10 }]}>
        <Pressable accessibilityRole="button" accessibilityLabel={t.quit} onPress={() => setConfirmQuit(true)} hitSlop={10}>
          <Text style={[s.close, { color: c.muted }]}>✕</Text>
        </Pressable>
        <View
          style={[s.bar, { backgroundColor: c.sunk }]}
          accessibilityRole="progressbar"
          accessibilityValue={{ min: 0, max: 100, now: pct }}
        >
          <View style={[s.barFill, { width: `${pct}%`, backgroundColor: c.good }]} />
        </View>
        <Text style={[s.hearts, { color: c.bad }]}>♥ {session.hearts}</Text>
      </View>

      <ScrollView contentContainerStyle={s.body} keyboardShouldPersistTaps="handled">
        {step.retry && (
          <Text style={[s.retry, { backgroundColor: c.ochreSoft, color: c.ink }]}>{t.retry}</Text>
        )}
        <ExerciseView
          key={session.pos}
          ex={step.ex}
          lang={lang}
          t={t}
          verdict={session.phase === 'feedback' ? v : null}
          onAnswer={setAnswer}
          onMatched={(missed) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
            dispatch({ type: 'matched', missed });
          }}
          onSubmit={onMain}
        />
      </ScrollView>

      <View
        style={[
          s.foot,
          { paddingBottom: insets.bottom + 16, borderColor: feedback ? 'transparent' : c.line },
          feedback && { backgroundColor: v.ok ? c.goodBg : c.badBg },
        ]}
      >
        {feedback && (
          <View style={s.fb} accessibilityLiveRegion="polite">
            <Text style={[s.fbTitle, { color: v.ok ? c.good : c.bad }]}>
              {v.ok ? praise : t.wrong}
            </Text>
            {v.ok && v.note && <Text style={[s.fbSub, { color: c.muted }]}>{v.note === 'typo' ? t.typo : t.diacritics}</Text>}
            {(!v.ok || v.note) && v.answer ? (
              <View style={s.fbAnswer}>
                {v.say && <SpeakButton text={v.say} size={34} />}
                <Text style={[s.fbText, { color: c.ink }]}>{v.answer}</Text>
              </View>
            ) : null}
            {v.meaning && (
              <Text style={[s.fbSub, { color: c.muted }]}>
                {t.meaning} {v.meaning}
              </Text>
            )}
          </View>
        )}
        <View style={s.footRow}>
          {!feedback && graded && step.ex.kind !== 'match' && (
            <Pressable onPress={() => showVerdict(reveal(step.ex, lang))} style={s.ghostBtn}>
              <Text style={[s.ghost, { color: c.muted }]}>{t.skip}</Text>
            </Pressable>
          )}
          {!(step.ex.kind === 'match' && !feedback) && (
            <Button
              tone={mainTone}
              disabled={!feedback && graded && answer === null}
              onPress={onMain}
              style={{ flex: 1 }}
            >
              {mainLabel}
            </Button>
          )}
        </View>
      </View>

      {confirmQuit && (
        <View style={[s.scrim]}>
          <View style={[s.sheet, { backgroundColor: c.surface, paddingBottom: insets.bottom + 20 }]}>
            <Title>{t.quitTitle}</Title>
            <Text style={{ color: c.muted, fontSize: 16 }}>{t.quitBody}</Text>
            <Button tone="primary" onPress={() => setConfirmQuit(false)}>
              {t.stay}
            </Button>
            <Pressable onPress={() => router.back()} style={s.ghostBtn}>
              <Text style={[s.ghost, { color: c.bad, textAlign: 'center' }]}>{t.quit}</Text>
            </Pressable>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

function Results({ lesson, session, onAgain }: { lesson: Lesson; session: Session; onAgain: () => void }) {
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { progress, t } = useProgress();
  const lang = progress.lang;
  const [r] = useState(() => result(session));
  const time = `${Math.floor(r.seconds / 60)}:${String(r.seconds % 60).padStart(2, '0')}`;
  const tiles: [string, string, string][] = [
    [t.xp, `+${r.xp}`, c.ochre],
    [t.accuracy, `${r.accuracy}%`, c.good],
    [t.time, time, c.blue],
  ];

  return (
    <ScrollView
      style={{ backgroundColor: c.bg }}
      contentContainerStyle={[s.results, { paddingTop: insets.top + 32, paddingBottom: insets.bottom + 24 }]}
    >
      <Text style={[s.doneTitle, { color: c.ochre }]}>{t.done}</Text>
      <Text style={[s.sub, { color: c.muted }]}>{t.doneSub}</Text>
      <View style={s.statRow}>
        {tiles.map(([label, value, color]) => (
          <View key={label} style={[s.stat, { borderColor: color, backgroundColor: c.surface }]}>
            <Text style={[s.statLabel, { backgroundColor: color, color: c.onBlue }]}>{label}</Text>
            <Text style={[s.statValue, { color }]}>{value}</Text>
          </View>
        ))}
      </View>
      <View style={{ gap: 8, alignSelf: 'stretch' }}>
        <Text style={[s.wordsLabel, { color: c.muted }]}>{t.words}</Text>
        {lesson.words.map((w) => (
          <View key={w.ro} style={[s.word, { backgroundColor: c.surface, borderColor: c.line }]}>
            <SpeakButton text={w.ro} size={36} />
            <Text style={[s.wordRo, { color: c.ink }]}>{w.ro}</Text>
            <Text style={[s.wordTr, { color: c.muted }]}>{w.tr[lang]}</Text>
          </View>
        ))}
      </View>
      <View style={s.endButtons}>
        <Button tone="primary" onPress={() => router.back()}>
          {t.toCourse}
        </Button>
        <Pressable onPress={onAgain} style={s.ghostBtn}>
          <Text style={[s.ghost, { color: c.muted, textAlign: 'center' }]}>{t.again}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16, paddingHorizontal: 24 },
  top: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 16, paddingBottom: 10 },
  close: { fontSize: 22, fontWeight: '700' },
  bar: { flex: 1, height: 16, borderRadius: 99, overflow: 'hidden' },
  barFill: { height: '100%', borderRadius: 99 },
  hearts: { fontSize: 18, fontWeight: '800', fontVariant: ['tabular-nums'] },
  body: { paddingHorizontal: 16, paddingTop: 10, paddingBottom: 24, gap: 12 },
  retry: { alignSelf: 'flex-start', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 2, fontSize: 13, fontWeight: '700', overflow: 'hidden' },
  foot: { borderTopWidth: 2, paddingHorizontal: 16, paddingTop: 16, gap: 12 },
  fb: { gap: 4 },
  fbTitle: { fontSize: 20, fontWeight: '800' },
  fbSub: { fontSize: 15 },
  fbAnswer: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  fbText: { fontSize: 17, fontWeight: '700', flexShrink: 1 },
  footRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  ghostBtn: { paddingVertical: 10, paddingHorizontal: 8 },
  ghost: { fontSize: 13, fontWeight: '700', letterSpacing: 0.8, textTransform: 'uppercase' },
  scrim: { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(8,12,30,0.55)', justifyContent: 'flex-end' },
  sheet: { borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 20, gap: 12 },
  bigHeart: { fontSize: 56 },
  sub: { fontSize: 16, textAlign: 'center' },
  endButtons: { alignSelf: 'stretch', gap: 6 },
  results: { paddingHorizontal: 16, alignItems: 'center', gap: 22 },
  doneTitle: { fontSize: 28, fontWeight: '800', textAlign: 'center' },
  statRow: { flexDirection: 'row', gap: 10, alignSelf: 'stretch' },
  stat: { flex: 1, borderWidth: 2, borderRadius: 16, overflow: 'hidden' },
  statLabel: { textAlign: 'center', fontSize: 11, fontWeight: '800', letterSpacing: 0.6, textTransform: 'uppercase', paddingVertical: 5 },
  statValue: { textAlign: 'center', fontSize: 22, fontWeight: '800', paddingVertical: 12, fontVariant: ['tabular-nums'] },
  wordsLabel: { fontSize: 13, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase' },
  word: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 2, borderRadius: 14, paddingVertical: 8, paddingHorizontal: 12 },
  wordRo: { fontWeight: '700', fontSize: 16 },
  wordTr: { marginLeft: 'auto', flexShrink: 1, textAlign: 'right' },
});
