import type { Lesson } from '../types';

/** B1 · Unit 4 · Lesson 5 — review of opinions, agreement, comparison and connectors. No new grammar. */
export const u16l5: Lesson = {
  id: 'u16l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Mi se pare că ai dreptate.', tr: { ru: 'Мне кажется, ты прав.', ua: 'Мені здається, ти маєш рацію.' } },
    { ro: 'mai mic decât', tr: { ru: 'меньше, чем', ua: 'менший, ніж' } },
    { ro: 'Deși sunt obosit, lucrez.', tr: { ru: 'Хотя я устал, я работаю.', ua: 'Хоча я втомився, я працюю.' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Părerea mea',
      body: {
        ru: [
          'Мнение — **cred că, mi se pare că, după părerea mea**. Согласие — **sunt de acord, ai dreptate**.',
          'Сравнение — **mai… decât, cel mai, la fel de… ca**. Связки — **pentru că, deși, totuși, de aceea**.',
        ],
        ua: [
          'Думка — **cred că, mi se pare că, după părerea mea**. Згода — **sunt de acord, ai dreptate**.',
          'Порівняння — **mai… decât, cel mai, la fel de… ca**. Сполучники — **pentru că, deși, totuși, de aceea**.',
        ],
      },
      rows: [
        { ro: 'cred că', tr: { ru: 'думаю, что', ua: 'думаю, що' } },
        { ro: 'sunt de acord', tr: { ru: 'согласен', ua: 'згоден' } },
        { ro: 'cel mai bun', tr: { ru: 'лучший', ua: 'найкращий' } },
        { ro: 'deși', tr: { ru: 'хотя', ua: 'хоча' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Думаю, что метро лучше автобуса.', ua: 'Думаю, що метро краще за автобус.' },
      correct: 'Cred că metroul e mai bun decât autobuzul.',
      wrong: ['Cred că autobuzul e mai bun decât metroul.', 'Nu cred că metroul e mai bun decât autobuzul.', 'Cred că metroul e la fel de bun ca autobuzul.'],
    },
    {
      kind: 'pickNative',
      q: 'Nu sunt de acord, pentru că e prea scump.',
      correct: { ru: 'Я не согласен, потому что это слишком дорого.', ua: 'Я не згоден, бо це занадто дорого.' },
      wrong: [
        { ru: 'Я согласен, потому что это дёшево.', ua: 'Я згоден, бо це дешево.' },
        { ru: 'Я не согласен, хотя это дорого.', ua: 'Я не згоден, хоча це дорого.' },
        { ru: 'Я не согласен, поэтому это дорого.', ua: 'Я не згоден, тому це дорого.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'mi se pare', tr: { ru: 'мне кажется', ua: 'мені здається' } },
        { ro: 'de acord', tr: { ru: 'согласен', ua: 'згоден' } },
        { ro: 'decât', tr: { ru: 'чем', ua: 'ніж' } },
        { ro: 'deși', tr: { ru: 'хотя', ua: 'хоча' } },
        { ro: 'de aceea', tr: { ru: 'поэтому', ua: 'тому' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Cea mai bună idee',
      tr: { ru: 'Лучшая идея', ua: 'Найкраща ідея' },
      wrong: ['O idee bună', 'Cea mai rea idee', 'Cel mai bun film'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мне кажется, ты прав.', ua: 'Мені здається, ти маєш рацію.' },
      words: ['Mi', 'se', 'pare', 'că', 'ai', 'dreptate'],
      extra: ['am', 'cred', 'ți'],
      shown: 'Mi se pare că ai dreptate.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Хотя я устал, я работаю.', ua: 'Хоча я втомився, я працюю.' },
      correct: 'Deși sunt obosit, lucrez.',
      wrong: ['Pentru că sunt obosit, lucrez.', 'Deși sunt obosit, nu lucrez.', 'Sunt obosit, de aceea lucrez.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Кишинёв меньше Бухареста.', ua: 'Кишинів менший за Бухарест.' },
      words: ['Chișinăul', 'e', 'mai', 'mic', 'decât', 'Bucureștiul'],
      extra: ['cel', 'mare', 'ca'],
      shown: 'Chișinăul e mai mic decât Bucureștiul.',
    },
    {
      kind: 'type',
      q: { ru: 'Я не согласен (не согласна).', ua: 'Я не згоден (не згодна).' },
      answers: ['Nu sunt de acord', 'Eu nu sunt de acord'],
      shown: 'Nu sunt de acord.',
    },
    {
      kind: 'type',
      q: { ru: 'Мне кажется, это слишком дорого.', ua: 'Мені здається, це занадто дорого.' },
      answers: ['Mi se pare că e prea scump', 'Mi se pare prea scump', 'Mi se pare că este prea scump'],
      shown: 'Mi se pare că e prea scump.',
    },
    {
      kind: 'type',
      q: { ru: 'Всё же.', ua: 'Усе ж.' },
      answers: ['Totuși'],
      shown: 'Totuși.',
    },
  ],
};
