import type { Bi, Lesson } from './types';

/**
 * Preparing for Romanian citizenship: the oath, the anthem, the state, history and
 * geography, and the interview. Outside the course map, Premium only, played in the
 * lesson screen under its own ids (`cz1`…). Facts here are the ones an interview may
 * ask; requirements differ by case, so the lessons send people to ANC for the rules.
 */
export const isCitizenship = (id: string) => /^cz\d+$/.test(id);

const bi = (ru: string, ua: string): Bi => ({ ru, ua });

const cz1: Lesson = {
  id: 'cz1',
  title: bi('Присяга', 'Присяга'),
  words: [
    { ro: 'jurământul de credință', tr: bi('присяга на верность', 'присяга на вірність') },
    { ro: 'jur', tr: bi('клянусь', 'присягаю') },
    { ro: 'devotat', tr: bi('преданный', 'відданий') },
    { ro: 'patria', tr: bi('родина', 'батьківщина') },
    { ro: 'legile', tr: bi('законы', 'закони') },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Jurământul de credință',
      body: {
        ru: [
          'После приказа о предоставлении гражданства приносят **присягу на верность Румынии** — в Национальном управлении по гражданству (**ANC**) или в консульстве. Румынское гражданство получают в день присяги.',
          'Текст короткий, его читают вслух. Выучите его наизусть — на церемонии будет спокойнее. Порядок и сроки для вашего случая уточняйте на сайте ANC: **cetatenie.just.ro**.',
        ],
        ua: [
          'Після наказу про надання громадянства складають **присягу на вірність Румунії** — у Національному управлінні з питань громадянства (**ANC**) або в консульстві. Румунське громадянство отримують у день присяги.',
          'Текст короткий, його читають уголос. Вивчіть його напам’ять — на церемонії буде спокійніше. Порядок і строки для вашого випадку уточнюйте на сайті ANC: **cetatenie.just.ro**.',
        ],
      },
      rows: [
        { ro: 'Jur să fiu devotat patriei și poporului român,', tr: bi('Клянусь быть преданным родине и румынскому народу,', 'Присягаю бути відданим батьківщині й румунському народові,') },
        { ro: 'să apăr drepturile și interesele naționale,', tr: bi('защищать права и национальные интересы,', 'захищати права й національні інтереси,') },
        { ro: 'să respect Constituția și legile României.', tr: bi('соблюдать Конституцию и законы Румынии.', 'дотримуватися Конституції та законів Румунії.') },
      ],
    },
    {
      kind: 'intro',
      ro: 'Jur să fiu devotat patriei și poporului român,',
      tr: bi('Клянусь быть преданным родине и румынскому народу,', 'Присягаю бути відданим батьківщині й румунському народові,'),
      note: bi(
        'jur — клянусь (a jura). devotat — преданный; женщина говорит **devotată**. patriei, poporului — «родине», «народу». ≈ «жур сэ фиу девотат патрией ши попорулуй ромын».',
        'jur — присягаю (a jura). devotat — відданий; жінка каже **devotată**. patriei, poporului — «батьківщині», «народові». ≈ «жур се фіу девотат патрієй ші попорулуй ромин».',
      ),
    },
    {
      kind: 'intro',
      ro: 'să apăr drepturile și interesele naționale,',
      tr: bi('защищать права и национальные интересы,', 'захищати права й національні інтереси,'),
      note: bi(
        'să apăr — «защищать» (a apăra). drepturile — права, interesele — интересы. ≈ «сэ апэр дрептуриле ши интереселе нацьонале».',
        'să apăr — «захищати» (a apăra). drepturile — права, interesele — інтереси. ≈ «се апер дрептуріле ші інтереселе нацьонале».',
      ),
    },
    {
      kind: 'intro',
      ro: 'să respect Constituția și legile României.',
      tr: bi('соблюдать Конституцию и законы Румынии.', 'дотримуватися Конституції та законів Румунії.'),
      note: bi(
        'a respecta — уважать, соблюдать. legile — законы (legea — закон). României — «Румынии». ≈ «сэ респект конституция ши леджиле ромыней».',
        'a respecta — поважати, дотримуватися. legile — закони (legea — закон). României — «Румунії». ≈ «се респект конституція ші леджіле роминей».',
      ),
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'jur', tr: bi('клянусь', 'присягаю') },
        { ro: 'patria', tr: bi('родина', 'батьківщина') },
        { ro: 'poporul', tr: bi('народ', 'народ') },
        { ro: 'drepturile', tr: bi('права', 'права') },
        { ro: 'legile', tr: bi('законы', 'закони') },
      ],
    },
    {
      kind: 'pickNative',
      q: 'să respect Constituția și legile României',
      correct: bi('соблюдать Конституцию и законы Румынии', 'дотримуватися Конституції та законів Румунії'),
      wrong: [
        bi('защищать права и национальные интересы', 'захищати права й національні інтереси'),
        bi('быть преданным румынскому народу', 'бути відданим румунському народові'),
        bi('изучать историю Румынии', 'вивчати історію Румунії'),
      ],
    },
    {
      kind: 'tiles',
      q: bi('Клянусь быть преданным родине и румынскому народу', 'Присягаю бути відданим батьківщині й румунському народові'),
      words: ['Jur', 'să', 'fiu', 'devotat', 'patriei', 'și', 'poporului', 'român'],
      extra: ['legile', 'apăr'],
      shown: 'Jur să fiu devotat patriei și poporului român',
    },
    {
      kind: 'tiles',
      q: bi('защищать права и национальные интересы', 'захищати права й національні інтереси'),
      words: ['să', 'apăr', 'drepturile', 'și', 'interesele', 'naționale'],
      extra: ['patriei', 'jur'],
      shown: 'să apăr drepturile și interesele naționale',
    },
    {
      kind: 'tiles',
      q: bi('соблюдать Конституцию и законы Румынии', 'дотримуватися Конституції та законів Румунії'),
      words: ['să', 'respect', 'Constituția', 'și', 'legile', 'României'],
      extra: ['poporului', 'fiu'],
      shown: 'să respect Constituția și legile României',
    },
    {
      kind: 'pickRo',
      q: bi('Как по-румынски «присяга на верность»?', 'Як румунською «присяга на вірність»?'),
      correct: 'jurământul de credință',
      wrong: ['cetățenia română', 'imnul național', 'legea fundamentală'],
    },
    {
      kind: 'listen',
      ro: 'Jur să fiu devotat patriei și poporului român.',
      tr: bi('Клянусь быть преданным родине и румынскому народу.', 'Присягаю бути відданим батьківщині й румунському народові.'),
      wrong: ['Jur să respect legile României.', 'Sunt devotat familiei mele.', 'Jur să apăr drepturile naționale.'],
    },
    {
      kind: 'type',
      q: bi('Напишите по-румынски: «клянусь»', 'Напишіть румунською: «присягаю»'),
      answers: ['jur'],
      shown: 'Jur',
    },
  ],
};

const cz2: Lesson = {
  id: 'cz2',
  title: bi('Гимн', 'Гімн'),
  words: [
    { ro: 'imnul național', tr: bi('государственный гимн', 'державний гімн') },
    { ro: 'deșteaptă-te', tr: bi('проснись', 'прокинься') },
    { ro: 'somnul', tr: bi('сон', 'сон') },
    { ro: 'soarta', tr: bi('судьба', 'доля') },
    { ro: 'dușmanii', tr: bi('враги', 'вороги') },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Deșteaptă-te, române!',
      body: {
        ru: [
          'Гимн Румынии — **«Deșteaptă-te, române!»** («Проснись, румын!»). Слова — **Andrei Mureșanu** (1848), музыка — **Anton Pann**. Гимном он стал в **1990** году.',
          '**29 июля** — День национального гимна. На интервью могут попросить прочитать или спеть первый куплет — выучите его.',
        ],
        ua: [
          'Гімн Румунії — **«Deșteaptă-te, române!»** («Прокинься, румуне!»). Слова — **Andrei Mureșanu** (1848), музика — **Anton Pann**. Гімном він став у **1990** році.',
          '**29 липня** — День національного гімну. На інтерв’ю можуть попросити прочитати або заспівати перший куплет — вивчіть його.',
        ],
      },
      rows: [
        { ro: 'imnul național', tr: bi('государственный гимн', 'державний гімн') },
        { ro: 'Andrei Mureșanu', tr: bi('автор слов', 'автор слів') },
        { ro: 'Anton Pann', tr: bi('автор музыки', 'автор музики') },
        { ro: '29 iulie', tr: bi('День гимна', 'День гімну') },
      ],
    },
    {
      kind: 'intro',
      ro: 'Deșteaptă-te, române, din somnul cel de moarte,',
      tr: bi('Проснись, румын, от смертного сна,', 'Прокинься, румуне, від смертного сну,'),
      note: bi(
        'deșteaptă-te — проснись (a se deștepta). române — «румын!» (обращение). somnul cel de moarte — «смертный сон». ≈ «дештяптэ-те, ромыне, дин сомнул чел де моарте».',
        'deșteaptă-te — прокинься (a se deștepta). române — «румуне!» (звертання). somnul cel de moarte — «смертний сон». ≈ «дештяпте-те, ромине, дін сомнул чел де моарте».',
      ),
    },
    {
      kind: 'intro',
      ro: 'În care te-adânciră barbarii de tirani!',
      tr: bi('В который тебя погрузили варвары-тираны!', 'У який тебе занурили варвари-тирани!'),
      note: bi(
        'te-adânciră — «тебя погрузили» (книжная форма прошедшего). barbarii de tirani — «варвары-тираны». ≈ «ын каре те-адынчирэ барбарий де тирань».',
        'te-adânciră — «тебе занурили» (книжна форма минулого). barbarii de tirani — «варвари-тирани». ≈ «ин каре те-адинчіре барбарій де тірань».',
      ),
    },
    {
      kind: 'intro',
      ro: 'Acum ori niciodată croiește-ți altă soartă,',
      tr: bi('Сейчас или никогда — создай себе иную судьбу,', 'Зараз або ніколи — створи собі іншу долю,'),
      note: bi(
        'acum ori niciodată — «сейчас или никогда». croiește-ți — «скрои себе, создай себе». soartă — судьба.',
        'acum ori niciodată — «зараз або ніколи». croiește-ți — «скрій собі, створи собі». soartă — доля.',
      ),
    },
    {
      kind: 'intro',
      ro: 'La care să se-nchine și cruzii tăi dușmani!',
      tr: bi('Перед которой склонятся даже твои жестокие враги!', 'Перед якою схиляться навіть твої жорстокі вороги!'),
      note: bi(
        'să se-nchine — «чтобы склонились» (a se închina). cruzii tăi dușmani — «твои жестокие враги».',
        'să se-nchine — «щоб схилилися» (a se închina). cruzii tăi dușmani — «твої жорстокі вороги».',
      ),
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'somnul', tr: bi('сон', 'сон') },
        { ro: 'moarte', tr: bi('смерть', 'смерть') },
        { ro: 'acum', tr: bi('сейчас', 'зараз') },
        { ro: 'niciodată', tr: bi('никогда', 'ніколи') },
        { ro: 'soartă', tr: bi('судьба', 'доля') },
      ],
    },
    {
      kind: 'pickNative',
      q: 'Acum ori niciodată croiește-ți altă soartă',
      correct: bi('Сейчас или никогда — создай себе иную судьбу', 'Зараз або ніколи — створи собі іншу долю'),
      wrong: [
        bi('Проснись, румын, от смертного сна', 'Прокинься, румуне, від смертного сну'),
        bi('Перед ней склонятся твои враги', 'Перед нею схиляться твої вороги'),
        bi('Сейчас или потом — выбери свою дорогу', 'Зараз або потім — обери свою дорогу'),
      ],
    },
    {
      kind: 'tiles',
      q: bi('Проснись, румын, от смертного сна', 'Прокинься, румуне, від смертного сну'),
      words: ['Deșteaptă-te', 'române', 'din', 'somnul', 'cel', 'de', 'moarte'],
      extra: ['soartă', 'acum'],
      shown: 'Deșteaptă-te, române, din somnul cel de moarte',
    },
    {
      kind: 'pickRo',
      q: bi('Кто написал слова гимна?', 'Хто написав слова гімну?'),
      correct: 'Andrei Mureșanu',
      wrong: ['Mihai Eminescu', 'Ion Creangă', 'George Enescu'],
    },
    {
      kind: 'pickRo',
      q: bi('Когда отмечают День национального гимна?', 'Коли відзначають День національного гімну?'),
      correct: '29 iulie',
      wrong: ['1 decembrie', '24 ianuarie', '9 mai'],
    },
    {
      kind: 'listen',
      ro: 'Deșteaptă-te, române, din somnul cel de moarte.',
      tr: bi('Проснись, румын, от смертного сна.', 'Прокинься, румуне, від смертного сну.'),
      wrong: ['Acum ori niciodată croiește-ți altă soartă.', 'Trăiască România!', 'Deșteaptă-te, e dimineață.'],
    },
    {
      kind: 'type',
      q: bi('Как начинается гимн? Напишите: «Проснись, румын»', 'Як починається гімн? Напишіть: «Прокинься, румуне»'),
      answers: ['Deșteaptă-te, române', 'Deșteaptă-te române'],
      shown: 'Deșteaptă-te, române',
    },
  ],
};

const cz3: Lesson = {
  id: 'cz3',
  title: bi('Государство и Конституция', 'Держава і Конституція'),
  words: [
    { ro: 'capitala', tr: bi('столица', 'столиця') },
    { ro: 'drapelul', tr: bi('флаг', 'прапор') },
    { ro: 'președintele', tr: bi('президент', 'президент') },
    { ro: 'Parlamentul', tr: bi('парламент', 'парламент') },
    { ro: 'Ziua Națională', tr: bi('национальный праздник', 'національне свято') },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'România — stat național',
      body: {
        ru: [
          '**Конституция** принята в **1991** году (референдум 8 декабря), пересмотрена в **2003**. **Президента** избирают на **5 лет**, не более двух сроков. **Парламент** из двух палат: **Camera Deputaților** (Палата депутатов) и **Senatul** (Сенат).',
          'Столица — **București**. Флаг — **синий, жёлтый, красный** (вертикальные полосы). Официальный язык — **румынский**, валюта — **leu**. Национальный праздник — **1 декабря**. Румыния в **НАТО** с 2004 года, в **Евросоюзе** — с 1 января 2007.',
        ],
        ua: [
          '**Конституцію** ухвалено в **1991** році (референдум 8 грудня), переглянуто у **2003**. **Президента** обирають на **5 років**, не більше двох строків. **Парламент** має дві палати: **Camera Deputaților** (Палата депутатів) і **Senatul** (Сенат).',
          'Столиця — **București**. Прапор — **синій, жовтий, червоний** (вертикальні смуги). Офіційна мова — **румунська**, валюта — **leu**. Національне свято — **1 грудня**. Румунія в **НАТО** з 2004 року, у **Євросоюзі** — з 1 січня 2007.',
        ],
      },
      rows: [
        { ro: 'Constituția', tr: bi('Конституция (1991, 2003)', 'Конституція (1991, 2003)') },
        { ro: 'Camera Deputaților', tr: bi('Палата депутатов', 'Палата депутатів') },
        { ro: 'Senatul', tr: bi('Сенат', 'Сенат') },
        { ro: 'leul', tr: bi('лей (валюта)', 'лей (валюта)') },
        { ro: 'Uniunea Europeană', tr: bi('Евросоюз', 'Євросоюз') },
      ],
    },
    {
      kind: 'intro',
      ro: 'Capitala României este București.',
      tr: bi('Столица Румынии — Бухарест.', 'Столиця Румунії — Бухарест.'),
      note: bi('capitala — столица. ≈ «капитала ромыней есте букурешть».', 'capitala — столиця. ≈ «капітала роминей есте букурешть».'),
    },
    {
      kind: 'intro',
      ro: 'Drapelul României este albastru, galben și roșu.',
      tr: bi('Флаг Румынии — синий, жёлтый и красный.', 'Прапор Румунії — синій, жовтий і червоний.'),
      note: bi('drapelul — флаг (ещё говорят steagul). albastru, galben, roșu — синий, жёлтый, красный.', 'drapelul — прапор (ще кажуть steagul). albastru, galben, roșu — синій, жовтий, червоний.'),
    },
    {
      kind: 'intro',
      ro: 'Președintele este ales pe cinci ani.',
      tr: bi('Президента избирают на пять лет.', 'Президента обирають на п’ять років.'),
      note: bi('este ales — «избирается» (a alege — выбирать). pe cinci ani — на пять лет.', 'este ales — «обирається» (a alege — обирати). pe cinci ani — на п’ять років.'),
    },
    {
      kind: 'intro',
      ro: 'Parlamentul are două camere: Camera Deputaților și Senatul.',
      tr: bi('В парламенте две палаты: Палата депутатов и Сенат.', 'Парламент має дві палати: Палату депутатів і Сенат.'),
      note: bi('camere — палаты (camera). deputaților — «депутатов».', 'camere — палати (camera). deputaților — «депутатів».'),
    },
    {
      kind: 'intro',
      ro: 'Ziua Națională a României este pe 1 Decembrie.',
      tr: bi('Национальный праздник Румынии — 1 декабря.', 'Національне свято Румунії — 1 грудня.'),
      note: bi('В этот день в 1918 году в Алба-Юлии провозгласили Великое объединение.', 'Цього дня 1918 року в Алба-Юлії проголосили Велике об’єднання.'),
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'capitala', tr: bi('столица', 'столиця') },
        { ro: 'drapelul', tr: bi('флаг', 'прапор') },
        { ro: 'președintele', tr: bi('президент', 'президент') },
        { ro: 'legea', tr: bi('закон', 'закон') },
        { ro: 'Senatul', tr: bi('Сенат', 'Сенат') },
      ],
    },
    {
      kind: 'pickRo',
      q: bi('На сколько лет избирают президента Румынии?', 'На скільки років обирають президента Румунії?'),
      correct: 'pe cinci ani',
      wrong: ['pe patru ani', 'pe șase ani', 'pe șapte ani'],
    },
    {
      kind: 'pickNative',
      q: 'Limba oficială este limba română.',
      correct: bi('Официальный язык — румынский.', 'Офіційна мова — румунська.'),
      wrong: [
        bi('Я говорю по-румынски.', 'Я розмовляю румунською.'),
        bi('Румынский язык трудный.', 'Румунська мова складна.'),
        bi('Румынский — язык Евросоюза.', 'Румунська — мова Євросоюзу.'),
      ],
    },
    {
      kind: 'pickRo',
      q: bi('С какого года Румыния в Евросоюзе?', 'З якого року Румунія в Євросоюзі?'),
      correct: 'din 2007',
      wrong: ['din 2004', 'din 1991', 'din 2014'],
    },
    {
      kind: 'tiles',
      q: bi('Столица Румынии — Бухарест', 'Столиця Румунії — Бухарест'),
      words: ['Capitala', 'României', 'este', 'București'],
      extra: ['drapelul', 'Senatul'],
      shown: 'Capitala României este București',
    },
    {
      kind: 'type',
      q: bi('Как называется валюта Румынии?', 'Як називається валюта Румунії?'),
      answers: ['leul', 'leu', 'lei'],
      shown: 'leul',
    },
  ],
};

const cz4: Lesson = {
  id: 'cz4',
  title: bi('История и география', 'Історія і географія'),
  words: [
    { ro: 'Marea Unire', tr: bi('Великое объединение (1918)', 'Велике об’єднання (1918)') },
    { ro: 'Dunărea', tr: bi('Дунай', 'Дунай') },
    { ro: 'Munții Carpați', tr: bi('Карпаты', 'Карпати') },
    { ro: 'Marea Neagră', tr: bi('Чёрное море', 'Чорне море') },
    { ro: 'județe', tr: bi('уезды (жудецы)', 'повіти (жудеци)') },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Istorie și geografie',
      body: {
        ru: [
          '**1600** — Михай Храбрый (**Mihai Viteazul**) впервые объединил Валахию, Трансильванию и Молдову. **1859** — **Unirea Principatelor**: Валахия и Молдова объединились при **Alexandru Ioan Cuza** (праздник — 24 января). **1 декабря 1918** — **Marea Unire** в Алба-Юлии. **Декабрь 1989** — революция.',
          'Через страну текут **Дунай** (**Dunărea**) и тянутся **Карпаты**; на востоке — **Чёрное море**. Самая высокая вершина — **Moldoveanu** (2544 м). Румыния делится на **41 жудец** и муниципий Бухарест. Национальный поэт — **Mihai Eminescu**.',
        ],
        ua: [
          '**1600** — Михай Хоробрий (**Mihai Viteazul**) уперше об’єднав Валахію, Трансильванію та Молдову. **1859** — **Unirea Principatelor**: Валахія й Молдова об’єдналися за **Alexandru Ioan Cuza** (свято — 24 січня). **1 грудня 1918** — **Marea Unire** в Алба-Юлії. **Грудень 1989** — революція.',
          'Країною тече **Дунай** (**Dunărea**) і тягнуться **Карпати**; на сході — **Чорне море**. Найвища вершина — **Moldoveanu** (2544 м). Румунія поділяється на **41 жудець** і муніципій Бухарест. Національний поет — **Mihai Eminescu**.',
        ],
      },
      rows: [
        { ro: 'Mihai Viteazul', tr: bi('первое объединение, 1600', 'перше об’єднання, 1600') },
        { ro: 'Alexandru Ioan Cuza', tr: bi('Unirea Principatelor, 1859', 'Unirea Principatelor, 1859') },
        { ro: 'Alba Iulia', tr: bi('Marea Unire, 1 декабря 1918', 'Marea Unire, 1 грудня 1918') },
        { ro: 'Mihai Eminescu', tr: bi('национальный поэт', 'національний поет') },
        { ro: 'Moldoveanu', tr: bi('высшая точка, 2544 м', 'найвища точка, 2544 м') },
      ],
    },
    {
      kind: 'intro',
      ro: 'Marea Unire a avut loc la 1 Decembrie 1918, la Alba Iulia.',
      tr: bi('Великое объединение произошло 1 декабря 1918 года в Алба-Юлии.', 'Велике об’єднання відбулося 1 грудня 1918 року в Алба-Юлії.'),
      note: bi('a avut loc — «произошло, состоялось». Поэтому 1 декабря — Национальный день.', 'a avut loc — «відбулося». Тому 1 грудня — Національний день.'),
    },
    {
      kind: 'intro',
      ro: 'Dunărea se varsă în Marea Neagră.',
      tr: bi('Дунай впадает в Чёрное море.', 'Дунай впадає в Чорне море.'),
      note: bi('se varsă — впадает (a se vărsa). Дельта Дуная — Delta Dunării.', 'se varsă — впадає (a se vărsa). Дельта Дунаю — Delta Dunării.'),
    },
    {
      kind: 'intro',
      ro: 'Cel mai înalt vârf este Moldoveanu.',
      tr: bi('Самая высокая вершина — Молдовяну.', 'Найвища вершина — Молдовяну.'),
      note: bi('cel mai înalt — самый высокий. vârful — вершина. Молдовяну — в горах Фэгэраш, 2544 м.', 'cel mai înalt — найвищий. vârful — вершина. Молдовяну — у горах Фегераш, 2544 м.'),
    },
    {
      kind: 'intro',
      ro: 'Mihai Eminescu este poetul național.',
      tr: bi('Михай Эминеску — национальный поэт.', 'Міхай Емінеску — національний поет.'),
      note: bi('poetul național — национальный поэт. Его день рождения, 15 января, — День национальной культуры.', 'poetul național — національний поет. Його день народження, 15 січня, — День національної культури.'),
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'Dunărea', tr: bi('Дунай', 'Дунай') },
        { ro: 'Marea Neagră', tr: bi('Чёрное море', 'Чорне море') },
        { ro: 'Munții Carpați', tr: bi('Карпаты', 'Карпати') },
        { ro: 'vârful', tr: bi('вершина', 'вершина') },
        { ro: 'poetul', tr: bi('поэт', 'поет') },
      ],
    },
    {
      kind: 'pickRo',
      q: bi('При ком объединились Валахия и Молдова в 1859 году?', 'За кого об’єдналися Валахія й Молдова 1859 року?'),
      correct: 'Alexandru Ioan Cuza',
      wrong: ['Mihai Viteazul', 'Ștefan cel Mare', 'Carol I'],
    },
    {
      kind: 'pickRo',
      q: bi('Где провозгласили Великое объединение?', 'Де проголосили Велике об’єднання?'),
      correct: 'la Alba Iulia',
      wrong: ['la București', 'la Iași', 'la Cluj'],
    },
    {
      kind: 'pickNative',
      q: 'România are 41 de județe și municipiul București.',
      correct: bi('В Румынии 41 жудец и муниципий Бухарест.', 'У Румунії 41 жудець і муніципій Бухарест.'),
      wrong: [
        bi('В Румынии 41 город.', 'У Румунії 41 місто.'),
        bi('В Бухаресте 41 район.', 'У Бухаресті 41 район.'),
        bi('Румынии 41 год.', 'Румунії 41 рік.'),
      ],
    },
    {
      kind: 'tiles',
      q: bi('Дунай впадает в Чёрное море', 'Дунай впадає в Чорне море'),
      words: ['Dunărea', 'se', 'varsă', 'în', 'Marea', 'Neagră'],
      extra: ['vârful', 'la'],
      shown: 'Dunărea se varsă în Marea Neagră',
    },
    {
      kind: 'type',
      q: bi('Как по-румынски «национальный поэт»?', 'Як румунською «національний поет»?'),
      answers: ['poetul național', 'poet național'],
      shown: 'poetul național',
    },
  ],
};

const cz5: Lesson = {
  id: 'cz5',
  title: bi('Интервью', 'Інтерв’ю'),
  words: [
    { ro: 'Cum vă numiți?', tr: bi('Как вас зовут?', 'Як вас звати?') },
    { ro: 'Unde locuiți?', tr: bi('Где вы живёте?', 'Де ви живете?') },
    { ro: 'Cu ce vă ocupați?', tr: bi('Чем вы занимаетесь?', 'Чим ви займаєтеся?') },
    { ro: 'Puteți repeta, vă rog?', tr: bi('Повторите, пожалуйста.', 'Повторіть, будь ласка.') },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'La interviu',
      body: {
        ru: [
          'На интервью комиссия проверяет, как вы **говорите и понимаете по-румынски**, и задаёт вопросы о **культуре, истории, Конституции** и **гимне**. Требуется ли интервью в вашем случае — уточняйте в ANC.',
          'Отвечайте **полными предложениями** и на «вы» (**dumneavoastră**). Не поняли вопрос — не молчите, попросите: **Puteți repeta, vă rog?** или **Vorbiți mai rar, vă rog.**',
        ],
        ua: [
          'На інтерв’ю комісія перевіряє, як ви **говорите й розумієте румунською**, і ставить питання про **культуру, історію, Конституцію** та **гімн**. Чи потрібне інтерв’ю у вашому випадку — уточнюйте в ANC.',
          'Відповідайте **повними реченнями** і на «ви» (**dumneavoastră**). Не зрозуміли питання — не мовчіть, попросіть: **Puteți repeta, vă rog?** або **Vorbiți mai rar, vă rog.**',
        ],
      },
      rows: [
        { ro: 'Cum vă numiți?', tr: bi('Как вас зовут?', 'Як вас звати?') },
        { ro: 'Mă numesc…', tr: bi('Меня зовут…', 'Мене звати…') },
        { ro: 'Puteți repeta, vă rog?', tr: bi('Повторите, пожалуйста.', 'Повторіть, будь ласка.') },
        { ro: 'Vorbiți mai rar, vă rog.', tr: bi('Говорите медленнее, пожалуйста.', 'Говоріть повільніше, будь ласка.') },
      ],
    },
    {
      kind: 'intro',
      ro: 'De ce doriți cetățenia română?',
      tr: bi('Почему вы хотите получить румынское гражданство?', 'Чому ви хочете отримати румунське громадянство?'),
      note: bi('doriți — вы желаете (a dori). cetățenia — гражданство. ≈ «де че дорить четэцения ромынэ».', 'doriți — ви бажаєте (a dori). cetățenia — громадянство. ≈ «де че доріть четеценія ромине».'),
    },
    {
      kind: 'intro',
      ro: 'Pentru că bunicii mei au fost români.',
      tr: bi('Потому что мои бабушка и дедушка были румынами.', 'Тому що мої бабуся й дідусь були румунами.'),
      note: bi('pentru că — потому что. bunicii — бабушка и дедушка. Ответ подбирайте под свою историю.', 'pentru că — тому що. bunicii — бабуся й дідусь. Відповідь добирайте під свою історію.'),
    },
    {
      kind: 'intro',
      ro: 'Locuiesc în România de trei ani.',
      tr: bi('Я живу в Румынии три года.', 'Я живу в Румунії три роки.'),
      note: bi('locuiesc — живу (a locui). de trei ani — уже три года.', 'locuiesc — живу (a locui). de trei ani — уже три роки.'),
    },
    {
      kind: 'intro',
      ro: 'Lucrez ca șofer și îmi place aici.',
      tr: bi('Я работаю водителем, и мне здесь нравится.', 'Я працюю водієм, і мені тут подобається.'),
      note: bi('lucrez ca… — работаю кем-то. Подставьте свою профессию: profesor, asistentă, programator.', 'lucrez ca… — працюю кимось. Підставте свою професію: profesor, asistentă, programator.'),
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'Cum vă numiți?', tr: bi('Как вас зовут?', 'Як вас звати?') },
        { ro: 'Unde locuiți?', tr: bi('Где вы живёте?', 'Де ви живете?') },
        { ro: 'Cu ce vă ocupați?', tr: bi('Чем вы занимаетесь?', 'Чим ви займаєтеся?') },
        { ro: 'De unde sunteți?', tr: bi('Откуда вы?', 'Звідки ви?') },
      ],
    },
    {
      kind: 'pickRo',
      q: bi('Вы не поняли вопрос. Что сказать?', 'Ви не зрозуміли питання. Що сказати?'),
      correct: 'Puteți repeta, vă rog?',
      wrong: ['Nu vreau să răspund.', 'Am terminat.', 'La revedere!'],
    },
    {
      kind: 'pickNative',
      q: 'Vorbiți mai rar, vă rog.',
      correct: bi('Говорите медленнее, пожалуйста.', 'Говоріть повільніше, будь ласка.'),
      wrong: [
        bi('Говорите громче, пожалуйста.', 'Говоріть голосніше, будь ласка.'),
        bi('Вы говорите по-румынски?', 'Ви розмовляєте румунською?'),
        bi('Я редко говорю по-румынски.', 'Я рідко розмовляю румунською.'),
      ],
    },
    {
      kind: 'listen',
      ro: 'Cu ce vă ocupați?',
      tr: bi('Чем вы занимаетесь?', 'Чим ви займаєтеся?'),
      wrong: ['Cum vă numiți?', 'Unde locuiți?', 'De unde sunteți?'],
    },
    {
      kind: 'tiles',
      q: bi('Да, я говорю и понимаю по-румынски', 'Так, я розмовляю й розумію румунською'),
      words: ['Da', 'vorbesc', 'și', 'înțeleg', 'limba', 'română'],
      extra: ['rar', 'nu'],
      shown: 'Da, vorbesc și înțeleg limba română',
    },
    {
      kind: 'tiles',
      q: bi('Потому что мои бабушка и дедушка были румынами', 'Тому що мої бабуся й дідусь були румунами'),
      words: ['Pentru', 'că', 'bunicii', 'mei', 'au', 'fost', 'români'],
      extra: ['locuiesc', 'de'],
      shown: 'Pentru că bunicii mei au fost români',
    },
    {
      kind: 'type',
      q: bi('Ответьте: «Меня зовут Андрей»', 'Дайте відповідь: «Мене звати Андрій»'),
      answers: ['Mă numesc Andrei', 'Numele meu este Andrei'],
      shown: 'Mă numesc Andrei',
    },
  ],
};

export const CITIZENSHIP: Lesson[] = [cz1, cz2, cz3, cz4, cz5];

export const findCitizenship = (id: string) => CITIZENSHIP.find((l) => l.id === id);
