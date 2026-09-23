import type { Lesson } from '../types';

/** Unit 4 · Lesson 4 — shopping: caut, cumpăr, «Aveți…?», no cases on the object, «Doar mă uit». */
export const u4l4: Lesson = {
  id: 'u4l4',
  title: { ru: 'Магазины', ua: 'Магазини' },
  words: [
    { ro: 'magazinul, piața', tr: { ru: 'магазин, рынок', ua: 'магазин, ринок' } },
    { ro: 'Caut…', tr: { ru: 'Я ищу…', ua: 'Я шукаю…' } },
    { ro: 'Cumpăr…', tr: { ru: 'Я покупаю…', ua: 'Я купую…' } },
    { ro: 'Aveți…?', tr: { ru: 'У вас есть…?', ua: 'У вас є…?' } },
    { ro: 'mere, roșii, cartofi', tr: { ru: 'яблоки, помидоры, картофель', ua: 'яблука, помідори, картопля' } },
    { ro: 'Doar mă uit.', tr: { ru: 'Я просто смотрю.', ua: 'Я просто дивлюся.' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'magazinul, piața',
      tr: { ru: 'магазин, рынок', ua: 'магазин, ринок' },
      note: {
        ru: 'piață → piața ≈ «пяца». На piața — свежие овощи и фрукты.',
        ua: 'piață → piața ≈ «пяца». На piața — свіжі овочі й фрукти.',
      },
    },
    {
      kind: 'intro',
      ro: 'Caut o farmacie.',
      tr: { ru: 'Я ищу аптеку.', ua: 'Я шукаю аптеку.' },
      note: {
        ru: 'caut ≈ «каут» — «ищу». Заметьте: «аптека → ищу аптеку», а по-румынски farmacie не меняется.',
        ua: 'caut ≈ «каут» — «шукаю». Зверніть увагу: «аптека → шукаю аптеку», а румунською farmacie не змінюється.',
      },
    },
    {
      kind: 'intro',
      ro: 'Aveți pâine?',
      tr: { ru: 'У вас есть хлеб?', ua: 'У вас є хліб?' },
      note: {
        ru: 'aveți — «у вас есть» из a avea (раздел 2). Ответ: Da, avem. — Да, есть. / Nu, nu avem. — Нет.',
        ua: 'aveți — «у вас є» з a avea (розділ 2). Відповідь: Da, avem. — Так, є. / Nu, nu avem. — Ні.',
      },
    },
    {
      kind: 'intro',
      ro: 'Doar mă uit.',
      tr: { ru: 'Я просто смотрю.', ua: 'Я просто дивлюся.' },
      note: {
        ru: 'Продавец спросит: Vă pot ajuta? — Вам помочь? Если не нужно: Mulțumesc, doar mă uit.',
        ua: 'Продавець спитає: Vă pot ajuta? — Вам допомогти? Якщо не треба: Mulțumesc, doar mă uit.',
      },
    },
    {
      kind: 'tip',
      title: 'Caut o farmacie',
      body: {
        ru: [
          'В румынском **нет падежей** для того, что ищут или покупают: o bancă → caut o **bancă**, pâine → cumpăr **pâine**. Слово остаётся как в словаре.',
          'a cumpăra — покупать: cumpăr, cumperi, cumpără, **cumpărăm** (мы покупаем).',
        ],
        ua: [
          'У румунській **немає відмінків** для того, що шукають чи купують: o bancă → caut o **bancă**, pâine → cumpăr **pâine**. Слово лишається як у словнику.',
          'a cumpăra — купувати: cumpăr, cumperi, cumpără, **cumpărăm** (ми купуємо).',
        ],
      },
      rows: [
        { ro: 'Caut un magazin.', tr: { ru: 'Я ищу магазин. · «каут ун магазин»', ua: 'Я шукаю магазин. · «каут ун магазин»' } },
        { ro: 'Aveți lapte?', tr: { ru: 'У вас есть молоко? · «авець лапте»', ua: 'У вас є молоко? · «авець лапте»' } },
        { ro: 'Cumpăr pâine.', tr: { ru: 'Я покупаю хлеб. · «кумпэр пыйне»', ua: 'Я купую хліб. · «кумпер пийне»' } },
        { ro: 'Doar mă uit.', tr: { ru: 'Я просто смотрю. · «доар мэ уйт»', ua: 'Я просто дивлюся. · «доар ме уйт»' } },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'mere', tr: { ru: 'яблоки', ua: 'яблука' } },
        { ro: 'roșii', tr: { ru: 'помидоры', ua: 'помідори' } },
        { ro: 'cartofi', tr: { ru: 'картофель', ua: 'картопля' } },
        { ro: 'pâine', tr: { ru: 'хлеб', ua: 'хліб' } },
        { ro: 'lapte', tr: { ru: 'молоко', ua: 'молоко' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'У вас есть помидоры?', ua: 'У вас є помідори?' },
      correct: 'Aveți roșii?',
      wrong: ['Avem roșii?', 'Aveți roșie?', 'Ai roșii?'],
    },
    {
      kind: 'listen',
      ro: 'Nu, nu avem',
      tr: { ru: 'Нет, у нас нет', ua: 'Ні, у нас немає' },
      wrong: ['Da, avem', 'Nu, nu am', 'Nu avem lapte'],
    },
    {
      kind: 'pickNative',
      q: 'Cumpăr mere și pâine.',
      correct: { ru: 'Я покупаю яблоки и хлеб.', ua: 'Я купую яблука і хліб.' },
      wrong: [
        { ru: 'Я ищу яблоки и хлеб.', ua: 'Я шукаю яблука і хліб.' },
        { ru: 'У вас есть яблоки?', ua: 'У вас є яблука?' },
        { ru: 'Я покупаю картофель и хлеб.', ua: 'Я купую картоплю і хліб.' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я ищу рынок.', ua: 'Я шукаю ринок.' },
      words: ['Caut', 'piața'],
      extra: ['cumpăr', 'magazinul', 'avem'],
      shown: 'Caut piața.',
    },
    {
      kind: 'tiles',
      q: { ru: 'Мы покупаем молоко.', ua: 'Ми купуємо молоко.' },
      words: ['Noi', 'cumpărăm', 'lapte'],
      extra: ['cumpăr', 'caut', 'pâine'],
      shown: 'Noi cumpărăm lapte.',
      also: ['Cumpărăm lapte'],
    },
    {
      kind: 'type',
      q: { ru: 'У вас есть хлеб?', ua: 'У вас є хліб?' },
      answers: ['Aveți pâine', 'Dumneavoastră aveți pâine'],
      shown: 'Aveți pâine?',
    },
    {
      kind: 'type',
      q: { ru: 'Я просто смотрю.', ua: 'Я просто дивлюся.' },
      answers: ['Doar mă uit', 'Mă uit doar', 'Mulțumesc, doar mă uit'],
      shown: 'Doar mă uit.',
    },
  ],
};
