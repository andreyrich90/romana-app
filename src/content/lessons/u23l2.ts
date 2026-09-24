import type { Lesson } from '../types';

/** B2 · Unit 5 · Lesson 2 — set expressions: a avea chef de / să, a-și face griji, a se pricepe la, a se descurca. */
export const u23l2: Lesson = {
  id: 'u23l2',
  title: { ru: 'Выражения', ua: 'Вирази' },
  words: [
    { ro: 'n-am chef', tr: { ru: 'мне не хочется', ua: 'мені не хочеться' } },
    { ro: 'nu-ți face griji', tr: { ru: 'не волнуйся', ua: 'не хвилюйся' } },
    { ro: 'mă pricep la', tr: { ru: 'я разбираюсь в', ua: 'я розуміюся на' } },
    { ro: 'mă descurc', tr: { ru: 'я справляюсь', ua: 'я даю раду' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'N-am chef să ies azi.',
      tr: { ru: 'Мне сегодня не хочется выходить.', ua: 'Мені сьогодні не хочеться виходити.' },
      note: {
        ru: 'a avea chef — «иметь настроение»: am chef de o cafea — хочется кофе; n-am chef — неохота.',
        ua: 'a avea chef — «мати настрій»: am chef de o cafea — хочеться кави; n-am chef — неохота.',
      },
    },
    {
      kind: 'intro',
      ro: 'Nu-ți face griji!',
      tr: { ru: 'Не волнуйся!', ua: 'Не хвилюйся!' },
      note: {
        ru: 'a-și face griji — «делать себе заботы», волноваться: îmi fac griji — я волнуюсь.',
        ua: 'a-și face griji — «робити собі клопоти», хвилюватися: îmi fac griji — я хвилююся.',
      },
    },
    {
      kind: 'intro',
      ro: 'Mă pricep la calculatoare.',
      tr: { ru: 'Я разбираюсь в компьютерах.', ua: 'Я розуміюся на комп’ютерах.' },
      note: {
        ru: 'a se pricepe la — разбираться в чём-то. pricep ≈ «причеп».',
        ua: 'a se pricepe la — розумітися на чомусь. pricep ≈ «прічеп».',
      },
    },
    {
      kind: 'tip',
      title: 'Chef, griji',
      body: {
        ru: [
          '**a avea chef de / să** — хотеться (есть настроение): **am chef de plimbare**, **n-am chef să gătesc**.',
          '**îmi fac griji pentru** (волнуюсь за), **nu-ți face griji** (не волнуйся), **nu vă faceți griji** (не волнуйтесь). **mă pricep la** (разбираюсь в), **mă descurc** (справляюсь).',
        ],
        ua: [
          '**a avea chef de / să** — хотітися (є настрій): **am chef de plimbare**, **n-am chef să gătesc**.',
          '**îmi fac griji pentru** (хвилююся за), **nu-ți face griji** (не хвилюйся), **nu vă faceți griji** (не хвилюйтеся). **mă pricep la** (розуміюся на), **mă descurc** (даю раду).',
        ],
      },
      rows: [
        { ro: 'am chef de o cafea', tr: { ru: 'хочется кофе', ua: 'хочеться кави' } },
        { ro: 'își face griji', tr: { ru: 'он(а) волнуется', ua: 'він (вона) хвилюється' } },
        { ro: 'nu vă faceți griji', tr: { ru: 'не волнуйтесь', ua: 'не хвилюйтеся' } },
        { ro: 'mă descurc singur', tr: { ru: 'справлюсь сам', ua: 'дам собі раду сам' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Не волнуйся!', ua: 'Не хвилюйся!' },
      correct: 'Nu-ți face griji!',
      wrong: ['Nu-mi fac griji!', 'Îți faci griji!', 'Nu face!'],
    },
    {
      kind: 'pickNative',
      q: 'Își face griji pentru copii.',
      correct: { ru: 'Она волнуется за детей.', ua: 'Вона хвилюється за дітей.' },
      wrong: [
        { ru: 'Она не волнуется за детей.', ua: 'Вона не хвилюється за дітей.' },
        { ru: 'Дети волнуются за неё.', ua: 'Діти хвилюються за неї.' },
        { ru: 'Она заботится о детях.', ua: 'Вона піклується про дітей.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'chef', tr: { ru: 'настроение, охота', ua: 'настрій, охота' } },
        { ro: 'griji', tr: { ru: 'заботы, волнения', ua: 'клопоти, хвилювання' } },
        { ro: 'mă pricep', tr: { ru: 'разбираюсь', ua: 'розуміюся' } },
        { ro: 'mă descurc', tr: { ru: 'справляюсь', ua: 'даю раду' } },
        { ro: 'singur', tr: { ru: 'сам, один', ua: 'сам, один' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Am chef de o cafea',
      tr: { ru: 'Хочется кофе', ua: 'Хочеться кави' },
      wrong: ['N-am chef de cafea', 'Am băut o cafea', 'Am chef de un ceai'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мне сегодня не хочется выходить.', ua: 'Мені сьогодні не хочеться виходити.' },
      words: ['N-am', 'chef', 'să', 'ies', 'azi'],
      extra: ['am', 'ieși', 'mâine'],
      shown: 'N-am chef să ies azi.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я разбираюсь в машинах.', ua: 'Я розуміюся на машинах.' },
      correct: 'Mă pricep la mașini.',
      wrong: ['Mă pricep de mașini.', 'Te pricepi la mașini.', 'Îmi plac mașinile.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я справлюсь сам.', ua: 'Я дам собі раду сам.' },
      words: ['Mă', 'descurc', 'singur'],
      extra: ['te', 'descurci', 'cu'],
      shown: 'Mă descurc singur.',
    },
    {
      kind: 'type',
      q: { ru: 'Не волнуйтесь!', ua: 'Не хвилюйтеся!' },
      answers: ['Nu vă faceți griji'],
      shown: 'Nu vă faceți griji!',
    },
    {
      kind: 'type',
      q: { ru: 'Мне не хочется.', ua: 'Мені не хочеться.' },
      answers: ['N-am chef', 'Nu am chef'],
      shown: 'N-am chef.',
    },
  ],
};
