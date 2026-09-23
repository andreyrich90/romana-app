import type { Lesson } from '../types';

/** Unit 3 · Lesson 1 — drinks, cu / fără, and the neuter gender (un ceai — două ceaiuri). */
export const u3l1: Lesson = {
  id: 'u3l1',
  title: { ru: 'Напитки', ua: 'Напої' },
  words: [
    { ro: 'apă', tr: { ru: 'вода', ua: 'вода' } },
    { ro: 'o cafea, un ceai', tr: { ru: 'кофе, чай', ua: 'кава, чай' } },
    { ro: 'suc, lapte, vin', tr: { ru: 'сок, молоко, вино', ua: 'сік, молоко, вино' } },
    { ro: 'cu lapte, fără zahăr', tr: { ru: 'с молоком, без сахара', ua: 'з молоком, без цукру' } },
    { ro: 'un pahar de apă', tr: { ru: 'стакан воды', ua: 'склянка води' } },
    { ro: 'două ceaiuri', tr: { ru: 'два чая', ua: 'два чаї' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'apă',
      tr: { ru: 'вода', ua: 'вода' },
      note: {
        ru: 'apă ≈ «апэ». Без газа — apă plată, с газом — apă minerală.',
        ua: 'apă ≈ «апе». Без газу — apă plată, з газом — apă minerală.',
      },
    },
    {
      kind: 'intro',
      ro: 'o cafea, un ceai',
      tr: { ru: 'кофе, чай', ua: 'кава, чай' },
      note: {
        ru: 'cafea — женского рода (o cafea), ceai — мужского (un ceai). ceai ≈ «чай».',
        ua: 'cafea — жіночого роду (o cafea), як і «кава». ceai — чоловічого (un ceai) ≈ «чай».',
      },
    },
    {
      kind: 'intro',
      ro: 'cu lapte, fără zahăr',
      tr: { ru: 'с молоком, без сахара', ua: 'з молоком, без цукру' },
      note: {
        ru: 'cu — «с», fără ≈ «фэрэ» — «без». После них слово не меняется: cu lapte, fără lapte.',
        ua: 'cu — «з», fără ≈ «фере» — «без». Після них слово не змінюється: cu lapte, fără lapte.',
      },
    },
    {
      kind: 'pickNative',
      q: 'o cafea cu lapte',
      correct: { ru: 'кофе с молоком', ua: 'кава з молоком' },
      wrong: [
        { ru: 'чай с молоком', ua: 'чай з молоком' },
        { ru: 'кофе без сахара', ua: 'кава без цукру' },
        { ru: 'кофе без молока', ua: 'кава без молока' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'apă', tr: { ru: 'вода', ua: 'вода' } },
        { ro: 'ceai', tr: { ru: 'чай', ua: 'чай' } },
        { ro: 'suc', tr: { ru: 'сок', ua: 'сік' } },
        { ro: 'lapte', tr: { ru: 'молоко', ua: 'молоко' } },
        { ro: 'vin', tr: { ru: 'вино', ua: 'вино' } },
      ],
    },
    {
      kind: 'tip',
      title: 'Un ceai — două ceaiuri',
      body: {
        ru: [
          'ceai, suc, vin — **средний род**. В единственном числе он выглядит как мужской (**un** ceai), а во множественном — как женский (**două** ceaiuri).',
          'Поэтому «два чая» — **două** ceaiuri, а не «doi». Множественное у таких слов часто на **-uri**.',
        ],
        ua: [
          'ceai, suc, vin — **середній рід**. В однині він має вигляд чоловічого (**un** ceai), а в множині — жіночого (**două** ceaiuri).',
          'Тому «два чаї» — **două** ceaiuri, а не «doi». Множина таких слів часто на **-uri**.',
        ],
      },
      rows: [
        { ro: 'un ceai — două ceaiuri', tr: { ru: 'чай — два чая', ua: 'чай — два чаї' } },
        { ro: 'un suc — două sucuri', tr: { ru: 'сок — два сока', ua: 'сік — два соки' } },
        { ro: 'o cafea — două cafele', tr: { ru: 'кофе — два кофе', ua: 'кава — дві кави' } },
        { ro: 'o bere — două beri', tr: { ru: 'пиво — два пива', ua: 'пиво — два пива' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'два чая', ua: 'два чаї' },
      correct: 'două ceaiuri',
      wrong: ['doi ceaiuri', 'două ceai', 'doi ceai'],
    },
    {
      kind: 'listen',
      ro: 'Un ceai fără zahăr',
      tr: { ru: 'Чай без сахара', ua: 'Чай без цукру' },
      wrong: ['Un ceai cu zahăr', 'O cafea fără zahăr', 'Un suc fără zahăr'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Кофе с молоком, пожалуйста.', ua: 'Каву з молоком, будь ласка.' },
      words: ['O', 'cafea', 'cu', 'lapte', 'vă', 'rog'],
      extra: ['fără', 'un', 'ceai'],
      shown: 'O cafea cu lapte, vă rog.',
    },
    {
      kind: 'intro',
      ro: 'un pahar de apă',
      tr: { ru: 'стакан воды', ua: 'склянка води' },
      note: {
        ru: 'Дословно «стакан из воды»: количество + de + что. Так же: o sticlă de vin — бутылка вина.',
        ua: 'Дослівно «склянка з води»: кількість + de + що. Так само: o sticlă de vin — пляшка вина.',
      },
    },
    {
      kind: 'type',
      q: { ru: 'чай без сахара', ua: 'чай без цукру' },
      answers: ['un ceai fără zahăr', 'ceai fără zahăr'],
      shown: 'un ceai fără zahăr',
    },
    {
      kind: 'type',
      q: { ru: 'Стакан воды, пожалуйста.', ua: 'Склянку води, будь ласка.' },
      answers: ['Un pahar de apă, vă rog', 'Un pahar de apă, te rog', 'Un pahar cu apă, vă rog', 'Un pahar cu apă, te rog'],
      shown: 'Un pahar de apă, vă rog.',
    },
  ],
};
