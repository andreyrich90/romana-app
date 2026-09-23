import type { Lesson } from '../types';

/** Unit 1 · Lesson 4 — numbers 0–10, and the gendered «un / o», «doi / două». */
export const u1l4: Lesson = {
  id: 'u1l4',
  title: { ru: 'Числа 0–10', ua: 'Числа 0–10' },
  words: [
    { ro: 'zero', tr: { ru: 'ноль', ua: 'нуль' } },
    { ro: 'unu, doi, trei', tr: { ru: 'один, два, три', ua: 'один, два, три' } },
    { ro: 'patru, cinci, șase', tr: { ru: 'четыре, пять, шесть', ua: 'чотири, пʼять, шість' } },
    { ro: 'șapte, opt', tr: { ru: 'семь, восемь', ua: 'сім, вісім' } },
    { ro: 'nouă, zece', tr: { ru: 'девять, десять', ua: 'девʼять, десять' } },
    { ro: 'un ceai, o cafea', tr: { ru: 'один чай, один кофе', ua: 'один чай, одна кава' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'unu, doi, trei',
      tr: { ru: 'один, два, три', ua: 'один, два, три' },
      note: {
        ru: 'Читается почти как пишется: «уну, дой, трей».',
        ua: 'Читається майже як пишеться: «уну, дой, трей».',
      },
    },
    {
      kind: 'intro',
      ro: 'patru, cinci, șase',
      tr: { ru: 'четыре, пять, шесть', ua: 'чотири, пʼять, шість' },
      note: {
        ru: 'Перед e и i буква c звучит как «ч»: cinci ≈ «чинчь». ș — «ш»: șase ≈ «шасе».',
        ua: 'Перед e та i буква c звучить як «ч»: cinci ≈ «чінчь». ș — «ш»: șase ≈ «шасе».',
      },
    },
    {
      kind: 'intro',
      ro: 'șapte, opt, nouă, zece',
      tr: { ru: 'семь, восемь, девять, десять', ua: 'сім, вісім, девʼять, десять' },
      note: {
        ru: 'zece ≈ «зече», nouă ≈ «ноуэ». А ноль — просто zero.',
        ua: 'zece ≈ «зече», nouă ≈ «ноуе». А нуль — просто zero.',
      },
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'unu', tr: { ru: 'один', ua: 'один' } },
        { ro: 'trei', tr: { ru: 'три', ua: 'три' } },
        { ro: 'cinci', tr: { ru: 'пять', ua: 'пʼять' } },
        { ro: 'opt', tr: { ru: 'восемь', ua: 'вісім' } },
        { ro: 'zece', tr: { ru: 'десять', ua: 'десять' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'șapte',
      tr: { ru: 'семь', ua: 'сім' },
      wrong: ['șase', 'opt', 'patru'],
    },
    {
      kind: 'pickNative',
      q: 'nouă',
      correct: { ru: 'девять', ua: 'девʼять' },
      wrong: [
        { ru: 'шесть', ua: 'шість' },
        { ru: 'два', ua: 'два' },
        { ru: 'четыре', ua: 'чотири' },
      ],
    },
    {
      kind: 'tip',
      title: 'Un, o · doi, două',
      body: {
        ru: [
          'При счёте говорят unu, doi. Но перед существительным «один» и «два» согласуются в роде: **un** ceai, но **o** cafea; **doi** lei, но **două** cafele.',
          'Остальные числа не меняются: trei ceaiuri, trei cafele.',
          'Кстати, «пожалуйста» бывает двух видов: **te rog** — тому, с кем на «ты», **vă rog** — на «вы».',
        ],
        ua: [
          'Під час лічби кажуть unu, doi. Але перед іменником «один» і «два» узгоджуються в роді: **un** ceai, але **o** cafea; **doi** lei, але **două** cafele.',
          'Інші числа не змінюються: trei ceaiuri, trei cafele.',
          'До речі, «будь ласка» буває двох видів: **te rog** — тому, з ким на «ти», **vă rog** — на «ви».',
        ],
      },
      rows: [
        { ro: 'un ceai', tr: { ru: 'один чай', ua: 'один чай' } },
        { ro: 'o cafea', tr: { ru: 'один кофе', ua: 'одна кава' } },
        { ro: 'doi lei', tr: { ru: 'два лея', ua: 'два леї' } },
        { ro: 'două cafele', tr: { ru: 'два кофе', ua: 'дві кави' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'два кофе', ua: 'дві кави' },
      correct: 'două cafele',
      wrong: ['doi cafele', 'două cafea', 'doi cafea'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'пять', ua: 'пʼять' },
      correct: 'cinci',
      wrong: ['șase', 'patru', 'opt'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Три, два, один, ноль!', ua: 'Три, два, один, нуль!' },
      words: ['Trei', 'doi', 'unu', 'zero'],
      extra: ['patru', 'zece', 'două'],
      shown: 'Trei, doi, unu, zero!',
    },
    {
      kind: 'listen',
      ro: 'zece',
      tr: { ru: 'десять', ua: 'десять' },
      wrong: ['șase', 'trei', 'doi'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'восемь', ua: 'вісім' },
      correct: 'opt',
      wrong: ['șapte', 'nouă', 'trei'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Один чай, пожалуйста.', ua: 'Один чай, будь ласка.' },
      words: ['Un', 'ceai', 'vă', 'rog'],
      extra: ['O', 'doi', 'cafea'],
      shown: 'Un ceai, vă rog.',
    },
  ],
};
