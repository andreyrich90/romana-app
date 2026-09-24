import type { Lesson } from '../types';

/** A2 · Unit 2 · Lesson 3 — tomorrow's weather: o să plouă, o să ningă, o să fie cald/frig/soare/frumos, cred că, poate. */
export const u8l3: Lesson = {
  id: 'u8l3',
  title: { ru: 'Погода на завтра', ua: 'Погода на завтра' },
  words: [
    { ro: 'o să plouă', tr: { ru: 'будет дождь', ua: 'буде дощ' } },
    { ro: 'o să ningă', tr: { ru: 'пойдёт снег', ua: 'піде сніг' } },
    { ro: 'o să fie soare', tr: { ru: 'будет солнечно', ua: 'буде сонячно' } },
    { ro: 'frumos', tr: { ru: 'красиво; хорошая погода', ua: 'гарно; гарна погода' } },
    { ro: 'cred că', tr: { ru: 'думаю, что', ua: 'думаю, що' } },
    { ro: 'poate', tr: { ru: 'может быть', ua: 'може' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Mâine o să plouă.',
      tr: { ru: 'Завтра будет дождь.', ua: 'Завтра буде дощ.' },
      note: {
        ru: 'plouă — «дождит» — в будущем не меняется: o să plouă ≈ «о сэ плоуэ».',
        ua: 'plouă — «дощить» — у майбутньому не змінюється: o să plouă ≈ «о се плоуе».',
      },
    },
    {
      kind: 'intro',
      ro: 'O să ningă.',
      tr: { ru: 'Пойдёт снег.', ua: 'Піде сніг.' },
      note: {
        ru: 'ninge → o să ningă: особая форма, как meargă. ≈ «о сэ нингэ».',
        ua: 'ninge → o să ningă: особлива форма, як meargă. ≈ «о се нінге».',
      },
    },
    {
      kind: 'intro',
      ro: 'Cred că o să fie frumos.',
      tr: { ru: 'Думаю, будет хорошая погода.', ua: 'Думаю, буде гарна погода.' },
      note: {
        ru: 'cred că ≈ «кред кэ» — «думаю, что». frumos — «красиво»; о погоде — «хорошо, ясно».',
        ua: 'cred că ≈ «кред ке» — «думаю, що». frumos — «гарно»; про погоду — «ясно, гарна погода».',
      },
    },
    {
      kind: 'tip',
      title: 'O să fie…',
      body: {
        ru: [
          'Прогноз строится на **o să fie** — «будет»: o să fie **cald** (тепло), **frig** (холодно), **soare** (солнечно), **frumos** (хорошая погода).',
          'Дождь и снег — одним глаголом: **o să plouă**, **o să ningă**.',
          '**Poate** — «может быть»: **Poate o să plouă** — «Может, будет дождь».',
        ],
        ua: [
          'Прогноз будується на **o să fie** — «буде»: o să fie **cald** (тепло), **frig** (холодно), **soare** (сонячно), **frumos** (гарна погода).',
          'Дощ і сніг — одним дієсловом: **o să plouă**, **o să ningă**.',
          '**Poate** — «може»: **Poate o să plouă** — «Може, буде дощ».',
        ],
      },
      rows: [
        { ro: 'O să fie cald.', tr: { ru: 'Будет тепло. · «о сэ фие калд»', ua: 'Буде тепло. · «о се фіє калд»' } },
        { ro: 'O să fie frig.', tr: { ru: 'Будет холодно. · «о сэ фие фриг»', ua: 'Буде холодно. · «о се фіє фріг»' } },
        { ro: 'O să fie soare.', tr: { ru: 'Будет солнечно. · «о сэ фие соаре»', ua: 'Буде сонячно. · «о се фіє соаре»' } },
        { ro: 'Poate o să ningă.', tr: { ru: 'Может, пойдёт снег. · «поате о сэ нингэ»', ua: 'Може, піде сніг. · «поате о се нінге»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Завтра будет холодно.', ua: 'Завтра буде холодно.' },
      correct: 'Mâine o să fie frig.',
      wrong: ['Mâine o să fie cald.', 'Ieri a fost frig.', 'Azi e frig.'],
    },
    {
      kind: 'pickNative',
      q: 'Poate o să plouă.',
      correct: { ru: 'Может быть, будет дождь.', ua: 'Може, буде дощ.' },
      wrong: [
        { ru: 'Может быть, пойдёт снег.', ua: 'Може, піде сніг.' },
        { ru: 'Сейчас идёт дождь.', ua: 'Зараз іде дощ.' },
        { ru: 'Вчера был дождь.', ua: 'Учора був дощ.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'o să plouă', tr: { ru: 'будет дождь', ua: 'буде дощ' } },
        { ro: 'o să ningă', tr: { ru: 'пойдёт снег', ua: 'піде сніг' } },
        { ro: 'o să fie cald', tr: { ru: 'будет тепло', ua: 'буде тепло' } },
        { ro: 'cred că', tr: { ru: 'думаю, что', ua: 'думаю, що' } },
        { ro: 'poate', tr: { ru: 'может быть', ua: 'може' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'O să fie frumos mâine',
      tr: { ru: 'Завтра будет хорошая погода', ua: 'Завтра буде гарна погода' },
      wrong: ['A fost frumos ieri', 'O să fie frig mâine', 'O să fie cald mâine'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Думаю, завтра будет солнечно.', ua: 'Думаю, завтра буде сонячно.' },
      words: ['Cred', 'că', 'mâine', 'o', 'să', 'fie', 'soare'],
      extra: ['a', 'fost', 'frig'],
      shown: 'Cred că mâine o să fie soare.',
      also: ['Cred că o să fie soare mâine'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Будет тепло?', ua: 'Буде тепло?' },
      correct: 'O să fie cald?',
      wrong: ['A fost cald?', 'O să fie frig?', 'E cald?'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Послезавтра пойдёт снег.', ua: 'Післязавтра піде сніг.' },
      words: ['Poimâine', 'o', 'să', 'ningă'],
      extra: ['ninge', 'plouă', 'mâine'],
      shown: 'Poimâine o să ningă.',
      also: ['O să ningă poimâine'],
    },
    {
      kind: 'type',
      q: { ru: 'Завтра будет дождь.', ua: 'Завтра буде дощ.' },
      answers: ['Mâine o să plouă', 'O să plouă mâine', 'Mâine va ploua', 'Va ploua mâine', 'Mâine plouă'],
      shown: 'Mâine o să plouă.',
    },
    {
      kind: 'type',
      q: { ru: 'Думаю, будет холодно.', ua: 'Думаю, буде холодно.' },
      answers: ['Cred că o să fie frig', 'Cred că va fi frig'],
      shown: 'Cred că o să fie frig.',
    },
  ],
};
