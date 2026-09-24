import type { Lesson } from '../types';

/** A2 · Unit 1 · Lesson 3 — past time words (aseară, săptămâna trecută…) and the negative n-am, n-ai, n-a. */
export const u7l3: Lesson = {
  id: 'u7l3',
  title: { ru: 'Вчера вечером', ua: 'Учора ввечері' },
  words: [
    { ro: 'aseară', tr: { ru: 'вчера вечером', ua: 'учора ввечері' } },
    { ro: 'azi-dimineață', tr: { ru: 'сегодня утром', ua: 'сьогодні вранці' } },
    { ro: 'săptămâna trecută', tr: { ru: 'на прошлой неделе', ua: 'минулого тижня' } },
    { ro: 'anul trecut', tr: { ru: 'в прошлом году', ua: 'минулого року' } },
    { ro: 'N-am lucrat.', tr: { ru: 'Я не работал(а).', ua: 'Я не працював(ла).' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'aseară',
      tr: { ru: 'вчера вечером', ua: 'учора ввечері' },
      note: {
        ru: 'Одно слово вместо двух. ≈ «асярэ». Aseară am văzut un film — Вчера вечером я посмотрел фильм.',
        ua: 'Одне слово замість двох. ≈ «асяре». Aseară am văzut un film — Учора ввечері я подивився фільм.',
      },
    },
    {
      kind: 'intro',
      ro: 'săptămâna trecută',
      tr: { ru: 'на прошлой неделе', ua: 'минулого тижня' },
      note: {
        ru: '≈ «сэптэмына трекутэ». Для года — anul trecut «анул трекут»: год мужского рода, поэтому trecut без -ă.',
        ua: '≈ «септемина трекуте». Для року — anul trecut «анул трекут»: рік чоловічого роду, тому trecut без -ă.',
      },
    },
    {
      kind: 'intro',
      ro: 'N-am lucrat.',
      tr: { ru: 'Я не работал(а).', ua: 'Я не працював(ла).' },
      note: {
        ru: 'nu + am сливаются в n-am ≈ «нам». Полная форма nu am тоже верна, но в речи почти всегда n-am.',
        ua: 'nu + am зливаються в n-am ≈ «нам». Повна форма nu am теж правильна, але в мовленні майже завжди n-am.',
      },
    },
    {
      kind: 'tip',
      title: 'N-am, n-ai, n-a',
      body: {
        ru: [
          '**Nu** перед am, ai, a, ați, au теряет **u** и пишется через дефис: **n-am, n-ai, n-a, n-ați, n-au**.',
          'Сегодня утром — **azi-dimineață**, тоже одним словом через дефис. Azi — это разговорное «сегодня» (azi = astăzi).',
        ],
        ua: [
          '**Nu** перед am, ai, a, ați, au втрачає **u** і пишеться через дефіс: **n-am, n-ai, n-a, n-ați, n-au**.',
          'Сьогодні вранці — **azi-dimineață**, теж одним словом через дефіс. Azi — розмовне «сьогодні» (azi = astăzi).',
        ],
      },
      rows: [
        { ro: 'N-am văzut.', tr: { ru: 'Я не видел(а). · «нам вэзут»', ua: 'Я не бачив(ла). · «нам везут»' } },
        { ro: 'N-ai mâncat?', tr: { ru: 'Ты не ел(а)? · «най мынкат»', ua: 'Ти не їв(ла)? · «най минкат»' } },
        { ro: 'N-a dormit.', tr: { ru: 'Он / она не спал(а). · «на дормит»', ua: 'Він / вона не спав(ла). · «на дорміт»' } },
        { ro: 'Azi-dimineață am citit.', tr: { ru: 'Сегодня утром я читал(а). · «азь-диминяцэ ам читит»', ua: 'Сьогодні вранці я читав(ла). · «азь-діміняце ам чітіт»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Вчера вечером я посмотрел фильм.', ua: 'Учора ввечері я подивився фільм.' },
      correct: 'Aseară am văzut un film.',
      wrong: ['Aseară văd un film.', 'Azi-dimineață am văzut un film.', 'Aseară ai văzut un film.'],
    },
    {
      kind: 'pickNative',
      q: 'N-a băut cafea.',
      correct: { ru: 'Он не пил кофе.', ua: 'Він не пив кави.' },
      wrong: [
        { ru: 'Он пил кофе.', ua: 'Він пив каву.' },
        { ru: 'Я не пил кофе.', ua: 'Я не пив кави.' },
        { ru: 'Он не пьёт кофе.', ua: 'Він не п’є кави.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'aseară', tr: { ru: 'вчера вечером', ua: 'учора ввечері' } },
        { ro: 'azi-dimineață', tr: { ru: 'сегодня утром', ua: 'сьогодні вранці' } },
        { ro: 'săptămâna trecută', tr: { ru: 'на прошлой неделе', ua: 'минулого тижня' } },
        { ro: 'anul trecut', tr: { ru: 'в прошлом году', ua: 'минулого року' } },
        { ro: 'ieri', tr: { ru: 'вчера', ua: 'учора' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'N-am mâncat azi',
      tr: { ru: 'Я сегодня не ел', ua: 'Я сьогодні не їв' },
      wrong: ['Am mâncat azi', 'N-ai mâncat azi', 'N-am mâncat aseară'],
    },
    {
      kind: 'tiles',
      q: { ru: 'На прошлой неделе я не работал.', ua: 'Минулого тижня я не працював.' },
      words: ['Săptămâna', 'trecută', 'n-am', 'lucrat'],
      extra: ['am', 'trecut', 'ieri'],
      shown: 'Săptămâna trecută n-am lucrat.',
      also: ['N-am lucrat săptămâna trecută'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Ты не спал?', ua: 'Ти не спав?' },
      correct: 'N-ai dormit?',
      wrong: ['N-am dormit?', 'Ai dormit?', 'Nu dormi?'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Вы поели сегодня утром?', ua: 'Ви поїли сьогодні вранці?' },
      words: ['Ați', 'mâncat', 'azi-dimineață'],
      extra: ['aseară', 'au', 'mănânci'],
      shown: 'Ați mâncat azi-dimineață?',
    },
    {
      kind: 'type',
      q: { ru: 'Вчера вечером я читал(а).', ua: 'Учора ввечері я читав(ла).' },
      answers: ['Aseară am citit', 'Am citit aseară', 'Eu am citit aseară', 'Aseară eu am citit'],
      shown: 'Aseară am citit.',
    },
    {
      kind: 'type',
      q: { ru: 'Я не работал(а).', ua: 'Я не працював(ла).' },
      answers: ['N-am lucrat', 'Nu am lucrat', 'Eu n-am lucrat', 'Eu nu am lucrat'],
      shown: 'N-am lucrat.',
    },
  ],
};
