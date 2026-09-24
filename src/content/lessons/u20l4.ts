import type { Lesson } from '../types';

/** B2 · Unit 2 · Lesson 4 — guesses: o fi acasă, o fi plecat, trebuie să fi uitat, probabil că, poate că. */
export const u20l4: Lesson = {
  id: 'u20l4',
  title: { ru: 'Наверное', ua: 'Мабуть' },
  words: [
    { ro: 'o fi', tr: { ru: 'наверное, он (есть)…', ua: 'мабуть, він…' } },
    { ro: 'o fi plecat', tr: { ru: 'наверное, ушёл', ua: 'мабуть, пішов' } },
    { ro: 'trebuie să fi uitat', tr: { ru: 'должно быть, забыл', ua: 'напевно, забув' } },
    { ro: 'probabil', tr: { ru: 'вероятно', ua: 'імовірно' } },
    { ro: 'poate că', tr: { ru: 'может быть', ua: 'можливо' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'O fi acasă.',
      tr: { ru: 'Наверное, он дома.', ua: 'Мабуть, він удома.' },
      note: {
        ru: 'o fi — догадка: «наверное, он …». Разговорная форма.',
        ua: 'o fi — здогадка: «мабуть, він …». Розмовна форма.',
      },
    },
    {
      kind: 'intro',
      ro: 'O fi plecat deja.',
      tr: { ru: 'Наверное, он уже ушёл.', ua: 'Мабуть, він уже пішов.' },
      note: {
        ru: 'О прошлом: o fi + форма на -at, -it, -ut.',
        ua: 'Про минуле: o fi + форма на -at, -it, -ut.',
      },
    },
    {
      kind: 'intro',
      ro: 'Trebuie să fi uitat.',
      tr: { ru: 'Должно быть, он забыл.', ua: 'Напевно, він забув.' },
      note: {
        ru: 'trebuie să fi + форма — уверенная догадка о прошлом. a uita — забыть.',
        ua: 'trebuie să fi + форма — упевнена здогадка про минуле. a uita — забути.',
      },
    },
    {
      kind: 'tip',
      title: 'O fi, trebuie să fi',
      body: {
        ru: [
          'Догадка о настоящем: **o fi** (acasă, obosit) — «наверное, он …». О прошлом: **o fi plecat** — «наверное, ушёл».',
          'Увереннее: **trebuie să fi uitat** — «должно быть, забыл». Нейтрально: **probabil (că)**, **poate (că)**.',
        ],
        ua: [
          'Здогадка про теперішнє: **o fi** (acasă, obosit) — «мабуть, він …». Про минуле: **o fi plecat** — «мабуть, пішов».',
          'Упевненіше: **trebuie să fi uitat** — «напевно, забув». Нейтрально: **probabil (că)**, **poate (că)**.',
        ],
      },
      rows: [
        { ro: 'O fi obosit.', tr: { ru: 'Наверное, устал.', ua: 'Мабуть, утомився.' } },
        { ro: 'O fi uitat.', tr: { ru: 'Наверное, забыл.', ua: 'Мабуть, забув.' } },
        { ro: 'Probabil că plouă.', tr: { ru: 'Вероятно, идёт дождь.', ua: 'Імовірно, іде дощ.' } },
        { ro: 'Trebuie să fi ajuns.', tr: { ru: 'Должно быть, он доехал.', ua: 'Напевно, він доїхав.' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Наверное, он дома.', ua: 'Мабуть, він удома.' },
      correct: 'O fi acasă.',
      wrong: ['E acasă.', 'O să fie acasă.', 'A fost acasă.'],
    },
    {
      kind: 'pickNative',
      q: 'Trebuie să fi uitat.',
      correct: { ru: 'Должно быть, он забыл.', ua: 'Напевно, він забув.' },
      wrong: [
        { ru: 'Он должен забыть.', ua: 'Він має забути.' },
        { ru: 'Он не забыл.', ua: 'Він не забув.' },
        { ru: 'Надо не забыть.', ua: 'Треба не забути.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'probabil', tr: { ru: 'вероятно', ua: 'імовірно' } },
        { ro: 'o fi', tr: { ru: 'наверное, есть', ua: 'мабуть, є' } },
        { ro: 'poate că', tr: { ru: 'может быть', ua: 'можливо' } },
        { ro: 'trebuie să fi', tr: { ru: 'должно быть', ua: 'напевно' } },
        { ro: 'uitat', tr: { ru: 'забыл', ua: 'забув' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'O fi plecat deja',
      tr: { ru: 'Наверное, он уже ушёл', ua: 'Мабуть, він уже пішов' },
      wrong: ['A plecat deja', 'O să plece deja', 'O fi ajuns deja'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Вероятно, идёт дождь.', ua: 'Імовірно, іде дощ.' },
      words: ['Probabil', 'că', 'plouă'],
      extra: ['poate', 'ploua', 'o'],
      shown: 'Probabil că plouă.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Должно быть, он доехал.', ua: 'Напевно, він доїхав.' },
      correct: 'Trebuie să fi ajuns.',
      wrong: ['Trebuie să ajungă.', 'A ajuns.', 'O să ajungă.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Может быть, он устал.', ua: 'Можливо, він утомився.' },
      words: ['Poate', 'că', 'e', 'obosit'],
      extra: ['probabil', 'obosită', 'o'],
      shown: 'Poate că e obosit.',
    },
    {
      kind: 'type',
      q: { ru: 'Наверное, он забыл.', ua: 'Мабуть, він забув.' },
      answers: ['O fi uitat', 'Probabil că a uitat', 'Probabil a uitat', 'Poate că a uitat', 'Trebuie să fi uitat'],
      shown: 'O fi uitat.',
    },
    {
      kind: 'type',
      q: { ru: 'Вероятно.', ua: 'Імовірно.' },
      answers: ['Probabil', 'Probabil că'],
      shown: 'Probabil.',
    },
  ],
};
