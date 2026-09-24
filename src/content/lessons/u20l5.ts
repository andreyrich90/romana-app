import type { Lesson } from '../types';

/** B2 · Unit 2 · Lesson 5 — review of the past conditional, regrets and guesses. No new grammar. */
export const u20l5: Lesson = {
  id: 'u20l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Dacă aș fi știut, n-aș fi venit.', tr: { ru: 'Если бы я знал, я бы не пришёл.', ua: 'Якби я знав, я б не прийшов.' } },
    { ro: 'Ar fi trebuit să mă suni.', tr: { ru: 'Тебе надо было мне позвонить.', ua: 'Тобі треба було мені подзвонити.' } },
    { ro: 'O fi obosită.', tr: { ru: 'Наверное, она устала.', ua: 'Мабуть, вона втомилася.' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Aș fi…, o fi…',
      body: {
        ru: [
          'Несбывшееся — **aș fi + форма**: aș fi mers, dacă aș fi știut. Сожаление — **ar fi trebuit să, păcat că**.',
          'Догадка — **o fi, o fi plecat, trebuie să fi, probabil**.',
        ],
        ua: [
          'Нездійснене — **aș fi + форма**: aș fi mers, dacă aș fi știut. Жаль — **ar fi trebuit să, păcat că**.',
          'Здогадка — **o fi, o fi plecat, trebuie să fi, probabil**.',
        ],
      },
      rows: [
        { ro: 'aș fi mers', tr: { ru: 'я бы пошёл', ua: 'я б пішов' } },
        { ro: 'ar fi trebuit să', tr: { ru: 'надо было', ua: 'треба було' } },
        { ro: 'o fi plecat', tr: { ru: 'наверное, ушёл', ua: 'мабуть, пішов' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Если бы я знал, я бы не пришёл.', ua: 'Якби я знав, я б не прийшов.' },
      correct: 'Dacă aș fi știut, n-aș fi venit.',
      wrong: ['Dacă aș ști, n-aș veni.', 'Dacă am știut, n-am venit.', 'Dacă aș fi știut, aș fi venit.'],
    },
    {
      kind: 'pickNative',
      q: 'Ar fi trebuit să mă suni.',
      correct: { ru: 'Тебе надо было мне позвонить.', ua: 'Тобі треба було мені подзвонити.' },
      wrong: [
        { ru: 'Тебе надо мне позвонить.', ua: 'Тобі треба мені подзвонити.' },
        { ru: 'Мне надо было тебе позвонить.', ua: 'Мені треба було тобі подзвонити.' },
        { ru: 'Ты мне позвонил.', ua: 'Ти мені подзвонив.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'aș fi mers', tr: { ru: 'я бы пошёл', ua: 'я б пішов' } },
        { ro: 'ar fi trebuit', tr: { ru: 'надо было', ua: 'треба було' } },
        { ro: 'păcat', tr: { ru: 'жаль', ua: 'шкода' } },
        { ro: 'o fi', tr: { ru: 'наверное', ua: 'мабуть' } },
        { ro: 'probabil', tr: { ru: 'вероятно', ua: 'імовірно' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Am fi venit, dar am uitat',
      tr: { ru: 'Мы бы пришли, но забыли', ua: 'Ми б прийшли, але забули' },
      wrong: ['Am venit, dar am uitat', 'Ați fi venit, dar ați uitat', 'Am fi venit, dar a plouat'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Надо было спросить.', ua: 'Треба було запитати.' },
      words: ['Ar', 'fi', 'trebuit', 'să', 'întreb'],
      extra: ['trebuie', 'întrebat', 'aș'],
      shown: 'Ar fi trebuit să întreb.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Наверное, она устала.', ua: 'Мабуть, вона втомилася.' },
      correct: 'O fi obosită.',
      wrong: ['E obosită.', 'O să fie obosită.', 'A fost obosită.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Если бы ты пришёл раньше, ты бы его увидел.', ua: 'Якби ти прийшов раніше, ти б його побачив.' },
      words: ['Dacă', 'ai', 'fi', 'venit', 'mai', 'devreme', 'l-ai', 'fi', 'văzut'],
      extra: ['aș', 'veni', 'târziu'],
      shown: 'Dacă ai fi venit mai devreme, l-ai fi văzut.',
    },
    {
      kind: 'type',
      q: { ru: 'Жаль!', ua: 'Шкода!' },
      answers: ['Păcat', 'Ce păcat'],
      shown: 'Păcat!',
    },
    {
      kind: 'type',
      q: { ru: 'Мне жаль, что я опоздал(а).', ua: 'Мені шкода, що я запізнився (запізнилася).' },
      answers: ['Îmi pare rău că am întârziat', 'Regret că am întârziat', 'Scuze că am întârziat'],
      shown: 'Îmi pare rău că am întârziat.',
    },
    {
      kind: 'type',
      q: { ru: 'Если бы я знал(а), я бы пришёл (пришла).', ua: 'Якби я знав(ла), я б прийшов (прийшла).' },
      answers: ['Dacă aș fi știut, aș fi venit', 'Dacă știam, veneam'],
      shown: 'Dacă aș fi știut, aș fi venit.',
    },
  ],
};
