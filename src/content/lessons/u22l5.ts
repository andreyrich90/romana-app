import type { Lesson } from '../types';

/** B2 · Unit 4 · Lesson 5 — review of news vocabulary: sources, figures, politics, weather and environment. No new grammar. */
export const u22l5: Lesson = {
  id: 'u22l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Potrivit presei…', tr: { ru: 'По данным прессы…', ua: 'За даними преси…' } },
    { ro: 'Prețurile au crescut cu zece la sută.', tr: { ru: 'Цены выросли на десять процентов.', ua: 'Ціни зросли на десять відсотків.' } },
    { ro: 'Alegerile au loc duminică.', tr: { ru: 'Выборы проходят в воскресенье.', ua: 'Вибори відбуваються в неділю.' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Язык новостей',
      body: {
        ru: [
          'Источник: **potrivit / conform** + родительный. Чужие слова: **a declarat că**.',
          'Цифры: **a crescut / a scăzut cu … la sută**. Безлично: **se estimează că**.',
        ],
        ua: [
          'Джерело: **potrivit / conform** + родовий. Чужі слова: **a declarat că**.',
          'Цифри: **a crescut / a scăzut cu … la sută**. Безособово: **se estimează că**.',
        ],
      },
      rows: [
        { ro: 'potrivit presei', tr: { ru: 'по данным прессы', ua: 'за даними преси' } },
        { ro: 'a declarat că', tr: { ru: 'заявил, что', ua: 'заявив, що' } },
        { ro: 'cu zece la sută', tr: { ru: 'на десять процентов', ua: 'на десять відсотків' } },
        { ro: 'se estimează că', tr: { ru: 'по оценкам', ua: 'за оцінками' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'По данным полиции, пострадавших нет.', ua: 'За даними поліції, постраждалих немає.' },
      correct: 'Potrivit poliției, nu există victime.',
      wrong: ['Potrivit poliția, nu există victime.', 'Poliția, nu există victime.', 'Potrivit poliției, există victime.'],
    },
    {
      kind: 'pickNative',
      q: 'Primarul a declarat că apa trebuie economisită.',
      correct: { ru: 'Мэр заявил, что воду нужно экономить.', ua: 'Мер заявив, що воду треба економити.' },
      wrong: [
        { ru: 'Мэр заявил, что вода подешевела.', ua: 'Мер заявив, що вода подешевшала.' },
        { ru: 'Министр заявил, что воду нужно экономить.', ua: 'Міністр заявив, що воду треба економити.' },
        { ru: 'Мэр сэкономил воду.', ua: 'Мер заощадив воду.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'știrile', tr: { ru: 'новости', ua: 'новини' } },
        { ro: 'alegerile', tr: { ru: 'выборы', ua: 'вибори' } },
        { ro: 'prețurile', tr: { ru: 'цены', ua: 'ціни' } },
        { ro: 'seceta', tr: { ru: 'засуха', ua: 'посуха' } },
        { ro: 'guvernul', tr: { ru: 'правительство', ua: 'уряд' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Șomajul a scăzut cu doi la sută',
      tr: { ru: 'Безработица снизилась на два процента', ua: 'Безробіття знизилося на два відсотки' },
      wrong: ['Șomajul a crescut cu doi la sută', 'Salariul a scăzut cu doi la sută', 'Șomajul a scăzut cu zece la sută'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Выборы проходят в воскресенье.', ua: 'Вибори відбуваються в неділю.' },
      words: ['Alegerile', 'au', 'loc', 'duminică'],
      extra: ['are', 'luni', 'votez'],
      shown: 'Alegerile au loc duminică.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Бензин подешевел на пять процентов.', ua: 'Бензин подешевшав на п’ять відсотків.' },
      correct: 'Benzina s-a ieftinit cu cinci la sută.',
      wrong: ['Benzina s-a scumpit cu cinci la sută.', 'Benzina s-a ieftinit la cinci la sută.', 'Benzina este ieftină.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Правительство заявило, что цены снизятся.', ua: 'Уряд заявив, що ціни знизяться.' },
      words: ['Guvernul', 'a', 'declarat', 'că', 'prețurile', 'vor', 'scădea'],
      extra: ['crește', 'au', 'scăzut'],
      shown: 'Guvernul a declarat că prețurile vor scădea.',
    },
    {
      kind: 'type',
      q: { ru: 'По данным прессы.', ua: 'За даними преси.' },
      answers: ['Potrivit presei', 'Conform presei'],
      shown: 'Potrivit presei.',
    },
    {
      kind: 'type',
      q: { ru: 'Цены снизились.', ua: 'Ціни знизилися.' },
      answers: ['Prețurile au scăzut', 'Prețurile s-au redus'],
      shown: 'Prețurile au scăzut.',
    },
    {
      kind: 'type',
      q: { ru: 'Загрязнение воздуха.', ua: 'Забруднення повітря.' },
      answers: ['Poluarea aerului'],
      shown: 'Poluarea aerului.',
    },
  ],
};
