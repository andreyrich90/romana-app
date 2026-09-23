import type { Lesson } from '../types';

/** Unit 5 · Lesson 2 — telling the time: «Cât e ceasul?», «E ora două», și jumătate / și un sfert / fără un sfert, «La ce oră?». */
export const u5l2: Lesson = {
  id: 'u5l2',
  title: { ru: 'Который час?', ua: 'Котра година?' },
  words: [
    { ro: 'Cât e ceasul?', tr: { ru: 'Который час?', ua: 'Котра година?' } },
    { ro: 'E ora trei.', tr: { ru: 'Сейчас три часа.', ua: 'Зараз третя година.' } },
    { ro: 'și jumătate', tr: { ru: 'и половина (:30)', ua: 'і половина (:30)' } },
    { ro: 'și un sfert, fără un sfert', tr: { ru: 'и четверть (:15), без четверти (:45)', ua: 'і чверть (:15), без чверті (:45)' } },
    { ro: 'La ce oră?', tr: { ru: 'Во сколько?', ua: 'О котрій?' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Cât e ceasul?',
      tr: { ru: 'Который час?', ua: 'Котра година?' },
      note: {
        ru: 'Дословно «сколько показывают часы?». ceasul ≈ «чясул». Говорят и Ce oră este?',
        ua: 'Дослівно «скільки показує годинник?». ceasul ≈ «чясул». Кажуть і Ce oră este?',
      },
    },
    {
      kind: 'intro',
      ro: 'E ora trei.',
      tr: { ru: 'Сейчас три часа.', ua: 'Зараз третя година.' },
      note: {
        ru: 'ora — «час», женского рода. Поэтому два часа — ora două, а не doi.',
        ua: 'ora — «година», жіночого роду. Тому друга година — ora două, а не doi.',
      },
    },
    {
      kind: 'intro',
      ro: 'E ora trei și jumătate.',
      tr: { ru: 'Сейчас 3:30.', ua: 'Зараз 3:30.' },
      note: {
        ru: 'Дословно «три и половина». jumătate ≈ «жумэтате». Четверть — un sfert: și un sfert (:15), fără un sfert (:45).',
        ua: 'Дослівно «три і половина». jumătate ≈ «жуметате». Чверть — un sfert: și un sfert (:15), fără un sfert (:45).',
      },
    },
    {
      kind: 'intro',
      ro: 'La ce oră?',
      tr: { ru: 'Во сколько?', ua: 'О котрій?' },
      note: {
        ru: 'Ответ — тоже с la: La ora opt. — В восемь.',
        ua: 'Відповідь — теж з la: La ora opt. — О восьмій.',
      },
    },
    {
      kind: 'tip',
      title: 'E ora două',
      body: {
        ru: [
          '**ora** женского рода, поэтому 1 и 2 — женские: ora **unu**, ora **două**, ora **douăsprezece**.',
          'Минуты — через **și** («и») и **fără** («без»), как в русском «без четверти восемь».',
        ],
        ua: [
          '**ora** жіночого роду, тому 1 і 2 — жіночі: ora **unu**, ora **două**, ora **douăsprezece**.',
          'Хвилини — через **și** («і») та **fără** («без»), як в українському «за чверть восьма».',
        ],
      },
      rows: [
        { ro: 'E ora unu.', tr: { ru: '1:00 · «е ора уну»', ua: '1:00 · «є ора уну»' } },
        { ro: 'E ora două.', tr: { ru: '2:00 · «е ора доуэ»', ua: '2:00 · «є ора доуе»' } },
        { ro: 'E ora cinci și un sfert.', tr: { ru: '5:15 · «е ора чинчь ши ун сферт»', ua: '5:15 · «є ора чінчь ші ун сферт»' } },
        { ro: 'E ora șase și jumătate.', tr: { ru: '6:30 · «е ора шасе ши жумэтате»', ua: '6:30 · «є ора шасе ші жуметате»' } },
        { ro: 'E ora opt fără un sfert.', tr: { ru: '7:45 · «е ора опт фэрэ ун сферт»', ua: '7:45 · «є ора опт фере ун сферт»' } },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'ceasul', tr: { ru: 'часы', ua: 'годинник' } },
        { ro: 'ora', tr: { ru: 'час', ua: 'година' } },
        { ro: 'jumătate', tr: { ru: 'половина', ua: 'половина' } },
        { ro: 'un sfert', tr: { ru: 'четверть', ua: 'чверть' } },
        { ro: 'fără', tr: { ru: 'без', ua: 'без' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Сейчас два часа.', ua: 'Зараз друга година.' },
      correct: 'E ora două.',
      wrong: ['E ora doi.', 'Sunt ora două.', 'E ora două și jumătate.'],
    },
    {
      kind: 'listen',
      ro: 'E ora nouă și jumătate',
      tr: { ru: 'Сейчас 9:30', ua: 'Зараз 9:30' },
      wrong: ['E ora nouă și un sfert', 'E ora zece și jumătate', 'E ora nouă fără un sfert'],
    },
    {
      kind: 'pickNative',
      q: 'La ce oră mergem?',
      correct: { ru: 'Во сколько мы идём?', ua: 'О котрій ми йдемо?' },
      wrong: [
        { ru: 'Куда мы идём?', ua: 'Куди ми йдемо?' },
        { ru: 'Который час?', ua: 'Котра година?' },
        { ru: 'Во сколько ты идёшь?', ua: 'О котрій ти йдеш?' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'В восемь часов.', ua: 'О восьмій годині.' },
      words: ['La', 'ora', 'opt'],
      extra: ['e', 'și', 'unu'],
      shown: 'La ora opt.',
    },
    {
      kind: 'type',
      q: { ru: 'Который час?', ua: 'Котра година?' },
      answers: ['Cât e ceasul', 'Cât este ceasul', 'Ce oră este', 'Ce oră e'],
      shown: 'Cât e ceasul?',
    },
    {
      kind: 'type',
      q: { ru: 'Сейчас 3:30.', ua: 'Зараз 3:30.' },
      answers: ['E ora trei și jumătate', 'Este ora trei și jumătate', 'E trei și jumătate'],
      shown: 'E ora trei și jumătate.',
    },
  ],
};
