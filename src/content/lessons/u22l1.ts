import type { Lesson } from '../types';

/** B2 · Unit 4 · Lesson 1 — news language: potrivit / conform + genitive-dative, a declarat că, a anunțat că. */
export const u22l1: Lesson = {
  id: 'u22l1',
  title: { ru: 'Новости', ua: 'Новини' },
  words: [
    { ro: 'știrile', tr: { ru: 'новости', ua: 'новини' } },
    { ro: 'potrivit', tr: { ru: 'согласно, по данным', ua: 'згідно з, за даними' } },
    { ro: 'conform', tr: { ru: 'согласно', ua: 'згідно з' } },
    { ro: 'a declarat că', tr: { ru: 'заявил, что', ua: 'заявив, що' } },
    { ro: 'a anunțat că', tr: { ru: 'сообщил, что', ua: 'повідомив, що' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Potrivit presei, drumul este închis.',
      tr: { ru: 'По данным прессы, дорога закрыта.', ua: 'За даними преси, дорогу закрито.' },
      note: {
        ru: 'potrivit + родительный падеж: presa → presei. potrivit ≈ «потривит».',
        ua: 'potrivit + родовий відмінок: presa → presei. potrivit ≈ «потрівіт».',
      },
    },
    {
      kind: 'intro',
      ro: 'Ministrul a declarat că situația este sub control.',
      tr: { ru: 'Министр заявил, что ситуация под контролем.', ua: 'Міністр заявив, що ситуація під контролем.' },
      note: {
        ru: 'a declarat că — «заявил, что»: типичное начало новости.',
        ua: 'a declarat că — «заявив, що»: типовий початок новини.',
      },
    },
    {
      kind: 'intro',
      ro: 'Poliția a anunțat că nu există victime.',
      tr: { ru: 'Полиция сообщила, что пострадавших нет.', ua: 'Поліція повідомила, що постраждалих немає.' },
      note: {
        ru: 'nu există — «нет, не существует»; victime — пострадавшие, жертвы.',
        ua: 'nu există — «немає, не існує»; victime — постраждалі, жертви.',
      },
    },
    {
      kind: 'tip',
      title: 'Potrivit, conform',
      body: {
        ru: [
          'Источник: **potrivit** или **conform** + родительный/дательный: **potrivit presei** (по данным прессы), **conform datelor** (согласно данным), **potrivit ministrului** (по словам министра).',
          'Чужие слова: **a declarat că**, **a anunțat că**, **a spus că** — и дальше обычное предложение.',
        ],
        ua: [
          'Джерело: **potrivit** або **conform** + родовий/давальний: **potrivit presei** (за даними преси), **conform datelor** (згідно з даними), **potrivit ministrului** (за словами міністра).',
          'Чужі слова: **a declarat că**, **a anunțat că**, **a spus că** — і далі звичайне речення.',
        ],
      },
      rows: [
        { ro: 'potrivit presei', tr: { ru: 'по данным прессы', ua: 'за даними преси' } },
        { ro: 'conform datelor', tr: { ru: 'согласно данным', ua: 'згідно з даними' } },
        { ro: 'potrivit ministrului', tr: { ru: 'по словам министра', ua: 'за словами міністра' } },
        { ro: 'a anunțat că', tr: { ru: 'сообщил, что', ua: 'повідомив, що' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'По данным прессы, дорога закрыта.', ua: 'За даними преси, дорогу закрито.' },
      correct: 'Potrivit presei, drumul este închis.',
      wrong: ['Potrivit presa, drumul este închis.', 'Potrivit presei, drumul este deschis.', 'Presa, drumul este închis.'],
    },
    {
      kind: 'pickNative',
      q: 'Conform datelor oficiale, turiștii sunt mai mulți.',
      correct: { ru: 'По официальным данным, туристов больше.', ua: 'За офіційними даними, туристів більше.' },
      wrong: [
        { ru: 'По официальным данным, туристов меньше.', ua: 'За офіційними даними, туристів менше.' },
        { ru: 'Туристы дали официальные данные.', ua: 'Туристи дали офіційні дані.' },
        { ru: 'Данных о туристах нет.', ua: 'Даних про туристів немає.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'știrile', tr: { ru: 'новости', ua: 'новини' } },
        { ro: 'presa', tr: { ru: 'пресса', ua: 'преса' } },
        { ro: 'ministrul', tr: { ru: 'министр', ua: 'міністр' } },
        { ro: 'poliția', tr: { ru: 'полиция', ua: 'поліція' } },
        { ro: 'datele', tr: { ru: 'данные', ua: 'дані' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Ministrul a declarat că situația este sub control',
      tr: { ru: 'Министр заявил, что ситуация под контролем', ua: 'Міністр заявив, що ситуація під контролем' },
      wrong: ['Ministrul a declarat că situația este gravă', 'Poliția a declarat că situația este sub control', 'Ministrul a spus că nu știe nimic'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Полиция сообщила, что пострадавших нет.', ua: 'Поліція повідомила, що постраждалих немає.' },
      words: ['Poliția', 'a', 'anunțat', 'că', 'nu', 'există', 'victime'],
      extra: ['anunță', 'sunt', 'ministrul'],
      shown: 'Poliția a anunțat că nu există victime.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'По словам министра…', ua: 'За словами міністра…' },
      correct: 'Potrivit ministrului…',
      wrong: ['Potrivit ministrul…', 'Ministrul a potrivit…', 'Conform ministrul…'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я читаю новости каждое утро.', ua: 'Я читаю новини щоранку.' },
      words: ['Citesc', 'știrile', 'în', 'fiecare', 'dimineață'],
      extra: ['știri', 'seară', 'citește'],
      shown: 'Citesc știrile în fiecare dimineață.',
    },
    {
      kind: 'type',
      q: { ru: 'Новости.', ua: 'Новини.' },
      answers: ['Știrile', 'Știri'],
      shown: 'Știrile.',
    },
    {
      kind: 'type',
      q: { ru: 'Он заявил, что…', ua: 'Він заявив, що…' },
      answers: ['A declarat că', 'El a declarat că'],
      shown: 'A declarat că…',
    },
  ],
};
