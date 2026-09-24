import type { Lesson } from '../types';

/** A2 · Unit 4 · Lesson 5 — review: body, pain, pharmacy, doctor. No new words. */
export const u10l5: Lesson = {
  id: 'u10l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Mă doare burta.', tr: { ru: 'У меня болит живот.', ua: 'У мене болить живіт.' } },
    { ro: 'Aveți ceva pentru febră?', tr: { ru: 'У вас есть что-нибудь от температуры?', ua: 'У вас є щось від температури?' } },
    { ro: 'Trebuie să merg la doctor.', tr: { ru: 'Мне надо к врачу.', ua: 'Мені треба до лікаря.' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'La doctor și la farmacie',
      body: {
        ru: [
          'Болит одно — **mă doare**, несколько — **mă dor**. Часть тела — с артиклем: **capul, spatele, ochii**.',
          'В аптеке — **Aveți ceva pentru…?**, у врача — **Nu mă simt bine**. Советы звучат как **luați, beți**.',
        ],
        ua: [
          'Болить одне — **mă doare**, кілька — **mă dor**. Частина тіла — з артиклем: **capul, spatele, ochii**.',
          'В аптеці — **Aveți ceva pentru…?**, у лікаря — **Nu mă simt bine**. Поради звучать як **luați, beți**.',
        ],
      },
      rows: [
        { ro: 'Mă doare burta.', tr: { ru: 'У меня болит живот. · «мэ доаре бурта»', ua: 'У мене болить живіт. · «ме доаре бурта»' } },
        { ro: 'Mă dor dinții.', tr: { ru: 'У меня болят зубы. · «мэ дор динций»', ua: 'У мене болять зуби. · «ме дор дінцій»' } },
        { ro: 'Luați după masă.', tr: { ru: 'Принимайте после еды. · «луаць дупэ масэ»', ua: 'Приймайте після їжі. · «луаць дупе масе»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'У меня болят глаза.', ua: 'У мене болять очі.' },
      correct: 'Mă dor ochii.',
      wrong: ['Mă doare ochii.', 'Te dor ochii.', 'Mă dor dinții.'],
    },
    {
      kind: 'pickNative',
      q: 'Aveți ceva pentru febră?',
      correct: { ru: 'У вас есть что-нибудь от температуры?', ua: 'У вас є щось від температури?' },
      wrong: [
        { ru: 'У меня температура.', ua: 'У мене температура.' },
        { ru: 'У вас есть что-нибудь от кашля?', ua: 'У вас є щось від кашлю?' },
        { ru: 'У вас температура?', ua: 'У вас температура?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'capul', tr: { ru: 'голова', ua: 'голова' } },
        { ro: 'spatele', tr: { ru: 'спина', ua: 'спина' } },
        { ro: 'gâtul', tr: { ru: 'горло', ua: 'горло' } },
        { ro: 'febră', tr: { ru: 'температура', ua: 'температура' } },
        { ro: 'rețetă', tr: { ru: 'рецепт', ua: 'рецепт' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Mă doare burta',
      tr: { ru: 'У меня болит живот', ua: 'У мене болить живіт' },
      wrong: ['Mă doare spatele', 'Te doare burta', 'Mă dor picioarele'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Где у тебя болит?', ua: 'Де у тебе болить?' },
      words: ['Unde', 'te', 'doare'],
      extra: ['vă', 'dor', 'mă'],
      shown: 'Unde te doare?',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Примите таблетку после еды.', ua: 'Прийміть таблетку після їжі.' },
      correct: 'Luați o pastilă după masă.',
      wrong: ['Luați o pastilă înainte de masă.', 'Luați două pastile după masă.', 'Beți apă după masă.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я простудился, у меня кашель.', ua: 'Я застудився, у мене кашель.' },
      words: ['Sunt', 'răcit', 'am', 'tuse'],
      extra: ['răcită', 'febră', 'e'],
      shown: 'Sunt răcit, am tuse.',
    },
    {
      kind: 'listen',
      ro: 'Cum vă simțiți azi',
      tr: { ru: 'Как вы себя чувствуете сегодня', ua: 'Як ви почуваєтеся сьогодні' },
      wrong: ['Cum te simți azi', 'Unde vă doare azi', 'Cum vă simțiți acum'],
    },
    {
      kind: 'type',
      q: { ru: 'У меня болит спина.', ua: 'У мене болить спина.' },
      answers: ['Mă doare spatele'],
      shown: 'Mă doare spatele.',
    },
    {
      kind: 'type',
      q: { ru: 'У меня температура.', ua: 'У мене температура.' },
      answers: ['Am febră', 'Eu am febră'],
      shown: 'Am febră.',
    },
    {
      kind: 'type',
      q: { ru: 'Мне надо к врачу.', ua: 'Мені треба до лікаря.' },
      answers: ['Trebuie să merg la doctor', 'Trebuie să merg la medic', 'Eu trebuie să merg la doctor', 'Trebuie să mă duc la doctor'],
      shown: 'Trebuie să merg la doctor.',
    },
  ],
};
