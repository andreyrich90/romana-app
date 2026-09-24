import type { Lesson } from '../types';

/** A2 · Unit 3 · Lesson 2 — trebuie să (must, need to), nu trebuie să; acum, e târziu. */
export const u9l2: Lesson = {
  id: 'u9l2',
  title: { ru: 'Надо', ua: 'Треба' },
  words: [
    { ro: 'trebuie să', tr: { ru: 'надо, нужно', ua: 'треба, потрібно' } },
    { ro: 'Trebuie să plec.', tr: { ru: 'Мне пора. Мне надо идти.', ua: 'Мені час. Мені треба йти.' } },
    { ro: 'nu trebuie să', tr: { ru: 'не нужно, не обязательно', ua: 'не потрібно, не обов’язково' } },
    { ro: 'acum', tr: { ru: 'сейчас', ua: 'зараз' } },
    { ro: 'E târziu.', tr: { ru: 'Поздно.', ua: 'Пізно.' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Trebuie să plec.',
      tr: { ru: 'Мне пора. Мне надо идти.', ua: 'Мені час. Мені треба йти.' },
      note: {
        ru: 'trebuie ≈ «требуе» — «надо». Само слово не меняется, кому надо — видно по второму глаголу.',
        ua: 'trebuie ≈ «требує» — «треба». Саме слово не змінюється, кому треба — видно з другого дієслова.',
      },
    },
    {
      kind: 'intro',
      ro: 'E târziu, trebuie să plecăm acum.',
      tr: { ru: 'Поздно, нам надо уходить сейчас.', ua: 'Пізно, нам треба йти зараз.' },
      note: {
        ru: 'târziu ≈ «тырзиу» — поздно. acum ≈ «акум» — сейчас.',
        ua: 'târziu ≈ «тирзіу» — пізно. acum ≈ «акум» — зараз.',
      },
    },
    {
      kind: 'intro',
      ro: 'Nu trebuie să lucrezi mâine.',
      tr: { ru: 'Тебе не нужно работать завтра.', ua: 'Тобі не треба працювати завтра.' },
      note: {
        ru: 'nu trebuie să — «не нужно», а не «нельзя». lucrezi — «ты работаешь», значит, речь о тебе.',
        ua: 'nu trebuie să — «не потрібно», а не «не можна». lucrezi — «ти працюєш», отже, мова про тебе.',
      },
    },
    {
      kind: 'tip',
      title: 'Trebuie să…',
      body: {
        ru: [
          '**Trebuie** одно на всех. Кому надо, показывает второй глагол: **trebuie să plec** — мне, **trebuie să pleci** — тебе, **trebuie să plece** — ему, ей или им.',
          'Форма для «он, она, они» — та же, что после o să и vreau să: **plece, meargă, fie**.',
        ],
        ua: [
          '**Trebuie** одне на всіх. Кому треба, показує друге дієслово: **trebuie să plec** — мені, **trebuie să pleci** — тобі, **trebuie să plece** — йому, їй або їм.',
          'Форма для «він, вона, вони» — та сама, що після o să та vreau să: **plece, meargă, fie**.',
        ],
      },
      rows: [
        { ro: 'Trebuie să plec.', tr: { ru: 'Мне пора. · «требуе сэ плек»', ua: 'Мені час. · «требує се плек»' } },
        { ro: 'Trebuie să pleci.', tr: { ru: 'Тебе пора. · «требуе сэ плечь»', ua: 'Тобі час. · «требує се плечь»' } },
        { ro: 'Trebuie să plece.', tr: { ru: 'Ему (ей, им) пора. · «требуе сэ плече»', ua: 'Йому (їй, їм) час. · «требує се плече»' } },
        { ro: 'Trebuie să plecăm.', tr: { ru: 'Нам пора. · «требуе сэ плекэм»', ua: 'Нам час. · «требує се плекем»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мне надо работать.', ua: 'Мені треба працювати.' },
      correct: 'Trebuie să lucrez.',
      wrong: ['Trebuie să lucrezi.', 'Vreau să lucrez.', 'Am lucrat.'],
    },
    {
      kind: 'pickNative',
      q: 'Trebuie să învețe.',
      correct: { ru: 'Ему надо учиться.', ua: 'Йому треба вчитися.' },
      wrong: [
        { ru: 'Мне надо учиться.', ua: 'Мені треба вчитися.' },
        { ru: 'Он хочет учиться.', ua: 'Він хоче вчитися.' },
        { ru: 'Нам надо учиться.', ua: 'Нам треба вчитися.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'trebuie să', tr: { ru: 'надо', ua: 'треба' } },
        { ro: 'nu trebuie să', tr: { ru: 'не нужно', ua: 'не потрібно' } },
        { ro: 'e târziu', tr: { ru: 'поздно', ua: 'пізно' } },
        { ro: 'acum', tr: { ru: 'сейчас', ua: 'зараз' } },
        { ro: 'vreau să', tr: { ru: 'хочу', ua: 'хочу' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Trebuie să plecăm acum',
      tr: { ru: 'Нам надо уходить сейчас', ua: 'Нам треба йти зараз' },
      wrong: ['Trebuie să pleci acum', 'Vrem să plecăm acum', 'Trebuie să plecăm mâine'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Уже поздно, мне пора.', ua: 'Уже пізно, мені час.' },
      words: ['E', 'târziu', 'trebuie', 'să', 'plec'],
      extra: ['pleci', 'acum', 'vreau'],
      shown: 'E târziu, trebuie să plec.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Тебе не нужно работать завтра.', ua: 'Тобі не треба працювати завтра.' },
      correct: 'Nu trebuie să lucrezi mâine.',
      wrong: ['Nu trebuie să lucrez mâine.', 'Trebuie să lucrezi mâine.', 'Nu vrei să lucrezi mâine.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Нам надо купить хлеб.', ua: 'Нам треба купити хліб.' },
      words: ['Trebuie', 'să', 'cumpărăm', 'pâine'],
      extra: ['cumpăr', 'lapte', 'am'],
      shown: 'Trebuie să cumpărăm pâine.',
    },
    {
      kind: 'type',
      q: { ru: 'Мне пора.', ua: 'Мені час.' },
      answers: ['Trebuie să plec', 'Trebuie să plec acum', 'Eu trebuie să plec'],
      shown: 'Trebuie să plec.',
    },
    {
      kind: 'type',
      q: { ru: 'Тебе надо учить румынский.', ua: 'Тобі треба вчити румунську.' },
      answers: ['Trebuie să înveți română', 'Trebuie să înveți limba română', 'Tu trebuie să înveți română'],
      shown: 'Trebuie să înveți română.',
    },
  ],
};
