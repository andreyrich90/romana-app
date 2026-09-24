import type { Lesson } from '../types';

/** A2 · Unit 6 · Lesson 1 — the hotel: o rezervare, o cameră liberă, pentru două nopți, cheia, micul dejun. */
export const u12l1: Lesson = {
  id: 'u12l1',
  title: { ru: 'Гостиница', ua: 'Готель' },
  words: [
    { ro: 'Am o rezervare.', tr: { ru: 'У меня бронь.', ua: 'У мене бронювання.' } },
    { ro: 'o cameră liberă', tr: { ru: 'свободный номер', ua: 'вільний номер' } },
    { ro: 'pentru două nopți', tr: { ru: 'на две ночи', ua: 'на дві ночі' } },
    { ro: 'pentru două persoane', tr: { ru: 'на двоих', ua: 'на двох' } },
    { ro: 'cheia', tr: { ru: 'ключ', ua: 'ключ' } },
    { ro: 'micul dejun', tr: { ru: 'завтрак', ua: 'сніданок' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Am o rezervare.',
      tr: { ru: 'У меня бронь.', ua: 'У мене бронювання.' },
      note: {
        ru: 'rezervare ≈ «резерваре». На ресепшене назовите фамилию: Am o rezervare pe numele Ivanov — «на имя Иванов».',
        ua: 'rezervare ≈ «резерваре». На рецепції назвіть прізвище: Am o rezervare pe numele Ivanov — «на ім’я Іванов».',
      },
    },
    {
      kind: 'intro',
      ro: 'Aveți o cameră liberă pentru două nopți?',
      tr: { ru: 'У вас есть свободный номер на две ночи?', ua: 'У вас є вільний номер на дві ночі?' },
      note: {
        ru: 'cameră — «комната» из раздела «Дом», в гостинице — «номер». noapte → nopți ≈ «нопць».',
        ua: 'cameră — «кімната» з розділу «Дім», у готелі — «номер». noapte → nopți ≈ «нопць».',
      },
    },
    {
      kind: 'intro',
      ro: 'Micul dejun e inclus?',
      tr: { ru: 'Завтрак включён?', ua: 'Сніданок включено?' },
      note: {
        ru: 'micul dejun ≈ «микул дежун» — дословно «маленький обед». Ключ — cheia «кея».',
        ua: 'micul dejun ≈ «мікул дежун» — дослівно «маленький обід». Ключ — cheia «кея».',
      },
    },
    {
      kind: 'tip',
      title: 'O cameră pentru două nopți',
      body: {
        ru: [
          '**Pentru** — и «для», и «на» срок: **pentru două nopți** (на две ночи), **pentru o persoană** (на одного).',
          'Множественное стоит запомнить: **noapte → nopți**, **persoană → persoane**, **zi → zile**.',
        ],
        ua: [
          '**Pentru** — і «для», і «на» строк: **pentru două nopți** (на дві ночі), **pentru o persoană** (на одного).',
          'Множину варто запам’ятати: **noapte → nopți**, **persoană → persoane**, **zi → zile**.',
        ],
      },
      rows: [
        { ro: 'Am o rezervare.', tr: { ru: 'У меня бронь. · «ам о резерваре»', ua: 'У мене бронювання. · «ам о резерваре»' } },
        { ro: 'o cameră pentru două persoane', tr: { ru: 'номер на двоих · «о камерэ пентру доуэ персоане»', ua: 'номер на двох · «о камере пентру доуе персоане»' } },
        { ro: 'pentru trei nopți', tr: { ru: 'на три ночи · «пентру трей нопць»', ua: 'на три ночі · «пентру трей нопць»' } },
        { ro: 'Micul dejun e inclus?', tr: { ru: 'Завтрак включён? · «микул дежун е инклус»', ua: 'Сніданок включено? · «мікул дежун е інклус»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'У меня бронь.', ua: 'У мене бронювання.' },
      correct: 'Am o rezervare.',
      wrong: ['Aveți o rezervare?', 'Am o cameră.', 'Vreau o rezervare.'],
    },
    {
      kind: 'pickNative',
      q: 'Aveți o cameră liberă?',
      correct: { ru: 'У вас есть свободный номер?', ua: 'У вас є вільний номер?' },
      wrong: [
        { ru: 'У меня есть свободный номер.', ua: 'У мене є вільний номер.' },
        { ru: 'У вас есть номер на двоих?', ua: 'У вас є номер на двох?' },
        { ru: 'Где мой номер?', ua: 'Де мій номер?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'rezervare', tr: { ru: 'бронь', ua: 'бронювання' } },
        { ro: 'cheia', tr: { ru: 'ключ', ua: 'ключ' } },
        { ro: 'micul dejun', tr: { ru: 'завтрак', ua: 'сніданок' } },
        { ro: 'o noapte', tr: { ru: 'одна ночь', ua: 'одна ніч' } },
        { ro: 'două nopți', tr: { ru: 'две ночи', ua: 'дві ночі' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Pentru două nopți',
      tr: { ru: 'На две ночи', ua: 'На дві ночі' },
      wrong: ['Pentru trei nopți', 'Pentru două persoane', 'Pentru o noapte'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Номер на двоих, на три ночи.', ua: 'Номер на двох, на три ночі.' },
      words: ['O', 'cameră', 'pentru', 'două', 'persoane', 'pentru', 'trei', 'nopți'],
      extra: ['doi', 'noapte', 'persoană'],
      shown: 'O cameră pentru două persoane, pentru trei nopți.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Где ключ?', ua: 'Де ключ?' },
      correct: 'Unde e cheia?',
      wrong: ['Unde e camera?', 'Aveți cheia?', 'E cheia mea.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Во сколько завтрак?', ua: 'О котрій сніданок?' },
      words: ['La', 'ce', 'oră', 'e', 'micul', 'dejun'],
      extra: ['cât', 'unde', 'sunt'],
      shown: 'La ce oră e micul dejun?',
    },
    {
      kind: 'type',
      q: { ru: 'У меня бронь.', ua: 'У мене бронювання.' },
      answers: ['Am o rezervare', 'Am rezervare', 'Eu am o rezervare'],
      shown: 'Am o rezervare.',
    },
    {
      kind: 'type',
      q: { ru: 'Завтрак включён?', ua: 'Сніданок включено?' },
      answers: ['Micul dejun e inclus', 'Micul dejun este inclus', 'E inclus micul dejun', 'Este inclus micul dejun'],
      shown: 'Micul dejun e inclus?',
    },
  ],
};
