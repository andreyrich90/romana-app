import type { Lesson } from '../types';

/** Unit 6 · Lesson 3 — adjectives: after the noun, agreeing in gender (mic / mică), mare, nou / nouă, colours. */
export const u6l3: Lesson = {
  id: 'u6l3',
  title: { ru: 'Какой? Какая?', ua: 'Який? Яка?' },
  words: [
    { ro: 'o casă mare', tr: { ru: 'большой дом', ua: 'великий будинок' } },
    { ro: 'mic, mică', tr: { ru: 'маленький, маленькая', ua: 'маленький, маленька' } },
    { ro: 'nou, nouă', tr: { ru: 'новый, новая', ua: 'новий, нова' } },
    { ro: 'vechi, veche', tr: { ru: 'старый, старая', ua: 'старий, стара' } },
    { ro: 'alb, albă', tr: { ru: 'белый, белая', ua: 'білий, біла' } },
    { ro: 'negru, neagră', tr: { ru: 'чёрный, чёрная', ua: 'чорний, чорна' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'o casă mare',
      tr: { ru: 'большой дом', ua: 'великий будинок' },
      note: {
        ru: 'Прилагательное стоит после слова: «дом большой». mare одинаково и для мужского, и для женского рода.',
        ua: 'Прикметник стоїть після слова: «будинок великий». mare однаковий і для чоловічого, і для жіночого роду.',
      },
    },
    {
      kind: 'intro',
      ro: 'un apartament mic, o cameră mică',
      tr: { ru: 'маленькая квартира, маленькая комната', ua: 'маленька квартира, маленька кімната' },
      note: {
        ru: 'Женский род — окончание -ă: mic → mică. Квартира по-румынски «он», поэтому mic.',
        ua: 'Жіночий рід — закінчення -ă: mic → mică. Квартира румунською «він», тому mic.',
      },
    },
    {
      kind: 'intro',
      ro: 'nou, vechi',
      tr: { ru: 'новый, старый', ua: 'новий, старий' },
      note: {
        ru: 'vechi ≈ «векь». Женский род: nouă, veche. Да, nouă — и «новая», и «девять»!',
        ua: 'vechi ≈ «векь». Жіночий рід: nouă, veche. Так, nouă — і «нова», і «девʼять»!',
      },
    },
    {
      kind: 'intro',
      ro: 'alb, negru',
      tr: { ru: 'белый, чёрный', ua: 'білий, чорний' },
      note: {
        ru: 'Женский род: albă, neagră ≈ «нягрэ».',
        ua: 'Жіночий рід: albă, neagră ≈ «нягре».',
      },
    },
    {
      kind: 'tip',
      title: 'Un pat nou, o casă nouă',
      body: {
        ru: [
          'Прилагательное идёт **после** существительного и согласуется с ним: мужской и средний род — без окончания, женский — **-ă**: alb → alb**ă**, mic → mic**ă**.',
          'Некоторые меняются сильнее: nou → nou**ă**, negru → ne**a**gr**ă**, vechi → vech**e**. А **mare** не меняется совсем.',
        ],
        ua: [
          'Прикметник іде **після** іменника й узгоджується з ним: чоловічий і середній рід — без закінчення, жіночий — **-ă**: alb → alb**ă**, mic → mic**ă**.',
          'Деякі змінюються сильніше: nou → nou**ă**, negru → ne**a**gr**ă**, vechi → vech**e**. А **mare** не змінюється зовсім.',
        ],
      },
      rows: [
        { ro: 'un pat nou', tr: { ru: 'новая кровать · «ун пат ноу»', ua: 'нове ліжко · «ун пат ноу»' } },
        { ro: 'o casă nouă', tr: { ru: 'новый дом · «о касэ ноуэ»', ua: 'новий будинок · «о касе ноуе»' } },
        { ro: 'un scaun alb', tr: { ru: 'белый стул · «ун скаун алб»', ua: 'білий стілець · «ун скаун алб»' } },
        { ro: 'o masă albă', tr: { ru: 'белый стол · «о масэ албэ»', ua: 'білий стіл · «о масе албе»' } },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'mare', tr: { ru: 'большой', ua: 'великий' } },
        { ro: 'mic', tr: { ru: 'маленький', ua: 'маленький' } },
        { ro: 'nou', tr: { ru: 'новый', ua: 'новий' } },
        { ro: 'vechi', tr: { ru: 'старый', ua: 'старий' } },
        { ro: 'alb', tr: { ru: 'белый', ua: 'білий' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'маленькая комната', ua: 'маленька кімната' },
      correct: 'o cameră mică',
      wrong: ['o cameră mic', 'un cameră mică', 'o camere mică'],
    },
    {
      kind: 'listen',
      ro: 'Casa este veche',
      tr: { ru: 'Дом старый', ua: 'Будинок старий' },
      wrong: ['Casa este nouă', 'Casa este mare', 'Masa este veche'],
    },
    {
      kind: 'pickNative',
      q: 'Am o masă neagră.',
      correct: { ru: 'У меня чёрный стол.', ua: 'У мене чорний стіл.' },
      wrong: [
        { ru: 'У меня белый стол.', ua: 'У мене білий стіл.' },
        { ru: 'У меня чёрный стул.', ua: 'У мене чорний стілець.' },
        { ru: 'У меня новый стол.', ua: 'У мене новий стіл.' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'У нас большая квартира.', ua: 'У нас велика квартира.' },
      words: ['Avem', 'un', 'apartament', 'mare'],
      extra: ['mic', 'o', 'este'],
      shown: 'Avem un apartament mare.',
    },
    {
      kind: 'tiles',
      q: { ru: 'Дом новый.', ua: 'Будинок новий.' },
      words: ['Casa', 'este', 'nouă'],
      extra: ['nou', 'mare', 'sunt'],
      shown: 'Casa este nouă.',
    },
    {
      kind: 'type',
      q: { ru: 'маленький дом', ua: 'маленький будинок' },
      answers: ['o casă mică', 'casa mică'],
      shown: 'o casă mică',
    },
    {
      kind: 'type',
      q: { ru: 'Кровать новая.', ua: 'Ліжко нове.' },
      answers: ['Patul este nou', 'Patul e nou'],
      shown: 'Patul este nou.',
    },
  ],
};
