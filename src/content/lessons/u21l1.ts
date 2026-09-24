import type { Lesson } from '../types';

/** B2 · Unit 3 · Lesson 1 — impersonal phrases with să: e important / posibil / greu / ușor / normal să, e nevoie să. */
export const u21l1: Lesson = {
  id: 'u21l1',
  title: { ru: 'Важно, чтобы', ua: 'Важливо, щоб' },
  words: [
    { ro: 'e important să', tr: { ru: 'важно, чтобы', ua: 'важливо, щоб' } },
    { ro: 'e posibil să', tr: { ru: 'возможно, что', ua: 'можливо, що' } },
    { ro: 'e greu să', tr: { ru: 'трудно', ua: 'важко' } },
    { ro: 'e ușor să', tr: { ru: 'легко', ua: 'легко' } },
    { ro: 'e nevoie să', tr: { ru: 'нужно', ua: 'потрібно' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'E important să înveți în fiecare zi.',
      tr: { ru: 'Важно учиться каждый день.', ua: 'Важливо вчитися щодня.' },
      note: {
        ru: 'После «важно, возможно, трудно…» идёт să + глагол в нужном лице: să înveți — «тебе».',
        ua: 'Після «важливо, можливо, важко…» іде să + дієслово в потрібній особі: să înveți — «тобі».',
      },
    },
    {
      kind: 'intro',
      ro: 'E posibil să plouă mâine.',
      tr: { ru: 'Возможно, завтра пойдёт дождь.', ua: 'Можливо, завтра піде дощ.' },
      note: {
        ru: 'posibil ≈ «посибил». Форма после să: plouă.',
        ua: 'posibil ≈ «посібіл». Форма після să: plouă.',
      },
    },
    {
      kind: 'intro',
      ro: 'E greu să găsești un apartament.',
      tr: { ru: 'Трудно найти квартиру.', ua: 'Важко знайти квартиру.' },
      note: {
        ru: 'greu ≈ «греу» — трудно; ușor ≈ «ушор» — легко.',
        ua: 'greu ≈ «греу» — важко; ușor ≈ «ушор» — легко.',
      },
    },
    {
      kind: 'tip',
      title: 'E important să…',
      body: {
        ru: [
          '**E + прилагательное + să**: **e important să** (важно), **e posibil să** (возможно), **e greu / ușor să** (трудно / легко), **e nevoie să** (нужно).',
          'Глагол после să — в лице того, о ком речь: e important să **înveți** (тебе), să **învețe** (ему).',
        ],
        ua: [
          '**E + прикметник + să**: **e important să** (важливо), **e posibil să** (можливо), **e greu / ușor să** (важко / легко), **e nevoie să** (потрібно).',
          'Дієслово після să — в особі того, про кого мова: e important să **înveți** (тобі), să **învețe** (йому).',
        ],
      },
      rows: [
        { ro: 'E bine să știi.', tr: { ru: 'Тебе стоит знать.', ua: 'Тобі варто знати.' } },
        { ro: 'E ușor să uiți.', tr: { ru: 'Легко забыть.', ua: 'Легко забути.' } },
        { ro: 'E nevoie să plecăm.', tr: { ru: 'Нам нужно уйти.', ua: 'Нам треба піти.' } },
        { ro: 'E normal să greșești.', tr: { ru: 'Ошибаться нормально.', ua: 'Помилятися нормально.' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Важно учиться каждый день.', ua: 'Важливо вчитися щодня.' },
      correct: 'E important să înveți în fiecare zi.',
      wrong: ['E important că înveți în fiecare zi.', 'E important învăța în fiecare zi.', 'A fost important să înveți în fiecare zi.'],
    },
    {
      kind: 'pickNative',
      q: 'E posibil să întârzie.',
      correct: { ru: 'Возможно, он опоздает.', ua: 'Можливо, він запізниться.' },
      wrong: [
        { ru: 'Он точно опоздает.', ua: 'Він точно запізниться.' },
        { ru: 'Нельзя опаздывать.', ua: 'Не можна запізнюватися.' },
        { ru: 'Он опоздал.', ua: 'Він запізнився.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'important', tr: { ru: 'важно', ua: 'важливо' } },
        { ro: 'posibil', tr: { ru: 'возможно', ua: 'можливо' } },
        { ro: 'greu', tr: { ru: 'трудно', ua: 'важко' } },
        { ro: 'ușor', tr: { ru: 'легко', ua: 'легко' } },
        { ro: 'e nevoie', tr: { ru: 'нужно', ua: 'потрібно' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'E greu să găsești un apartament',
      tr: { ru: 'Трудно найти квартиру', ua: 'Важко знайти квартиру' },
      wrong: ['E ușor să găsești un apartament', 'E greu să găsesc un apartament', 'E greu să cumperi un apartament'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Ошибаться нормально.', ua: 'Помилятися нормально.' },
      words: ['E', 'normal', 'să', 'greșești'],
      extra: ['greșit', 'greu', 'că'],
      shown: 'E normal să greșești.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Нам нужно уйти.', ua: 'Нам треба піти.' },
      correct: 'E nevoie să plecăm.',
      wrong: ['E nevoie să pleci.', 'Nu e nevoie să plecăm.', 'Am plecat.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Легко забыть.', ua: 'Легко забути.' },
      words: ['E', 'ușor', 'să', 'uiți'],
      extra: ['greu', 'uitat', 'că'],
      shown: 'E ușor să uiți.',
    },
    {
      kind: 'type',
      q: { ru: 'Это важно.', ua: 'Це важливо.' },
      answers: ['E important', 'Este important', 'Asta e important', 'Asta este important'],
      shown: 'E important.',
    },
    {
      kind: 'type',
      q: { ru: 'Возможно, завтра пойдёт дождь.', ua: 'Можливо, завтра піде дощ.' },
      answers: ['E posibil să plouă mâine', 'Poate plouă mâine', 'Poate că plouă mâine', 'Posibil să plouă mâine', 'Poate o să plouă mâine'],
      shown: 'E posibil să plouă mâine.',
    },
  ],
};
