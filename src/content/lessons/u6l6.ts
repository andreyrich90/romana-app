import type { Lesson } from '../types';

/** Unit 6 · Lesson 6 — colours, Ce culoare are?, and which colour words change with the noun. */
export const u6l6: Lesson = {
  id: 'u6l6',
  title: { ru: 'Цвета', ua: 'Кольори' },
  words: [
    { ro: 'Ce culoare are?', tr: { ru: 'Какого цвета?', ua: 'Якого кольору?' } },
    { ro: 'alb · negru', tr: { ru: 'белый · чёрный', ua: 'білий · чорний' } },
    { ro: 'roșu · albastru', tr: { ru: 'красный · синий', ua: 'червоний · синій' } },
    { ro: 'verde · galben', tr: { ru: 'зелёный · жёлтый', ua: 'зелений · жовтий' } },
    { ro: 'maro · gri · roz', tr: { ru: 'коричневый · серый · розовый', ua: 'коричневий · сірий · рожевий' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Ce culoare are?',
      tr: { ru: 'Какого цвета?', ua: 'Якого кольору?' },
      note: {
        ru: 'Буквально «какой цвет имеет?». culoare ≈ «кулуаре»: oa — одним слогом.',
        ua: 'Дослівно «який колір має?». culoare ≈ «кулуаре»: oa — одним складом.',
      },
    },
    {
      kind: 'intro',
      ro: 'alb, negru, roșu',
      tr: { ru: 'белый, чёрный, красный', ua: 'білий, чорний, червоний' },
      note: {
        ru: 'Цвет стоит после слова: un telefon negru — «телефон чёрный».',
        ua: 'Колір стоїть після слова: un telefon negru — «телефон чорний».',
      },
    },
    {
      kind: 'intro',
      ro: 'albastru, verde, galben',
      tr: { ru: 'синий, зелёный, жёлтый', ua: 'синій, зелений, жовтий' },
      note: {
        ru: 'albastru — и синий, и голубой. galben ≈ «галбен».',
        ua: 'albastru — і синій, і блакитний. galben ≈ «галбен».',
      },
    },
    {
      kind: 'tip',
      title: 'O mașină roșie',
      body: {
        ru: [
          'Цвет согласуется со словом: с женским родом — **albă, neagră, roșie, albastră, galbenă**.',
          '**maro, gri, roz** не меняются никогда: un pantof maro, o geantă maro.',
        ],
        ua: [
          'Колір узгоджується зі словом: з жіночим родом — **albă, neagră, roșie, albastră, galbenă**.',
          '**maro, gri, roz** не змінюються ніколи: un pantof maro, o geantă maro.',
        ],
      },
      rows: [
        { ro: 'un telefon negru', tr: { ru: 'чёрный телефон', ua: 'чорний телефон' } },
        { ro: 'o mașină neagră', tr: { ru: 'чёрная машина', ua: 'чорна машина' } },
        { ro: 'o casă albă', tr: { ru: 'белый дом', ua: 'білий будинок' } },
        { ro: 'o geantă maro', tr: { ru: 'коричневая сумка', ua: 'коричнева сумка' } },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'alb', tr: { ru: 'белый', ua: 'білий' } },
        { ro: 'negru', tr: { ru: 'чёрный', ua: 'чорний' } },
        { ro: 'roșu', tr: { ru: 'красный', ua: 'червоний' } },
        { ro: 'verde', tr: { ru: 'зелёный', ua: 'зелений' } },
        { ro: 'galben', tr: { ru: 'жёлтый', ua: 'жовтий' } },
      ],
    },
    {
      kind: 'pickNative',
      q: 'albastru',
      correct: { ru: 'синий, голубой', ua: 'синій, блакитний' },
      wrong: [
        { ru: 'белый', ua: 'білий' },
        { ru: 'серый', ua: 'сірий' },
        { ru: 'коричневый', ua: 'коричневий' },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'красная машина', ua: 'червона машина' },
      correct: 'o mașină roșie',
      wrong: ['o mașină roșu', 'o roșie mașină', 'un mașină roșie'],
    },
    {
      kind: 'listen',
      ro: 'Casa este albă.',
      tr: { ru: 'Дом белый.', ua: 'Будинок білий.' },
      wrong: ['Casa este neagră.', 'Casa este mare.', 'Masa este albă.'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'коричневая сумка', ua: 'коричнева сумка' },
      correct: 'o geantă maro',
      wrong: ['o geantă maroă', 'o geantă gri', 'un geantă maro'],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'maro', tr: { ru: 'коричневый', ua: 'коричневий' } },
        { ro: 'gri', tr: { ru: 'серый', ua: 'сірий' } },
        { ro: 'roz', tr: { ru: 'розовый', ua: 'рожевий' } },
        { ro: 'albastru', tr: { ru: 'синий', ua: 'синій' } },
        { ro: 'negru', tr: { ru: 'чёрный', ua: 'чорний' } },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мой телефон чёрный.', ua: 'Мій телефон чорний.' },
      words: ['Telefonul', 'meu', 'este', 'negru'],
      extra: ['neagră', 'mea'],
      shown: 'Telefonul meu este negru.',
    },
    {
      kind: 'type',
      q: { ru: 'Какого цвета?', ua: 'Якого кольору?' },
      answers: ['Ce culoare are?'],
      shown: 'Ce culoare are?',
    },
    {
      kind: 'type',
      q: { ru: 'зелёный', ua: 'зелений' },
      answers: ['verde'],
      shown: 'verde',
    },
  ],
};
