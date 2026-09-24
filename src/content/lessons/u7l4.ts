import type { Lesson } from '../types';

/** A2 · Unit 1 · Lesson 4 — travel in the past: am fost, am mers, am plecat, am ajuns, când? */
export const u7l4: Lesson = {
  id: 'u7l4',
  title: { ru: 'Я был на море', ua: 'Я був на морі' },
  words: [
    { ro: 'am fost', tr: { ru: 'я был(а)', ua: 'я був(ла)' } },
    { ro: 'am mers', tr: { ru: 'я ходил(а), ехал(а)', ua: 'я ходив(ла), їхав(ла)' } },
    { ro: 'am plecat', tr: { ru: 'я уехал(а), ушёл (ушла)', ua: 'я поїхав(ла), пішов (пішла)' } },
    { ro: 'am ajuns', tr: { ru: 'я приехал(а), добрался(лась)', ua: 'я приїхав(ла), дістався(лась)' } },
    { ro: 'la mare', tr: { ru: 'на море', ua: 'на морі, на море' } },
    { ro: 'la munte', tr: { ru: 'в горах, в горы', ua: 'у горах, у гори' } },
    { ro: 'Când?', tr: { ru: 'Когда?', ua: 'Коли?' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Am fost la mare.',
      tr: { ru: 'Я был(а) на море.', ua: 'Я був(ла) на морі.' },
      note: {
        ru: 'a fi (быть) → fost ≈ «ам фост ла маре». Так же говорят и «я ездил на море». В горах — la munte «ла мунте».',
        ua: 'a fi (бути) → fost ≈ «ам фост ла маре». Так само кажуть і «я їздив на море». У горах — la munte «ла мунте».',
      },
    },
    {
      kind: 'intro',
      ro: 'Am mers cu trenul.',
      tr: { ru: 'Я ехал(а) поездом.', ua: 'Я їхав(ла) потягом.' },
      note: {
        ru: 'a merge (идти, ехать) → mers ≈ «мерс». Неправильная форма — просто запомните.',
        ua: 'a merge (іти, їхати) → mers ≈ «мерс». Неправильна форма — просто запам’ятайте.',
      },
    },
    {
      kind: 'intro',
      ro: 'Când ai ajuns?',
      tr: { ru: 'Когда ты приехал(а)?', ua: 'Коли ти приїхав(ла)?' },
      note: {
        ru: 'când ≈ «кынд» — когда. a ajunge (добраться) → ajuns ≈ «ажунс».',
        ua: 'când ≈ «кинд» — коли. a ajunge (дістатися) → ajuns ≈ «ажунс».',
      },
    },
    {
      kind: 'tip',
      title: 'Fost, mers, plecat, ajuns',
      body: {
        ru: [
          'Четыре формы для любого рассказа о поездке. Все — с тем же am, ai, a…',
          '**Plecat** — «уехал, ушёл откуда-то», **ajuns** — «добрался куда-то». **Am plecat dimineața și am ajuns seara** — уехал утром, приехал вечером.',
          'Море и горы — с **la**: **la mare**, **la munte**. И «где», и «куда» — одинаково.',
        ],
        ua: [
          'Чотири форми для будь-якої розповіді про поїздку. Усі — з тим самим am, ai, a…',
          '**Plecat** — «поїхав, пішов звідкись», **ajuns** — «дістався кудись». **Am plecat dimineața și am ajuns seara** — поїхав уранці, приїхав увечері.',
          'Море й гори — з **la**: **la mare**, **la munte**. І «де», і «куди» — однаково.',
        ],
      },
      rows: [
        { ro: 'a fi → am fost', tr: { ru: 'быть → я был · «ам фост»', ua: 'бути → я був · «ам фост»' } },
        { ro: 'a merge → am mers', tr: { ru: 'идти, ехать → я ехал · «ам мерс»', ua: 'іти, їхати → я їхав · «ам мерс»' } },
        { ro: 'a pleca → am plecat', tr: { ru: 'уезжать → я уехал · «ам плекат»', ua: 'їхати звідкись → я поїхав · «ам плекат»' } },
        { ro: 'a ajunge → am ajuns', tr: { ru: 'добираться → я добрался · «ам ажунс»', ua: 'діставатися → я дістався · «ам ажунс»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мы были в горах.', ua: 'Ми були в горах.' },
      correct: 'Am fost la munte.',
      wrong: ['Am fost la mare.', 'Suntem la munte.', 'Au fost la munte.'],
    },
    {
      kind: 'pickNative',
      q: 'Când ați ajuns?',
      correct: { ru: 'Когда вы приехали?', ua: 'Коли ви приїхали?' },
      wrong: [
        { ru: 'Когда вы уезжаете?', ua: 'Коли ви їдете?' },
        { ru: 'Где вы были?', ua: 'Де ви були?' },
        { ru: 'Когда они приехали?', ua: 'Коли вони приїхали?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'am fost', tr: { ru: 'я был', ua: 'я був' } },
        { ro: 'am mers', tr: { ru: 'я ехал', ua: 'я їхав' } },
        { ro: 'am plecat', tr: { ru: 'я уехал', ua: 'я поїхав' } },
        { ro: 'am ajuns', tr: { ru: 'я добрался', ua: 'я дістався' } },
        { ro: 'când', tr: { ru: 'когда', ua: 'коли' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Am plecat dimineața',
      tr: { ru: 'Я уехал утром', ua: 'Я поїхав уранці' },
      wrong: ['Am plecat aseară', 'Au plecat dimineața', 'Plec dimineața'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я ездил в горы поездом.', ua: 'Я їздив у гори потягом.' },
      words: ['Am', 'mers', 'la', 'munte', 'cu', 'trenul'],
      extra: ['merg', 'autobuzul', 'ai'],
      shown: 'Am mers la munte cu trenul.',
    },
    {
      kind: 'tiles',
      q: { ru: 'Они приехали вчера.', ua: 'Вони приїхали вчора.' },
      words: ['Au', 'ajuns', 'ieri'],
      extra: ['am', 'ajung', 'aseară'],
      shown: 'Au ajuns ieri.',
      also: ['Ieri au ajuns'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Где ты был(а)?', ua: 'Де ти був(ла)?' },
      correct: 'Unde ai fost?',
      wrong: ['Unde ești?', 'Unde a fost?', 'Când ai fost?'],
    },
    {
      kind: 'type',
      q: { ru: 'Я был(а) на море.', ua: 'Я був(ла) на морі.' },
      answers: ['Am fost la mare', 'Eu am fost la mare'],
      shown: 'Am fost la mare.',
    },
    {
      kind: 'type',
      q: { ru: 'Когда ты приехал(а)?', ua: 'Коли ти приїхав(ла)?' },
      answers: ['Când ai ajuns', 'Când ai venit', 'Tu când ai ajuns', 'Când ai ajuns tu'],
      shown: 'Când ai ajuns?',
    },
  ],
};
