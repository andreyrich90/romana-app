import type { Lesson } from '../types';

/** B1 · Unit 3 · Lesson 3 — pay and hours: salariul, pe lună, o mie / mii de lei, programul, concediu, normă întreagă, în ture. */
export const u15l3: Lesson = {
  id: 'u15l3',
  title: { ru: 'Условия', ua: 'Умови' },
  words: [
    { ro: 'salariul', tr: { ru: 'зарплата', ua: 'зарплата' } },
    { ro: 'programul', tr: { ru: 'график работы', ua: 'графік роботи' } },
    { ro: 'concediu', tr: { ru: 'отпуск', ua: 'відпустка' } },
    { ro: 'pe lună', tr: { ru: 'в месяц', ua: 'на місяць' } },
    { ro: 'o mie · mii', tr: { ru: 'тысяча · тысячи', ua: 'тисяча · тисячі' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Salariul e trei mii de lei pe lună.',
      tr: { ru: 'Зарплата — три тысячи лей в месяц.', ua: 'Зарплата — три тисячі леїв на місяць.' },
      note: {
        ru: 'o mie — тысяча, mii ≈ «мий» — тысячи. После 20 и больше — de: trei mii de lei.',
        ua: 'o mie — тисяча, mii ≈ «мій» — тисячі. Після 20 і більше — de: trei mii de lei.',
      },
    },
    {
      kind: 'intro',
      ro: 'Programul e de la opt la patru.',
      tr: { ru: 'График — с восьми до четырёх.', ua: 'Графік — з восьмої до четвертої.' },
      note: {
        ru: 'program — график работы, часы работы магазина. de la… la… — «с… до…».',
        ua: 'program — графік роботи, години роботи магазину. de la… la… — «з… до…».',
      },
    },
    {
      kind: 'intro',
      ro: 'Am douăzeci de zile de concediu.',
      tr: { ru: 'У меня двадцать дней отпуска.', ua: 'У мене двадцять днів відпустки.' },
      note: {
        ru: 'concediu ≈ «кончедиу» — отпуск. Больничный — concediu medical.',
        ua: 'concediu ≈ «кончедіу» — відпустка. Лікарняний — concediu medical.',
      },
    },
    {
      kind: 'tip',
      title: 'Salariu, program, concediu',
      body: {
        ru: [
          'Деньги: **salariul** (зарплата), **pe lună** (в месяц), **pe oră** (в час). Тысяча — **o mie**, тысячи — **mii**: **două mii de lei**.',
          'Время: **cu normă întreagă** — на полный день, **jumătate de normă** — на полставки, **în ture** — посменно.',
        ],
        ua: [
          'Гроші: **salariul** (зарплата), **pe lună** (на місяць), **pe oră** (за годину). Тисяча — **o mie**, тисячі — **mii**: **două mii de lei**.',
          'Час: **cu normă întreagă** — на повний день, **jumătate de normă** — на пів ставки, **în ture** — позмінно.',
        ],
      },
      rows: [
        { ro: 'o mie de lei', tr: { ru: 'тысяча лей', ua: 'тисяча леїв' } },
        { ro: 'două mii de lei', tr: { ru: 'две тысячи лей', ua: 'дві тисячі леїв' } },
        { ro: 'pe lună', tr: { ru: 'в месяц', ua: 'на місяць' } },
        { ro: 'cu normă întreagă', tr: { ru: 'на полный день', ua: 'на повний день' } },
        { ro: 'jumătate de normă', tr: { ru: 'полставки', ua: 'пів ставки' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Какая зарплата?', ua: 'Яка зарплата?' },
      correct: 'Cât e salariul?',
      wrong: ['Care e programul?', 'Cât costă?', 'Când e concediul?'],
    },
    {
      kind: 'pickNative',
      q: 'Lucrez în ture.',
      correct: { ru: 'Я работаю посменно.', ua: 'Я працюю позмінно.' },
      wrong: [
        { ru: 'Я работаю полный день.', ua: 'Я працюю повний день.' },
        { ru: 'Я работаю по выходным.', ua: 'Я працюю на вихідних.' },
        { ru: 'Я не работаю.', ua: 'Я не працюю.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'salariul', tr: { ru: 'зарплата', ua: 'зарплата' } },
        { ro: 'programul', tr: { ru: 'график', ua: 'графік' } },
        { ro: 'concediu', tr: { ru: 'отпуск', ua: 'відпустка' } },
        { ro: 'pe lună', tr: { ru: 'в месяц', ua: 'на місяць' } },
        { ro: 'o mie', tr: { ru: 'тысяча', ua: 'тисяча' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Două mii de lei pe lună',
      tr: { ru: 'Две тысячи лей в месяц', ua: 'Дві тисячі леїв на місяць' },
      wrong: ['Trei mii de lei pe lună', 'Două mii de lei pe an', 'O mie de lei pe lună'],
    },
    {
      kind: 'tiles',
      q: { ru: 'График — с девяти до шести.', ua: 'Графік — з дев’ятої до шостої.' },
      words: ['Programul', 'e', 'de', 'la', 'nouă', 'la', 'șase'],
      extra: ['până', 'cinci', 'salariul'],
      shown: 'Programul e de la nouă la șase.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я работаю на полставки.', ua: 'Я працюю на пів ставки.' },
      correct: 'Lucrez jumătate de normă.',
      wrong: ['Lucrez cu normă întreagă.', 'Lucrez în ture.', 'Lucrez o jumătate de oră.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'У меня двадцать дней отпуска.', ua: 'У мене двадцять днів відпустки.' },
      words: ['Am', 'douăzeci', 'de', 'zile', 'de', 'concediu'],
      extra: ['zi', 'zece', 'salariu'],
      shown: 'Am douăzeci de zile de concediu.',
    },
    {
      kind: 'type',
      q: { ru: 'Зарплата — две тысячи лей в месяц.', ua: 'Зарплата — дві тисячі леїв на місяць.' },
      answers: ['Salariul e două mii de lei pe lună', 'Salariul este două mii de lei pe lună'],
      shown: 'Salariul e două mii de lei pe lună.',
    },
    {
      kind: 'type',
      q: { ru: 'Какой график?', ua: 'Який графік?' },
      answers: ['Care e programul', 'Care este programul', 'Cum e programul'],
      shown: 'Care e programul?',
    },
  ],
};
