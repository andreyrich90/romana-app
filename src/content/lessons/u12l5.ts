import type { Lesson } from '../types';

/** A2 · Unit 6 · Lesson 5 — the A2 finale: past, future, să, the doctor, shops, travel. No new words. */
export const u12l5: Lesson = {
  id: 'u12l5',
  title: { ru: 'Итог A2', ua: 'Підсумок A2' },
  words: [
    { ro: 'Ieri am fost la gară.', tr: { ru: 'Вчера я был(а) на вокзале.', ua: 'Учора я був(ла) на вокзалі.' } },
    { ro: 'Mâine o să merg la aeroport.', tr: { ru: 'Завтра я поеду в аэропорт.', ua: 'Завтра я поїду в аеропорт.' } },
    { ro: 'Trebuie să merg la farmacie.', tr: { ru: 'Мне надо в аптеку.', ua: 'Мені треба в аптеку.' } },
    { ro: 'Nu l-am văzut.', tr: { ru: 'Я его не видел(а).', ua: 'Я його не бачив(ла).' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Nivelul A2',
      body: {
        ru: [
          'За уровень A2 вы научились говорить о прошлом (**am fost**), о будущем (**o să merg**), о желаниях и обязанностях (**vreau să, trebuie să**), о здоровье, покупках и поездках.',
          'Падежи — **lui Andrei, mamei** — и местоимения **îl, o, te** теперь тоже ваши.',
        ],
        ua: [
          'За рівень A2 ви навчилися говорити про минуле (**am fost**), про майбутнє (**o să merg**), про бажання й обов’язки (**vreau să, trebuie să**), про здоров’я, покупки й поїздки.',
          'Відмінки — **lui Andrei, mamei** — і займенники **îl, o, te** тепер теж ваші.',
        ],
      },
      rows: [
        { ro: 'Am fost la mare.', tr: { ru: 'Я был на море. · прошлое', ua: 'Я був на морі. · минуле' } },
        { ro: 'O să merg mâine.', tr: { ru: 'Я поеду завтра. · будущее', ua: 'Я поїду завтра. · майбутнє' } },
        { ro: 'Vreau să învăț.', tr: { ru: 'Я хочу учиться. · să + глагол', ua: 'Я хочу вчитися. · să + дієслово' } },
        { ro: 'Îi dau mamei.', tr: { ru: 'Я даю маме. · кому', ua: 'Я даю мамі. · кому' } },
        { ro: 'L-am văzut.', tr: { ru: 'Я его видел. · кого', ua: 'Я його бачив. · кого' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Вчера я был на вокзале.', ua: 'Учора я був на вокзалі.' },
      correct: 'Ieri am fost la gară.',
      wrong: ['Mâine o să fiu la gară.', 'Ieri am mers la aeroport.', 'Azi sunt la gară.'],
    },
    {
      kind: 'pickNative',
      q: 'O să plecăm mâine dimineață.',
      correct: { ru: 'Мы уедем завтра утром.', ua: 'Ми виїдемо завтра вранці.' },
      wrong: [
        { ru: 'Мы уехали вчера утром.', ua: 'Ми виїхали вчора вранці.' },
        { ru: 'Мы хотим уехать завтра утром.', ua: 'Ми хочемо виїхати завтра вранці.' },
        { ru: 'Они уедут завтра утром.', ua: 'Вони виїдуть завтра вранці.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'am fost', tr: { ru: 'я был', ua: 'я був' } },
        { ro: 'o să merg', tr: { ru: 'я поеду', ua: 'я поїду' } },
        { ro: 'trebuie să', tr: { ru: 'надо', ua: 'треба' } },
        { ro: 'mă doare', tr: { ru: 'у меня болит', ua: 'у мене болить' } },
        { ro: 'l-am văzut', tr: { ru: 'я его видел', ua: 'я його бачив' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Unde e cheia camerei',
      tr: { ru: 'Где ключ от номера', ua: 'Де ключ від номера' },
      wrong: ['Unde e camera', 'Unde e cheia mea', 'Unde e micul dejun'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мы поедем поездом в горы.', ua: 'Ми поїдемо потягом у гори.' },
      words: ['O', 'să', 'mergem', 'cu', 'trenul', 'la', 'munte'],
      extra: ['am', 'mers', 'mare'],
      shown: 'O să mergem cu trenul la munte.',
      also: ['O să mergem la munte cu trenul'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'У меня болит голова, мне надо в аптеку.', ua: 'У мене болить голова, мені треба в аптеку.' },
      correct: 'Mă doare capul, trebuie să merg la farmacie.',
      wrong: [
        'Mă dor capul, trebuie să merg la farmacie.',
        'Mă doare capul, vreau să merg la farmacie.',
        'Mă doare capul, am fost la farmacie.',
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я ждал её на вокзале.', ua: 'Я чекав на неї на вокзалі.' },
      words: ['Am', 'așteptat-o', 'la', 'gară'],
      extra: ['l-am', 'aștept', 'hotel'],
      shown: 'Am așteptat-o la gară.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Чья это куртка?', ua: 'Чия це куртка?' },
      correct: 'A cui e geaca?',
      wrong: ['Al cui e geaca?', 'Unde e geaca?', 'E geaca mea.'],
    },
    {
      kind: 'type',
      q: { ru: 'Завтра я поеду в аэропорт.', ua: 'Завтра я поїду в аеропорт.' },
      answers: [
        'Mâine o să merg la aeroport',
        'O să merg la aeroport mâine',
        'Mâine voi merge la aeroport',
        'Mâine merg la aeroport',
      ],
      shown: 'Mâine o să merg la aeroport.',
    },
    {
      kind: 'type',
      q: { ru: 'Можете повторить, пожалуйста?', ua: 'Можете повторити, будь ласка?' },
      answers: ['Puteți să repetați, vă rog', 'Puteți repeta, vă rog'],
      shown: 'Puteți să repetați, vă rog?',
    },
    {
      kind: 'type',
      q: { ru: 'Я его не видел(а).', ua: 'Я його не бачив(ла).' },
      answers: ['Nu l-am văzut', 'Eu nu l-am văzut'],
      shown: 'Nu l-am văzut.',
    },
  ],
};
