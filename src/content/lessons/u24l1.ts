import type { Lesson } from '../types';

/** B2 · Unit 6 · Lesson 1 — holidays and greetings: Crăciun fericit, Paște fericit, Hristos a înviat / Adevărat a înviat, mărțișor, colinde, cozonac. */
export const u24l1: Lesson = {
  id: 'u24l1',
  title: { ru: 'Праздники', ua: 'Свята' },
  words: [
    { ro: 'Crăciun fericit!', tr: { ru: 'С Рождеством!', ua: 'З Різдвом!' } },
    { ro: 'Paște fericit!', tr: { ru: 'Со светлой Пасхой!', ua: 'Зі світлим Великоднем!' } },
    { ro: 'Hristos a înviat!', tr: { ru: 'Христос воскресе!', ua: 'Христос воскрес!' } },
    { ro: 'Adevărat a înviat!', tr: { ru: 'Воистину воскресе!', ua: 'Воістину воскрес!' } },
    { ro: 'mărțișor', tr: { ru: 'мэрцишор (весенний амулет)', ua: 'мерцішор (весняний оберіг)' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Crăciun fericit și un an nou fericit!',
      tr: { ru: 'С Рождеством и с Новым годом!', ua: 'З Різдвом і з Новим роком!' },
      note: {
        ru: 'fericit — счастливый. Крэчун — румынское Рождество, 25 декабря.',
        ua: 'fericit — щасливий. Кречун — румунське Різдво, 25 грудня.',
      },
    },
    {
      kind: 'intro',
      ro: 'De Paște vopsim ouă roșii.',
      tr: { ru: 'На Пасху мы красим яйца в красный.', ua: 'На Великдень ми фарбуємо яйця в червоний.' },
      note: {
        ru: 'De Paște — на Пасху, de Crăciun — на Рождество. ouă — яйца (ou — яйцо).',
        ua: 'De Paște — на Великдень, de Crăciun — на Різдво. ouă — яйця (ou — яйце).',
      },
    },
    {
      kind: 'intro',
      ro: 'Pe întâi martie dăruim mărțișoare.',
      tr: { ru: 'Первого марта дарят мэрцишоры.', ua: 'Першого березня дарують мерцішори.' },
      note: {
        ru: 'Мэрцишор — украшение на бело-красной нитке, его носят в начале весны.',
        ua: 'Мерцішор — прикраса на біло-червоній нитці, її носять на початку весни.',
      },
    },
    {
      kind: 'tip',
      title: 'Sărbători',
      body: {
        ru: [
          'Поздравления: **Crăciun fericit!**, **Paște fericit!**, **La mulți ani!** (с днём рождения / с Новым годом — «многих лет»). На Пасху: **Hristos a înviat!** — **Adevărat a înviat!**',
          'Традиции: **colindele** (колядки), **cozonacul** (кулич, сладкий хлеб), **sarmalele** (голубцы), **ouăle roșii** (крашеные яйца), **mărțișorul** (1 марта).',
        ],
        ua: [
          'Привітання: **Crăciun fericit!**, **Paște fericit!**, **La mulți ani!** (з днем народження / з Новим роком — «многая літа»). На Великдень: **Hristos a înviat!** — **Adevărat a înviat!**',
          'Традиції: **colindele** (колядки), **cozonacul** (паска, солодкий хліб), **sarmalele** (голубці), **ouăle roșii** (крашанки), **mărțișorul** (1 березня).',
        ],
      },
      rows: [
        { ro: 'La mulți ani!', tr: { ru: 'С днём рождения! / С Новым годом!', ua: 'З днем народження! / З Новим роком!' } },
        { ro: 'colinde', tr: { ru: 'колядки', ua: 'колядки' } },
        { ro: 'cozonac', tr: { ru: 'кулич, сладкий хлеб', ua: 'паска, солодкий хліб' } },
        { ro: 'sarmale', tr: { ru: 'голубцы', ua: 'голубці' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Христос воскресе! — Воистину воскресе!', ua: 'Христос воскрес! — Воістину воскрес!' },
      correct: 'Hristos a înviat! — Adevărat a înviat!',
      wrong: ['Crăciun fericit! — Adevărat a înviat!', 'Hristos a înviat! — La mulți ani!', 'Paște fericit! — Crăciun fericit!'],
    },
    {
      kind: 'pickNative',
      q: 'De Crăciun mâncăm sarmale și cozonac.',
      correct: { ru: 'На Рождество мы едим голубцы и кулич.', ua: 'На Різдво ми їмо голубці й паску.' },
      wrong: [
        { ru: 'На Пасху мы едим голубцы и кулич.', ua: 'На Великдень ми їмо голубці й паску.' },
        { ru: 'На Рождество мы печём хлеб.', ua: 'На Різдво ми печемо хліб.' },
        { ru: 'На Рождество мы поём колядки.', ua: 'На Різдво ми співаємо колядки.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'Crăciun', tr: { ru: 'Рождество', ua: 'Різдво' } },
        { ro: 'Paște', tr: { ru: 'Пасха', ua: 'Великдень' } },
        { ro: 'colinde', tr: { ru: 'колядки', ua: 'колядки' } },
        { ro: 'ouă', tr: { ru: 'яйца', ua: 'яйця' } },
        { ro: 'fericit', tr: { ru: 'счастливый', ua: 'щасливий' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'La mulți ani!',
      tr: { ru: 'С днём рождения!', ua: 'З днем народження!' },
      wrong: ['Crăciun fericit!', 'Paște fericit!', 'Mulțumesc mult!'],
    },
    {
      kind: 'tiles',
      q: { ru: 'На Пасху мы красим яйца в красный.', ua: 'На Великдень ми фарбуємо яйця в червоний.' },
      words: ['De', 'Paște', 'vopsim', 'ouă', 'roșii'],
      extra: ['Crăciun', 'ou', 'albe'],
      shown: 'De Paște vopsim ouă roșii.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Дети ходят колядовать.', ua: 'Діти ходять колядувати.' },
      correct: 'Copiii merg cu colindul.',
      wrong: ['Copiii cântă la pian.', 'Copiii merg la școală.', 'Copilul merge cu colindul.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'С Рождеством!', ua: 'З Різдвом!' },
      words: ['Crăciun', 'fericit'],
      extra: ['Paște', 'an', 'nou'],
      shown: 'Crăciun fericit!',
    },
    {
      kind: 'type',
      q: { ru: 'С днём рождения!', ua: 'З днем народження!' },
      answers: ['La mulți ani'],
      shown: 'La mulți ani!',
    },
    {
      kind: 'type',
      q: { ru: 'Воистину воскресе!', ua: 'Воістину воскрес!' },
      answers: ['Adevărat a înviat'],
      shown: 'Adevărat a înviat!',
    },
  ],
};
