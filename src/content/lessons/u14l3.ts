import type { Lesson } from '../types';

/** B1 · Unit 2 · Lesson 3 — advice: ar trebui să, ar fi mai bine să, în locul tău aș… */
export const u14l3: Lesson = {
  id: 'u14l3',
  title: { ru: 'Советы', ua: 'Поради' },
  words: [
    { ro: 'ar trebui să', tr: { ru: 'надо бы, стоило бы', ua: 'треба було б, варто' } },
    { ro: 'ar fi mai bine să', tr: { ru: 'было бы лучше', ua: 'було б краще' } },
    { ro: 'în locul tău', tr: { ru: 'на твоём месте', ua: 'на твоєму місці' } },
    { ro: 'n-aș', tr: { ru: 'я бы не', ua: 'я б не' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Ar trebui să te odihnești.',
      tr: { ru: 'Тебе надо бы отдохнуть.', ua: 'Тобі варто відпочити.' },
      note: {
        ru: 'ar trebui să — мягкое «надо»: совет, а не приказ. te odihnești — «ты отдыхаешь» (a se odihni).',
        ua: 'ar trebui să — м’яке «треба»: порада, а не наказ. te odihnești — «ти відпочиваєш» (a se odihni).',
      },
    },
    {
      kind: 'intro',
      ro: 'În locul tău, aș merge la doctor.',
      tr: { ru: 'На твоём месте я бы пошёл (пошла) к врачу.', ua: 'На твоєму місці я б пішов (пішла) до лікаря.' },
      note: {
        ru: 'în locul tău ≈ «ын локул тэу» — на твоём месте. Вам — în locul dumneavoastră.',
        ua: 'în locul tău ≈ «ин локул теу» — на твоєму місці. Вам — în locul dumneavoastră.',
      },
    },
    {
      kind: 'intro',
      ro: 'Ar fi mai bine să pleci acum.',
      tr: { ru: 'Лучше тебе уйти сейчас.', ua: 'Краще тобі піти зараз.' },
      note: {
        ru: 'ar fi mai bine să — «было бы лучше». После să — глагол того, кому советуют: pleci — «ты».',
        ua: 'ar fi mai bine să — «було б краще». Після să — дієслово того, кому радять: pleci — «ти».',
      },
    },
    {
      kind: 'tip',
      title: 'Ar trebui să…',
      body: {
        ru: [
          'Совет звучит мягче через «бы»: **trebuie să** (надо) → **ar trebui să** (надо бы, стоило бы).',
          '**Ar fi mai bine să…** — было бы лучше… **În locul tău, aș…** — на твоём месте я бы… Отрицание: **n-aș** — я бы не.',
          'После **să** глагол в лице того, кому советуют: ar trebui **să mănânci** (тебе), ar trebui **să mănânce** (ему).',
        ],
        ua: [
          'Порада звучить м’якше через «б»: **trebuie să** (треба) → **ar trebui să** (варто, треба було б).',
          '**Ar fi mai bine să…** — було б краще… **În locul tău, aș…** — на твоєму місці я б… Заперечення: **n-aș** — я б не.',
          'Після **să** дієслово в особі того, кому радять: ar trebui **să mănânci** (тобі), ar trebui **să mănânce** (йому).',
        ],
      },
      rows: [
        { ro: 'Ar trebui să dormi mai mult.', tr: { ru: 'Тебе надо бы больше спать.', ua: 'Тобі варто більше спати.' } },
        { ro: 'Ar trebui să învețe.', tr: { ru: 'Ему стоило бы учиться.', ua: 'Йому варто вчитися.' } },
        { ro: 'Ar fi mai bine să mergem.', tr: { ru: 'Лучше бы нам пойти.', ua: 'Краще б нам піти.' } },
        { ro: 'În locul tău, aș aștepta.', tr: { ru: 'На твоём месте я бы подождал.', ua: 'На твоєму місці я б почекав.' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Тебе надо бы больше спать.', ua: 'Тобі варто більше спати.' },
      correct: 'Ar trebui să dormi mai mult.',
      wrong: ['Trebuie să dorm mai mult.', 'Ar trebui să dorm mai mult.', 'Ai dormit mai mult.'],
    },
    {
      kind: 'pickNative',
      q: 'În locul tău, n-aș face asta.',
      correct: { ru: 'На твоём месте я бы этого не делал.', ua: 'На твоєму місці я б цього не робив.' },
      wrong: [
        { ru: 'На твоём месте я бы это сделал.', ua: 'На твоєму місці я б це зробив.' },
        { ru: 'Я этого не делал.', ua: 'Я цього не робив.' },
        { ru: 'На моём месте ты бы этого не делал.', ua: 'На моєму місці ти б цього не робив.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'ar trebui să', tr: { ru: 'надо бы', ua: 'варто' } },
        { ro: 'ar fi mai bine', tr: { ru: 'было бы лучше', ua: 'було б краще' } },
        { ro: 'în locul tău', tr: { ru: 'на твоём месте', ua: 'на твоєму місці' } },
        { ro: 'n-aș', tr: { ru: 'я бы не', ua: 'я б не' } },
        { ro: 'aș aștepta', tr: { ru: 'я бы подождал', ua: 'я б почекав' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Ar trebui să mergi la doctor',
      tr: { ru: 'Тебе надо бы сходить к врачу', ua: 'Тобі варто сходити до лікаря' },
      wrong: ['Trebuie să merg la doctor', 'Ar trebui să meargă la doctor', 'Ar trebui să mergi la farmacie'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Вам стоило бы отдохнуть.', ua: 'Вам варто відпочити.' },
      words: ['Ar', 'trebui', 'să', 'vă', 'odihniți'],
      extra: ['te', 'odihnești', 'trebuie'],
      shown: 'Ar trebui să vă odihniți.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Лучше бы нам уйти сейчас.', ua: 'Краще б нам піти зараз.' },
      correct: 'Ar fi mai bine să plecăm acum.',
      wrong: ['Ar fi mai bine să pleci acum.', 'E mai bine să plecăm mâine.', 'Am plecat acum.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'На твоём месте я бы подождал.', ua: 'На твоєму місці я б почекав.' },
      words: ['În', 'locul', 'tău', 'aș', 'aștepta'],
      extra: ['am', 'așteptat', 'meu'],
      shown: 'În locul tău, aș aștepta.',
    },
    {
      kind: 'type',
      q: { ru: 'Тебе надо бы отдохнуть.', ua: 'Тобі варто відпочити.' },
      answers: ['Ar trebui să te odihnești'],
      shown: 'Ar trebui să te odihnești.',
    },
    {
      kind: 'type',
      q: { ru: 'На твоём месте я бы пошёл (пошла) к врачу.', ua: 'На твоєму місці я б пішов (пішла) до лікаря.' },
      answers: ['În locul tău, aș merge la doctor', 'În locul tău, aș merge la medic', 'Aș merge la doctor în locul tău'],
      shown: 'În locul tău, aș merge la doctor.',
    },
  ],
};
