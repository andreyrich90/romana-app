import type { Lesson } from '../types';

/** A2 · Unit 5 · Lesson 1 — clothes: cămașă, tricou, rochie, geacă, pantaloni, pantofi; Caut…, Pot să probez? */
export const u11l1: Lesson = {
  id: 'u11l1',
  title: { ru: 'Одежда', ua: 'Одяг' },
  words: [
    { ro: 'o cămașă', tr: { ru: 'рубашка', ua: 'сорочка' } },
    { ro: 'un tricou', tr: { ru: 'футболка', ua: 'футболка' } },
    { ro: 'o rochie', tr: { ru: 'платье', ua: 'сукня' } },
    { ro: 'o geacă', tr: { ru: 'куртка', ua: 'куртка' } },
    { ro: 'pantaloni', tr: { ru: 'брюки', ua: 'штани' } },
    { ro: 'pantofi', tr: { ru: 'туфли, ботинки', ua: 'туфлі, черевики' } },
    { ro: 'Pot să probez?', tr: { ru: 'Можно примерить?', ua: 'Можна приміряти?' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Caut o cămașă.',
      tr: { ru: 'Я ищу рубашку.', ua: 'Я шукаю сорочку.' },
      note: {
        ru: 'caut — «я ищу», из раздела «В городе». cămașă ≈ «кэмашэ». Две рубашки — două cămăși.',
        ua: 'caut — «я шукаю», з розділу «У місті». cămașă ≈ «кемаше». Дві сорочки — două cămăși.',
      },
    },
    {
      kind: 'intro',
      ro: 'pantaloni și pantofi',
      tr: { ru: 'брюки и туфли', ua: 'штани й туфлі' },
      note: {
        ru: 'Как «брюки» в русском, pantaloni — множественное число. ≈ «панталонь», pantofi ≈ «пантофь». Пара туфель — o pereche de pantofi.',
        ua: 'Як «штани» в українській, pantaloni — множина. ≈ «панталонь», pantofi ≈ «пантофь». Пара туфель — o pereche de pantofi.',
      },
    },
    {
      kind: 'intro',
      ro: 'Pot să probez?',
      tr: { ru: 'Можно примерить?', ua: 'Можна приміряти?' },
      note: {
        ru: 'a proba — примерять ≈ «пот сэ пробез». Примерочная — cabina de probă.',
        ua: 'a proba — приміряти ≈ «пот се пробез». Примірочна — cabina de probă.',
      },
    },
    {
      kind: 'tip',
      title: 'Un tricou, o rochie',
      body: {
        ru: [
          'Мужской и средний род — **un**, женский — **o**. Род не всегда совпадает с русским: **un tricou** (футболка), **o geacă** (куртка).',
          'В магазине: **Caut…** — Я ищу…, **Vreau să cumpăr…** — Я хочу купить…, **Pot să probez?** — Можно примерить?',
        ],
        ua: [
          'Чоловічий і середній рід — **un**, жіночий — **o**. Рід не завжди збігається з українським: **un tricou** (футболка), **o geacă** (куртка).',
          'У магазині: **Caut…** — Я шукаю…, **Vreau să cumpăr…** — Я хочу купити…, **Pot să probez?** — Можна приміряти?',
        ],
      },
      rows: [
        { ro: 'o cămașă', tr: { ru: 'рубашка · «о кэмашэ»', ua: 'сорочка · «о кемаше»' } },
        { ro: 'un tricou', tr: { ru: 'футболка · «ун трикоу»', ua: 'футболка · «ун трікоу»' } },
        { ro: 'o rochie', tr: { ru: 'платье · «о рокие»', ua: 'сукня · «о рокіє»' } },
        { ro: 'o geacă', tr: { ru: 'куртка · «о джакэ»', ua: 'куртка · «о джаке»' } },
        { ro: 'pantaloni', tr: { ru: 'брюки · «панталонь»', ua: 'штани · «панталонь»' } },
        { ro: 'pantofi', tr: { ru: 'туфли · «пантофь»', ua: 'туфлі · «пантофь»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я ищу куртку.', ua: 'Я шукаю куртку.' },
      correct: 'Caut o geacă.',
      wrong: ['Caut un tricou.', 'Am o geacă.', 'Caut o rochie.'],
    },
    {
      kind: 'pickNative',
      q: 'Pot să probez?',
      correct: { ru: 'Можно примерить?', ua: 'Можна приміряти?' },
      wrong: [
        { ru: 'Можно заплатить?', ua: 'Можна заплатити?' },
        { ru: 'Где примерочная?', ua: 'Де примірочна?' },
        { ru: 'Я хочу купить.', ua: 'Я хочу купити.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'cămașă', tr: { ru: 'рубашка', ua: 'сорочка' } },
        { ro: 'tricou', tr: { ru: 'футболка', ua: 'футболка' } },
        { ro: 'rochie', tr: { ru: 'платье', ua: 'сукня' } },
        { ro: 'pantaloni', tr: { ru: 'брюки', ua: 'штани' } },
        { ro: 'pantofi', tr: { ru: 'туфли', ua: 'туфлі' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Caut pantofi',
      tr: { ru: 'Я ищу туфли', ua: 'Я шукаю туфлі' },
      wrong: ['Caut pantaloni', 'Am pantofi', 'Caut un tricou'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Где примерочная?', ua: 'Де примірочна?' },
      words: ['Unde', 'e', 'cabina', 'de', 'probă'],
      extra: ['sunt', 'farmacia', 'la'],
      shown: 'Unde e cabina de probă?',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я хочу купить брюки.', ua: 'Я хочу купити штани.' },
      correct: 'Vreau să cumpăr pantaloni.',
      wrong: ['Vreau să cumpăr pantofi.', 'Am cumpărat pantaloni.', 'Vreau să probez pantaloni.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я хочу купить платье.', ua: 'Я хочу купити сукню.' },
      words: ['Vreau', 'să', 'cumpăr', 'o', 'rochie'],
      extra: ['un', 'cumpărat', 'tricou'],
      shown: 'Vreau să cumpăr o rochie.',
    },
    {
      kind: 'type',
      q: { ru: 'Я ищу рубашку.', ua: 'Я шукаю сорочку.' },
      answers: ['Caut o cămașă', 'Eu caut o cămașă'],
      shown: 'Caut o cămașă.',
    },
    {
      kind: 'type',
      q: { ru: 'Можно примерить?', ua: 'Можна приміряти?' },
      answers: ['Pot să probez', 'Pot proba', 'Pot să încerc'],
      shown: 'Pot să probez?',
    },
  ],
};
