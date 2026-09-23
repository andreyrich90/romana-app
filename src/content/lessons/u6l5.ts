import type { Lesson } from '../types';

/** Unit 6 · Lesson 5 — review of the whole A1 level: every item draws on a different unit. */
export const u6l5: Lesson = {
  id: 'u6l5',
  title: { ru: 'Итог A1', ua: 'Підсумок A1' },
  words: [
    { ro: 'Mă numesc Ana, sunt din Ucraina.', tr: { ru: 'Меня зовут Анна, я из Украины.', ua: 'Мене звати Анна, я з України.' } },
    { ro: 'Am doi frați și o soră.', tr: { ru: 'У меня два брата и сестра.', ua: 'У мене два брати і сестра.' } },
    { ro: 'Aș vrea o cafea fără zahăr.', tr: { ru: 'Я бы хотел кофе без сахара.', ua: 'Я б хотів каву без цукру.' } },
    { ro: 'Unde este gara?', tr: { ru: 'Где вокзал?', ua: 'Де вокзал?' } },
    { ro: 'Avem un apartament mare.', tr: { ru: 'У нас большая квартира.', ua: 'У нас велика квартира.' } },
    { ro: 'Îmi place România.', tr: { ru: 'Мне нравится Румыния.', ua: 'Мені подобається Румунія.' } },
  ],
  exercises: [
    {
      kind: 'pickNative',
      q: 'Bună ziua! Ce doriți?',
      correct: { ru: 'Здравствуйте! Что желаете?', ua: 'Добрий день! Що бажаєте?' },
      wrong: [
        { ru: 'Здравствуйте! Как дела?', ua: 'Добрий день! Як справи?' },
        { ru: 'Добрый вечер! Что желаете?', ua: 'Добрий вечір! Що бажаєте?' },
        { ru: 'Здравствуйте! Откуда вы?', ua: 'Добрий день! Звідки ви?' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Меня зовут Анна, я из Украины.', ua: 'Мене звати Анна, я з України.' },
      words: ['Mă', 'numesc', 'Ana', 'sunt', 'din', 'Ucraina'],
      extra: ['în', 'ești', 'România'],
      shown: 'Mă numesc Ana, sunt din Ucraina.',
    },
    {
      kind: 'listen',
      ro: 'Am doi frați și o soră',
      tr: { ru: 'У меня два брата и сестра', ua: 'У мене два брати і сестра' },
      wrong: ['Are doi frați și o soră', 'Am trei frați și o soră', 'Am doi frați și două surori'],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'gara', tr: { ru: 'вокзал', ua: 'вокзал' } },
        { ro: 'casa', tr: { ru: 'дом', ua: 'будинок' } },
        { ro: 'apa', tr: { ru: 'вода', ua: 'вода' } },
        { ro: 'sora', tr: { ru: 'сестра', ua: 'сестра' } },
        { ro: 'piața', tr: { ru: 'рынок', ua: 'ринок' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я бы хотел кофе без сахара.', ua: 'Я б хотів каву без цукру.' },
      correct: 'Aș vrea o cafea fără zahăr.',
      wrong: ['Aș vrea o cafea cu zahăr.', 'Aș vrea un cafea fără zahăr.', 'Aș vrea o cafea fără lapte.'],
    },
    {
      kind: 'type',
      q: { ru: 'Сколько это стоит?', ua: 'Скільки це коштує?' },
      answers: ['Cât costă'],
      shown: 'Cât costă?',
    },
    {
      kind: 'pickRo',
      q: { ru: 'У нас большая квартира.', ua: 'У нас велика квартира.' },
      correct: 'Avem un apartament mare.',
      wrong: ['Avem o apartament mare.', 'Am un apartament mare.', 'Avem un apartament mic.'],
    },
    {
      kind: 'listen',
      ro: 'Mergeți la stânga',
      tr: { ru: 'Поверните налево', ua: 'Поверніть ліворуч' },
      wrong: ['Mergeți la dreapta', 'Merg la stânga', 'Este pe stânga'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мне нравится Румыния.', ua: 'Мені подобається Румунія.' },
      words: ['Îmi', 'place', 'România'],
      extra: ['plac', 'din', 'îți'],
      shown: 'Îmi place România.',
    },
    {
      kind: 'pickNative',
      q: 'Câți ani ai?',
      correct: { ru: 'Сколько тебе лет?', ua: 'Скільки тобі років?' },
      wrong: [
        { ru: 'Сколько у тебя детей?', ua: 'Скільки в тебе дітей?' },
        { ru: 'Сколько это стоит?', ua: 'Скільки це коштує?' },
        { ru: 'Откуда ты?', ua: 'Звідки ти?' },
      ],
    },
    {
      kind: 'type',
      q: { ru: 'Где вокзал?', ua: 'Де вокзал?' },
      answers: ['Unde este gara', 'Unde e gara'],
      shown: 'Unde este gara?',
    },
    {
      kind: 'type',
      q: { ru: 'Я живу в Румынии.', ua: 'Я живу в Румунії.' },
      answers: ['Locuiesc în România', 'Eu locuiesc în România'],
      shown: 'Locuiesc în România.',
    },
  ],
};
