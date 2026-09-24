import type { Lesson } from '../types';

/** B1 · Unit 4 · Lesson 4 — reasons and concessions: pentru că, deoarece, deși, totuși, de aceea. */
export const u16l4: Lesson = {
  id: 'u16l4',
  title: { ru: 'Потому что, хотя', ua: 'Бо, хоча' },
  words: [
    { ro: 'pentru că', tr: { ru: 'потому что', ua: 'тому що, бо' } },
    { ro: 'deoarece', tr: { ru: 'так как', ua: 'оскільки' } },
    { ro: 'deși', tr: { ru: 'хотя', ua: 'хоча' } },
    { ro: 'totuși', tr: { ru: 'всё же, однако', ua: 'усе ж, однак' } },
    { ro: 'de aceea', tr: { ru: 'поэтому', ua: 'тому' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Nu vin, pentru că sunt obosit.',
      tr: { ru: 'Я не приду, потому что устал.', ua: 'Я не прийду, бо втомився.' },
      note: {
        ru: 'pentru că ≈ «пентру кэ» — потому что. obosit ≈ «обосит» — уставший (женщина — obosită).',
        ua: 'pentru că ≈ «пентру ке» — тому що, бо. obosit ≈ «обосіт» — утомлений (жінка — obosită).',
      },
    },
    {
      kind: 'intro',
      ro: 'Deși plouă, mergem la plimbare.',
      tr: { ru: 'Хотя идёт дождь, мы идём гулять.', ua: 'Хоча йде дощ, ми йдемо гуляти.' },
      note: {
        ru: 'deși ≈ «деши» — хотя. plimbare — прогулка.',
        ua: 'deși ≈ «деші» — хоча. plimbare — прогулянка.',
      },
    },
    {
      kind: 'intro',
      ro: 'E scump, dar totuși îl cumpăr.',
      tr: { ru: 'Дорого, но всё же я его куплю.', ua: 'Дорого, але все ж я його куплю.' },
      note: {
        ru: 'totuși ≈ «тотушь» — всё же. îl — «его» из раздела «Путешествия».',
        ua: 'totuși ≈ «тотушь» — усе ж. îl — «його» з розділу «Подорожі».',
      },
    },
    {
      kind: 'tip',
      title: 'Pentru că, deși',
      body: {
        ru: [
          'Причина: **pentru că** (потому что; в разговоре), **deoarece** (так как; на письме). Вопрос — **de ce?**',
          'Уступка: **deși** (хотя), **totuși** (всё же). Вывод: **de aceea** (поэтому).',
        ],
        ua: [
          'Причина: **pentru că** (тому що; у розмові), **deoarece** (оскільки; на письмі). Питання — **de ce?**',
          'Поступка: **deși** (хоча), **totuși** (усе ж). Висновок: **de aceea** (тому).',
        ],
      },
      rows: [
        { ro: 'pentru că', tr: { ru: 'потому что', ua: 'тому що' } },
        { ro: 'deoarece', tr: { ru: 'так как', ua: 'оскільки' } },
        { ro: 'deși', tr: { ru: 'хотя', ua: 'хоча' } },
        { ro: 'totuși', tr: { ru: 'всё же', ua: 'усе ж' } },
        { ro: 'de aceea', tr: { ru: 'поэтому', ua: 'тому' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я не приду, потому что устал.', ua: 'Я не прийду, бо втомився.' },
      correct: 'Nu vin, pentru că sunt obosit.',
      wrong: ['Nu vin, deși sunt obosit.', 'Vin, pentru că sunt obosit.', 'Nu vin, de aceea sunt obosit.'],
    },
    {
      kind: 'pickNative',
      q: 'Deși e târziu, lucrez.',
      correct: { ru: 'Хотя уже поздно, я работаю.', ua: 'Хоча вже пізно, я працюю.' },
      wrong: [
        { ru: 'Уже поздно, поэтому я не работаю.', ua: 'Уже пізно, тому я не працюю.' },
        { ru: 'Хотя рано, я работаю.', ua: 'Хоча рано, я працюю.' },
        { ru: 'Уже поздно, потому что я работаю.', ua: 'Уже пізно, бо я працюю.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'pentru că', tr: { ru: 'потому что', ua: 'тому що' } },
        { ro: 'deoarece', tr: { ru: 'так как', ua: 'оскільки' } },
        { ro: 'deși', tr: { ru: 'хотя', ua: 'хоча' } },
        { ro: 'totuși', tr: { ru: 'всё же', ua: 'усе ж' } },
        { ro: 'de aceea', tr: { ru: 'поэтому', ua: 'тому' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Plouă, de aceea rămânem acasă',
      tr: { ru: 'Идёт дождь, поэтому остаёмся дома', ua: 'Іде дощ, тому залишаємося вдома' },
      wrong: ['Plouă, dar mergem', 'Deși plouă, rămânem acasă', 'Plouă, de aceea plecăm'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Хотя идёт дождь, мы идём гулять.', ua: 'Хоча йде дощ, ми йдемо гуляти.' },
      words: ['Deși', 'plouă', 'mergem', 'la', 'plimbare'],
      extra: ['pentru', 'ploua', 'că'],
      shown: 'Deși plouă, mergem la plimbare.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Дорого, но всё же я его куплю.', ua: 'Дорого, але все ж я його куплю.' },
      correct: 'E scump, dar totuși îl cumpăr.',
      wrong: ['E scump, de aceea nu-l cumpăr.', 'E ieftin, dar totuși îl cumpăr.', 'E scump, pentru că îl cumpăr.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я учу румынский, потому что живу в Румынии.', ua: 'Я вчу румунську, бо живу в Румунії.' },
      words: ['Învăț', 'română', 'pentru', 'că', 'locuiesc', 'în', 'România'],
      extra: ['deși', 'locuiam', 'la'],
      shown: 'Învăț română pentru că locuiesc în România.',
    },
    {
      kind: 'type',
      q: { ru: 'Потому что я устал(а).', ua: 'Бо я втомився (втомилася).' },
      answers: ['Pentru că sunt obosit', 'Pentru că sunt obosită', 'Deoarece sunt obosit', 'Deoarece sunt obosită'],
      shown: 'Pentru că sunt obosit.',
    },
    {
      kind: 'type',
      q: { ru: 'Поэтому.', ua: 'Тому.' },
      answers: ['De aceea', 'Deci'],
      shown: 'De aceea.',
    },
  ],
};
