import type { Lesson } from '../types';

/** Unit 4 · Lesson 5 — review of the unit. No new words: every item mixes lessons 1–4. */
export const u4l5: Lesson = {
  id: 'u4l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Scuzați-mă, unde este gara?', tr: { ru: 'Извините, где вокзал?', ua: 'Перепрошую, де вокзал?' } },
    { ro: 'Mergeți drept înainte.', tr: { ru: 'Идите прямо.', ua: 'Йдіть прямо.' } },
    { ro: 'Merg la farmacie.', tr: { ru: 'Я иду в аптеку.', ua: 'Я йду в аптеку.' } },
    { ro: 'Mergem cu metroul.', tr: { ru: 'Мы едем на метро.', ua: 'Ми їдемо метро.' } },
    { ro: 'Caut o bancă.', tr: { ru: 'Я ищу банк.', ua: 'Я шукаю банк.' } },
    { ro: 'E departe?', tr: { ru: 'Это далеко?', ua: 'Це далеко?' } },
  ],
  exercises: [
    {
      kind: 'pickNative',
      q: 'Unde este gara?',
      correct: { ru: 'Где вокзал?', ua: 'Де вокзал?' },
      wrong: [
        { ru: 'Где гостиница?', ua: 'Де готель?' },
        { ru: 'Вокзал далеко?', ua: 'Вокзал далеко?' },
        { ru: 'Куда ты идёшь?', ua: 'Куди ти йдеш?' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Идите прямо.', ua: 'Йдіть прямо.' },
      words: ['Mergeți', 'drept', 'înainte'],
      extra: ['stânga', 'merg', 'la'],
      shown: 'Mergeți drept înainte.',
    },
    {
      kind: 'listen',
      ro: 'Merg cu trenul',
      tr: { ru: 'Я еду на поезде', ua: 'Я їду потягом' },
      wrong: ['Merg cu autobuzul', 'Mergi cu trenul', 'Merg la gară'],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'gara', tr: { ru: 'вокзал', ua: 'вокзал' } },
        { ro: 'piața', tr: { ru: 'рынок', ua: 'ринок' } },
        { ro: 'la dreapta', tr: { ru: 'направо', ua: 'праворуч' } },
        { ro: 'pe jos', tr: { ru: 'пешком', ua: 'пішки' } },
        { ro: 'caut', tr: { ru: 'я ищу', ua: 'я шукаю' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я иду в аптеку.', ua: 'Я йду в аптеку.' },
      correct: 'Merg la farmacie.',
      wrong: ['Merg la farmacia.', 'Merg cu farmacia.', 'Mergi la farmacie.'],
    },
    {
      kind: 'type',
      q: { ru: 'Где туалет?', ua: 'Де туалет?' },
      answers: ['Unde este toaleta', 'Unde e toaleta'],
      shown: 'Unde este toaleta?',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Аптека справа.', ua: 'Аптека справа.' },
      correct: 'Farmacia este pe dreapta.',
      wrong: ['Farmacia este pe stânga.', 'Farmacie este pe dreapta.', 'Farmacia sunt pe dreapta.'],
    },
    {
      kind: 'listen',
      ro: 'Aveți roșii?',
      tr: { ru: 'У вас есть помидоры?', ua: 'У вас є помідори?' },
      wrong: ['Avem roșii.', 'Aveți mere?', 'Ai roșii?'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Билет до Брашова, пожалуйста.', ua: 'Квиток до Брашова, будь ласка.' },
      words: ['Un', 'bilet', 'pentru', 'Brașov', 'vă', 'rog'],
      extra: ['o', 'cu', 'merg'],
      shown: 'Un bilet pentru Brașov, vă rog.',
    },
    {
      kind: 'pickNative',
      q: 'E departe?',
      correct: { ru: 'Это далеко?', ua: 'Це далеко?' },
      wrong: [
        { ru: 'Это близко?', ua: 'Це близько?' },
        { ru: 'Это здесь?', ua: 'Це тут?' },
        { ru: 'Где это?', ua: 'Де це?' },
      ],
    },
    {
      kind: 'type',
      q: { ru: 'Я ищу банк.', ua: 'Я шукаю банк.' },
      answers: ['Caut o bancă', 'Caut banca', 'Eu caut o bancă', 'Eu caut banca'],
      shown: 'Caut o bancă.',
    },
    {
      kind: 'type',
      q: { ru: 'Мы едем на метро.', ua: 'Ми їдемо метро.' },
      answers: ['Mergem cu metroul', 'Noi mergem cu metroul'],
      shown: 'Mergem cu metroul.',
    },
  ],
};
