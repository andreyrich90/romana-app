import type { Lesson } from '../types';

/** A2 · Unit 5 · Lesson 3 — whose is it: the genitive (lui Andrei, mamei, Anei), al cui / a cui, al meu / a mea. */
export const u11l3: Lesson = {
  id: 'u11l3',
  title: { ru: 'Чьё это?', ua: 'Чиє це?' },
  words: [
    { ro: 'telefonul lui Andrei', tr: { ru: 'телефон Андрея', ua: 'телефон Андрія' } },
    { ro: 'casa mamei', tr: { ru: 'дом мамы', ua: 'будинок мами' } },
    { ro: 'o geantă', tr: { ru: 'сумка', ua: 'сумка' } },
    { ro: 'Al cui e? · A cui e?', tr: { ru: 'Чей это? · Чья это?', ua: 'Чий це? · Чия це?' } },
    { ro: 'E al meu. · E a mea.', tr: { ru: 'Мой. · Моя.', ua: 'Мій. · Моя.' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'telefonul lui Andrei',
      tr: { ru: 'телефон Андрея', ua: 'телефон Андрія' },
      note: {
        ru: 'Чей — с мужскими именами: lui ≈ «луй» перед именем. Само имя не меняется: lui Andrei, lui Ion.',
        ua: 'Чий — з чоловічими іменами: lui ≈ «луй» перед іменем. Саме ім’я не змінюється: lui Andrei, lui Ion.',
      },
    },
    {
      kind: 'intro',
      ro: 'geanta Mariei',
      tr: { ru: 'сумка Марии', ua: 'сумка Марії' },
      note: {
        ru: 'Женские имена и слова на -a получают -ei: Maria → Mariei «марией», Ana → Anei «аней», mama → mamei «мамей». geantă ≈ «джянтэ».',
        ua: 'Жіночі імена й слова на -a отримують -ei: Maria → Mariei «марієй», Ana → Anei «аней», mama → mamei «мамей». geantă ≈ «джянте».',
      },
    },
    {
      kind: 'intro',
      ro: 'A cui e geanta? — E a mea!',
      tr: { ru: 'Чья это сумка? — Моя!', ua: 'Чия це сумка? — Моя!' },
      note: {
        ru: 'cui ≈ «куй». a cui — для женского рода, al cui — для мужского и среднего: Al cui e telefonul? — E al meu.',
        ua: 'cui ≈ «куй». a cui — для жіночого роду, al cui — для чоловічого й середнього: Al cui e telefonul? — E al meu.',
      },
    },
    {
      kind: 'tip',
      title: 'Lui Andrei, Mariei',
      body: {
        ru: [
          '«Чей» — это падеж. Мужские имена: **lui** + имя: **telefonul lui Andrei**. Женские имена и слова на -a: **-ei**: **mama → mamei**, **Ana → Anei**.',
          'Вещь идёт первой и с артиклем: **casa** mamei, **telefonul** lui Ion.',
          'Вопрос — **Al cui e?** (м., ср. р.) / **A cui e?** (ж. р.). Ответ — **E al meu / a mea** (мой / моя), **al tău / a ta** (твой / твоя).',
        ],
        ua: [
          '«Чий» — це відмінок. Чоловічі імена: **lui** + ім’я: **telefonul lui Andrei**. Жіночі імена й слова на -a: **-ei**: **mama → mamei**, **Ana → Anei**.',
          'Річ іде першою і з артиклем: **casa** mamei, **telefonul** lui Ion.',
          'Питання — **Al cui e?** (ч., с. р.) / **A cui e?** (ж. р.). Відповідь — **E al meu / a mea** (мій / моя), **al tău / a ta** (твій / твоя).',
        ],
      },
      rows: [
        { ro: 'telefonul lui Ion', tr: { ru: 'телефон Иона · «телефонул луй ион»', ua: 'телефон Іона · «телефонул луй іон»' } },
        { ro: 'casa mamei', tr: { ru: 'дом мамы · «каса мамей»', ua: 'будинок мами · «каса мамей»' } },
        { ro: 'geanta Anei', tr: { ru: 'сумка Анны · «джянта аней»', ua: 'сумка Анни · «джянта аней»' } },
        { ro: 'Al cui e telefonul?', tr: { ru: 'Чей это телефон? · «ал куй е телефонул»', ua: 'Чий це телефон? · «ал куй е телефонул»' } },
        { ro: 'E al meu.', tr: { ru: 'Мой. · «е ал меу»', ua: 'Мій. · «е ал меу»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'телефон Андрея', ua: 'телефон Андрія' },
      correct: 'telefonul lui Andrei',
      wrong: ['telefonul Andrei', 'telefonul Anei', 'telefonul meu'],
    },
    {
      kind: 'pickNative',
      q: 'casa mamei',
      correct: { ru: 'дом мамы', ua: 'будинок мами' },
      wrong: [
        { ru: 'дом папы', ua: 'будинок тата' },
        { ru: 'мама дома', ua: 'мама вдома' },
        { ru: 'мой дом', ua: 'мій будинок' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'lui Andrei', tr: { ru: 'Андрея', ua: 'Андрія' } },
        { ro: 'Mariei', tr: { ru: 'Марии', ua: 'Марії' } },
        { ro: 'mamei', tr: { ru: 'мамы', ua: 'мами' } },
        { ro: 'a cui', tr: { ru: 'чья', ua: 'чия' } },
        { ro: 'al meu', tr: { ru: 'мой', ua: 'мій' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Geanta Anei',
      tr: { ru: 'Сумка Анны', ua: 'Сумка Анни' },
      wrong: ['Geanta Mariei', 'Casa Anei', 'Geanta lui Andrei'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Это телефон Иона.', ua: 'Це телефон Іона.' },
      words: ['E', 'telefonul', 'lui', 'Ion'],
      extra: ['al', 'telefon', 'meu'],
      shown: 'E telefonul lui Ion.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Чья это сумка?', ua: 'Чия це сумка?' },
      correct: 'A cui e geanta?',
      wrong: ['Al cui e geanta?', 'Unde e geanta?', 'E geanta mea.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Телефон — мой.', ua: 'Телефон — мій.' },
      words: ['Telefonul', 'e', 'al', 'meu'],
      extra: ['a', 'mea', 'lui'],
      shown: 'Telefonul e al meu.',
    },
    {
      kind: 'type',
      q: { ru: 'дом мамы', ua: 'будинок мами' },
      answers: ['casa mamei'],
      shown: 'casa mamei',
    },
    {
      kind: 'type',
      q: { ru: 'Чей это телефон?', ua: 'Чий це телефон?' },
      answers: ['Al cui e telefonul', 'Al cui este telefonul', 'Al cui e telefonul ăsta', 'Al cui e telefonul acesta'],
      shown: 'Al cui e telefonul?',
    },
  ],
};
