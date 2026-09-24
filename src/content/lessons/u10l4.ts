import type { Lesson } from '../types';

/** A2 · Unit 4 · Lesson 4 — seeing a doctor: o programare, mă simt bine / mai bine / rău, Cum vă simțiți?, 112. */
export const u10l4: Lesson = {
  id: 'u10l4',
  title: { ru: 'Запись к врачу', ua: 'Запис до лікаря' },
  words: [
    { ro: 'o programare', tr: { ru: 'запись (к врачу), приём', ua: 'запис (до лікаря), прийом' } },
    { ro: 'la doctor', tr: { ru: 'к врачу, у врача', ua: 'до лікаря, у лікаря' } },
    { ro: 'Nu mă simt bine.', tr: { ru: 'Мне нехорошо.', ua: 'Мені недобре.' } },
    { ro: 'Mă simt mai bine.', tr: { ru: 'Мне лучше.', ua: 'Мені краще.' } },
    { ro: 'Cum vă simțiți?', tr: { ru: 'Как вы себя чувствуете?', ua: 'Як ви почуваєтеся?' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Aș vrea o programare la doctor.',
      tr: { ru: 'Я хотел(а) бы записаться к врачу.', ua: 'Я хотів(ла) би записатися до лікаря.' },
      note: {
        ru: 'programare ≈ «програмаре» — запись, приём. aș vrea — вежливое «я бы хотел» из раздела «Кафе».',
        ua: 'programare ≈ «програмаре» — запис, прийом. aș vrea — ввічливе «я б хотів» з розділу «Кафе».',
      },
    },
    {
      kind: 'intro',
      ro: 'Nu mă simt bine.',
      tr: { ru: 'Мне нехорошо.', ua: 'Мені недобре.' },
      note: {
        ru: 'a se simți — чувствовать себя, возвратный: mă simt ≈ «мэ симт». Лучше — Mă simt mai bine.',
        ua: 'a se simți — почуватися, зворотне: mă simt ≈ «ме сімт». Краще — Mă simt mai bine.',
      },
    },
    {
      kind: 'intro',
      ro: 'Puteți veni mâine la ora zece?',
      tr: { ru: 'Можете прийти завтра в десять?', ua: 'Можете прийти завтра о десятій?' },
      note: {
        ru: 'Так спросят в регистратуре. puteți veni — «можете прийти», без să: оба варианта правильные.',
        ua: 'Так спитають у реєстратурі. puteți veni — «можете прийти», без să: обидва варіанти правильні.',
      },
    },
    {
      kind: 'tip',
      title: 'La doctor',
      body: {
        ru: [
          'Записаться — **a face o programare**; в регистратуре скажите **Aș vrea o programare**.',
          'Как вы? — **Cum vă simțiți?** Ответ: **Mă simt bine / mai bine / rău** — хорошо / лучше / плохо.',
          'Экстренная помощь в Румынии и в Молдове — **112**.',
        ],
        ua: [
          'Записатися — **a face o programare**; у реєстратурі скажіть **Aș vrea o programare**.',
          'Як ви? — **Cum vă simțiți?** Відповідь: **Mă simt bine / mai bine / rău** — добре / краще / погано.',
          'Екстрена допомога в Румунії та в Молдові — **112**.',
        ],
      },
      rows: [
        { ro: 'Aș vrea o programare.', tr: { ru: 'Я хотел бы записаться. · «аш вря о програмаре»', ua: 'Я хотів би записатися. · «аш вря о програмаре»' } },
        { ro: 'Cum vă simțiți?', tr: { ru: 'Как вы себя чувствуете? · «кум вэ симциць»', ua: 'Як ви почуваєтеся? · «кум ве сімціць»' } },
        { ro: 'Mă simt mai bine.', tr: { ru: 'Мне лучше. · «мэ симт май бине»', ua: 'Мені краще. · «ме сімт май біне»' } },
        { ro: 'Mă simt rău.', tr: { ru: 'Мне плохо. · «мэ симт рэу»', ua: 'Мені погано. · «ме сімт реу»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мне нехорошо.', ua: 'Мені недобре.' },
      correct: 'Nu mă simt bine.',
      wrong: ['Mă simt bine.', 'Nu te simți bine.', 'Nu mă doare.'],
    },
    {
      kind: 'pickNative',
      q: 'Cum vă simțiți?',
      correct: { ru: 'Как вы себя чувствуете?', ua: 'Як ви почуваєтеся?' },
      wrong: [
        { ru: 'Как вас зовут?', ua: 'Як вас звати?' },
        { ru: 'Где у вас болит?', ua: 'Де у вас болить?' },
        { ru: 'Как ты себя чувствуешь?', ua: 'Як ти почуваєшся?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'programare', tr: { ru: 'запись к врачу', ua: 'запис до лікаря' } },
        { ro: 'mă simt bine', tr: { ru: 'мне хорошо', ua: 'мені добре' } },
        { ro: 'mă simt mai bine', tr: { ru: 'мне лучше', ua: 'мені краще' } },
        { ro: 'mă simt rău', tr: { ru: 'мне плохо', ua: 'мені погано' } },
        { ro: 'doctor', tr: { ru: 'врач', ua: 'лікар' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Aș vrea o programare mâine',
      tr: { ru: 'Я хотел бы записаться на завтра', ua: 'Я хотів би записатися на завтра' },
      wrong: ['Aș vrea o programare azi', 'Am o programare mâine', 'Aș vrea o cafea mâine'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Можете прийти в пятницу?', ua: 'Можете прийти в п’ятницю?' },
      words: ['Puteți', 'veni', 'vineri'],
      extra: ['pot', 'vin', 'luni'],
      shown: 'Puteți veni vineri?',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Сегодня мне лучше.', ua: 'Сьогодні мені краще.' },
      correct: 'Azi mă simt mai bine.',
      wrong: ['Azi nu mă simt bine.', 'Azi te simți mai bine.', 'Azi mă doare capul.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я хотела бы записаться к врачу.', ua: 'Я хотіла б записатися до лікаря.' },
      words: ['Aș', 'vrea', 'o', 'programare', 'la', 'doctor'],
      extra: ['vreau', 'un', 'farmacie'],
      shown: 'Aș vrea o programare la doctor.',
    },
    {
      kind: 'type',
      q: { ru: 'Мне нехорошо.', ua: 'Мені недобре.' },
      answers: ['Nu mă simt bine', 'Eu nu mă simt bine'],
      shown: 'Nu mă simt bine.',
    },
    {
      kind: 'type',
      q: { ru: 'Мне лучше.', ua: 'Мені краще.' },
      answers: ['Mă simt mai bine', 'Eu mă simt mai bine', 'Mă simt mai bine acum', 'Acum mă simt mai bine'],
      shown: 'Mă simt mai bine.',
    },
  ],
};
