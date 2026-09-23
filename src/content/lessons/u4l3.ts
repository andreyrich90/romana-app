import type { Lesson } from '../types';

/** Unit 4 · Lesson 3 — directions: la dreapta / la stânga / drept înainte, pe dreapta, polite imperative. */
export const u4l3: Lesson = {
  id: 'u4l3',
  title: { ru: 'Направо, налево', ua: 'Праворуч, ліворуч' },
  words: [
    { ro: 'Scuzați-mă!', tr: { ru: 'Извините!', ua: 'Перепрошую!' } },
    { ro: 'la dreapta, la stânga', tr: { ru: 'направо, налево', ua: 'праворуч, ліворуч' } },
    { ro: 'drept înainte', tr: { ru: 'прямо', ua: 'прямо' } },
    { ro: 'pe dreapta, pe stânga', tr: { ru: 'справа, слева', ua: 'справа, зліва' } },
    { ro: 'Mergeți…', tr: { ru: 'Идите…', ua: 'Йдіть…' } },
    { ro: 'Luați autobuzul…', tr: { ru: 'Садитесь на автобус…', ua: 'Сідайте на автобус…' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Scuzați-mă!',
      tr: { ru: 'Извините!', ua: 'Перепрошую!' },
      note: {
        ru: 'Так обращаются к прохожему. ≈ «скузаць-мэ».',
        ua: 'Так звертаються до перехожого. ≈ «скузаць-ме».',
      },
    },
    {
      kind: 'intro',
      ro: 'la dreapta, la stânga',
      tr: { ru: 'направо, налево', ua: 'праворуч, ліворуч' },
      note: {
        ru: 'dreapta ≈ «дряпта», stânga ≈ «стынга». Как и русское «на-право», идёт с предлогом: la dreapta.',
        ua: 'dreapta ≈ «дряпта», stânga ≈ «стинга». Завжди з прийменником: la dreapta.',
      },
    },
    {
      kind: 'intro',
      ro: 'drept înainte',
      tr: { ru: 'прямо', ua: 'прямо' },
      note: {
        ru: '≈ «дрепт ынаинте». î читается как â — похоже на «ы».',
        ua: '≈ «дрепт инаїнте». î читається як â — схоже на «и».',
      },
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'la dreapta', tr: { ru: 'направо', ua: 'праворуч' } },
        { ro: 'la stânga', tr: { ru: 'налево', ua: 'ліворуч' } },
        { ro: 'drept înainte', tr: { ru: 'прямо', ua: 'прямо' } },
        { ro: 'aici', tr: { ru: 'здесь', ua: 'тут' } },
        { ro: 'acolo', tr: { ru: 'там', ua: 'там' } },
      ],
    },
    {
      kind: 'tip',
      title: 'Mergeți la dreapta',
      body: {
        ru: [
          'Вежливое «идите», «садитесь» — та же форма, что у voi: **mergeți**, **luați**.',
          '**La** dreapta — куда повернуть. **Pe** dreapta — где находится: Farmacia este **pe** dreapta — Аптека справа.',
        ],
        ua: [
          'Ввічливе «йдіть», «сідайте» — та сама форма, що у voi: **mergeți**, **luați**.',
          '**La** dreapta — куди повернути. **Pe** dreapta — де розташовано: Farmacia este **pe** dreapta — Аптека справа.',
        ],
      },
      rows: [
        { ro: 'Mergeți drept înainte.', tr: { ru: 'Идите прямо. · «мерджець дрепт ынаинте»', ua: 'Йдіть прямо. · «мерджець дрепт инаїнте»' } },
        { ro: 'Mergeți la dreapta.', tr: { ru: 'Поверните направо. · «мерджець ла дряпта»', ua: 'Поверніть праворуч. · «мерджець ла дряпта»' } },
        { ro: 'Luați autobuzul cinci.', tr: { ru: 'Садитесь на пятый автобус. · «луаць аутобузул чинчь»', ua: 'Сідайте на пʼятий автобус. · «луаць аутобузул чінчь»' } },
        { ro: 'Este pe stânga.', tr: { ru: 'Это слева. · «есте пе стынга»', ua: 'Це зліва. · «єсте пе стинга»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Поверните налево.', ua: 'Поверніть ліворуч.' },
      correct: 'Mergeți la stânga.',
      wrong: ['Mergeți la dreapta.', 'Merg la stânga.', 'Mergeți drept înainte.'],
    },
    {
      kind: 'listen',
      ro: 'Mergeți drept înainte',
      tr: { ru: 'Идите прямо', ua: 'Йдіть прямо' },
      wrong: ['Mergeți la dreapta', 'Mergeți la stânga', 'Merg drept înainte'],
    },
    {
      kind: 'pickNative',
      q: 'Farmacia este pe dreapta.',
      correct: { ru: 'Аптека справа.', ua: 'Аптека справа.' },
      wrong: [
        { ru: 'Аптека слева.', ua: 'Аптека зліва.' },
        { ru: 'Аптека прямо.', ua: 'Аптека прямо.' },
        { ru: 'Где аптека?', ua: 'Де аптека?' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Извините, где вокзал?', ua: 'Перепрошую, де вокзал?' },
      words: ['Scuzați-mă', 'unde', 'este', 'gara'],
      extra: ['stânga', 'sunt', 'la'],
      shown: 'Scuzați-mă, unde este gara?',
    },
    {
      kind: 'tiles',
      q: { ru: 'Банк слева.', ua: 'Банк зліва.' },
      words: ['Banca', 'este', 'pe', 'stânga'],
      extra: ['dreapta', 'sunt', 'aici'],
      shown: 'Banca este pe stânga.',
    },
    {
      kind: 'type',
      q: { ru: 'Идите направо.', ua: 'Йдіть праворуч.' },
      answers: ['Mergeți la dreapta', 'Luați-o la dreapta'],
      shown: 'Mergeți la dreapta.',
    },
    {
      kind: 'type',
      q: { ru: 'Извините, где аптека?', ua: 'Перепрошую, де аптека?' },
      answers: ['Scuzați-mă, unde este farmacia', 'Scuzați-mă, unde e farmacia', 'Scuzați, unde este farmacia'],
      shown: 'Scuzați-mă, unde este farmacia?',
    },
  ],
};
