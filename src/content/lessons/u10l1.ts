import type { Lesson } from '../types';

/** A2 · Unit 4 · Lesson 1 — the body, with the article it is usually said with; plurals mâini, picioare, ochi. */
export const u10l1: Lesson = {
  id: 'u10l1',
  title: { ru: 'Тело', ua: 'Тіло' },
  words: [
    { ro: 'capul', tr: { ru: 'голова', ua: 'голова' } },
    { ro: 'gâtul', tr: { ru: 'горло, шея', ua: 'горло, шия' } },
    { ro: 'spatele', tr: { ru: 'спина', ua: 'спина' } },
    { ro: 'burta', tr: { ru: 'живот', ua: 'живіт' } },
    { ro: 'mâna · mâinile', tr: { ru: 'рука · руки', ua: 'рука · руки' } },
    { ro: 'piciorul · picioarele', tr: { ru: 'нога · ноги', ua: 'нога · ноги' } },
    { ro: 'ochii', tr: { ru: 'глаза', ua: 'очі' } },
    { ro: 'dinții', tr: { ru: 'зубы', ua: 'зуби' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'capul',
      tr: { ru: 'голова', ua: 'голова' },
      note: {
        ru: 'cap + артикль -ul ≈ «капул». Части тела почти всегда говорят с артиклем: так они звучат в «у меня болит…».',
        ua: 'cap + артикль -ul ≈ «капул». Частини тіла майже завжди кажуть з артиклем: так вони звучать у «у мене болить…».',
      },
    },
    {
      kind: 'intro',
      ro: 'gâtul și spatele',
      tr: { ru: 'горло и спина', ua: 'горло і спина' },
      note: {
        ru: 'gâtul ≈ «гытул» — и горло, и шея. spatele ≈ «спателе» — спина; слово среднего рода, всегда с -le.',
        ua: 'gâtul ≈ «гитул» — і горло, і шия. spatele ≈ «спателе» — спина; слово середнього роду, завжди з -le.',
      },
    },
    {
      kind: 'intro',
      ro: 'mâna și piciorul',
      tr: { ru: 'рука и нога', ua: 'рука і нога' },
      note: {
        ru: 'mâna ≈ «мына», piciorul ≈ «пичорул». Во множественном: mâinile «мыйниле», picioarele «пичоареле».',
        ua: 'mâna ≈ «мина», piciorul ≈ «пічорул». У множині: mâinile «мийніле», picioarele «пічоареле».',
      },
    },
    {
      kind: 'tip',
      title: 'Cap → capul, mână → mâna',
      body: {
        ru: [
          'Артикль — как в разделе «Семья»: мужской и средний род берут **-ul** или **-le**, женский меняет **-ă** на **-a**.',
          'Множественное число у частей тела неправильное — его стоит запомнить: **mână → mâini**, **picior → picioare**, **ochi → ochi**, **dinte → dinți**.',
        ],
        ua: [
          'Артикль — як у розділі «Родина»: чоловічий і середній рід беруть **-ul** або **-le**, жіночий змінює **-ă** на **-a**.',
          'Множина в частин тіла неправильна — її варто запам’ятати: **mână → mâini**, **picior → picioare**, **ochi → ochi**, **dinte → dinți**.',
        ],
      },
      rows: [
        { ro: 'cap → capul', tr: { ru: 'голова · «кап — капул»', ua: 'голова · «кап — капул»' } },
        { ro: 'burtă → burta', tr: { ru: 'живот · «буртэ — бурта»', ua: 'живіт · «бурте — бурта»' } },
        { ro: 'mână → mâini', tr: { ru: 'рука → руки · «мынэ — мыйнь»', ua: 'рука → руки · «мине — мийнь»' } },
        { ro: 'picior → picioare', tr: { ru: 'нога → ноги · «пичор — пичоаре»', ua: 'нога → ноги · «пічор — пічоаре»' } },
        { ro: 'ochi → ochii', tr: { ru: 'глаз, глаза → глаза с артиклем · «окь — окий»', ua: 'око, очі → очі з артиклем · «окь — окій»' } },
        { ro: 'dinte → dinții', tr: { ru: 'зуб → зубы с артиклем · «динте — динций»', ua: 'зуб → зуби з артиклем · «дінте — дінцій»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'голова', ua: 'голова' },
      correct: 'capul',
      wrong: ['gâtul', 'spatele', 'piciorul'],
    },
    {
      kind: 'pickNative',
      q: 'mâna',
      correct: { ru: 'рука', ua: 'рука' },
      wrong: [
        { ru: 'нога', ua: 'нога' },
        { ru: 'спина', ua: 'спина' },
        { ru: 'горло', ua: 'горло' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'capul', tr: { ru: 'голова', ua: 'голова' } },
        { ro: 'spatele', tr: { ru: 'спина', ua: 'спина' } },
        { ro: 'burta', tr: { ru: 'живот', ua: 'живіт' } },
        { ro: 'ochii', tr: { ru: 'глаза', ua: 'очі' } },
        { ro: 'dinții', tr: { ru: 'зубы', ua: 'зуби' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Capul și gâtul',
      tr: { ru: 'Голова и горло', ua: 'Голова і горло' },
      wrong: ['Capul și spatele', 'Mâna și gâtul', 'Burta și gâtul'],
    },
    {
      kind: 'tiles',
      q: { ru: 'У меня две руки и две ноги.', ua: 'У мене дві руки і дві ноги.' },
      words: ['Am', 'două', 'mâini', 'și', 'două', 'picioare'],
      extra: ['doi', 'mâna', 'piciorul'],
      shown: 'Am două mâini și două picioare.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'глаза', ua: 'очі' },
      correct: 'ochii',
      wrong: ['dinții', 'mâinile', 'picioarele'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Голова, горло и спина.', ua: 'Голова, горло і спина.' },
      words: ['Capul', 'gâtul', 'și', 'spatele'],
      extra: ['mâna', 'burta', 'ochii'],
      shown: 'Capul, gâtul și spatele.',
    },
    {
      kind: 'type',
      q: { ru: 'голова', ua: 'голова' },
      answers: ['capul', 'cap'],
      shown: 'capul',
    },
    {
      kind: 'type',
      q: { ru: 'У меня две ноги.', ua: 'У мене дві ноги.' },
      answers: ['Am două picioare', 'Eu am două picioare'],
      shown: 'Am două picioare.',
    },
  ],
};
