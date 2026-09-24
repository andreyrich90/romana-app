import { COURSE } from '../content/course';
import type { Bi } from '../content/types';
import type { Progress } from '../state/model';

export type Achievement = {
  id: string;
  icon: string;
  title: Bi;
  desc: Bi;
  /** How far along the learner is, out of `target`. */
  value: number;
  target: number;
};

type Def = Omit<Achievement, 'value'> & { measure: (p: Progress) => number };

const written = COURSE.flatMap((u) => u.lessons).filter((l) => l.lesson);
const levelLessons = (level: string) => COURSE.filter((u) => u.level === level).flatMap((u) => u.lessons);
const writtenA1 = levelLessons('A1');
const writtenA2 = levelLessons('A2');
const done = (p: Progress) => written.filter((l) => l.id in p.completed).length;
const doneA1 = (p: Progress) => writtenA1.filter((l) => l.id in p.completed).length;
const doneA2 = (p: Progress) => writtenA2.filter((l) => l.id in p.completed).length;
const unitsDone = (p: Progress) =>
  COURSE.filter((u) => u.lessons.every((l) => l.lesson && l.id in p.completed)).length;
const perfect = (p: Progress) => Object.values(p.completed).filter((r) => r.bestAccuracy >= 100).length;
const streakAch = (n: number, title: Bi): Def => ({
  id: `streak${n}`,
  icon: '🔥',
  title,
  desc: { ru: `Серия ${n} дней подряд`, ua: `Серія ${n} днів поспіль` },
  target: n,
  measure: (p) => Math.max(p.bestStreak, p.streak),
});
const xpAch = (n: number, title: Bi): Def => ({
  id: `xp${n}`,
  icon: '⚡',
  title,
  desc: { ru: `Набрать ${n} опыта`, ua: `Набрати ${n} досвіду` },
  target: n,
  measure: (p) => p.xp,
});

const DEFS: Def[] = [
  {
    id: 'first',
    icon: '🌱',
    title: { ru: 'Первый шаг', ua: 'Перший крок' },
    desc: { ru: 'Пройти первый урок', ua: 'Пройти перший урок' },
    target: 1,
    measure: done,
  },
  {
    id: 'goal',
    icon: '🎯',
    title: { ru: 'В цель', ua: 'У ціль' },
    desc: { ru: 'Выполнить дневную цель', ua: 'Виконати денну мету' },
    target: 1,
    measure: (p) => (p.lastDay ? 1 : 0),
  },
  streakAch(3, { ru: 'Разгон', ua: 'Розгін' }),
  streakAch(7, { ru: 'Неделя', ua: 'Тиждень' }),
  streakAch(30, { ru: 'Месяц без перерыва', ua: 'Місяць без перерви' }),
  {
    id: 'unit',
    icon: '🏁',
    title: { ru: 'Раздел пройден', ua: 'Розділ пройдено' },
    desc: { ru: 'Пройти все уроки одного раздела', ua: 'Пройти всі уроки одного розділу' },
    target: 1,
    measure: unitsDone,
  },
  {
    id: 'a1',
    icon: '🇷🇴',
    title: { ru: 'Уровень A1', ua: 'Рівень A1' },
    desc: { ru: 'Пройти все уроки уровня A1', ua: 'Пройти всі уроки рівня A1' },
    target: writtenA1.length,
    measure: doneA1,
  },
  {
    id: 'a2',
    icon: '🎓',
    title: { ru: 'Уровень A2', ua: 'Рівень A2' },
    desc: { ru: 'Пройти все уроки уровня A2', ua: 'Пройти всі уроки рівня A2' },
    target: writtenA2.length,
    measure: doneA2,
  },
  {
    id: 'perfect',
    icon: '💎',
    title: { ru: 'Без ошибок', ua: 'Без помилок' },
    desc: { ru: 'Пройти урок на 100%', ua: 'Пройти урок на 100%' },
    target: 1,
    measure: perfect,
  },
  {
    id: 'perfect10',
    icon: '🏆',
    title: { ru: 'Отличник', ua: 'Відмінник' },
    desc: { ru: '10 уроков на 100%', ua: '10 уроків на 100%' },
    target: 10,
    measure: perfect,
  },
  {
    id: 'practice',
    icon: '🔁',
    title: { ru: 'Повторение — мать учения', ua: 'Повторення — мати навчання' },
    desc: { ru: 'Пройти 10 тренировок', ua: 'Пройти 10 тренувань' },
    target: 10,
    measure: (p) => p.practiceCount,
  },
  xpAch(100, { ru: 'Сотня', ua: 'Сотня' }),
  xpAch(500, { ru: 'Полтысячи', ua: 'Пів тисячі' }),
  xpAch(1000, { ru: 'Тысячник', ua: 'Тисячник' }),
];

/** Achievements are computed from progress, never stored — nothing to sync or migrate. */
export function achievements(p: Progress): Achievement[] {
  return DEFS.map(({ measure, ...d }) => ({ ...d, value: Math.min(measure(p), d.target) }));
}
