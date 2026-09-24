import type { Lesson } from '../types';

/** A2 · Unit 4 · Lesson 3 — at the pharmacy: ceva pentru…, pastilă, rețetă, luați / beți, de trei ori pe zi, după masă. */
export const u10l3: Lesson = {
  id: 'u10l3',
  title: { ru: 'В аптеке', ua: 'В аптеці' },
  words: [
    { ro: 'Aveți ceva pentru…?', tr: { ru: 'У вас есть что-нибудь от…?', ua: 'У вас є щось від…?' } },
    { ro: 'o pastilă', tr: { ru: 'таблетка', ua: 'таблетка' } },
    { ro: 'o rețetă', tr: { ru: 'рецепт', ua: 'рецепт' } },
    { ro: 'luați · beți', tr: { ru: 'принимайте · пейте', ua: 'приймайте · пийте' } },
    { ro: 'de trei ori pe zi', tr: { ru: 'три раза в день', ua: 'тричі на день' } },
    { ro: 'după masă', tr: { ru: 'после еды', ua: 'після їжі' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Aveți ceva pentru durere de cap?',
      tr: { ru: 'У вас есть что-нибудь от головной боли?', ua: 'У вас є щось від головного болю?' },
      note: {
        ru: 'pentru ≈ «пентру» — «для, от». durere de cap — «боль головы» ≈ «дурере де кап».',
        ua: 'pentru ≈ «пентру» — «для, від». durere de cap — «біль голови» ≈ «дурере де кап».',
      },
    },
    {
      kind: 'intro',
      ro: 'Luați o pastilă de trei ori pe zi.',
      tr: { ru: 'Принимайте по таблетке три раза в день.', ua: 'Приймайте по таблетці тричі на день.' },
      note: {
        ru: 'luați ≈ «луаць» — «принимайте, берите». pastilă ≈ «пастилэ». de trei ori pe zi ≈ «де трей орь пе зи».',
        ua: 'luați ≈ «луаць» — «приймайте, беріть». pastilă ≈ «пастіле». de trei ori pe zi ≈ «де трей орь пе зі».',
      },
    },
    {
      kind: 'intro',
      ro: 'Aveți rețetă?',
      tr: { ru: 'У вас есть рецепт?', ua: 'У вас є рецепт?' },
      note: {
        ru: 'rețetă ≈ «рецетэ». Некоторые лекарства продают только по рецепту.',
        ua: 'rețetă ≈ «рецете». Деякі ліки продають лише за рецептом.',
      },
    },
    {
      kind: 'tip',
      title: 'Luați, beți',
      body: {
        ru: [
          'Врач и фармацевт говорят вежливым «вы»-повелительным: **luați** (принимайте), **beți** (пейте), **mergeți** (идите — было в разделе «В городе»).',
          'Сколько раз: **o dată** (один раз), **de două ori**, **de trei ori pe zi**. **După masă** — после еды, **înainte de masă** — до еды. Здесь **masă** — не «стол», а «еда».',
          '**Multă apă** — много воды: apă женского рода, поэтому mult → **multă**.',
        ],
        ua: [
          'Лікар і фармацевт кажуть ввічливим «ви»-наказовим: **luați** (приймайте), **beți** (пийте), **mergeți** (ідіть — було в розділі «У місті»).',
          'Скільки разів: **o dată** (один раз), **de două ori**, **de trei ori pe zi**. **După masă** — після їжі, **înainte de masă** — до їжі. Тут **masă** — не «стіл», а «їжа».',
          '**Multă apă** — багато води: apă жіночого роду, тому mult → **multă**.',
        ],
      },
      rows: [
        { ro: 'Luați o pastilă.', tr: { ru: 'Примите таблетку. · «луаць о пастилэ»', ua: 'Прийміть таблетку. · «луаць о пастіле»' } },
        { ro: 'Beți multă apă.', tr: { ru: 'Пейте много воды. · «бець мултэ апэ»', ua: 'Пийте багато води. · «бець мулте апе»' } },
        { ro: 'de două ori pe zi', tr: { ru: 'два раза в день · «де доуэ орь пе зи»', ua: 'двічі на день · «де доуе орь пе зі»' } },
        { ro: 'după masă', tr: { ru: 'после еды · «дупэ масэ»', ua: 'після їжі · «дупе масе»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Три раза в день.', ua: 'Тричі на день.' },
      correct: 'De trei ori pe zi.',
      wrong: ['De două ori pe zi.', 'Trei zile.', 'O dată pe zi.'],
    },
    {
      kind: 'pickNative',
      q: 'Beți multă apă.',
      correct: { ru: 'Пейте много воды.', ua: 'Пийте багато води.' },
      wrong: [
        { ru: 'Я пью много воды.', ua: 'Я п’ю багато води.' },
        { ru: 'Пейте много чая.', ua: 'Пийте багато чаю.' },
        { ru: 'Примите таблетку.', ua: 'Прийміть таблетку.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'farmacie', tr: { ru: 'аптека', ua: 'аптека' } },
        { ro: 'pastilă', tr: { ru: 'таблетка', ua: 'таблетка' } },
        { ro: 'rețetă', tr: { ru: 'рецепт', ua: 'рецепт' } },
        { ro: 'luați', tr: { ru: 'принимайте', ua: 'приймайте' } },
        { ro: 'după masă', tr: { ru: 'после еды', ua: 'після їжі' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Luați o pastilă după masă',
      tr: { ru: 'Примите таблетку после еды', ua: 'Прийміть таблетку після їжі' },
      wrong: ['Luați două pastile după masă', 'Luați o pastilă înainte de masă', 'Beți apă după masă'],
    },
    {
      kind: 'tiles',
      q: { ru: 'У вас есть что-нибудь от кашля?', ua: 'У вас є щось від кашлю?' },
      words: ['Aveți', 'ceva', 'pentru', 'tuse'],
      extra: ['am', 'febră', 'de'],
      shown: 'Aveți ceva pentru tuse?',
    },
    {
      kind: 'pickRo',
      q: { ru: 'У вас есть рецепт?', ua: 'У вас є рецепт?' },
      correct: 'Aveți rețetă?',
      wrong: ['Am rețetă.', 'Aveți pastile?', 'Unde e farmacia?'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Принимайте два раза в день.', ua: 'Приймайте двічі на день.' },
      words: ['Luați', 'de', 'două', 'ori', 'pe', 'zi'],
      extra: ['trei', 'beți', 'dată'],
      shown: 'Luați de două ori pe zi.',
    },
    {
      kind: 'type',
      q: { ru: 'У вас есть что-нибудь от головной боли?', ua: 'У вас є щось від головного болю?' },
      answers: ['Aveți ceva pentru durere de cap', 'Aveți ceva pentru durerea de cap'],
      shown: 'Aveți ceva pentru durere de cap?',
    },
    {
      kind: 'type',
      q: { ru: 'Пейте много воды.', ua: 'Пийте багато води.' },
      answers: ['Beți multă apă', 'Beți apă multă'],
      shown: 'Beți multă apă.',
    },
  ],
};
