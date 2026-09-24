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
import type { Lesson, Unit } from './types';

/**
 * The course map, A1 then A2. Lessons without `lesson` are planned but not yet written;
 * their scope is in docs/curriculum-a1.md and docs/curriculum-a2.md.
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
];

const ORDER = COURSE.flatMap((u) => u.lessons);

export function findLesson(id: string): Lesson | undefined {
  return ORDER.find((l) => l.id === id)?.lesson;
}

/**
 * A lesson opens once the nearest written lesson before it is completed. Lessons that
 * are only planned are skipped over, so a gap in the course (a unit not yet written)
 * does not lock everything after it.
 */
export function isUnlocked(id: string, completed: Record<string, unknown>): boolean {
  const i = ORDER.findIndex((l) => l.id === id);
  if (i < 0) return false;
  for (let j = i - 1; j >= 0; j--) {
    if (ORDER[j].lesson) return ORDER[j].id in completed;
  }
  return true;
}
