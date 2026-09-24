import { StyleSheet, Text, View } from 'react-native';

import { usePalette } from '../lib/theme';
import { todayXp } from '../state/model';
import { useProgress } from '../state/progress';

/** Today's XP against the daily goal, with the streak beside it. */
export function DailyGoal({ compact }: { compact?: boolean }) {
  const c = usePalette();
  const { progress, t } = useProgress();
  const xp = todayXp(progress);
  const goal = progress.dailyGoal;
  const met = xp >= goal;
  const pct = Math.min(100, Math.round((100 * xp) / goal));

  return (
    <View style={[s.card, { backgroundColor: c.surface, borderColor: met ? c.good : c.line }]}>
      <View style={s.row}>
        <Text style={[s.label, { color: c.muted }]}>{t.todayGoal}</Text>
        <Text style={[s.count, { color: met ? c.good : c.ink }]}>
          {xp} / {goal} ⚡
        </Text>
      </View>
      <View
        style={[s.track, { backgroundColor: c.sunk }]}
        accessibilityRole="progressbar"
        accessibilityValue={{ min: 0, max: goal, now: Math.min(xp, goal) }}
      >
        <View style={[s.fill, { width: `${pct}%`, backgroundColor: met ? c.good : c.ochre }]} />
      </View>
      <View style={s.row}>
        <Text style={[s.note, { color: met ? c.good : c.muted }]}>{met ? t.goalDone : t.goalLeft(goal - xp)}</Text>
        {!compact && (
          <Text style={[s.streak, { color: c.ochre }]}>
            🔥 {t.days(progress.streak)} {progress.freezes > 0 ? `· 🧊 ${progress.freezes}` : ''}
          </Text>
        )}
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  card: { borderWidth: 2, borderRadius: 18, padding: 14, gap: 8, alignSelf: 'stretch' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 8 },
  label: { fontSize: 12, fontWeight: '800', letterSpacing: 1, textTransform: 'uppercase' },
  count: { fontSize: 16, fontWeight: '800', fontVariant: ['tabular-nums'] },
  track: { height: 14, borderRadius: 99, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: 99 },
  note: { fontSize: 14, fontWeight: '600', flexShrink: 1 },
  streak: { fontSize: 14, fontWeight: '800' },
});
