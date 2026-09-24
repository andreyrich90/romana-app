import type { Lesson } from '../types';

/** B2 · Unit 5 · Lesson 1 — feelings with the dative: mi-e dor de, mi-e frică de, mi-e rușine, mi-e somn; ți-e, îi e, ne e. */
export const u23l1: Lesson = {
  id: 'u23l1',
  title: { ru: 'Мне страшно, я скучаю', ua: 'Мені страшно, я сумую' },
  words: [
    { ro: 'mi-e dor de', tr: { ru: 'я скучаю по', ua: 'я сумую за' } },
    { ro: 'mi-e frică de', tr: { ru: 'я боюсь', ua: 'я боюся' } },
    { ro: 'mi-e rușine', tr: { ru: 'мне стыдно', ua: 'мені соромно' } },
    { ro: 'mi-e somn', tr: { ru: 'я хочу спать', ua: 'я хочу спати' } },
    { ro: 'ți-e foame?', tr: { ru: 'ты голоден?', ua: 'ти голодний?' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Mi-e dor de casă.',
      tr: { ru: 'Я скучаю по дому.', ua: 'Я сумую за домом.' },
      note: {
        ru: 'Дословно «мне есть тоска по дому»: mi-e = mie + e. dor — тоска, одно из самых румынских слов.',
        ua: 'Дослівно «мені є туга за домом»: mi-e = mie + e. dor — туга, одне з найрумунськіших слів.',
      },
    },
    {
      kind: 'intro',
      ro: 'Mi-e frică de câini.',
      tr: { ru: 'Я боюсь собак.', ua: 'Я боюся собак.' },
      note: {
        ru: 'frică — страх: «мне страх от собак». Чего — de.',
        ua: 'frică — страх: «мені страх від собак». Чого — de.',
      },
    },
    {
      kind: 'intro',
      ro: 'Mi-e rușine.',
      tr: { ru: 'Мне стыдно.', ua: 'Мені соромно.' },
      note: {
        ru: 'rușine ≈ «рушине» — стыд. Так же: mi-e somn — хочу спать, mi-e foame — хочу есть.',
        ua: 'rușine ≈ «рушіне» — сором. Так само: mi-e somn — хочу спати, mi-e foame — хочу їсти.',
      },
    },
    {
      kind: 'tip',
      title: 'Mi-e dor',
      body: {
        ru: [
          'Чувства часто строятся как в русском «мне холодно»: **mi-e** + существительное. **mi-e dor de** (скучаю по), **mi-e frică de** (боюсь), **mi-e rușine** (стыдно), **mi-e somn** (хочу спать), **mi-e foame / sete** (хочу есть / пить).',
          'Кому: **mi-e** (мне), **ți-e** (тебе), **îi e** (ему, ей), **ne e** (нам), **vă e** (вам), **le e** (им).',
        ],
        ua: [
          'Почуття часто будуються як в українському «мені холодно»: **mi-e** + іменник. **mi-e dor de** (сумую за), **mi-e frică de** (боюся), **mi-e rușine** (соромно), **mi-e somn** (хочу спати), **mi-e foame / sete** (хочу їсти / пити).',
          'Кому: **mi-e** (мені), **ți-e** (тобі), **îi e** (йому, їй), **ne e** (нам), **vă e** (вам), **le e** (їм).',
        ],
      },
      rows: [
        { ro: 'ți-e dor de mine?', tr: { ru: 'ты скучаешь по мне?', ua: 'ти сумуєш за мною?' } },
        { ro: 'îi e frică', tr: { ru: 'ему страшно', ua: 'йому страшно' } },
        { ro: 'ne e somn', tr: { ru: 'мы хотим спать', ua: 'ми хочемо спати' } },
        { ro: 'le e sete', tr: { ru: 'им хочется пить', ua: 'їм хочеться пити' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я скучаю по дому.', ua: 'Я сумую за домом.' },
      correct: 'Mi-e dor de casă.',
      wrong: ['Mi-e dor la casă.', 'Ți-e dor de casă.', 'Sunt dor de casă.'],
    },
    {
      kind: 'pickNative',
      q: 'Îi e frică de întuneric.',
      correct: { ru: 'Он боится темноты.', ua: 'Він боїться темряви.' },
      wrong: [
        { ru: 'Я боюсь темноты.', ua: 'Я боюся темряви.' },
        { ru: 'Он не боится темноты.', ua: 'Він не боїться темряви.' },
        { ru: 'Ему скучно в темноте.', ua: 'Йому нудно в темряві.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'dor', tr: { ru: 'тоска', ua: 'туга' } },
        { ro: 'frică', tr: { ru: 'страх', ua: 'страх' } },
        { ro: 'rușine', tr: { ru: 'стыд', ua: 'сором' } },
        { ro: 'somn', tr: { ru: 'сон', ua: 'сон' } },
        { ro: 'sete', tr: { ru: 'жажда', ua: 'спрага' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Ți-e dor de mine?',
      tr: { ru: 'Ты скучаешь по мне?', ua: 'Ти сумуєш за мною?' },
      wrong: ['Mi-e dor de tine.', 'Ți-e frică de mine?', 'Ți-e somn?'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я боюсь собак.', ua: 'Я боюся собак.' },
      words: ['Mi-e', 'frică', 'de', 'câini'],
      extra: ['ți-e', 'dor', 'la'],
      shown: 'Mi-e frică de câini.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мы хотим спать.', ua: 'Ми хочемо спати.' },
      correct: 'Ne e somn.',
      wrong: ['Ne e foame.', 'Mi-e somn.', 'Dormim.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Ей стыдно.', ua: 'Їй соромно.' },
      words: ['Îi', 'e', 'rușine'],
      extra: ['mi-e', 'frică', 'este'],
      shown: 'Îi e rușine.',
    },
    {
      kind: 'type',
      q: { ru: 'Мне стыдно.', ua: 'Мені соромно.' },
      answers: ['Mi-e rușine', 'Mie mi-e rușine'],
      shown: 'Mi-e rușine.',
    },
    {
      kind: 'type',
      q: { ru: 'Я скучаю по тебе.', ua: 'Я сумую за тобою.' },
      answers: ['Mi-e dor de tine', 'Mie mi-e dor de tine'],
      shown: 'Mi-e dor de tine.',
    },
  ],
};
