import type { Lesson } from '../types';

/** B1 · Unit 6 · Lesson 1 — paperwork: actele, un formular, a completa, a semna, o copie, am nevoie de, permis de ședere, primăria. */
export const u18l1: Lesson = {
  id: 'u18l1',
  title: { ru: 'Документы', ua: 'Документи' },
  words: [
    { ro: 'actele', tr: { ru: 'документы', ua: 'документи' } },
    { ro: 'un formular', tr: { ru: 'бланк, анкета', ua: 'бланк, анкета' } },
    { ro: 'a completa', tr: { ru: 'заполнить', ua: 'заповнити' } },
    { ro: 'a semna', tr: { ru: 'подписать', ua: 'підписати' } },
    { ro: 'am nevoie de', tr: { ru: 'мне нужен, нужна', ua: 'мені потрібен, потрібна' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Ce acte îmi trebuie?',
      tr: { ru: 'Какие документы мне нужны?', ua: 'Які документи мені потрібні?' },
      note: {
        ru: 'acte ≈ «акте» — документы. îmi trebuie — «мне нужно»; так спрашивают в любом учреждении.',
        ua: 'acte ≈ «акте» — документи. îmi trebuie — «мені треба»; так питають у будь-якій установі.',
      },
    },
    {
      kind: 'intro',
      ro: 'Trebuie să completați acest formular.',
      tr: { ru: 'Вам нужно заполнить этот бланк.', ua: 'Вам треба заповнити цей бланк.' },
      note: {
        ru: 'acest — «этот» перед словом (книжнее, чем … ăsta после). completați ≈ «комплетаць».',
        ua: 'acest — «цей» перед словом (книжніше, ніж … ăsta після). completați ≈ «комплетаць».',
      },
    },
    {
      kind: 'intro',
      ro: 'Unde semnez?',
      tr: { ru: 'Где расписаться?', ua: 'Де підписати?' },
      note: {
        ru: 'a semna → semnez ≈ «семнез» — подписываю.',
        ua: 'a semna → semnez ≈ «семнез» — підписую.',
      },
    },
    {
      kind: 'tip',
      title: 'Acte',
      body: {
        ru: [
          'В учреждении: **actele** (документы), **formularul** (бланк), **o copie** (копия), **semnătura** (подпись). Нужно — **am nevoie de…**',
          'Удостоверение личности — **buletinul** (разг.) или **cartea de identitate**; вид на жительство — **permisul de ședere**; мэрия — **primăria**.',
        ],
        ua: [
          'В установі: **actele** (документи), **formularul** (бланк), **o copie** (копія), **semnătura** (підпис). Потрібно — **am nevoie de…**',
          'Посвідчення особи — **buletinul** (розм.) або **cartea de identitate**; посвідка на проживання — **permisul de ședere**; мерія — **primăria**.',
        ],
      },
      rows: [
        { ro: 'Am nevoie de o copie.', tr: { ru: 'Мне нужна копия.', ua: 'Мені потрібна копія.' } },
        { ro: 'Unde semnez?', tr: { ru: 'Где расписаться?', ua: 'Де підписати?' } },
        { ro: 'Completați aici.', tr: { ru: 'Заполните здесь.', ua: 'Заповніть тут.' } },
        { ro: 'permisul de ședere', tr: { ru: 'вид на жительство', ua: 'посвідка на проживання' } },
        { ro: 'primăria', tr: { ru: 'мэрия', ua: 'мерія' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Какие документы мне нужны?', ua: 'Які документи мені потрібні?' },
      correct: 'Ce acte îmi trebuie?',
      wrong: ['Ce acte ai adus?', 'Unde sunt actele?', 'Ce formular completez?'],
    },
    {
      kind: 'pickNative',
      q: 'Trebuie să completați acest formular.',
      correct: { ru: 'Вам нужно заполнить этот бланк.', ua: 'Вам треба заповнити цей бланк.' },
      wrong: [
        { ru: 'Я заполнил этот бланк.', ua: 'Я заповнив цей бланк.' },
        { ru: 'Вам нужно подписать этот бланк.', ua: 'Вам треба підписати цей бланк.' },
        { ru: 'Где этот бланк?', ua: 'Де цей бланк?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'actele', tr: { ru: 'документы', ua: 'документи' } },
        { ro: 'formular', tr: { ru: 'бланк', ua: 'бланк' } },
        { ro: 'a semna', tr: { ru: 'подписать', ua: 'підписати' } },
        { ro: 'o copie', tr: { ru: 'копия', ua: 'копія' } },
        { ro: 'primăria', tr: { ru: 'мэрия', ua: 'мерія' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Am nevoie de o copie',
      tr: { ru: 'Мне нужна копия', ua: 'Мені потрібна копія' },
      wrong: ['Am nevoie de un formular', 'Aveți nevoie de o copie', 'Am făcut o copie'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Где расписаться?', ua: 'Де підписати?' },
      words: ['Unde', 'semnez'],
      extra: ['semnează', 'când', 'aici'],
      shown: 'Unde semnez?',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мне нужен вид на жительство.', ua: 'Мені потрібна посвідка на проживання.' },
      correct: 'Am nevoie de permis de ședere.',
      wrong: ['Am permis de ședere.', 'Am nevoie de buletin.', 'Ai nevoie de permis de ședere.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Заполните здесь, пожалуйста.', ua: 'Заповніть тут, будь ласка.' },
      words: ['Completați', 'aici', 'vă', 'rog'],
      extra: ['completez', 'acolo', 'te'],
      shown: 'Completați aici, vă rog.',
    },
    {
      kind: 'type',
      q: { ru: 'Где расписаться?', ua: 'Де підписати?' },
      answers: ['Unde semnez', 'Unde trebuie să semnez', 'Unde să semnez'],
      shown: 'Unde semnez?',
    },
    {
      kind: 'type',
      q: { ru: 'Мне нужна копия.', ua: 'Мені потрібна копія.' },
      answers: ['Am nevoie de o copie', 'Îmi trebuie o copie'],
      shown: 'Am nevoie de o copie.',
    },
  ],
};
