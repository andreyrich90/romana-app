import type { Lesson } from '../types';

/** A2 · Unit 6 · Lesson 4 — trouble on the road: am pierdut, nu găsesc, Puteți să mă ajutați?, Ajutor!, Sunați la poliție! */
export const u12l4: Lesson = {
  id: 'u12l4',
  title: { ru: 'Проблемы в пути', ua: 'Проблеми в дорозі' },
  words: [
    { ro: 'Am pierdut…', tr: { ru: 'Я потерял(а)…', ua: 'Я загубив(ла)…' } },
    { ro: 'Nu găsesc…', tr: { ru: 'Не могу найти…', ua: 'Не можу знайти…' } },
    { ro: 'pașaportul · bagajul', tr: { ru: 'паспорт · багаж', ua: 'паспорт · багаж' } },
    { ro: 'Puteți să mă ajutați?', tr: { ru: 'Можете мне помочь?', ua: 'Можете мені допомогти?' } },
    { ro: 'Ajutor!', tr: { ru: 'Помогите!', ua: 'Допоможіть!' } },
    { ro: 'Sunați la poliție!', tr: { ru: 'Звоните в полицию!', ua: 'Телефонуйте в поліцію!' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Am pierdut pașaportul.',
      tr: { ru: 'Я потерял(а) паспорт.', ua: 'Я загубив(ла) паспорт.' },
      note: {
        ru: 'a pierde → pierdut ≈ «ам пьердут пашапортул».',
        ua: 'a pierde → pierdut ≈ «ам п’єрдут пашапортул».',
      },
    },
    {
      kind: 'intro',
      ro: 'Nu găsesc bagajul.',
      tr: { ru: 'Не могу найти багаж.', ua: 'Не можу знайти багаж.' },
      note: {
        ru: 'găsesc ≈ «гэсеск» — «я нахожу», nu găsesc — «не нахожу», то есть «не могу найти».',
        ua: 'găsesc ≈ «гесеск» — «я знаходжу», nu găsesc — «не знаходжу», тобто «не можу знайти».',
      },
    },
    {
      kind: 'intro',
      ro: 'Puteți să mă ajutați?',
      tr: { ru: 'Можете мне помочь?', ua: 'Можете мені допомогти?' },
      note: {
        ru: 'a ajuta ≈ «ажута». По-румынски помогают кого, а не кому: mă — «меня». Крикнуть на улице — Ajutor! «ажутор».',
        ua: 'a ajuta ≈ «ажута». Румунською допомагають кого, а не кому: mă — «мене». Крикнути на вулиці — Ajutor! «ажутор».',
      },
    },
    {
      kind: 'tip',
      title: 'Ajutor!',
      body: {
        ru: [
          'В беде хватит трёх фраз: **Ajutor!** (Помогите!), **Puteți să mă ajutați?**, **Sunați la 112!**',
          'Потерял — **am pierdut**: **am pierdut telefonul, cheia, biletul**. Не могу найти — **nu găsesc**.',
          'Полиция — **poliția**; «в полицию» — **la poliție**.',
        ],
        ua: [
          'У біді вистачить трьох фраз: **Ajutor!** (Допоможіть!), **Puteți să mă ajutați?**, **Sunați la 112!**',
          'Загубив — **am pierdut**: **am pierdut telefonul, cheia, biletul**. Не можу знайти — **nu găsesc**.',
          'Поліція — **poliția**; «у поліцію» — **la poliție**.',
        ],
      },
      rows: [
        { ro: 'Am pierdut pașaportul.', tr: { ru: 'Я потерял паспорт. · «ам пьердут пашапортул»', ua: 'Я загубив паспорт. · «ам п’єрдут пашапортул»' } },
        { ro: 'Nu găsesc bagajul.', tr: { ru: 'Не могу найти багаж. · «ну гэсеск багажул»', ua: 'Не можу знайти багаж. · «ну гесеск багажул»' } },
        { ro: 'Puteți să mă ajutați?', tr: { ru: 'Можете мне помочь? · «путець сэ мэ ажутаць»', ua: 'Можете мені допомогти? · «путець се ме ажутаць»' } },
        { ro: 'Sunați la poliție!', tr: { ru: 'Звоните в полицию! · «сунаць ла полицие»', ua: 'Телефонуйте в поліцію! · «сунаць ла поліціє»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я потерял ключ.', ua: 'Я загубив ключ.' },
      correct: 'Am pierdut cheia.',
      wrong: ['Nu găsesc cheia.', 'Am găsit cheia.', 'Am pierdut biletul.'],
    },
    {
      kind: 'pickNative',
      q: 'Nu găsesc bagajul.',
      correct: { ru: 'Не могу найти багаж.', ua: 'Не можу знайти багаж.' },
      wrong: [
        { ru: 'Я потерял паспорт.', ua: 'Я загубив паспорт.' },
        { ru: 'Я нашёл багаж.', ua: 'Я знайшов багаж.' },
        { ru: 'Где мой билет?', ua: 'Де мій квиток?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'pașaportul', tr: { ru: 'паспорт', ua: 'паспорт' } },
        { ro: 'bagajul', tr: { ru: 'багаж', ua: 'багаж' } },
        { ro: 'am pierdut', tr: { ru: 'я потерял', ua: 'я загубив' } },
        { ro: 'nu găsesc', tr: { ru: 'не могу найти', ua: 'не можу знайти' } },
        { ro: 'Ajutor!', tr: { ru: 'Помогите!', ua: 'Допоможіть!' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Am pierdut telefonul',
      tr: { ru: 'Я потерял телефон', ua: 'Я загубив телефон' },
      wrong: ['Am pierdut pașaportul', 'Nu găsesc telefonul', 'Am găsit telefonul'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Можете мне помочь, пожалуйста?', ua: 'Можете мені допомогти, будь ласка?' },
      words: ['Puteți', 'să', 'mă', 'ajutați', 'vă', 'rog'],
      extra: ['pot', 'te', 'ajut'],
      shown: 'Puteți să mă ajutați, vă rog?',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Звоните в полицию!', ua: 'Телефонуйте в поліцію!' },
      correct: 'Sunați la poliție!',
      wrong: ['Sunați la 112!', 'Unde e poliția?', 'Am pierdut pașaportul!'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я не могу найти свой паспорт.', ua: 'Я не можу знайти свій паспорт.' },
      words: ['Nu', 'găsesc', 'pașaportul', 'meu'],
      extra: ['am', 'pierdut', 'mea'],
      shown: 'Nu găsesc pașaportul meu.',
      also: ['Nu găsesc pașaportul'],
    },
    {
      kind: 'type',
      q: { ru: 'Я потерял(а) паспорт.', ua: 'Я загубив(ла) паспорт.' },
      answers: ['Am pierdut pașaportul', 'Mi-am pierdut pașaportul', 'Am pierdut pașaportul meu', 'Eu am pierdut pașaportul'],
      shown: 'Am pierdut pașaportul.',
    },
    {
      kind: 'type',
      q: { ru: 'Помогите!', ua: 'Допоможіть!' },
      answers: ['Ajutor'],
      shown: 'Ajutor!',
    },
  ],
};
