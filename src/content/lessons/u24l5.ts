import type { Lesson } from '../types';

/** B2 · Unit 6 · Lesson 5 — B2 wrap-up: pluperfect, past conditional, să clauses, gerund, passive, news, dative feelings, genitive plural. */
export const u24l5: Lesson = {
  id: 'u24l5',
  title: { ru: 'Итог B2', ua: 'Підсумок B2' },
  words: [
    { ro: 'Dacă aș fi știut, aș fi venit.', tr: { ru: 'Если бы я знал, я бы пришёл.', ua: 'Якби я знав, я б прийшов.' } },
    { ro: 'Casa a fost construită demult.', tr: { ru: 'Дом был построен давно.', ua: 'Будинок був збудований давно.' } },
    { ro: 'Mi-e dor de părinții mei.', tr: { ru: 'Я скучаю по родителям.', ua: 'Я сумую за батьками.' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Весь B2',
      body: {
        ru: [
          'Время: **plecase** (уже ушёл до того), **aș fi mers** (пошёл бы), **dacă aș fi știut** (если бы знал). Связь: **e important să**, **ca să**, **fără să**, **mergând**.',
          'Пассив: **a fost construită**. Новости: **potrivit presei**, **au crescut cu … la sută**. Чувства: **mi-e dor de**. Родительный: **casa părinților**, **un prieten al meu**.',
        ],
        ua: [
          'Час: **plecase** (уже пішов до того), **aș fi mers** (пішов би), **dacă aș fi știut** (якби знав). Зв’язок: **e important să**, **ca să**, **fără să**, **mergând**.',
          'Пасив: **a fost construită**. Новини: **potrivit presei**, **au crescut cu … la sută**. Почуття: **mi-e dor de**. Родовий: **casa părinților**, **un prieten al meu**.',
        ],
      },
      rows: [
        { ro: 'plecase deja', tr: { ru: 'уже ушёл (до того)', ua: 'уже пішов (до того)' } },
        { ro: 'aș fi venit', tr: { ru: 'я бы пришёл', ua: 'я б прийшов' } },
        { ro: 'potrivit presei', tr: { ru: 'по данным прессы', ua: 'за даними преси' } },
        { ro: 'casa părinților', tr: { ru: 'дом родителей', ua: 'дім батьків' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Когда я пришёл, поезд уже ушёл.', ua: 'Коли я прийшов, потяг уже пішов.' },
      correct: 'Când am ajuns, trenul plecase deja.',
      wrong: ['Când am ajuns, trenul pleacă deja.', 'Când voi ajunge, trenul plecase deja.', 'Când am ajuns, trenul n-a plecat.'],
    },
    {
      kind: 'pickNative',
      q: 'Dacă aș fi știut, aș fi venit mai devreme.',
      correct: { ru: 'Если бы я знал, пришёл бы раньше.', ua: 'Якби я знав, прийшов би раніше.' },
      wrong: [
        { ru: 'Я знал и пришёл раньше.', ua: 'Я знав і прийшов раніше.' },
        { ru: 'Если я узнаю, приду раньше.', ua: 'Якщо я дізнаюся, прийду раніше.' },
        { ru: 'Если бы я знал, пришёл бы позже.', ua: 'Якби я знав, прийшов би пізніше.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'plecase', tr: { ru: 'уже ушёл', ua: 'уже пішов' } },
        { ro: 'aș fi mers', tr: { ru: 'пошёл бы', ua: 'пішов би' } },
        { ro: 'fără să', tr: { ru: 'не сделав', ua: 'не зробивши' } },
        { ro: 'potrivit', tr: { ru: 'по данным', ua: 'за даними' } },
        { ro: 'mi-e dor', tr: { ru: 'скучаю', ua: 'сумую' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Potrivit presei, prețurile au crescut',
      tr: { ru: 'По данным прессы, цены выросли', ua: 'За даними преси, ціни зросли' },
      wrong: ['Potrivit presei, prețurile au scăzut', 'Potrivit guvernului, prețurile au crescut', 'Prețurile vor crește'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Дом был построен давно.', ua: 'Будинок був збудований давно.' },
      words: ['Casa', 'a', 'fost', 'construită', 'demult'],
      extra: ['construit', 'este', 'nouă'],
      shown: 'Casa a fost construită demult.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я учу румынский, чтобы работать здесь.', ua: 'Я вчу румунську, щоб працювати тут.' },
      correct: 'Învăț română ca să lucrez aici.',
      wrong: ['Învăț română fără să lucrez aici.', 'Am învățat română pentru că lucrez aici.', 'Învăț română lucrând aici.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я скучаю по своим родителям.', ua: 'Я сумую за своїми батьками.' },
      words: ['Mi-e', 'dor', 'de', 'părinții', 'mei'],
      extra: ['părinților', 'frică', 'ți-e'],
      shown: 'Mi-e dor de părinții mei.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Один мой друг родился в Яссах.', ua: 'Один мій друг народився в Яссах.' },
      correct: 'Un prieten al meu s-a născut la Iași.',
      wrong: ['Un prieten a mea s-a născut la Iași.', 'Prietenul meu locuiește la Iași.', 'Un prieten al meu s-a mutat la Iași.'],
    },
    {
      kind: 'type',
      q: { ru: 'Я бы пришёл.', ua: 'Я б прийшов.' },
      answers: ['Aș fi venit'],
      shown: 'Aș fi venit.',
    },
    {
      kind: 'type',
      q: { ru: 'Не волнуйся!', ua: 'Не хвилюйся!' },
      answers: ['Nu-ți face griji', 'Nu te îngrijora'],
      shown: 'Nu-ți face griji!',
    },
    {
      kind: 'type',
      q: { ru: 'С Рождеством!', ua: 'З Різдвом!' },
      answers: ['Crăciun fericit'],
      shown: 'Crăciun fericit!',
    },
  ],
};
