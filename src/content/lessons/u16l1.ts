import type { Lesson } from '../types';

/** B1 · Unit 4 · Lesson 1 — giving an opinion: cred că, mi se pare că, după părerea mea, sunt sigur că, nu cred. */
export const u16l1: Lesson = {
  id: 'u16l1',
  title: { ru: 'Мне кажется', ua: 'Мені здається' },
  words: [
    { ro: 'mi se pare că', tr: { ru: 'мне кажется, что', ua: 'мені здається, що' } },
    { ro: 'după părerea mea', tr: { ru: 'по-моему', ua: 'на мою думку' } },
    { ro: 'sunt sigur că', tr: { ru: 'я уверен, что', ua: 'я впевнений, що' } },
    { ro: 'nu cred', tr: { ru: 'не думаю', ua: 'не думаю' } },
    { ro: 'ai dreptate', tr: { ru: 'ты прав(а)', ua: 'ти маєш рацію' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Mi se pare că e prea scump.',
      tr: { ru: 'Мне кажется, это слишком дорого.', ua: 'Мені здається, це занадто дорого.' },
      note: {
        ru: 'mi se pare ≈ «мь се паре» — мне кажется. Тебе кажется — ți se pare.',
        ua: 'mi se pare ≈ «мь се паре» — мені здається. Тобі здається — ți se pare.',
      },
    },
    {
      kind: 'intro',
      ro: 'După părerea mea, filmul e bun.',
      tr: { ru: 'По-моему, фильм хороший.', ua: 'На мою думку, фільм добрий.' },
      note: {
        ru: 'părere ≈ «пэрере» — мнение. după părerea mea — «по моему мнению».',
        ua: 'părere ≈ «пэрере» — думка. după părerea mea — «на мою думку».',
      },
    },
    {
      kind: 'intro',
      ro: 'Sunt sigur că vine.',
      tr: { ru: 'Я уверен, что он придёт.', ua: 'Я впевнений, що він прийде.' },
      note: {
        ru: 'sigur — «уверен»; женщина говорит sunt sigură. vine — «приходит» (о будущем, как в русском «придёт»).',
        ua: 'sigur — «впевнений»; жінка каже sunt sigură. vine — «приходить» (про майбутнє).',
      },
    },
    {
      kind: 'tip',
      title: 'Cred că, mi se pare că',
      body: {
        ru: [
          'Мнение: **cred că** (думаю, что), **mi se pare că** (мне кажется), **după părerea mea** (по-моему), **sunt sigur(ă) că** (уверен(а), что).',
          'Не думаю — **nu cred**. А ты как думаешь? — **Tu ce crezi?**',
        ],
        ua: [
          'Думка: **cred că** (думаю, що), **mi se pare că** (мені здається), **după părerea mea** (на мою думку), **sunt sigur(ă) că** (впевнений(а), що).',
          'Не думаю — **nu cred**. А ти як думаєш? — **Tu ce crezi?**',
        ],
      },
      rows: [
        { ro: 'Cred că ai dreptate.', tr: { ru: 'Думаю, ты прав.', ua: 'Думаю, ти маєш рацію.' } },
        { ro: 'Mi se pare că plouă.', tr: { ru: 'Кажется, идёт дождь.', ua: 'Здається, іде дощ.' } },
        { ro: 'Nu cred.', tr: { ru: 'Не думаю.', ua: 'Не думаю.' } },
        { ro: 'Tu ce crezi?', tr: { ru: 'А ты как думаешь?', ua: 'А ти як думаєш?' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мне кажется, это слишком дорого.', ua: 'Мені здається, це занадто дорого.' },
      correct: 'Mi se pare că e prea scump.',
      wrong: ['Îmi place că e prea scump.', 'Mi se pare că e prea ieftin.', 'Ți se pare că e prea scump.'],
    },
    {
      kind: 'pickNative',
      q: 'Tu ce crezi?',
      correct: { ru: 'А ты как думаешь?', ua: 'А ти як думаєш?' },
      wrong: [
        { ru: 'Что ты делаешь?', ua: 'Що ти робиш?' },
        { ru: 'Ты уверен?', ua: 'Ти впевнений?' },
        { ru: 'Что ты сказал?', ua: 'Що ти сказав?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'cred că', tr: { ru: 'думаю, что', ua: 'думаю, що' } },
        { ro: 'mi se pare', tr: { ru: 'мне кажется', ua: 'мені здається' } },
        { ro: 'părerea', tr: { ru: 'мнение', ua: 'думка' } },
        { ro: 'sigur', tr: { ru: 'уверен', ua: 'впевнений' } },
        { ro: 'nu cred', tr: { ru: 'не думаю', ua: 'не думаю' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Cred că ai dreptate',
      tr: { ru: 'Думаю, ты прав', ua: 'Думаю, ти маєш рацію' },
      wrong: ['Cred că am dreptate', 'Nu cred că ai dreptate', 'Cred că are dreptate'],
    },
    {
      kind: 'tiles',
      q: { ru: 'По-моему, фильм хороший.', ua: 'На мою думку, фільм добрий.' },
      words: ['După', 'părerea', 'mea', 'filmul', 'e', 'bun'],
      extra: ['ta', 'film', 'rău'],
      shown: 'După părerea mea, filmul e bun.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я уверена, что она придёт.', ua: 'Я впевнена, що вона прийде.' },
      correct: 'Sunt sigură că vine.',
      wrong: ['Sunt sigur că vin.', 'Nu sunt sigură că vine.', 'Cred că vine.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Кажется, идёт дождь.', ua: 'Здається, іде дощ.' },
      words: ['Mi', 'se', 'pare', 'că', 'plouă'],
      extra: ['ți', 'ploua', 'ninge'],
      shown: 'Mi se pare că plouă.',
    },
    {
      kind: 'type',
      q: { ru: 'Не думаю.', ua: 'Не думаю.' },
      answers: ['Nu cred', 'Eu nu cred'],
      shown: 'Nu cred.',
    },
    {
      kind: 'type',
      q: { ru: 'Думаю, ты прав(а).', ua: 'Думаю, ти маєш рацію.' },
      answers: ['Cred că ai dreptate'],
      shown: 'Cred că ai dreptate.',
    },
  ],
};
