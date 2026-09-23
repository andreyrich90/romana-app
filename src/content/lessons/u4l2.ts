import type { Lesson } from '../types';

/** Unit 4 · Lesson 2 — transport: the verb «a merge», «cu autobuzul», «la gară», buying a ticket. */
export const u4l2: Lesson = {
  id: 'u4l2',
  title: { ru: 'Транспорт', ua: 'Транспорт' },
  words: [
    { ro: 'autobuzul, trenul, metroul', tr: { ru: 'автобус, поезд, метро', ua: 'автобус, потяг, метро' } },
    { ro: 'Merg cu autobuzul.', tr: { ru: 'Я еду на автобусе.', ua: 'Я їду автобусом.' } },
    { ro: 'Merg la gară.', tr: { ru: 'Я иду на вокзал.', ua: 'Я йду на вокзал.' } },
    { ro: 'pe jos', tr: { ru: 'пешком', ua: 'пішки' } },
    { ro: 'Unde mergi?', tr: { ru: 'Куда ты идёшь?', ua: 'Куди ти йдеш?' } },
    { ro: 'Un bilet pentru Brașov, vă rog.', tr: { ru: 'Билет до Брашова, пожалуйста.', ua: 'Квиток до Брашова, будь ласка.' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'autobuzul, trenul, metroul',
      tr: { ru: 'автобус, поезд, метро', ua: 'автобус, потяг, метро' },
      note: {
        ru: 'Всё с артиклем -ul: autobuz → autobuzul, tren → trenul, metrou → metroul.',
        ua: 'Усе з артиклем -ul: autobuz → autobuzul, tren → trenul, metrou → metroul.',
      },
    },
    {
      kind: 'intro',
      ro: 'Merg cu autobuzul.',
      tr: { ru: 'Я еду на автобусе.', ua: 'Я їду автобусом.' },
      note: {
        ru: 'Дословно «иду с автобусом». a merge — и «идти», и «ехать». Пешком — pe jos.',
        ua: 'Дослівно «йду з автобусом». a merge — і «йти», і «їхати». Пішки — pe jos.',
      },
    },
    {
      kind: 'intro',
      ro: 'Merg la gară.',
      tr: { ru: 'Я иду на вокзал.', ua: 'Я йду на вокзал.' },
      note: {
        ru: 'Куда идёте — la. После la слово обычно без артикля: la gară, la hotel, la farmacie.',
        ua: 'Куди йдете — la. Після la слово зазвичай без артикля: la gară, la hotel, la farmacie.',
      },
    },
    {
      kind: 'tip',
      title: 'A merge — идти, ехать',
      body: {
        ru: [
          'g перед e и i читается как «дж»: merge ≈ «мердже», mergi ≈ «мерджь».',
          'На чём едете — **cu** + артикль: cu autobuz**ul**, cu tren**ul**. Куда — **la** без артикля: la gar**ă**. А **unde** — и «где», и «куда»: **Unde mergi?** — Куда ты идёшь?',
        ],
        ua: [
          'g перед e та i читається як «дж»: merge ≈ «мердже», mergi ≈ «мерджь».',
          'Чим їдете — **cu** + артикль: cu autobuz**ul**, cu tren**ul**. Куди — **la** без артикля: la gar**ă**. А **unde** — і «де», і «куди»: **Unde mergi?** — Куди ти йдеш?',
        ],
      },
      rows: [
        { ro: 'eu merg', tr: { ru: 'я иду · «еу мерг»', ua: 'я йду · «єу мерг»' } },
        { ro: 'tu mergi', tr: { ru: 'ты идёшь · «ту мерджь»', ua: 'ти йдеш · «ту мерджь»' } },
        { ro: 'el, ea merge', tr: { ru: 'он, она идёт · «ел, я мердже»', ua: 'він, вона йде · «єл, я мердже»' } },
        { ro: 'noi mergem', tr: { ru: 'мы идём · «ной мерджем»', ua: 'ми йдемо · «ной мерджем»' } },
        { ro: 'voi mergeți', tr: { ru: 'вы идёте · «вой мерджець»', ua: 'ви йдете · «вой мерджець»' } },
        { ro: 'ei, ele merg', tr: { ru: 'они идут · «ей, еле мерг»', ua: 'вони йдуть · «єй, єле мерг»' } },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'autobuzul', tr: { ru: 'автобус', ua: 'автобус' } },
        { ro: 'trenul', tr: { ru: 'поезд', ua: 'потяг' } },
        { ro: 'metroul', tr: { ru: 'метро', ua: 'метро' } },
        { ro: 'biletul', tr: { ru: 'билет', ua: 'квиток' } },
        { ro: 'pe jos', tr: { ru: 'пешком', ua: 'пішки' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я еду на поезде.', ua: 'Я їду потягом.' },
      correct: 'Merg cu trenul.',
      wrong: ['Merg cu tren.', 'Merg pe trenul.', 'Mergi cu trenul.'],
    },
    {
      kind: 'listen',
      ro: 'Mergem cu metroul',
      tr: { ru: 'Мы едем на метро', ua: 'Ми їдемо метро' },
      wrong: ['Merg cu metroul', 'Mergem cu autobuzul', 'Mergeți cu metroul'],
    },
    {
      kind: 'pickNative',
      q: 'Merg pe jos.',
      correct: { ru: 'Я иду пешком.', ua: 'Я йду пішки.' },
      wrong: [
        { ru: 'Я еду на автобусе.', ua: 'Я їду автобусом.' },
        { ru: 'Мы идём пешком.', ua: 'Ми йдемо пішки.' },
        { ru: 'Я иду на вокзал.', ua: 'Я йду на вокзал.' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я иду на вокзал.', ua: 'Я йду на вокзал.' },
      words: ['Merg', 'la', 'gară'],
      extra: ['gara', 'cu', 'mergi'],
      shown: 'Merg la gară.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Куда ты идёшь?', ua: 'Куди ти йдеш?' },
      correct: 'Unde mergi?',
      wrong: ['Unde merg?', 'Unde este?', 'Unde mergem?'],
    },
    {
      kind: 'intro',
      ro: 'Un bilet pentru Brașov, vă rog.',
      tr: { ru: 'Билет до Брашова, пожалуйста.', ua: 'Квиток до Брашова, будь ласка.' },
      note: {
        ru: 'pentru ≈ «пентру» — «для». Так покупают билет в кассе. Brașov ≈ «брашов».',
        ua: 'pentru ≈ «пентру» — «для». Так купують квиток у касі. Brașov ≈ «брашов».',
      },
    },
    {
      kind: 'type',
      q: { ru: 'Мы едем на автобусе.', ua: 'Ми їдемо автобусом.' },
      answers: ['Mergem cu autobuzul', 'Noi mergem cu autobuzul'],
      shown: 'Mergem cu autobuzul.',
    },
    {
      kind: 'type',
      q: { ru: 'Один билет, пожалуйста.', ua: 'Один квиток, будь ласка.' },
      answers: ['Un bilet, vă rog', 'Un bilet, te rog'],
      shown: 'Un bilet, vă rog.',
    },
  ],
};
