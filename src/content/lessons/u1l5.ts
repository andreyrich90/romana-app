import type { Lesson } from '../types';

/** Unit 1 · Lesson 5 — review of the unit. No new words: every item mixes lessons 1–4. */
export const u1l5: Lesson = {
  id: 'u1l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Bună ziua! Mă numesc…', tr: { ru: 'Здравствуйте! Меня зовут…', ua: 'Добрий день! Мене звати…' } },
    { ro: 'Sunt din…', tr: { ru: 'Я из…', ua: 'Я з…' } },
    { ro: 'Nu sunt…', tr: { ru: 'Я не…', ua: 'Я не…' } },
    { ro: 'De unde sunteți?', tr: { ru: 'Откуда вы?', ua: 'Звідки ви?' } },
    { ro: 'trei cafele', tr: { ru: 'три кофе', ua: 'три кави' } },
    { ro: 'Mulțumesc, la revedere!', tr: { ru: 'Спасибо, до свидания!', ua: 'Дякую, до побачення!' } },
  ],
  exercises: [
    {
      kind: 'pickNative',
      q: 'La revedere!',
      correct: { ru: 'До свидания!', ua: 'До побачення!' },
      wrong: [
        { ru: 'Добрый день!', ua: 'Добрий день!' },
        { ru: 'Спасибо!', ua: 'Дякую!' },
        { ru: 'Добрый вечер!', ua: 'Добрий вечір!' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Здравствуйте! Меня зовут Мария.', ua: 'Добрий день! Мене звати Марія.' },
      words: ['Bună', 'ziua', 'Mă', 'numesc', 'Maria'],
      extra: ['seara', 'ești', 'din'],
      shown: 'Bună ziua! Mă numesc Maria.',
    },
    {
      kind: 'listen',
      ro: 'De unde sunteți?',
      tr: { ru: 'Откуда вы?', ua: 'Звідки ви?' },
      wrong: ['De unde ești?', 'Unde sunteți?', 'Sunt din Ucraina.'],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'patru', tr: { ru: 'четыре', ua: 'чотири' } },
        { ro: 'noi', tr: { ru: 'мы', ua: 'ми' } },
        { ro: 'din', tr: { ru: 'из', ua: 'з' } },
        { ro: 'puțin', tr: { ru: 'немного', ua: 'трохи' } },
        { ro: 'te rog', tr: { ru: 'пожалуйста', ua: 'будь ласка' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Она из Румынии.', ua: 'Вона з Румунії.' },
      correct: 'Ea este din România.',
      wrong: ['El este din România.', 'Ea sunt din România.', 'Ea este în România.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я не румын, я украинец.', ua: 'Я не румун, я українець.' },
      words: ['Nu', 'sunt', 'român', 'sunt', 'ucrainean'],
      extra: ['ești', 'româncă', 'din'],
      shown: 'Nu sunt român, sunt ucrainean.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'три кофе', ua: 'три кави' },
      correct: 'trei cafele',
      wrong: ['trei cafea', 'două cafele', 'trei ceai'],
    },
    {
      kind: 'listen',
      ro: 'Bine, mulțumesc',
      tr: { ru: 'Хорошо, спасибо', ua: 'Добре, дякую' },
      wrong: ['Bună, mulțumesc', 'Bine, te rog', 'Nu, mulțumesc'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Как дела?', ua: 'Як справи?' },
      words: ['Ce', 'faci'],
      extra: ['Bine', 'ești', 'unde'],
      shown: 'Ce faci?',
    },
    {
      kind: 'tiles',
      q: { ru: 'Мы из Молдовы.', ua: 'Ми з Молдови.' },
      words: ['Noi', 'suntem', 'din', 'Moldova'],
      extra: ['sunt', 'ești', 'în'],
      shown: 'Noi suntem din Moldova.',
    },
    {
      kind: 'pickNative',
      q: 'zece',
      correct: { ru: 'десять', ua: 'десять' },
      wrong: [
        { ru: 'два', ua: 'два' },
        { ru: 'девять', ua: 'девʼять' },
        { ru: 'семь', ua: 'сім' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Он из Италии.', ua: 'Він з Італії.' },
      words: ['El', 'este', 'din', 'Italia'],
      extra: ['sunt', 'în', 'Ucraina'],
      shown: 'El este din Italia.',
      also: ['Este din Italia'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Спасибо, до свидания!', ua: 'Дякую, до побачення!' },
      words: ['Mulțumesc', 'la', 'revedere'],
      extra: ['Bună', 'ziua', 'rog'],
      shown: 'Mulțumesc, la revedere!',
    },
  ],
};
