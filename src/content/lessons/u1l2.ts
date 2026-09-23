import type { Lesson } from '../types';

/** Unit 1 · Lesson 2 — the verb «a fi» (to be), personal pronouns, negation with «nu». */
export const u1l2: Lesson = {
  id: 'u1l2',
  title: { ru: 'Кто я', ua: 'Хто я' },
  words: [
    { ro: 'eu sunt', tr: { ru: 'я (есть)', ua: 'я (є)' } },
    { ro: 'tu ești', tr: { ru: 'ты (есть)', ua: 'ти (є)' } },
    { ro: 'el / ea este', tr: { ru: 'он / она (есть)', ua: 'він / вона (є)' } },
    { ro: 'noi suntem', tr: { ru: 'мы (есть)', ua: 'ми (є)' } },
    { ro: 'student / studentă', tr: { ru: 'студент / студентка', ua: 'студент / студентка' } },
    { ro: 'Nu sunt…', tr: { ru: 'Я не…', ua: 'Я не…' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Eu sunt',
      tr: { ru: 'Я (есть)', ua: 'Я (є)' },
      note: {
        ru: 'В румынском глагол «быть» не пропускают: «Я студент» — Eu sunt student. А вот «eu» часто опускают: Sunt student.',
        ua: 'У румунській дієслово «бути» не пропускають: «Я студент» — Eu sunt student. А от «eu» часто опускають: Sunt student.',
      },
    },
    {
      kind: 'intro',
      ro: 'Tu ești',
      tr: { ru: 'Ты (есть)', ua: 'Ти (є)' },
      note: {
        ru: 'ș читается как «ш», конечное i почти не слышно: ești ≈ «ешть».',
        ua: 'ș читається як «ш», кінцеве i майже не чути: ești ≈ «ешть».',
      },
    },
    {
      kind: 'intro',
      ro: 'El este, ea este',
      tr: { ru: 'Он есть, она есть', ua: 'Він є, вона є' },
      note: {
        ru: 'В разговоре este часто сокращают до e: Ea e studentă — Она студентка.',
        ua: 'У розмові este часто скорочують до e: Ea e studentă — Вона студентка.',
      },
    },
    {
      kind: 'pickNative',
      q: 'Tu ești',
      correct: { ru: 'Ты (есть)', ua: 'Ти (є)' },
      wrong: [
        { ru: 'Я (есть)', ua: 'Я (є)' },
        { ru: 'Он (есть)', ua: 'Він (є)' },
        { ru: 'Мы (есть)', ua: 'Ми (є)' },
      ],
    },
    {
      kind: 'tip',
      title: 'A fi — быть',
      body: {
        ru: [
          'У каждого лица своя форма глагола, поэтому местоимение можно опустить: **Sunt** Ana, **Ești** student?',
          'Вежливое «Вы» — **Dumneavoastră sunteți**. Форма глагола та же, что у «voi» (вы, несколько человек).',
        ],
        ua: [
          'Кожна особа має свою форму дієслова, тому займенник можна опустити: **Sunt** Ana, **Ești** student?',
          'Ввічливе «Ви» — **Dumneavoastră sunteți**. Форма дієслова та сама, що в «voi» (ви, кілька людей).',
        ],
      },
      rows: [
        { ro: 'eu sunt', tr: { ru: 'я · «сунт»', ua: 'я · «сунт»' } },
        { ro: 'tu ești', tr: { ru: 'ты · «ешть»', ua: 'ти · «ешть»' } },
        { ro: 'el, ea este', tr: { ru: 'он, она · «йесте»', ua: 'він, вона · «йесте»' } },
        { ro: 'noi suntem', tr: { ru: 'мы · «сунтем»', ua: 'ми · «сунтем»' } },
        { ro: 'voi sunteți', tr: { ru: 'вы · «сунтець»', ua: 'ви · «сунтець»' } },
        { ro: 'ei, ele sunt', tr: { ru: 'они · «сунт»', ua: 'вони · «сунт»' } },
      ],
    },
    {
      kind: 'intro',
      ro: 'student, studentă',
      tr: { ru: 'студент, студентка', ua: 'студент, студентка' },
      note: {
        ru: 'Женский род часто получается окончанием -ă: student → studentă, profesor → profesoară.',
        ua: 'Жіночий рід часто утворюється закінченням -ă: student → studentă, profesor → profesoară.',
      },
    },
    {
      kind: 'pickRo',
      q: { ru: 'Она студентка.', ua: 'Вона студентка.' },
      correct: 'Ea este studentă.',
      wrong: ['El este student.', 'Ea ești studentă.', 'Eu sunt studentă.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я студент.', ua: 'Я студент.' },
      words: ['Eu', 'sunt', 'student'],
      extra: ['ești', 'este', 'studentă'],
      shown: 'Eu sunt student.',
    },
    {
      kind: 'listen',
      ro: 'El este student',
      tr: { ru: 'Он студент', ua: 'Він студент' },
      wrong: ['Ea este studentă', 'Eu sunt student', 'Tu ești student'],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'eu', tr: { ru: 'я', ua: 'я' } },
        { ro: 'tu', tr: { ru: 'ты', ua: 'ти' } },
        { ro: 'el', tr: { ru: 'он', ua: 'він' } },
        { ro: 'ea', tr: { ru: 'она', ua: 'вона' } },
        { ro: 'noi', tr: { ru: 'мы', ua: 'ми' } },
      ],
    },
    {
      kind: 'intro',
      ro: 'Nu sunt student.',
      tr: { ru: 'Я не студент.', ua: 'Я не студент.' },
      note: {
        ru: 'Отрицание nu ставится прямо перед глаголом — как «не» в русском.',
        ua: 'Заперечення nu ставиться просто перед дієсловом — як «не» в українській.',
      },
    },
    {
      kind: 'tiles',
      q: { ru: 'Ты студентка?', ua: 'Ти студентка?' },
      words: ['Ești', 'studentă'],
      extra: ['student', 'sunt', 'este', 'Tu'],
      shown: 'Ești studentă?',
      also: ['Tu ești studentă'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мы не студенты.', ua: 'Ми не студенти.' },
      words: ['Noi', 'nu', 'suntem', 'studenți'],
      extra: ['sunt', 'student', 'ești'],
      shown: 'Noi nu suntem studenți.',
    },
    {
      kind: 'tiles',
      q: { ru: 'Я не студентка.', ua: 'Я не студентка.' },
      words: ['Nu', 'sunt', 'studentă'],
      extra: ['ești', 'student', 'Eu'],
      shown: 'Nu sunt studentă.',
      also: ['Eu nu sunt studentă'],
    },
  ],
};
