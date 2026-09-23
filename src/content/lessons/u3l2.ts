import type { Lesson } from '../types';

/** Unit 3 · Lesson 2 — food, the verb «a mânca», and the basic plural. */
export const u3l2: Lesson = {
  id: 'u3l2',
  title: { ru: 'Еда', ua: 'Їжа' },
  words: [
    { ro: 'pâine', tr: { ru: 'хлеб', ua: 'хліб' } },
    { ro: 'brânză', tr: { ru: 'сыр', ua: 'сир' } },
    { ro: 'carne, pește', tr: { ru: 'мясо, рыба', ua: 'мʼясо, риба' } },
    { ro: 'salată, ciorbă', tr: { ru: 'салат, чорба', ua: 'салат, чорба' } },
    { ro: 'Ce mănânci?', tr: { ru: 'Что ты ешь?', ua: 'Що ти їси?' } },
    { ro: 'două salate', tr: { ru: 'два салата', ua: 'два салати' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'pâine',
      tr: { ru: 'хлеб', ua: 'хліб' },
      note: {
        ru: 'â и î — один и тот же звук, похожий на «ы»: pâine ≈ «пыйне».',
        ua: 'â та î — той самий звук, схожий на «и»: pâine ≈ «пийне».',
      },
    },
    {
      kind: 'intro',
      ro: 'brânză',
      tr: { ru: 'сыр', ua: 'сир' },
      note: {
        ru: 'brânză — любой сыр, не только брынза. pâine cu brânză — хлеб с сыром.',
        ua: 'brânză — будь-який сир, не лише бринза. pâine cu brânză — хліб із сиром.',
      },
    },
    {
      kind: 'intro',
      ro: 'carne, pește',
      tr: { ru: 'мясо, рыба', ua: 'мʼясо, риба' },
      note: {
        ru: 'pește ≈ «пеште». carne — женского рода: carnea — мясо (это).',
        ua: 'pește ≈ «пеште». carne — жіночого роду: carnea — мʼясо (це).',
      },
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'pâine', tr: { ru: 'хлеб', ua: 'хліб' } },
        { ro: 'brânză', tr: { ru: 'сыр', ua: 'сир' } },
        { ro: 'carne', tr: { ru: 'мясо', ua: 'мʼясо' } },
        { ro: 'pește', tr: { ru: 'рыба', ua: 'риба' } },
        { ro: 'salată', tr: { ru: 'салат', ua: 'салат' } },
      ],
    },
    {
      kind: 'intro',
      ro: 'o ciorbă',
      tr: { ru: 'чорба', ua: 'чорба' },
      note: {
        ru: 'Ciorbă — румынский кислый суп, главное блюдо любого обеда. Обычный суп — supă. Ciorbă de pui — чорба из курицы.',
        ua: 'Ciorbă — румунський кислий суп, головна страва будь-якого обіду. Звичайний суп — supă. Ciorbă de pui — чорба з курки.',
      },
    },
    {
      kind: 'intro',
      ro: 'Ce mănânci?',
      tr: { ru: 'Что ты ешь?', ua: 'Що ти їси?' },
      note: {
        ru: 'a mânca — «есть». Корень меняется: eu mănânc, tu mănânci, el mănâncă ≈ «мэнынк, мэнынчь, мэнынкэ».',
        ua: 'a mânca — «їсти». Корінь змінюється: eu mănânc, tu mănânci, el mănâncă ≈ «менинк, менинчь, менинке».',
      },
    },
    {
      kind: 'tip',
      title: 'O salată — două salate',
      body: {
        ru: [
          'Женский род: **-ă → -e**: salată → salate, ciorbă → ciorbe.',
          'Мужской род: добавляется **-i**: cartof → cartofi (картофель).',
          'Средний род — **-uri** или **-e**: ceai → ceaiuri, măr → mere (яблоко). Такие формы проще запоминать вместе со словом.',
        ],
        ua: [
          'Жіночий рід: **-ă → -e**: salată → salate, ciorbă → ciorbe.',
          'Чоловічий рід: додається **-i**: cartof → cartofi (картопля).',
          'Середній рід — **-uri** або **-e**: ceai → ceaiuri, măr → mere (яблуко). Такі форми простіше запамʼятовувати разом зі словом.',
        ],
      },
      rows: [
        { ro: 'o salată — două salate', tr: { ru: 'салат — два салата', ua: 'салат — два салати' } },
        { ro: 'o ciorbă — două ciorbe', tr: { ru: 'чорба — две чорбы', ua: 'чорба — дві чорби' } },
        { ro: 'un cartof — doi cartofi', tr: { ru: 'картофелина — две', ua: 'картоплина — дві' } },
        { ro: 'un măr — două mere', tr: { ru: 'яблоко — два яблока', ua: 'яблуко — два яблука' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'два салата', ua: 'два салати' },
      correct: 'două salate',
      wrong: ['doi salate', 'două salată', 'doi salată'],
    },
    {
      kind: 'listen',
      ro: 'Mănânc pâine cu brânză',
      tr: { ru: 'Я ем хлеб с сыром', ua: 'Я їм хліб із сиром' },
      wrong: ['Mănânci pâine cu brânză', 'Mănânc pâine fără brânză', 'Mănânc pește cu brânză'],
    },
    {
      kind: 'pickNative',
      q: 'Ea mănâncă pește.',
      correct: { ru: 'Она ест рыбу.', ua: 'Вона їсть рибу.' },
      wrong: [
        { ru: 'Она ест мясо.', ua: 'Вона їсть мʼясо.' },
        { ru: 'Я ем рыбу.', ua: 'Я їм рибу.' },
        { ru: 'Она не ест рыбу.', ua: 'Вона не їсть рибу.' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я ем хлеб с сыром.', ua: 'Я їм хліб із сиром.' },
      words: ['Eu', 'mănânc', 'pâine', 'cu', 'brânză'],
      extra: ['mănânci', 'fără', 'carne'],
      shown: 'Eu mănânc pâine cu brânză.',
    },
    {
      kind: 'type',
      q: { ru: 'Что ты ешь?', ua: 'Що ти їси?' },
      answers: ['Ce mănânci', 'Tu ce mănânci', 'Ce mănânci tu'],
      shown: 'Ce mănânci?',
    },
    {
      kind: 'type',
      q: { ru: 'Я не ем мясо.', ua: 'Я не їм мʼяса.' },
      answers: ['Nu mănânc carne', 'Eu nu mănânc carne'],
      shown: 'Nu mănânc carne.',
    },
  ],
};
