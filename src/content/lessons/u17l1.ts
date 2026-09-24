import type { Lesson } from '../types';

/** B1 · Unit 5 · Lesson 1 — relative clauses: care, pe care + clitic (filmul pe care l-am văzut), unde. */
export const u17l1: Lesson = {
  id: 'u17l1',
  title: { ru: 'Который', ua: 'Який' },
  words: [
    { ro: 'care', tr: { ru: 'который, которая', ua: 'який, яка' } },
    { ro: 'pe care', tr: { ru: 'которого, которую', ua: 'якого, яку' } },
    { ro: 'omul care…', tr: { ru: 'человек, который…', ua: 'людина, яка…' } },
    { ro: 'unde', tr: { ru: 'где (место, где…)', ua: 'де (місце, де…)' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Omul care lucrează aici e din Moldova.',
      tr: { ru: 'Человек, который работает здесь, из Молдовы.', ua: 'Чоловік, який працює тут, з Молдови.' },
      note: {
        ru: 'care ≈ «каре» — «который» для всех родов и чисел. omul — человек (om).',
        ua: 'care ≈ «каре» — «який» для всіх родів і чисел. omul — людина, чоловік (om).',
      },
    },
    {
      kind: 'intro',
      ro: 'Filmul pe care l-am văzut era bun.',
      tr: { ru: 'Фильм, который я посмотрел, был хорошим.', ua: 'Фільм, який я подивився, був добрий.' },
      note: {
        ru: 'Если «который» — дополнение («которого, которую»), нужно pe care, а после него ещё раз «его»: pe care l-am văzut. Как îl văd pe Ion.',
        ua: 'Якщо «який» — додаток («якого, яку»), потрібно pe care, а після нього ще раз «його»: pe care l-am văzut. Як îl văd pe Ion.',
      },
    },
    {
      kind: 'intro',
      ro: 'Orașul unde locuiesc e mic.',
      tr: { ru: 'Город, где я живу, маленький.', ua: 'Місто, де я живу, маленьке.' },
      note: {
        ru: 'Про место — unde, как русское «где»: orașul unde locuiesc.',
        ua: 'Про місце — unde, як українське «де»: orașul unde locuiesc.',
      },
    },
    {
      kind: 'tip',
      title: 'Care, pe care',
      body: {
        ru: [
          '**Care** — «который, которая, которые»: одна форма. **Omul care vorbește** — человек, который говорит.',
          '«Которого, которую» — **pe care** + местоимение перед глаголом: **filmul pe care l-am văzut**, **cartea pe care o citesc**.',
          'Место — **unde**: **casa unde locuiesc**.',
        ],
        ua: [
          '**Care** — «який, яка, які»: одна форма. **Omul care vorbește** — людина, яка говорить.',
          '«Якого, яку» — **pe care** + займенник перед дієсловом: **filmul pe care l-am văzut**, **cartea pe care o citesc**.',
          'Місце — **unde**: **casa unde locuiesc**.',
        ],
      },
      rows: [
        { ro: 'omul care lucrează aici', tr: { ru: 'человек, который работает здесь', ua: 'людина, яка працює тут' } },
        { ro: 'cartea pe care o citesc', tr: { ru: 'книга, которую я читаю', ua: 'книжка, яку я читаю' } },
        { ro: 'filmul pe care l-am văzut', tr: { ru: 'фильм, который я посмотрел', ua: 'фільм, який я подивився' } },
        { ro: 'casa unde locuiesc', tr: { ru: 'дом, где я живу', ua: 'будинок, де я живу' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Человек, который здесь работает.', ua: 'Людина, яка тут працює.' },
      correct: 'Omul care lucrează aici.',
      wrong: ['Omul pe care lucrează aici.', 'Omul unde lucrează aici.', 'Omul care lucrez aici.'],
    },
    {
      kind: 'pickNative',
      q: 'Cartea pe care o citesc e interesantă.',
      correct: { ru: 'Книга, которую я читаю, интересная.', ua: 'Книжка, яку я читаю, цікава.' },
      wrong: [
        { ru: 'Книга, которую ты читаешь, интересная.', ua: 'Книжка, яку ти читаєш, цікава.' },
        { ru: 'Книга, которую я прочитал, скучная.', ua: 'Книжка, яку я прочитав, нудна.' },
        { ru: 'Книга, которая здесь, интересная.', ua: 'Книжка, яка тут, цікава.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'care', tr: { ru: 'который', ua: 'який' } },
        { ro: 'pe care', tr: { ru: 'которого', ua: 'якого' } },
        { ro: 'unde', tr: { ru: 'где', ua: 'де' } },
        { ro: 'omul', tr: { ru: 'человек', ua: 'людина' } },
        { ro: 'interesantă', tr: { ru: 'интересная', ua: 'цікава' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Prietenul care m-a ajutat',
      tr: { ru: 'Друг, который мне помог', ua: 'Друг, який мені допоміг' },
      wrong: ['Prietenul pe care l-am ajutat', 'Prietena care m-a ajutat', 'Prietenul care te-a ajutat'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Фильм, который я посмотрел, был хорошим.', ua: 'Фільм, який я подивився, був добрий.' },
      words: ['Filmul', 'pe', 'care', 'l-am', 'văzut', 'era', 'bun'],
      extra: ['o', 'cine', 'e'],
      shown: 'Filmul pe care l-am văzut era bun.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Город, где я живу.', ua: 'Місто, де я живу.' },
      correct: 'Orașul unde locuiesc.',
      wrong: ['Orașul care locuiesc.', 'Orașul pe care locuiesc.', 'Orașul unde locuiești.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Книга, которую я читаю.', ua: 'Книжка, яку я читаю.' },
      words: ['Cartea', 'pe', 'care', 'o', 'citesc'],
      extra: ['îl', 'citești', 'unde'],
      shown: 'Cartea pe care o citesc.',
    },
    {
      kind: 'type',
      q: { ru: 'Человек, который работает здесь.', ua: 'Людина, яка працює тут.' },
      answers: ['Omul care lucrează aici', 'Bărbatul care lucrează aici'],
      shown: 'Omul care lucrează aici.',
    },
    {
      kind: 'type',
      q: { ru: 'Дом, где я живу.', ua: 'Будинок, де я живу.' },
      answers: ['Casa unde locuiesc', 'Casa în care locuiesc'],
      shown: 'Casa unde locuiesc.',
    },
  ],
};
