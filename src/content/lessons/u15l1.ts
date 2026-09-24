import type { Lesson } from '../types';

/** B1 · Unit 3 · Lesson 1 — jobs and experience: lucrez ca…, am experiență de…, de + time with the present, un loc de muncă. */
export const u15l1: Lesson = {
  id: 'u15l1',
  title: { ru: 'Профессия и опыт', ua: 'Професія і досвід' },
  words: [
    { ro: 'Lucrez ca șofer.', tr: { ru: 'Я работаю водителем.', ua: 'Я працюю водієм.' } },
    { ro: 'meserie', tr: { ru: 'профессия', ua: 'професія' } },
    { ro: 'experiență', tr: { ru: 'опыт', ua: 'досвід' } },
    { ro: 'de trei ani', tr: { ru: 'уже три года', ua: 'уже три роки' } },
    { ro: 'un loc de muncă', tr: { ru: 'работа, рабочее место', ua: 'робота, робоче місце' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Lucrez ca șofer.',
      tr: { ru: 'Я работаю водителем.', ua: 'Я працюю водієм.' },
      note: {
        ru: '«Кем» — ca + профессия без артикля: lucrez ca bucătar, ca vânzătoare. șofer ≈ «шофер».',
        ua: '«Ким» — ca + професія без артикля: lucrez ca bucătar, ca vânzătoare. șofer ≈ «шофер».',
      },
    },
    {
      kind: 'intro',
      ro: 'Am experiență de trei ani.',
      tr: { ru: 'У меня три года опыта.', ua: 'У мене три роки досвіду.' },
      note: {
        ru: 'experiență ≈ «експериенцэ» — опыт.',
        ua: 'experiență ≈ «експерієнце» — досвід.',
      },
    },
    {
      kind: 'intro',
      ro: 'Lucrez aici de doi ani.',
      tr: { ru: 'Я работаю здесь уже два года.', ua: 'Я працюю тут уже два роки.' },
      note: {
        ru: 'de + срок с настоящим временем — «уже столько-то и продолжаю», как в русском «работаю уже два года».',
        ua: 'de + строк із теперішнім часом — «уже стільки-то й досі», як в українській «працюю вже два роки».',
      },
    },
    {
      kind: 'tip',
      title: 'Lucrez ca…',
      body: {
        ru: [
          '**Ca** + профессия без артикля: **lucrez ca șofer** — работаю водителем.',
          '**De + срок** с настоящим временем: **locuiesc aici de un an** — живу здесь уже год.',
          'Женские формы: **vânzător → vânzătoare**, **bucătar → bucătăreasă**, **asistent → asistentă**.',
        ],
        ua: [
          '**Ca** + професія без артикля: **lucrez ca șofer** — працюю водієм.',
          '**De + строк** із теперішнім часом: **locuiesc aici de un an** — живу тут уже рік.',
          'Жіночі форми: **vânzător → vânzătoare**, **bucătar → bucătăreasă**, **asistent → asistentă**.',
        ],
      },
      rows: [
        { ro: 'șofer', tr: { ru: 'водитель', ua: 'водій' } },
        { ro: 'bucătar', tr: { ru: 'повар', ua: 'кухар' } },
        { ro: 'vânzătoare', tr: { ru: 'продавщица', ua: 'продавчиня' } },
        { ro: 'asistentă medicală', tr: { ru: 'медсестра', ua: 'медсестра' } },
        { ro: 'constructor', tr: { ru: 'строитель', ua: 'будівельник' } },
        { ro: 'un loc de muncă', tr: { ru: 'работа (место)', ua: 'робота (місце)' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я работаю поваром.', ua: 'Я працюю кухарем.' },
      correct: 'Lucrez ca bucătar.',
      wrong: ['Lucrez la bucătar.', 'Lucrez ca bucătarul.', 'Am lucrat ca bucătar.'],
    },
    {
      kind: 'pickNative',
      q: 'Ce meserie aveți?',
      correct: { ru: 'Какая у вас профессия?', ua: 'Яка у вас професія?' },
      wrong: [
        { ru: 'Где вы работаете?', ua: 'Де ви працюєте?' },
        { ru: 'Сколько вы зарабатываете?', ua: 'Скільки ви заробляєте?' },
        { ru: 'Какой у вас опыт?', ua: 'Який у вас досвід?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'șofer', tr: { ru: 'водитель', ua: 'водій' } },
        { ro: 'bucătar', tr: { ru: 'повар', ua: 'кухар' } },
        { ro: 'vânzătoare', tr: { ru: 'продавщица', ua: 'продавчиня' } },
        { ro: 'meserie', tr: { ru: 'профессия', ua: 'професія' } },
        { ro: 'experiență', tr: { ru: 'опыт', ua: 'досвід' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Lucrez aici de un an',
      tr: { ru: 'Я работаю здесь уже год', ua: 'Я працюю тут уже рік' },
      wrong: ['Am lucrat aici un an', 'Lucrez aici de doi ani', 'Locuiesc aici de un an'],
    },
    {
      kind: 'tiles',
      q: { ru: 'У меня пять лет опыта.', ua: 'У мене п’ять років досвіду.' },
      words: ['Am', 'experiență', 'de', 'cinci', 'ani'],
      extra: ['doi', 'experiența', 'an'],
      shown: 'Am experiență de cinci ani.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я живу здесь уже три года.', ua: 'Я живу тут уже три роки.' },
      correct: 'Locuiesc aici de trei ani.',
      wrong: ['Am locuit aici trei ani.', 'Locuiesc aici în trei ani.', 'Locuiam aici de trei ani.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Она работает продавщицей.', ua: 'Вона працює продавчинею.' },
      words: ['Lucrează', 'ca', 'vânzătoare'],
      extra: ['vânzător', 'lucrez', 'la'],
      shown: 'Lucrează ca vânzătoare.',
    },
    {
      kind: 'type',
      q: { ru: 'Я работаю водителем.', ua: 'Я працюю водієм.' },
      answers: ['Lucrez ca șofer', 'Eu lucrez ca șofer', 'Sunt șofer'],
      shown: 'Lucrez ca șofer.',
    },
    {
      kind: 'type',
      q: { ru: 'Я ищу работу.', ua: 'Я шукаю роботу.' },
      answers: ['Caut un loc de muncă', 'Caut de lucru', 'Caut o slujbă', 'Caut muncă'],
      shown: 'Caut un loc de muncă.',
    },
  ],
};
