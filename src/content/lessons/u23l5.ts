import type { Lesson } from '../types';

/** B2 · Unit 5 · Lesson 5 — review of dative feelings, set expressions, connectors and polite requests. No new grammar. */
export const u23l5: Lesson = {
  id: 'u23l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Mi-e dor de voi.', tr: { ru: 'Я скучаю по вам.', ua: 'Я сумую за вами.' } },
    { ro: 'Nu-ți face griji.', tr: { ru: 'Не волнуйся.', ua: 'Не хвилюйся.' } },
    { ro: 'Prin urmare…', tr: { ru: 'Следовательно…', ua: 'Отже…' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Оттенки',
      body: {
        ru: [
          'Чувства: **mi-e dor / frică / rușine / somn**. Выражения: **am chef**, **îmi fac griji**, **mă pricep la**.',
          'Текст: **pe de o parte… pe de altă parte**, **prin urmare**, **cu toate acestea**. Вежливость: **v-aș ruga să**, **nu vă supărați**, **din păcate**.',
        ],
        ua: [
          'Почуття: **mi-e dor / frică / rușine / somn**. Вирази: **am chef**, **îmi fac griji**, **mă pricep la**.',
          'Текст: **pe de o parte… pe de altă parte**, **prin urmare**, **cu toate acestea**. Ввічливість: **v-aș ruga să**, **nu vă supărați**, **din păcate**.',
        ],
      },
      rows: [
        { ro: 'mi-e dor de voi', tr: { ru: 'я скучаю по вам', ua: 'я сумую за вами' } },
        { ro: 'îmi fac griji', tr: { ru: 'я волнуюсь', ua: 'я хвилююся' } },
        { ro: 'cu toate acestea', tr: { ru: 'тем не менее', ua: 'проте' } },
        { ro: 'v-aș ruga să', tr: { ru: 'я бы попросил вас', ua: 'я б попросив вас' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я скучаю по вам.', ua: 'Я сумую за вами.' },
      correct: 'Mi-e dor de voi.',
      wrong: ['Vă e dor de mine.', 'Mi-e dor de el.', 'Mi-e frică de voi.'],
    },
    {
      kind: 'pickNative',
      q: 'Nu mă pricep la bucătărie, prin urmare mâncăm în oraș.',
      correct: { ru: 'Я не разбираюсь в готовке, поэтому мы едим в городе.', ua: 'Я не розуміюся на куховарстві, тому ми їмо в місті.' },
      wrong: [
        { ru: 'Я хорошо готовлю, поэтому мы едим дома.', ua: 'Я добре готую, тому ми їмо вдома.' },
        { ru: 'Я не люблю город, поэтому едим дома.', ua: 'Я не люблю місто, тому їмо вдома.' },
        { ru: 'Я разбираюсь в ресторанах.', ua: 'Я розуміюся на ресторанах.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'mi-e somn', tr: { ru: 'хочу спать', ua: 'хочу спати' } },
        { ro: 'am chef', tr: { ru: 'хочется', ua: 'хочеться' } },
        { ro: 'prin urmare', tr: { ru: 'поэтому', ua: 'тому' } },
        { ro: 'din păcate', tr: { ru: 'к сожалению', ua: 'на жаль' } },
        { ro: 'de acord', tr: { ru: 'согласен', ua: 'згоден' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Nu vă faceți griji, mă descurc',
      tr: { ru: 'Не волнуйтесь, я справлюсь', ua: 'Не хвилюйтеся, я дам раду' },
      wrong: ['Nu-ți face griji, mă descurc', 'Nu vă faceți griji, nu mă descurc', 'Îmi fac griji, nu mă descurc'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мне страшно, но всё же я пойду.', ua: 'Мені страшно, але все ж я піду.' },
      words: ['Mi-e', 'frică', 'dar', 'totuși', 'merg'],
      extra: ['dor', 'deci', 'mergi'],
      shown: 'Mi-e frică, dar totuși merg.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Извините, вы не могли бы помочь мне?', ua: 'Вибачте, чи не могли б ви мені допомогти?' },
      correct: 'Nu vă supărați, ați putea să mă ajutați?',
      wrong: ['Nu vă supărați, pot să vă ajut?', 'Nu te supăra, poți să mă ajuți?', 'Nu vă supărați pe mine.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'С одной стороны, я устал, с другой — доволен.', ua: 'З одного боку, я втомився, з іншого — задоволений.' },
      words: ['Pe', 'de', 'o', 'parte', 'sunt', 'obosit', 'pe', 'de', 'altă', 'parte', 'sunt', 'mulțumit'],
      extra: ['plus', 'urmare', 'obosită'],
      shown: 'Pe de o parte sunt obosit, pe de altă parte sunt mulțumit.',
    },
    {
      kind: 'type',
      q: { ru: 'Мне страшно.', ua: 'Мені страшно.' },
      answers: ['Mi-e frică', 'Mie mi-e frică'],
      shown: 'Mi-e frică.',
    },
    {
      kind: 'type',
      q: { ru: 'Я разбираюсь в компьютерах.', ua: 'Я розуміюся на комп’ютерах.' },
      answers: ['Mă pricep la calculatoare', 'Mă pricep la computere'],
      shown: 'Mă pricep la calculatoare.',
    },
    {
      kind: 'type',
      q: { ru: 'Следовательно.', ua: 'Отже.' },
      answers: ['Prin urmare', 'Deci', 'Așadar'],
      shown: 'Prin urmare.',
    },
  ],
};
