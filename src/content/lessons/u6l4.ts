import type { Lesson } from '../types';

/** Unit 6 · Lesson 4 — likes: îmi place / îmi plac, îți place?, nu-mi place, mult. */
export const u6l4: Lesson = {
  id: 'u6l4',
  title: { ru: 'Мне нравится', ua: 'Мені подобається' },
  words: [
    { ro: 'Îmi place…', tr: { ru: 'Мне нравится…', ua: 'Мені подобається…' } },
    { ro: 'Îmi plac…', tr: { ru: 'Мне нравятся…', ua: 'Мені подобаються…' } },
    { ro: 'Îți place?', tr: { ru: 'Тебе нравится?', ua: 'Тобі подобається?' } },
    { ro: 'Nu-mi place.', tr: { ru: 'Мне не нравится.', ua: 'Мені не подобається.' } },
    { ro: 'mult', tr: { ru: 'очень, много', ua: 'дуже, багато' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Îmi place.',
      tr: { ru: 'Мне нравится.', ua: 'Мені подобається.' },
      note: {
        ru: 'Устроено как в русском: «мне нравится». ≈ «ымь плаче».',
        ua: 'Влаштовано як в українській: «мені подобається». ≈ «имь плаче».',
      },
    },
    {
      kind: 'intro',
      ro: 'Îți place?',
      tr: { ru: 'Тебе нравится?', ua: 'Тобі подобається?' },
      note: {
        ru: 'îți ≈ «ыць». Ответ: Da, îmi place mult! — Да, очень нравится! mult — «очень, много».',
        ua: 'îți ≈ «иць». Відповідь: Da, îmi place mult! — Так, дуже подобається! mult — «дуже, багато».',
      },
    },
    {
      kind: 'intro',
      ro: 'Nu-mi place.',
      tr: { ru: 'Мне не нравится.', ua: 'Мені не подобається.' },
      note: {
        ru: 'nu + îmi сливаются в nu-mi ≈ «нумь».',
        ua: 'nu + îmi зливаються в nu-mi ≈ «нумь».',
      },
    },
    {
      kind: 'tip',
      title: 'Îmi place, îmi plac',
      body: {
        ru: [
          'Как в русском: одна вещь — **place** (нравится), несколько — **plac** (нравятся).',
          'То, что нравится, обычно с артиклем: îmi place **cafeaua**, îmi plac **merele**.',
        ],
        ua: [
          'Як в українській: одна річ — **place** (подобається), кілька — **plac** (подобаються).',
          'Те, що подобається, зазвичай з артиклем: îmi place **cafeaua**, îmi plac **merele**.',
        ],
      },
      rows: [
        { ro: 'Îmi place casa ta.', tr: { ru: 'Мне нравится твой дом. · «ымь плаче каса та»', ua: 'Мені подобається твій будинок. · «имь плаче каса та»' } },
        { ro: 'Îmi plac merele.', tr: { ru: 'Мне нравятся яблоки. · «ымь плак мереле»', ua: 'Мені подобаються яблука. · «имь плак мереле»' } },
        { ro: 'Îți place cafeaua?', tr: { ru: 'Тебе нравится кофе? · «ыць плаче кафяуа»', ua: 'Тобі подобається кава? · «иць плаче кафяуа»' } },
        { ro: 'Nu-mi place ceaiul.', tr: { ru: 'Мне не нравится чай. · «нумь плаче чаюл»', ua: 'Мені не подобається чай. · «нумь плаче чаюл»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мне нравятся яблоки.', ua: 'Мені подобаються яблука.' },
      correct: 'Îmi plac merele.',
      wrong: ['Îmi place merele.', 'Îți plac merele.', 'Îmi plac mere.'],
    },
    {
      kind: 'pickNative',
      q: 'Îți place apartamentul?',
      correct: { ru: 'Тебе нравится квартира?', ua: 'Тобі подобається квартира?' },
      wrong: [
        { ru: 'Мне нравится квартира.', ua: 'Мені подобається квартира.' },
        { ru: 'Тебе нравится дом?', ua: 'Тобі подобається будинок?' },
        { ru: 'Где квартира?', ua: 'Де квартира?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'îmi place', tr: { ru: 'мне нравится', ua: 'мені подобається' } },
        { ro: 'îți place', tr: { ru: 'тебе нравится', ua: 'тобі подобається' } },
        { ro: 'nu-mi place', tr: { ru: 'мне не нравится', ua: 'мені не подобається' } },
        { ro: 'mult', tr: { ru: 'очень', ua: 'дуже' } },
        { ro: 'casa ta', tr: { ru: 'твой дом', ua: 'твій будинок' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Îmi place mult',
      tr: { ru: 'Мне очень нравится', ua: 'Мені дуже подобається' },
      wrong: ['Nu-mi place mult', 'Îți place mult', 'Îmi plac mult'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мне нравится твоя квартира.', ua: 'Мені подобається твоя квартира.' },
      words: ['Îmi', 'place', 'apartamentul', 'tău'],
      extra: ['plac', 'ta', 'îți'],
      shown: 'Îmi place apartamentul tău.',
    },
    {
      kind: 'tiles',
      q: { ru: 'Мне не нравится кофе.', ua: 'Мені не подобається кава.' },
      words: ['Nu-mi', 'place', 'cafeaua'],
      extra: ['plac', 'cafea', 'îmi'],
      shown: 'Nu-mi place cafeaua.',
    },
    {
      kind: 'type',
      q: { ru: 'Тебе нравится чай?', ua: 'Тобі подобається чай?' },
      answers: ['Îți place ceaiul'],
      shown: 'Îți place ceaiul?',
    },
    {
      kind: 'type',
      q: { ru: 'Мне нравится твой дом.', ua: 'Мені подобається твій будинок.' },
      answers: ['Îmi place casa ta'],
      shown: 'Îmi place casa ta.',
    },
  ],
};
