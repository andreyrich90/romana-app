import type { Lesson } from '../types';

/** B1 · Unit 3 · Lesson 4 — the impersonal se: se vorbește, se caută, nu se fumează, se deschide / se închide, cum se spune…? */
export const u15l4: Lesson = {
  id: 'u15l4',
  title: { ru: 'Здесь говорят…', ua: 'Тут говорять…' },
  words: [
    { ro: 'se vorbește', tr: { ru: 'говорят (здесь)', ua: 'говорять (тут)' } },
    { ro: 'se caută', tr: { ru: 'требуется, ищут', ua: 'потрібен, шукають' } },
    { ro: 'nu se fumează', tr: { ru: 'не курить', ua: 'не палити' } },
    { ro: 'se deschide · se închide', tr: { ru: 'открывается · закрывается', ua: 'відчиняється · зачиняється' } },
    { ro: 'Cum se spune…?', tr: { ru: 'Как сказать…?', ua: 'Як сказати…?' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Aici se vorbește română.',
      tr: { ru: 'Здесь говорят по-румынски.', ua: 'Тут говорять румунською.' },
      note: {
        ru: 'se + глагол в форме «он» — действие без деятеля: «говорят вообще». Как русское «говорится». ≈ «се ворбеште».',
        ua: 'se + дієслово у формі «він» — дія без виконавця: «говорять узагалі». ≈ «се ворбеште».',
      },
    },
    {
      kind: 'intro',
      ro: 'Se caută vânzătoare.',
      tr: { ru: 'Требуется продавщица.', ua: 'Потрібна продавчиня.' },
      note: {
        ru: 'Так пишут в объявлениях о работе: se caută — дословно «ищется».',
        ua: 'Так пишуть в оголошеннях про роботу: se caută — дослівно «шукається».',
      },
    },
    {
      kind: 'intro',
      ro: 'Cum se spune asta în română?',
      tr: { ru: 'Как это сказать по-румынски?', ua: 'Як це сказати румунською?' },
      note: {
        ru: 'Главный вопрос ученика. se spune — «говорится».',
        ua: 'Головне питання учня. se spune — «кажеться».',
      },
    },
    {
      kind: 'tip',
      title: 'Se + глагол',
      body: {
        ru: [
          '**Se** + глагол в форме «он» — действие без деятеля: **se vorbește** (говорят), **se lucrează** (работают), **nu se fumează** (курить нельзя).',
          'Со множественным — форма «они»: **se vând mere** — продаются яблоки.',
        ],
        ua: [
          '**Se** + дієслово у формі «він» — дія без виконавця: **se vorbește** (говорять), **se lucrează** (працюють), **nu se fumează** (палити не можна).',
          'З множиною — форма «вони»: **se vând mere** — продаються яблука.',
        ],
      },
      rows: [
        { ro: 'Se vorbește engleza.', tr: { ru: 'Здесь говорят по-английски.', ua: 'Тут говорять англійською.' } },
        { ro: 'Nu se fumează.', tr: { ru: 'Не курить.', ua: 'Не палити.' } },
        { ro: 'Magazinul se deschide la nouă.', tr: { ru: 'Магазин открывается в девять.', ua: 'Магазин відчиняється о дев’ятій.' } },
        { ro: 'Se închide la opt.', tr: { ru: 'Закрывается в восемь.', ua: 'Зачиняється о восьмій.' } },
        { ro: 'Cum se spune…?', tr: { ru: 'Как сказать…?', ua: 'Як сказати…?' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Здесь говорят по-румынски.', ua: 'Тут говорять румунською.' },
      correct: 'Aici se vorbește română.',
      wrong: ['Aici se vorbesc română.', 'Aici vorbiți română?', 'Aici nu se vorbește română.'],
    },
    {
      kind: 'pickNative',
      q: 'Nu se fumează.',
      correct: { ru: 'Не курить.', ua: 'Не палити.' },
      wrong: [
        { ru: 'Не шуметь.', ua: 'Не шуміти.' },
        { ru: 'Курить можно.', ua: 'Палити можна.' },
        { ru: 'Я не курю.', ua: 'Я не палю.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'se vorbește', tr: { ru: 'говорят', ua: 'говорять' } },
        { ro: 'se caută', tr: { ru: 'требуется', ua: 'потрібен' } },
        { ro: 'nu se fumează', tr: { ru: 'не курить', ua: 'не палити' } },
        { ro: 'se deschide', tr: { ru: 'открывается', ua: 'відчиняється' } },
        { ro: 'se închide', tr: { ru: 'закрывается', ua: 'зачиняється' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Magazinul se închide la opt',
      tr: { ru: 'Магазин закрывается в восемь', ua: 'Магазин зачиняється о восьмій' },
      wrong: ['Magazinul se deschide la opt', 'Magazinul se închide la nouă', 'Farmacia se închide la opt'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Как это сказать по-румынски?', ua: 'Як це сказати румунською?' },
      words: ['Cum', 'se', 'spune', 'asta', 'în', 'română'],
      extra: ['spun', 'ce', 'pe'],
      shown: 'Cum se spune asta în română?',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Требуется повар.', ua: 'Потрібен кухар.' },
      correct: 'Se caută bucătar.',
      wrong: ['Caut un bucătar.', 'Se caută bucătarul.', 'Bucătarul caută.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Банк открывается в девять.', ua: 'Банк відчиняється о дев’ятій.' },
      words: ['Banca', 'se', 'deschide', 'la', 'nouă'],
      extra: ['deschid', 'închide', 'opt'],
      shown: 'Banca se deschide la nouă.',
    },
    {
      kind: 'type',
      q: { ru: 'Не курить.', ua: 'Не палити.' },
      answers: ['Nu se fumează', 'Fumatul interzis', 'Fumatul este interzis'],
      shown: 'Nu se fumează.',
    },
    {
      kind: 'type',
      q: { ru: 'Здесь говорят по-английски.', ua: 'Тут говорять англійською.' },
      answers: ['Aici se vorbește engleza', 'Aici se vorbește engleză', 'Se vorbește engleza aici', 'Aici se vorbește limba engleză'],
      shown: 'Aici se vorbește engleza.',
    },
  ],
};
