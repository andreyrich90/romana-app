import type { Lesson } from '../types';

/** A2 · Unit 1 · Lesson 2 — past participles in -it and -ut: citit, dormit, făcut, văzut, băut. */
export const u7l2: Lesson = {
  id: 'u7l2',
  title: { ru: 'Что ты делал?', ua: 'Що ти робив?' },
  words: [
    { ro: 'Ce ai făcut?', tr: { ru: 'Что ты делал(а)?', ua: 'Що ти робив(ла)?' } },
    { ro: 'am văzut', tr: { ru: 'я видел(а), посмотрел(а)', ua: 'я бачив(ла), подивився(лась)' } },
    { ro: 'am băut', tr: { ru: 'я выпил(а)', ua: 'я випив(ла)' } },
    { ro: 'am citit', tr: { ru: 'я читал(а), прочитал(а)', ua: 'я читав(ла), прочитав(ла)' } },
    { ro: 'am dormit', tr: { ru: 'я спал(а)', ua: 'я спав(ла)' } },
    { ro: 'un film', tr: { ru: 'фильм', ua: 'фільм' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Ce ai făcut?',
      tr: { ru: 'Что ты делал(а)?', ua: 'Що ти робив(ла)?' },
      note: {
        ru: 'a face (делать) → făcut. ≈ «че ай фэкут».',
        ua: 'a face (робити) → făcut. ≈ «че ай фекут».',
      },
    },
    {
      kind: 'intro',
      ro: 'Am văzut un film.',
      tr: { ru: 'Я посмотрел(а) фильм.', ua: 'Я подивився(лась) фільм.' },
      note: {
        ru: 'a vedea (видеть) → văzut ≈ «вэзут». Про фильм говорят именно «увидел».',
        ua: 'a vedea (бачити) → văzut ≈ «везут». Про фільм кажуть саме «побачив».',
      },
    },
    {
      kind: 'intro',
      ro: 'Am dormit bine.',
      tr: { ru: 'Я хорошо спал(а).', ua: 'Я добре спав(ла).' },
      note: {
        ru: 'a dormi → dormit ≈ «ам дормит бине».',
        ua: 'a dormi → dormit ≈ «ам дорміт біне».',
      },
    },
    {
      kind: 'tip',
      title: '-it, -ut',
      body: {
        ru: [
          'Глаголы на **-i** дают форму на **-it**: a citi → **citit**, a dormi → **dormit**, a vorbi → **vorbit**.',
          'Глаголы на **-ea** и **-e** чаще всего дают **-ut**: a vedea → **văzut**, a bea → **băut**, a face → **făcut**, a avea → **avut**.',
          'Формы на -ut лучше запоминать парами: face — făcut, vede — văzut, bea — băut.',
        ],
        ua: [
          'Дієслова на **-i** дають форму на **-it**: a citi → **citit**, a dormi → **dormit**, a vorbi → **vorbit**.',
          'Дієслова на **-ea** та **-e** найчастіше дають **-ut**: a vedea → **văzut**, a bea → **băut**, a face → **făcut**, a avea → **avut**.',
          'Форми на -ut краще запам’ятовувати парами: face — făcut, vede — văzut, bea — băut.',
        ],
      },
      rows: [
        { ro: 'a citi → am citit', tr: { ru: 'читать → я прочитал · «ам читит»', ua: 'читати → я прочитав · «ам чітіт»' } },
        { ro: 'a vorbi → am vorbit', tr: { ru: 'говорить → я говорил · «ам ворбит»', ua: 'говорити → я говорив · «ам ворбіт»' } },
        { ro: 'a face → am făcut', tr: { ru: 'делать → я сделал · «ам фэкут»', ua: 'робити → я зробив · «ам фекут»' } },
        { ro: 'a vedea → am văzut', tr: { ru: 'видеть → я видел · «ам вэзут»', ua: 'бачити → я бачив · «ам везут»' } },
        { ro: 'a bea → am băut', tr: { ru: 'пить → я выпил · «ам бэут»', ua: 'пити → я випив · «ам беут»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я посмотрел фильм.', ua: 'Я подивився фільм.' },
      correct: 'Am văzut un film.',
      wrong: ['Văd un film.', 'Ai văzut un film.', 'Am văzut o carte.'],
    },
    {
      kind: 'pickNative',
      q: 'Ce ai făcut ieri?',
      correct: { ru: 'Что ты делал вчера?', ua: 'Що ти робив учора?' },
      wrong: [
        { ru: 'Что ты делаешь сегодня?', ua: 'Що ти робиш сьогодні?' },
        { ru: 'Что ты купил вчера?', ua: 'Що ти купив учора?' },
        { ru: 'Что ты видел вчера?', ua: 'Що ти бачив учора?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'am făcut', tr: { ru: 'я сделал', ua: 'я зробив' } },
        { ro: 'am văzut', tr: { ru: 'я видел', ua: 'я бачив' } },
        { ro: 'am băut', tr: { ru: 'я выпил', ua: 'я випив' } },
        { ro: 'am citit', tr: { ru: 'я прочитал', ua: 'я прочитав' } },
        { ro: 'am dormit', tr: { ru: 'я спал', ua: 'я спав' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Am băut o cafea',
      tr: { ru: 'Я выпил кофе', ua: 'Я випив каву' },
      wrong: ['Am băut un ceai', 'Ai băut o cafea', 'Beau o cafea'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я прочитал книгу.', ua: 'Я прочитав книжку.' },
      words: ['Am', 'citit', 'o', 'carte'],
      extra: ['citesc', 'un', 'ai'],
      shown: 'Am citit o carte.',
    },
    {
      kind: 'tiles',
      q: { ru: 'Она хорошо спала.', ua: 'Вона добре спала.' },
      words: ['Ea', 'a', 'dormit', 'bine'],
      extra: ['am', 'doarme', 'rău'],
      shown: 'Ea a dormit bine.',
      also: ['A dormit bine'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Что вы делали вчера?', ua: 'Що ви робили вчора?' },
      correct: 'Ce ați făcut ieri?',
      wrong: ['Ce au făcut ieri?', 'Ce faceți azi?', 'Ce ați văzut ieri?'],
    },
    {
      kind: 'type',
      q: { ru: 'Что ты делал(а) вчера?', ua: 'Що ти робив(ла) вчора?' },
      answers: ['Ce ai făcut ieri', 'Ce ai făcut tu ieri', 'Tu ce ai făcut ieri', 'Ieri ce ai făcut'],
      shown: 'Ce ai făcut ieri?',
    },
    {
      kind: 'type',
      q: { ru: 'Я выпил(а) чай.', ua: 'Я випив(ла) чай.' },
      answers: ['Am băut un ceai', 'Am băut ceai', 'Eu am băut un ceai', 'Eu am băut ceai'],
      shown: 'Am băut un ceai.',
    },
  ],
};
