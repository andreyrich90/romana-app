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
import type { Lesson, Unit } from './types';

/**
 * The A1 course map. Lessons without `lesson` are planned but not yet written;
 * their scope is in docs/curriculum-a1.md.
 */
export const COURSE: Unit[] = [
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
      { id: 'u3l1', title: { ru: 'Напитки', ua: 'Напої' } },
      { id: 'u3l2', title: { ru: 'Еда', ua: 'Їжа' } },
      { id: 'u3l3', title: { ru: 'Я бы хотел…', ua: 'Я б хотів…' } },
      { id: 'u3l4', title: { ru: 'Сколько стоит?', ua: 'Скільки коштує?' } },
      { id: 'u3l5', title: { ru: 'Повторение', ua: 'Повторення' } },
    ],
  },
  {
    id: 'u4',
    level: 'A1',
    ro: 'În oraș',
    title: { ru: 'В городе', ua: 'У місті' },
    lessons: [
      { id: 'u4l1', title: { ru: 'Где это?', ua: 'Де це?' } },
      { id: 'u4l2', title: { ru: 'Транспорт', ua: 'Транспорт' } },
      { id: 'u4l3', title: { ru: 'Направо, налево', ua: 'Праворуч, ліворуч' } },
      { id: 'u4l4', title: { ru: 'Магазины', ua: 'Магазини' } },
      { id: 'u4l5', title: { ru: 'Повторение', ua: 'Повторення' } },
    ],
  },
  {
    id: 'u5',
    level: 'A1',
    ro: 'Timpul',
    title: { ru: 'Время и дни', ua: 'Час і дні' },
    lessons: [
      { id: 'u5l1', title: { ru: 'Дни недели', ua: 'Дні тижня' } },
      { id: 'u5l2', title: { ru: 'Который час?', ua: 'Котра година?' } },
      { id: 'u5l3', title: { ru: 'Мой день', ua: 'Мій день' } },
      { id: 'u5l4', title: { ru: 'Месяцы и погода', ua: 'Місяці й погода' } },
      { id: 'u5l5', title: { ru: 'Повторение', ua: 'Повторення' } },
    ],
  },
  {
    id: 'u6',
    level: 'A1',
    ro: 'Acasă',
    title: { ru: 'Дом', ua: 'Дім' },
    lessons: [
      { id: 'u6l1', title: { ru: 'Комнаты', ua: 'Кімнати' } },
      { id: 'u6l2', title: { ru: 'Много вещей', ua: 'Багато речей' } },
      { id: 'u6l3', title: { ru: 'Какой? Какая?', ua: 'Який? Яка?' } },
      { id: 'u6l4', title: { ru: 'Мне нравится', ua: 'Мені подобається' } },
      { id: 'u6l5', title: { ru: 'Итог A1', ua: 'Підсумок A1' } },
    ],
  },
];

const ORDER = COURSE.flatMap((u) => u.lessons);

export function findLesson(id: string): Lesson | undefined {
  return ORDER.find((l) => l.id === id)?.lesson;
}

/** A lesson opens once the one before it is completed. */
export function isUnlocked(id: string, completed: Record<string, unknown>): boolean {
  const i = ORDER.findIndex((l) => l.id === id);
  return i === 0 || (i > 0 && ORDER[i - 1].id in completed);
}
