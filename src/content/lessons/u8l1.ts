import type { Lesson } from '../types';

/** A2 · Unit 2 · Lesson 1 — the spoken future: o să merg, o să plec; mâine, poimâine. */
export const u8l1: Lesson = {
  id: 'u8l1',
  title: { ru: 'Я поеду', ua: 'Я поїду' },
  words: [
    { ro: 'mâine', tr: { ru: 'завтра', ua: 'завтра' } },
    { ro: 'poimâine', tr: { ru: 'послезавтра', ua: 'післязавтра' } },
    { ro: 'o să merg', tr: { ru: 'я пойду, поеду', ua: 'я піду, поїду' } },
    { ro: 'o să plec', tr: { ru: 'я уеду, уйду', ua: 'я виїду, піду' } },
    { ro: 'o să meargă', tr: { ru: 'он / она поедет', ua: 'він / вона поїде' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Mâine o să merg la mare.',
      tr: { ru: 'Завтра я поеду на море.', ua: 'Завтра я поїду на море.' },
      note: {
        ru: 'Будущее время в разговоре: o să + глагол. mâine ≈ «мыйне», o să ≈ «о сэ».',
        ua: 'Майбутній час у розмові: o să + дієслово. mâine ≈ «мийне», o să ≈ «о се».',
      },
    },
    {
      kind: 'intro',
      ro: 'poimâine',
      tr: { ru: 'послезавтра', ua: 'післязавтра' },
      note: {
        ru: '≈ «поймыйне». Устроено как в русском: «после» + «завтра».',
        ua: '≈ «поймийне». Влаштовано як в українській: «після» + «завтра».',
      },
    },
    {
      kind: 'intro',
      ro: 'O să plecăm dimineața.',
      tr: { ru: 'Мы уедем утром.', ua: 'Ми виїдемо вранці.' },
      note: {
        ru: 'a pleca → plecăm (мы уезжаем) → o să plecăm (мы уедем). ≈ «о сэ плекэм».',
        ua: 'a pleca → plecăm (ми їдемо) → o să plecăm (ми виїдемо). ≈ «о се плекем».',
      },
    },
    {
      kind: 'tip',
      title: 'O să merg, o să plec…',
      body: {
        ru: [
          'Будущее в разговоре — **o să** + глагол в настоящем времени: merg → **o să merg** (я пойду). Слова **o să** не меняются никогда.',
          'Для «он, она, они» у глагола особая форма: **o să meargă**, **o să plece**, **o să fie**. Её просто запоминаем.',
          'Как и в русском, о планах можно говорить и настоящим временем: **Mâine merg la mare** — «Завтра еду на море».',
        ],
        ua: [
          'Майбутнє в розмові — **o să** + дієслово в теперішньому часі: merg → **o să merg** (я піду). Слова **o să** не змінюються ніколи.',
          'Для «він, вона, вони» у дієслова особлива форма: **o să meargă**, **o să plece**, **o să fie**. Її просто запам’ятовуємо.',
          'Як і в українській, про плани можна говорити й теперішнім часом: **Mâine merg la mare** — «Завтра їду на море».',
        ],
      },
      rows: [
        { ro: 'eu o să merg', tr: { ru: 'я пойду · «еу о сэ мерг»', ua: 'я піду · «єу о се мерг»' } },
        { ro: 'tu o să mergi', tr: { ru: 'ты пойдёшь · «ту о сэ мерджь»', ua: 'ти підеш · «ту о се мерджь»' } },
        { ro: 'el / ea o să meargă', tr: { ru: 'он / она пойдёт · «ел / я о сэ мяргэ»', ua: 'він / вона піде · «єл / я о се мярге»' } },
        { ro: 'noi o să mergem', tr: { ru: 'мы пойдём · «ной о сэ мерджем»', ua: 'ми підемо · «ной о се мерджем»' } },
        { ro: 'voi o să mergeți', tr: { ru: 'вы пойдёте · «вой о сэ мерджець»', ua: 'ви підете · «вой о се мерджець»' } },
        { ro: 'ei / ele o să meargă', tr: { ru: 'они пойдут · «ей / еле о сэ мяргэ»', ua: 'вони підуть · «єй / єле о се мярге»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Завтра я поеду в горы.', ua: 'Завтра я поїду в гори.' },
      correct: 'Mâine o să merg la munte.',
      wrong: ['Ieri am mers la munte.', 'Mâine o să mergi la munte.', 'Mâine o să merg la mare.'],
    },
    {
      kind: 'pickNative',
      q: 'Poimâine o să plecăm.',
      correct: { ru: 'Послезавтра мы уедем.', ua: 'Післязавтра ми виїдемо.' },
      wrong: [
        { ru: 'Завтра мы уедем.', ua: 'Завтра ми виїдемо.' },
        { ru: 'Послезавтра они уедут.', ua: 'Післязавтра вони виїдуть.' },
        { ru: 'Вчера мы уехали.', ua: 'Учора ми виїхали.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'mâine', tr: { ru: 'завтра', ua: 'завтра' } },
        { ro: 'poimâine', tr: { ru: 'послезавтра', ua: 'післязавтра' } },
        { ro: 'o să merg', tr: { ru: 'я поеду', ua: 'я поїду' } },
        { ro: 'o să plec', tr: { ru: 'я уеду', ua: 'я виїду' } },
        { ro: 'ieri', tr: { ru: 'вчера', ua: 'учора' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'O să merg mâine',
      tr: { ru: 'Я пойду завтра', ua: 'Я піду завтра' },
      wrong: ['O să mergi mâine', 'Am mers ieri', 'O să meargă mâine'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Завтра мы поедем на море.', ua: 'Завтра ми поїдемо на море.' },
      words: ['Mâine', 'o', 'să', 'mergem', 'la', 'mare'],
      extra: ['merg', 'munte', 'am'],
      shown: 'Mâine o să mergem la mare.',
      also: ['O să mergem la mare mâine', 'O să mergem mâine la mare'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Она уедет завтра.', ua: 'Вона виїде завтра.' },
      correct: 'Ea o să plece mâine.',
      wrong: ['Eu o să plec mâine.', 'Ea a plecat ieri.', 'Ea o să plece poimâine.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Ты поедешь поездом?', ua: 'Ти поїдеш потягом?' },
      words: ['O', 'să', 'mergi', 'cu', 'trenul'],
      extra: ['merg', 'meargă', 'am'],
      shown: 'O să mergi cu trenul?',
    },
    {
      kind: 'type',
      q: { ru: 'Завтра я поеду на море.', ua: 'Завтра я поїду на море.' },
      answers: [
        'Mâine o să merg la mare',
        'O să merg la mare mâine',
        'O să merg mâine la mare',
        'Mâine eu o să merg la mare',
        'Eu o să merg la mare mâine',
        'Mâine merg la mare',
      ],
      shown: 'Mâine o să merg la mare.',
    },
    {
      kind: 'type',
      q: { ru: 'Мы уедем утром.', ua: 'Ми виїдемо вранці.' },
      answers: ['O să plecăm dimineața', 'Dimineața o să plecăm', 'Noi o să plecăm dimineața'],
      shown: 'O să plecăm dimineața.',
    },
  ],
};
