import type { Lesson } from '../types';

/** Unit 1 · Lesson 3 — where are you from: «din», countries, nationalities, «vorbesc puțin». */
export const u1l3: Lesson = {
  id: 'u1l3',
  title: { ru: 'Откуда вы', ua: 'Звідки ви' },
  words: [
    { ro: 'De unde ești?', tr: { ru: 'Откуда ты?', ua: 'Звідки ти?' } },
    { ro: 'De unde sunteți?', tr: { ru: 'Откуда вы?', ua: 'Звідки ви?' } },
    { ro: 'Sunt din Ucraina.', tr: { ru: 'Я из Украины.', ua: 'Я з України.' } },
    { ro: 'român / româncă', tr: { ru: 'румын / румынка', ua: 'румун / румунка' } },
    { ro: 'ucrainean / ucraineancă', tr: { ru: 'украинец / украинка', ua: 'українець / українка' } },
    { ro: 'Vorbesc puțin română.', tr: { ru: 'Я немного говорю по-румынски.', ua: 'Я трохи розмовляю румунською.' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'De unde ești?',
      tr: { ru: 'Откуда ты?', ua: 'Звідки ти?' },
      note: {
        ru: 'Дословно «из где ты есть?». Вежливо, на «вы»: De unde sunteți?',
        ua: 'Дослівно «з де ти є?». Ввічливо, на «ви»: De unde sunteți?',
      },
    },
    {
      kind: 'intro',
      ro: 'Sunt din Ucraina.',
      tr: { ru: 'Я из Украины.', ua: 'Я з України.' },
      note: {
        ru: 'din — «из». Название страны после din не меняется: din Moldova, din România, din Italia.',
        ua: 'din — «з». Назва країни після din не змінюється: din Moldova, din România, din Italia.',
      },
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я из Молдовы.', ua: 'Я з Молдови.' },
      correct: 'Sunt din Moldova.',
      wrong: ['Ești din Moldova.', 'Este din Moldova.', 'Sunt în Moldova.'],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'România', tr: { ru: 'Румыния', ua: 'Румунія' } },
        { ro: 'Ucraina', tr: { ru: 'Украина', ua: 'Україна' } },
        { ro: 'Moldova', tr: { ru: 'Молдова', ua: 'Молдова' } },
        { ro: 'Italia', tr: { ru: 'Италия', ua: 'Італія' } },
        { ro: 'Germania', tr: { ru: 'Германия', ua: 'Німеччина' } },
      ],
    },
    {
      kind: 'tip',
      title: 'Român, româncă',
      body: {
        ru: [
          'Национальность, как и профессия, бывает мужского и женского рода. Женская форма чаще всего кончается на **-că**.',
          'Пишутся с маленькой буквы, как и в русском: Ea este **româncă**.',
        ],
        ua: [
          'Національність, як і професія, буває чоловічого й жіночого роду. Жіноча форма найчастіше закінчується на **-că**.',
          'Пишуться з малої літери, як і в українській: Ea este **româncă**.',
        ],
      },
      rows: [
        { ro: 'român — româncă', tr: { ru: 'румын — румынка', ua: 'румун — румунка' } },
        { ro: 'ucrainean — ucraineancă', tr: { ru: 'украинец — украинка', ua: 'українець — українка' } },
        { ro: 'moldovean — moldoveancă', tr: { ru: 'молдаванин — молдаванка', ua: 'молдованин — молдованка' } },
        { ro: 'italian — italiancă', tr: { ru: 'итальянец — итальянка', ua: 'італієць — італійка' } },
      ],
    },
    {
      kind: 'pickNative',
      q: 'Ea este româncă.',
      correct: { ru: 'Она румынка.', ua: 'Вона румунка.' },
      wrong: [
        { ru: 'Он румын.', ua: 'Він румун.' },
        { ru: 'Она украинка.', ua: 'Вона українка.' },
        { ru: 'Она из Румынии?', ua: 'Вона з Румунії?' },
      ],
    },
    {
      kind: 'listen',
      ro: 'Sunt din România',
      tr: { ru: 'Я из Румынии', ua: 'Я з Румунії' },
      wrong: ['Sunt din Moldova', 'Ești din România', 'Sunt în România'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Откуда ты? — Я из Украины.', ua: 'Звідки ти? — Я з України.' },
      words: ['De', 'unde', 'ești', 'Sunt', 'din', 'Ucraina'],
      extra: ['este', 'în', 'Moldova'],
      shown: 'De unde ești? Sunt din Ucraina.',
    },
    {
      kind: 'intro',
      ro: 'Vorbesc puțin română.',
      tr: { ru: 'Я немного говорю по-румынски.', ua: 'Я трохи розмовляю румунською.' },
      note: {
        ru: 'Самая полезная фраза первых недель: румыны сразу начнут говорить медленнее. puțin — «немного».',
        ua: 'Найкорисніша фраза перших тижнів: румуни одразу почнуть говорити повільніше. puțin — «трохи».',
      },
    },
    {
      kind: 'pickRo',
      q: { ru: 'Откуда вы? (вежливо)', ua: 'Звідки ви? (ввічливо)' },
      correct: 'De unde sunteți?',
      wrong: ['De unde ești?', 'De unde este?', 'Unde sunteți?'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Он румын.', ua: 'Він румун.' },
      words: ['El', 'este', 'român'],
      extra: ['româncă', 'sunt', 'ești'],
      shown: 'El este român.',
      also: ['Este român'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я немного говорю по-румынски.', ua: 'Я трохи розмовляю румунською.' },
      words: ['Vorbesc', 'puțin', 'română'],
      extra: ['sunt', 'din', 'mulțumesc'],
      shown: 'Vorbesc puțin română.',
    },
  ],
};
