import type { Lesson } from '../types';

/** A2 · Unit 2 · Lesson 5 — review of the future: o să / voi, plans, weather, meeting up. No new words. */
export const u8l5: Lesson = {
  id: 'u8l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Ce o să faceți în weekend?', tr: { ru: 'Что вы будете делать на выходных?', ua: 'Що ви робитимете на вихідних?' } },
    { ro: 'O să mergem la munte.', tr: { ru: 'Мы поедем в горы.', ua: 'Ми поїдемо в гори.' } },
    { ro: 'Cred că o să plouă.', tr: { ru: 'Думаю, будет дождь.', ua: 'Думаю, буде дощ.' } },
    { ro: 'Ne vedem mâine!', tr: { ru: 'Увидимся завтра!', ua: 'Побачимося завтра!' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Viitorul',
      body: {
        ru: [
          'Будущее = **o să** + глагол (в разговоре) или **voi / vei / va / vom / veți / vor** + глагол (на письме). Отрицание — **n-o să**.',
          'Для «он, она, они» после o să — особая форма: **meargă, plece, fie, ningă**.',
        ],
        ua: [
          'Майбутнє = **o să** + дієслово (у розмові) або **voi / vei / va / vom / veți / vor** + дієслово (на письмі). Заперечення — **n-o să**.',
          'Для «він, вона, вони» після o să — особлива форма: **meargă, plece, fie, ningă**.',
        ],
      },
      rows: [
        { ro: 'o să plec = voi pleca', tr: { ru: 'я уеду · «о сэ плек = вой плека»', ua: 'я виїду · «о се плек = вой плека»' } },
        { ro: 'o să fie = va fi', tr: { ru: 'будет · «о сэ фие = ва фи»', ua: 'буде · «о се фіє = ва фі»' } },
        { ro: 'n-o să meargă', tr: { ru: 'он не пойдёт · «но сэ мяргэ»', ua: 'він не піде · «но се мярге»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Послезавтра они уедут.', ua: 'Післязавтра вони виїдуть.' },
      correct: 'Poimâine o să plece.',
      wrong: ['Poimâine o să plec.', 'Ieri au plecat.', 'Poimâine o să plecăm.'],
    },
    {
      kind: 'pickNative',
      q: 'Ce o să faceți în weekend?',
      correct: { ru: 'Что вы будете делать на выходных?', ua: 'Що ви робитимете на вихідних?' },
      wrong: [
        { ru: 'Что вы делали на выходных?', ua: 'Що ви робили на вихідних?' },
        { ru: 'Что ты будешь делать на выходных?', ua: 'Що ти робитимеш на вихідних?' },
        { ru: 'Где вы будете на выходных?', ua: 'Де ви будете на вихідних?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'mâine', tr: { ru: 'завтра', ua: 'завтра' } },
        { ro: 'poimâine', tr: { ru: 'послезавтра', ua: 'післязавтра' } },
        { ro: 'diseară', tr: { ru: 'сегодня вечером', ua: 'сьогодні ввечері' } },
        { ro: 'o să plouă', tr: { ru: 'будет дождь', ua: 'буде дощ' } },
        { ro: 'vom merge', tr: { ru: 'мы пойдём', ua: 'ми підемо' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'O să fie frig diseară',
      tr: { ru: 'Сегодня вечером будет холодно', ua: 'Сьогодні ввечері буде холодно' },
      wrong: ['A fost frig aseară', 'O să fie cald diseară', 'O să fie frig mâine'],
    },
    {
      kind: 'tiles',
      q: { ru: 'На выходных мы поедем в горы.', ua: 'На вихідних ми поїдемо в гори.' },
      words: ['În', 'weekend', 'o', 'să', 'mergem', 'la', 'munte'],
      extra: ['am', 'mers', 'mare'],
      shown: 'În weekend o să mergem la munte.',
      also: ['O să mergem la munte în weekend'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я не буду работать завтра.', ua: 'Я не працюватиму завтра.' },
      correct: 'N-o să lucrez mâine.',
      wrong: ['N-am lucrat ieri.', 'O să lucrez mâine.', 'N-o să lucrezi mâine.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Думаю, будет хорошая погода.', ua: 'Думаю, буде гарна погода.' },
      words: ['Cred', 'că', 'o', 'să', 'fie', 'frumos'],
      extra: ['a', 'fost', 'frig'],
      shown: 'Cred că o să fie frumos.',
    },
    {
      kind: 'listen',
      ro: 'Ești liberă poimâine',
      tr: { ru: 'Ты свободна послезавтра', ua: 'Ти вільна післязавтра' },
      wrong: ['Ești liberă mâine', 'Sunt liberă poimâine', 'Ești liber poimâine'],
    },
    {
      kind: 'type',
      q: { ru: 'Увидимся завтра!', ua: 'Побачимося завтра!' },
      answers: ['Ne vedem mâine', 'Mâine ne vedem'],
      shown: 'Ne vedem mâine!',
    },
    {
      kind: 'type',
      q: { ru: 'Мы поедем на море.', ua: 'Ми поїдемо на море.' },
      answers: ['O să mergem la mare', 'Vom merge la mare', 'Noi o să mergem la mare', 'Noi vom merge la mare', 'Mergem la mare'],
      shown: 'O să mergem la mare.',
    },
    {
      kind: 'type',
      q: { ru: 'Завтра будет холодно.', ua: 'Завтра буде холодно.' },
      answers: ['Mâine o să fie frig', 'O să fie frig mâine', 'Mâine va fi frig', 'Va fi frig mâine'],
      shown: 'Mâine o să fie frig.',
    },
  ],
};
