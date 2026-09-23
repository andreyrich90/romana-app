import type { Lesson } from '../types';

/** Unit 5 · Lesson 5 — review of the unit. No new words: every item mixes lessons 1–4. */
export const u5l5: Lesson = {
  id: 'u5l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Azi este duminică.', tr: { ru: 'Сегодня воскресенье.', ua: 'Сьогодні неділя.' } },
    { ro: 'Cât e ceasul?', tr: { ru: 'Который час?', ua: 'Котра година?' } },
    { ro: 'Lucrez de luni până vineri.', tr: { ru: 'Я работаю с понедельника по пятницу.', ua: 'Я працюю з понеділка до пʼятниці.' } },
    { ro: 'Mă trezesc la ora șase.', tr: { ru: 'Я просыпаюсь в шесть.', ua: 'Я прокидаюся о шостій.' } },
    { ro: 'Cum e vremea azi?', tr: { ru: 'Какая сегодня погода?', ua: 'Яка сьогодні погода?' } },
  ],
  exercises: [
    {
      kind: 'pickNative',
      q: 'Azi este duminică.',
      correct: { ru: 'Сегодня воскресенье.', ua: 'Сьогодні неділя.' },
      wrong: [
        { ru: 'Завтра воскресенье.', ua: 'Завтра неділя.' },
        { ru: 'Сегодня суббота.', ua: 'Сьогодні субота.' },
        { ru: 'Сегодня понедельник.', ua: 'Сьогодні понеділок.' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Который час?', ua: 'Котра година?' },
      words: ['Cât', 'e', 'ceasul'],
      extra: ['ora', 'la', 'este'],
      shown: 'Cât e ceasul?',
      also: ['Cât este ceasul'],
    },
    {
      kind: 'listen',
      ro: 'Lucrez de luni până vineri',
      tr: { ru: 'Я работаю с понедельника по пятницу', ua: 'Я працюю з понеділка до пʼятниці' },
      wrong: ['Lucrez de luni până joi', 'Lucrăm de luni până vineri', 'Lucrez luni și vineri'],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'azi', tr: { ru: 'сегодня', ua: 'сьогодні' } },
        { ro: 'mâine', tr: { ru: 'завтра', ua: 'завтра' } },
        { ro: 'frig', tr: { ru: 'холодно', ua: 'холодно' } },
        { ro: 'seara', tr: { ru: 'вечером', ua: 'увечері' } },
        { ro: 'jumătate', tr: { ru: 'половина', ua: 'половина' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я просыпаюсь в шесть.', ua: 'Я прокидаюся о шостій.' },
      correct: 'Mă trezesc la ora șase.',
      wrong: ['Mă trezesc la ora șapte.', 'Te trezești la ora șase.', 'Mă trezesc la ora două.'],
    },
    {
      kind: 'type',
      q: { ru: 'Завтра пятница.', ua: 'Завтра пʼятниця.' },
      answers: ['Mâine este vineri', 'Mâine e vineri'],
      shown: 'Mâine este vineri.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Идёт снег.', ua: 'Іде сніг.' },
      correct: 'Ninge.',
      wrong: ['Plouă.', 'E frig.', 'E cald.'],
    },
    {
      kind: 'listen',
      ro: 'E ora zece fără un sfert',
      tr: { ru: 'Сейчас 9:45', ua: 'Зараз 9:45' },
      wrong: ['E ora zece și un sfert', 'E ora nouă fără un sfert', 'E ora zece și jumătate'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Вечером мы дома.', ua: 'Увечері ми вдома.' },
      words: ['Seara', 'suntem', 'acasă'],
      extra: ['dimineața', 'sunt', 'în'],
      shown: 'Seara suntem acasă.',
      also: ['Suntem acasă seara'],
    },
    {
      kind: 'pickNative',
      q: 'Cum e vremea azi?',
      correct: { ru: 'Какая сегодня погода?', ua: 'Яка сьогодні погода?' },
      wrong: [
        { ru: 'Который сейчас час?', ua: 'Котра зараз година?' },
        { ru: 'Какой сегодня день?', ua: 'Який сьогодні день?' },
        { ru: 'Какая завтра погода?', ua: 'Яка завтра погода?' },
      ],
    },
    {
      kind: 'type',
      q: { ru: 'Я работаю в субботу.', ua: 'Я працюю в суботу.' },
      answers: ['Lucrez sâmbătă', 'Eu lucrez sâmbătă', 'Sâmbătă lucrez'],
      shown: 'Lucrez sâmbătă.',
    },
    {
      kind: 'type',
      q: { ru: 'Летом жарко.', ua: 'Влітку спекотно.' },
      answers: ['Vara e cald', 'Vara este cald'],
      shown: 'Vara e cald.',
    },
  ],
};
