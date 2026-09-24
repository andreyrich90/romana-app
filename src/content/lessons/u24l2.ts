import type { Lesson } from '../types';

/** B2 · Unit 6 · Lesson 2 — regions and geography: Transilvania, Moldova, Muntenia, Dobrogea, Banat, Carpații, Delta Dunării, Marea Neagră; se află în. */
export const u24l2: Lesson = {
  id: 'u24l2',
  title: { ru: 'Регионы', ua: 'Регіони' },
  words: [
    { ro: 'Carpații', tr: { ru: 'Карпаты', ua: 'Карпати' } },
    { ro: 'Delta Dunării', tr: { ru: 'дельта Дуная', ua: 'дельта Дунаю' } },
    { ro: 'Marea Neagră', tr: { ru: 'Чёрное море', ua: 'Чорне море' } },
    { ro: 'se află în', tr: { ru: 'находится в', ua: 'розташований у' } },
    { ro: 'regiune', tr: { ru: 'регион', ua: 'регіон' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Munții Carpați traversează țara.',
      tr: { ru: 'Карпатские горы пересекают страну.', ua: 'Карпатські гори перетинають країну.' },
      note: {
        ru: 'a traversa — пересекать. Munții Carpați или просто Carpații.',
        ua: 'a traversa — перетинати. Munții Carpați або просто Carpații.',
      },
    },
    {
      kind: 'intro',
      ro: 'Delta Dunării se află în Dobrogea.',
      tr: { ru: 'Дельта Дуная находится в Добрудже.', ua: 'Дельта Дунаю розташована в Добруджі.' },
      note: {
        ru: 'Dunărea — Дунай; Dunării — «Дуная» (родительный). se află — находится.',
        ua: 'Dunărea — Дунай; Dunării — «Дунаю» (родовий). se află — розташований.',
      },
    },
    {
      kind: 'intro',
      ro: 'Transilvania este faimoasă pentru castele.',
      tr: { ru: 'Трансильвания знаменита замками.', ua: 'Трансильванія славиться замками.' },
      note: {
        ru: 'faimos, faimoasă — знаменитый. castel — замок, castele — замки.',
        ua: 'faimos, faimoasă — знаменитий. castel — замок, castele — замки.',
      },
    },
    {
      kind: 'tip',
      title: 'Regiunile României',
      body: {
        ru: [
          'Исторические регионы: **Transilvania** (в центре, за горами), **Moldova** (на северо-востоке, столица — Iași), **Muntenia** (на юге, с Бухарестом), **Dobrogea** (у моря), **Banat** (на западе, Timișoara).',
          'Где: **se află în / la** (находится в / у): Constanța se află la Marea Neagră. **cel mai mare** — самый большой.',
        ],
        ua: [
          'Історичні регіони: **Transilvania** (у центрі, за горами), **Moldova** (на північному сході, столиця — Iași), **Muntenia** (на півдні, з Бухарестом), **Dobrogea** (біля моря), **Banat** (на заході, Timișoara).',
          'Де: **se află în / la** (розташований у / біля): Constanța se află la Marea Neagră. **cel mai mare** — найбільший.',
        ],
      },
      rows: [
        { ro: 'Constanța se află la mare.', tr: { ru: 'Констанца находится у моря.', ua: 'Констанца розташована біля моря.' } },
        { ro: 'Dunărea', tr: { ru: 'Дунай', ua: 'Дунай' } },
        { ro: 'cel mai mare oraș', tr: { ru: 'самый большой город', ua: 'найбільше місто' } },
        { ro: 'în nordul țării', tr: { ru: 'на севере страны', ua: 'на півночі країни' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Дельта Дуная находится в Добрудже.', ua: 'Дельта Дунаю розташована в Добруджі.' },
      correct: 'Delta Dunării se află în Dobrogea.',
      wrong: ['Delta Dunărea se află în Dobrogea.', 'Delta Dunării se află în Banat.', 'Dunărea se află în deltă.'],
    },
    {
      kind: 'pickNative',
      q: 'Iașiul este cel mai mare oraș din Moldova.',
      correct: { ru: 'Яссы — самый большой город Молдовы.', ua: 'Ясси — найбільше місто Молдови.' },
      wrong: [
        { ru: 'Яссы — самый маленький город Молдовы.', ua: 'Ясси — найменше місто Молдови.' },
        { ru: 'Яссы — самый старый город Молдовы.', ua: 'Ясси — найстаріше місто Молдови.' },
        { ru: 'Яссы — столица страны.', ua: 'Ясси — столиця країни.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'munții', tr: { ru: 'горы', ua: 'гори' } },
        { ro: 'Dunărea', tr: { ru: 'Дунай', ua: 'Дунай' } },
        { ro: 'marea', tr: { ru: 'море', ua: 'море' } },
        { ro: 'castele', tr: { ru: 'замки', ua: 'замки' } },
        { ro: 'regiune', tr: { ru: 'регион', ua: 'регіон' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Constanța se află la Marea Neagră',
      tr: { ru: 'Констанца находится на Чёрном море', ua: 'Констанца розташована на Чорному морі' },
      wrong: ['Constanța se află în Transilvania', 'Brașovul se află la Marea Neagră', 'Constanța e un oraș mare'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Трансильвания знаменита замками.', ua: 'Трансильванія славиться замками.' },
      words: ['Transilvania', 'este', 'faimoasă', 'pentru', 'castele'],
      extra: ['faimos', 'castel', 'munți'],
      shown: 'Transilvania este faimoasă pentru castele.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Карпатские горы пересекают страну.', ua: 'Карпатські гори перетинають країну.' },
      correct: 'Munții Carpați traversează țara.',
      wrong: ['Munții Carpați sunt la mare.', 'Dunărea traversează țara.', 'Munții traversează orașul.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'На севере страны холодно.', ua: 'На півночі країни холодно.' },
      words: ['În', 'nordul', 'țării', 'e', 'frig'],
      extra: ['sudul', 'țara', 'cald'],
      shown: 'În nordul țării e frig.',
    },
    {
      kind: 'type',
      q: { ru: 'Чёрное море.', ua: 'Чорне море.' },
      answers: ['Marea Neagră'],
      shown: 'Marea Neagră.',
    },
    {
      kind: 'type',
      q: { ru: 'Находится в Трансильвании.', ua: 'Розташований у Трансильванії.' },
      answers: ['Se află în Transilvania', 'E în Transilvania', 'Este în Transilvania'],
      shown: 'Se află în Transilvania.',
    },
  ],
};
