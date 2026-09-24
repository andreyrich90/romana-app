import type { Lesson } from '../types';

/** A2 · Unit 5 · Lesson 5 — review: clothes, size and colour, whose, to whom. No new words. */
export const u11l5: Lesson = {
  id: 'u11l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Caut o geacă neagră.', tr: { ru: 'Я ищу чёрную куртку.', ua: 'Я шукаю чорну куртку.' } },
    { ro: 'E prea mare.', tr: { ru: 'Слишком большая.', ua: 'Занадто велика.' } },
    { ro: 'geanta mamei', tr: { ru: 'сумка мамы', ua: 'сумка мами' } },
    { ro: 'Îi dau lui Andrei un cadou.', tr: { ru: 'Я даю Андрею подарок.', ua: 'Я даю Андрію подарунок.' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'La magazin',
      body: {
        ru: [
          '**Caut…**, **Pot să probez?**, **E prea mare**, **Aveți una mai mică?** — весь разговор в магазине.',
          'Чей и кому — одна форма: **lui Andrei**, **mamei**. «Кому» ещё берёт **îi** перед глаголом.',
        ],
        ua: [
          '**Caut…**, **Pot să probez?**, **E prea mare**, **Aveți una mai mică?** — уся розмова в магазині.',
          'Чий і кому — одна форма: **lui Andrei**, **mamei**. «Кому» ще бере **îi** перед дієсловом.',
        ],
      },
      rows: [
        { ro: 'geanta mamei', tr: { ru: 'сумка мамы · «джянта мамей»', ua: 'сумка мами · «джянта мамей»' } },
        { ro: 'Îi dau mamei.', tr: { ru: 'Я даю маме. · «ый дау мамей»', ua: 'Я даю мамі. · «ий дау мамей»' } },
        { ro: 'o geacă neagră', tr: { ru: 'чёрная куртка · «о джякэ нягрэ»', ua: 'чорна куртка · «о джяке нягре»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Слишком большая. У вас есть поменьше?', ua: 'Занадто велика. У вас є менша?' },
      correct: 'E prea mare. Aveți una mai mică?',
      wrong: ['E prea mică. Aveți una mai mare?', 'E mai mare. Aveți una prea mică?', 'E prea scumpă. Aveți una mai ieftină?'],
    },
    {
      kind: 'pickNative',
      q: 'Al cui e tricoul negru?',
      correct: { ru: 'Чья это чёрная футболка?', ua: 'Чия це чорна футболка?' },
      wrong: [
        { ru: 'Где чёрная футболка?', ua: 'Де чорна футболка?' },
        { ru: 'Это моя чёрная футболка.', ua: 'Це моя чорна футболка.' },
        { ru: 'Чья это белая футболка?', ua: 'Чия це біла футболка?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'rochie', tr: { ru: 'платье', ua: 'сукня' } },
        { ro: 'geacă', tr: { ru: 'куртка', ua: 'куртка' } },
        { ro: 'mărime', tr: { ru: 'размер', ua: 'розмір' } },
        { ro: 'cadou', tr: { ru: 'подарок', ua: 'подарунок' } },
        { ro: 'al cui', tr: { ru: 'чей', ua: 'чий' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Caut o geacă neagră',
      tr: { ru: 'Я ищу чёрную куртку', ua: 'Я шукаю чорну куртку' },
      wrong: ['Caut o geacă albă', 'Caut un tricou negru', 'Am o geacă neagră'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Это сумка мамы.', ua: 'Це сумка мами.' },
      words: ['E', 'geanta', 'mamei'],
      extra: ['mama', 'lui', 'mea'],
      shown: 'E geanta mamei.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я даю Андрею подарок.', ua: 'Я даю Андрію подарунок.' },
      correct: 'Îi dau lui Andrei un cadou.',
      wrong: ['Îi dau Andrei un cadou.', 'Andrei îmi dă un cadou.', 'E cadoul lui Andrei.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Можно примерить чёрные брюки?', ua: 'Можна приміряти чорні штани?' },
      words: ['Pot', 'să', 'probez', 'pantalonii', 'negri'],
      extra: ['negru', 'pantaloni', 'probă'],
      shown: 'Pot să probez pantalonii negri?',
    },
    {
      kind: 'listen',
      ro: 'Port mărimea 38',
      tr: { ru: 'Я ношу 38-й размер', ua: 'Я ношу 38-й розмір' },
      wrong: ['Port mărimea 48', 'Aveți mărimea 38', 'Port mărimea 36'],
    },
    {
      kind: 'type',
      q: { ru: 'Я ищу белую рубашку.', ua: 'Я шукаю білу сорочку.' },
      answers: ['Caut o cămașă albă', 'Eu caut o cămașă albă'],
      shown: 'Caut o cămașă albă.',
    },
    {
      kind: 'type',
      q: { ru: 'Чья это сумка?', ua: 'Чия це сумка?' },
      answers: ['A cui e geanta', 'A cui este geanta', 'A cui e geanta asta', 'A cui e geanta aceasta'],
      shown: 'A cui e geanta?',
    },
    {
      kind: 'type',
      q: { ru: 'Подарок для мамы.', ua: 'Подарунок для мами.' },
      answers: ['Un cadou pentru mama', 'Un cadou pentru mama mea', 'Cadou pentru mama'],
      shown: 'Un cadou pentru mama.',
    },
  ],
};
