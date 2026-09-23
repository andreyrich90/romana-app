import type { Lesson } from '../types';

/** Unit 2 · Lesson 4 — numbers 11–100 and age: «Câți ani ai?», «Am 20 de ani». */
export const u2l4: Lesson = {
  id: 'u2l4',
  title: { ru: 'Возраст', ua: 'Вік' },
  words: [
    { ro: 'unsprezece, doisprezece', tr: { ru: 'одиннадцать, двенадцать', ua: 'одинадцять, дванадцять' } },
    { ro: 'douăzeci, treizeci', tr: { ru: 'двадцать, тридцать', ua: 'двадцять, тридцять' } },
    { ro: 'douăzeci și unu', tr: { ru: 'двадцать один', ua: 'двадцять один' } },
    { ro: 'o sută', tr: { ru: 'сто', ua: 'сто' } },
    { ro: 'Câți ani ai?', tr: { ru: 'Сколько тебе лет?', ua: 'Скільки тобі років?' } },
    { ro: 'Am douăzeci de ani.', tr: { ru: 'Мне двадцать лет.', ua: 'Мені двадцять років.' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'unsprezece, doisprezece',
      tr: { ru: '11, 12', ua: '11, 12' },
      note: {
        ru: 'Устроено как в русском «один-на-дцать»: un + spre + zece — «один на десяти». ≈ «унспрезече», «дойспрезече».',
        ua: 'Влаштовано як в українському «один-на-дцять»: un + spre + zece — «один на десяти». ≈ «унспрезече», «дойспрезече».',
      },
    },
    {
      kind: 'intro',
      ro: 'douăzeci, treizeci',
      tr: { ru: '20, 30', ua: '20, 30' },
      note: {
        ru: 'Десятки — число + zeci («десятки»): două+zeci, trei+zeci, patru+zeci. 21 — douăzeci și unu, «двадцать и один».',
        ua: 'Десятки — число + zeci («десятки»): două+zeci, trei+zeci, patru+zeci. 21 — douăzeci și unu, «двадцять і один».',
      },
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'cincisprezece', tr: { ru: '15', ua: '15' } },
        { ro: 'douăzeci', tr: { ru: '20', ua: '20' } },
        { ro: 'treizeci', tr: { ru: '30', ua: '30' } },
        { ro: 'patruzeci', tr: { ru: '40', ua: '40' } },
        { ro: 'o sută', tr: { ru: '100', ua: '100' } },
      ],
    },
    {
      kind: 'intro',
      ro: 'Câți ani ai?',
      tr: { ru: 'Сколько тебе лет?', ua: 'Скільки тобі років?' },
      note: {
        ru: 'Дословно «сколько лет имеешь?» — возраст в румынском «имеют»: Am 25 de ani — мне 25 лет.',
        ua: 'Дослівно «скільки років маєш?» — вік «мають»: Am 25 de ani — мені 25 років.',
      },
    },
    {
      kind: 'tip',
      title: 'Douăzeci de ani',
      body: {
        ru: [
          'С 20 и дальше между числом и словом появляется **de**: douăzeci **de** ani, treizeci și doi **de** ani, o sută **de** ani.',
          'До 19 — без него: cinci ani, nouăsprezece ani.',
        ],
        ua: [
          'Від 20 і далі між числом і словом зʼявляється **de**: douăzeci **de** ani, treizeci și doi **de** ani, o sută **de** ani.',
          'До 19 — без нього: cinci ani, nouăsprezece ani.',
        ],
      },
      rows: [
        { ro: 'Am cinci ani.', tr: { ru: 'Мне пять лет.', ua: 'Мені пʼять років.' } },
        { ro: 'Am nouăsprezece ani.', tr: { ru: 'Мне девятнадцать лет.', ua: 'Мені девʼятнадцять років.' } },
        { ro: 'Am douăzeci de ani.', tr: { ru: 'Мне двадцать лет.', ua: 'Мені двадцять років.' } },
        { ro: 'Am treizeci și doi de ani.', tr: { ru: 'Мне тридцать два года.', ua: 'Мені тридцять два роки.' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мне двадцать лет.', ua: 'Мені двадцять років.' },
      correct: 'Am douăzeci de ani.',
      wrong: ['Am douăzeci ani.', 'Sunt douăzeci de ani.', 'Am doisprezece ani.'],
    },
    {
      kind: 'listen',
      ro: 'Am treizeci de ani',
      tr: { ru: 'Мне тридцать лет', ua: 'Мені тридцять років' },
      wrong: ['Am treisprezece ani', 'Am douăzeci de ani', 'Ai treizeci de ani'],
    },
    {
      kind: 'pickNative',
      q: 'patruzeci',
      correct: { ru: 'сорок', ua: 'сорок' },
      wrong: [
        { ru: 'четырнадцать', ua: 'чотирнадцять' },
        { ru: 'четыре', ua: 'чотири' },
        { ru: 'сто', ua: 'сто' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Сколько лет твоей маме?', ua: 'Скільки років твоїй мамі?' },
      words: ['Câți', 'ani', 'are', 'mama', 'ta'],
      extra: ['ai', 'mea', 'de'],
      shown: 'Câți ani are mama ta?',
    },
    {
      kind: 'type',
      q: { ru: 'Мне 25 лет.', ua: 'Мені 25 років.' },
      answers: ['Am douăzeci și cinci de ani', 'Eu am douăzeci și cinci de ani', 'Am 25 de ani', 'Eu am 25 de ani'],
      shown: 'Am douăzeci și cinci de ani.',
    },
    {
      kind: 'type',
      q: { ru: 'Моему брату двенадцать лет.', ua: 'Моєму братові дванадцять років.' },
      answers: ['Fratele meu are doisprezece ani', 'Fratele meu are 12 ani'],
      shown: 'Fratele meu are doisprezece ani.',
    },
  ],
};
