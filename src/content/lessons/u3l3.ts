import type { Lesson } from '../types';

/** Unit 3 · Lesson 3 — ordering: «vreau» vs the polite «aș vrea», the verb «a vrea», café phrases. */
export const u3l3: Lesson = {
  id: 'u3l3',
  title: { ru: 'Я бы хотел…', ua: 'Я б хотів…' },
  words: [
    { ro: 'Vreau…', tr: { ru: 'Я хочу…', ua: 'Я хочу…' } },
    { ro: 'Aș vrea…', tr: { ru: 'Я бы хотел(а)…', ua: 'Я б хотів (хотіла)…' } },
    { ro: 'Ce doriți?', tr: { ru: 'Что желаете?', ua: 'Що бажаєте?' } },
    { ro: 'meniul', tr: { ru: 'меню', ua: 'меню' } },
    { ro: 'Nota, vă rog.', tr: { ru: 'Счёт, пожалуйста.', ua: 'Рахунок, будь ласка.' } },
    { ro: 'Poftă bună!', tr: { ru: 'Приятного аппетита!', ua: 'Смачного!' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Vreau o cafea.',
      tr: { ru: 'Я хочу кофе.', ua: 'Я хочу кави.' },
      note: {
        ru: 'vreau ≈ «вряу». Понятно, но официанту так говорить резковато — как «Дайте кофе».',
        ua: 'vreau ≈ «вряу». Зрозуміло, але офіціантові так казати різкувато — як «Дайте каву».',
      },
    },
    {
      kind: 'intro',
      ro: 'Aș vrea o cafea.',
      tr: { ru: 'Я бы хотел(а) кофе.', ua: 'Я б хотів (хотіла) кави.' },
      note: {
        ru: 'Вежливо — так и заказывают. aș ≈ «аш». Форма одна для мужчин и женщин, в отличие от «хотел / хотела».',
        ua: 'Ввічливо — саме так і замовляють. aș ≈ «аш». Форма одна для чоловіків і жінок, на відміну від «хотів / хотіла».',
      },
    },
    {
      kind: 'intro',
      ro: 'Ce doriți?',
      tr: { ru: 'Что желаете?', ua: 'Що бажаєте?' },
      note: {
        ru: 'Так спросит официант. Отвечайте: Aș vrea…',
        ua: 'Так спитає офіціант. Відповідайте: Aș vrea…',
      },
    },
    {
      kind: 'tip',
      title: 'A vrea — хотеть',
      body: {
        ru: [
          'Настоящее время — в таблице. Для вежливой просьбы — **aș vrea** (я бы хотел), а официант спросит вас **ați vrea…?** — не хотели бы вы…?',
          'После «хотеть» слово не меняется: vreau **o cafea**, aș vrea **un ceai**.',
        ],
        ua: [
          'Теперішній час — у таблиці. Для ввічливого прохання — **aș vrea** (я б хотів), а офіціант спитає вас **ați vrea…?** — чи не хотіли б ви…?',
          'Після «хотіти» слово не змінюється: vreau **o cafea**, aș vrea **un ceai**.',
        ],
      },
      rows: [
        { ro: 'eu vreau', tr: { ru: 'я хочу · «еу вряу»', ua: 'я хочу · «єу вряу»' } },
        { ro: 'tu vrei', tr: { ru: 'ты хочешь · «ту врей»', ua: 'ти хочеш · «ту врей»' } },
        { ro: 'el, ea vrea', tr: { ru: 'он, она хочет · «ел, я вря»', ua: 'він, вона хоче · «єл, я вря»' } },
        { ro: 'noi vrem', tr: { ru: 'мы хотим · «ной врем»', ua: 'ми хочемо · «ной врем»' } },
        { ro: 'voi vreți', tr: { ru: 'вы хотите · «вой врець»', ua: 'ви хочете · «вой врець»' } },
        { ro: 'ei, ele vor', tr: { ru: 'они хотят · «ей, еле вор»', ua: 'вони хочуть · «єй, єле вор»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я бы хотела чай.', ua: 'Я б хотіла чаю.' },
      correct: 'Aș vrea un ceai.',
      wrong: ['Aș vrea o ceai.', 'Vrei un ceai.', 'Aș vreau un ceai.'],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'vreau', tr: { ru: 'я хочу', ua: 'я хочу' } },
        { ro: 'vrei', tr: { ru: 'ты хочешь', ua: 'ти хочеш' } },
        { ro: 'vrea', tr: { ru: 'он хочет', ua: 'він хоче' } },
        { ro: 'vrem', tr: { ru: 'мы хотим', ua: 'ми хочемо' } },
        { ro: 'vor', tr: { ru: 'они хотят', ua: 'вони хочуть' } },
      ],
    },
    {
      kind: 'intro',
      ro: 'Nota, vă rog.',
      tr: { ru: 'Счёт, пожалуйста.', ua: 'Рахунок, будь ласка.' },
      note: {
        ru: 'nota — счёт, meniul — меню. А перед едой желают: Poftă bună! — Приятного аппетита!',
        ua: 'nota — рахунок, meniul — меню. А перед їжею бажають: Poftă bună! — Смачного!',
      },
    },
    {
      kind: 'listen',
      ro: 'Aș vrea meniul, vă rog',
      tr: { ru: 'Я бы хотел меню, пожалуйста', ua: 'Я б хотів меню, будь ласка' },
      wrong: ['Aș vrea nota, vă rog', 'Vreau meniul, vă rog', 'Ați vrea meniul?'],
    },
    {
      kind: 'pickNative',
      q: 'Poftă bună!',
      correct: { ru: 'Приятного аппетита!', ua: 'Смачного!' },
      wrong: [
        { ru: 'Счёт, пожалуйста!', ua: 'Рахунок, будь ласка!' },
        { ru: 'Добрый день!', ua: 'Добрий день!' },
        { ru: 'Что желаете?', ua: 'Що бажаєте?' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я бы хотел чорбу и хлеб.', ua: 'Я б хотів чорбу і хліб.' },
      words: ['Aș', 'vrea', 'o', 'ciorbă', 'și', 'pâine'],
      extra: ['vreau', 'un', 'fără'],
      shown: 'Aș vrea o ciorbă și pâine.',
    },
    {
      kind: 'type',
      q: { ru: 'Что ты хочешь?', ua: 'Що ти хочеш?' },
      answers: ['Ce vrei', 'Tu ce vrei', 'Ce vrei tu'],
      shown: 'Ce vrei?',
    },
    {
      kind: 'type',
      q: { ru: 'Счёт, пожалуйста.', ua: 'Рахунок, будь ласка.' },
      answers: ['Nota, vă rog', 'Nota, te rog'],
      shown: 'Nota, vă rog.',
    },
    {
      kind: 'type',
      q: { ru: 'Я бы хотел кофе с молоком.', ua: 'Я б хотів кави з молоком.' },
      answers: [
        'Aș vrea o cafea cu lapte',
        'Eu aș vrea o cafea cu lapte',
        'Aș vrea o cafea cu lapte, vă rog',
        'Aș vrea o cafea cu lapte, te rog',
      ],
      shown: 'Aș vrea o cafea cu lapte.',
    },
  ],
};
