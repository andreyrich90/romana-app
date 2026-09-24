import type { Lesson } from '../types';

/** B1 · Unit 2 · Lesson 5 — review of the conditional: aș / ar, dacă, ar trebui să, mi-ar plăcea să. No new grammar. */
export const u14l5: Lesson = {
  id: 'u14l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Dacă aș avea timp, aș veni.', tr: { ru: 'Если бы у меня было время, я бы пришёл.', ua: 'Якби в мене був час, я б прийшов.' } },
    { ro: 'Ar trebui să înveți.', tr: { ru: 'Тебе стоило бы учиться.', ua: 'Тобі варто вчитися.' } },
    { ro: 'Mi-ar plăcea să călătoresc.', tr: { ru: 'Мне хотелось бы путешествовать.', ua: 'Мені хотілося б подорожувати.' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Condiționalul',
      body: {
        ru: [
          '**Aș, ai, ar, am, ați, ar** + глагол: aș merge, ar fi. Условие: **dacă aș avea…, aș…**',
          'Совет — **ar trebui să**, мечта — **mi-ar plăcea să**, вежливая просьба — **ați putea…?**',
        ],
        ua: [
          '**Aș, ai, ar, am, ați, ar** + дієслово: aș merge, ar fi. Умова: **dacă aș avea…, aș…**',
          'Порада — **ar trebui să**, мрія — **mi-ar plăcea să**, ввічливе прохання — **ați putea…?**',
        ],
      },
      rows: [
        { ro: 'aș merge', tr: { ru: 'я бы пошёл', ua: 'я б пішов' } },
        { ro: 'ar fi bine', tr: { ru: 'было бы хорошо', ua: 'було б добре' } },
        { ro: 'ar trebui să', tr: { ru: 'надо бы', ua: 'варто' } },
        { ro: 'mi-ar plăcea', tr: { ru: 'мне хотелось бы', ua: 'мені хотілося б' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Если бы у меня было время, я бы пришёл.', ua: 'Якби в мене був час, я б прийшов.' },
      correct: 'Dacă aș avea timp, aș veni.',
      wrong: ['Dacă am timp, vin.', 'Dacă aș avea timp, am venit.', 'Dacă ai avea timp, ai veni.'],
    },
    {
      kind: 'pickNative',
      q: 'Ați putea să-mi spuneți unde e gara?',
      correct: { ru: 'Не могли бы вы сказать мне, где вокзал?', ua: 'Чи не могли б ви сказати мені, де вокзал?' },
      wrong: [
        { ru: 'Вы сказали мне, где вокзал?', ua: 'Ви сказали мені, де вокзал?' },
        { ru: 'Где вокзал?', ua: 'Де вокзал?' },
        { ru: 'Не могли бы вы проводить меня на вокзал?', ua: 'Чи не могли б ви провести мене на вокзал?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'aș', tr: { ru: 'я бы', ua: 'я б' } },
        { ro: 'ar fi', tr: { ru: 'было бы', ua: 'було б' } },
        { ro: 'dacă', tr: { ru: 'если', ua: 'якщо' } },
        { ro: 'ar trebui să', tr: { ru: 'надо бы', ua: 'варто' } },
        { ro: 'mi-ar plăcea', tr: { ru: 'мне хотелось бы', ua: 'мені хотілося б' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Ar fi mai bine să rămânem',
      tr: { ru: 'Лучше бы нам остаться', ua: 'Краще б нам залишитися' },
      wrong: ['Ar fi mai bine să plecăm', 'E mai bine să rămânem', 'Ar fi bine să rămâneți'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я бы хотел выпить кофе.', ua: 'Я б хотів випити кави.' },
      words: ['Aș', 'vrea', 'să', 'beau', 'o', 'cafea'],
      extra: ['vreau', 'bea', 'un'],
      shown: 'Aș vrea să beau o cafea.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Тебе надо бы учить румынский.', ua: 'Тобі варто вчити румунську.' },
      correct: 'Ar trebui să înveți română.',
      wrong: ['Trebuie să învăț română.', 'Ar trebui să învețe română.', 'Ai învățat română.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Если бы было тепло, мы бы поехали на море.', ua: 'Якби було тепло, ми б поїхали на море.' },
      words: ['Dacă', 'ar', 'fi', 'cald', 'am', 'merge', 'la', 'mare'],
      extra: ['e', 'mergem', 'frig'],
      shown: 'Dacă ar fi cald, am merge la mare.',
    },
    {
      kind: 'type',
      q: { ru: 'Было бы здорово!', ua: 'Було б чудово!' },
      answers: ['Ar fi frumos', 'Ar fi grozav', 'Ar fi super'],
      shown: 'Ar fi frumos!',
    },
    {
      kind: 'type',
      q: { ru: 'Мне хотелось бы жить здесь.', ua: 'Мені хотілося б жити тут.' },
      answers: ['Mi-ar plăcea să locuiesc aici', 'Aș vrea să locuiesc aici'],
      shown: 'Mi-ar plăcea să locuiesc aici.',
    },
    {
      kind: 'type',
      q: { ru: 'Если бы у меня были деньги…', ua: 'Якби в мене були гроші…' },
      answers: ['Dacă aș avea bani'],
      shown: 'Dacă aș avea bani…',
    },
  ],
};
