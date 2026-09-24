import type { Lesson } from '../types';

/** B1 · Unit 4 · Lesson 2 — agreeing and disagreeing: sunt de acord, ai dreptate, așa e, nu chiar, depinde. */
export const u16l2: Lesson = {
  id: 'u16l2',
  title: { ru: 'Согласен или нет', ua: 'Згоден чи ні' },
  words: [
    { ro: 'sunt de acord', tr: { ru: 'я согласен (согласна)', ua: 'я згоден (згодна)' } },
    { ro: 'ai dreptate', tr: { ru: 'ты прав(а)', ua: 'ти маєш рацію' } },
    { ro: 'depinde', tr: { ru: 'смотря как, зависит', ua: 'залежить' } },
    { ro: 'așa e', tr: { ru: 'так и есть', ua: 'так і є' } },
    { ro: 'nu chiar', tr: { ru: 'не совсем', ua: 'не зовсім' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Sunt de acord cu tine.',
      tr: { ru: 'Я с тобой согласен.', ua: 'Я з тобою згоден.' },
      note: {
        ru: 'de acord ≈ «де акорд» — согласен; одна форма для мужчин и женщин. cu tine — с тобой.',
        ua: 'de acord ≈ «де акорд» — згоден; одна форма для чоловіків і жінок. cu tine — з тобою.',
      },
    },
    {
      kind: 'intro',
      ro: 'Ai dreptate.',
      tr: { ru: 'Ты прав(а).', ua: 'Ти маєш рацію.' },
      note: {
        ru: 'Дословно «у тебя есть правота». dreptate ≈ «дрептате». Вам — aveți dreptate.',
        ua: 'Дослівно «ти маєш правду». dreptate ≈ «дрептате». Вам — aveți dreptate.',
      },
    },
    {
      kind: 'intro',
      ro: 'Depinde.',
      tr: { ru: 'Смотря как. Зависит.', ua: 'Залежить.' },
      note: {
        ru: 'depinde de — «зависит от»: depinde de preț — зависит от цены.',
        ua: 'depinde de — «залежить від»: depinde de preț — залежить від ціни.',
      },
    },
    {
      kind: 'tip',
      title: 'Sunt de acord',
      body: {
        ru: [
          'Согласие: **sunt de acord** (согласен), **ai dreptate** (ты прав), **exact** (точно), **așa e** (так и есть).',
          'Мягкое несогласие: **nu chiar** (не совсем), **depinde** (смотря как), **nu sunt de acord** (не согласен).',
        ],
        ua: [
          'Згода: **sunt de acord** (згоден), **ai dreptate** (маєш рацію), **exact** (точно), **așa e** (так і є).',
          'М’яка незгода: **nu chiar** (не зовсім), **depinde** (залежить), **nu sunt de acord** (не згоден).',
        ],
      },
      rows: [
        { ro: 'Așa e.', tr: { ru: 'Так и есть.', ua: 'Так і є.' } },
        { ro: 'Nu chiar.', tr: { ru: 'Не совсем.', ua: 'Не зовсім.' } },
        { ro: 'Depinde de preț.', tr: { ru: 'Зависит от цены.', ua: 'Залежить від ціни.' } },
        { ro: 'Aveți dreptate.', tr: { ru: 'Вы правы.', ua: 'Ви маєте рацію.' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я с тобой согласен.', ua: 'Я з тобою згоден.' },
      correct: 'Sunt de acord cu tine.',
      wrong: ['Nu sunt de acord cu tine.', 'Ești de acord cu mine.', 'Sunt de acord cu el.'],
    },
    {
      kind: 'pickNative',
      q: 'N-ai dreptate.',
      correct: { ru: 'Ты не прав.', ua: 'Ти не маєш рації.' },
      wrong: [
        { ru: 'Ты прав.', ua: 'Ти маєш рацію.' },
        { ru: 'Я не прав.', ua: 'Я не маю рації.' },
        { ru: 'У тебя нет времени.', ua: 'У тебе немає часу.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'de acord', tr: { ru: 'согласен', ua: 'згоден' } },
        { ro: 'ai dreptate', tr: { ru: 'ты прав', ua: 'маєш рацію' } },
        { ro: 'depinde', tr: { ru: 'зависит', ua: 'залежить' } },
        { ro: 'exact', tr: { ru: 'точно', ua: 'точно' } },
        { ro: 'nu chiar', tr: { ru: 'не совсем', ua: 'не зовсім' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Așa e, ai dreptate',
      tr: { ru: 'Так и есть, ты прав', ua: 'Так і є, ти маєш рацію' },
      wrong: ['Nu e așa, n-ai dreptate', 'Așa e, am dreptate', 'Așa e, aveți dreptate'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Зависит от цены.', ua: 'Залежить від ціни.' },
      words: ['Depinde', 'de', 'preț'],
      extra: ['la', 'prețul', 'costă'],
      shown: 'Depinde de preț.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Вы правы.', ua: 'Ви маєте рацію.' },
      correct: 'Aveți dreptate.',
      wrong: ['Ai dreptate.', 'Avem dreptate.', 'Aveți timp.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я не совсем согласна.', ua: 'Я не зовсім згодна.' },
      words: ['Nu', 'sunt', 'chiar', 'de', 'acord'],
      extra: ['ești', 'da', 'acordul'],
      shown: 'Nu sunt chiar de acord.',
    },
    {
      kind: 'type',
      q: { ru: 'Ты прав(а).', ua: 'Ти маєш рацію.' },
      answers: ['Ai dreptate'],
      shown: 'Ai dreptate.',
    },
    {
      kind: 'type',
      q: { ru: 'Я согласен (согласна).', ua: 'Я згоден (згодна).' },
      answers: ['Sunt de acord', 'Eu sunt de acord'],
      shown: 'Sunt de acord.',
    },
  ],
};
