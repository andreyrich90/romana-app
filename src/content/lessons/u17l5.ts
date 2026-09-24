import type { Lesson } from '../types';

/** B1 · Unit 5 · Lesson 5 — review of relative clauses, reported speech and letters. No new grammar. */
export const u17l5: Lesson = {
  id: 'u17l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Prietenul care m-a ajutat', tr: { ru: 'Друг, который мне помог', ua: 'Друг, який мені допоміг' } },
    { ro: 'Mi-a spus că vine.', tr: { ru: 'Он сказал мне, что придёт.', ua: 'Він сказав мені, що прийде.' } },
    { ro: 'M-a întrebat dacă sunt bine.', tr: { ru: 'Он спросил, всё ли у меня хорошо.', ua: 'Він запитав, чи в мене все добре.' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Care, că, dacă',
      body: {
        ru: [
          '**Care / pe care** — который / которого: filmul pe care l-am văzut.',
          'Сказал — **mi-a spus că…**, спросил — **m-a întrebat dacă / unde…**. Время не сдвигается.',
        ],
        ua: [
          '**Care / pe care** — який / якого: filmul pe care l-am văzut.',
          'Сказав — **mi-a spus că…**, запитав — **m-a întrebat dacă / unde…**. Час не зсувається.',
        ],
      },
      rows: [
        { ro: 'care', tr: { ru: 'который', ua: 'який' } },
        { ro: 'mi-a spus că', tr: { ru: 'он сказал мне, что', ua: 'він сказав мені, що' } },
        { ro: 'm-a întrebat dacă', tr: { ru: 'он спросил меня, …ли', ua: 'він запитав мене, чи' } },
        { ro: 'Cu stimă', tr: { ru: 'С уважением', ua: 'З повагою' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Друг, который мне помог.', ua: 'Друг, який мені допоміг.' },
      correct: 'Prietenul care m-a ajutat.',
      wrong: ['Prietenul pe care m-a ajutat.', 'Prietenul care l-am ajutat.', 'Prietenul unde m-a ajutat.'],
    },
    {
      kind: 'pickNative',
      q: 'Mi-a spus că nu poate veni.',
      correct: { ru: 'Он сказал мне, что не может прийти.', ua: 'Він сказав мені, що не може прийти.' },
      wrong: [
        { ru: 'Я сказал ему, что не могу прийти.', ua: 'Я сказав йому, що не можу прийти.' },
        { ru: 'Он спросил меня, могу ли я прийти.', ua: 'Він запитав мене, чи можу я прийти.' },
        { ru: 'Он сказал мне, что может прийти.', ua: 'Він сказав мені, що може прийти.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'care', tr: { ru: 'который', ua: 'який' } },
        { ro: 'mi-a spus', tr: { ru: 'мне сказал', ua: 'мені сказав' } },
        { ro: 'm-a întrebat', tr: { ru: 'меня спросил', ua: 'мене запитав' } },
        { ro: 'dragă', tr: { ru: 'дорогой', ua: 'дорогий' } },
        { ro: 'cu stimă', tr: { ru: 'с уважением', ua: 'з повагою' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'M-a întrebat dacă sunt bine',
      tr: { ru: 'Он спросил, всё ли у меня хорошо', ua: 'Він запитав, чи в мене все добре' },
      wrong: ['M-a întrebat dacă ești bine', 'Mi-a spus că sunt bine', 'M-a întrebat dacă e bine'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Книга, которую я прочитал, интересная.', ua: 'Книжка, яку я прочитав, цікава.' },
      words: ['Cartea', 'pe', 'care', 'am', 'citit-o', 'e', 'interesantă'],
      extra: ['l-am', 'citit', 'unde'],
      shown: 'Cartea pe care am citit-o e interesantă.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я спросил её, где она живёт.', ua: 'Я запитав її, де вона живе.' },
      correct: 'Am întrebat-o unde locuiește.',
      wrong: ['M-a întrebat unde locuiesc.', 'L-am întrebat unde locuiește.', 'Am întrebat-o când pleacă.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Она сказала нам, что уезжает.', ua: 'Вона сказала нам, що їде.' },
      words: ['Ne-a', 'spus', 'că', 'pleacă'],
      extra: ['mi-a', 'plec', 'dacă'],
      shown: 'Ne-a spus că pleacă.',
    },
    {
      kind: 'type',
      q: { ru: 'Он сказал мне, что придёт.', ua: 'Він сказав мені, що прийде.' },
      answers: ['Mi-a spus că vine', 'Mi-a zis că vine', 'Mi-a spus că o să vină', 'Mi-a spus că va veni'],
      shown: 'Mi-a spus că vine.',
    },
    {
      kind: 'type',
      q: { ru: 'Он спросил, хочу ли я чаю.', ua: 'Він запитав, чи хочу я чаю.' },
      answers: ['M-a întrebat dacă vreau ceai', 'M-a întrebat dacă vreau un ceai'],
      shown: 'M-a întrebat dacă vreau ceai.',
    },
    {
      kind: 'type',
      q: { ru: 'Дорогая Анна,', ua: 'Дорога Анно,' },
      answers: ['Dragă Ana'],
      shown: 'Dragă Ana,',
    },
  ],
};
