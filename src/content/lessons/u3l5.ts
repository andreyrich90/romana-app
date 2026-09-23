import type { Lesson } from '../types';

/** Unit 3 · Lesson 5 — review of the unit. No new words: every item mixes lessons 1–4. */
export const u3l5: Lesson = {
  id: 'u3l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Aș vrea o apă plată.', tr: { ru: 'Я бы хотел воду без газа.', ua: 'Я б хотів воду без газу.' } },
    { ro: 'Două ciorbe și pâine.', tr: { ru: 'Две чорбы и хлеб.', ua: 'Дві чорби і хліб.' } },
    { ro: 'Cât costă berea?', tr: { ru: 'Сколько стоит пиво?', ua: 'Скільки коштує пиво?' } },
    { ro: 'E prea scump.', tr: { ru: 'Слишком дорого.', ua: 'Занадто дорого.' } },
    { ro: 'Nota, vă rog.', tr: { ru: 'Счёт, пожалуйста.', ua: 'Рахунок, будь ласка.' } },
  ],
  exercises: [
    {
      kind: 'pickNative',
      q: 'Aș vrea o apă plată.',
      correct: { ru: 'Я бы хотел воду без газа.', ua: 'Я б хотів воду без газу.' },
      wrong: [
        { ru: 'Я бы хотел воду с газом.', ua: 'Я б хотів воду з газом.' },
        { ru: 'Я хочу стакан воды.', ua: 'Я хочу склянку води.' },
        { ru: 'Вы хотели бы воды?', ua: 'Чи хотіли б ви води?' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Две чорбы и хлеб, пожалуйста.', ua: 'Дві чорби і хліб, будь ласка.' },
      words: ['Două', 'ciorbe', 'și', 'pâine', 'vă', 'rog'],
      extra: ['doi', 'ciorbă', 'cu'],
      shown: 'Două ciorbe și pâine, vă rog.',
    },
    {
      kind: 'listen',
      ro: 'Cât costă berea?',
      tr: { ru: 'Сколько стоит пиво?', ua: 'Скільки коштує пиво?' },
      wrong: ['Cât costă ceaiul?', 'Cât costă cafeaua?', 'Cât costă apa?'],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'pâine', tr: { ru: 'хлеб', ua: 'хліб' } },
        { ro: 'pește', tr: { ru: 'рыба', ua: 'риба' } },
        { ro: 'vreau', tr: { ru: 'я хочу', ua: 'я хочу' } },
        { ro: 'ieftin', tr: { ru: 'дешёвый', ua: 'дешевий' } },
        { ro: 'fără', tr: { ru: 'без', ua: 'без' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мы хотим два кофе.', ua: 'Ми хочемо дві кави.' },
      correct: 'Vrem două cafele.',
      wrong: ['Vrem doi cafele.', 'Vor două cafele.', 'Vreau două cafele.'],
    },
    {
      kind: 'type',
      q: { ru: 'Я не ем рыбу.', ua: 'Я не їм риби.' },
      answers: ['Nu mănânc pește', 'Eu nu mănânc pește'],
      shown: 'Nu mănânc pește.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Сколько стоит салат?', ua: 'Скільки коштує салат?' },
      correct: 'Cât costă salata?',
      wrong: ['Cât costă salată?', 'Cât costă salatele?', 'Câți costă salata?'],
    },
    {
      kind: 'listen',
      ro: 'Nota, vă rog',
      tr: { ru: 'Счёт, пожалуйста', ua: 'Рахунок, будь ласка' },
      wrong: ['Meniul, vă rog', 'Apa, vă rog', 'Poftă bună'],
    },
    {
      kind: 'type',
      q: { ru: 'Я бы хотел чай без сахара.', ua: 'Я б хотів чаю без цукру.' },
      answers: [
        'Aș vrea un ceai fără zahăr',
        'Eu aș vrea un ceai fără zahăr',
        'Aș vrea un ceai fără zahăr, vă rog',
        'Aș vrea un ceai fără zahăr, te rog',
      ],
      shown: 'Aș vrea un ceai fără zahăr.',
    },
    {
      kind: 'tiles',
      q: { ru: 'Слишком дорого.', ua: 'Занадто дорого.' },
      words: ['E', 'prea', 'scump'],
      extra: ['ieftin', 'cât', 'costă'],
      shown: 'E prea scump.',
    },
    {
      kind: 'pickNative',
      q: 'două ceaiuri',
      correct: { ru: 'два чая', ua: 'два чаї' },
      wrong: [
        { ru: 'два кофе', ua: 'дві кави' },
        { ru: 'два сока', ua: 'два соки' },
        { ru: 'один чай', ua: 'один чай' },
      ],
    },
    {
      kind: 'type',
      q: { ru: 'Сколько стоит пиво?', ua: 'Скільки коштує пиво?' },
      answers: ['Cât costă berea', 'Cât costă o bere'],
      shown: 'Cât costă berea?',
    },
  ],
};
