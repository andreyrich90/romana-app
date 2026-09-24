import type { Lesson } from '../types';

/** A2 · Unit 4 · Lesson 2 — pain and symptoms: mă doare / mă dor, te doare?, unde vă doare?, am febră, am tuse, sunt răcit. */
export const u10l2: Lesson = {
  id: 'u10l2',
  title: { ru: 'Мне больно', ua: 'Мені болить' },
  words: [
    { ro: 'Mă doare capul.', tr: { ru: 'У меня болит голова.', ua: 'У мене болить голова.' } },
    { ro: 'Mă dor picioarele.', tr: { ru: 'У меня болят ноги.', ua: 'У мене болять ноги.' } },
    { ro: 'Unde vă doare?', tr: { ru: 'Где у вас болит?', ua: 'Де у вас болить?' } },
    { ro: 'Am febră.', tr: { ru: 'У меня температура.', ua: 'У мене температура.' } },
    { ro: 'tuse', tr: { ru: 'кашель', ua: 'кашель' } },
    { ro: 'Sunt răcit / răcită.', tr: { ru: 'Я простужен(а).', ua: 'Я застуджений(а).' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Mă doare capul.',
      tr: { ru: 'У меня болит голова.', ua: 'У мене болить голова.' },
      note: {
        ru: 'Дословно «меня болит голова». doare ≈ «доаре» → «мэ доаре капул».',
        ua: 'Дослівно «мене болить голова». doare ≈ «доаре» → «ме доаре капул».',
      },
    },
    {
      kind: 'intro',
      ro: 'Mă dor picioarele.',
      tr: { ru: 'У меня болят ноги.', ua: 'У мене болять ноги.' },
      note: {
        ru: 'Болит несколько — doare → dor ≈ «дор». Как place → plac в «мне нравится».',
        ua: 'Болить кілька — doare → dor ≈ «дор». Як place → plac у «мені подобається».',
      },
    },
    {
      kind: 'intro',
      ro: 'Am febră și tuse.',
      tr: { ru: 'У меня температура и кашель.', ua: 'У мене температура і кашель.' },
      note: {
        ru: 'febră ≈ «фебрэ» — жар, температура; tuse ≈ «тусе» — кашель. Простыл — Sunt răcit, простыла — Sunt răcită «рэчит / рэчитэ».',
        ua: 'febră ≈ «фебре» — жар, температура; tuse ≈ «тусе» — кашель. Застудився — Sunt răcit, застудилася — Sunt răcită «речіт / речіте».',
      },
    },
    {
      kind: 'tip',
      title: 'Mă doare, mă dor',
      body: {
        ru: [
          'Устроено как **îmi place / îmi plac**: болит одно — **doare**, несколько — **dor**.',
          'У кого болит — маленькое слово впереди: **mă** doare (у меня), **te** doare (у тебя), **îl / o** doare (у него / у неё), **vă** doare (у вас). Врач спросит: **Unde vă doare?**',
        ],
        ua: [
          'Влаштовано як **îmi place / îmi plac**: болить одне — **doare**, кілька — **dor**.',
          'У кого болить — маленьке слово попереду: **mă** doare (у мене), **te** doare (у тебе), **îl / o** doare (у нього / у неї), **vă** doare (у вас). Лікар спитає: **Unde vă doare?**',
        ],
      },
      rows: [
        { ro: 'Mă doare capul.', tr: { ru: 'У меня болит голова. · «мэ доаре капул»', ua: 'У мене болить голова. · «ме доаре капул»' } },
        { ro: 'Mă dor ochii.', tr: { ru: 'У меня болят глаза. · «мэ дор окий»', ua: 'У мене болять очі. · «ме дор окій»' } },
        { ro: 'Te doare gâtul?', tr: { ru: 'У тебя болит горло? · «те доаре гытул»', ua: 'У тебе болить горло? · «те доаре гитул»' } },
        { ro: 'Unde vă doare?', tr: { ru: 'Где у вас болит? · «унде вэ доаре»', ua: 'Де у вас болить? · «унде ве доаре»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'У меня болит спина.', ua: 'У мене болить спина.' },
      correct: 'Mă doare spatele.',
      wrong: ['Mă dor spatele.', 'Te doare spatele.', 'Mă doare capul.'],
    },
    {
      kind: 'pickNative',
      q: 'Unde vă doare?',
      correct: { ru: 'Где у вас болит?', ua: 'Де у вас болить?' },
      wrong: [
        { ru: 'Где у тебя болит?', ua: 'Де у тебе болить?' },
        { ru: 'У вас болит голова?', ua: 'У вас болить голова?' },
        { ru: 'Где вы были?', ua: 'Де ви були?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'mă doare', tr: { ru: 'у меня болит', ua: 'у мене болить' } },
        { ro: 'mă dor', tr: { ru: 'у меня болят', ua: 'у мене болять' } },
        { ro: 'te doare', tr: { ru: 'у тебя болит', ua: 'у тебе болить' } },
        { ro: 'am febră', tr: { ru: 'у меня температура', ua: 'у мене температура' } },
        { ro: 'tuse', tr: { ru: 'кашель', ua: 'кашель' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Mă doare gâtul',
      tr: { ru: 'У меня болит горло', ua: 'У мене болить горло' },
      wrong: ['Mă doare capul', 'Te doare gâtul', 'Mă dor ochii'],
    },
    {
      kind: 'tiles',
      q: { ru: 'У меня болят ноги.', ua: 'У мене болять ноги.' },
      words: ['Mă', 'dor', 'picioarele'],
      extra: ['doare', 'te', 'piciorul'],
      shown: 'Mă dor picioarele.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я простужена.', ua: 'Я застуджена.' },
      correct: 'Sunt răcită.',
      wrong: ['Sunt răcit.', 'Am febră.', 'E răcită.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'У меня температура и кашель.', ua: 'У мене температура і кашель.' },
      words: ['Am', 'febră', 'și', 'tuse'],
      extra: ['sunt', 'doare', 'e'],
      shown: 'Am febră și tuse.',
      also: ['Am tuse și febră'],
    },
    {
      kind: 'type',
      q: { ru: 'У меня болит голова.', ua: 'У мене болить голова.' },
      answers: ['Mă doare capul'],
      shown: 'Mă doare capul.',
    },
    {
      kind: 'type',
      q: { ru: 'У тебя болит горло?', ua: 'У тебе болить горло?' },
      answers: ['Te doare gâtul'],
      shown: 'Te doare gâtul?',
    },
  ],
};
