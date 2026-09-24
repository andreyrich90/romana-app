import type { Lesson } from '../types';

/** B1 · Unit 2 · Lesson 4 — wishes: mi-ar plăcea să, aș vrea să, visul meu, într-o zi, românește. */
export const u14l4: Lesson = {
  id: 'u14l4',
  title: { ru: 'Мечты', ua: 'Мрії' },
  words: [
    { ro: 'mi-ar plăcea să', tr: { ru: 'мне хотелось бы', ua: 'мені хотілося б' } },
    { ro: 'visul meu', tr: { ru: 'моя мечта', ua: 'моя мрія' } },
    { ro: 'să călătoresc', tr: { ru: 'путешествовать', ua: 'подорожувати' } },
    { ro: 'într-o zi', tr: { ru: 'однажды, когда-нибудь', ua: 'одного дня, колись' } },
    { ro: 'românește', tr: { ru: 'по-румынски', ua: 'румунською' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Mi-ar plăcea să călătoresc.',
      tr: { ru: 'Мне хотелось бы путешествовать.', ua: 'Мені хотілося б подорожувати.' },
      note: {
        ru: 'îmi place → mi-ar plăcea: «мне нравится» → «мне понравилось бы». călătoresc ≈ «кэлэтореск».',
        ua: 'îmi place → mi-ar plăcea: «мені подобається» → «мені сподобалося б». călătoresc ≈ «келетореск».',
      },
    },
    {
      kind: 'intro',
      ro: 'Visul meu e să locuiesc la mare.',
      tr: { ru: 'Моя мечта — жить у моря.', ua: 'Моя мрія — жити біля моря.' },
      note: {
        ru: 'vis ≈ «вис» — и мечта, и сон. visul meu — «моя мечта».',
        ua: 'vis ≈ «віс» — і мрія, і сон. visul meu — «моя мрія».',
      },
    },
    {
      kind: 'intro',
      ro: 'Într-o zi o să vorbesc bine românește.',
      tr: { ru: 'Однажды я буду хорошо говорить по-румынски.', ua: 'Одного дня я добре говоритиму румунською.' },
      note: {
        ru: 'într-o zi — «однажды, когда-нибудь». românește ≈ «ромынеште» — по-румынски.',
        ua: 'într-o zi — «одного дня, колись». românește ≈ «роминеште» — румунською.',
      },
    },
    {
      kind: 'tip',
      title: 'Mi-ar plăcea',
      body: {
        ru: [
          '**Îmi place** → **mi-ar plăcea** — мне хотелось бы. **Aș vrea să…** — я бы хотел…',
          'Кому: **mi-ar** (мне), **ți-ar** (тебе), **i-ar** (ему, ей), **ne-ar** (нам), **v-ar** (вам).',
        ],
        ua: [
          '**Îmi place** → **mi-ar plăcea** — мені хотілося б. **Aș vrea să…** — я б хотів…',
          'Кому: **mi-ar** (мені), **ți-ar** (тобі), **i-ar** (йому, їй), **ne-ar** (нам), **v-ar** (вам).',
        ],
      },
      rows: [
        { ro: 'Mi-ar plăcea să învăț.', tr: { ru: 'Мне хотелось бы учиться.', ua: 'Мені хотілося б учитися.' } },
        { ro: 'Ți-ar plăcea?', tr: { ru: 'Тебе бы понравилось?', ua: 'Тобі б сподобалося?' } },
        { ro: 'Aș vrea să locuiesc aici.', tr: { ru: 'Я бы хотел жить здесь.', ua: 'Я б хотів жити тут.' } },
        { ro: 'visul meu', tr: { ru: 'моя мечта', ua: 'моя мрія' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мне хотелось бы путешествовать.', ua: 'Мені хотілося б подорожувати.' },
      correct: 'Mi-ar plăcea să călătoresc.',
      wrong: ['Îmi place să călătoresc.', 'Ți-ar plăcea să călătorești.', 'Mi-a plăcut să călătoresc.'],
    },
    {
      kind: 'pickNative',
      q: 'Ți-ar plăcea să vii cu noi?',
      correct: { ru: 'Ты хотел бы пойти с нами?', ua: 'Ти хотів би піти з нами?' },
      wrong: [
        { ru: 'Тебе понравилось с нами?', ua: 'Тобі сподобалося з нами?' },
        { ru: 'Ты идёшь с нами?', ua: 'Ти йдеш з нами?' },
        { ru: 'Мы хотели бы пойти с тобой.', ua: 'Ми хотіли б піти з тобою.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'mi-ar plăcea', tr: { ru: 'мне хотелось бы', ua: 'мені хотілося б' } },
        { ro: 'ți-ar plăcea', tr: { ru: 'тебе хотелось бы', ua: 'тобі хотілося б' } },
        { ro: 'visul', tr: { ru: 'мечта', ua: 'мрія' } },
        { ro: 'într-o zi', tr: { ru: 'однажды', ua: 'одного дня' } },
        { ro: 'românește', tr: { ru: 'по-румынски', ua: 'румунською' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Visul meu e să călătoresc',
      tr: { ru: 'Моя мечта — путешествовать', ua: 'Моя мрія — подорожувати' },
      wrong: ['Visul tău e să călătorești', 'Visul meu e să locuiesc aici', 'Îmi place să călătoresc'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я бы хотел жить в Румынии.', ua: 'Я б хотів жити в Румунії.' },
      words: ['Aș', 'vrea', 'să', 'locuiesc', 'în', 'România'],
      extra: ['vreau', 'locuiam', 'la'],
      shown: 'Aș vrea să locuiesc în România.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Однажды я буду хорошо говорить по-румынски.', ua: 'Одного дня я добре говоритиму румунською.' },
      correct: 'Într-o zi o să vorbesc bine românește.',
      wrong: ['Ieri am vorbit bine românește.', 'Într-o zi vorbeam bine românește.', 'Într-o zi o să vorbești bine românește.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Нам хотелось бы жить у моря.', ua: 'Нам хотілося б жити біля моря.' },
      words: ['Ne-ar', 'plăcea', 'să', 'locuim', 'la', 'mare'],
      extra: ['mi-ar', 'locuiesc', 'munte'],
      shown: 'Ne-ar plăcea să locuim la mare.',
    },
    {
      kind: 'type',
      q: { ru: 'Мне хотелось бы путешествовать.', ua: 'Мені хотілося б подорожувати.' },
      answers: ['Mi-ar plăcea să călătoresc', 'Aș vrea să călătoresc'],
      shown: 'Mi-ar plăcea să călătoresc.',
    },
    {
      kind: 'type',
      q: { ru: 'Моя мечта — жить у моря.', ua: 'Моя мрія — жити біля моря.' },
      answers: ['Visul meu e să locuiesc la mare', 'Visul meu este să locuiesc la mare'],
      shown: 'Visul meu e să locuiesc la mare.',
    },
  ],
};
