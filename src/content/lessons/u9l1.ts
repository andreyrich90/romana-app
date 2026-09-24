import type { Lesson } from '../types';

/** A2 · Unit 3 · Lesson 1 — vreau să + verb (the conjunctive): vreau să merg, vrea să meargă, a învăța. */
export const u9l1: Lesson = {
  id: 'u9l1',
  title: { ru: 'Хочу пойти', ua: 'Хочу піти' },
  words: [
    { ro: 'Vreau să merg.', tr: { ru: 'Я хочу пойти.', ua: 'Я хочу піти.' } },
    { ro: 'Vrei să…?', tr: { ru: 'Хочешь…?', ua: 'Хочеш…?' } },
    { ro: 'Vrea să meargă.', tr: { ru: 'Он / она хочет пойти.', ua: 'Він / вона хоче піти.' } },
    { ro: 'a învăța', tr: { ru: 'учить, учиться', ua: 'вчити, вчитися' } },
    { ro: 'cu noi', tr: { ru: 'с нами', ua: 'з нами' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Vreau să merg acasă.',
      tr: { ru: 'Я хочу пойти домой.', ua: 'Я хочу піти додому.' },
      note: {
        ru: 'Дословно «хочу, чтобы я иду домой». Неопределённой формы, как «пойти», после vreau нет. ≈ «вряу сэ мерг акасэ».',
        ua: 'Дослівно «хочу, щоб я йду додому». Неозначеної форми, як «піти», після vreau немає. ≈ «вряу се мерг акасе».',
      },
    },
    {
      kind: 'intro',
      ro: 'Vrei să mergi cu noi?',
      tr: { ru: 'Хочешь пойти с нами?', ua: 'Хочеш піти з нами?' },
      note: {
        ru: 'Второй глагол в том же лице, что и первый: vrei — mergi. cu noi — с нами. ≈ «врей сэ мерджь ку ной».',
        ua: 'Друге дієслово в тій самій особі, що й перше: vrei — mergi. cu noi — з нами. ≈ «врей се мерджь ку ной».',
      },
    },
    {
      kind: 'intro',
      ro: 'Vreau să învăț română.',
      tr: { ru: 'Я хочу учить румынский.', ua: 'Я хочу вчити румунську.' },
      note: {
        ru: 'a învăța — учить и учиться. învăț ≈ «ынвэц» — «я учу».',
        ua: 'a învăța — вчити й вчитися. învăț ≈ «инвец» — «я вчу».',
      },
    },
    {
      kind: 'tip',
      title: 'Vreau să merg',
      body: {
        ru: [
          'После «хочу» второй глагол идёт с **să** и в том же лице: **vreau să merg**, **vrei să mergi**, **vrem să mergem**.',
          'Для «он, она, они» — та же особая форма, что после o să: **vrea să meargă**. Это не совпадение: **o să** — это и есть o + **să**.',
          'Не хочу — **nu vreau să…**: **Nu vreau să mănânc** — Я не хочу есть.',
        ],
        ua: [
          'Після «хочу» друге дієслово йде з **să** і в тій самій особі: **vreau să merg**, **vrei să mergi**, **vrem să mergem**.',
          'Для «він, вона, вони» — та сама особлива форма, що після o să: **vrea să meargă**. Це не збіг: **o să** — це і є o + **să**.',
          'Не хочу — **nu vreau să…**: **Nu vreau să mănânc** — Я не хочу їсти.',
        ],
      },
      rows: [
        { ro: 'vreau să merg', tr: { ru: 'я хочу пойти · «вряу сэ мерг»', ua: 'я хочу піти · «вряу се мерг»' } },
        { ro: 'vrei să mergi', tr: { ru: 'ты хочешь пойти · «врей сэ мерджь»', ua: 'ти хочеш піти · «врей се мерджь»' } },
        { ro: 'vrea să meargă', tr: { ru: 'он / она хочет пойти · «вря сэ мяргэ»', ua: 'він / вона хоче піти · «вря се мярге»' } },
        { ro: 'vrem să mergem', tr: { ru: 'мы хотим пойти · «врем сэ мерджем»', ua: 'ми хочемо піти · «врем се мерджем»' } },
        { ro: 'vor să meargă', tr: { ru: 'они хотят пойти · «вор сэ мяргэ»', ua: 'вони хочуть піти · «вор се мярге»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я хочу пойти домой.', ua: 'Я хочу піти додому.' },
      correct: 'Vreau să merg acasă.',
      wrong: ['Vreau să mergi acasă.', 'Vrea să meargă acasă.', 'Am mers acasă.'],
    },
    {
      kind: 'pickNative',
      q: 'Nu vreau să mănânc.',
      correct: { ru: 'Я не хочу есть.', ua: 'Я не хочу їсти.' },
      wrong: [
        { ru: 'Я хочу есть.', ua: 'Я хочу їсти.' },
        { ru: 'Он не хочет есть.', ua: 'Він не хоче їсти.' },
        { ru: 'Я не ел.', ua: 'Я не їв.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'vreau să', tr: { ru: 'я хочу', ua: 'я хочу' } },
        { ro: 'vrei să', tr: { ru: 'ты хочешь', ua: 'ти хочеш' } },
        { ro: 'vrea să', tr: { ru: 'он хочет', ua: 'він хоче' } },
        { ro: 'vrem să', tr: { ru: 'мы хотим', ua: 'ми хочемо' } },
        { ro: 'a învăța', tr: { ru: 'учить', ua: 'вчити' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Vrei să mergi cu noi',
      tr: { ru: 'Хочешь пойти с нами', ua: 'Хочеш піти з нами' },
      wrong: ['Vreau să merg cu voi', 'Vrea să meargă cu noi', 'Vrei să mergi mâine'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мы хотим учить румынский.', ua: 'Ми хочемо вчити румунську.' },
      words: ['Vrem', 'să', 'învățăm', 'română'],
      extra: ['vreau', 'învăț', 'o'],
      shown: 'Vrem să învățăm română.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Она хочет поехать на море.', ua: 'Вона хоче поїхати на море.' },
      correct: 'Ea vrea să meargă la mare.',
      wrong: ['Ea vrea să merg la mare.', 'Ea o să meargă la mare.', 'Ea vrea să mergi la mare.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я не хочу работать сегодня.', ua: 'Я не хочу працювати сьогодні.' },
      words: ['Nu', 'vreau', 'să', 'lucrez', 'azi'],
      extra: ['lucra', 'vrea', 'mâine'],
      shown: 'Nu vreau să lucrez azi.',
      also: ['Azi nu vreau să lucrez'],
    },
    {
      kind: 'type',
      q: { ru: 'Я хочу пойти домой.', ua: 'Я хочу піти додому.' },
      answers: ['Vreau să merg acasă', 'Eu vreau să merg acasă', 'Aș vrea să merg acasă'],
      shown: 'Vreau să merg acasă.',
    },
    {
      kind: 'type',
      q: { ru: 'Хочешь пойти с нами?', ua: 'Хочеш піти з нами?' },
      answers: ['Vrei să mergi cu noi', 'Vrei să vii cu noi', 'Tu vrei să mergi cu noi'],
      shown: 'Vrei să mergi cu noi?',
    },
  ],
};
