import type { Lesson } from '../types';

/** A2 · Unit 1 · Lesson 1 — the past tense (perfect compus) of -a verbs: am lucrat, ai lucrat… */
export const u7l1: Lesson = {
  id: 'u7l1',
  title: { ru: 'Я работал', ua: 'Я працював' },
  words: [
    { ro: 'am lucrat', tr: { ru: 'я работал(а)', ua: 'я працював(ла)' } },
    { ro: 'ai lucrat', tr: { ru: 'ты работал(а)', ua: 'ти працював(ла)' } },
    { ro: 'a lucrat', tr: { ru: 'он / она работал(а)', ua: 'він / вона працював(ла)' } },
    { ro: 'am mâncat', tr: { ru: 'я поел(а)', ua: 'я поїв(ла)' } },
    { ro: 'am cumpărat', tr: { ru: 'я купил(а)', ua: 'я купив(ла)' } },
    { ro: 'ieri', tr: { ru: 'вчера', ua: 'учора' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Am lucrat.',
      tr: { ru: 'Я работал(а).', ua: 'Я працював(ла).' },
      note: {
        ru: 'Прошедшее время — из двух слов: am («имею») + lucrat («работано»). Как в английском I have worked. ≈ «ам лукрат».',
        ua: 'Минулий час — з двох слів: am («маю») + lucrat («працьовано»). Як в англійській I have worked. ≈ «ам лукрат».',
      },
    },
    {
      kind: 'intro',
      ro: 'Ieri am lucrat mult.',
      tr: { ru: 'Вчера я много работал(а).', ua: 'Учора я багато працював(ла).' },
      note: {
        ru: 'ieri ≈ «ерь» — вчера. Слово времени удобно ставить в начало.',
        ua: 'ieri ≈ «єрь» — учора. Слово часу зручно ставити на початок.',
      },
    },
    {
      kind: 'intro',
      ro: 'Am mâncat.',
      tr: { ru: 'Я поел(а).', ua: 'Я поїв(ла).' },
      note: {
        ru: 'a mânca → mâncat ≈ «ам мынкат». Одна форма и для мужчин, и для женщин.',
        ua: 'a mânca → mâncat ≈ «ам минкат». Одна форма і для чоловіків, і для жінок.',
      },
    },
    {
      kind: 'tip',
      title: 'Am lucrat, ai lucrat…',
      body: {
        ru: [
          'Меняется только первое слово — короткая форма **a avea**: am, ai, a, am, ați, au. Второе слово стоит на месте.',
          'Глаголы на **-a** дают форму на **-at**: a lucra → **lucrat**, a mânca → **mâncat**, a cumpăra → **cumpărat**.',
          'Рода нет: **am lucrat** — и «я работал», и «я работала». Удобнее, чем в русском.',
        ],
        ua: [
          'Змінюється лише перше слово — коротка форма **a avea**: am, ai, a, am, ați, au. Друге слово стоїть на місці.',
          'Дієслова на **-a** дають форму на **-at**: a lucra → **lucrat**, a mânca → **mâncat**, a cumpăra → **cumpărat**.',
          'Роду немає: **am lucrat** — і «я працював», і «я працювала». Зручніше, ніж в українській.',
        ],
      },
      rows: [
        { ro: 'eu am lucrat', tr: { ru: 'я работал(а) · «еу ам лукрат»', ua: 'я працював(ла) · «єу ам лукрат»' } },
        { ro: 'tu ai lucrat', tr: { ru: 'ты работал(а) · «ту ай лукрат»', ua: 'ти працював(ла) · «ту ай лукрат»' } },
        { ro: 'el / ea a lucrat', tr: { ru: 'он / она работал(а) · «ел / я а лукрат»', ua: 'він / вона працював(ла) · «єл / я а лукрат»' } },
        { ro: 'noi am lucrat', tr: { ru: 'мы работали · «ной ам лукрат»', ua: 'ми працювали · «ной ам лукрат»' } },
        { ro: 'voi ați lucrat', tr: { ru: 'вы работали · «вой аць лукрат»', ua: 'ви працювали · «вой аць лукрат»' } },
        { ro: 'ei / ele au lucrat', tr: { ru: 'они работали · «ей / еле ау лукрат»', ua: 'вони працювали · «єй / єле ау лукрат»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мы работали.', ua: 'Ми працювали.' },
      correct: 'Noi am lucrat.',
      wrong: ['Noi au lucrat.', 'Noi ați lucrat.', 'Noi lucrăm.'],
    },
    {
      kind: 'pickNative',
      q: 'Ea a mâncat.',
      correct: { ru: 'Она поела.', ua: 'Вона поїла.' },
      wrong: [
        { ru: 'Она ест.', ua: 'Вона їсть.' },
        { ru: 'Он поел.', ua: 'Він поїв.' },
        { ru: 'Я поела.', ua: 'Я поїла.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'am lucrat', tr: { ru: 'я работал', ua: 'я працював' } },
        { ro: 'ai lucrat', tr: { ru: 'ты работал', ua: 'ти працював' } },
        { ro: 'a lucrat', tr: { ru: 'он работал', ua: 'він працював' } },
        { ro: 'am cumpărat', tr: { ru: 'я купил', ua: 'я купив' } },
        { ro: 'ieri', tr: { ru: 'вчера', ua: 'учора' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Ieri am lucrat',
      tr: { ru: 'Вчера я работал', ua: 'Учора я працював' },
      wrong: ['Ieri ai lucrat', 'Ieri a lucrat', 'Azi am lucrat'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Вчера я купил хлеб.', ua: 'Учора я купив хліб.' },
      words: ['Ieri', 'am', 'cumpărat', 'pâine'],
      extra: ['ai', 'cumpăr', 'lapte'],
      shown: 'Ieri am cumpărat pâine.',
      also: ['Am cumpărat pâine ieri'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Они поели.', ua: 'Вони поїли.' },
      correct: 'Au mâncat.',
      wrong: ['Am mâncat.', 'A mâncat.', 'Mănâncă.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Вы работали вчера?', ua: 'Ви працювали вчора?' },
      words: ['Ați', 'lucrat', 'ieri'],
      extra: ['Au', 'lucrăm', 'am'],
      shown: 'Ați lucrat ieri?',
    },
    {
      kind: 'type',
      q: { ru: 'Я работал(а) вчера.', ua: 'Я працював(ла) вчора.' },
      answers: ['Am lucrat ieri', 'Ieri am lucrat', 'Eu am lucrat ieri', 'Ieri eu am lucrat'],
      shown: 'Am lucrat ieri.',
    },
    {
      kind: 'type',
      q: { ru: 'Ты поел(а)?', ua: 'Ти поїв(ла)?' },
      answers: ['Ai mâncat', 'Tu ai mâncat'],
      shown: 'Ai mâncat?',
    },
  ],
};
