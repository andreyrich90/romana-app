import type { Lesson } from '../types';

/** Unit 6 · Lesson 2 — furniture and the plural of every main type; câte vs câți. */
export const u6l2: Lesson = {
  id: 'u6l2',
  title: { ru: 'Много вещей', ua: 'Багато речей' },
  words: [
    { ro: 'o masă — două mese', tr: { ru: 'стол — два стола', ua: 'стіл — два столи' } },
    { ro: 'un scaun — două scaune', tr: { ru: 'стул — два стула', ua: 'стілець — два стільці' } },
    { ro: 'un pat — două paturi', tr: { ru: 'кровать — две кровати', ua: 'ліжко — два ліжка' } },
    { ro: 'o ușă — două uși', tr: { ru: 'дверь — две двери', ua: 'двері — двоє дверей' } },
    { ro: 'o carte — două cărți', tr: { ru: 'книга — две книги', ua: 'книжка — дві книжки' } },
    { ro: 'Câte camere?', tr: { ru: 'Сколько комнат?', ua: 'Скільки кімнат?' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'o masă, un scaun',
      tr: { ru: 'стол, стул', ua: 'стіл, стілець' },
      note: {
        ru: 'masă — женского рода (в русском «стол» — мужского!), scaun — средний.',
        ua: 'masă — жіночого роду (в українській «стіл» — чоловічого!), scaun — середній.',
      },
    },
    {
      kind: 'intro',
      ro: 'un pat, un dulap',
      tr: { ru: 'кровать, шкаф', ua: 'ліжко, шафа' },
      note: {
        ru: 'Оба — среднего рода. Род в румынском часто не совпадает с русским, запоминайте слово вместе с un или o.',
        ua: 'Обидва — середнього роду. Рід у румунській часто не збігається з українським, запамʼятовуйте слово разом з un або o.',
      },
    },
    {
      kind: 'tip',
      title: 'Două mese, două scaune',
      body: {
        ru: [
          'Женский род: **-ă → -e** (masă → mese) или **→ -i** (ușă → uși, carte → cărți). Внутри слова буква может меняться: m**a**să → m**e**se.',
          'Средний род: **-uri** или **-e** (pat → paturi, scaun → scaune) и всегда **două**, как женский.',
        ],
        ua: [
          'Жіночий рід: **-ă → -e** (masă → mese) або **→ -i** (ușă → uși, carte → cărți). Усередині слова літера може змінюватися: m**a**să → m**e**se.',
          'Середній рід: **-uri** або **-e** (pat → paturi, scaun → scaune) і завжди **două**, як жіночий.',
        ],
      },
      rows: [
        { ro: 'o masă — două mese', tr: { ru: 'стол — два стола · «о масэ — доуэ месе»', ua: 'стіл — два столи · «о масе — доуе месе»' } },
        { ro: 'un scaun — două scaune', tr: { ru: 'стул — два стула · «ун скаун — доуэ скауне»', ua: 'стілець — два стільці · «ун скаун — доуе скауне»' } },
        { ro: 'un pat — două paturi', tr: { ru: 'кровать — две кровати · «ун пат — доуэ патурь»', ua: 'ліжко — два ліжка · «ун пат — доуе патурь»' } },
        { ro: 'o ușă — două uși', tr: { ru: 'дверь — две двери · «о ушэ — доуэ ушь»', ua: 'двері — двоє дверей · «о уше — доуе ушь»' } },
        { ro: 'o carte — două cărți', tr: { ru: 'книга — две книги · «о карте — доуэ кэрць»', ua: 'книжка — дві книжки · «о карте — доуе керць»' } },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'masa', tr: { ru: 'стол', ua: 'стіл' } },
        { ro: 'scaunul', tr: { ru: 'стул', ua: 'стілець' } },
        { ro: 'patul', tr: { ru: 'кровать', ua: 'ліжко' } },
        { ro: 'dulapul', tr: { ru: 'шкаф', ua: 'шафа' } },
        { ro: 'ușa', tr: { ru: 'дверь', ua: 'двері' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'два стула', ua: 'два стільці' },
      correct: 'două scaune',
      wrong: ['doi scaune', 'două scaun', 'doi scauni'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'две книги', ua: 'дві книжки' },
      correct: 'două cărți',
      wrong: ['două carte', 'doi cărți', 'două cărte'],
    },
    {
      kind: 'intro',
      ro: 'Câte camere are?',
      tr: { ru: 'Сколько там комнат?', ua: 'Скільки там кімнат?' },
      note: {
        ru: 'câte — для женского и среднего рода, câți — для мужского (Câți ani ai? — раздел 2). Apartamentul are trei camere — В квартире три комнаты.',
        ua: 'câte — для жіночого й середнього роду, câți — для чоловічого (Câți ani ai? — розділ 2). Apartamentul are trei camere — У квартирі три кімнати.',
      },
    },
    {
      kind: 'listen',
      ro: 'Apartamentul are două camere',
      tr: { ru: 'В квартире две комнаты', ua: 'У квартирі дві кімнати' },
      wrong: ['Apartamentul are trei camere', 'Apartamentul are două paturi', 'Casa are două camere'],
    },
    {
      kind: 'pickNative',
      q: 'Avem o masă și patru scaune.',
      correct: { ru: 'У нас стол и четыре стула.', ua: 'У нас стіл і чотири стільці.' },
      wrong: [
        { ru: 'У нас четыре стола и стул.', ua: 'У нас чотири столи і стілець.' },
        { ru: 'У нас кровать и четыре стула.', ua: 'У нас ліжко і чотири стільці.' },
        { ru: 'У них стол и четыре стула.', ua: 'У них стіл і чотири стільці.' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'В квартире три комнаты.', ua: 'У квартирі три кімнати.' },
      words: ['Apartamentul', 'are', 'trei', 'camere'],
      extra: ['camera', 'este', 'câte'],
      shown: 'Apartamentul are trei camere.',
    },
    {
      kind: 'type',
      q: { ru: 'две двери', ua: 'двоє дверей' },
      answers: ['două uși'],
      shown: 'două uși',
    },
    {
      kind: 'type',
      q: { ru: 'Сколько комнат в доме?', ua: 'Скільки кімнат у будинку?' },
      answers: ['Câte camere are casa', 'Câte camere sunt în casă'],
      shown: 'Câte camere are casa?',
    },
  ],
};
