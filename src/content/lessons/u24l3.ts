import type { Lesson } from '../types';

/** B2 · Unit 6 · Lesson 3 — genitive plural -lor (părinților, copiilor, fetelor) and the possessive article al / a / ai / ale (un prieten al meu). */
export const u24l3: Lesson = {
  id: 'u24l3',
  title: { ru: 'Родителей, друзей: -lor', ua: 'Батьків, друзів: -lor' },
  words: [
    { ro: 'casa părinților', tr: { ru: 'дом родителей', ua: 'дім батьків' } },
    { ro: 'cărțile copiilor', tr: { ru: 'книги детей', ua: 'книжки дітей' } },
    { ro: 'un prieten al meu', tr: { ru: 'один мой друг', ua: 'один мій друг' } },
    { ro: 'o prietenă a mea', tr: { ru: 'одна моя подруга', ua: 'одна моя подруга' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Casa părinților mei e la țară.',
      tr: { ru: 'Дом моих родителей — в деревне.', ua: 'Дім моїх батьків — у селі.' },
      note: {
        ru: 'părinții → părinților: к форме «эти родители» добавляется -lor.',
        ua: 'părinții → părinților: до форми «ці батьки» додається -lor.',
      },
    },
    {
      kind: 'intro',
      ro: 'Un prieten al meu locuiește la Cluj.',
      tr: { ru: 'Один мой друг живёт в Клуже.', ua: 'Один мій друг живе в Клужі.' },
      note: {
        ru: 'al meu после un prieten: «друг из моих». Для «она» — o prietenă a mea.',
        ua: 'al meu після un prieten: «друг із моїх». Для «вона» — o prietenă a mea.',
      },
    },
    {
      kind: 'intro',
      ro: 'Cărțile copiilor sunt pe masă.',
      tr: { ru: 'Книги детей — на столе.', ua: 'Книжки дітей — на столі.' },
      note: {
        ru: 'copiii → copiilor. Так же fetele → fetelor, casele → caselor.',
        ua: 'copiii → copiilor. Так само fetele → fetelor, casele → caselor.',
      },
    },
    {
      kind: 'tip',
      title: '-lor, al, a, ai, ale',
      body: {
        ru: [
          'Родительный множественного: форма «эти …» + **-lor**: **părinții → părinților**, **copiii → copiilor**, **fetele → fetelor**, **străzile → străzilor**.',
          'Когда перед словом нет «этот» (un, o, niște) или оно отделено, нужен **al / a / ai / ale** — по роду и числу того, ЧТО принадлежит: **un prieten al meu**, **o prietenă a mea**, **niște prieteni ai mei**, **niște prietene ale mele**.',
        ],
        ua: [
          'Родовий множини: форма «ці …» + **-lor**: **părinții → părinților**, **copiii → copiilor**, **fetele → fetelor**, **străzile → străzilor**.',
          'Коли перед словом немає «цей» (un, o, niște) або воно відокремлене, потрібен **al / a / ai / ale** — за родом і числом того, ЩО належить: **un prieten al meu**, **o prietenă a mea**, **niște prieteni ai mei**, **niște prietene ale mele**.',
        ],
      },
      rows: [
        { ro: 'numele străzilor', tr: { ru: 'названия улиц', ua: 'назви вулиць' } },
        { ro: 'camera fetelor', tr: { ru: 'комната девочек', ua: 'кімната дівчат' } },
        { ro: 'niște prieteni ai mei', tr: { ru: 'несколько моих друзей', ua: 'кілька моїх друзів' } },
        { ro: 'o carte a profesorului', tr: { ru: 'одна книга учителя', ua: 'одна книжка вчителя' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Дом моих родителей — в деревне.', ua: 'Дім моїх батьків — у селі.' },
      correct: 'Casa părinților mei e la țară.',
      wrong: ['Casa părinții mei e la țară.', 'Casa părintelui meu e la țară.', 'Casa părinților mei e la oraș.'],
    },
    {
      kind: 'pickNative',
      q: 'O prietenă a mea lucrează la bancă.',
      correct: { ru: 'Одна моя подруга работает в банке.', ua: 'Одна моя подруга працює в банку.' },
      wrong: [
        { ru: 'Мой друг работает в банке.', ua: 'Мій друг працює в банку.' },
        { ru: 'Моя подруга работала в банке.', ua: 'Моя подруга працювала в банку.' },
        { ru: 'Одна моя подруга ищет банк.', ua: 'Одна моя подруга шукає банк.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'părinților', tr: { ru: 'родителей', ua: 'батьків' } },
        { ro: 'copiilor', tr: { ru: 'детей', ua: 'дітей' } },
        { ro: 'fetelor', tr: { ru: 'девочек', ua: 'дівчат' } },
        { ro: 'străzilor', tr: { ru: 'улиц', ua: 'вулиць' } },
        { ro: 'prietenilor', tr: { ru: 'друзей', ua: 'друзів' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Un prieten al meu locuiește la Cluj',
      tr: { ru: 'Один мой друг живёт в Клуже', ua: 'Один мій друг живе в Клужі' },
      wrong: ['O prietenă a mea locuiește la Cluj', 'Prietenul meu a locuit la Cluj', 'Un prieten al tău locuiește la Cluj'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Книги детей на столе.', ua: 'Книжки дітей на столі.' },
      words: ['Cărțile', 'copiilor', 'sunt', 'pe', 'masă'],
      extra: ['copiii', 'cartea', 'lor'],
      shown: 'Cărțile copiilor sunt pe masă.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Несколько моих друзей живут в Бухаресте.', ua: 'Кілька моїх друзів живуть у Бухаресті.' },
      correct: 'Niște prieteni ai mei locuiesc în București.',
      wrong: ['Niște prieteni al meu locuiesc în București.', 'Niște prieteni ale mele locuiesc în București.', 'Prietenii mei au locuit în București.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Названия улиц — старые.', ua: 'Назви вулиць — старі.' },
      words: ['Numele', 'străzilor', 'sunt', 'vechi'],
      extra: ['strada', 'noi', 'este'],
      shown: 'Numele străzilor sunt vechi.',
    },
    {
      kind: 'type',
      q: { ru: 'Один мой друг.', ua: 'Один мій друг.' },
      answers: ['Un prieten al meu', 'Un prieten de-al meu'],
      shown: 'Un prieten al meu.',
    },
    {
      kind: 'type',
      q: { ru: 'Дом родителей.', ua: 'Дім батьків.' },
      answers: ['Casa părinților'],
      shown: 'Casa părinților.',
    },
  ],
};
