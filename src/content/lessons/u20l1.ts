import type { Lesson } from '../types';

/** B2 · Unit 2 · Lesson 1 — the past conditional: aș fi mers, ar fi fost, am fi venit. */
export const u20l1: Lesson = {
  id: 'u20l1',
  title: { ru: 'Я бы пошёл (тогда)', ua: 'Я б пішов (тоді)' },
  words: [
    { ro: 'aș fi mers', tr: { ru: 'я бы пошёл (тогда)', ua: 'я б пішов (тоді)' } },
    { ro: 'ar fi fost', tr: { ru: 'было бы (тогда)', ua: 'було б (тоді)' } },
    { ro: 'am fi venit', tr: { ru: 'мы бы пришли', ua: 'ми б прийшли' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Aș fi mers cu voi, dar am lucrat.',
      tr: { ru: 'Я бы пошёл с вами, но работал.', ua: 'Я б пішов з вами, але працював.' },
      note: {
        ru: 'aș fi + форма на -at, -it, -ut — «бы» о прошлом, которое не случилось. ≈ «аш фи мерс».',
        ua: 'aș fi + форма на -at, -it, -ut — «б» про минуле, яке не сталося. ≈ «аш фі мерс».',
      },
    },
    {
      kind: 'intro',
      ro: 'Ar fi fost frumos.',
      tr: { ru: 'Было бы здорово.', ua: 'Було б чудово.' },
      note: {
        ru: 'ar fi fost — «было бы» о том, что уже не случится. Сравните: ar fi frumos — «было бы здорово» (ещё возможно).',
        ua: 'ar fi fost — «було б» про те, що вже не станеться. Порівняйте: ar fi frumos — «було б чудово» (ще можливо).',
      },
    },
    {
      kind: 'intro',
      ro: 'Am fi venit, dar a plouat.',
      tr: { ru: 'Мы бы пришли, но пошёл дождь.', ua: 'Ми б прийшли, але пішов дощ.' },
      note: {
        ru: 'a plouat — «пошёл дождь» (о прошлом событии).',
        ua: 'a plouat — «пішов дощ» (про подію в минулому).',
      },
    },
    {
      kind: 'tip',
      title: 'Aș fi mers',
      body: {
        ru: [
          'Прошедшее «бы»: **aș, ai, ar, am, ați, ar** + **fi** + форма на -at, -it, -ut: **aș fi mers**, **ar fi fost**, **am fi venit**.',
          'По-русски это то же «пошёл бы» — из контекста ясно, что уже поздно. В румынском это показывает **fi**.',
        ],
        ua: [
          'Минуле «б»: **aș, ai, ar, am, ați, ar** + **fi** + форма на -at, -it, -ut: **aș fi mers**, **ar fi fost**, **am fi venit**.',
          'Українською це те саме «пішов би» — з контексту ясно, що вже пізно. У румунській це показує **fi**.',
        ],
      },
      rows: [
        { ro: 'eu aș fi mers', tr: { ru: 'я бы пошёл', ua: 'я б пішов' } },
        { ro: 'tu ai fi mers', tr: { ru: 'ты бы пошёл', ua: 'ти б пішов' } },
        { ro: 'el ar fi mers', tr: { ru: 'он бы пошёл', ua: 'він би пішов' } },
        { ro: 'noi am fi mers', tr: { ru: 'мы бы пошли', ua: 'ми б пішли' } },
        { ro: 'voi ați fi mers', tr: { ru: 'вы бы пошли', ua: 'ви б пішли' } },
        { ro: 'ei ar fi mers', tr: { ru: 'они бы пошли', ua: 'вони б пішли' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я бы пошёл с вами, но работал.', ua: 'Я б пішов з вами, але працював.' },
      correct: 'Aș fi mers cu voi, dar am lucrat.',
      wrong: ['Aș merge cu voi, dar lucrez.', 'Am mers cu voi, dar am lucrat.', 'Ar fi mers cu voi, dar a lucrat.'],
    },
    {
      kind: 'pickNative',
      q: 'Ar fi fost mai bine.',
      correct: { ru: 'Так было бы лучше.', ua: 'Так було б краще.' },
      wrong: [
        { ru: 'Так будет лучше.', ua: 'Так буде краще.' },
        { ru: 'Так было лучше.', ua: 'Так було краще.' },
        { ru: 'Так лучше.', ua: 'Так краще.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'aș fi mers', tr: { ru: 'я бы пошёл', ua: 'я б пішов' } },
        { ro: 'ar fi fost', tr: { ru: 'было бы', ua: 'було б' } },
        { ro: 'am fi venit', tr: { ru: 'мы бы пришли', ua: 'ми б прийшли' } },
        { ro: 'ai fi știut', tr: { ru: 'ты бы знал', ua: 'ти б знав' } },
        { ro: 'ați fi putut', tr: { ru: 'вы бы могли', ua: 'ви б могли' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Ar fi fost frumos',
      tr: { ru: 'Было бы здорово', ua: 'Було б чудово' },
      wrong: ['Ar fi frumos', 'A fost frumos', 'Va fi frumos'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мы бы пришли, но пошёл дождь.', ua: 'Ми б прийшли, але пішов дощ.' },
      words: ['Am', 'fi', 'venit', 'dar', 'a', 'plouat'],
      extra: ['aș', 'vine', 'ploua'],
      shown: 'Am fi venit, dar a plouat.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Вы бы купили этот дом (тогда)?', ua: 'Ви б купили той будинок (тоді)?' },
      correct: 'Ați fi cumpărat casa?',
      wrong: ['Ați cumpăra casa?', 'Ați cumpărat casa?', 'Ai fi cumpărat casa?'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Было бы здорово.', ua: 'Було б чудово.' },
      words: ['Ar', 'fi', 'fost', 'frumos'],
      extra: ['a', 'aș', 'e'],
      shown: 'Ar fi fost frumos.',
    },
    {
      kind: 'type',
      q: { ru: 'Я бы пошёл (пошла) — тогда.', ua: 'Я б пішов (пішла) — тоді.' },
      answers: ['Aș fi mers', 'Aș fi plecat', 'Eu aș fi mers'],
      shown: 'Aș fi mers.',
    },
    {
      kind: 'type',
      q: { ru: 'Так было бы лучше.', ua: 'Так було б краще.' },
      answers: ['Ar fi fost mai bine', 'Așa ar fi fost mai bine'],
      shown: 'Ar fi fost mai bine.',
    },
  ],
};
