import type { Lesson } from '../types';

/** B1 · Unit 2 · Lesson 1 — the conditional: aș, ai, ar, am, ați, ar + verb; ar fi; polite ați putea…? */
export const u14l1: Lesson = {
  id: 'u14l1',
  title: { ru: 'Я бы…', ua: 'Я б…' },
  words: [
    { ro: 'aș merge', tr: { ru: 'я бы пошёл (пошла)', ua: 'я б пішов (пішла)' } },
    { ro: 'ar fi', tr: { ru: 'было бы', ua: 'було б' } },
    { ro: 'Ați putea…?', tr: { ru: 'Не могли бы вы…?', ua: 'Чи не могли б ви…?' } },
    { ro: 'aș bea', tr: { ru: 'я бы выпил(а)', ua: 'я б випив(ла)' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Aș bea o cafea.',
      tr: { ru: 'Я бы выпил(а) кофе.', ua: 'Я б випив(ла) кави.' },
      note: {
        ru: 'Условное наклонение: aș + глагол без a — как русское «бы». aș ≈ «аш». Aș vrea вы уже знаете из кафе.',
        ua: 'Умовний спосіб: aș + дієслово без a — як українське «б». aș ≈ «аш». Aș vrea ви вже знаєте з кафе.',
      },
    },
    {
      kind: 'intro',
      ro: 'Ar fi frumos.',
      tr: { ru: 'Было бы здорово.', ua: 'Було б чудово.' },
      note: {
        ru: 'ar fi ≈ «ар фи» — «было бы». frumos здесь — «здорово, прекрасно».',
        ua: 'ar fi ≈ «ар фі» — «було б». frumos тут — «чудово».',
      },
    },
    {
      kind: 'intro',
      ro: 'Ați putea să mă ajutați?',
      tr: { ru: 'Не могли бы вы мне помочь?', ua: 'Чи не могли б ви мені допомогти?' },
      note: {
        ru: 'Самая вежливая просьба: ați putea — «могли бы вы». Мягче, чем puteți.',
        ua: 'Найввічливіше прохання: ați putea — «могли б ви». М’якше, ніж puteți.',
      },
    },
    {
      kind: 'tip',
      title: 'Aș merge',
      body: {
        ru: [
          '**Aș, ai, ar, am, ați, ar** + глагол в словарной форме без **a**: a merge → **aș merge** — я бы пошёл.',
          'Рода нет: aș merge — и «пошёл бы», и «пошла бы».',
          'Не путайте: **am merge** — «мы бы пошли», **am mers** — «я пошёл».',
        ],
        ua: [
          '**Aș, ai, ar, am, ați, ar** + дієслово в словниковій формі без **a**: a merge → **aș merge** — я б пішов.',
          'Роду немає: aș merge — і «пішов би», і «пішла б».',
          'Не плутайте: **am merge** — «ми б пішли», **am mers** — «я пішов».',
        ],
      },
      rows: [
        { ro: 'eu aș merge', tr: { ru: 'я бы пошёл', ua: 'я б пішов' } },
        { ro: 'tu ai merge', tr: { ru: 'ты бы пошёл', ua: 'ти б пішов' } },
        { ro: 'el / ea ar merge', tr: { ru: 'он / она бы пошёл (пошла)', ua: 'він / вона б пішов (пішла)' } },
        { ro: 'noi am merge', tr: { ru: 'мы бы пошли', ua: 'ми б пішли' } },
        { ro: 'voi ați merge', tr: { ru: 'вы бы пошли', ua: 'ви б пішли' } },
        { ro: 'ei / ele ar merge', tr: { ru: 'они бы пошли', ua: 'вони б пішли' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я бы выпил чаю.', ua: 'Я б випив чаю.' },
      correct: 'Aș bea un ceai.',
      wrong: ['Am băut un ceai.', 'Ai bea un ceai.', 'O să beau un ceai.'],
    },
    {
      kind: 'pickNative',
      q: 'Ar fi bine.',
      correct: { ru: 'Было бы хорошо.', ua: 'Було б добре.' },
      wrong: [
        { ru: 'Будет хорошо.', ua: 'Буде добре.' },
        { ru: 'Было хорошо.', ua: 'Було добре.' },
        { ru: 'Это хорошо.', ua: 'Це добре.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'aș merge', tr: { ru: 'я бы пошёл', ua: 'я б пішов' } },
        { ro: 'ai merge', tr: { ru: 'ты бы пошёл', ua: 'ти б пішов' } },
        { ro: 'ar fi', tr: { ru: 'было бы', ua: 'було б' } },
        { ro: 'ați putea', tr: { ru: 'могли бы вы', ua: 'могли б ви' } },
        { ro: 'am merge', tr: { ru: 'мы бы пошли', ua: 'ми б пішли' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Aș mânca ceva',
      tr: { ru: 'Я бы что-нибудь съел', ua: 'Я б щось з’їв' },
      wrong: ['Am mâncat ceva', 'Ai mânca ceva', 'Aș bea ceva'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мы бы поехали на море.', ua: 'Ми б поїхали на море.' },
      words: ['Am', 'merge', 'la', 'mare'],
      extra: ['mers', 'aș', 'munte'],
      shown: 'Am merge la mare.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Не могли бы вы повторить?', ua: 'Чи не могли б ви повторити?' },
      correct: 'Ați putea să repetați?',
      wrong: ['Ați repetat?', 'Aș putea să repet?', 'Ar putea să repete?'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Было бы здорово!', ua: 'Було б чудово!' },
      words: ['Ar', 'fi', 'frumos'],
      extra: ['a', 'fost', 'aș'],
      shown: 'Ar fi frumos!',
    },
    {
      kind: 'type',
      q: { ru: 'Я бы выпил(а) кофе.', ua: 'Я б випив(ла) кави.' },
      answers: ['Aș bea o cafea', 'Aș bea cafea', 'Eu aș bea o cafea'],
      shown: 'Aș bea o cafea.',
    },
    {
      kind: 'type',
      q: { ru: 'Было бы хорошо.', ua: 'Було б добре.' },
      answers: ['Ar fi bine'],
      shown: 'Ar fi bine.',
    },
  ],
};
