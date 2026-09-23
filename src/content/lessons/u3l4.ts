import type { Lesson } from '../types';

/** Unit 3 · Lesson 4 — prices: «Cât costă?», lei and bani, scump / ieftin, paying by card. */
export const u3l4: Lesson = {
  id: 'u3l4',
  title: { ru: 'Сколько стоит?', ua: 'Скільки коштує?' },
  words: [
    { ro: 'Cât costă?', tr: { ru: 'Сколько стоит?', ua: 'Скільки коштує?' } },
    { ro: 'un leu, zece lei', tr: { ru: 'один лей, десять леев', ua: 'один лей, десять леїв' } },
    { ro: 'cafeaua, ceaiul, apa', tr: { ru: 'кофе, чай, вода (эти)', ua: 'кава, чай, вода (ці)' } },
    { ro: 'scump, ieftin', tr: { ru: 'дорогой, дешёвый', ua: 'дорогий, дешевий' } },
    { ro: 'prea', tr: { ru: 'слишком', ua: 'занадто' } },
    { ro: 'Pot plăti cu cardul?', tr: { ru: 'Можно оплатить картой?', ua: 'Можна оплатити карткою?' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Cât costă?',
      tr: { ru: 'Сколько стоит?', ua: 'Скільки коштує?' },
      note: {
        ru: 'cât ≈ «кыт». costă — и «стоит», и «стоят»: одна форма для одной вещи и для многих.',
        ua: 'cât ≈ «кит». costă — і «коштує», і «коштують»: одна форма для однієї речі й для багатьох.',
      },
    },
    {
      kind: 'intro',
      ro: 'un leu, zece lei',
      tr: { ru: 'один лей, десять леев', ua: 'один лей, десять леїв' },
      note: {
        ru: 'leu — румынская валюта (и «лев»). 1 leu = 100 bani; bani — ещё и просто «деньги».',
        ua: 'leu — румунська валюта (і «лев»). 1 leu = 100 bani; bani — ще й просто «гроші».',
      },
    },
    {
      kind: 'tip',
      title: 'Cât costă cafeaua?',
      body: {
        ru: [
          'Спрашивая о конкретной вещи, ставят артикль: **ceaiul**, **apa**, **berea**. У cafea он особенный: **cafeaua**.',
          'Цены подчиняются правилу из раздела 2: до 19 — без de (cinci lei), с 20 — с **de** (douăzeci **de** lei).',
        ],
        ua: [
          'Питаючи про конкретну річ, ставлять артикль: **ceaiul**, **apa**, **berea**. У cafea він особливий: **cafeaua**.',
          'Ціни підкоряються правилу з розділу 2: до 19 — без de (cinci lei), від 20 — з **de** (douăzeci **de** lei).',
        ],
      },
      rows: [
        { ro: 'Cât costă cafeaua?', tr: { ru: 'Сколько стоит кофе?', ua: 'Скільки коштує кава?' } },
        { ro: 'Cât costă ceaiul?', tr: { ru: 'Сколько стоит чай?', ua: 'Скільки коштує чай?' } },
        { ro: 'Costă cinci lei.', tr: { ru: 'Стоит пять леев.', ua: 'Коштує пʼять леїв.' } },
        { ro: 'Costă douăzeci de lei.', tr: { ru: 'Стоит двадцать леев.', ua: 'Коштує двадцять леїв.' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Сколько стоит кофе?', ua: 'Скільки коштує кава?' },
      correct: 'Cât costă cafeaua?',
      wrong: ['Cât costă cafea?', 'Cât costă cafeua?', 'Câți costă cafeaua?'],
    },
    {
      kind: 'listen',
      ro: 'Costă douăzeci de lei',
      tr: { ru: 'Стоит двадцать леев', ua: 'Коштує двадцять леїв' },
      wrong: ['Costă doisprezece lei', 'Costă douăzeci și doi de lei', 'Costă zece lei'],
    },
    {
      kind: 'intro',
      ro: 'E scump. E ieftin.',
      tr: { ru: 'Дорого. Дёшево.', ua: 'Дорого. Дешево.' },
      note: {
        ru: 'ieftin ≈ «йефтин». prea — «слишком»: E prea scump — слишком дорого.',
        ua: 'ieftin ≈ «йефтін». prea — «занадто»: E prea scump — занадто дорого.',
      },
    },
    {
      kind: 'pickNative',
      q: 'E prea scump.',
      correct: { ru: 'Слишком дорого.', ua: 'Занадто дорого.' },
      wrong: [
        { ru: 'Это дёшево.', ua: 'Це дешево.' },
        { ru: 'Сколько стоит?', ua: 'Скільки коштує?' },
        { ru: 'Не очень дорого.', ua: 'Не дуже дорого.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'cât', tr: { ru: 'сколько', ua: 'скільки' } },
        { ro: 'costă', tr: { ru: 'стоит', ua: 'коштує' } },
        { ro: 'scump', tr: { ru: 'дорогой', ua: 'дорогий' } },
        { ro: 'ieftin', tr: { ru: 'дешёвый', ua: 'дешевий' } },
        { ro: 'nota', tr: { ru: 'счёт', ua: 'рахунок' } },
      ],
    },
    {
      kind: 'intro',
      ro: 'Pot plăti cu cardul?',
      tr: { ru: 'Можно оплатить картой?', ua: 'Можна оплатити карткою?' },
      note: {
        ru: 'Дословно «могу заплатить с картой?». plăti ≈ «плэти». Наличными — cash или numerar.',
        ua: 'Дослівно «можу заплатити з карткою?». plăti ≈ «плети». Готівкою — cash або numerar.',
      },
    },
    {
      kind: 'tiles',
      q: { ru: 'Сколько стоит чай?', ua: 'Скільки коштує чай?' },
      words: ['Cât', 'costă', 'ceaiul'],
      extra: ['ceai', 'cafeaua', 'câți'],
      shown: 'Cât costă ceaiul?',
    },
    {
      kind: 'pickRo',
      q: { ru: 'тридцать леев', ua: 'тридцять леїв' },
      correct: 'treizeci de lei',
      wrong: ['treizeci lei', 'treizeci de leu', 'treisprezece lei'],
    },
    {
      kind: 'type',
      q: { ru: 'Стоит пятнадцать леев.', ua: 'Коштує пʼятнадцять леїв.' },
      answers: ['Costă cincisprezece lei', 'Costă 15 lei'],
      shown: 'Costă cincisprezece lei.',
    },
    {
      kind: 'type',
      q: { ru: 'Можно оплатить картой?', ua: 'Можна оплатити карткою?' },
      answers: ['Pot plăti cu cardul', 'Pot să plătesc cu cardul'],
      shown: 'Pot plăti cu cardul?',
    },
  ],
};
