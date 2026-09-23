import type { Lesson } from '../types';

/** Unit 5 · Lesson 1 — days of the week, azi / mâine / ieri, «luni» vs «lunea». */
export const u5l1: Lesson = {
  id: 'u5l1',
  title: { ru: 'Дни недели', ua: 'Дні тижня' },
  words: [
    { ro: 'luni, marți, miercuri', tr: { ru: 'понедельник, вторник, среда', ua: 'понеділок, вівторок, середа' } },
    { ro: 'joi, vineri', tr: { ru: 'четверг, пятница', ua: 'четвер, пʼятниця' } },
    { ro: 'sâmbătă, duminică', tr: { ru: 'суббота, воскресенье', ua: 'субота, неділя' } },
    { ro: 'azi, mâine, ieri', tr: { ru: 'сегодня, завтра, вчера', ua: 'сьогодні, завтра, вчора' } },
    { ro: 'Ce zi este azi?', tr: { ru: 'Какой сегодня день?', ua: 'Який сьогодні день?' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'luni, marți, miercuri',
      tr: { ru: 'понедельник, вторник, среда', ua: 'понеділок, вівторок, середа' },
      note: {
        ru: 'Дни пишутся с маленькой буквы, как в русском. marți ≈ «марць», miercuri ≈ «мьеркурь».',
        ua: 'Дні пишуться з малої літери, як в українській. marți ≈ «марць», miercuri ≈ «мьєркурь».',
      },
    },
    {
      kind: 'intro',
      ro: 'joi, vineri',
      tr: { ru: 'четверг, пятница', ua: 'четвер, пʼятниця' },
      note: {
        ru: 'joi ≈ «жой», vineri ≈ «винерь». j читается как «ж».',
        ua: 'joi ≈ «жой», vineri ≈ «вінерь». j читається як «ж».',
      },
    },
    {
      kind: 'intro',
      ro: 'sâmbătă, duminică',
      tr: { ru: 'суббота, воскресенье', ua: 'субота, неділя' },
      note: {
        ru: 'sâmbătă ≈ «сымбэтэ» — родственник «субботы». duminică ≈ «думиникэ».',
        ua: 'sâmbătă ≈ «симбете» — родич «суботи». duminică ≈ «думініке».',
      },
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'luni', tr: { ru: 'понедельник', ua: 'понеділок' } },
        { ro: 'marți', tr: { ru: 'вторник', ua: 'вівторок' } },
        { ro: 'miercuri', tr: { ru: 'среда', ua: 'середа' } },
        { ro: 'joi', tr: { ru: 'четверг', ua: 'четвер' } },
        { ro: 'vineri', tr: { ru: 'пятница', ua: 'пʼятниця' } },
      ],
    },
    {
      kind: 'intro',
      ro: 'azi, mâine, ieri',
      tr: { ru: 'сегодня, завтра, вчера', ua: 'сьогодні, завтра, вчора' },
      note: {
        ru: 'azi ≈ «азь», mâine ≈ «мыйне», ieri ≈ «йерь». Вместо azi говорят и astăzi.',
        ua: 'azi ≈ «азь», mâine ≈ «мийне», ieri ≈ «єрь». Замість azi кажуть і astăzi.',
      },
    },
    {
      kind: 'tip',
      title: 'Luni, lunea',
      body: {
        ru: [
          '«В понедельник» — просто **luni**, без предлога: Luni lucrez.',
          '«По понедельникам», каждую неделю — с артиклем: **lunea**, **sâmbăta**.',
        ],
        ua: [
          '«У понеділок» — просто **luni**, без прийменника: Luni lucrez.',
          '«По понеділках», щотижня — з артиклем: **lunea**, **sâmbăta**.',
        ],
      },
      rows: [
        { ro: 'Ce zi este azi?', tr: { ru: 'Какой сегодня день? · «че зи есте азь»', ua: 'Який сьогодні день? · «че зі єсте азь»' } },
        { ro: 'Azi este marți.', tr: { ru: 'Сегодня вторник. · «азь есте марць»', ua: 'Сьогодні вівторок. · «азь єсте марць»' } },
        { ro: 'Mâine este miercuri.', tr: { ru: 'Завтра среда. · «мыйне есте мьеркурь»', ua: 'Завтра середа. · «мийне єсте мьєркурь»' } },
        { ro: 'Sâmbăta mergem la piață.', tr: { ru: 'По субботам мы ходим на рынок. · «сымбэта мерджем ла пяцэ»', ua: 'По суботах ми ходимо на ринок. · «симбета мерджем ла пяце»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Сегодня пятница.', ua: 'Сьогодні пʼятниця.' },
      correct: 'Azi este vineri.',
      wrong: ['Azi este joi.', 'Mâine este vineri.', 'Azi sunt vineri.'],
    },
    {
      kind: 'listen',
      ro: 'Mâine este sâmbătă',
      tr: { ru: 'Завтра суббота', ua: 'Завтра субота' },
      wrong: ['Azi este sâmbătă', 'Mâine este duminică', 'Mâine este luni'],
    },
    {
      kind: 'pickNative',
      q: 'Ce zi este azi?',
      correct: { ru: 'Какой сегодня день?', ua: 'Який сьогодні день?' },
      wrong: [
        { ru: 'Какой завтра день?', ua: 'Який завтра день?' },
        { ru: 'Который час?', ua: 'Котра година?' },
        { ru: 'Где ты сегодня?', ua: 'Де ти сьогодні?' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Завтра воскресенье.', ua: 'Завтра неділя.' },
      words: ['Mâine', 'este', 'duminică'],
      extra: ['azi', 'sâmbătă', 'sunt'],
      shown: 'Mâine este duminică.',
    },
    {
      kind: 'type',
      q: { ru: 'Сегодня понедельник.', ua: 'Сьогодні понеділок.' },
      answers: ['Azi este luni', 'Azi e luni', 'Astăzi este luni', 'Astăzi e luni'],
      shown: 'Azi este luni.',
    },
    {
      kind: 'type',
      q: { ru: 'среда', ua: 'середа' },
      answers: ['miercuri'],
      shown: 'miercuri',
    },
  ],
};
