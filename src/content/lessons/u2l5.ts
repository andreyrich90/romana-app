import type { Lesson } from '../types';

/** Unit 2 · Lesson 5 — review of the unit. No new words: every item mixes lessons 1–4. */
export const u2l5: Lesson = {
  id: 'u2l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'tatăl meu, mama mea', tr: { ru: 'мой отец, моя мама', ua: 'мій батько, моя мама' } },
    { ro: 'Am o soră și un frate.', tr: { ru: 'У меня есть сестра и брат.', ua: 'У мене є сестра і брат.' } },
    { ro: 'Aveți copii?', tr: { ru: 'У вас есть дети?', ua: 'У вас є діти?' } },
    { ro: 'Câți ani ai?', tr: { ru: 'Сколько тебе лет?', ua: 'Скільки тобі років?' } },
    { ro: 'Am treizeci de ani.', tr: { ru: 'Мне тридцать лет.', ua: 'Мені тридцять років.' } },
  ],
  exercises: [
    {
      kind: 'pickNative',
      q: 'tatăl meu',
      correct: { ru: 'мой отец', ua: 'мій батько' },
      wrong: [
        { ru: 'твой отец', ua: 'твій батько' },
        { ru: 'мой брат', ua: 'мій брат' },
        { ru: 'мой друг', ua: 'мій друг' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'У меня есть сестра и брат.', ua: 'У мене є сестра і брат.' },
      words: ['Am', 'o', 'soră', 'și', 'un', 'frate'],
      extra: ['are', 'mea', 'doi'],
      shown: 'Am o soră și un frate.',
    },
    {
      kind: 'listen',
      ro: 'Câți ani ai?',
      tr: { ru: 'Сколько тебе лет?', ua: 'Скільки тобі років?' },
      wrong: ['Câți ani are?', 'Câți copii ai?', 'Câți frați ai?'],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'bărbatul', tr: { ru: 'мужчина', ua: 'чоловік' } },
        { ro: 'sora', tr: { ru: 'сестра', ua: 'сестра' } },
        { ro: 'avem', tr: { ru: 'у нас есть', ua: 'у нас є' } },
        { ro: 'treizeci', tr: { ru: 'тридцать', ua: 'тридцять' } },
        { ro: 'prietena', tr: { ru: 'подруга', ua: 'подруга' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Моему отцу пятьдесят лет.', ua: 'Моєму батькові пʼятдесят років.' },
      correct: 'Tatăl meu are cincizeci de ani.',
      wrong: [
        'Tatăl meu are cincizeci ani.',
        'Tatăl meu este cincizeci de ani.',
        'Tatăl mea are cincizeci de ani.',
      ],
    },
    {
      kind: 'type',
      q: { ru: 'Она моя подруга.', ua: 'Вона моя подруга.' },
      answers: ['Ea este prietena mea', 'Ea e prietena mea', 'Este prietena mea', 'E prietena mea'],
      shown: 'Ea este prietena mea.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'твоя сестра', ua: 'твоя сестра' },
      correct: 'sora ta',
      wrong: ['sora tău', 'soră ta', 'sora mea'],
    },
    {
      kind: 'listen',
      ro: 'Nu am frați',
      tr: { ru: 'У меня нет братьев', ua: 'У мене немає братів' },
      wrong: ['Am frați', 'Nu are frați', 'Nu am copii'],
    },
    {
      kind: 'type',
      q: { ru: 'У вас есть дети?', ua: 'У вас є діти?' },
      answers: ['Aveți copii', 'Voi aveți copii', 'Dumneavoastră aveți copii'],
      shown: 'Aveți copii?',
    },
    {
      kind: 'tiles',
      q: { ru: 'Мальчику десять лет.', ua: 'Хлопчикові десять років.' },
      words: ['Băiatul', 'are', 'zece', 'ani'],
      extra: ['de', 'este', 'un'],
      shown: 'Băiatul are zece ani.',
    },
    {
      kind: 'pickNative',
      q: 'Avem doi copii.',
      correct: { ru: 'У нас двое детей.', ua: 'У нас двоє дітей.' },
      wrong: [
        { ru: 'У них двое детей.', ua: 'У них двоє дітей.' },
        { ru: 'У нас два брата.', ua: 'У нас два брати.' },
        { ru: 'У вас двое детей?', ua: 'У вас двоє дітей?' },
      ],
    },
    {
      kind: 'type',
      q: { ru: 'Мне тридцать лет.', ua: 'Мені тридцять років.' },
      answers: ['Am treizeci de ani', 'Eu am treizeci de ani', 'Am 30 de ani', 'Eu am 30 de ani'],
      shown: 'Am treizeci de ani.',
    },
  ],
};
