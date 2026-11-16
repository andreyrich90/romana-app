import type { Lesson } from '../types';

/** Unit 2 · Lesson 6 — husband and wife, uncles, aunts, cousins; nepot is both nephew and grandson. */
export const u2l6: Lesson = {
  id: 'u2l6',
  title: { ru: 'Муж, жена, родня', ua: 'Чоловік, дружина, рідня' },
  words: [
    { ro: 'soțul · soția', tr: { ru: 'муж · жена', ua: 'чоловік · дружина' } },
    { ro: 'unchiul · mătușa', tr: { ru: 'дядя · тётя', ua: 'дядько · тітка' } },
    { ro: 'vărul · vara', tr: { ru: 'двоюродный брат · сестра', ua: 'двоюрідний брат · сестра' } },
    { ro: 'nepotul · nepoata', tr: { ru: 'племянник, внук · племянница, внучка', ua: 'племінник, онук · племінниця, онука' } },
    { ro: 'rudele', tr: { ru: 'родственники', ua: 'родичі' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'soțul meu',
      tr: { ru: 'мой муж', ua: 'мій чоловік' },
      note: {
        ru: 'soț ≈ «соц». В разговоре говорят и bărbatul meu — «мой мужчина».',
        ua: 'soț ≈ «соц». У розмові кажуть і bărbatul meu — «мій чоловік».',
      },
    },
    {
      kind: 'intro',
      ro: 'soția mea',
      tr: { ru: 'моя жена', ua: 'моя дружина' },
      note: {
        ru: 'soție ≈ «социе». Разговорное — nevasta mea: это тоже «жена», а не «невеста».',
        ua: 'soție ≈ «соціе». Розмовне — nevasta mea: це теж «дружина», а не «наречена».',
      },
    },
    {
      kind: 'intro',
      ro: 'unchiul și mătușa',
      tr: { ru: 'дядя и тётя', ua: 'дядько й тітка' },
      note: {
        ru: 'unchi ≈ «ункь» (chi — «ки»), mătușă ≈ «мэтушэ».',
        ua: 'unchi ≈ «ункь» (chi — «кі»), mătușă ≈ «метуше».',
      },
    },
    {
      kind: 'intro',
      ro: 'vărul meu, vara mea',
      tr: { ru: 'мой двоюродный брат, моя двоюродная сестра', ua: 'мій двоюрідний брат, моя двоюрідна сестра' },
      note: {
        ru: 'văr — двоюродный брат, vară — двоюродная сестра. Ласково говорят verișor, verișoară.',
        ua: 'văr — двоюрідний брат, vară — двоюрідна сестра. Лагідно кажуть verișor, verișoară.',
      },
    },
    {
      kind: 'tip',
      title: 'Nepot',
      body: {
        ru: [
          '**nepot** — это и **племянник**, и **внук**; **nepoată** — и племянница, и внучка. Кто именно, понятно из разговора.',
          'Все родственники вместе — **rudele**. Бабушка и дедушка — **bunicii**.',
        ],
        ua: [
          '**nepot** — це і **племінник**, і **онук**; **nepoată** — і племінниця, і онука. Хто саме, зрозуміло з розмови.',
          'Усі родичі разом — **rudele**. Бабуся й дідусь — **bunicii**.',
        ],
      },
      rows: [
        { ro: 'nepotul', tr: { ru: 'племянник; внук', ua: 'племінник; онук' } },
        { ro: 'nepoata', tr: { ru: 'племянница; внучка', ua: 'племінниця; онука' } },
        { ro: 'rudele', tr: { ru: 'родственники', ua: 'родичі' } },
        { ro: 'bunicii', tr: { ru: 'бабушка и дедушка', ua: 'бабуся й дідусь' } },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'soțul', tr: { ru: 'муж', ua: 'чоловік' } },
        { ro: 'soția', tr: { ru: 'жена', ua: 'дружина' } },
        { ro: 'unchiul', tr: { ru: 'дядя', ua: 'дядько' } },
        { ro: 'mătușa', tr: { ru: 'тётя', ua: 'тітка' } },
        { ro: 'rudele', tr: { ru: 'родственники', ua: 'родичі' } },
      ],
    },
    {
      kind: 'pickNative',
      q: 'nepoata',
      correct: { ru: 'племянница или внучка', ua: 'племінниця або онука' },
      wrong: [
        { ru: 'невестка', ua: 'невістка' },
        { ru: 'тётя', ua: 'тітка' },
        { ru: 'двоюродная сестра', ua: 'двоюрідна сестра' },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мой муж — врач.', ua: 'Мій чоловік — лікар.' },
      correct: 'Soțul meu este medic.',
      wrong: ['Soția mea este medic.', 'Soțul mea este medic.', 'Soț meu este medic.'],
    },
    {
      kind: 'listen',
      ro: 'Mătușa mea este profesoară.',
      tr: { ru: 'Моя тётя — учительница.', ua: 'Моя тітка — вчителька.' },
      wrong: ['Mama mea este profesoară.', 'Mătușa mea este studentă.', 'Soția mea este profesoară.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Она — моя жена.', ua: 'Вона — моя дружина.' },
      words: ['Ea', 'este', 'soția', 'mea'],
      extra: ['meu', 'soțul'],
      shown: 'Ea este soția mea.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'родственники', ua: 'родичі' },
      correct: 'rudele',
      wrong: ['părinții', 'copiii', 'prietenii'],
    },
    {
      kind: 'type',
      q: { ru: 'мой муж', ua: 'мій чоловік' },
      answers: ['soțul meu'],
      shown: 'soțul meu',
    },
    {
      kind: 'type',
      q: { ru: 'моя тётя', ua: 'моя тітка' },
      answers: ['mătușa mea'],
      shown: 'mătușa mea',
    },
  ],
};
