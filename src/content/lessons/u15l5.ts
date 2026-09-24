import type { Lesson } from '../types';

/** B1 · Unit 3 · Lesson 5 — review of work vocabulary, ca / de + time and the impersonal se. No new grammar. */
export const u15l5: Lesson = {
  id: 'u15l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Lucrez ca bucătar de doi ani.', tr: { ru: 'Я работаю поваром уже два года.', ua: 'Я працюю кухарем уже два роки.' } },
    { ro: 'Se caută șofer.', tr: { ru: 'Требуется водитель.', ua: 'Потрібен водій.' } },
    { ro: 'Care e salariul?', tr: { ru: 'Какая зарплата?', ua: 'Яка зарплата?' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'La muncă',
      body: {
        ru: [
          'Кем — **ca**: lucrez ca șofer. Как долго — **de**: lucrez aici de un an.',
          'Безличное **se**: se vorbește, se caută, se închide.',
        ],
        ua: [
          'Ким — **ca**: lucrez ca șofer. Як довго — **de**: lucrez aici de un an.',
          'Безособове **se**: se vorbește, se caută, se închide.',
        ],
      },
      rows: [
        { ro: 'Lucrez ca bucătar.', tr: { ru: 'Я работаю поваром.', ua: 'Я працюю кухарем.' } },
        { ro: 'Lucrez aici de un an.', tr: { ru: 'Я работаю здесь уже год.', ua: 'Я працюю тут уже рік.' } },
        { ro: 'Se caută șofer.', tr: { ru: 'Требуется водитель.', ua: 'Потрібен водій.' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я работаю строителем уже пять лет.', ua: 'Я працюю будівельником уже п’ять років.' },
      correct: 'Lucrez ca constructor de cinci ani.',
      wrong: ['Am lucrat ca constructor cinci ani.', 'Lucrez ca constructor în cinci ani.', 'Lucram ca constructor de cinci ani.'],
    },
    {
      kind: 'pickNative',
      q: 'Se caută asistentă medicală.',
      correct: { ru: 'Требуется медсестра.', ua: 'Потрібна медсестра.' },
      wrong: [
        { ru: 'Медсестра ищет работу.', ua: 'Медсестра шукає роботу.' },
        { ru: 'Я ищу медсестру.', ua: 'Я шукаю медсестру.' },
        { ru: 'Требуется врач.', ua: 'Потрібен лікар.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'meserie', tr: { ru: 'профессия', ua: 'професія' } },
        { ro: 'interviu', tr: { ru: 'собеседование', ua: 'співбесіда' } },
        { ro: 'salariul', tr: { ru: 'зарплата', ua: 'зарплата' } },
        { ro: 'concediu', tr: { ru: 'отпуск', ua: 'відпустка' } },
        { ro: 'se caută', tr: { ru: 'требуется', ua: 'потрібен' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Când puteți începe',
      tr: { ru: 'Когда вы можете начать', ua: 'Коли ви можете почати' },
      wrong: ['Când ați început', 'Când pot începe', 'Unde puteți începe'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Магазин открывается в восемь.', ua: 'Магазин відчиняється о восьмій.' },
      words: ['Magazinul', 'se', 'deschide', 'la', 'opt'],
      extra: ['deschid', 'închide', 'nouă'],
      shown: 'Magazinul se deschide la opt.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'У меня два года опыта.', ua: 'У мене два роки досвіду.' },
      correct: 'Am experiență de doi ani.',
      wrong: ['Am experiență de două ani.', 'Am doi ani.', 'Am avut experiență doi ani.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Какая зарплата в месяц?', ua: 'Яка зарплата на місяць?' },
      words: ['Cât', 'e', 'salariul', 'pe', 'lună'],
      extra: ['an', 'care', 'programul'],
      shown: 'Cât e salariul pe lună?',
    },
    {
      kind: 'type',
      q: { ru: 'Я ищу работу.', ua: 'Я шукаю роботу.' },
      answers: ['Caut un loc de muncă', 'Caut de lucru', 'Caut o slujbă', 'Caut muncă'],
      shown: 'Caut un loc de muncă.',
    },
    {
      kind: 'type',
      q: { ru: 'Как это сказать по-румынски?', ua: 'Як це сказати румунською?' },
      answers: ['Cum se spune asta în română', 'Cum se spune asta în limba română', 'Cum se spune asta pe românește'],
      shown: 'Cum se spune asta în română?',
    },
    {
      kind: 'type',
      q: { ru: 'Я работаю здесь уже год.', ua: 'Я працюю тут уже рік.' },
      answers: ['Lucrez aici de un an', 'Lucrez aici de un an de zile'],
      shown: 'Lucrez aici de un an.',
    },
  ],
};
