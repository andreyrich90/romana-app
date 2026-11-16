import type { Lesson } from '../types';

/** Unit 10 · Lesson 6 — fingers, knees, shoulders, chest; small injuries (m-am tăiat, m-am lovit). */
export const u10l6: Lesson = {
  id: 'u10l6',
  title: { ru: 'Пальцы, колени, плечи', ua: 'Пальці, коліна, плечі' },
  words: [
    { ro: 'degetul · degetele', tr: { ru: 'палец · пальцы', ua: 'палець · пальці' } },
    { ro: 'genunchiul · genunchii', tr: { ru: 'колено · колени', ua: 'коліно · коліна' } },
    { ro: 'umărul · umerii', tr: { ru: 'плечо · плечи', ua: 'плече · плечі' } },
    { ro: 'pieptul · inima', tr: { ru: 'грудь · сердце', ua: 'груди · серце' } },
    { ro: 'M-am tăiat la deget.', tr: { ru: 'Я порезал палец.', ua: 'Я порізав палець.' } },
    { ro: 'M-am lovit la genunchi.', tr: { ru: 'Я ударился коленом.', ua: 'Я вдарився коліном.' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'degetul · degetele',
      tr: { ru: 'палец · пальцы', ua: 'палець · пальці' },
      note: {
        ru: 'deget ≈ «деджет»: ge читается «дже». Одно слово — и для пальцев рук, и для пальцев ног.',
        ua: 'deget ≈ «деджет»: ge читається «дже». Одне слово — і для пальців рук, і для пальців ніг.',
      },
    },
    {
      kind: 'intro',
      ro: 'genunchiul · genunchii',
      tr: { ru: 'колено · колени', ua: 'коліно · коліна' },
      note: {
        ru: 'genunchi ≈ «дженункь»: ge — «дже», chi — «кь».',
        ua: 'genunchi ≈ «дженункь»: ge — «дже», chi — «кь».',
      },
    },
    {
      kind: 'intro',
      ro: 'umărul · umerii',
      tr: { ru: 'плечо · плечи', ua: 'плече · плечі' },
      note: {
        ru: 'Во множественном числе ă меняется на e: umăr → umeri. Так бывает часто: fată → fete.',
        ua: 'У множині ă змінюється на e: umăr → umeri. Так буває часто: fată → fete.',
      },
    },
    {
      kind: 'intro',
      ro: 'M-am tăiat la deget.',
      tr: { ru: 'Я порезал палец.', ua: 'Я порізав палець.' },
      note: {
        ru: 'a se tăia — порезаться. Где именно — с la: la deget, la mână.',
        ua: 'a se tăia — порізатися. Де саме — з la: la deget, la mână.',
      },
    },
    {
      kind: 'intro',
      ro: 'M-am lovit la genunchi.',
      tr: { ru: 'Я ударился коленом.', ua: 'Я вдарився коліном.' },
      note: {
        ru: 'a se lovi — удариться. Та же схема: M-am lovit la cap, la umăr.',
        ua: 'a se lovi — вдаритися. Та сама схема: M-am lovit la cap, la umăr.',
      },
    },
    {
      kind: 'tip',
      title: 'Durere în piept',
      body: {
        ru: [
          'Болит одно — **Mă doare** umărul. Болит много — **Mă dor** degetele.',
          'Боль в груди: **Am dureri în piept.** С этим не ждут — звонят **112**.',
        ],
        ua: [
          'Болить одне — **Mă doare** umărul. Болить багато — **Mă dor** degetele.',
          'Біль у грудях: **Am dureri în piept.** З цим не чекають — телефонують **112**.',
        ],
      },
      rows: [
        { ro: 'pieptul', tr: { ru: 'грудь', ua: 'груди' } },
        { ro: 'inima', tr: { ru: 'сердце', ua: 'серце' } },
        { ro: 'pielea', tr: { ru: 'кожа', ua: 'шкіра' } },
        { ro: 'Am dureri în piept.', tr: { ru: 'У меня боли в груди.', ua: 'У мене болить у грудях.' } },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'degetul', tr: { ru: 'палец', ua: 'палець' } },
        { ro: 'genunchiul', tr: { ru: 'колено', ua: 'коліно' } },
        { ro: 'umărul', tr: { ru: 'плечо', ua: 'плече' } },
        { ro: 'pieptul', tr: { ru: 'грудь', ua: 'груди' } },
        { ro: 'inima', tr: { ru: 'сердце', ua: 'серце' } },
      ],
    },
    {
      kind: 'pickNative',
      q: 'genunchii',
      correct: { ru: 'колени', ua: 'коліна' },
      wrong: [
        { ru: 'пальцы', ua: 'пальці' },
        { ru: 'плечи', ua: 'плечі' },
        { ru: 'локти', ua: 'лікті' },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'У меня болит плечо.', ua: 'У мене болить плече.' },
      correct: 'Mă doare umărul.',
      wrong: ['Mă dor umărul.', 'Mă doare umerii.', 'Am durere umăr.'],
    },
    {
      kind: 'listen',
      ro: 'M-am tăiat la deget.',
      tr: { ru: 'Я порезал палец.', ua: 'Я порізав палець.' },
      wrong: ['M-am lovit la deget.', 'M-am tăiat la picior.', 'M-am lovit la genunchi.'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я ударился коленом.', ua: 'Я вдарився коліном.' },
      correct: 'M-am lovit la genunchi.',
      wrong: ['M-am tăiat la genunchi.', 'M-am lovit la umăr.', 'Mă doare genunchiul.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'У меня болят пальцы.', ua: 'У мене болять пальці.' },
      words: ['Mă', 'dor', 'degetele'],
      extra: ['doare', 'degetul'],
      shown: 'Mă dor degetele.',
    },
    {
      kind: 'type',
      q: { ru: 'сердце', ua: 'серце' },
      answers: ['inima', 'inimă'],
      shown: 'inima',
    },
  ],
};
