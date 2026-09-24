import type { Lesson } from '../types';

/** B2 · Unit 1 · Lesson 3 — telling events in order: mai întâi, apoi, între timp, în cele din urmă, după ce, înainte să. */
export const u19l3: Lesson = {
  id: 'u19l3',
  title: { ru: 'Сначала, потом', ua: 'Спочатку, потім' },
  words: [
    { ro: 'mai întâi', tr: { ru: 'сначала', ua: 'спочатку' } },
    { ro: 'apoi', tr: { ru: 'потом', ua: 'потім' } },
    { ro: 'după ce', tr: { ru: 'после того как', ua: 'після того як' } },
    { ro: 'înainte să', tr: { ru: 'прежде чем', ua: 'перш ніж' } },
    { ro: 'în cele din urmă', tr: { ru: 'в конце концов', ua: 'зрештою' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Mai întâi am mâncat, apoi am plecat.',
      tr: { ru: 'Сначала мы поели, потом ушли.', ua: 'Спочатку ми поїли, потім пішли.' },
      note: {
        ru: 'mai întâi ≈ «май ынтый» — сначала. apoi ≈ «апой» — потом.',
        ua: 'mai întâi ≈ «май интий» — спочатку. apoi ≈ «апой» — потім.',
      },
    },
    {
      kind: 'intro',
      ro: 'După ce am terminat, am ieșit în oraș.',
      tr: { ru: 'После того как мы закончили, мы пошли в город.', ua: 'Після того як ми закінчили, ми пішли в місто.' },
      note: {
        ru: 'după ce + прошедшее. a ieși ≈ «йеши» — выйти; a ieși în oraș — «выбраться в город».',
        ua: 'după ce + минулий час. a ieși ≈ «єші» — вийти; a ieși în oraș — «вибратися в місто».',
      },
    },
    {
      kind: 'intro',
      ro: 'Înainte să plec, am sunat-o pe mama.',
      tr: { ru: 'Прежде чем уехать, я позвонил маме.', ua: 'Перш ніж поїхати, я подзвонив мамі.' },
      note: {
        ru: 'înainte să + форма как после să. a suna pe cineva — звонить кому-то: am sunat-o — позвонил ей.',
        ua: 'înainte să + форма як після să. a suna pe cineva — дзвонити комусь: am sunat-o — подзвонив їй.',
      },
    },
    {
      kind: 'tip',
      title: 'Mai întâi, apoi',
      body: {
        ru: [
          'Порядок: **mai întâi** (сначала), **apoi** / **pe urmă** (потом), **între timp** (тем временем), **în cele din urmă** (в конце концов).',
          '**După ce** + прошедшее: după ce am terminat. **Înainte să** + форма после să: înainte să plec.',
        ],
        ua: [
          'Порядок: **mai întâi** (спочатку), **apoi** / **pe urmă** (потім), **între timp** (тим часом), **în cele din urmă** (зрештою).',
          '**După ce** + минулий: după ce am terminat. **Înainte să** + форма після să: înainte să plec.',
        ],
      },
      rows: [
        { ro: 'mai întâi', tr: { ru: 'сначала', ua: 'спочатку' } },
        { ro: 'apoi', tr: { ru: 'потом', ua: 'потім' } },
        { ro: 'între timp', tr: { ru: 'тем временем', ua: 'тим часом' } },
        { ro: 'în cele din urmă', tr: { ru: 'в конце концов', ua: 'зрештою' } },
        { ro: 'după ce am mâncat', tr: { ru: 'после того как поели', ua: 'після того як поїли' } },
        { ro: 'înainte să plec', tr: { ru: 'прежде чем уйти', ua: 'перш ніж піти' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Сначала мы поели, потом ушли.', ua: 'Спочатку ми поїли, потім пішли.' },
      correct: 'Mai întâi am mâncat, apoi am plecat.',
      wrong: ['Mai întâi am plecat, apoi am mâncat.', 'Apoi am mâncat, mai întâi am plecat.', 'Mai întâi mâncăm, apoi plecăm.'],
    },
    {
      kind: 'pickNative',
      q: 'În cele din urmă am găsit casa.',
      correct: { ru: 'В конце концов мы нашли дом.', ua: 'Зрештою ми знайшли будинок.' },
      wrong: [
        { ru: 'Сначала мы нашли дом.', ua: 'Спочатку ми знайшли будинок.' },
        { ru: 'Мы не нашли дом.', ua: 'Ми не знайшли будинок.' },
        { ru: 'Потом мы потеряли дом.', ua: 'Потім ми загубили будинок.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'mai întâi', tr: { ru: 'сначала', ua: 'спочатку' } },
        { ro: 'apoi', tr: { ru: 'потом', ua: 'потім' } },
        { ro: 'între timp', tr: { ru: 'тем временем', ua: 'тим часом' } },
        { ro: 'în cele din urmă', tr: { ru: 'в конце концов', ua: 'зрештою' } },
        { ro: 'după ce', tr: { ru: 'после того как', ua: 'після того як' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Înainte să plec, am sunat-o pe mama',
      tr: { ru: 'Прежде чем уехать, я позвонил маме', ua: 'Перш ніж поїхати, я подзвонив мамі' },
      wrong: ['După ce am plecat, am sunat-o pe mama', 'Înainte să plec, am sunat-o pe sora mea', 'Înainte să plece, a sunat-o pe mama'],
    },
    {
      kind: 'tiles',
      q: { ru: 'После того как мы закончили, мы пошли в город.', ua: 'Після того як ми закінчили, ми пішли в місто.' },
      words: ['După', 'ce', 'am', 'terminat', 'am', 'ieșit', 'în', 'oraș'],
      extra: ['înainte', 'terminăm', 'la'],
      shown: 'După ce am terminat, am ieșit în oraș.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Тем временем начался дождь.', ua: 'Тим часом почався дощ.' },
      correct: 'Între timp a început să plouă.',
      wrong: ['Mai întâi a început să plouă.', 'Între timp începe să plouă.', 'În cele din urmă a nins.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Прежде чем уйти, я закрыл окно.', ua: 'Перш ніж піти, я зачинив вікно.' },
      words: ['Înainte', 'să', 'plec', 'am', 'închis', 'fereastra'],
      extra: ['după', 'plecat', 'ușa'],
      shown: 'Înainte să plec, am închis fereastra.',
    },
    {
      kind: 'type',
      q: { ru: 'В конце концов.', ua: 'Зрештою.' },
      answers: ['În cele din urmă', 'Până la urmă', 'În final'],
      shown: 'În cele din urmă.',
    },
    {
      kind: 'type',
      q: { ru: 'После того как я поел(а)…', ua: 'Після того як я поїв(ла)…' },
      answers: ['După ce am mâncat'],
      shown: 'După ce am mâncat…',
    },
  ],
};
