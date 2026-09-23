import type { Lesson } from '../types';

/** Unit 2 · Lesson 2 — noun gender, un / o, and the definite article -ul / -le / -a. */
export const u2l2: Lesson = {
  id: 'u2l2',
  title: { ru: 'Он и она', ua: 'Він і вона' },
  words: [
    { ro: 'un băiat — băiatul', tr: { ru: 'мальчик', ua: 'хлопчик' } },
    { ro: 'o fată — fata', tr: { ru: 'девочка', ua: 'дівчинка' } },
    { ro: 'un bărbat — bărbatul', tr: { ru: 'мужчина', ua: 'чоловік' } },
    { ro: 'o femeie — femeia', tr: { ru: 'женщина', ua: 'жінка' } },
    { ro: 'un copil — copilul', tr: { ru: 'ребёнок', ua: 'дитина' } },
    { ro: 'prietenul, prietena', tr: { ru: 'друг, подруга', ua: 'друг, подруга' } },
    { ro: 'și', tr: { ru: 'и', ua: 'і' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'un băiat și o fată',
      tr: { ru: 'мальчик и девочка', ua: 'хлопчик і дівчинка' },
      note: {
        ru: 'un — перед мужским родом, o — перед женским: как английское «a», но с родом. și — «и».',
        ua: 'un — перед чоловічим родом, o — перед жіночим: як англійське «a», але з родом. și — «і».',
      },
    },
    {
      kind: 'intro',
      ro: 'un bărbat, o femeie',
      tr: { ru: 'мужчина, женщина', ua: 'чоловік, жінка' },
      note: {
        ru: 'femeie ≈ «фемейе». Слово женского рода, хотя кончается на -e.',
        ua: 'femeie ≈ «фемейе». Слово жіночого роду, хоча закінчується на -e.',
      },
    },
    {
      kind: 'tip',
      title: 'Băiatul, fata, fratele',
      body: {
        ru: [
          'Когда речь о конкретном человеке или предмете, артикль приклеивается **в конец**: băiat → băiat**ul**, fată → fat**a**.',
          'Мужской род: **-ul**, а после -e — **-le** (frate → frate**le**). Женский: **-a** вместо -ă или -e.',
          'Есть и средний род: в единственном числе он ведёт себя как мужской: un telefon → telefon**ul**.',
        ],
        ua: [
          'Коли йдеться про конкретну людину чи річ, артикль приклеюється **в кінець**: băiat → băiat**ul**, fată → fat**a**.',
          'Чоловічий рід: **-ul**, а після -e — **-le** (frate → frate**le**). Жіночий: **-a** замість -ă або -e.',
          'Є й середній рід: в однині він поводиться як чоловічий: un telefon → telefon**ul**.',
        ],
      },
      rows: [
        { ro: 'băiatul', tr: { ru: 'мальчик (этот)', ua: 'хлопчик (цей)' } },
        { ro: 'fratele', tr: { ru: 'брат (этот)', ua: 'брат (цей)' } },
        { ro: 'fata', tr: { ru: 'девочка (эта)', ua: 'дівчинка (ця)' } },
        { ro: 'femeia', tr: { ru: 'женщина (эта)', ua: 'жінка (ця)' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мальчик — студент.', ua: 'Хлопчик — студент.' },
      correct: 'Băiatul este student.',
      wrong: ['Băiat este student.', 'Băiatul sunt student.', 'Fata este student.'],
    },
    {
      kind: 'pickNative',
      q: 'femeia',
      correct: { ru: 'женщина', ua: 'жінка' },
      wrong: [
        { ru: 'девочка', ua: 'дівчинка' },
        { ru: 'мужчина', ua: 'чоловік' },
        { ru: 'семья', ua: 'родина' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'băiatul', tr: { ru: 'мальчик', ua: 'хлопчик' } },
        { ro: 'fata', tr: { ru: 'девочка', ua: 'дівчинка' } },
        { ro: 'bărbatul', tr: { ru: 'мужчина', ua: 'чоловік' } },
        { ro: 'femeia', tr: { ru: 'женщина', ua: 'жінка' } },
        { ro: 'copilul', tr: { ru: 'ребёнок', ua: 'дитина' } },
      ],
    },
    {
      kind: 'intro',
      ro: 'prietenul meu, prietena mea',
      tr: { ru: 'мой друг, моя подруга', ua: 'мій друг, моя подруга' },
      note: {
        ru: 'prieten → prietenă: та же пара, что student → studentă.',
        ua: 'prieten → prietenă: та сама пара, що student → studentă.',
      },
    },
    {
      kind: 'pickRo',
      q: { ru: 'моя подруга', ua: 'моя подруга' },
      correct: 'prietena mea',
      wrong: ['prietenă mea', 'prietena meu', 'prietenul mea'],
    },
    {
      kind: 'listen',
      ro: 'Fata este studentă',
      tr: { ru: 'Девочка — студентка', ua: 'Дівчинка — студентка' },
      wrong: ['Fata nu este studentă', 'Femeia este studentă', 'Băiatul este student'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мужчина — мой друг.', ua: 'Чоловік — мій друг.' },
      words: ['Bărbatul', 'este', 'prietenul', 'meu'],
      extra: ['femeia', 'mea', 'un'],
      shown: 'Bărbatul este prietenul meu.',
    },
    {
      kind: 'type',
      q: { ru: 'мальчик и девочка', ua: 'хлопчик і дівчинка' },
      answers: ['un băiat și o fată', 'băiatul și fata'],
      shown: 'un băiat și o fată',
    },
    {
      kind: 'type',
      q: { ru: 'Моя подруга — румынка.', ua: 'Моя подруга — румунка.' },
      answers: ['Prietena mea este româncă', 'Prietena mea e româncă'],
      shown: 'Prietena mea este româncă.',
    },
  ],
};
