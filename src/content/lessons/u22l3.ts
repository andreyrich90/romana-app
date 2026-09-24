import type { Lesson } from '../types';

/** B2 · Unit 4 · Lesson 3 — politics: alegerile, a vota, guvernul, președintele, partidul, a câștigat, a adoptat o lege. */
export const u22l3: Lesson = {
  id: 'u22l3',
  title: { ru: 'Власть и выборы', ua: 'Влада й вибори' },
  words: [
    { ro: 'alegerile', tr: { ru: 'выборы', ua: 'вибори' } },
    { ro: 'a vota', tr: { ru: 'голосовать', ua: 'голосувати' } },
    { ro: 'guvernul', tr: { ru: 'правительство', ua: 'уряд' } },
    { ro: 'președintele', tr: { ru: 'президент', ua: 'президент' } },
    { ro: 'legea', tr: { ru: 'закон', ua: 'закон' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Alegerile au loc în noiembrie.',
      tr: { ru: 'Выборы проходят в ноябре.', ua: 'Вибори відбуваються в листопаді.' },
      note: {
        ru: 'a avea loc — «иметь место, проходить»: alegerile au loc.',
        ua: 'a avea loc — «мати місце, відбуватися»: alegerile au loc.',
      },
    },
    {
      kind: 'intro',
      ro: 'Partidul a câștigat treizeci la sută din voturi.',
      tr: { ru: 'Партия получила тридцать процентов голосов.', ua: 'Партія отримала тридцять відсотків голосів.' },
      note: {
        ru: 'a câștiga — выигрывать, получать; voturi — голоса (vot — голос на выборах).',
        ua: 'a câștiga — вигравати, отримувати; voturi — голоси (vot — голос на виборах).',
      },
    },
    {
      kind: 'intro',
      ro: 'Guvernul a adoptat o lege nouă.',
      tr: { ru: 'Правительство приняло новый закон.', ua: 'Уряд ухвалив новий закон.' },
      note: {
        ru: 'guvern ≈ «гуверн». legea — «закон» (lege — закон).',
        ua: 'guvern ≈ «гуверн». legea — «закон» (lege — закон).',
      },
    },
    {
      kind: 'tip',
      title: 'Alegeri',
      body: {
        ru: [
          '**alegerile** (выборы), **a vota** (голосовать: votez, votezi, votează), **guvernul** (правительство), **parlamentul**, **președintele**, **partidul**, **primarul** (мэр).',
          'Пассив из прошлого раздела здесь на каждом шагу: **a fost ales** (был избран), **legea a fost adoptată** (закон принят).',
        ],
        ua: [
          '**alegerile** (вибори), **a vota** (голосувати: votez, votezi, votează), **guvernul** (уряд), **parlamentul**, **președintele**, **partidul**, **primarul** (мер).',
          'Пасив із минулого розділу тут на кожному кроці: **a fost ales** (був обраний), **legea a fost adoptată** (закон ухвалено).',
        ],
      },
      rows: [
        { ro: 'votez', tr: { ru: 'я голосую', ua: 'я голосую' } },
        { ro: 'a fost ales', tr: { ru: 'был избран', ua: 'був обраний' } },
        { ro: 'parlamentul', tr: { ru: 'парламент', ua: 'парламент' } },
        { ro: 'primarul', tr: { ru: 'мэр', ua: 'мер' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Выборы проходят в ноябре.', ua: 'Вибори відбуваються в листопаді.' },
      correct: 'Alegerile au loc în noiembrie.',
      wrong: ['Alegerile au avut loc în noiembrie.', 'Alegerile au loc în decembrie.', 'Alegerile are loc în noiembrie.'],
    },
    {
      kind: 'pickNative',
      q: 'Președintele a fost ales pentru cinci ani.',
      correct: { ru: 'Президент избран на пять лет.', ua: 'Президента обрано на п’ять років.' },
      wrong: [
        { ru: 'Президент выбрал пять министров.', ua: 'Президент обрав п’ять міністрів.' },
        { ru: 'Президент правит пять лет.', ua: 'Президент править п’ять років.' },
        { ru: 'Президента выберут через пять лет.', ua: 'Президента оберуть через п’ять років.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'alegerile', tr: { ru: 'выборы', ua: 'вибори' } },
        { ro: 'guvernul', tr: { ru: 'правительство', ua: 'уряд' } },
        { ro: 'partidul', tr: { ru: 'партия', ua: 'партія' } },
        { ro: 'primarul', tr: { ru: 'мэр', ua: 'мер' } },
        { ro: 'legea', tr: { ru: 'закон', ua: 'закон' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Guvernul a adoptat o lege nouă',
      tr: { ru: 'Правительство приняло новый закон', ua: 'Уряд ухвалив новий закон' },
      wrong: ['Parlamentul a adoptat o lege nouă', 'Guvernul a adoptat legea veche', 'Guvernul vrea o lege nouă'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Партия получила тридцать процентов голосов.', ua: 'Партія отримала тридцять відсотків голосів.' },
      words: ['Partidul', 'a', 'câștigat', 'treizeci', 'la', 'sută', 'din', 'voturi'],
      extra: ['pierdut', 'vot', 'guvernul'],
      shown: 'Partidul a câștigat treizeci la sută din voturi.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я голосую в воскресенье.', ua: 'Я голосую в неділю.' },
      correct: 'Votez duminică.',
      wrong: ['Votează duminică.', 'Am votat duminică.', 'Votăm duminică.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Закон был принят парламентом.', ua: 'Закон було ухвалено парламентом.' },
      words: ['Legea', 'a', 'fost', 'adoptată', 'de', 'parlament'],
      extra: ['adoptat', 'guvern', 'este'],
      shown: 'Legea a fost adoptată de parlament.',
    },
    {
      kind: 'type',
      q: { ru: 'Выборы.', ua: 'Вибори.' },
      answers: ['Alegerile', 'Alegeri'],
      shown: 'Alegerile.',
    },
    {
      kind: 'type',
      q: { ru: 'Правительство.', ua: 'Уряд.' },
      answers: ['Guvernul', 'Guvern'],
      shown: 'Guvernul.',
    },
  ],
};
