import { u0l1 } from './lessons/u0l1';
import { u0l2 } from './lessons/u0l2';
import { u0l3 } from './lessons/u0l3';
import { u0l4 } from './lessons/u0l4';
import { u0l5 } from './lessons/u0l5';
import { u1l1 } from './lessons/u1l1';
import { u1l2 } from './lessons/u1l2';
import { u1l3 } from './lessons/u1l3';
import { u1l4 } from './lessons/u1l4';
import { u1l5 } from './lessons/u1l5';
import { u2l1 } from './lessons/u2l1';
import { u2l2 } from './lessons/u2l2';
import { u2l3 } from './lessons/u2l3';
import { u2l4 } from './lessons/u2l4';
import { u2l5 } from './lessons/u2l5';
import { u3l1 } from './lessons/u3l1';
import { u3l2 } from './lessons/u3l2';
import { u3l3 } from './lessons/u3l3';
import { u3l4 } from './lessons/u3l4';
import { u3l5 } from './lessons/u3l5';
import { u4l1 } from './lessons/u4l1';
import { u4l2 } from './lessons/u4l2';
import { u4l3 } from './lessons/u4l3';
import { u4l4 } from './lessons/u4l4';
import { u4l5 } from './lessons/u4l5';
import { u5l1 } from './lessons/u5l1';
import { u5l2 } from './lessons/u5l2';
import { u5l3 } from './lessons/u5l3';
import { u5l4 } from './lessons/u5l4';
import { u5l5 } from './lessons/u5l5';
import { u6l1 } from './lessons/u6l1';
import { u6l2 } from './lessons/u6l2';
import { u6l3 } from './lessons/u6l3';
import { u6l4 } from './lessons/u6l4';
import { u6l5 } from './lessons/u6l5';
import { u7l1 } from './lessons/u7l1';
import { u7l2 } from './lessons/u7l2';
import { u7l3 } from './lessons/u7l3';
import { u7l4 } from './lessons/u7l4';
import { u7l5 } from './lessons/u7l5';
import { u8l1 } from './lessons/u8l1';
import { u8l2 } from './lessons/u8l2';
import { u8l3 } from './lessons/u8l3';
import { u8l4 } from './lessons/u8l4';
import { u8l5 } from './lessons/u8l5';
import { u9l1 } from './lessons/u9l1';
import { u9l2 } from './lessons/u9l2';
import { u9l3 } from './lessons/u9l3';
import { u9l4 } from './lessons/u9l4';
import { u9l5 } from './lessons/u9l5';
import { u10l1 } from './lessons/u10l1';
import { u10l2 } from './lessons/u10l2';
import { u10l3 } from './lessons/u10l3';
import { u10l4 } from './lessons/u10l4';
import { u10l5 } from './lessons/u10l5';
import { u11l1 } from './lessons/u11l1';
import { u11l2 } from './lessons/u11l2';
import { u11l3 } from './lessons/u11l3';
import { u11l4 } from './lessons/u11l4';
import { u11l5 } from './lessons/u11l5';
import { u12l1 } from './lessons/u12l1';
import { u12l2 } from './lessons/u12l2';
import { u12l3 } from './lessons/u12l3';
import { u12l4 } from './lessons/u12l4';
import { u12l5 } from './lessons/u12l5';
import { u13l1 } from './lessons/u13l1';
import { u13l2 } from './lessons/u13l2';
import { u13l3 } from './lessons/u13l3';
import { u13l4 } from './lessons/u13l4';
import { u13l5 } from './lessons/u13l5';
import type { Lesson, Unit } from './types';

/**
 * The course map, A1 then A2. Lessons without `lesson` are planned but not yet written;
 * their scope is in docs/curriculum-a1.md and docs/curriculum-a2.md.
 */
export const COURSE: Unit[] = [
  {
    id: 'u0',
    level: 'A0',
    kicker: { ru: 'Старт', ua: 'Старт' },
    ro: 'Alfabetul',
    title: { ru: 'Алфавит и чтение', ua: 'Абетка і читання' },
    lessons: [
      { id: 'u0l1', title: u0l1.title, lesson: u0l1 },
      { id: 'u0l2', title: u0l2.title, lesson: u0l2 },
      { id: 'u0l3', title: u0l3.title, lesson: u0l3 },
      { id: 'u0l4', title: u0l4.title, lesson: u0l4 },
      { id: 'u0l5', title: u0l5.title, lesson: u0l5 },
    ],
  },
  {
    id: 'u1',
    level: 'A1',
    ro: 'Primii pași',
    title: { ru: 'Первые шаги', ua: 'Перші кроки' },
    lessons: [
      { id: 'u1l1', title: u1l1.title, lesson: u1l1 },
      { id: 'u1l2', title: u1l2.title, lesson: u1l2 },
      { id: 'u1l3', title: u1l3.title, lesson: u1l3 },
      { id: 'u1l4', title: u1l4.title, lesson: u1l4 },
      { id: 'u1l5', title: u1l5.title, lesson: u1l5 },
    ],
  },
  {
    id: 'u2',
    level: 'A1',
    ro: 'Familia',
    title: { ru: 'Семья', ua: 'Родина' },
    lessons: [
      { id: 'u2l1', title: u2l1.title, lesson: u2l1 },
      { id: 'u2l2', title: u2l2.title, lesson: u2l2 },
      { id: 'u2l3', title: u2l3.title, lesson: u2l3 },
      { id: 'u2l4', title: u2l4.title, lesson: u2l4 },
      { id: 'u2l5', title: u2l5.title, lesson: u2l5 },
    ],
  },
  {
    id: 'u3',
    level: 'A1',
    ro: 'La cafenea',
    title: { ru: 'Еда и кафе', ua: 'Їжа й кафе' },
    lessons: [
      { id: 'u3l1', title: u3l1.title, lesson: u3l1 },
      { id: 'u3l2', title: u3l2.title, lesson: u3l2 },
      { id: 'u3l3', title: u3l3.title, lesson: u3l3 },
      { id: 'u3l4', title: u3l4.title, lesson: u3l4 },
      { id: 'u3l5', title: u3l5.title, lesson: u3l5 },
    ],
  },
  {
    id: 'u4',
    level: 'A1',
    ro: 'În oraș',
    title: { ru: 'В городе', ua: 'У місті' },
    lessons: [
      { id: 'u4l1', title: u4l1.title, lesson: u4l1 },
      { id: 'u4l2', title: u4l2.title, lesson: u4l2 },
      { id: 'u4l3', title: u4l3.title, lesson: u4l3 },
      { id: 'u4l4', title: u4l4.title, lesson: u4l4 },
      { id: 'u4l5', title: u4l5.title, lesson: u4l5 },
    ],
  },
  {
    id: 'u5',
    level: 'A1',
    ro: 'Timpul',
    title: { ru: 'Время и дни', ua: 'Час і дні' },
    lessons: [
      { id: 'u5l1', title: u5l1.title, lesson: u5l1 },
      { id: 'u5l2', title: u5l2.title, lesson: u5l2 },
      { id: 'u5l3', title: u5l3.title, lesson: u5l3 },
      { id: 'u5l4', title: u5l4.title, lesson: u5l4 },
      { id: 'u5l5', title: u5l5.title, lesson: u5l5 },
    ],
  },
  {
    id: 'u6',
    level: 'A1',
    ro: 'Acasă',
    title: { ru: 'Дом', ua: 'Дім' },
    lessons: [
      { id: 'u6l1', title: u6l1.title, lesson: u6l1 },
      { id: 'u6l2', title: u6l2.title, lesson: u6l2 },
      { id: 'u6l3', title: u6l3.title, lesson: u6l3 },
      { id: 'u6l4', title: u6l4.title, lesson: u6l4 },
      { id: 'u6l5', title: u6l5.title, lesson: u6l5 },
    ],
  },
  {
    id: 'u7',
    level: 'A2',
    ro: 'Ieri',
    title: { ru: 'Вчера', ua: 'Учора' },
    lessons: [
      { id: 'u7l1', title: u7l1.title, lesson: u7l1 },
      { id: 'u7l2', title: u7l2.title, lesson: u7l2 },
      { id: 'u7l3', title: u7l3.title, lesson: u7l3 },
      { id: 'u7l4', title: u7l4.title, lesson: u7l4 },
      { id: 'u7l5', title: u7l5.title, lesson: u7l5 },
    ],
  },
  {
    id: 'u8',
    level: 'A2',
    ro: 'Mâine',
    title: { ru: 'Завтра', ua: 'Завтра' },
    lessons: [
      { id: 'u8l1', title: u8l1.title, lesson: u8l1 },
      { id: 'u8l2', title: u8l2.title, lesson: u8l2 },
      { id: 'u8l3', title: u8l3.title, lesson: u8l3 },
      { id: 'u8l4', title: u8l4.title, lesson: u8l4 },
      { id: 'u8l5', title: u8l5.title, lesson: u8l5 },
    ],
  },
  {
    id: 'u9',
    level: 'A2',
    ro: 'Vreau să…',
    title: { ru: 'Я хочу…', ua: 'Я хочу…' },
    lessons: [
      { id: 'u9l1', title: u9l1.title, lesson: u9l1 },
      { id: 'u9l2', title: u9l2.title, lesson: u9l2 },
      { id: 'u9l3', title: u9l3.title, lesson: u9l3 },
      { id: 'u9l4', title: u9l4.title, lesson: u9l4 },
      { id: 'u9l5', title: u9l5.title, lesson: u9l5 },
    ],
  },
  {
    id: 'u10',
    level: 'A2',
    ro: 'La doctor',
    title: { ru: 'У врача', ua: 'У лікаря' },
    lessons: [
      { id: 'u10l1', title: u10l1.title, lesson: u10l1 },
      { id: 'u10l2', title: u10l2.title, lesson: u10l2 },
      { id: 'u10l3', title: u10l3.title, lesson: u10l3 },
      { id: 'u10l4', title: u10l4.title, lesson: u10l4 },
      { id: 'u10l5', title: u10l5.title, lesson: u10l5 },
    ],
  },
  {
    id: 'u11',
    level: 'A2',
    ro: 'Cumpărături',
    title: { ru: 'Покупки', ua: 'Покупки' },
    lessons: [
      { id: 'u11l1', title: u11l1.title, lesson: u11l1 },
      { id: 'u11l2', title: u11l2.title, lesson: u11l2 },
      { id: 'u11l3', title: u11l3.title, lesson: u11l3 },
      { id: 'u11l4', title: u11l4.title, lesson: u11l4 },
      { id: 'u11l5', title: u11l5.title, lesson: u11l5 },
    ],
  },
  {
    id: 'u12',
    level: 'A2',
    ro: 'Călătorii',
    title: { ru: 'Путешествия', ua: 'Подорожі' },
    lessons: [
      { id: 'u12l1', title: u12l1.title, lesson: u12l1 },
      { id: 'u12l2', title: u12l2.title, lesson: u12l2 },
      { id: 'u12l3', title: u12l3.title, lesson: u12l3 },
      { id: 'u12l4', title: u12l4.title, lesson: u12l4 },
      { id: 'u12l5', title: u12l5.title, lesson: u12l5 },
    ],
  },
  {
    id: 'u13',
    level: 'B1',
    ro: 'Pe vremuri',
    title: { ru: 'Как это было', ua: 'Як це було' },
    lessons: [
      { id: 'u13l1', title: u13l1.title, lesson: u13l1 },
      { id: 'u13l2', title: u13l2.title, lesson: u13l2 },
      { id: 'u13l3', title: u13l3.title, lesson: u13l3 },
      { id: 'u13l4', title: u13l4.title, lesson: u13l4 },
      { id: 'u13l5', title: u13l5.title, lesson: u13l5 },
    ],
  },
];

const ORDER = COURSE.flatMap((u) => u.lessons);

export function findLesson(id: string): Lesson | undefined {
  return ORDER.find((l) => l.id === id)?.lesson;
}

/** Position of a lesson in the course, -1 if unknown. Later lessons have larger numbers. */
export function lessonIndex(id: string | null | undefined): number {
  return id ? ORDER.findIndex((l) => l.id === id) : -1;
}

/** The first lesson of a unit: where a placement test starts the learner. */
export function unitStart(unitId: string): string {
  return COURSE.find((u) => u.id === unitId)!.lessons[0].id;
}

/**
 * A lesson opens once the nearest written lesson before it is completed. Lessons that
 * are only planned are skipped over, so a gap in the course (a unit not yet written)
 * does not lock everything after it. `startAt` is where the placement test put the
 * learner: that lesson and everything before it are open without being completed.
 */
export function isUnlocked(id: string, completed: Record<string, unknown>, startAt?: string | null): boolean {
  const i = ORDER.findIndex((l) => l.id === id);
  if (i < 0) return false;
  if (i <= lessonIndex(startAt)) return true;
  for (let j = i - 1; j >= 0; j--) {
    if (ORDER[j].lesson) return ORDER[j].id in completed;
  }
  return true;
}
