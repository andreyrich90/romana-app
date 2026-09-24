import type { Lesson } from '../types';

/** B2 · Unit 1 · Lesson 2 — pluperfect endings -sem… -seră and the special stems fusesem, avusesem, mersesem, făcusem; niciodată. */
export const u19l2: Lesson = {
  id: 'u19l2',
  title: { ru: 'Все формы', ua: 'Усі форми' },
  words: [
    { ro: 'fusesem', tr: { ru: 'я уже был(а)', ua: 'я вже був(ла)' } },
    { ro: 'avusese', tr: { ru: 'у него уже было', ua: 'у нього вже було' } },
    { ro: 'mersesem', tr: { ru: 'я уже ходил(а)', ua: 'я вже ходив(ла)' } },
    { ro: 'niciodată', tr: { ru: 'никогда', ua: 'ніколи' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Nu mai fusesem niciodată la mare.',
      tr: { ru: 'Я никогда раньше не был на море.', ua: 'Я ніколи раніше не був на морі.' },
      note: {
        ru: 'nu mai … niciodată — «никогда раньше». fost → fusesem ≈ «фусесем».',
        ua: 'nu mai … niciodată — «ніколи раніше». fost → fusesem ≈ «фусесем».',
      },
    },
    {
      kind: 'intro',
      ro: 'Făcuserăm deja cumpărăturile.',
      tr: { ru: 'Мы уже сделали покупки.', ua: 'Ми вже зробили покупки.' },
      note: {
        ru: 'făcut → făcuserăm. cumpărăturile ≈ «кумпэрэтуриле» — покупки.',
        ua: 'făcut → făcuserăm. cumpărăturile ≈ «кумпэретуріле» — покупки.',
      },
    },
    {
      kind: 'intro',
      ro: 'El mersese pe jos până la gară.',
      tr: { ru: 'Он (до этого) дошёл пешком до вокзала.', ua: 'Він (до того) дійшов пішки до вокзалу.' },
      note: {
        ru: 'mers → mersese. Основа меняется, как и в fost → fusese.',
        ua: 'mers → mersese. Основа змінюється, як і у fost → fusese.',
      },
    },
    {
      kind: 'tip',
      title: '-sem, -se, -seră',
      body: {
        ru: [
          'Окончания **-sem, -seși, -se, -serăm, -serăți, -seră** — прямо к форме без -t: lucra(t) → **lucrasem**, citi(t) → **citisem**, văzu(t) → **văzusem**.',
          'Особые основы: **fost → fusesem**, **avut → avusesem**, **mers → mersesem**, **făcut → făcusem**.',
        ],
        ua: [
          'Закінчення **-sem, -seși, -se, -serăm, -serăți, -seră** — прямо до форми без -t: lucra(t) → **lucrasem**, citi(t) → **citisem**, văzu(t) → **văzusem**.',
          'Особливі основи: **fost → fusesem**, **avut → avusesem**, **mers → mersesem**, **făcut → făcusem**.',
        ],
      },
      rows: [
        { ro: 'eu lucrasem', tr: { ru: 'я уже работал', ua: 'я вже працював' } },
        { ro: 'tu lucraseși', tr: { ru: 'ты уже работал', ua: 'ти вже працював' } },
        { ro: 'el lucrase', tr: { ru: 'он уже работал', ua: 'він уже працював' } },
        { ro: 'noi lucraserăm', tr: { ru: 'мы уже работали', ua: 'ми вже працювали' } },
        { ro: 'voi lucraserăți', tr: { ru: 'вы уже работали', ua: 'ви вже працювали' } },
        { ro: 'ei lucraseră', tr: { ru: 'они уже работали', ua: 'вони вже працювали' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я никогда раньше не был в Румынии.', ua: 'Я ніколи раніше не був у Румунії.' },
      correct: 'Nu mai fusesem niciodată în România.',
      wrong: ['Nu mai fusese niciodată în România.', 'Nu mai eram niciodată în România.', 'Nu voi fi niciodată în România.'],
    },
    {
      kind: 'pickNative',
      q: 'Ei plecaseră deja.',
      correct: { ru: 'Они уже уехали.', ua: 'Вони вже поїхали.' },
      wrong: [
        { ru: 'Они уезжают.', ua: 'Вони їдуть.' },
        { ru: 'Мы уже уехали.', ua: 'Ми вже поїхали.' },
        { ru: 'Они ещё не уехали.', ua: 'Вони ще не поїхали.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'fusesem', tr: { ru: 'я уже был', ua: 'я вже був' } },
        { ro: 'avusese', tr: { ru: 'у него уже было', ua: 'у нього вже було' } },
        { ro: 'mersesem', tr: { ru: 'я уже ходил', ua: 'я вже ходив' } },
        { ro: 'făcuserăm', tr: { ru: 'мы уже сделали', ua: 'ми вже зробили' } },
        { ro: 'niciodată', tr: { ru: 'никогда', ua: 'ніколи' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Făcuserăm deja cumpărăturile',
      tr: { ru: 'Мы уже сделали покупки', ua: 'Ми вже зробили покупки' },
      wrong: ['Facem cumpărăturile', 'Făcuseră deja cumpărăturile', 'Am făcut cumpărăturile ieri'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Ты уже прочитал книгу?', ua: 'Ти вже прочитав книжку?' },
      words: ['Citiseși', 'deja', 'cartea'],
      extra: ['citești', 'citise', 'ai'],
      shown: 'Citiseși deja cartea?',
    },
    {
      kind: 'pickRo',
      q: { ru: 'У него уже была машина.', ua: 'У нього вже була машина.' },
      correct: 'Avusese deja o mașină.',
      wrong: ['Are deja o mașină.', 'Avusesem deja o mașină.', 'Avea o mașină nouă.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мы уже работали там.', ua: 'Ми вже працювали там.' },
      words: ['Lucraserăm', 'deja', 'acolo'],
      extra: ['lucrăm', 'lucrase', 'aici'],
      shown: 'Lucraserăm deja acolo.',
    },
    {
      kind: 'type',
      q: { ru: 'Я никогда раньше не был(а) на море.', ua: 'Я ніколи раніше не був(ла) на морі.' },
      answers: ['Nu mai fusesem niciodată la mare', 'Nu fusesem niciodată la mare'],
      shown: 'Nu mai fusesem niciodată la mare.',
    },
    {
      kind: 'type',
      q: { ru: 'Они уже уехали (к тому времени).', ua: 'Вони вже поїхали (на той час).' },
      answers: ['Plecaseră deja', 'Ei plecaseră deja', 'Ei deja plecaseră'],
      shown: 'Plecaseră deja.',
    },
  ],
};
