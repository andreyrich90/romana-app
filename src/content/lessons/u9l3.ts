import type { Lesson } from '../types';

/** A2 · Unit 3 · Lesson 3 — a putea: pot, poți, poate…; Pot să…? (may I), Puteți să…? (could you), nu pot. */
export const u9l3: Lesson = {
  id: 'u9l3',
  title: { ru: 'Могу?', ua: 'Можна?' },
  words: [
    { ro: 'pot', tr: { ru: 'я могу', ua: 'я можу' } },
    { ro: 'Pot să…?', tr: { ru: 'Можно…?', ua: 'Можна…?' } },
    { ro: 'Puteți să…?', tr: { ru: 'Вы можете…?', ua: 'Ви можете…?' } },
    { ro: 'Nu pot.', tr: { ru: 'Не могу.', ua: 'Не можу.' } },
    { ro: 'a repeta', tr: { ru: 'повторять', ua: 'повторювати' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Pot să plătesc cu cardul?',
      tr: { ru: 'Можно оплатить картой?', ua: 'Можна оплатити карткою?' },
      note: {
        ru: 'Помните Pot plăti cu cardul? из кафе — это то же самое, только с să. pot ≈ «пот» — «я могу». Pot să…? — самый простой способ спросить «можно?».',
        ua: 'Пам’ятаєте Pot plăti cu cardul? з кафе — це те саме, тільки з să. pot ≈ «пот» — «я можу». Pot să…? — найпростіший спосіб спитати «можна?».',
      },
    },
    {
      kind: 'intro',
      ro: 'Nu pot să vin mâine.',
      tr: { ru: 'Я не могу прийти завтра.', ua: 'Я не можу прийти завтра.' },
      note: {
        ru: 'a veni → vin ≈ «вин» — «я прихожу». То же слово, что vin — «вино»: понятно по смыслу.',
        ua: 'a veni → vin ≈ «він» — «я приходжу». Те саме слово, що vin — «вино»: зрозуміло зі змісту.',
      },
    },
    {
      kind: 'intro',
      ro: 'Puteți să repetați?',
      tr: { ru: 'Можете повторить?', ua: 'Можете повторити?' },
      note: {
        ru: 'Главная фраза того, кто учит язык. puteți ≈ «путець», repetați ≈ «репетаць».',
        ua: 'Головна фраза того, хто вчить мову. puteți ≈ «путець», repetați ≈ «репетаць».',
      },
    },
    {
      kind: 'tip',
      title: 'Pot, poți, poate',
      body: {
        ru: [
          'После **a putea** — тоже **să** + глагол в том же лице: **pot să vin**, **poți să vii**, **poate să vină**.',
          'Можно и без să: **pot veni**, **puteți repeta**. Оба варианта правильные.',
          '**Poate** — и «он может», и «может быть» из прогноза погоды.',
        ],
        ua: [
          'Після **a putea** — теж **să** + дієслово в тій самій особі: **pot să vin**, **poți să vii**, **poate să vină**.',
          'Можна й без să: **pot veni**, **puteți repeta**. Обидва варіанти правильні.',
          '**Poate** — і «він може», і «може» з прогнозу погоди.',
        ],
      },
      rows: [
        { ro: 'eu pot', tr: { ru: 'я могу · «еу пот»', ua: 'я можу · «єу пот»' } },
        { ro: 'tu poți', tr: { ru: 'ты можешь · «ту поць»', ua: 'ти можеш · «ту поць»' } },
        { ro: 'el / ea poate', tr: { ru: 'он / она может · «ел / я поате»', ua: 'він / вона може · «єл / я поате»' } },
        { ro: 'noi putem', tr: { ru: 'мы можем · «ной путем»', ua: 'ми можемо · «ной путем»' } },
        { ro: 'voi puteți', tr: { ru: 'вы можете · «вой путець»', ua: 'ви можете · «вой путець»' } },
        { ro: 'poate să vină', tr: { ru: 'он может прийти · «поате сэ винэ»', ua: 'він може прийти · «поате се віне»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Можно оплатить картой?', ua: 'Можна оплатити карткою?' },
      correct: 'Pot să plătesc cu cardul?',
      wrong: ['Vreau să plătesc cu cardul.', 'Poți să plătești cu cardul?', 'Am plătit cu cardul.'],
    },
    {
      kind: 'pickNative',
      q: 'Puteți să repetați?',
      correct: { ru: 'Можете повторить?', ua: 'Можете повторити?' },
      wrong: [
        { ru: 'Хотите повторить?', ua: 'Хочете повторити?' },
        { ru: 'Мне надо повторить?', ua: 'Мені треба повторити?' },
        { ru: 'Вы повторили?', ua: 'Ви повторили?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'pot', tr: { ru: 'я могу', ua: 'я можу' } },
        { ro: 'poți', tr: { ru: 'ты можешь', ua: 'ти можеш' } },
        { ro: 'putem', tr: { ru: 'мы можем', ua: 'ми можемо' } },
        { ro: 'nu pot', tr: { ru: 'я не могу', ua: 'я не можу' } },
        { ro: 'a repeta', tr: { ru: 'повторять', ua: 'повторювати' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Nu pot să vin azi',
      tr: { ru: 'Я не могу прийти сегодня', ua: 'Я не можу прийти сьогодні' },
      wrong: ['Nu pot să vin mâine', 'Nu vreau să vin azi', 'Poți să vii azi'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Ты можешь прийти завтра?', ua: 'Ти можеш прийти завтра?' },
      words: ['Poți', 'să', 'vii', 'mâine'],
      extra: ['pot', 'vin', 'ieri'],
      shown: 'Poți să vii mâine?',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мы не можем работать сегодня.', ua: 'Ми не можемо працювати сьогодні.' },
      correct: 'Nu putem să lucrăm azi.',
      wrong: ['Nu pot să lucrez azi.', 'Nu vrem să lucrăm azi.', 'Nu trebuie să lucrăm azi.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Она может прийти в пять.', ua: 'Вона може прийти о п’ятій.' },
      words: ['Ea', 'poate', 'să', 'vină', 'la', 'ora', 'cinci'],
      extra: ['vin', 'pot', 'șase'],
      shown: 'Ea poate să vină la ora cinci.',
      also: ['Poate să vină la ora cinci'],
    },
    {
      kind: 'type',
      q: { ru: 'Я не могу.', ua: 'Я не можу.' },
      answers: ['Nu pot', 'Eu nu pot'],
      shown: 'Nu pot.',
    },
    {
      kind: 'type',
      q: { ru: 'Можете повторить?', ua: 'Можете повторити?' },
      answers: ['Puteți să repetați', 'Puteți repeta', 'Poți să repeți', 'Poți repeta'],
      shown: 'Puteți să repetați?',
    },
  ],
};
