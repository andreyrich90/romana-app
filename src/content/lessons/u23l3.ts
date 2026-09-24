import type { Lesson } from '../types';

/** B2 · Unit 5 · Lesson 3 — connectors: pe de o parte… pe de altă parte, prin urmare, cu toate acestea, în plus, în concluzie. */
export const u23l3: Lesson = {
  id: 'u23l3',
  title: { ru: 'Связный текст', ua: 'Зв’язний текст' },
  words: [
    { ro: 'pe de o parte', tr: { ru: 'с одной стороны', ua: 'з одного боку' } },
    { ro: 'pe de altă parte', tr: { ru: 'с другой стороны', ua: 'з іншого боку' } },
    { ro: 'prin urmare', tr: { ru: 'следовательно, поэтому', ua: 'отже, тому' } },
    { ro: 'cu toate acestea', tr: { ru: 'тем не менее', ua: 'проте, попри це' } },
    { ro: 'în plus', tr: { ru: 'кроме того', ua: 'крім того' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Pe de o parte e scump, pe de altă parte e util.',
      tr: { ru: 'С одной стороны, это дорого, с другой — полезно.', ua: 'З одного боку, це дорого, з іншого — корисно.' },
      note: {
        ru: 'parte — сторона, часть. altă — другая.',
        ua: 'parte — бік, частина. altă — інша.',
      },
    },
    {
      kind: 'intro',
      ro: 'A plouat, prin urmare am rămas acasă.',
      tr: { ru: 'Шёл дождь, поэтому я остался дома.', ua: 'Ішов дощ, тому я залишився вдома.' },
      note: {
        ru: 'prin urmare — книжное «следовательно»; в разговоре — deci или așa că.',
        ua: 'prin urmare — книжне «отже»; у розмові — deci або așa că.',
      },
    },
    {
      kind: 'intro',
      ro: 'Era obosit. Cu toate acestea, a venit.',
      tr: { ru: 'Он устал. Тем не менее он пришёл.', ua: 'Він утомився. Проте він прийшов.' },
      note: {
        ru: 'cu toate acestea — «со всем этим», т. е. несмотря на это.',
        ua: 'cu toate acestea — «з усім цим», тобто попри це.',
      },
    },
    {
      kind: 'tip',
      title: 'Prin urmare',
      body: {
        ru: [
          'Эти слова связывают фразы в текст: **pe de o parte… pe de altă parte** (с одной… с другой), **în plus** (кроме того), **de exemplu** (например).',
          'Вывод: **prin urmare**, **deci** (поэтому), **în concluzie** (в заключение). Уступка: **cu toate acestea** (тем не менее), **totuși** (всё же).',
        ],
        ua: [
          'Ці слова зв’язують фрази в текст: **pe de o parte… pe de altă parte** (з одного… з іншого боку), **în plus** (крім того), **de exemplu** (наприклад).',
          'Висновок: **prin urmare**, **deci** (тому), **în concluzie** (на завершення). Поступка: **cu toate acestea** (проте), **totuși** (усе ж).',
        ],
      },
      rows: [
        { ro: 'de exemplu', tr: { ru: 'например', ua: 'наприклад' } },
        { ro: 'deci', tr: { ru: 'итак, поэтому', ua: 'отже, тому' } },
        { ro: 'totuși', tr: { ru: 'всё же', ua: 'усе ж' } },
        { ro: 'în concluzie', tr: { ru: 'в заключение', ua: 'на завершення' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Кроме того, это близко к центру.', ua: 'Крім того, це близько до центру.' },
      correct: 'În plus, e aproape de centru.',
      wrong: ['În concluzie, e aproape de centru.', 'În plus, e departe de centru.', 'Totuși, e aproape de centru.'],
    },
    {
      kind: 'pickNative',
      q: 'În concluzie, orașul merită vizitat.',
      correct: { ru: 'В заключение: город стоит посетить.', ua: 'На завершення: місто варто відвідати.' },
      wrong: [
        { ru: 'Например, город стоит посетить.', ua: 'Наприклад, місто варто відвідати.' },
        { ru: 'Тем не менее, город не стоит посещать.', ua: 'Проте місто не варто відвідувати.' },
        { ru: 'В заключение: город закрыт для посещений.', ua: 'На завершення: місто закрите для відвідувань.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'prin urmare', tr: { ru: 'следовательно', ua: 'отже' } },
        { ro: 'cu toate acestea', tr: { ru: 'тем не менее', ua: 'проте' } },
        { ro: 'în plus', tr: { ru: 'кроме того', ua: 'крім того' } },
        { ro: 'de exemplu', tr: { ru: 'например', ua: 'наприклад' } },
        { ro: 'totuși', tr: { ru: 'всё же', ua: 'усе ж' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Pe de o parte e scump, pe de altă parte e util',
      tr: { ru: 'С одной стороны дорого, с другой — полезно', ua: 'З одного боку дорого, з іншого — корисно' },
      wrong: ['Pe de o parte e ieftin, pe de altă parte e util', 'E scump, prin urmare e util', 'Pe de o parte e scump, în plus e inutil'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Шёл дождь, поэтому я остался дома.', ua: 'Ішов дощ, тому я залишився вдома.' },
      words: ['A', 'plouat', 'prin', 'urmare', 'am', 'rămas', 'acasă'],
      extra: ['plouă', 'toate', 'plecat'],
      shown: 'A plouat, prin urmare am rămas acasă.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Он устал. Тем не менее он пришёл.', ua: 'Він утомився. Проте він прийшов.' },
      correct: 'Era obosit. Cu toate acestea, a venit.',
      wrong: ['Era obosit. Prin urmare, a venit.', 'Era obosit. Prin urmare, n-a venit.', 'Nu era obosit, deci a venit.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Например, я люблю горы.', ua: 'Наприклад, я люблю гори.' },
      words: ['De', 'exemplu', 'îmi', 'plac', 'munții'],
      extra: ['plus', 'place', 'marea'],
      shown: 'De exemplu, îmi plac munții.',
    },
    {
      kind: 'type',
      q: { ru: 'Кроме того.', ua: 'Крім того.' },
      answers: ['În plus'],
      shown: 'În plus.',
    },
    {
      kind: 'type',
      q: { ru: 'Всё же.', ua: 'Усе ж.' },
      answers: ['Totuși', 'Cu toate acestea'],
      shown: 'Totuși.',
    },
  ],
};
