import type { Lesson } from '../types';

/** A2 · Unit 1 · Lesson 5 — review: the whole past tense of the unit, no new words. */
export const u7l5: Lesson = {
  id: 'u7l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Ce ai făcut aseară?', tr: { ru: 'Что ты делал(а) вчера вечером?', ua: 'Що ти робив(ла) учора ввечері?' } },
    { ro: 'Am fost la munte.', tr: { ru: 'Я был(а) в горах.', ua: 'Я був(ла) в горах.' } },
    { ro: 'N-am mâncat.', tr: { ru: 'Я не ел(а).', ua: 'Я не їв(ла).' } },
    { ro: 'Am văzut un film.', tr: { ru: 'Я посмотрел(а) фильм.', ua: 'Я подивився(лась) фільм.' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Perfectul compus',
      body: {
        ru: [
          'Прошедшее время = **am / ai / a / am / ați / au** + форма глагола. Рода нет, для отрицания — **n-**: n-am, n-ai, n-a.',
          '**-a → -at** (lucrat), **-i → -it** (citit), **-ea, -e → -ut** (văzut, făcut). Особые: **fost, mers, ajuns**.',
        ],
        ua: [
          'Минулий час = **am / ai / a / am / ați / au** + форма дієслова. Роду немає, для заперечення — **n-**: n-am, n-ai, n-a.',
          '**-a → -at** (lucrat), **-i → -it** (citit), **-ea, -e → -ut** (văzut, făcut). Особливі: **fost, mers, ajuns**.',
        ],
      },
      rows: [
        { ro: 'am mâncat', tr: { ru: 'я поел · «ам мынкат»', ua: 'я поїв · «ам минкат»' } },
        { ro: 'ai dormit', tr: { ru: 'ты спал · «ай дормит»', ua: 'ти спав · «ай дорміт»' } },
        { ro: 'a făcut', tr: { ru: 'он сделал · «а фэкут»', ua: 'він зробив · «а фекут»' } },
        { ro: 'n-au fost', tr: { ru: 'они не были · «нау фост»', ua: 'вони не були · «нау фост»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Вчера я был дома.', ua: 'Учора я був удома.' },
      correct: 'Ieri am fost acasă.',
      wrong: ['Ieri sunt acasă.', 'Ieri ai fost acasă.', 'Azi am fost acasă.'],
    },
    {
      kind: 'pickNative',
      q: 'Ce ați mâncat aseară?',
      correct: { ru: 'Что вы ели вчера вечером?', ua: 'Що ви їли вчора ввечері?' },
      wrong: [
        { ru: 'Что вы пили вчера вечером?', ua: 'Що ви пили вчора ввечері?' },
        { ru: 'Что вы едите сегодня вечером?', ua: 'Що ви їсте сьогодні ввечері?' },
        { ru: 'Что ты ел вчера вечером?', ua: 'Що ти їв учора ввечері?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'făcut', tr: { ru: 'сделал', ua: 'зробив' } },
        { ro: 'văzut', tr: { ru: 'видел', ua: 'бачив' } },
        { ro: 'băut', tr: { ru: 'выпил', ua: 'випив' } },
        { ro: 'fost', tr: { ru: 'был', ua: 'був' } },
        { ro: 'mers', tr: { ru: 'ходил', ua: 'ходив' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Au fost la munte',
      tr: { ru: 'Они были в горах', ua: 'Вони були в горах' },
      wrong: ['Am fost la munte', 'Ați fost la munte', 'Au fost la mare'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Вчера вечером мы ели пиццу.', ua: 'Учора ввечері ми їли піцу.' },
      words: ['Aseară', 'am', 'mâncat', 'pizza'],
      extra: ['au', 'mănâncă', 'azi'],
      shown: 'Aseară am mâncat pizza.',
      also: ['Am mâncat pizza aseară'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мы не посмотрели фильм.', ua: 'Ми не подивилися фільм.' },
      correct: 'N-am văzut filmul.',
      wrong: ['Nu vedem filmul.', 'N-au văzut filmul.', 'Am văzut filmul.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'В прошлом году она была на море.', ua: 'Минулого року вона була на морі.' },
      words: ['Anul', 'trecut', 'ea', 'a', 'fost', 'la', 'mare'],
      extra: ['trecută', 'am', 'munte'],
      shown: 'Anul trecut ea a fost la mare.',
      also: ['Anul trecut a fost la mare', 'Ea a fost la mare anul trecut', 'A fost la mare anul trecut'],
    },
    {
      kind: 'listen',
      ro: 'Când ați plecat',
      tr: { ru: 'Когда вы уехали', ua: 'Коли ви поїхали' },
      wrong: ['Când ați ajuns', 'Când au plecat', 'Când ai plecat'],
    },
    {
      kind: 'type',
      q: { ru: 'Что ты делал(а) вчера вечером?', ua: 'Що ти робив(ла) учора ввечері?' },
      answers: ['Ce ai făcut aseară', 'Tu ce ai făcut aseară', 'Aseară ce ai făcut', 'Ce ai făcut tu aseară'],
      shown: 'Ce ai făcut aseară?',
    },
    {
      kind: 'type',
      q: { ru: 'Мы ездили в горы.', ua: 'Ми їздили в гори.' },
      answers: ['Am fost la munte', 'Am mers la munte', 'Noi am fost la munte', 'Noi am mers la munte'],
      shown: 'Am fost la munte.',
    },
    {
      kind: 'type',
      q: { ru: 'Я не ел(а).', ua: 'Я не їв(ла).' },
      answers: ['N-am mâncat', 'Nu am mâncat', 'Eu n-am mâncat', 'Eu nu am mâncat'],
      shown: 'N-am mâncat.',
    },
  ],
};
