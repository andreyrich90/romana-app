import type { Lesson } from '../types';

/** Unit 5 · Lesson 4 — months, seasons (iarna = «зимой»), weather: e cald / e frig, plouă, ninge. */
export const u5l4: Lesson = {
  id: 'u5l4',
  title: { ru: 'Месяцы и погода', ua: 'Місяці й погода' },
  words: [
    { ro: 'ianuarie, februarie, martie…', tr: { ru: 'январь, февраль, март…', ua: 'січень, лютий, березень…' } },
    { ro: 'Cum e vremea?', tr: { ru: 'Какая погода?', ua: 'Яка погода?' } },
    { ro: 'E cald. E frig.', tr: { ru: 'Тепло. Холодно.', ua: 'Тепло. Холодно.' } },
    { ro: 'Plouă. Ninge.', tr: { ru: 'Идёт дождь. Идёт снег.', ua: 'Іде дощ. Іде сніг.' } },
    { ro: 'iarna, vara', tr: { ru: 'зимой, летом', ua: 'взимку, влітку' } },
    { ro: 'în mai', tr: { ru: 'в мае', ua: 'у травні' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'ianuarie, februarie, martie',
      tr: { ru: 'январь, февраль, март', ua: 'січень, лютий, березень' },
      note: {
        ru: 'Месяцы похожи на русские и тоже пишутся с маленькой буквы. «В мае» — în mai.',
        ua: 'Назви місяців латинські, як у більшості європейських мов: martie, mai, iulie. Пишуться з малої літери. «У травні» — în mai.',
      },
    },
    {
      kind: 'intro',
      ro: 'Cum e vremea?',
      tr: { ru: 'Какая погода?', ua: 'Яка погода?' },
      note: {
        ru: 'cum — «как», vreme → vremea — «погода» ≈ «врэмя».',
        ua: 'cum — «як», vreme → vremea — «погода» ≈ «врем’я».',
      },
    },
    {
      kind: 'intro',
      ro: 'E cald. E frig.',
      tr: { ru: 'Тепло. Холодно.', ua: 'Тепло. Холодно.' },
      note: {
        ru: 'cald — и «тепло», и «жарко». frig — «холод»: отсюда frigider — холодильник.',
        ua: 'cald — і «тепло», і «спекотно». frig — «холод»: звідси frigider — холодильник.',
      },
    },
    {
      kind: 'intro',
      ro: 'Plouă. Ninge.',
      tr: { ru: 'Идёт дождь. Идёт снег.', ua: 'Іде дощ. Іде сніг.' },
      note: {
        ru: 'Одно слово, без «идёт»: plouă ≈ «плоуэ» — «дождит», ninge ≈ «ниндже» — «снежит».',
        ua: 'Одне слово, без «іде»: plouă ≈ «плоуе» — «дощить», ninge ≈ «ніндже» — «сніжить».',
      },
    },
    {
      kind: 'tip',
      title: 'Iarna e frig',
      body: {
        ru: [
          'Время года с артиклем значит «когда»: **iarna** — зимой, **vara** — летом, **primăvara** — весной, **toamna** — осенью.',
          'С месяцами — **în**: în mai, în iulie, în decembrie.',
        ],
        ua: [
          'Пора року з артиклем означає «коли»: **iarna** — взимку, **vara** — влітку, **primăvara** — навесні, **toamna** — восени.',
          'З місяцями — **în**: în mai, în iulie, în decembrie.',
        ],
      },
      rows: [
        { ro: 'Iarna e frig.', tr: { ru: 'Зимой холодно. · «ярна е фриг»', ua: 'Взимку холодно. · «ярна є фриг»' } },
        { ro: 'Vara e cald.', tr: { ru: 'Летом жарко. · «вара е калд»', ua: 'Влітку спекотно. · «вара є калд»' } },
        { ro: 'Azi plouă.', tr: { ru: 'Сегодня идёт дождь. · «азь плоуэ»', ua: 'Сьогодні йде дощ. · «азь плоуе»' } },
        { ro: 'În decembrie ninge.', tr: { ru: 'В декабре идёт снег. · «ын дечембрие ниндже»', ua: 'У грудні йде сніг. · «ин дечембріє ніндже»' } },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'martie', tr: { ru: 'март', ua: 'березень' } },
        { ro: 'mai', tr: { ru: 'май', ua: 'травень' } },
        { ro: 'iulie', tr: { ru: 'июль', ua: 'липень' } },
        { ro: 'octombrie', tr: { ru: 'октябрь', ua: 'жовтень' } },
        { ro: 'decembrie', tr: { ru: 'декабрь', ua: 'грудень' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Сегодня холодно.', ua: 'Сьогодні холодно.' },
      correct: 'Azi e frig.',
      wrong: ['Azi e cald.', 'Azi sunt frig.', 'Azi plouă.'],
    },
    {
      kind: 'listen',
      ro: 'Vara e cald',
      tr: { ru: 'Летом жарко', ua: 'Влітку спекотно' },
      wrong: ['Iarna e cald', 'Vara e frig', 'Vara plouă'],
    },
    {
      kind: 'pickNative',
      q: 'Plouă.',
      correct: { ru: 'Идёт дождь.', ua: 'Іде дощ.' },
      wrong: [
        { ru: 'Идёт снег.', ua: 'Іде сніг.' },
        { ru: 'Холодно.', ua: 'Холодно.' },
        { ru: 'Жарко.', ua: 'Спекотно.' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Зимой идёт снег.', ua: 'Взимку йде сніг.' },
      words: ['Iarna', 'ninge'],
      extra: ['vara', 'plouă', 'e'],
      shown: 'Iarna ninge.',
    },
    {
      kind: 'type',
      q: { ru: 'Какая погода?', ua: 'Яка погода?' },
      answers: ['Cum e vremea', 'Cum este vremea'],
      shown: 'Cum e vremea?',
    },
    {
      kind: 'type',
      q: { ru: 'В июле жарко.', ua: 'У липні спекотно.' },
      answers: ['În iulie e cald', 'În iulie este cald'],
      shown: 'În iulie e cald.',
    },
  ],
};
