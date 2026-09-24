import type { Lesson } from '../types';

/** A2 · Unit 3 · Lesson 5 — review of să + verb: vreau să, trebuie să, pot să, hai să. No new words. */
export const u9l5: Lesson = {
  id: 'u9l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Vreau să învăț română.', tr: { ru: 'Я хочу учить румынский.', ua: 'Я хочу вчити румунську.' } },
    { ro: 'Trebuie să plec.', tr: { ru: 'Мне пора.', ua: 'Мені час.' } },
    { ro: 'Puteți să repetați?', tr: { ru: 'Можете повторить?', ua: 'Можете повторити?' } },
    { ro: 'Hai să mergem!', tr: { ru: 'Пойдём!', ua: 'Ходімо!' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Să + verb',
      body: {
        ru: [
          'Четыре начала, одна конструкция: **vreau să** (хочу), **trebuie să** (надо), **pot să** (могу), **hai să** (давай) + глагол в нужном лице.',
          'Для «он, она, они» — особая форма: **meargă, plece, vină, fie**. Та же, что после **o să**.',
        ],
        ua: [
          'Чотири початки, одна конструкція: **vreau să** (хочу), **trebuie să** (треба), **pot să** (можу), **hai să** (давай) + дієслово в потрібній особі.',
          'Для «він, вона, вони» — особлива форма: **meargă, plece, vină, fie**. Та сама, що після **o să**.',
        ],
      },
      rows: [
        { ro: 'Vreau să vin.', tr: { ru: 'Я хочу прийти. · «вряу сэ вин»', ua: 'Я хочу прийти. · «вряу се він»' } },
        { ro: 'Trebuie să vii.', tr: { ru: 'Тебе надо прийти. · «требуе сэ вий»', ua: 'Тобі треба прийти. · «требує се вій»' } },
        { ro: 'Poate să vină.', tr: { ru: 'Он может прийти. · «поате сэ винэ»', ua: 'Він може прийти. · «поате се віне»' } },
        { ro: 'Hai să venim!', tr: { ru: 'Давай придём! · «хай сэ веним»', ua: 'Давай прийдемо! · «хай се веним»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мне надо уходить, уже поздно.', ua: 'Мені треба йти, уже пізно.' },
      correct: 'Trebuie să plec, e târziu.',
      wrong: ['Pot să plec, e târziu.', 'Trebuie să pleci, e târziu.', 'Hai să plecăm, e târziu.'],
    },
    {
      kind: 'pickNative',
      q: 'Vrei să vii cu noi mâine?',
      correct: { ru: 'Хочешь пойти с нами завтра?', ua: 'Хочеш піти з нами завтра?' },
      wrong: [
        { ru: 'Ты можешь прийти завтра?', ua: 'Ти можеш прийти завтра?' },
        { ru: 'Нам надо прийти завтра?', ua: 'Нам треба прийти завтра?' },
        { ru: 'Хочешь пойти с нами сегодня?', ua: 'Хочеш піти з нами сьогодні?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'vreau să', tr: { ru: 'хочу', ua: 'хочу' } },
        { ro: 'trebuie să', tr: { ru: 'надо', ua: 'треба' } },
        { ro: 'pot să', tr: { ru: 'могу', ua: 'можу' } },
        { ro: 'hai să', tr: { ru: 'давай', ua: 'давай' } },
        { ro: 'nu pot', tr: { ru: 'не могу', ua: 'не можу' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Trebuie să învăț română',
      tr: { ru: 'Мне надо учить румынский', ua: 'Мені треба вчити румунську' },
      wrong: ['Vreau să învăț română', 'Trebuie să înveți română', 'Pot să învăț română'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Она хочет прийти в пять.', ua: 'Вона хоче прийти о п’ятій.' },
      words: ['Ea', 'vrea', 'să', 'vină', 'la', 'ora', 'cinci'],
      extra: ['vin', 'vreau', 'șase'],
      shown: 'Ea vrea să vină la ora cinci.',
      also: ['Vrea să vină la ora cinci'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Можете повторить, пожалуйста?', ua: 'Можете повторити, будь ласка?' },
      correct: 'Puteți să repetați, vă rog?',
      wrong: ['Pot să repet, vă rog?', 'Vreți să repetați, vă rog?', 'Trebuie să repetați, vă rog?'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Нам не нужно платить.', ua: 'Нам не треба платити.' },
      words: ['Nu', 'trebuie', 'să', 'plătim'],
      extra: ['plătesc', 'pot', 'vrem'],
      shown: 'Nu trebuie să plătim.',
    },
    {
      kind: 'listen',
      ro: 'Hai să bem ceva',
      tr: { ru: 'Давай что-нибудь выпьем', ua: 'Давай щось вип’ємо' },
      wrong: ['Hai să mâncăm ceva', 'Vreau să beau ceva', 'Hai să bem o cafea'],
    },
    {
      kind: 'type',
      q: { ru: 'Я хочу учить румынский.', ua: 'Я хочу вчити румунську.' },
      answers: ['Vreau să învăț română', 'Vreau să învăț limba română', 'Eu vreau să învăț română', 'Aș vrea să învăț română'],
      shown: 'Vreau să învăț română.',
    },
    {
      kind: 'type',
      q: { ru: 'Мне надо работать.', ua: 'Мені треба працювати.' },
      answers: ['Trebuie să lucrez', 'Eu trebuie să lucrez'],
      shown: 'Trebuie să lucrez.',
    },
    {
      kind: 'type',
      q: { ru: 'Пойдём домой!', ua: 'Ходімо додому!' },
      answers: ['Hai să mergem acasă', 'Haide să mergem acasă'],
      shown: 'Hai să mergem acasă!',
    },
  ],
};
