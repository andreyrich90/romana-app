import type { Bi, Word } from './types';

/**
 * Cards: short reads outside the course — a word of the day, a phrase people really say,
 * a small topic such as diminutives. Each one opens on its own screen and ends with a
 * short practice built from its own examples (src/engine/cardPractice.ts).
 */
export type CardKind = 'word' | 'phrase' | 'topic';
/** Practical cards grouped by situation; the library shows each theme as its own section. */
export type CardTheme = 'work' | 'docs' | 'health' | 'shop' | 'transport';

export type CardTask = { q: Bi; answers: string[]; shown: string };

export type LearnCard = {
  id: string;
  kind: CardKind;
  theme?: CardTheme;
  /** The Romanian headline, read aloud and tappable. */
  ro: string;
  /** Short translation under the headline. */
  tr: Bi;
  /** What the word or phrase means and when people use it. */
  meaning: Bi;
  examples: Word[];
  /** Set phrases built on the word; for a topic, its forms. */
  expressions: Word[];
  /** Grammar to keep in mind: gender, plural, the verb next to it. */
  remember: Bi;
  /** A saying or a line worth keeping, shown last. */
  quote?: Word;
  practice: CardTask[];
};

const w = (ro: string, ru: string, ua: string): Word => ({ ro, tr: { ru, ua } });
const bi = (ru: string, ua: string): Bi => ({ ru, ua });
const task = (ru: string, ua: string, answers: string[]): CardTask => ({ q: { ru, ua }, answers, shown: answers[0] });

export const CARDS: LearnCard[] = [
  {
    id: 'zambet',
    kind: 'word',
    ro: 'zâmbet',
    tr: bi('улыбка', 'усмішка'),
    meaning: bi(
      'Улыбка — знак радости, приветливости, счастья. Глагол «улыбаться» — a zâmbi: zâmbesc, zâmbești, zâmbește.',
      'Усмішка — знак радості, привітності, щастя. Дієслово «усміхатися» — a zâmbi: zâmbesc, zâmbești, zâmbește.',
    ),
    examples: [
      w('Zâmbetul ei este frumos.', 'Её улыбка красивая.', 'Її усмішка гарна.'),
      w('Mi-a oferit un zâmbet sincer.', 'Он подарил мне искреннюю улыбку.', 'Він подарував мені щиру усмішку.'),
      w('Iubesc zâmbetul tău.', 'Я люблю твою улыбку.', 'Я люблю твою усмішку.'),
      w('Zâmbetul copiilor este magic.', 'Улыбка детей волшебная.', 'Усмішка дітей чарівна.'),
    ],
    expressions: [
      w('un zâmbet larg', 'широкая улыбка', 'широка усмішка'),
      w('un zâmbet fals', 'фальшивая улыбка', 'фальшива усмішка'),
      w('cu zâmbetul pe buze', 'с улыбкой на губах', 'з усмішкою на вустах'),
      w('a zâmbi', 'улыбаться', 'усміхатися'),
    ],
    remember: bi(
      'Zâmbet — **средний род**: un zâmbet, două zâmbete. «Эта улыбка» — zâmbetul.',
      'Zâmbet — **середній рід**: un zâmbet, două zâmbete. «Ця усмішка» — zâmbetul.',
    ),
    quote: w('Un zâmbet costă puțin, dar valorează mult.', 'Улыбка стоит мало, а значит много.', 'Усмішка коштує мало, а важить багато.'),
    practice: [
      task('Её улыбка красивая.', 'Її усмішка гарна.', ['Zâmbetul ei este frumos', 'Zâmbetul ei e frumos']),
      task('Я люблю твою улыбку.', 'Я люблю твою усмішку.', ['Iubesc zâmbetul tău', 'Îmi place zâmbetul tău']),
      task('Широкая улыбка.', 'Широка усмішка.', ['Un zâmbet larg', 'Zâmbet larg']),
    ],
  },
  {
    id: 'munca',
    kind: 'word',
    ro: 'muncă',
    tr: bi('работа, труд', 'робота, праця'),
    meaning: bi(
      'Работа как труд и как место работы. В разговоре о месте работы часто говорят и serviciu: merg la serviciu — иду на работу.',
      'Робота як праця і як місце роботи. У розмові про місце роботи часто кажуть і serviciu: merg la serviciu — іду на роботу.',
    ),
    examples: [
      w('Am o muncă interesantă.', 'У меня интересная работа.', 'У мене цікава робота.'),
      w('Munca mea este grea.', 'Моя работа тяжёлая.', 'Моя робота важка.'),
      w('Unde este locul tău de muncă?', 'Где твоё место работы?', 'Де твоє місце роботи?'),
      w('Căutăm un loc de muncă.', 'Мы ищем работу.', 'Ми шукаємо роботу.'),
    ],
    expressions: [
      w('loc de muncă', 'рабочее место, работа', 'робоче місце, робота'),
      w('contract de muncă', 'трудовой договор', 'трудовий договір'),
      w('muncă în echipă', 'командная работа', 'командна робота'),
      w('piața muncii', 'рынок труда', 'ринок праці'),
    ],
    remember: bi(
      'Muncă — **женский род**: munca (эта работа), munci (работы). Глагол — a munci: muncesc — я тружусь.',
      'Muncă — **жіночий рід**: munca (ця робота), munci (роботи). Дієслово — a munci: muncesc — я працюю.',
    ),
    quote: w('Secretul succesului este munca.', 'Секрет успеха — это труд.', 'Секрет успіху — це праця.'),
    practice: [
      task('Моя работа тяжёлая.', 'Моя робота важка.', ['Munca mea este grea', 'Munca mea e grea']),
      task('Мы ищем работу.', 'Ми шукаємо роботу.', ['Căutăm un loc de muncă', 'Căutăm de lucru', 'Căutăm o slujbă', 'Căutăm muncă']),
      task('Трудовой договор.', 'Трудовий договір.', ['Contract de muncă', 'Contractul de muncă', 'Un contract de muncă']),
    ],
  },
  {
    id: 'viata',
    kind: 'word',
    ro: 'viață',
    tr: bi('жизнь', 'життя'),
    meaning: bi(
      'Жизнь, жизненный путь. Часто звучит в выражении Asta e viața! — «Такова жизнь!»',
      'Життя, життєвий шлях. Часто звучить у виразі Asta e viața! — «Таке життя!»',
    ),
    examples: [
      w('Viața este frumoasă.', 'Жизнь прекрасна.', 'Життя прекрасне.'),
      w('Ne bucurăm de viață.', 'Мы радуемся жизни.', 'Ми радіємо життю.'),
      w('A ales o cale nouă în viață.', 'Он выбрал новый путь в жизни.', 'Він обрав новий шлях у житті.'),
      w('Mi-a povestit despre viața lui.', 'Он рассказал мне о своей жизни.', 'Він розповів мені про своє життя.'),
    ],
    expressions: [
      w('Asta e viața!', 'Такова жизнь!', 'Таке життя!'),
      w('sensul vieții', 'смысл жизни', 'сенс життя'),
      w('viața de zi cu zi', 'повседневная жизнь', 'повсякденне життя'),
      w('pe viață', 'на всю жизнь', 'на все життя'),
    ],
    remember: bi(
      'Viață — **женский род**: viața (эта жизнь), vieți (жизни). «Жизни» в смысле «чего?» — vieții: sensul vieții.',
      'Viață — **жіночий рід**: viața (це життя), vieți (життя, мн.). «Чого?» — vieții: sensul vieții.',
    ),
    quote: w('Viața e o carte cu multe pagini.', 'Жизнь — это книга со множеством страниц.', 'Життя — це книга з багатьма сторінками.'),
    practice: [
      task('Жизнь прекрасна.', 'Життя прекрасне.', ['Viața este frumoasă', 'Viața e frumoasă']),
      task('Такова жизнь!', 'Таке життя!', ['Asta e viața', 'Asta este viața', 'Așa e viața', 'Așa este viața']),
      task('Смысл жизни.', 'Сенс життя.', ['Sensul vieții']),
    ],
  },
  {
    id: 'dor',
    kind: 'word',
    ro: 'dor',
    tr: bi('тоска, «скучаю»', 'туга, «сумую»'),
    meaning: bi(
      'Тоска по кому-то или чему-то далёкому, светлая грусть. Румыны считают его самым румынским словом: точного перевода у него нет.',
      'Туга за кимось чи чимось далеким, світлий сум. Румуни вважають його найрумунськішим словом: точного перекладу в нього немає.',
    ),
    examples: [
      w('Mi-e dor de tine.', 'Я скучаю по тебе.', 'Я сумую за тобою.'),
      w('Mi-e dor de casă.', 'Я скучаю по дому.', 'Я сумую за домом.'),
      w('Ne e dor de mare.', 'Мы скучаем по морю.', 'Ми сумуємо за морем.'),
      w('Mi-a fost dor de voi.', 'Я скучал по вам.', 'Я сумував за вами.'),
    ],
    expressions: [
      w('mi-e dor de', 'я скучаю по', 'я сумую за'),
      w('dor de casă', 'тоска по дому', 'туга за домом'),
      w('cu drag și dor', 'с любовью и тоской (в конце письма)', 'з любов’ю і тугою (наприкінці листа)'),
    ],
    remember: bi(
      'Почти всегда — в конструкции **mi-e dor de…** («мне тоска по…»): ți-e dor (тебе), îi e dor (ему, ей), ne e dor (нам).',
      'Майже завжди — у конструкції **mi-e dor de…** («мені туга за…»): ți-e dor (тобі), îi e dor (йому, їй), ne e dor (нам).',
    ),
    practice: [
      task('Я скучаю по тебе.', 'Я сумую за тобою.', ['Mi-e dor de tine', 'Mie mi-e dor de tine']),
      task('Мы скучаем по морю.', 'Ми сумуємо за морем.', ['Ne e dor de mare', 'Ne este dor de mare']),
      task('Ты скучаешь по мне?', 'Ти сумуєш за мною?', ['Ți-e dor de mine', 'Îți e dor de mine', 'Îți este dor de mine']),
    ],
  },
  {
    id: 'acasa',
    kind: 'word',
    ro: 'acasă',
    tr: bi('дома; домой', 'вдома; додому'),
    meaning: bi(
      'Одно слово на оба вопроса — «где?» и «куда?»: sunt acasă — я дома, merg acasă — иду домой.',
      'Одне слово на обидва питання — «де?» і «куди?»: sunt acasă — я вдома, merg acasă — іду додому.',
    ),
    examples: [
      w('Sunt acasă.', 'Я дома.', 'Я вдома.'),
      w('Mergem acasă.', 'Мы идём домой.', 'Ми йдемо додому.'),
      w('Simte-te ca acasă!', 'Чувствуй себя как дома!', 'Почувайся як удома!'),
      w('Azi lucrez de acasă.', 'Сегодня я работаю из дома.', 'Сьогодні я працюю з дому.'),
    ],
    expressions: [
      w('de acasă', 'из дома', 'з дому'),
      w('la mine acasă', 'у меня дома', 'у мене вдома'),
      w('ca acasă', 'как дома', 'як удома'),
    ],
    remember: bi(
      'Acasă — наречие, артикля у него нет. Сам дом как здание — **casă**: o casă mare — большой дом.',
      'Acasă — прислівник, артикля в нього немає. Сам будинок — **casă**: o casă mare — великий будинок.',
    ),
    practice: [
      task('Я дома.', 'Я вдома.', ['Sunt acasă', 'Eu sunt acasă']),
      task('Мы идём домой.', 'Ми йдемо додому.', ['Mergem acasă', 'Noi mergem acasă']),
      task('Чувствуй себя как дома!', 'Почувайся як удома!', ['Simte-te ca acasă', 'Simte-te ca la tine acasă']),
    ],
  },
  {
    id: 'noroc',
    kind: 'word',
    ro: 'noroc',
    tr: bi('удача; «будем!»', 'удача; «будьмо!»'),
    meaning: bi(
      'Удача, везение. А ещё — тост, когда чокаются: Noroc! В Молдове так же здороваются.',
      'Удача, везіння. А ще — тост, коли цокаються: Noroc! У Молдові так само вітаються.',
    ),
    examples: [
      w('Am avut noroc.', 'Мне повезло.', 'Мені пощастило.'),
      w('Mult noroc la examen!', 'Удачи на экзамене!', 'Удачі на іспиті!'),
      w('Ce noroc!', 'Какая удача!', 'Яка удача!'),
      w('Noroc și sănătate!', 'Удачи и здоровья!', 'Удачі й здоров’я!'),
    ],
    expressions: [
      w('a avea noroc', 'везти, быть удачливым', 'щастити, бути вдалим'),
      w('mult noroc', 'удачи', 'удачі'),
      w('din noroc', 'по счастливой случайности', 'на щастя, випадково'),
      w('baftă', 'удачи (разг.)', 'удачі (розм.)'),
    ],
    remember: bi(
      '«Мне повезло» по-румынски — «я имел удачу»: **am avut noroc**. «Тебе повезло» — ai avut noroc.',
      '«Мені пощастило» румунською — «я мав удачу»: **am avut noroc**. «Тобі пощастило» — ai avut noroc.',
    ),
    practice: [
      task('Мне повезло.', 'Мені пощастило.', ['Am avut noroc', 'Eu am avut noroc']),
      task('Удачи!', 'Удачі!', ['Mult noroc', 'Noroc', 'Baftă', 'Succes', 'Multă baftă']),
      task('Какая удача!', 'Яка удача!', ['Ce noroc']),
    ],
  },
  {
    id: 'pofta',
    kind: 'word',
    ro: 'poftă',
    tr: bi('аппетит, желание', 'апетит, бажання'),
    meaning: bi(
      'Аппетит и вообще желание чего-то. Отсюда Poftă bună! — «Приятного аппетита!» и очень частое poftim.',
      'Апетит і взагалі бажання чогось. Звідси Poftă bună! — «Смачного!» і дуже часте poftim.',
    ),
    examples: [
      w('Poftă bună!', 'Приятного аппетита!', 'Смачного!'),
      w('Nu am poftă de mâncare.', 'У меня нет аппетита.', 'У мене немає апетиту.'),
      w('Am poftă de ceva dulce.', 'Хочется чего-нибудь сладкого.', 'Хочеться чогось солодкого.'),
      w('Poftim, cafeaua dumneavoastră.', 'Пожалуйста, ваш кофе.', 'Прошу, ваша кава.'),
    ],
    expressions: [
      w('poftă bună', 'приятного аппетита', 'смачного'),
      w('a avea poftă de', 'хотеть (чего-то)', 'хотіти (чогось)'),
      w('poftim', 'вот, пожалуйста; что-что?', 'ось, прошу; що-що?'),
      w('poftiți', 'проходите; угощайтесь', 'проходьте; частуйтеся'),
    ],
    remember: bi(
      '**Poftim** значит «вот, пожалуйста», когда что-то протягивают, и «простите, что?», когда переспрашивают. Вежливо — poftiți.',
      '**Poftim** означає «ось, прошу», коли щось подають, і «перепрошую, що?», коли перепитують. Ввічливо — poftiți.',
    ),
    practice: [
      task('Приятного аппетита!', 'Смачного!', ['Poftă bună']),
      task('Хочется чего-нибудь сладкого.', 'Хочеться чогось солодкого.', ['Am poftă de ceva dulce', 'Aș mânca ceva dulce', 'Vreau ceva dulce']),
      task('Простите, что? (переспросить)', 'Перепрошую, що? (перепитати)', ['Poftim', 'Poftiți']),
    ],
  },
  {
    id: 'timp',
    kind: 'word',
    ro: 'timp',
    tr: bi('время', 'час'),
    meaning: bi(
      'Время — сколько его, хватает ли его. Погода — другое слово: vremea. Ce vreme e azi? — Какая сегодня погода?',
      'Час — скільки його, чи вистачає. Погода — інше слово: vremea. Ce vreme e azi? — Яка сьогодні погода?',
    ),
    examples: [
      w('Nu am timp.', 'У меня нет времени.', 'У мене немає часу.'),
      w('Timpul trece repede.', 'Время летит быстро.', 'Час минає швидко.'),
      w('Cât timp stai aici?', 'Сколько времени ты здесь пробудешь?', 'Скільки часу ти тут пробудеш?'),
      w('Ne vedem când ai timp.', 'Увидимся, когда у тебя будет время.', 'Побачимося, коли матимеш час.'),
    ],
    expressions: [
      w('la timp', 'вовремя', 'вчасно'),
      w('în timpul liber', 'в свободное время', 'у вільний час'),
      w('tot timpul', 'всё время', 'весь час'),
      w('din timp', 'заранее', 'заздалегідь'),
    ],
    remember: bi(
      'Timp — **средний род**: timpul (это время). «Который час?» — не timp, а **Cât e ceasul?**',
      'Timp — **середній рід**: timpul (цей час). «Котра година?» — не timp, а **Cât e ceasul?**',
    ),
    practice: [
      task('У меня нет времени.', 'У мене немає часу.', ['Nu am timp', 'N-am timp']),
      task('Вовремя.', 'Вчасно.', ['La timp']),
      task('В свободное время.', 'У вільний час.', ['În timpul liber']),
    ],
  },
  {
    id: 'mai-vedem',
    kind: 'phrase',
    ro: 'Mai vedem.',
    tr: bi('посмотрим; как получится', 'побачимо; як вийде'),
    meaning: bi(
      'В учебниках её почти нет, а в жизни — постоянно. Так говорят, когда не хотят обещать, не уверены или просто уходят от ответа. Не всегда отказ, но часто вежливый способ ничего не обещать.',
      'У підручниках її майже немає, а в житті — постійно. Так кажуть, коли не хочуть обіцяти, не впевнені або просто ухиляються від відповіді. Не завжди відмова, але часто ввічливий спосіб нічого не обіцяти.',
    ),
    examples: [
      w('Ne vedem mâine? — Mai vedem.', 'Завтра увидимся? — Посмотрим.', 'Завтра побачимося? — Побачимо.'),
      w('Vii la ziua mea? — Mai vedem.', 'Придёшь на мой день рождения? — Посмотрим.', 'Прийдеш на мій день народження? — Побачимо.'),
      w('Termini până vineri? — Mai vedem.', 'Закончишь до пятницы? — Посмотрим.', 'Закінчиш до п’ятниці? — Побачимо.'),
    ],
    expressions: [
      w('o să vedem', 'посмотрим (потом)', 'побачимо (потім)'),
      w('poate', 'может быть', 'можливо'),
      w('cine știe', 'кто знает', 'хто знає'),
      w('sigur', 'конечно, точно', 'звісно, точно'),
    ],
    remember: bi(
      'Дословно «ещё посмотрим»: mai — «ещё», vedem — «мы видим». Уверенный ответ — **sigur** (точно) или **clar** (ясно, конечно).',
      'Дослівно «ще подивимося»: mai — «ще», vedem — «ми бачимо». Упевнена відповідь — **sigur** (точно) або **clar** (ясно, звісно).',
    ),
    practice: [
      task('Посмотрим.', 'Побачимо.', ['Mai vedem', 'O să vedem', 'Vedem']),
      task('Может быть.', 'Можливо.', ['Poate', 'Poate că da']),
      task('Кто знает.', 'Хто знає.', ['Cine știe']),
    ],
  },
  {
    id: 'hai',
    kind: 'phrase',
    ro: 'Hai!',
    tr: bi('давай!, пошли!', 'давай!, ходімо!'),
    meaning: bi(
      'Самое частое слово-подгонялка: «давай», «пошли», «ну же». С să — приглашение: Hai să mergem! — Пойдём!',
      'Найчастіше слово-підганялка: «давай», «ходімо», «ну ж бо». Із să — запрошення: Hai să mergem! — Ходімо!',
    ),
    examples: [
      w('Hai să mergem!', 'Пойдём!', 'Ходімо!'),
      w('Hai acasă!', 'Пошли домой!', 'Ходімо додому!'),
      w('Hai, că întârziem!', 'Давай, мы опаздываем!', 'Давай, ми запізнюємося!'),
      w('Haideți la masă!', 'Идите к столу!', 'Ідіть до столу!'),
    ],
    expressions: [
      w('hai să…', 'давай…', 'давай…'),
      w('haideți', 'давайте', 'давайте'),
      w('hai, pa!', 'ну, пока!', 'ну, бувай!'),
      w('hai, mă!', 'да ладно!', 'та ну!'),
    ],
    remember: bi(
      '**Hai** — одному, **haideți** — нескольким или вежливо. После hai să — форма как после să: hai să mâncăm.',
      '**Hai** — одному, **haideți** — кільком або ввічливо. Після hai să — форма як після să: hai să mâncăm.',
    ),
    practice: [
      task('Пойдём!', 'Ходімо!', ['Hai să mergem', 'Haide să mergem', 'Hai']),
      task('Давайте есть!', 'Давайте їсти!', ['Haideți să mâncăm', 'Hai să mâncăm']),
      task('Пошли домой!', 'Ходімо додому!', ['Hai acasă', 'Hai să mergem acasă']),
    ],
  },
  {
    id: 'stai-putin',
    kind: 'phrase',
    ro: 'Stai puțin!',
    tr: bi('подожди минутку', 'зачекай хвилинку'),
    meaning: bi(
      'Буквально «постой немного». Так просят подождать, перебивают, чтобы вставить слово, или говорят «стоп, погоди».',
      'Буквально «постій трохи». Так просять зачекати, перебивають, щоб вставити слово, або кажуть «стоп, чекай».',
    ),
    examples: [
      w('Stai puțin, vin imediat.', 'Подожди, я сейчас.', 'Зачекай, я зараз.'),
      w('Stați puțin, vă rog.', 'Подождите минутку, пожалуйста.', 'Зачекайте хвилинку, будь ласка.'),
      w('Stai liniștit, totul e bine.', 'Не переживай, всё хорошо.', 'Не хвилюйся, усе добре.'),
    ],
    expressions: [
      w('stai liniștit', 'не переживай (ему)', 'не хвилюйся (йому)'),
      w('stai liniștită', 'не переживай (ей)', 'не хвилюйся (їй)'),
      w('o clipă', 'одну секунду', 'одну секунду'),
      w('imediat', 'сейчас, сразу', 'зараз, одразу'),
    ],
    remember: bi(
      'A sta — «стоять, сидеть, находиться, ждать». **Stai** — ты, **stați** — вы. Unde stai? — Где ты живёшь?',
      'A sta — «стояти, сидіти, перебувати, чекати». **Stai** — ти, **stați** — ви. Unde stai? — Де ти живеш?',
    ),
    practice: [
      task('Подожди минутку!', 'Зачекай хвилинку!', ['Stai puțin', 'Stai o clipă', 'Așteaptă puțin']),
      task('Подождите, пожалуйста.', 'Зачекайте, будь ласка.', ['Stați puțin, vă rog', 'Așteptați, vă rog', 'Stați, vă rog', 'Așteptați puțin, vă rog']),
      task('Где ты живёшь?', 'Де ти живеш?', ['Unde stai', 'Unde locuiești']),
    ],
  },
  {
    id: 'nu-i-nimic',
    kind: 'phrase',
    ro: 'Nu-i nimic.',
    tr: bi('ничего страшного', 'нічого страшного'),
    meaning: bi(
      'Ответ на извинение: «ничего», «не страшно». Nu-i — разговорное сокращение от nu e.',
      'Відповідь на вибачення: «нічого», «не страшно». Nu-i — розмовне скорочення від nu e.',
    ),
    examples: [
      w('Scuze, am întârziat. — Nu-i nimic.', 'Извини, я опоздал. — Ничего страшного.', 'Вибач, я запізнився. — Нічого страшного.'),
      w('Nu contează cât costă.', 'Неважно, сколько стоит.', 'Неважливо, скільки коштує.'),
      w('Nicio problemă, te ajut.', 'Без проблем, я помогу.', 'Без проблем, я допоможу.'),
    ],
    expressions: [
      w('nu contează', 'неважно', 'неважливо'),
      w('nicio problemă', 'без проблем', 'без проблем'),
      w('lasă', 'оставь, не надо', 'облиш, не треба'),
      w('nu-i bai', 'не беда (Трансильвания, Молдова)', 'не біда (Трансильванія, Молдова)'),
    ],
    remember: bi(
      'В разговоре e часто сливается: **nu-i** = nu e, **ce-i** = ce e (что такое?), **unde-i** = unde e (где?).',
      'У розмові e часто зливається: **nu-i** = nu e, **ce-i** = ce e (що таке?), **unde-i** = unde e (де?).',
    ),
    practice: [
      task('Ничего страшного.', 'Нічого страшного.', ['Nu-i nimic', 'Nu e nimic', 'Nu contează']),
      task('Без проблем.', 'Без проблем.', ['Nicio problemă']),
      task('Неважно.', 'Неважливо.', ['Nu contează', 'Nu e important']),
    ],
  },
  {
    id: 'ce-mai-faci',
    kind: 'phrase',
    ro: 'Ce mai faci?',
    tr: bi('как дела?', 'як справи?'),
    meaning: bi(
      'Главный вопрос при встрече: дословно «что ещё делаешь?». Отвечают коротко: bine, mersi — хорошо, спасибо.',
      'Головне питання при зустрічі: дослівно «що ще робиш?». Відповідають коротко: bine, mersi — добре, дякую.',
    ),
    examples: [
      w('Ce mai faci? — Bine, mersi. Tu?', 'Как дела? — Хорошо, спасибо. А ты?', 'Як справи? — Добре, дякую. А ти?'),
      w('Ce mai faceți, doamnă?', 'Как ваши дела, госпожа?', 'Як ваші справи, пані?'),
      w('Ce mai e nou?', 'Что нового?', 'Що нового?'),
    ],
    expressions: [
      w('bine, mersi', 'хорошо, спасибо', 'добре, дякую'),
      w('merge', 'нормально, идёт', 'нормально, іде'),
      w('așa și așa', 'так себе', 'так собі'),
      w('ce mai zici?', 'что скажешь? как жизнь?', 'що скажеш? як життя?'),
    ],
    remember: bi(
      'Без mai — **Ce faci?** — может значить и «как ты?», и «что ты сейчас делаешь?». Вежливо — **Ce mai faceți?**',
      'Без mai — **Ce faci?** — може означати і «як ти?», і «що ти зараз робиш?». Ввічливо — **Ce mai faceți?**',
    ),
    practice: [
      task('Как дела?', 'Як справи?', ['Ce mai faci', 'Ce faci', 'Ce mai faceți']),
      task('Так себе.', 'Так собі.', ['Așa și așa', 'Merge']),
      task('Что нового?', 'Що нового?', ['Ce mai e nou', 'Ce e nou', 'Ce noutăți']),
    ],
  },
  {
    id: 'diminutive',
    kind: 'topic',
    ro: 'căsuță, fetiță',
    tr: bi('уменьшительные суффиксы', 'зменшувальні суфікси'),
    meaning: bi(
      'В румынском почти любое слово можно сделать ласковым, добавив суффикс — как «домик» и «кофеёк». Так говорят очень часто, даже со взрослыми.',
      'У румунській майже будь-яке слово можна зробити пестливим, додавши суфікс — як «будиночок» і «кавуся». Так говорять дуже часто, навіть із дорослими.',
    ),
    examples: [
      w('Vrei o cafeluță?', 'Хочешь кофейку?', 'Хочеш кавусі?'),
      w('Ce fetiță frumoasă!', 'Какая красивая девочка!', 'Яка гарна дівчинка!'),
      w('Avem o căsuță la țară.', 'У нас домик в деревне.', 'У нас будиночок у селі.'),
      w('Mai stai puțintel.', 'Побудь ещё чуточку.', 'Побудь ще трішки.'),
    ],
    expressions: [
      w('casă → căsuță', 'дом → домик', 'будинок → будиночок'),
      w('copil → copilaș', 'ребёнок → малыш', 'дитина → малюк'),
      w('pisică → pisicuță', 'кошка → кошечка', 'кішка → кицюня'),
      w('fată → fetiță', 'девушка → девочка', 'дівчина → дівчинка'),
      w('băiat → băiețel', 'парень → мальчик', 'хлопець → хлопчик'),
      w('cafea → cafeluță', 'кофе → кофеёк', 'кава → кавуся'),
    ],
    remember: bi(
      'Самые частые суффиксы: **-uță, -iță, -ică** (женские: căsuță, fetiță, pâinică) и **-el, -aș, -uț** (мужские и средние: băiețel, copilaș, puișor). Cafeaua — это не уменьшительное, а просто «этот кофе».',
      'Найчастіші суфікси: **-uță, -iță, -ică** (жіночі: căsuță, fetiță, pâinică) і **-el, -aș, -uț** (чоловічі й середні: băiețel, copilaș, puișor). Cafeaua — це не зменшувальне, а просто «ця кава».',
    ),
    practice: [
      task('Домик.', 'Будиночок.', ['Căsuță', 'O căsuță']),
      task('Хочешь кофейку?', 'Хочеш кавусі?', ['Vrei o cafeluță', 'Vrei cafeluță']),
      task('Девочка.', 'Дівчинка.', ['Fetiță', 'O fetiță']),
    ],
  },
  {
    id: 'cand',
    kind: 'topic',
    ro: 'Când?',
    tr: bi('когда?', 'коли?'),
    meaning: bi(
      'Главное слово для вопросов о времени. Произносится коротко: «кынд». С ним строятся de când (с каких пор), până când (до каких пор), cândva (когда-то).',
      'Головне слово для питань про час. Вимовляється коротко: «кинд». З ним будуються de când (відколи), până când (доки), cândva (колись).',
    ),
    examples: [
      w('Când vii?', 'Когда ты придёшь?', 'Коли ти прийдеш?'),
      w('Când începe lecția?', 'Когда начинается урок?', 'Коли починається урок?'),
      w('Când e ziua ta?', 'Когда твой день рождения?', 'Коли твій день народження?'),
      w('De când ești aici?', 'С каких пор ты здесь?', 'Відколи ти тут?'),
    ],
    expressions: [
      w('de când?', 'с каких пор?', 'відколи?'),
      w('până când?', 'до каких пор?', 'доки?'),
      w('cândva', 'когда-то, когда-нибудь', 'колись'),
      w('oricând', 'в любое время', 'будь-коли'),
      w('atunci când', 'тогда, когда', 'тоді, коли'),
    ],
    remember: bi(
      'Când — и вопрос, и союз: **Când ajung acasă, te sun.** — Когда приду домой, позвоню тебе.',
      'Când — і питання, і сполучник: **Când ajung acasă, te sun.** — Коли прийду додому, подзвоню тобі.',
    ),
    practice: [
      task('Когда ты придёшь?', 'Коли ти прийдеш?', ['Când vii', 'Când o să vii', 'Când ajungi']),
      task('С каких пор?', 'Відколи?', ['De când']),
      task('В любое время.', 'Будь-коли.', ['Oricând']),
    ],
  },
  {
    id: 'fraze-simple',
    kind: 'topic',
    ro: 'Cât costă?',
    tr: bi('простые фразы для общения', 'прості фрази для спілкування'),
    meaning: bi(
      'Шесть коротких фраз, которые выручают каждый день: в кафе, на улице, в магазине.',
      'Шість коротких фраз, які рятують щодня: у кафе, на вулиці, у магазині.',
    ),
    examples: [
      w('O masă pentru doi, vă rog.', 'Столик на двоих, пожалуйста.', 'Столик на двох, будь ласка.'),
      w('Cât e ceasul?', 'Который час?', 'Котра година?'),
      w('Vrei o cafea?', 'Хочешь кофе?', 'Хочеш кави?'),
      w('Ieșim afară?', 'Выйдем на улицу?', 'Вийдемо надвір?'),
      w('Unde mergem?', 'Куда мы идём?', 'Куди ми йдемо?'),
      w('Cât costă?', 'Сколько это стоит?', 'Скільки це коштує?'),
    ],
    expressions: [
      w('masă', 'стол, столик', 'стіл, столик'),
      w('ceasul', 'часы (здесь: время)', 'годинник (тут: час)'),
      w('afară', 'на улицу, снаружи', 'надвір, надворі'),
    ],
    remember: bi(
      'Cât — «сколько», и в «который час» тоже: **Cât e ceasul?** — дословно «сколько на часах?».',
      'Cât — «скільки», і в «котра година» теж: **Cât e ceasul?** — дослівно «скільки на годиннику?».',
    ),
    practice: [
      task('Сколько это стоит?', 'Скільки це коштує?', ['Cât costă', 'Cât costă asta']),
      task('Который час?', 'Котра година?', ['Cât e ceasul', 'Cât este ceasul', 'Cât e ora', 'Ce oră e']),
      task('Куда мы идём?', 'Куди ми йдемо?', ['Unde mergem']),
    ],
  },
  {
    id: 'deja-inca',
    kind: 'topic',
    ro: 'deja, încă',
    tr: bi('уже, ещё', 'вже, ще'),
    meaning: bi(
      'Deja — «уже», încă — «ещё», încă nu — «ещё не», nu mai — «больше не». Эти четыре слова путают чаще всего.',
      'Deja — «вже», încă — «ще», încă nu — «ще не», nu mai — «більше не». Ці чотири слова плутають найчастіше.',
    ),
    examples: [
      w('Am mâncat deja.', 'Я уже поел.', 'Я вже поїв.'),
      w('Încă lucrez.', 'Я ещё работаю.', 'Я ще працюю.'),
      w('Nu am terminat încă.', 'Я ещё не закончил.', 'Я ще не закінчив.'),
      w('Nu mai fumez.', 'Я больше не курю.', 'Я більше не курю.'),
      w('Încă o cafea, vă rog.', 'Ещё один кофе, пожалуйста.', 'Ще одну каву, будь ласка.'),
    ],
    expressions: [
      w('deja', 'уже', 'вже'),
      w('încă', 'ещё', 'ще'),
      w('încă nu', 'ещё не', 'ще не'),
      w('nu mai', 'больше не', 'більше не'),
    ],
    remember: bi(
      '«Ещё» в смысле «ещё один, добавьте» — тоже **încă**: încă o bere. А «ещё» в смысле «снова, дополнительно» — **mai**: mai vreau — хочу ещё.',
      '«Ще» у значенні «ще один, додайте» — теж **încă**: încă o bere. А «ще» у значенні «знову, додатково» — **mai**: mai vreau — хочу ще.',
    ),
    practice: [
      task('Я уже поел.', 'Я вже поїв.', ['Am mâncat deja', 'Deja am mâncat']),
      task('Я больше не курю.', 'Я більше не курю.', ['Nu mai fumez']),
      task('Ещё не.', 'Ще ні.', ['Încă nu', 'Nu încă']),
    ],
  },
  {
    id: 'drag',
    kind: 'word',
    ro: 'drag',
    tr: bi('дорогой, милый', 'дорогий, милий'),
    meaning: bi(
      'Тёплое слово о том, что мило сердцу. Dragă — обращение: «дорогая», «милый». А Cu drag! — частый ответ на «спасибо»: «с удовольствием».',
      'Тепле слово про те, що миле серцю. Dragă — звертання: «дорога», «милий». А Cu drag! — частá відповідь на «дякую»: «із задоволенням».',
    ),
    examples: [
      w('Mi-e drag de tine.', 'Ты мне дорог.', 'Ти мені дорогий.'),
      w('Dragă Ana, îți scriu din Iași.', 'Дорогая Анна, пишу тебе из Ясс.', 'Дорога Анно, пишу тобі з Ясс.'),
      w('Mulțumesc! — Cu drag!', 'Спасибо! — С удовольствием!', 'Дякую! — Із задоволенням!'),
      w('Te ascult cu drag.', 'Слушаю тебя с удовольствием.', 'Слухаю тебе із задоволенням.'),
    ],
    expressions: [
      w('cu drag', 'с удовольствием, с любовью', 'із задоволенням, з любов’ю'),
      w('draga mea', 'моя дорогая', 'моя люба'),
      w('dragi prieteni', 'дорогие друзья', 'дорогі друзі'),
      w('dragoste', 'любовь', 'кохання'),
    ],
    remember: bi(
      'Drag меняется как прилагательное: **drag** (м.), **dragă** (ж.), **dragi** (мн.). Любовь — dragoste: Te iubesc — я тебя люблю.',
      'Drag змінюється як прикметник: **drag** (ч.), **dragă** (ж.), **dragi** (мн.). Кохання — dragoste: Te iubesc — я тебе кохаю.',
    ),
    practice: [
      task('С удовольствием!', 'Із задоволенням!', ['Cu drag', 'Cu plăcere']),
      task('Дорогие друзья!', 'Дорогі друзі!', ['Dragi prieteni']),
      task('Ты мне дорог.', 'Ти мені дорогий.', ['Mi-e drag de tine', 'Îmi ești drag', 'Îmi ești dragă', 'Țin la tine']),
    ],
  },
  {
    id: 'prieten',
    kind: 'word',
    ro: 'prieten',
    tr: bi('друг', 'друг'),
    meaning: bi(
      'Друг. Женская форма prietenă — подруга. Важная деталь: «prietena mea» — и «моя подруга», и «моя девушка», понимают по контексту.',
      'Друг. Жіноча форма prietenă — подруга. Важлива деталь: «prietena mea» — і «моя подруга», і «моя дівчина», розуміють з контексту.',
    ),
    examples: [
      w('El e cel mai bun prieten al meu.', 'Он мой лучший друг.', 'Він мій найкращий друг.'),
      w('Am mulți prieteni aici.', 'У меня здесь много друзей.', 'У мене тут багато друзів.'),
      w('Ea e prietena mea.', 'Она моя подруга.', 'Вона моя подруга.'),
      w('Ne-am împrietenit la muncă.', 'Мы подружились на работе.', 'Ми подружилися на роботі.'),
    ],
    expressions: [
      w('prietenă', 'подруга', 'подруга'),
      w('prietenie', 'дружба', 'дружба'),
      w('a se împrieteni', 'подружиться', 'подружитися'),
      w('un prieten bun', 'хороший друг', 'добрий друг'),
    ],
    remember: bi(
      'prieten — prietenă — prieteni — prietene. «Один мой друг» — **un prieten al meu**, «мой друг» (тот самый) — prietenul meu.',
      'prieten — prietenă — prieteni — prietene. «Один мій друг» — **un prieten al meu**, «мій друг» (той самий) — prietenul meu.',
    ),
    practice: [
      task('Он мой лучший друг.', 'Він мій найкращий друг.', ['El e cel mai bun prieten al meu', 'El este cel mai bun prieten al meu', 'E cel mai bun prieten al meu', 'Este cel mai bun prieten al meu']),
      task('У меня много друзей.', 'У мене багато друзів.', ['Am mulți prieteni']),
      task('Дружба.', 'Дружба.', ['Prietenie', 'Prietenia']),
    ],
  },
  {
    id: 'drum',
    kind: 'word',
    ro: 'drum',
    tr: bi('дорога, путь', 'дорога, шлях'),
    meaning: bi(
      'Дорога и путь — и трасса за городом, и путешествие. Drum bun! — «Счастливого пути!»',
      'Дорога й шлях — і траса за містом, і подорож. Drum bun! — «Щасливої дороги!»',
    ),
    examples: [
      w('Drum bun!', 'Счастливого пути!', 'Щасливої дороги!'),
      w('Drumul e lung.', 'Дорога длинная.', 'Дорога довга.'),
      w('Știi drumul spre gară?', 'Ты знаешь дорогу на вокзал?', 'Ти знаєш дорогу до вокзалу?'),
      w('Pe drum am văzut un accident.', 'По дороге я видел аварию.', 'Дорогою я бачив аварію.'),
    ],
    expressions: [
      w('drum bun', 'счастливого пути', 'щасливої дороги'),
      w('pe drum', 'по дороге', 'дорогою'),
      w('în drum spre casă', 'по пути домой', 'дорогою додому'),
      w('a porni la drum', 'отправиться в путь', 'вирушити в дорогу'),
    ],
    remember: bi(
      'Drum — **средний род**: drumul, drumuri. Улица в городе — другое слово: **stradă**.',
      'Drum — **середній рід**: drumul, drumuri. Вулиця в місті — інше слово: **stradă**.',
    ),
    practice: [
      task('Счастливого пути!', 'Щасливої дороги!', ['Drum bun']),
      task('Дорога длинная.', 'Дорога довга.', ['Drumul e lung', 'Drumul este lung']),
      task('По пути домой.', 'Дорогою додому.', ['În drum spre casă', 'Pe drum spre casă', 'Pe drumul spre casă']),
    ],
  },
  {
    id: 'bani',
    kind: 'word',
    ro: 'bani',
    tr: bi('деньги', 'гроші'),
    meaning: bi(
      'Деньги — всегда во множественном числе. Валюта Румынии — лей: un leu, doi lei. Ban — монетка, сотая часть лея.',
      'Гроші — завжди в множині. Валюта Румунії — лей: un leu, doi lei. Ban — монетка, сота частина лея.',
    ),
    examples: [
      w('Nu am bani.', 'У меня нет денег.', 'У мене немає грошей.'),
      w('Plătesc cu cardul sau cash?', 'Платить картой или наличными?', 'Платити карткою чи готівкою?'),
      w('Costă zece lei.', 'Стоит десять лей.', 'Коштує десять лей.'),
      w('Banii nu aduc fericirea.', 'Деньги не приносят счастья.', 'Гроші не приносять щастя.'),
    ],
    expressions: [
      w('bani mărunți', 'мелочь', 'дрібні гроші'),
      w('restul', 'сдача', 'решта'),
      w('a economisi bani', 'копить деньги', 'заощаджувати гроші'),
      w('lei', 'леи (валюта)', 'леї (валюта)'),
    ],
    remember: bi(
      '«Эти деньги» — **banii**. С числами: un leu, **doi lei**, douăzeci **de** lei — от 20 появляется de.',
      '«Ці гроші» — **banii**. З числами: un leu, **doi lei**, douăzeci **de** lei — від 20 з’являється de.',
    ),
    practice: [
      task('У меня нет денег.', 'У мене немає грошей.', ['Nu am bani', 'N-am bani']),
      task('Десять лей.', 'Десять лей.', ['Zece lei']),
      task('Мелочь.', 'Дрібні гроші.', ['Bani mărunți', 'Mărunți', 'Mărunțiș']),
    ],
  },
  {
    id: 'vreme',
    kind: 'word',
    ro: 'vreme',
    tr: bi('погода; время, пора', 'погода; час, пора'),
    meaning: bi(
      'Прежде всего — погода: Ce vreme e azi? А ещё «время, пора» в выражениях: de multă vreme — давно, pe vremuri — в старые времена.',
      'Передусім — погода: Ce vreme e azi? А ще «час, пора» у виразах: de multă vreme — давно, pe vremuri — у давні часи.',
    ),
    examples: [
      w('Ce vreme e azi?', 'Какая сегодня погода?', 'Яка сьогодні погода?'),
      w('E vreme frumoasă.', 'Хорошая погода.', 'Гарна погода.'),
      w('Nu ne-am văzut de multă vreme.', 'Мы давно не виделись.', 'Ми давно не бачилися.'),
      w('Pe vremuri, aici era un sat.', 'Когда-то здесь была деревня.', 'Колись тут було село.'),
    ],
    expressions: [
      w('vreme rea', 'плохая погода', 'погана погода'),
      w('prognoza meteo', 'прогноз погоды', 'прогноз погоди'),
      w('de multă vreme', 'давно', 'давно'),
      w('pe vremuri', 'в старые времена', 'у давні часи'),
    ],
    remember: bi(
      'Vreme — **женский род**: vremea (эта погода). Время на часах — не vreme, а **ora**: Cât e ora?',
      'Vreme — **жіночий рід**: vremea (ця погода). Час на годиннику — не vreme, а **ora**: Cât e ora?',
    ),
    practice: [
      task('Какая сегодня погода?', 'Яка сьогодні погода?', ['Ce vreme e azi', 'Ce vreme este azi', 'Ce vreme e astăzi', 'Cum e vremea azi']),
      task('Мы давно не виделись.', 'Ми давно не бачилися.', ['Nu ne-am văzut de multă vreme', 'Nu ne-am văzut de mult', 'Nu ne-am mai văzut de mult']),
      task('Плохая погода.', 'Погана погода.', ['Vreme rea', 'E vreme rea', 'Vremea e rea']),
    ],
  },
  {
    id: 'treaba',
    kind: 'word',
    ro: 'treabă',
    tr: bi('дело, работа (разг.)', 'справа, робота (розм.)'),
    meaning: bi(
      'Разговорное «дело»: am treabă — я занят, bună treabă — молодец, nu e treaba ta — не твоё дело.',
      'Розмовне «справа»: am treabă — я зайнятий, bună treabă — молодець, nu e treaba ta — не твоя справа.',
    ),
    examples: [
      w('Azi am treabă.', 'Сегодня я занят.', 'Сьогодні я зайнятий.'),
      w('Bună treabă!', 'Молодец! Отличная работа!', 'Молодець! Чудова робота!'),
      w('Nu e treaba ta!', 'Не твоё дело!', 'Не твоя справа!'),
      w('Ce treabă ai la bancă?', 'Какое у тебя дело в банке?', 'Яка в тебе справа в банку?'),
    ],
    expressions: [
      w('am treabă', 'я занят, у меня дела', 'я зайнятий, у мене справи'),
      w('bună treabă', 'молодец', 'молодець'),
      w('treaba mea', 'моё дело', 'моя справа'),
      w('treburi prin casă', 'домашние дела', 'хатні справи'),
    ],
    remember: bi(
      'Treabă — **женский род**: treaba, treburi. «Как дела?» — не «ce treabă?», а **Ce mai faci?**',
      'Treabă — **жіночий рід**: treaba, treburi. «Як справи?» — не «ce treabă?», а **Ce mai faci?**',
    ),
    practice: [
      task('Я занят.', 'Я зайнятий.', ['Am treabă', 'Sunt ocupat', 'Sunt ocupată']),
      task('Молодец! (хорошая работа)', 'Молодець! (гарна робота)', ['Bună treabă', 'Bravo']),
      task('Не твоё дело!', 'Не твоя справа!', ['Nu e treaba ta', 'Nu-i treaba ta', 'Nu este treaba ta']),
    ],
  },
  {
    id: 'sanatate',
    kind: 'word',
    ro: 'sănătate',
    tr: bi('здоровье; «будь здоров!»', 'здоров’я; «будь здоровий!»'),
    meaning: bi(
      'Здоровье. Sănătate! говорят, когда кто-то чихнул, и как тост. Multă sănătate! — пожелание к любому празднику.',
      'Здоров’я. Sănătate! кажуть, коли хтось чхнув, і як тост. Multă sănătate! — побажання до будь-якого свята.',
    ),
    examples: [
      w('Sănătate! — Mersi.', 'Будь здоров! — Спасибо.', 'Будь здоровий! — Дякую.'),
      w('Sănătatea e cel mai important lucru.', 'Здоровье — самое важное.', 'Здоров’я — найважливіше.'),
      w('Vă doresc multă sănătate!', 'Желаю вам крепкого здоровья!', 'Бажаю вам міцного здоров’я!'),
      w('Cum stai cu sănătatea?', 'Как у тебя со здоровьем?', 'Як у тебе зі здоров’ям?'),
    ],
    expressions: [
      w('multă sănătate', 'крепкого здоровья', 'міцного здоров’я'),
      w('sănătos', 'здоровый', 'здоровий'),
      w('să fii sănătos', 'будь здоров (пожелание)', 'будь здоровий (побажання)'),
      w('asigurare de sănătate', 'медицинская страховка', 'медичне страхування'),
    ],
    remember: bi(
      'Sănătate — **женский род**. Прилагательное — **sănătos, sănătoasă**: Ești sănătos? — Ты здоров?',
      'Sănătate — **жіночий рід**. Прикметник — **sănătos, sănătoasă**: Ești sănătos? — Ти здоровий?',
    ),
    practice: [
      task('Будь здоров! (при чихании)', 'Будь здоровий! (коли чхнули)', ['Sănătate', 'Noroc']),
      task('Крепкого здоровья!', 'Міцного здоров’я!', ['Multă sănătate', 'Multă sănătate vă doresc', 'Vă doresc multă sănătate']),
      task('Здоровье — самое важное.', 'Здоров’я — найважливіше.', ['Sănătatea e cel mai important lucru', 'Sănătatea este cel mai important lucru', 'Sănătatea e cel mai important', 'Sănătatea este cel mai important']),
    ],
  },
  {
    id: 'bucurie',
    kind: 'word',
    ro: 'bucurie',
    tr: bi('радость', 'радість'),
    meaning: bi(
      'Радость. От неё — очень частое mă bucur: «я рад». Mă bucur să te văd! — Рад тебя видеть!',
      'Радість. Від неї — дуже часте mă bucur: «я радий». Mă bucur să te văd! — Радий тебе бачити!',
    ),
    examples: [
      w('Ce bucurie să te văd!', 'Какая радость тебя видеть!', 'Яка радість тебе бачити!'),
      w('Mă bucur să te cunosc.', 'Рад с тобой познакомиться.', 'Радий з тобою познайомитися.'),
      w('Copiii ne aduc bucurie.', 'Дети приносят нам радость.', 'Діти приносять нам радість.'),
      w('Te ajut cu bucurie.', 'Я с радостью тебе помогу.', 'Я з радістю тобі допоможу.'),
    ],
    expressions: [
      w('cu bucurie', 'с радостью', 'з радістю'),
      w('mă bucur', 'я рад', 'я радий'),
      w('a se bucura', 'радоваться', 'радіти'),
      w('bucuros', 'радостный, довольный', 'радісний, задоволений'),
    ],
    remember: bi(
      '«Я рад» — не «sunt bucurie», а **mă bucur**: ne bucurăm (мы рады), te bucuri (ты рад). Чему — **de**: mă bucur de vacanță.',
      '«Я радий» — не «sunt bucurie», а **mă bucur**: ne bucurăm (ми раді), te bucuri (ти радий). Чому — **de**: mă bucur de vacanță.',
    ),
    practice: [
      task('Рад тебя видеть!', 'Радий тебе бачити!', ['Mă bucur să te văd']),
      task('С радостью!', 'З радістю!', ['Cu bucurie', 'Cu plăcere', 'Cu drag']),
      task('Рад познакомиться.', 'Радий познайомитися.', ['Mă bucur să te cunosc', 'Mă bucur să vă cunosc', 'Îmi pare bine', 'Încântat', 'Încântată', 'Mă bucur de cunoștință']),
    ],
  },
  {
    id: 'masa',
    kind: 'word',
    ro: 'masă',
    tr: bi('стол; еда', 'стіл; їжа'),
    meaning: bi(
      'И стол, и сама еда за ним: la masă! — к столу!, a lua masa — поесть, пообедать.',
      'І стіл, і сама їжа за ним: la masă! — до столу!, a lua masa — поїсти, пообідати.',
    ),
    examples: [
      w('Cartea e pe masă.', 'Книга на столе.', 'Книжка на столі.'),
      w('Hai la masă!', 'Иди к столу! Ужинать!', 'Іди до столу! Вечеряти!'),
      w('Am luat masa de prânz.', 'Я пообедал.', 'Я пообідав.'),
      w('Rezerv o masă pentru patru.', 'Бронирую столик на четверых.', 'Бронюю столик на чотирьох.'),
    ],
    expressions: [
      w('masa de prânz', 'обед', 'обід'),
      w('masa de seară', 'ужин', 'вечеря'),
      w('a pune masa', 'накрыть на стол', 'накрити на стіл'),
      w('la masă', 'за столом; к столу', 'за столом; до столу'),
    ],
    remember: bi(
      'Masă — **женский род**: masa, mese. Три приёма пищи: micul dejun (завтрак), prânzul (обед), cina (ужин).',
      'Masă — **жіночий рід**: masa, mese. Три прийоми їжі: micul dejun (сніданок), prânzul (обід), cina (вечеря).',
    ),
    practice: [
      task('К столу!', 'До столу!', ['La masă', 'Hai la masă', 'Poftiți la masă']),
      task('Накрыть на стол.', 'Накрити на стіл.', ['A pune masa', 'Pune masa', 'Să pun masa']),
      task('Обед.', 'Обід.', ['Masa de prânz', 'Prânzul', 'Prânz']),
    ],
  },
  {
    id: 'zi',
    kind: 'word',
    ro: 'zi',
    tr: bi('день', 'день'),
    meaning: bi(
      'День. O zi bună! — «Хорошего дня!» — говорят на прощание в магазине и на работе. Ziua ta — «твой день рождения».',
      'День. O zi bună! — «Гарного дня!» — кажуть на прощання в магазині й на роботі. Ziua ta — «твій день народження».',
    ),
    examples: [
      w('O zi bună!', 'Хорошего дня!', 'Гарного дня!'),
      w('Ce zi e azi?', 'Какой сегодня день?', 'Який сьогодні день?'),
      w('Lucrez opt ore pe zi.', 'Я работаю восемь часов в день.', 'Я працюю вісім годин на день.'),
      w('La mulți ani de ziua ta!', 'С днём рождения!', 'З днем народження!'),
    ],
    expressions: [
      w('o zi bună', 'хорошего дня', 'гарного дня'),
      w('zi liberă', 'выходной', 'вихідний'),
      w('zi de zi', 'изо дня в день', 'щодня'),
      w('ziua de naștere', 'день рождения', 'день народження'),
    ],
    remember: bi(
      'Zi — **женский род**: ziua (этот день), zile (дни). Bună ziua! — «Добрый день!» — это тоже ziua.',
      'Zi — **жіночий рід**: ziua (цей день), zile (дні). Bună ziua! — «Добрий день!» — це теж ziua.',
    ),
    practice: [
      task('Хорошего дня!', 'Гарного дня!', ['O zi bună', 'Zi bună', 'Să ai o zi bună', 'O zi frumoasă']),
      task('Какой сегодня день?', 'Який сьогодні день?', ['Ce zi e azi', 'Ce zi este azi', 'Ce zi e astăzi', 'Ce zi este astăzi']),
      task('Выходной.', 'Вихідний.', ['Zi liberă', 'O zi liberă']),
    ],
  },
  {
    id: 'gata',
    kind: 'phrase',
    ro: 'Gata!',
    tr: bi('готово!; всё!; хватит!', 'готово!; усе!; досить!'),
    meaning: bi(
      'Одно из самых частых слов: «готов», «всё, закончил», «хватит». И вопрос: Ești gata? — Ты готов?',
      'Одне з найчастіших слів: «готовий», «усе, закінчив», «досить». І питання: Ești gata? — Ти готовий?',
    ),
    examples: [
      w('Gata, am terminat!', 'Всё, я закончил!', 'Усе, я закінчив!'),
      w('Ești gata?', 'Ты готов?', 'Ти готовий?'),
      w('Mâncarea e gata.', 'Еда готова.', 'Їжа готова.'),
      w('Gata, ajunge!', 'Всё, хватит!', 'Усе, досить!'),
    ],
    expressions: [
      w('ești gata?', 'ты готов?', 'ти готовий?'),
      w('gata de plecare', 'готов к отъезду', 'готовий до від’їзду'),
      w('ajunge', 'хватит, достаточно', 'досить, вистачить'),
      w('am terminat', 'я закончил', 'я закінчив'),
    ],
    remember: bi(
      'Gata **не меняется**: el e gata, ea e gata, ei sunt gata — «готов, готова, готовы» одним словом.',
      'Gata **не змінюється**: el e gata, ea e gata, ei sunt gata — «готовий, готова, готові» одним словом.',
    ),
    practice: [
      task('Ты готов?', 'Ти готовий?', ['Ești gata', 'Tu ești gata', 'Ești pregătit', 'Ești pregătită']),
      task('Еда готова.', 'Їжа готова.', ['Mâncarea e gata', 'Mâncarea este gata']),
      task('Всё, хватит!', 'Усе, досить!', ['Gata, ajunge', 'Gata', 'Ajunge']),
    ],
  },
  {
    id: 'vai',
    kind: 'phrase',
    ro: 'Vai de mine!',
    tr: bi('ой-ой!, боже мой!', 'ой-ой!, боже мій!'),
    meaning: bi(
      'Возглас испуга, сочувствия или удивления — «ой, мамочки!». Короткое Vai! бывает и радостным: Vai, ce frumos! — Ой, как красиво!',
      'Вигук переляку, співчуття чи здивування — «ой, матінко!». Коротке Vai! буває й радісним: Vai, ce frumos! — Ой, як гарно!',
    ),
    examples: [
      w('Vai de mine, am uitat cheile!', 'Ой-ой, я забыл ключи!', 'Ой-ой, я забув ключі!'),
      w('Vai, ce frumos!', 'Ой, как красиво!', 'Ой, як гарно!'),
      w('Vai, îmi pare rău!', 'Ой, мне так жаль!', 'Ой, мені так шкода!'),
    ],
    expressions: [
      w('vai!', 'ой!', 'ой!'),
      w('Doamne!', 'господи!', 'господи!'),
      w('ce păcat', 'как жаль', 'як шкода'),
      w('ce frumos', 'как красиво', 'як гарно'),
    ],
    remember: bi(
      'Всё решает интонация: **Vai, ce frumos!** — восторг, **Vai de mine!** — испуг или сочувствие.',
      'Усе вирішує інтонація: **Vai, ce frumos!** — захват, **Vai de mine!** — переляк чи співчуття.',
    ),
    practice: [
      task('Ой, как красиво!', 'Ой, як гарно!', ['Vai, ce frumos', 'Ce frumos']),
      task('Боже мой!', 'Боже мій!', ['Vai de mine', 'Doamne', 'Dumnezeule']),
      task('Как жаль.', 'Як шкода.', ['Ce păcat', 'Păcat']),
    ],
  },
  {
    id: 'las-o-balta',
    kind: 'phrase',
    ro: 'Las-o baltă!',
    tr: bi('да брось!, забей!', 'та облиш!, забий!'),
    meaning: bi(
      'Дословно «оставь её в луже». Так советуют бросить затею или не переживать из-за мелочи.',
      'Дослівно «залиш її в калюжі». Так радять кинути затію або не перейматися дрібницею.',
    ),
    examples: [
      w('Las-o baltă, nu merită.', 'Да брось, оно того не стоит.', 'Та облиш, воно того не варте.'),
      w('Am lăsat-o baltă cu dieta.', 'Я забросил диету.', 'Я закинув дієту.'),
      w('Las-o baltă, mergem mâine.', 'Забей, пойдём завтра.', 'Забий, підемо завтра.'),
    ],
    expressions: [
      w('a lăsa baltă', 'бросить (дело)', 'кинути (справу)'),
      w('nu merită', 'не стоит того', 'не варто'),
      w('nu-ți bate capul', 'не забивай голову', 'не забивай собі голову'),
    ],
    remember: bi(
      'Las-o = lasă + o («оставь её»). Нескольким или на «вы» — **lăsați-o baltă**.',
      'Las-o = lasă + o («залиш її»). Кільком або на «ви» — **lăsați-o baltă**.',
    ),
    practice: [
      task('Да брось!', 'Та облиш!', ['Las-o baltă', 'Lasă', 'Lasă-l baltă']),
      task('Оно того не стоит.', 'Воно того не варте.', ['Nu merită']),
      task('Не забивай голову.', 'Не забивай собі голову.', ['Nu-ți bate capul', 'Nu-ți face griji']),
    ],
  },
  {
    id: 'doamne-fereste',
    kind: 'phrase',
    ro: 'Doamne ferește!',
    tr: bi('не дай бог!', 'не дай боже!'),
    meaning: bi(
      'Говорят, когда даже думать не хочется о плохом: «боже упаси». Звучит постоянно, чаще как привычка, чем как молитва.',
      'Кажуть, коли навіть думати не хочеться про погане: «боже борони». Звучить постійно, частіше як звичка, ніж як молитва.',
    ),
    examples: [
      w('Să nu se întâmple, Doamne ferește!', 'Лишь бы не случилось, не дай бог!', 'Аби не сталося, не дай боже!'),
      w('Slavă Domnului, toți sunt bine.', 'Слава богу, все в порядке.', 'Слава богу, усі гаразд.'),
      w('Doamne ajută!', 'С богом! Помоги господи!', 'З богом! Допоможи господи!'),
    ],
    expressions: [
      w('Doamne ferește', 'не дай бог', 'не дай боже'),
      w('slavă Domnului', 'слава богу', 'слава богу'),
      w('Doamne ajută', 'с богом', 'з богом'),
      w('din fericire', 'к счастью', 'на щастя'),
    ],
    remember: bi(
      'Doamne — звательная форма от Domnul (господь), как «Господи». Отсюда и **slavă Domnului** — «слава богу».',
      'Doamne — кличний відмінок від Domnul (господь), як «Господи». Звідси й **slavă Domnului** — «слава богу».',
    ),
    practice: [
      task('Не дай бог!', 'Не дай боже!', ['Doamne ferește', 'Ferească Dumnezeu', 'Ferească Sfântul']),
      task('Слава богу!', 'Слава богу!', ['Slavă Domnului', 'Mulțumesc lui Dumnezeu', 'Slavă Cerului']),
      task('К счастью.', 'На щастя.', ['Din fericire']),
    ],
  },
  {
    id: 'multumesc-frumos',
    kind: 'phrase',
    ro: 'Mulțumesc frumos!',
    tr: bi('большое спасибо!', 'щиро дякую!'),
    meaning: bi(
      'Дословно «спасибо красиво» — так румыны говорят «большое спасибо». В ответ — Cu plăcere! или Cu drag!',
      'Дослівно «дякую гарно» — так румуни кажуть «щиро дякую». У відповідь — Cu plăcere! або Cu drag!',
    ),
    examples: [
      w('Mulțumesc frumos pentru ajutor!', 'Большое спасибо за помощь!', 'Щиро дякую за допомогу!'),
      w('Mulțumesc! — Cu plăcere.', 'Спасибо! — Пожалуйста.', 'Дякую! — Будь ласка.'),
      w('Vă mulțumesc din suflet.', 'Благодарю вас от всей души.', 'Дякую вам від щирого серця.'),
    ],
    expressions: [
      w('mersi', 'спасибо (разг.)', 'дякую (розм.)'),
      w('cu plăcere', 'пожалуйста (в ответ)', 'будь ласка (у відповідь)'),
      w('n-ai pentru ce', 'не за что', 'нема за що'),
      w('din suflet', 'от души', 'від душі'),
    ],
    remember: bi(
      'За что — **pentru**: mulțumesc pentru tot. На «вы» — **vă mulțumesc**, на «ты» — îți mulțumesc.',
      'За що — **pentru**: mulțumesc pentru tot. На «ви» — **vă mulțumesc**, на «ти» — îți mulțumesc.',
    ),
    practice: [
      task('Большое спасибо!', 'Щиро дякую!', ['Mulțumesc frumos', 'Mulțumesc mult', 'Mersi mult', 'Mersi frumos']),
      task('Не за что.', 'Нема за що.', ['N-ai pentru ce', 'Nu ai pentru ce', 'N-aveți pentru ce', 'Cu plăcere']),
      task('Спасибо за помощь.', 'Дякую за допомогу.', ['Mulțumesc pentru ajutor', 'Mersi pentru ajutor', 'Mulțumesc frumos pentru ajutor']),
    ],
  },
  {
    id: 'pe-curand',
    kind: 'phrase',
    ro: 'Pe curând!',
    tr: bi('до скорого!', 'до скорого!'),
    meaning: bi(
      'Прощание, когда скоро увидитесь. Curând — «скоро». Рядом целая семья прощаний: от Pa! до La revedere.',
      'Прощання, коли скоро побачитеся. Curând — «скоро». Поруч ціла родина прощань: від Pa! до La revedere.',
    ),
    examples: [
      w('Pe curând, dragilor!', 'До скорого, дорогие!', 'До скорого, любі!'),
      w('Ne vedem mâine!', 'Увидимся завтра!', 'Побачимося завтра!'),
      w('La revedere, doamnă!', 'До свидания!', 'До побачення!'),
      w('Noapte bună!', 'Спокойной ночи!', 'На добраніч!'),
    ],
    expressions: [
      w('pa', 'пока', 'бувай'),
      w('la revedere', 'до свидания', 'до побачення'),
      w('ne vedem', 'увидимся', 'побачимося'),
      w('o seară bună', 'хорошего вечера', 'гарного вечора'),
    ],
    remember: bi(
      '**Pa** и **ciao** — только своим. С незнакомыми и старшими — **La revedere**.',
      '**Pa** і **ciao** — тільки своїм. З незнайомими й старшими — **La revedere**.',
    ),
    practice: [
      task('До скорого!', 'До скорого!', ['Pe curând']),
      task('Увидимся завтра!', 'Побачимося завтра!', ['Ne vedem mâine']),
      task('Спокойной ночи!', 'На добраніч!', ['Noapte bună']),
    ],
  },
  {
    id: 'dumneavoastra',
    kind: 'topic',
    ro: 'tu, dumneavoastră',
    tr: bi('«ты» и «вы»', '«ти» і «ви»'),
    meaning: bi(
      'Как и у нас, на «вы» говорят с незнакомыми, со старшими, в магазине и в учреждениях. Вежливое «вы» — dumneavoastră, а глагол стоит во множественном: sunteți, aveți, doriți.',
      'Як і в нас, на «ви» говорять із незнайомими, зі старшими, у магазині й в установах. Ввічливе «ви» — dumneavoastră, а дієслово стоїть у множині: sunteți, aveți, doriți.',
    ),
    examples: [
      w('Ce doriți?', 'Что желаете?', 'Що бажаєте?'),
      w('Dumneavoastră sunteți doamna Popescu?', 'Вы госпожа Попеску?', 'Ви пані Попеску?'),
      w('Vă rog să luați loc.', 'Присаживайтесь, пожалуйста.', 'Сідайте, будь ласка.'),
      w('Putem să ne tutuim?', 'Можно перейти на «ты»?', 'Можна перейти на «ти»?'),
    ],
    expressions: [
      w('domnule', 'господин (обращение)', 'пане (звертання)'),
      w('doamnă', 'госпожа', 'пані'),
      w('vă rog', 'прошу вас', 'прошу вас'),
      w('a se tutui', 'быть на «ты»', 'бути на «ти»'),
    ],
    remember: bi(
      'Само dumneavoastră часто опускают — хватает формы глагола: **Unde lucrați?** (Где вы работаете?). «Вас, вам» — **vă**: vă mulțumesc.',
      'Саме dumneavoastră часто пропускають — вистачає форми дієслова: **Unde lucrați?** (Де ви працюєте?). «Вас, вам» — **vă**: vă mulțumesc.',
    ),
    practice: [
      task('Где вы работаете?', 'Де ви працюєте?', ['Unde lucrați', 'Dumneavoastră unde lucrați', 'Unde lucrați dumneavoastră']),
      task('Прошу вас.', 'Прошу вас.', ['Vă rog']),
      task('Что желаете?', 'Що бажаєте?', ['Ce doriți']),
    ],
  },
  {
    id: 'mai',
    kind: 'topic',
    ro: 'mai',
    tr: bi('ещё; больше не; более', 'ще; більше не; більш'),
    meaning: bi(
      'Маленькое слово с кучей работы: «ещё» (mai vrei?), «больше не» (nu mai), «более» в сравнениях (mai bine — лучше).',
      'Маленьке слово з купою роботи: «ще» (mai vrei?), «більше не» (nu mai), «більш» у порівняннях (mai bine — краще).',
    ),
    examples: [
      w('Mai vrei?', 'Хочешь ещё?', 'Хочеш ще?'),
      w('Nu mai am bani.', 'У меня больше нет денег.', 'У мене більше немає грошей.'),
      w('E mai bine așa.', 'Так лучше.', 'Так краще.'),
      w('Mai încet, vă rog.', 'Помедленнее, пожалуйста.', 'Повільніше, будь ласка.'),
    ],
    expressions: [
      w('nu mai', 'больше не', 'більше не'),
      w('mai mult', 'больше', 'більше'),
      w('mai bine', 'лучше', 'краще'),
      w('cel mai', 'самый', 'най-'),
    ],
    remember: bi(
      'Сравнение: **mai mare** — больше, **cel mai mare** — самый большой. Nu mai + глагол — «больше не»: nu mai fumez.',
      'Порівняння: **mai mare** — більший, **cel mai mare** — найбільший. Nu mai + дієслово — «більше не»: nu mai fumez.',
    ),
    practice: [
      task('Хочешь ещё?', 'Хочеш ще?', ['Mai vrei']),
      task('Так лучше.', 'Так краще.', ['E mai bine așa', 'Așa e mai bine', 'Este mai bine așa', 'Așa este mai bine']),
      task('Помедленнее, пожалуйста.', 'Повільніше, будь ласка.', ['Mai încet, vă rog', 'Mai rar, vă rog']),
    ],
  },
  {
    id: 'nu-inteleg',
    kind: 'topic',
    ro: 'Nu înțeleg.',
    tr: bi('если не понимаешь', 'якщо не розумієш'),
    meaning: bi(
      'Фразы, которые спасают разговор, пока вы учите язык: переспросить, попросить медленнее, узнать слово.',
      'Фрази, які рятують розмову, поки ви вчите мову: перепитати, попросити повільніше, дізнатися слово.',
    ),
    examples: [
      w('Nu înțeleg.', 'Я не понимаю.', 'Я не розумію.'),
      w('Puteți repeta, vă rog?', 'Можете повторить, пожалуйста?', 'Можете повторити, будь ласка?'),
      w('Vorbiți mai rar, vă rog.', 'Говорите помедленнее, пожалуйста.', 'Говоріть повільніше, будь ласка.'),
      w('Ce înseamnă cuvântul ăsta?', 'Что значит это слово?', 'Що означає це слово?'),
      w('Cum se spune în română?', 'Как это сказать по-румынски?', 'Як це сказати румунською?'),
    ],
    expressions: [
      w('încă o dată', 'ещё раз', 'ще раз'),
      w('mai rar', 'помедленнее', 'повільніше'),
      w('cum se scrie?', 'как это пишется?', 'як це пишеться?'),
      w('vorbiți engleză?', 'вы говорите по-английски?', 'ви розмовляєте англійською?'),
    ],
    remember: bi(
      '«Помедленнее» по-румынски — **mai rar** (дословно «пореже») или **mai încet**. «Ещё раз» — **încă o dată**.',
      '«Повільніше» румунською — **mai rar** (дослівно «рідше») або **mai încet**. «Ще раз» — **încă o dată**.',
    ),
    practice: [
      task('Я не понимаю.', 'Я не розумію.', ['Nu înțeleg']),
      task('Можете повторить?', 'Можете повторити?', ['Puteți repeta', 'Puteți să repetați', 'Puteți repeta, vă rog', 'Repetați, vă rog']),
      task('Что это значит?', 'Що це означає?', ['Ce înseamnă asta', 'Ce înseamnă']),
    ],
  },
  {
    id: 'bun-bine',
    kind: 'topic',
    ro: 'bun, bine',
    tr: bi('«хороший» и «хорошо»', '«добрий» і «добре»'),
    meaning: bi(
      'Bun — прилагательное (какой?), bine — наречие (как?). Путают постоянно, хотя правило простое.',
      'Bun — прикметник (який?), bine — прислівник (як?). Плутають постійно, хоча правило просте.',
    ),
    examples: [
      w('E un om bun.', 'Он хороший человек.', 'Він добра людина.'),
      w('Mâncarea e bună.', 'Еда вкусная.', 'Їжа смачна.'),
      w('Vorbești bine românește.', 'Ты хорошо говоришь по-румынски.', 'Ти добре говориш румунською.'),
      w('Bine ai venit!', 'Добро пожаловать!', 'Ласкаво просимо!'),
    ],
    expressions: [
      w('bună ziua', 'добрый день', 'добрий день'),
      w('bun venit', 'добро пожаловать', 'ласкаво просимо'),
      w('foarte bine', 'очень хорошо', 'дуже добре'),
      w('sunt bine', 'я в порядке', 'я в порядку'),
    ],
    remember: bi(
      '**bun, bună, buni, bune** — меняется как прилагательное. **Bine** — не меняется. «Вкусно» — тоже bun: e bun (о еде).',
      '**bun, bună, buni, bune** — змінюється як прикметник. **Bine** — не змінюється. «Смачно» — теж bun: e bun (про їжу).',
    ),
    practice: [
      task('Он хороший человек.', 'Він добра людина.', ['E un om bun', 'Este un om bun']),
      task('Ты хорошо говоришь.', 'Ти добре говориш.', ['Vorbești bine']),
      task('Еда вкусная.', 'Їжа смачна.', ['Mâncarea e bună', 'Mâncarea este bună', 'Mâncarea e gustoasă', 'Mâncarea este gustoasă']),
    ],
  },
  {
    id: 'caut-de-lucru',
    kind: 'phrase',
    theme: 'work',
    ro: 'Caut de lucru.',
    tr: bi('ищу работу', 'шукаю роботу'),
    meaning: bi(
      'Самый простой способ сказать «ищу работу». Рядом — loc de muncă (рабочее место), anunț (объявление), angajator (работодатель).',
      'Найпростіший спосіб сказати «шукаю роботу». Поруч — loc de muncă (робоче місце), anunț (оголошення), angajator (роботодавець).',
    ),
    examples: [
      w('Caut de lucru ca șofer.', 'Ищу работу водителем.', 'Шукаю роботу водієм.'),
      w('Angajați?', 'Вы нанимаете? Есть работа?', 'Ви наймаєте? Є робота?'),
      w('Am văzut anunțul pe internet.', 'Я видел объявление в интернете.', 'Я бачив оголошення в інтернеті.'),
      w('Vă trimit CV-ul pe email.', 'Я пришлю вам резюме на почту.', 'Я надішлю вам резюме на пошту.'),
    ],
    expressions: [
      w('loc de muncă', 'рабочее место, вакансия', 'робоче місце, вакансія'),
      w('anunț de angajare', 'объявление о работе', 'оголошення про роботу'),
      w('angajator', 'работодатель', 'роботодавець'),
      w('a se angaja', 'устроиться на работу', 'влаштуватися на роботу'),
    ],
    remember: bi(
      '«Ищу работу водителем» — **caut de lucru ca șofer**: профессия идёт после **ca**. Angajez — «я нанимаю», mă angajez — «я устраиваюсь».',
      '«Шукаю роботу водієм» — **caut de lucru ca șofer**: професія йде після **ca**. Angajez — «я наймаю», mă angajez — «я влаштовуюся».',
    ),
    practice: [
      task('Я ищу работу.', 'Я шукаю роботу.', ['Caut de lucru', 'Caut un loc de muncă', 'Caut o slujbă', 'Caut muncă']),
      task('Вы нанимаете?', 'Ви наймаєте?', ['Angajați']),
      task('Ищу работу водителем.', 'Шукаю роботу водієм.', ['Caut de lucru ca șofer', 'Caut un loc de muncă ca șofer']),
    ],
  },
  {
    id: 'interviu',
    kind: 'topic',
    theme: 'work',
    ro: 'La interviu',
    tr: bi('на собеседовании', 'на співбесіді'),
    meaning: bi(
      'Фразы, которые почти наверняка понадобятся на собеседовании: об опыте, о начале работы и о зарплате.',
      'Фрази, які майже напевно знадобляться на співбесіді: про досвід, про початок роботи й про зарплату.',
    ),
    examples: [
      w('Am experiență de trei ani.', 'У меня три года опыта.', 'У мене три роки досвіду.'),
      w('Am lucrat ca bucătar în Italia.', 'Я работал поваром в Италии.', 'Я працював кухарем в Італії.'),
      w('Când pot începe?', 'Когда я могу начать?', 'Коли я можу почати?'),
      w('Care este salariul?', 'Какая зарплата?', 'Яка зарплата?'),
      w('Sunt disponibil de luni.', 'Я могу выйти с понедельника.', 'Я можу вийти з понеділка.'),
    ],
    expressions: [
      w('interviu de angajare', 'собеседование', 'співбесіда'),
      w('experiență', 'опыт', 'досвід'),
      w('perioadă de probă', 'испытательный срок', 'випробувальний термін'),
      w('disponibil', 'свободен, готов выйти', 'вільний, готовий вийти'),
    ],
    remember: bi(
      'Опыт «сколько?» — **de**: experiență **de** doi ani. Кем работал — **ca**: am lucrat **ca** bucătar.',
      'Досвід «скільки?» — **de**: experiență **de** doi ani. Ким працював — **ca**: am lucrat **ca** bucătar.',
    ),
    practice: [
      task('У меня три года опыта.', 'У мене три роки досвіду.', ['Am experiență de trei ani', 'Am trei ani de experiență']),
      task('Когда я могу начать?', 'Коли я можу почати?', ['Când pot începe', 'Când pot să încep']),
      task('Какая зарплата?', 'Яка зарплата?', ['Care este salariul', 'Care e salariul', 'Cât este salariul', 'Cât e salariul']),
    ],
  },
  {
    id: 'salariu',
    kind: 'word',
    theme: 'work',
    ro: 'salariu',
    tr: bi('зарплата', 'зарплата'),
    meaning: bi(
      'Зарплата. В Румынии важно различать brut (до налогов) и net (на руки): в договоре обычно пишут брутто.',
      'Зарплата. У Румунії важливо розрізняти brut (до податків) і net (на руки): у договорі зазвичай пишуть брутто.',
    ),
    examples: [
      w('Salariul net este de patru mii de lei.', 'Зарплата на руки — четыре тысячи лей.', 'Зарплата на руки — чотири тисячі лей.'),
      w('Când primim salariul?', 'Когда мы получаем зарплату?', 'Коли ми отримуємо зарплату?'),
      w('Salariul se plătește pe card.', 'Зарплата перечисляется на карту.', 'Зарплата перераховується на картку.'),
      w('Aș vrea o mărire de salariu.', 'Я бы хотел повышения зарплаты.', 'Я хотів би підвищення зарплати.'),
    ],
    expressions: [
      w('salariul net', 'зарплата на руки', 'зарплата на руки'),
      w('salariul brut', 'зарплата до налогов', 'зарплата до податків'),
      w('salariul minim', 'минимальная зарплата', 'мінімальна зарплата'),
      w('fluturaș de salariu', 'расчётный листок', 'розрахунковий листок'),
    ],
    remember: bi(
      'Salariu — **средний род**: salariul, salarii. «Получать зарплату» — **a primi salariul** или разговорное **a lua salariul**.',
      'Salariu — **середній рід**: salariul, salarii. «Отримувати зарплату» — **a primi salariul** або розмовне **a lua salariul**.',
    ),
    practice: [
      task('Когда мы получаем зарплату?', 'Коли ми отримуємо зарплату?', ['Când primim salariul', 'Când luăm salariul']),
      task('Зарплата на руки.', 'Зарплата на руки.', ['Salariul net', 'Salariu net']),
      task('Минимальная зарплата.', 'Мінімальна зарплата.', ['Salariul minim', 'Salariu minim']),
    ],
  },
  {
    id: 'program',
    kind: 'word',
    theme: 'work',
    ro: 'program',
    tr: bi('график работы', 'графік роботи'),
    meaning: bi(
      'Программа, но чаще всего — график: program de lucru — рабочие часы, в том числе магазина или учреждения.',
      'Програма, але найчастіше — графік: program de lucru — робочі години, зокрема магазину чи установи.',
    ),
    examples: [
      w('Ce program aveți?', 'Какой у вас график?', 'Який у вас графік?'),
      w('Lucrez de la opt la patru.', 'Я работаю с восьми до четырёх.', 'Я працюю з восьмої до четвертої.'),
      w('Săptămâna asta am tura de noapte.', 'На этой неделе я в ночную смену.', 'Цього тижня я на нічній зміні.'),
      w('Plătiți orele suplimentare?', 'Вы оплачиваете сверхурочные?', 'Ви оплачуєте понаднормові?'),
    ],
    expressions: [
      w('program de lucru', 'рабочий график', 'робочий графік'),
      w('normă întreagă', 'полный день', 'повний день'),
      w('jumătate de normă', 'полставки', 'пів ставки'),
      w('tura de noapte', 'ночная смена', 'нічна зміна'),
      w('ore suplimentare', 'сверхурочные', 'понаднормові'),
    ],
    remember: bi(
      'Program — **средний род**: programul, programe. «С… до…» — **de la… la…**: de la nouă la cinci.',
      'Program — **середній рід**: programul, programe. «З… до…» — **de la… la…**: de la nouă la cinci.',
    ),
    practice: [
      task('Какой у вас график?', 'Який у вас графік?', ['Ce program aveți', 'Care este programul', 'Care e programul', 'Care e programul dumneavoastră']),
      task('Я работаю с восьми до четырёх.', 'Я працюю з восьмої до четвертої.', ['Lucrez de la opt la patru', 'Lucrez de la ora opt la ora patru', 'Lucrez de la opt până la patru']),
      task('Ночная смена.', 'Нічна зміна.', ['Tura de noapte', 'Tură de noapte']),
    ],
  },
  {
    id: 'concediu',
    kind: 'word',
    theme: 'work',
    ro: 'concediu',
    tr: bi('отпуск', 'відпустка'),
    meaning: bi(
      'Отпуск от работы — и оплачиваемый, и по болезни. Не путайте с vacanță: так говорят о каникулах и отдыхе вообще.',
      'Відпустка від роботи — і оплачувана, і через хворобу. Не плутайте з vacanță: так кажуть про канікули й відпочинок загалом.',
    ),
    examples: [
      w('Sunt în concediu până luni.', 'Я в отпуске до понедельника.', 'Я у відпустці до понеділка.'),
      w('Aș vrea să-mi iau concediu în august.', 'Я бы хотел взять отпуск в августе.', 'Я хотів би взяти відпустку в серпні.'),
      w('Am concediu medical o săptămână.', 'Я на больничном неделю.', 'Я на лікарняному тиждень.'),
      w('Câte zile de concediu am?', 'Сколько у меня дней отпуска?', 'Скільки в мене днів відпустки?'),
    ],
    expressions: [
      w('concediu de odihnă', 'ежегодный отпуск', 'щорічна відпустка'),
      w('concediu medical', 'больничный', 'лікарняний'),
      w('concediu fără plată', 'отпуск за свой счёт', 'відпустка за власний рахунок'),
      w('zi liberă', 'выходной, отгул', 'вихідний, відгул'),
    ],
    remember: bi(
      'Внимание: **concediat** — это «уволенный», а не «в отпуске». В отпуске — **în concediu**.',
      'Увага: **concediat** — це «звільнений», а не «у відпустці». У відпустці — **în concediu**.',
    ),
    practice: [
      task('Я в отпуске.', 'Я у відпустці.', ['Sunt în concediu']),
      task('Больничный.', 'Лікарняний.', ['Concediu medical', 'Concediul medical']),
      task('Сколько у меня дней отпуска?', 'Скільки в мене днів відпустки?', ['Câte zile de concediu am', 'Câte zile de concediu mai am']),
    ],
  },
  {
    id: 'anunt-sef',
    kind: 'topic',
    theme: 'work',
    ro: 'Întârzii puțin.',
    tr: bi('предупредить начальника', 'попередити начальника'),
    meaning: bi(
      'Короткие сообщения начальнику или коллегам: опаздываю, заболел, уйду пораньше. Их удобно отправить в мессенджере.',
      'Короткі повідомлення начальнику чи колегам: запізнююся, захворів, піду раніше. Їх зручно надіслати в месенджері.',
    ),
    examples: [
      w('Bună dimineața, întârzii zece minute.', 'Доброе утро, опаздываю на десять минут.', 'Доброго ранку, запізнююся на десять хвилин.'),
      w('Sunt bolnav, azi nu pot veni.', 'Я заболел, сегодня не смогу прийти.', 'Я захворів, сьогодні не зможу прийти.'),
      w('Pot să plec mai devreme azi?', 'Можно мне сегодня уйти пораньше?', 'Можна мені сьогодні піти раніше?'),
      w('Am o programare la doctor.', 'У меня запись к врачу.', 'У мене запис до лікаря.'),
    ],
    expressions: [
      w('șeful', 'начальник', 'начальник'),
      w('colegii', 'коллеги', 'колеги'),
      w('mai devreme', 'пораньше', 'раніше'),
      w('a-și da demisia', 'уволиться (по своему желанию)', 'звільнитися (за власним бажанням)'),
    ],
    remember: bi(
      'На сколько опаздываю — без предлога: **întârzii zece minute**. Уволиться самому — **îmi dau demisia**, уволить — **a concedia**.',
      'На скільки запізнююся — без прийменника: **întârzii zece minute**. Звільнитися самому — **îmi dau demisia**, звільнити — **a concedia**.',
    ),
    practice: [
      task('Опаздываю на десять минут.', 'Запізнююся на десять хвилин.', ['Întârzii zece minute', 'Întârzii 10 minute', 'Întârzii cu zece minute']),
      task('Я заболел.', 'Я захворів.', ['Sunt bolnav', 'Sunt bolnavă', 'M-am îmbolnăvit']),
      task('Можно мне уйти пораньше?', 'Можна мені піти раніше?', ['Pot să plec mai devreme', 'Pot pleca mai devreme']),
    ],
  },
  {
    id: 'acte',
    kind: 'word',
    theme: 'docs',
    ro: 'acte',
    tr: bi('документы', 'документи'),
    meaning: bi(
      'Главное слово в любом учреждении: «Ce acte trebuie?» — «Какие документы нужны?». Один документ — un act.',
      'Головне слово в будь-якій установі: «Ce acte trebuie?» — «Які документи потрібні?». Один документ — un act.',
    ),
    examples: [
      w('Ce acte trebuie să aduc?', 'Какие документы мне нужно принести?', 'Які документи мені треба принести?'),
      w('Actele, vă rog.', 'Ваши документы, пожалуйста.', 'Ваші документи, будь ласка.'),
      w('Mi-am pierdut actele.', 'Я потерял документы.', 'Я загубив документи.'),
      w('Aveți o copie după pașaport?', 'У вас есть копия паспорта?', 'У вас є копія паспорта?'),
    ],
    expressions: [
      w('act de identitate', 'удостоверение личности', 'посвідчення особи'),
      w('buletin', 'удостоверение личности (разг.)', 'посвідчення особи (розм.)'),
      w('copie legalizată', 'нотариальная копия', 'нотаріальна копія'),
      w('traducere legalizată', 'заверенный перевод', 'засвідчений переклад'),
      w('cazier judiciar', 'справка о несудимости', 'довідка про несудимість'),
    ],
    remember: bi(
      'Act — **средний род**: actul, acte. «Копия чего» — **copie după**: copie după pașaport. Румынский паспорт-ID в разговоре — **buletinul**.',
      'Act — **середній рід**: actul, acte. «Копія чого» — **copie după**: copie după pașaport. Румунське посвідчення в розмові — **buletinul**.',
    ),
    practice: [
      task('Какие документы нужны?', 'Які документи потрібні?', ['Ce acte trebuie', 'Ce acte sunt necesare', 'Ce acte îmi trebuie', 'De ce acte am nevoie']),
      task('Я потерял документы.', 'Я загубив документи.', ['Mi-am pierdut actele', 'Am pierdut actele']),
      task('Копия паспорта.', 'Копія паспорта.', ['Copie după pașaport', 'O copie după pașaport', 'Copia pașaportului', 'Copie a pașaportului']),
    ],
  },
  {
    id: 'dosar',
    kind: 'word',
    theme: 'docs',
    ro: 'dosar',
    tr: bi('папка документов, дело', 'тека документів, справа'),
    meaning: bi(
      'Пакет документов, который вы сдаёте. Легендарный «dosar cu șină» — картонная папка-скоросшиватель: румынские учреждения до сих пор часто просят принести документы именно в ней.',
      'Пакет документів, який ви здаєте. Легендарний «dosar cu șină» — картонна тека-швидкозшивач: румунські установи досі часто просять принести документи саме в ній.',
    ),
    examples: [
      w('Aduceți actele într-un dosar cu șină.', 'Принесите документы в папке-скоросшивателе.', 'Принесіть документи в теці-швидкозшивачі.'),
      w('Dosarul este complet.', 'Пакет документов полный.', 'Пакет документів повний.'),
      w('Vă lipsește un act din dosar.', 'В вашем пакете не хватает одного документа.', 'У вашому пакеті бракує одного документа.'),
      w('Care este numărul dosarului?', 'Какой номер дела?', 'Який номер справи?'),
    ],
    expressions: [
      w('dosar cu șină', 'папка-скоросшиватель', 'тека-швидкозшивач'),
      w('dosar complet', 'полный пакет документов', 'повний пакет документів'),
      w('a depune dosarul', 'подать документы', 'подати документи'),
      w('numărul dosarului', 'номер дела', 'номер справи'),
    ],
    remember: bi(
      'Dosar — **средний род**: dosarul, dosare. «Мне не хватает…» — **îmi lipsește** (одного) / **îmi lipsesc** (нескольких).',
      'Dosar — **середній рід**: dosarul, dosare. «Мені бракує…» — **îmi lipsește** (одного) / **îmi lipsesc** (кількох).',
    ),
    practice: [
      task('Пакет документов полный.', 'Пакет документів повний.', ['Dosarul este complet', 'Dosarul e complet']),
      task('Подать документы.', 'Подати документи.', ['A depune dosarul', 'Depun dosarul', 'A depune actele']),
      task('Какой номер дела?', 'Який номер справи?', ['Care este numărul dosarului', 'Care e numărul dosarului', 'Ce număr are dosarul']),
    ],
  },
  {
    id: 'programare',
    kind: 'word',
    theme: 'docs',
    ro: 'programare',
    tr: bi('запись (на приём)', 'запис (на прийом)'),
    meaning: bi(
      'Запись на приём — к врачу, в миграционную службу, в банк. Во многих учреждениях без programare не принимают.',
      'Запис на прийом — до лікаря, до міграційної служби, у банк. У багатьох установах без programare не приймають.',
    ),
    examples: [
      w('Am o programare la ora zece.', 'У меня запись на десять часов.', 'У мене запис на десяту годину.'),
      w('Cum fac o programare?', 'Как мне записаться на приём?', 'Як мені записатися на прийом?'),
      w('Programarea se face online.', 'Запись делается онлайн.', 'Запис робиться онлайн.'),
      w('Vreau să anulez programarea.', 'Я хочу отменить запись.', 'Я хочу скасувати запис.'),
    ],
    expressions: [
      w('a face o programare', 'записаться на приём', 'записатися на прийом'),
      w('a anula', 'отменить', 'скасувати'),
      w('a amâna', 'перенести, отложить', 'перенести, відкласти'),
      w('fără programare', 'без записи', 'без запису'),
    ],
    remember: bi(
      'Programare — **женский род**: programarea, programări. Время — **la ora**: la ora zece, la ora două.',
      'Programare — **жіночий рід**: programarea, programări. Час — **la ora**: la ora zece, la ora două.',
    ),
    practice: [
      task('У меня запись на десять часов.', 'У мене запис на десяту годину.', ['Am o programare la ora zece', 'Am programare la ora zece', 'Am o programare la zece', 'Am programare la zece']),
      task('Как мне записаться?', 'Як мені записатися?', ['Cum fac o programare', 'Cum pot face o programare', 'Cum mă programez']),
      task('Я хочу отменить запись.', 'Я хочу скасувати запис.', ['Vreau să anulez programarea', 'Aș vrea să anulez programarea']),
    ],
  },
  {
    id: 'cerere',
    kind: 'word',
    theme: 'docs',
    ro: 'cerere',
    tr: bi('заявление', 'заява'),
    meaning: bi(
      'Заявление — на вид на жительство, на работу, на отпуск. Его заполняют (a completa), подписывают (a semna) и подают (a depune).',
      'Заява — на посвідку на проживання, на роботу, на відпустку. Її заповнюють (a completa), підписують (a semna) і подають (a depune).',
    ),
    examples: [
      w('Completați cererea, vă rog.', 'Заполните заявление, пожалуйста.', 'Заповніть заяву, будь ласка.'),
      w('Semnați aici și aici.', 'Подпишите здесь и здесь.', 'Підпишіть тут і тут.'),
      w('Unde depun cererea?', 'Куда подать заявление?', 'Куди подати заяву?'),
      w('Cererea a fost aprobată.', 'Заявление одобрено.', 'Заяву схвалено.'),
    ],
    expressions: [
      w('formular', 'бланк, анкета', 'бланк, анкета'),
      w('a completa', 'заполнить', 'заповнити'),
      w('semnătură', 'подпись', 'підпис'),
      w('ștampilă', 'печать', 'печатка'),
    ],
    remember: bi(
      'Cerere — **женский род**: cererea, cereri. От глагола **a cere** — просить, требовать. Отказ — **respinsă**, одобрение — **aprobată**.',
      'Cerere — **жіночий рід**: cererea, cereri. Від дієслова **a cere** — просити, вимагати. Відмова — **respinsă**, схвалення — **aprobată**.',
    ),
    practice: [
      task('Куда подать заявление?', 'Куди подати заяву?', ['Unde depun cererea', 'Unde se depune cererea', 'Unde pot depune cererea']),
      task('Заполните бланк.', 'Заповніть бланк.', ['Completați formularul', 'Completați formularul, vă rog']),
      task('Подпишите здесь.', 'Підпишіть тут.', ['Semnați aici', 'Semnați aici, vă rog']),
    ],
  },
  {
    id: 'permis',
    kind: 'word',
    theme: 'docs',
    ro: 'permis',
    tr: bi('разрешение; права', 'дозвіл; права'),
    meaning: bi(
      'Разрешение: permis de ședere — вид на жительство, permis de muncă — разрешение на работу, permis de conducere — водительские права.',
      'Дозвіл: permis de ședere — посвідка на проживання, permis de muncă — дозвіл на роботу, permis de conducere — водійські права.',
    ),
    examples: [
      w('Am permis de ședere.', 'У меня есть вид на жительство.', 'У мене є посвідка на проживання.'),
      w('Permisul expiră luna viitoare.', 'Разрешение истекает в следующем месяце.', 'Дозвіл спливає наступного місяця.'),
      w('Trebuie să prelungesc permisul.', 'Мне нужно продлить разрешение.', 'Мені треба продовжити дозвіл.'),
      w('Aveți permis de conducere?', 'У вас есть водительские права?', 'У вас є водійські права?'),
    ],
    expressions: [
      w('permis de ședere', 'вид на жительство', 'посвідка на проживання'),
      w('permis de muncă', 'разрешение на работу', 'дозвіл на роботу'),
      w('permis de conducere', 'водительские права', 'водійські права'),
      w('a prelungi', 'продлить', 'продовжити'),
    ],
    remember: bi(
      'Permis — **средний род**: permisul, permise. Истекает — **expiră**, срок действия — **valabil până la**…',
      'Permis — **середній рід**: permisul, permise. Спливає — **expiră**, термін дії — **valabil până la**…',
    ),
    practice: [
      task('У меня есть вид на жительство.', 'У мене є посвідка на проживання.', ['Am permis de ședere', 'Am un permis de ședere']),
      task('Водительские права.', 'Водійські права.', ['Permis de conducere', 'Permisul de conducere']),
      task('Мне нужно продлить разрешение.', 'Мені треба продовжити дозвіл.', ['Trebuie să prelungesc permisul', 'Trebuie să îmi prelungesc permisul', 'Trebuie să-mi prelungesc permisul']),
    ],
  },
  {
    id: 'date-personale',
    kind: 'topic',
    theme: 'docs',
    ro: 'Numele și prenumele?',
    tr: bi('личные данные в анкете', 'особисті дані в анкеті'),
    meaning: bi(
      'Вопросы, которые задают в любом окошке, и поля любого бланка. Nume — фамилия, prenume — имя.',
      'Питання, які ставлять у будь-якому віконці, і поля будь-якого бланка. Nume — прізвище, prenume — ім’я.',
    ),
    examples: [
      w('Numele și prenumele, vă rog.', 'Фамилия и имя, пожалуйста.', 'Прізвище та ім’я, будь ласка.'),
      w('Care este data nașterii?', 'Какая дата рождения?', 'Яка дата народження?'),
      w('Ce cetățenie aveți?', 'Какое у вас гражданство?', 'Яке у вас громадянство?'),
      w('Unde locuiți?', 'Где вы живёте?', 'Де ви проживаєте?'),
      w('Aveți un număr de telefon?', 'У вас есть номер телефона?', 'У вас є номер телефону?'),
    ],
    expressions: [
      w('nume', 'фамилия', 'прізвище'),
      w('prenume', 'имя', 'ім’я'),
      w('data nașterii', 'дата рождения', 'дата народження'),
      w('cetățenie', 'гражданство', 'громадянство'),
      w('domiciliu', 'адрес регистрации', 'адреса реєстрації'),
    ],
    remember: bi(
      'Внимание: **nume** — это фамилия, а имя — **prenume**. **CNP** (cod numeric personal) — личный номер, он есть и в виде на жительство.',
      'Увага: **nume** — це прізвище, а ім’я — **prenume**. **CNP** (cod numeric personal) — особистий номер, він є й у посвідці на проживання.',
    ),
    practice: [
      task('Фамилия и имя.', 'Прізвище та ім’я.', ['Numele și prenumele', 'Nume și prenume']),
      task('Дата рождения.', 'Дата народження.', ['Data nașterii', 'Data de naștere']),
      task('Какое у вас гражданство?', 'Яке у вас громадянство?', ['Ce cetățenie aveți', 'Care este cetățenia dumneavoastră', 'Care e cetățenia dumneavoastră']),
    ],
  },
  {
    id: 'la-ghiseu',
    kind: 'topic',
    theme: 'docs',
    ro: 'La ghișeu',
    tr: bi('в окошке учреждения', 'у віконці установи'),
    meaning: bi(
      'Ghișeu — окошко, стойка в учреждении, банке, на почте. Здесь фразы, которые помогают пройти очередь без стресса.',
      'Ghișeu — віконце, стійка в установі, банку, на пошті. Тут фрази, які допомагають пройти чергу без стресу.',
    ),
    examples: [
      w('Cine este ultimul la rând?', 'Кто последний в очереди?', 'Хто останній у черзі?'),
      w('La ce ghișeu trebuie să merg?', 'К какому окошку мне подойти?', 'До якого віконця мені підійти?'),
      w('Trebuie să plătesc o taxă?', 'Нужно заплатить пошлину?', 'Треба сплатити мито?'),
      w('Când este gata documentul?', 'Когда будет готов документ?', 'Коли буде готовий документ?'),
    ],
    expressions: [
      w('ghișeu', 'окошко, стойка', 'віконце, стійка'),
      w('coadă', 'очередь', 'черга'),
      w('bon de ordine', 'талон очереди', 'талон черги'),
      w('taxă', 'пошлина, сбор', 'мито, збір'),
    ],
    remember: bi(
      'Очередь — **coadă** (дословно «хвост»): stau la coadă — стою в очереди. «Кто последний?» — **Cine e ultimul?**',
      'Черга — **coadă** (дослівно «хвіст»): stau la coadă — стою в черзі. «Хто останній?» — **Cine e ultimul?**',
    ),
    practice: [
      task('Кто последний в очереди?', 'Хто останній у черзі?', ['Cine este ultimul la rând', 'Cine e ultimul la rând', 'Cine e ultimul', 'Cine este ultimul', 'Cine e ultimul la coadă']),
      task('Я стою в очереди.', 'Я стою в черзі.', ['Stau la coadă', 'Stau la rând']),
      task('Когда будет готов документ?', 'Коли буде готовий документ?', ['Când este gata documentul', 'Când e gata documentul', 'Când va fi gata documentul']),
    ],
  },
  {
    id: 'ma-doare',
    kind: 'phrase',
    theme: 'health',
    ro: 'Mă doare…',
    tr: bi('у меня болит…', 'у мене болить…'),
    meaning: bi(
      'Главная фраза у врача. Дословно «меня болит»: кто болит — то, что болит, а «меня» — mă.',
      'Головна фраза в лікаря. Дослівно «мене болить»: болить те, що болить, а «мене» — mă.',
    ),
    examples: [
      w('Mă doare capul.', 'У меня болит голова.', 'У мене болить голова.'),
      w('Mă doare gâtul.', 'У меня болит горло.', 'У мене болить горло.'),
      w('Mă doare burta.', 'У меня болит живот.', 'У мене болить живіт.'),
      w('Mă dor dinții.', 'У меня болят зубы.', 'У мене болять зуби.'),
      w('Unde vă doare?', 'Где у вас болит?', 'Де у вас болить?'),
    ],
    expressions: [
      w('mă doare spatele', 'болит спина', 'болить спина'),
      w('mă doare urechea', 'болит ухо', 'болить вухо'),
      w('durere', 'боль', 'біль'),
      w('te doare?', 'тебе больно?', 'тобі боляче?'),
    ],
    remember: bi(
      'Одно болит — **doare**, несколько — **dor**: mă doare capul, mă **dor** picioarele. Кого: mă (меня), te (тебя), îl / o (его / её), vă (вас).',
      'Одне болить — **doare**, кілька — **dor**: mă doare capul, mă **dor** picioarele. Кого: mă (мене), te (тебе), îl / o (його / її), vă (вас).',
    ),
    practice: [
      task('У меня болит голова.', 'У мене болить голова.', ['Mă doare capul']),
      task('У меня болят зубы.', 'У мене болять зуби.', ['Mă dor dinții']),
      task('Где у вас болит?', 'Де у вас болить?', ['Unde vă doare', 'Unde te doare']),
    ],
  },
  {
    id: 'simptome',
    kind: 'topic',
    theme: 'health',
    ro: 'Am febră.',
    tr: bi('симптомы', 'симптоми'),
    meaning: bi(
      'Как описать, что с вами: температура, кашель, простуда, тошнота. Почти всё строится через am (у меня есть) или mi-e (мне).',
      'Як описати, що з вами: температура, кашель, застуда, нудота. Майже все будується через am (у мене є) або mi-e (мені).',
    ),
    examples: [
      w('Am febră de ieri.', 'У меня температура со вчерашнего дня.', 'У мене температура від учора.'),
      w('Am răcit.', 'Я простыл.', 'Я застудився.'),
      w('Tușesc toată noaptea.', 'Я кашляю всю ночь.', 'Я кашляю всю ніч.'),
      w('Mi-e rău.', 'Мне плохо.', 'Мені погано.'),
      w('Am greață și amețeli.', 'Меня тошнит и кружится голова.', 'Мене нудить і паморочиться голова.'),
    ],
    expressions: [
      w('febră', 'температура, жар', 'температура, жар'),
      w('tuse', 'кашель', 'кашель'),
      w('răceală', 'простуда', 'застуда'),
      w('greață', 'тошнота', 'нудота'),
      w('nas înfundat', 'заложенный нос', 'закладений ніс'),
    ],
    remember: bi(
      '«Со вчерашнего дня» — **de ieri**, «уже три дня» — **de trei zile**. Mi-e rău — «мне плохо», а mi-e bine — «мне хорошо».',
      '«Від учора» — **de ieri**, «уже три дні» — **de trei zile**. Mi-e rău — «мені погано», а mi-e bine — «мені добре».',
    ),
    practice: [
      task('У меня температура.', 'У мене температура.', ['Am febră', 'Am temperatură']),
      task('Я простыл.', 'Я застудився.', ['Am răcit', 'Sunt răcit', 'Sunt răcită']),
      task('Мне плохо.', 'Мені погано.', ['Mi-e rău', 'Nu mă simt bine', 'Îmi este rău']),
    ],
  },
  {
    id: 'la-cabinet',
    kind: 'topic',
    theme: 'health',
    ro: 'Ce vă supără?',
    tr: bi('что спросит врач', 'що спитає лікар'),
    meaning: bi(
      'Вопросы и просьбы, которые вы услышите в кабинете. Если узнать их заранее, приём пройдёт спокойнее.',
      'Питання й прохання, які ви почуєте в кабінеті. Якщо знати їх заздалегідь, прийом мине спокійніше.',
    ),
    examples: [
      w('Ce vă supără?', 'Что вас беспокоит?', 'Що вас турбує?'),
      w('De când aveți durerea?', 'С какого времени у вас боль?', 'Відколи у вас біль?'),
      w('Respirați adânc.', 'Глубоко вдохните.', 'Глибоко вдихніть.'),
      w('Luați vreun medicament?', 'Вы принимаете какие-нибудь лекарства?', 'Ви приймаєте якісь ліки?'),
      w('Sunteți alergic la ceva?', 'У вас есть на что-то аллергия?', 'У вас є на щось алергія?'),
    ],
    expressions: [
      w('cabinet', 'кабинет врача', 'кабінет лікаря'),
      w('consultație', 'осмотр, консультация', 'огляд, консультація'),
      w('tensiunea', 'давление', 'тиск'),
      w('diagnostic', 'диагноз', 'діагноз'),
    ],
    remember: bi(
      'A supăra — «сердить» и «беспокоить»: **Ce vă supără?** — что вас беспокоит. Ответ: «Mă doare…», «Am…».',
      'A supăra — «сердити» і «турбувати»: **Ce vă supără?** — що вас турбує. Відповідь: «Mă doare…», «Am…».',
    ),
    practice: [
      task('Что вас беспокоит?', 'Що вас турбує?', ['Ce vă supără', 'Ce vă deranjează']),
      task('Глубоко вдохните.', 'Глибоко вдихніть.', ['Respirați adânc']),
      task('Давление.', 'Тиск.', ['Tensiunea', 'Tensiune', 'Tensiunea arterială']),
    ],
  },
  {
    id: 'medic-de-familie',
    kind: 'word',
    theme: 'health',
    ro: 'medic de familie',
    tr: bi('семейный врач', 'сімейний лікар'),
    meaning: bi(
      'В Румынии всё начинается с семейного врача: он лечит, выписывает рецепты и даёт направление (trimitere) к специалисту.',
      'У Румунії все починається з сімейного лікаря: він лікує, виписує рецепти й дає направлення (trimitere) до спеціаліста.',
    ),
    examples: [
      w('Vreau să mă înscriu la un medic de familie.', 'Я хочу прикрепиться к семейному врачу.', 'Я хочу записатися до сімейного лікаря.'),
      w('Am nevoie de o trimitere la cardiolog.', 'Мне нужно направление к кардиологу.', 'Мені потрібне направлення до кардіолога.'),
      w('Medicul are program după-amiaza.', 'Врач принимает после обеда.', 'Лікар приймає після обіду.'),
    ],
    expressions: [
      w('trimitere', 'направление', 'направлення'),
      w('specialist', 'узкий специалист', 'вузький спеціаліст'),
      w('a se înscrie', 'записаться, прикрепиться', 'записатися, прикріпитися'),
      w('dentist', 'стоматолог', 'стоматолог'),
    ],
    remember: bi(
      'Врач — и **medic**, и **doctor**, оба слова обычны. Обращение: **domnule doctor**, **doamna doctor**.',
      'Лікар — і **medic**, і **doctor**, обидва слова звичайні. Звертання: **domnule doctor**, **doamna doctor**.',
    ),
    practice: [
      task('Семейный врач.', 'Сімейний лікар.', ['Medic de familie', 'Medicul de familie']),
      task('Мне нужно направление.', 'Мені потрібне направлення.', ['Am nevoie de o trimitere', 'Am nevoie de trimitere', 'Îmi trebuie o trimitere']),
      task('Стоматолог.', 'Стоматолог.', ['Dentist', 'Dentistul', 'Medic dentist', 'Stomatolog']),
    ],
  },
  {
    id: 'analize',
    kind: 'word',
    theme: 'health',
    ro: 'analize',
    tr: bi('анализы', 'аналізи'),
    meaning: bi(
      'Анализы — всегда во множественном: a face analize — сдать анализы. Кровь часто сдают натощак — pe nemâncate.',
      'Аналізи — завжди в множині: a face analize — здати аналізи. Кров часто здають натще — pe nemâncate.',
    ),
    examples: [
      w('Trebuie să fac analize de sânge.', 'Мне нужно сдать анализ крови.', 'Мені треба здати аналіз крові.'),
      w('Veniți pe nemâncate.', 'Приходите натощак.', 'Приходьте натще.'),
      w('Când sunt gata rezultatele?', 'Когда будут готовы результаты?', 'Коли будуть готові результати?'),
      w('Analizele sunt bune.', 'Анализы хорошие.', 'Аналізи добрі.'),
    ],
    expressions: [
      w('analize de sânge', 'анализ крови', 'аналіз крові'),
      w('pe nemâncate', 'натощак', 'натще'),
      w('rezultatele', 'результаты', 'результати'),
      w('radiografie', 'рентген', 'рентген'),
    ],
    remember: bi(
      'Analiză — **женский род**, во мн. — analize. «Сдать анализы» — не «a da», а **a face analize** («сделать анализы»).',
      'Analiză — **жіночий рід**, у мн. — analize. «Здати аналізи» — не «a da», а **a face analize** («зробити аналізи»).',
    ),
    practice: [
      task('Мне нужно сдать анализ крови.', 'Мені треба здати аналіз крові.', ['Trebuie să fac analize de sânge', 'Trebuie să îmi fac analizele de sânge', 'Trebuie să-mi fac analizele de sânge']),
      task('Натощак.', 'Натще.', ['Pe nemâncate', 'Pe stomacul gol']),
      task('Когда будут готовы результаты?', 'Коли будуть готові результати?', ['Când sunt gata rezultatele', 'Când vor fi gata rezultatele']),
    ],
  },
  {
    id: 'alergie',
    kind: 'word',
    theme: 'health',
    ro: 'alergie',
    tr: bi('аллергия', 'алергія'),
    meaning: bi(
      'Об аллергии важно уметь сказать сразу — врачу, в аптеке, в ресторане. «У меня аллергия на…» — sunt alergic la…',
      'Про алергію важливо вміти сказати одразу — лікарю, в аптеці, у ресторані. «У мене алергія на…» — sunt alergic la…',
    ),
    examples: [
      w('Sunt alergic la penicilină.', 'У меня аллергия на пенициллин.', 'У мене алергія на пеніцилін.'),
      w('Sunt alergică la nuci.', 'У меня аллергия на орехи.', 'У мене алергія на горіхи.'),
      w('Am o alergie de sezon.', 'У меня сезонная аллергия.', 'У мене сезонна алергія.'),
    ],
    expressions: [
      w('alergic la', 'аллергия на (о мужчине)', 'алергія на (про чоловіка)'),
      w('alergică la', 'аллергия на (о женщине)', 'алергія на (про жінку)'),
      w('polen', 'пыльца', 'пилок'),
      w('mâncărime', 'зуд', 'свербіж'),
    ],
    remember: bi(
      'По-румынски говорят «я аллергичен»: мужчина — **sunt alergic**, женщина — **sunt alergică**. На что — **la**.',
      'Румунською кажуть «я алергічний»: чоловік — **sunt alergic**, жінка — **sunt alergică**. На що — **la**.',
    ),
    practice: [
      task('У меня аллергия на пенициллин.', 'У мене алергія на пеніцилін.', ['Sunt alergic la penicilină', 'Sunt alergică la penicilină', 'Am alergie la penicilină']),
      task('У меня аллергия на орехи.', 'У мене алергія на горіхи.', ['Sunt alergic la nuci', 'Sunt alergică la nuci', 'Am alergie la nuci']),
      task('Пыльца.', 'Пилок.', ['Polen', 'Polenul']),
    ],
  },
  {
    id: 'asigurat',
    kind: 'word',
    theme: 'health',
    ro: 'asigurat',
    tr: bi('застрахован', 'застрахований'),
    meaning: bi(
      'Первый вопрос в поликлинике: Sunteți asigurat? — Вы застрахованы? Если вы работаете по договору, страховку платят с зарплаты.',
      'Перше питання в поліклініці: Sunteți asigurat? — Ви застраховані? Якщо ви працюєте за договором, страховку сплачують із зарплати.',
    ),
    examples: [
      w('Sunteți asigurat?', 'Вы застрахованы?', 'Ви застраховані?'),
      w('Da, lucrez cu contract de muncă.', 'Да, я работаю по трудовому договору.', 'Так, я працюю за трудовим договором.'),
      w('Aveți cardul de sănătate?', 'У вас есть карта медицинского страхования?', 'У вас є картка медичного страхування?'),
      w('Consultația costă o sută de lei.', 'Приём стоит сто лей.', 'Прийом коштує сто лей.'),
    ],
    expressions: [
      w('asigurare medicală', 'медицинская страховка', 'медичне страхування'),
      w('cardul de sănătate', 'карта медстрахования', 'картка медичного страхування'),
      w('gratuit', 'бесплатно', 'безкоштовно'),
      w('clinică privată', 'частная клиника', 'приватна клініка'),
    ],
    remember: bi(
      'Asigurat (м.), **asigurată** (ж.). В частной клинике страховку не спрашивают, но платите вы сами — **contra cost** (платно).',
      'Asigurat (ч.), **asigurată** (ж.). У приватній клініці страховку не питають, але платите ви самі — **contra cost** (платно).',
    ),
    practice: [
      task('Вы застрахованы?', 'Ви застраховані?', ['Sunteți asigurat', 'Sunteți asigurată', 'Ești asigurat']),
      task('Бесплатно.', 'Безкоштовно.', ['Gratuit', 'Gratis']),
      task('Частная клиника.', 'Приватна клініка.', ['Clinică privată', 'Clinica privată', 'O clinică privată']),
    ],
  },
  {
    id: 'urgenta',
    kind: 'phrase',
    theme: 'health',
    ro: 'Sunați la 112!',
    tr: bi('звоните 112!', 'телефонуйте 112!'),
    meaning: bi(
      '112 — единый номер экстренной помощи в Румынии и во всём ЕС: скорая, полиция, пожарные. Звонок бесплатный.',
      '112 — єдиний номер екстреної допомоги в Румунії та в усьому ЄС: швидка, поліція, пожежники. Дзвінок безкоштовний.',
    ),
    examples: [
      w('Chemați o ambulanță!', 'Вызовите скорую!', 'Викличте швидку!'),
      w('Ajutor!', 'Помогите!', 'Допоможіть!'),
      w('A leșinat.', 'Он потерял сознание.', 'Він знепритомнів.'),
      w('Unde este spitalul?', 'Где больница?', 'Де лікарня?'),
    ],
    expressions: [
      w('ambulanța', 'скорая помощь', 'швидка допомога'),
      w('spital', 'больница', 'лікарня'),
      w('urgență', 'срочный случай; приёмный покой', 'невідкладний випадок; приймальне відділення'),
      w('m-am lovit', 'я ударился', 'я вдарився'),
    ],
    remember: bi(
      'Приёмное отделение больницы — **UPU** (Unitatea de Primiri Urgențe), в разговоре просто **Urgențe**: am fost la Urgențe.',
      'Приймальне відділення лікарні — **UPU** (Unitatea de Primiri Urgențe), у розмові просто **Urgențe**: am fost la Urgențe.',
    ),
    practice: [
      task('Вызовите скорую!', 'Викличте швидку!', ['Chemați o ambulanță', 'Chemați ambulanța', 'Sunați la ambulanță']),
      task('Помогите!', 'Допоможіть!', ['Ajutor']),
      task('Где больница?', 'Де лікарня?', ['Unde este spitalul', 'Unde e spitalul']),
    ],
  },
  {
    id: 'farmacie',
    kind: 'word',
    theme: 'health',
    ro: 'farmacie',
    tr: bi('аптека', 'аптека'),
    meaning: bi(
      'Аптека. Farmacistul — фармацевт, он часто подскажет лекарство без рецепта. Ночью работают аптеки non-stop.',
      'Аптека. Farmacistul — фармацевт, він часто підкаже ліки без рецепта. Уночі працюють аптеки non-stop.',
    ),
    examples: [
      w('Unde este o farmacie?', 'Где здесь аптека?', 'Де тут аптека?'),
      w('Aveți ceva pentru durerea de cap?', 'У вас есть что-нибудь от головной боли?', 'У вас є щось від головного болю?'),
      w('Se eliberează fără rețetă?', 'Это отпускается без рецепта?', 'Це відпускається без рецепта?'),
      w('E o farmacie non-stop aproape?', 'Рядом есть круглосуточная аптека?', 'Поруч є цілодобова аптека?'),
    ],
    expressions: [
      w('farmacist', 'фармацевт', 'фармацевт'),
      w('non-stop', 'круглосуточно', 'цілодобово'),
      w('fără rețetă', 'без рецепта', 'без рецепта'),
      w('ceva pentru', 'что-нибудь от', 'щось від'),
    ],
    remember: bi(
      '«От чего?» по-румынски — **pentru** («для»): ceva **pentru** tuse — что-нибудь от кашля. Не «de la»!',
      '«Від чого?» румунською — **pentru** («для»): ceva **pentru** tuse — щось від кашлю. Не «de la»!',
    ),
    practice: [
      task('Где здесь аптека?', 'Де тут аптека?', ['Unde este o farmacie', 'Unde e o farmacie', 'Unde este farmacia', 'Unde e farmacia']),
      task('У вас есть что-нибудь от кашля?', 'У вас є щось від кашлю?', ['Aveți ceva pentru tuse']),
      task('Без рецепта.', 'Без рецепта.', ['Fără rețetă']),
    ],
  },
  {
    id: 'reteta',
    kind: 'word',
    theme: 'health',
    ro: 'rețetă',
    tr: bi('рецепт', 'рецепт'),
    meaning: bi(
      'И рецепт от врача, и кулинарный рецепт. С рецептом компенсированным (compensată) часть цены платит страховка.',
      'І рецепт від лікаря, і кулінарний рецепт. З компенсованим рецептом (compensată) частину ціни платить страховка.',
    ),
    examples: [
      w('Doctorul mi-a dat o rețetă.', 'Врач выписал мне рецепт.', 'Лікар виписав мені рецепт.'),
      w('Medicamentul se dă doar cu rețetă.', 'Лекарство отпускается только по рецепту.', 'Ліки відпускаються тільки за рецептом.'),
      w('Rețeta este compensată.', 'Рецепт льготный.', 'Рецепт пільговий.'),
      w('Rețeta e valabilă o lună.', 'Рецепт действует месяц.', 'Рецепт дійсний місяць.'),
    ],
    expressions: [
      w('cu rețetă', 'по рецепту', 'за рецептом'),
      w('rețetă compensată', 'льготный рецепт', 'пільговий рецепт'),
      w('a prescrie', 'выписать, назначить', 'виписати, призначити'),
      w('valabilă', 'действительна', 'дійсна'),
    ],
    remember: bi(
      'Rețetă — **женский род**: rețeta, rețete. «Выписать рецепт» в разговоре — **a da o rețetă**, официально — a prescrie.',
      'Rețetă — **жіночий рід**: rețeta, rețete. «Виписати рецепт» у розмові — **a da o rețetă**, офіційно — a prescrie.',
    ),
    practice: [
      task('Врач выписал мне рецепт.', 'Лікар виписав мені рецепт.', ['Doctorul mi-a dat o rețetă', 'Medicul mi-a dat o rețetă', 'Doctorul mi-a prescris o rețetă', 'Medicul mi-a prescris o rețetă']),
      task('Только по рецепту.', 'Тільки за рецептом.', ['Doar cu rețetă', 'Numai cu rețetă']),
      task('Льготный рецепт.', 'Пільговий рецепт.', ['Rețetă compensată', 'Rețeta compensată', 'O rețetă compensată']),
    ],
  },
  {
    id: 'medicament',
    kind: 'word',
    theme: 'health',
    ro: 'medicament',
    tr: bi('лекарство', 'ліки'),
    meaning: bi(
      'Лекарство вообще. А конкретно — pastile (таблетки), sirop (сироп), picături (капли), unguent (мазь), plasture (пластырь).',
      'Ліки загалом. А конкретно — pastile (таблетки), sirop (сироп), picături (краплі), unguent (мазь), plasture (пластир).',
    ),
    examples: [
      w('Ce medicamente luați?', 'Какие лекарства вы принимаете?', 'Які ліки ви приймаєте?'),
      w('Aveți un sirop pentru copii?', 'У вас есть сироп для детей?', 'У вас є сироп для дітей?'),
      w('Îmi trebuie niște picături de nas.', 'Мне нужны капли в нос.', 'Мені потрібні краплі в ніс.'),
      w('Dați-mi un plasture, vă rog.', 'Дайте мне пластырь, пожалуйста.', 'Дайте мені пластир, будь ласка.'),
    ],
    expressions: [
      w('pastile', 'таблетки', 'таблетки'),
      w('sirop de tuse', 'сироп от кашля', 'сироп від кашлю'),
      w('picături', 'капли', 'краплі'),
      w('unguent', 'мазь', 'мазь'),
      w('plasture', 'пластырь', 'пластир'),
    ],
    remember: bi(
      'Medicament — **средний род**: medicamentul, medicamente. «Принимать лекарство» — **a lua** (брать): iau pastile.',
      'Medicament — **середній рід**: medicamentul, medicamente. «Приймати ліки» — **a lua** (брати): iau pastile.',
    ),
    practice: [
      task('Какие лекарства вы принимаете?', 'Які ліки ви приймаєте?', ['Ce medicamente luați']),
      task('Сироп от кашля.', 'Сироп від кашлю.', ['Sirop de tuse', 'Sirop pentru tuse', 'Un sirop de tuse', 'Un sirop pentru tuse']),
      task('Таблетки.', 'Таблетки.', ['Pastile', 'Pastilele', 'Comprimate', 'Tablete']),
    ],
  },
  {
    id: 'cum-se-iau',
    kind: 'topic',
    theme: 'health',
    ro: 'Cum se iau?',
    tr: bi('как принимать лекарство', 'як приймати ліки'),
    meaning: bi(
      'Что скажет фармацевт или что написано на упаковке: сколько раз в день, до или после еды, сколько дней.',
      'Що скаже фармацевт або що написано на упаковці: скільки разів на день, до чи після їжі, скільки днів.',
    ),
    examples: [
      w('Luați o pastilă de trei ori pe zi.', 'Принимайте по таблетке три раза в день.', 'Приймайте по таблетці тричі на день.'),
      w('După masă, cu un pahar de apă.', 'После еды, запивая стаканом воды.', 'Після їжі, запиваючи склянкою води.'),
      w('Timp de o săptămână.', 'В течение недели.', 'Протягом тижня.'),
      w('Nu se ia pe stomacul gol.', 'Не принимать натощак.', 'Не приймати натще.'),
    ],
    expressions: [
      w('de două ori pe zi', 'два раза в день', 'двічі на день'),
      w('înainte de masă', 'до еды', 'до їжі'),
      w('după masă', 'после еды', 'після їжі'),
      w('seara la culcare', 'вечером перед сном', 'увечері перед сном'),
    ],
    remember: bi(
      '«Раз» — **dată**, во мн. — **ori**: o dată, de două ori, de trei ori. «В день» — **pe zi**, «в течение» — **timp de**.',
      '«Раз» — **dată**, у мн. — **ori**: o dată, de două ori, de trei ori. «На день» — **pe zi**, «протягом» — **timp de**.',
    ),
    practice: [
      task('Три раза в день.', 'Тричі на день.', ['De trei ori pe zi']),
      task('После еды.', 'Після їжі.', ['După masă', 'După mâncare']),
      task('Как их принимать?', 'Як їх приймати?', ['Cum se iau', 'Cum le iau']),
    ],
  },
  {
    id: 'alimentara',
    kind: 'word',
    theme: 'shop',
    ro: 'alimentară',
    tr: bi('продуктовый магазин', 'продуктовий магазин'),
    meaning: bi(
      'Небольшой продуктовый у дома — alimentara. Рядом: supermarket, brutărie (пекарня), măcelărie (мясная лавка), chioșc (киоск).',
      'Невеликий продуктовий біля дому — alimentara. Поруч: supermarket, brutărie (пекарня), măcelărie (м’ясна крамниця), chioșc (кіоск).',
    ),
    examples: [
      w('Mă duc până la alimentară.', 'Я схожу в продуктовый.', 'Я збігаю в продуктовий.'),
      w('Unde este cel mai apropiat supermarket?', 'Где ближайший супермаркет?', 'Де найближчий супермаркет?'),
      w('Pâinea de la brutărie e caldă.', 'Хлеб из пекарни ещё тёплый.', 'Хліб із пекарні ще теплий.'),
      w('Mai avem nevoie de lapte și ouă.', 'Нам ещё нужны молоко и яйца.', 'Нам ще потрібні молоко та яйця.'),
    ],
    expressions: [
      w('brutărie', 'пекарня', 'пекарня'),
      w('măcelărie', 'мясная лавка', 'м’ясна крамниця'),
      w('cumpărături', 'покупки', 'покупки'),
      w('coș', 'корзина', 'кошик'),
    ],
    remember: bi(
      '«Ходить за покупками» — **a face cumpărături**. «Схожу до…» — **mă duc până la…**, «до ближайшего» — **cel mai apropiat**.',
      '«Ходити по покупки» — **a face cumpărături**. «Збігаю до…» — **mă duc până la…**, «найближчий» — **cel mai apropiat**.',
    ),
    practice: [
      task('Я схожу в продуктовый.', 'Я збігаю в продуктовий.', ['Mă duc până la alimentară', 'Mă duc la alimentară', 'Merg la alimentară']),
      task('Где ближайший супермаркет?', 'Де найближчий супермаркет?', ['Unde este cel mai apropiat supermarket', 'Unde e cel mai apropiat supermarket']),
      task('Ходить за покупками.', 'Ходити по покупки.', ['A face cumpărături', 'Fac cumpărături']),
    ],
  },
  {
    id: 'la-casa',
    kind: 'topic',
    theme: 'shop',
    ro: 'La casă',
    tr: bi('на кассе', 'на касі'),
    meaning: bi(
      'Пять вопросов, которые кассир задаст почти наверняка: карта или наличные, пакет, карта лояльности, чек.',
      'П’ять питань, які касир поставить майже напевно: картка чи готівка, пакет, картка лояльності, чек.',
    ),
    examples: [
      w('Plătiți cash sau cu cardul?', 'Наличными или картой?', 'Готівкою чи карткою?'),
      w('Cu cardul, vă rog.', 'Картой, пожалуйста.', 'Карткою, будь ласка.'),
      w('Vreți o pungă?', 'Вам нужен пакет?', 'Вам потрібен пакет?'),
      w('Aveți card de fidelitate?', 'У вас есть карта лояльности?', 'У вас є картка лояльності?'),
      w('Doriți bonul?', 'Чек нужен?', 'Чек потрібен?'),
    ],
    expressions: [
      w('pungă', 'пакет', 'пакет'),
      w('bon', 'чек', 'чек'),
      w('card de fidelitate', 'карта лояльности', 'картка лояльності'),
      w('casieră', 'кассирша', 'касирка'),
    ],
    remember: bi(
      '**Casă** — и «дом», и «касса»: la casă — на кассе. Пакет в магазине обычно платный, поэтому кассир и спрашивает.',
      '**Casă** — і «будинок», і «каса»: la casă — на касі. Пакет у магазині зазвичай платний, тому касир і питає.',
    ),
    practice: [
      task('Картой, пожалуйста.', 'Карткою, будь ласка.', ['Cu cardul, vă rog', 'Cu cardul']),
      task('Пакет не нужен.', 'Пакет не потрібен.', ['Nu vreau pungă', 'Fără pungă', 'Nu am nevoie de pungă', 'Nu, mulțumesc']),
      task('Наличными.', 'Готівкою.', ['Cash', 'Numerar', 'Cu bani cash', 'În numerar']),
    ],
  },
  {
    id: 'reducere',
    kind: 'word',
    theme: 'shop',
    ro: 'reducere',
    tr: bi('скидка', 'знижка'),
    meaning: bi(
      'Скидка. «Со скидкой» — la reducere. На ценниках ищите ofertă, promoție и лучшее слово магазина — gratis.',
      'Знижка. «Зі знижкою» — la reducere. На цінниках шукайте ofertă, promoție і найкраще слово магазину — gratis.',
    ),
    examples: [
      w('Este la reducere?', 'Это со скидкой?', 'Це зі знижкою?'),
      w('Azi e reducere de treizeci la sută.', 'Сегодня скидка тридцать процентов.', 'Сьогодні знижка тридцять відсотків.'),
      w('Al doilea produs e gratis.', 'Второй товар бесплатно.', 'Другий товар безкоштовно.'),
      w('E prea scump pentru mine.', 'Это слишком дорого для меня.', 'Це задорого для мене.'),
    ],
    expressions: [
      w('la reducere', 'со скидкой', 'зі знижкою'),
      w('ofertă', 'акция, предложение', 'акція, пропозиція'),
      w('ieftin', 'дешёвый', 'дешевий'),
      w('scump', 'дорогой', 'дорогий'),
    ],
    remember: bi(
      'Reducere — **женский род**: reducerea, reduceri. «Слишком» — **prea**: prea scump, prea mare.',
      'Reducere — **жіночий рід**: reducerea, reduceri. «Занадто» — **prea**: prea scump, prea mare.',
    ),
    practice: [
      task('Это со скидкой?', 'Це зі знижкою?', ['Este la reducere', 'E la reducere', 'Este redus', 'E redus']),
      task('Слишком дорого.', 'Задорого.', ['Prea scump', 'E prea scump', 'Este prea scump']),
      task('Дешёвый.', 'Дешевий.', ['Ieftin']),
    ],
  },
  {
    id: 'piata',
    kind: 'word',
    theme: 'shop',
    ro: 'piață',
    tr: bi('рынок', 'ринок'),
    meaning: bi(
      'Рынок — за овощами, фруктами, сыром от фермеров. Там всё продают на вес: kilogramul, jumătate de kilogram.',
      'Ринок — по овочі, фрукти, сир від фермерів. Там усе продають на вагу: kilogramul, jumătate de kilogram.',
    ),
    examples: [
      w('Un kilogram de roșii, vă rog.', 'Килограмм помидоров, пожалуйста.', 'Кілограм помідорів, будь ласка.'),
      w('Cât costă kilogramul?', 'Сколько стоит килограмм?', 'Скільки коштує кілограм?'),
      w('Jumătate de kilogram de brânză.', 'Полкило сыра.', 'Пів кіло сиру.'),
      w('Sunt de la țară?', 'Это деревенские?', 'Це сільські?'),
    ],
    expressions: [
      w('proaspăt', 'свежий', 'свіжий'),
      w('de casă', 'домашний', 'домашній'),
      w('o bucată', 'одна штука', 'одна штука'),
      w('o legătură', 'пучок', 'пучок'),
    ],
    remember: bi(
      'Сколько чего — через **de**: un kilogram **de** roșii, o sticlă **de** apă. Piață — ещё и «площадь» в городе: Piața Unirii.',
      'Скільки чого — через **de**: un kilogram **de** roșii, o sticlă **de** apă. Piață — ще й «площа» в місті: Piața Unirii.',
    ),
    practice: [
      task('Килограмм помидоров, пожалуйста.', 'Кілограм помідорів, будь ласка.', ['Un kilogram de roșii, vă rog', 'Un kilogram de roșii', 'Un kil de roșii, vă rog']),
      task('Сколько стоит килограмм?', 'Скільки коштує кілограм?', ['Cât costă kilogramul', 'Cât e kilogramul', 'Cât costă un kilogram']),
      task('Свежий.', 'Свіжий.', ['Proaspăt']),
    ],
  },
  {
    id: 'ma-uit-doar',
    kind: 'phrase',
    theme: 'shop',
    ro: 'Mă uit doar.',
    tr: bi('я просто смотрю', 'я просто дивлюся'),
    meaning: bi(
      'Ответ продавцу, который спросил «Vă pot ajuta?». Рядом — всё, что нужно в магазине одежды: примерить, размер, примерочная.',
      'Відповідь продавцю, який спитав «Vă pot ajuta?». Поруч — усе, що треба в магазині одягу: приміряти, розмір, примірювальна.',
    ),
    examples: [
      w('Vă pot ajuta cu ceva? — Mă uit doar, mersi.', 'Вам помочь? — Я просто смотрю, спасибо.', 'Вам допомогти? — Я просто дивлюся, дякую.'),
      w('Pot să-l probez?', 'Можно его примерить?', 'Можна його приміряти?'),
      w('Aveți o mărime mai mare?', 'У вас есть размер побольше?', 'У вас є розмір більший?'),
      w('Unde este cabina de probă?', 'Где примерочная?', 'Де примірювальна?'),
    ],
    expressions: [
      w('mărime', 'размер', 'розмір'),
      w('cabina de probă', 'примерочная', 'примірювальна'),
      w('a proba', 'примерять', 'приміряти'),
      w('îmi vine bine', 'мне хорошо сидит', 'мені добре сидить'),
    ],
    remember: bi(
      'A se uita — «смотреть, глядеть»: **mă uit** (я смотрю), **uită-te!** (посмотри!). Мало — **e mic**, велико — **e mare**.',
      'A se uita — «дивитися»: **mă uit** (я дивлюся), **uită-te!** (подивися!). Замало — **e mic**, завелике — **e mare**.',
    ),
    practice: [
      task('Я просто смотрю.', 'Я просто дивлюся.', ['Mă uit doar', 'Doar mă uit', 'Mă uit doar, mersi', 'Mă uit doar, mulțumesc']),
      task('Можно его примерить?', 'Можна його приміряти?', ['Pot să-l probez', 'Pot să îl probez', 'Îl pot proba']),
      task('Где примерочная?', 'Де примірювальна?', ['Unde este cabina de probă', 'Unde e cabina de probă', 'Unde sunt cabinele de probă']),
    ],
  },
  {
    id: 'retur',
    kind: 'word',
    theme: 'shop',
    ro: 'retur',
    tr: bi('возврат товара', 'повернення товару'),
    meaning: bi(
      'Возврат покупки. Обычно нужен чек — bonul. Можно вернуть деньги (banii înapoi) или обменять (a schimba).',
      'Повернення покупки. Зазвичай потрібен чек — bonul. Можна повернути гроші (banii înapoi) або обміняти (a schimba).',
    ),
    examples: [
      w('Vreau să returnez produsul.', 'Я хочу вернуть товар.', 'Я хочу повернути товар.'),
      w('Aveți bonul?', 'У вас есть чек?', 'У вас є чек?'),
      w('Se poate schimba cu altă mărime?', 'Можно обменять на другой размер?', 'Можна обміняти на інший розмір?'),
      w('Produsul are un defect.', 'У товара брак.', 'Товар має брак.'),
    ],
    expressions: [
      w('a returna', 'вернуть (товар)', 'повернути (товар)'),
      w('a schimba', 'обменять', 'обміняти'),
      w('banii înapoi', 'деньги назад', 'гроші назад'),
      w('garanție', 'гарантия', 'гарантія'),
    ],
    remember: bi(
      'Retur — **средний род**: returul, retururi. «Вернуть деньги» — **a da banii înapoi**: Îmi dați banii înapoi?',
      'Retur — **середній рід**: returul, retururi. «Повернути гроші» — **a da banii înapoi**: Îmi dați banii înapoi?',
    ),
    practice: [
      task('Я хочу вернуть товар.', 'Я хочу повернути товар.', ['Vreau să returnez produsul', 'Aș vrea să returnez produsul', 'Vreau să-l returnez']),
      task('Можно обменять?', 'Можна обміняти?', ['Se poate schimba', 'Pot să-l schimb', 'Pot să îl schimb']),
      task('Гарантия.', 'Гарантія.', ['Garanție', 'Garanția']),
    ],
  },
  {
    id: 'deschis-inchis',
    kind: 'topic',
    theme: 'shop',
    ro: 'Deschis / Închis',
    tr: bi('надписи на дверях', 'написи на дверях'),
    meaning: bi(
      'Таблички, которые видишь каждый день: открыто, закрыто, от себя, на себя, вход, выход. И вопрос о часах работы.',
      'Таблички, які бачиш щодня: відчинено, зачинено, від себе, на себе, вхід, вихід. І питання про години роботи.',
    ),
    examples: [
      w('La ce oră închideți?', 'Во сколько вы закрываетесь?', 'О котрій ви зачиняєтеся?'),
      w('Suntem deschiși de luni până vineri.', 'Мы открыты с понедельника по пятницу.', 'Ми відчинені з понеділка по п’ятницю.'),
      w('Duminică e închis.', 'В воскресенье закрыто.', 'У неділю зачинено.'),
      w('Intrarea e prin spate.', 'Вход с обратной стороны.', 'Вхід з іншого боку.'),
    ],
    expressions: [
      w('împingeți', 'от себя', 'від себе'),
      w('trageți', 'на себя', 'на себе'),
      w('intrare', 'вход', 'вхід'),
      w('ieșire', 'выход', 'вихід'),
    ],
    remember: bi(
      'С какого по какой — **de… până…**: de luni până vineri. Время: **La ce oră deschideți / închideți?**',
      'З якого по який — **de… până…**: de luni până vineri. Час: **La ce oră deschideți / închideți?**',
    ),
    practice: [
      task('Во сколько вы закрываетесь?', 'О котрій ви зачиняєтеся?', ['La ce oră închideți', 'Când închideți']),
      task('Открыто.', 'Відчинено.', ['Deschis']),
      task('Выход.', 'Вихід.', ['Ieșire', 'Ieșirea']),
    ],
  },
  {
    id: 'bilet',
    kind: 'word',
    theme: 'transport',
    ro: 'bilet',
    tr: bi('билет', 'квиток'),
    meaning: bi(
      'Билет на автобус, поезд, в кино. В городском транспорте билет или карту нужно прикладывать к валидатору — a valida.',
      'Квиток на автобус, потяг, у кіно. У міському транспорті квиток чи картку треба прикладати до валідатора — a valida.',
    ),
    examples: [
      w('Un bilet dus-întors, vă rog.', 'Билет туда-обратно, пожалуйста.', 'Квиток туди й назад, будь ласка.'),
      w('Unde pot cumpăra un bilet?', 'Где можно купить билет?', 'Де можна купити квиток?'),
      w('Nu uitați să validați biletul.', 'Не забудьте прокомпостировать билет.', 'Не забудьте прокомпостувати квиток.'),
      w('Am abonament lunar.', 'У меня месячный проездной.', 'У мене місячний проїзний.'),
    ],
    expressions: [
      w('dus-întors', 'туда и обратно', 'туди й назад'),
      w('abonament', 'проездной', 'проїзний'),
      w('controlor', 'контролёр', 'контролер'),
      w('amendă', 'штраф', 'штраф'),
    ],
    remember: bi(
      'Bilet — **средний род**: biletul, bilete. В одну сторону — **doar dus**. Во многих городах можно просто приложить банковскую карту к валидатору.',
      'Bilet — **середній рід**: biletul, bilete. В один бік — **doar dus**. У багатьох містах можна просто прикласти банківську картку до валідатора.',
    ),
    practice: [
      task('Билет туда-обратно, пожалуйста.', 'Квиток туди й назад, будь ласка.', ['Un bilet dus-întors, vă rog', 'Un bilet dus-întors', 'Bilet dus-întors, vă rog']),
      task('Где можно купить билет?', 'Де можна купити квиток?', ['Unde pot cumpăra un bilet', 'Unde pot să cumpăr un bilet', 'De unde pot cumpăra un bilet', 'Unde se cumpără biletele']),
      task('Проездной.', 'Проїзний.', ['Abonament', 'Un abonament', 'Abonamentul']),
    ],
  },
  {
    id: 'statia',
    kind: 'word',
    theme: 'transport',
    ro: 'stație',
    tr: bi('остановка', 'зупинка'),
    meaning: bi(
      'Остановка автобуса, трамвая, троллейбуса, станция метро. «Где остановка?» — Unde este stația?',
      'Зупинка автобуса, трамвая, тролейбуса, станція метро. «Де зупинка?» — Unde este stația?',
    ),
    examples: [
      w('Unde este stația de autobuz?', 'Где автобусная остановка?', 'Де автобусна зупинка?'),
      w('Ce autobuz merge la gară?', 'Какой автобус идёт до вокзала?', 'Який автобус їде до вокзалу?'),
      w('La ce stație cobor?', 'На какой остановке мне выходить?', 'На якій зупинці мені виходити?'),
      w('Mai sunt trei stații.', 'Ещё три остановки.', 'Ще три зупинки.'),
    ],
    expressions: [
      w('stația de autobuz', 'автобусная остановка', 'автобусна зупинка'),
      w('stația de metrou', 'станция метро', 'станція метро'),
      w('tramvai', 'трамвай', 'трамвай'),
      w('troleibuz', 'троллейбус', 'тролейбус'),
    ],
    remember: bi(
      'Stație — **женский род**: stația, stații. Садиться — **a urca**, выходить — **a coborî**: urc în autobuz, cobor la gară.',
      'Stație — **жіночий рід**: stația, stații. Сідати — **a urca**, виходити — **a coborî**: urc în autobuz, cobor la gară.',
    ),
    practice: [
      task('Где автобусная остановка?', 'Де автобусна зупинка?', ['Unde este stația de autobuz', 'Unde e stația de autobuz']),
      task('Какой автобус идёт до вокзала?', 'Який автобус їде до вокзалу?', ['Ce autobuz merge la gară', 'Care autobuz merge la gară']),
      task('На какой остановке мне выходить?', 'На якій зупинці мені виходити?', ['La ce stație cobor', 'La ce stație trebuie să cobor', 'Unde cobor']),
    ],
  },
  {
    id: 'cobor',
    kind: 'phrase',
    theme: 'transport',
    ro: 'Coborâți la următoarea?',
    tr: bi('вы выходите на следующей?', 'ви виходите на наступній?'),
    meaning: bi(
      'Так спрашивают в переполненном автобусе, чтобы пробраться к двери. Ответ: «Da» — или вас пропустят.',
      'Так питають у переповненому автобусі, щоб пробратися до дверей. Відповідь: «Da» — або вас пропустять.',
    ),
    examples: [
      w('Coborâți la următoarea?', 'Вы выходите на следующей?', 'Ви виходите на наступній?'),
      w('Cobor la următoarea stație.', 'Я выхожу на следующей остановке.', 'Я виходжу на наступній зупинці.'),
      w('Mă scuzați, permiteți-mi să trec.', 'Извините, разрешите пройти.', 'Вибачте, дозвольте пройти.'),
      w('Am ratat stația.', 'Я проехал свою остановку.', 'Я проїхав свою зупинку.'),
    ],
    expressions: [
      w('a coborî', 'выходить (из транспорта)', 'виходити (з транспорту)'),
      w('a urca', 'садиться (в транспорт)', 'сідати (у транспорт)'),
      w('următoarea', 'следующая', 'наступна'),
      w('mă scuzați', 'извините', 'вибачте'),
    ],
    remember: bi(
      'A coborî: **cobor** (я выхожу), **cobori** (ты), **coborâți** (вы). Следующий — **următorul** (м.), следующая — **următoarea** (ж.).',
      'A coborî: **cobor** (я виходжу), **cobori** (ти), **coborâți** (ви). Наступний — **următorul** (ч.), наступна — **următoarea** (ж.).',
    ),
    practice: [
      task('Вы выходите на следующей?', 'Ви виходите на наступній?', ['Coborâți la următoarea', 'Coborâți la următoarea stație']),
      task('Я выхожу на следующей.', 'Я виходжу на наступній.', ['Cobor la următoarea', 'Cobor la următoarea stație']),
      task('Разрешите пройти.', 'Дозвольте пройти.', ['Permiteți-mi să trec', 'Mă scuzați', 'Permiteți', 'Pot să trec']),
    ],
  },
  {
    id: 'gara',
    kind: 'word',
    theme: 'transport',
    ro: 'gară',
    tr: bi('вокзал', 'вокзал'),
    meaning: bi(
      'Железнодорожный вокзал. Поезда в Румынии — это CFR и частные перевозчики. На табло ищите linia — путь, с которого уходит поезд.',
      'Залізничний вокзал. Потяги в Румунії — це CFR і приватні перевізники. На табло шукайте linia — колію, з якої відходить потяг.',
    ),
    examples: [
      w('De la ce linie pleacă trenul?', 'С какого пути отправляется поезд?', 'З якої колії відправляється потяг?'),
      w('Trenul are o întârziere de douăzeci de minute.', 'Поезд опаздывает на двадцать минут.', 'Потяг запізнюється на двадцять хвилин.'),
      w('În ce vagon am loc?', 'В каком вагоне моё место?', 'У якому вагоні моє місце?'),
      w('Trenul spre Brașov a plecat.', 'Поезд на Брашов уже ушёл.', 'Потяг на Брашов уже пішов.'),
    ],
    expressions: [
      w('tren', 'поезд', 'потяг'),
      w('linia', 'путь (на вокзале)', 'колія (на вокзалі)'),
      w('vagon', 'вагон', 'вагон'),
      w('întârziere', 'опоздание, задержка', 'запізнення, затримка'),
    ],
    remember: bi(
      'Gară — **женский род**: gara, gări. Автовокзал — **autogară**. Куда идёт поезд — **spre**: trenul spre Cluj.',
      'Gară — **жіночий рід**: gara, gări. Автовокзал — **autogară**. Куди йде потяг — **spre**: trenul spre Cluj.',
    ),
    practice: [
      task('С какого пути отправляется поезд?', 'З якої колії відправляється потяг?', ['De la ce linie pleacă trenul', 'De pe ce linie pleacă trenul']),
      task('Поезд опаздывает.', 'Потяг запізнюється.', ['Trenul are întârziere', 'Trenul întârzie']),
      task('Автовокзал.', 'Автовокзал.', ['Autogară', 'Autogara']),
    ],
  },
  {
    id: 'taxi',
    kind: 'word',
    theme: 'transport',
    ro: 'taxi',
    tr: bi('такси', 'таксі'),
    meaning: bi(
      'Такси — вызывают по телефону или через приложение. Главное: назвать адрес, спросить цену и сказать, где остановиться.',
      'Таксі — викликають телефоном або через застосунок. Головне: назвати адресу, спитати ціну й сказати, де зупинитися.',
    ),
    examples: [
      w('Duceți-mă la adresa asta, vă rog.', 'Отвезите меня по этому адресу, пожалуйста.', 'Відвезіть мене за цією адресою, будь ласка.'),
      w('Cât costă până la aeroport?', 'Сколько стоит до аэропорта?', 'Скільки коштує до аеропорту?'),
      w('Opriți aici, vă rog.', 'Остановите здесь, пожалуйста.', 'Зупиніть тут, будь ласка.'),
      w('Păstrați restul.', 'Сдачи не нужно.', 'Решти не треба.'),
    ],
    expressions: [
      w('a chema un taxi', 'вызвать такси', 'викликати таксі'),
      w('adresa', 'адрес', 'адреса'),
      w('opriți', 'остановите', 'зупиніть'),
      w('păstrați restul', 'сдачи не нужно', 'решти не треба'),
    ],
    remember: bi(
      'Просьбы к водителю — на «вы»: **duceți-mă** (отвезите меня), **opriți** (остановите), **așteptați** (подождите).',
      'Прохання до водія — на «ви»: **duceți-mă** (відвезіть мене), **opriți** (зупиніть), **așteptați** (зачекайте).',
    ),
    practice: [
      task('Сколько стоит до аэропорта?', 'Скільки коштує до аеропорту?', ['Cât costă până la aeroport', 'Cât e până la aeroport']),
      task('Остановите здесь, пожалуйста.', 'Зупиніть тут, будь ласка.', ['Opriți aici, vă rog', 'Opriți aici', 'Puteți opri aici']),
      task('Сдачи не нужно.', 'Решти не треба.', ['Păstrați restul']),
    ],
  },
  {
    id: 'drept-inainte',
    kind: 'topic',
    theme: 'transport',
    ro: 'Drept înainte',
    tr: bi('как объяснить дорогу', 'як пояснити дорогу'),
    meaning: bi(
      'Налево, направо, прямо, на светофоре, за углом — всё, чтобы спросить дорогу и понять ответ.',
      'Ліворуч, праворуч, прямо, на світлофорі, за рогом — усе, щоб спитати дорогу й зрозуміти відповідь.',
    ),
    examples: [
      w('Mergeți drept înainte.', 'Идите прямо.', 'Ідіть прямо.'),
      w('La semafor faceți la stânga.', 'На светофоре поверните налево.', 'На світлофорі поверніть ліворуч.'),
      w('E după colț, pe dreapta.', 'Это за углом, справа.', 'Це за рогом, праворуч.'),
      w('E departe de aici?', 'Это далеко отсюда?', 'Це далеко звідси?'),
    ],
    expressions: [
      w('la stânga', 'налево', 'ліворуч'),
      w('la dreapta', 'направо', 'праворуч'),
      w('semafor', 'светофор', 'світлофор'),
      w('colț', 'угол', 'ріг'),
      w('aproape', 'близко', 'близько'),
    ],
    remember: bi(
      'Повернуть — **a face la stânga / la dreapta** («сделать налево»). Слева / справа — **pe stânga / pe dreapta**.',
      'Повернути — **a face la stânga / la dreapta** («зробити ліворуч»). Зліва / справа — **pe stânga / pe dreapta**.',
    ),
    practice: [
      task('Идите прямо.', 'Ідіть прямо.', ['Mergeți drept înainte', 'Mergeți înainte', 'Drept înainte']),
      task('Поверните налево.', 'Поверніть ліворуч.', ['Faceți la stânga', 'Luați-o la stânga', 'Virați la stânga']),
      task('Это далеко?', 'Це далеко?', ['E departe', 'Este departe']),
    ],
  },
  {
    id: 'aeroport',
    kind: 'word',
    theme: 'transport',
    ro: 'aeroport',
    tr: bi('аэропорт', 'аеропорт'),
    meaning: bi(
      'Аэропорт: регистрация, багаж, посадка. Главные слова на табло — zbor (рейс), poarta (выход) и întârziat (задержан).',
      'Аеропорт: реєстрація, багаж, посадка. Головні слова на табло — zbor (рейс), poarta (вихід) і întârziat (затримано).',
    ),
    examples: [
      w('Zborul are întârziere.', 'Рейс задерживается.', 'Рейс затримується.'),
      w('La ce poartă este îmbarcarea?', 'У какого выхода посадка?', 'Біля якого виходу посадка?'),
      w('Am doar bagaj de mână.', 'У меня только ручная кладь.', 'У мене лише ручна поклажа.'),
      w('Pașaportul și cartea de îmbarcare, vă rog.', 'Паспорт и посадочный талон, пожалуйста.', 'Паспорт і посадковий талон, будь ласка.'),
    ],
    expressions: [
      w('zbor', 'рейс, полёт', 'рейс, політ'),
      w('poarta', 'выход на посадку', 'вихід на посадку'),
      w('bagaj de mână', 'ручная кладь', 'ручна поклажа'),
      w('îmbarcare', 'посадка', 'посадка'),
    ],
    remember: bi(
      'Aeroport и zbor — **средний род**: aeroportul, zborul. Прилёт — **sosire**, вылет — **plecare**.',
      'Aeroport і zbor — **середній рід**: aeroportul, zborul. Приліт — **sosire**, виліт — **plecare**.',
    ),
    practice: [
      task('Рейс задерживается.', 'Рейс затримується.', ['Zborul are întârziere', 'Zborul întârzie', 'Zborul este întârziat', 'Zborul e întârziat']),
      task('Ручная кладь.', 'Ручна поклажа.', ['Bagaj de mână', 'Bagajul de mână']),
      task('Прилёт.', 'Приліт.', ['Sosire', 'Sosirea', 'Sosiri']),
    ],
  },
  {
    id: 'benzinarie',
    kind: 'word',
    theme: 'transport',
    ro: 'benzinărie',
    tr: bi('заправка', 'заправка'),
    meaning: bi(
      'Заправка. На колонке выбираете benzină или motorină (дизель), потом платите на кассе, назвав номер колонки — pompa.',
      'Заправка. На колонці обираєте benzină або motorină (дизель), потім платите на касі, назвавши номер колонки — pompa.',
    ),
    examples: [
      w('Unde e cea mai apropiată benzinărie?', 'Где ближайшая заправка?', 'Де найближча заправка?'),
      w('Pompa numărul trei, vă rog.', 'Колонка номер три, пожалуйста.', 'Колонка номер три, будь ласка.'),
      w('Unde pot să parchez?', 'Где можно припарковаться?', 'Де можна припаркуватися?'),
      w('Parcarea este cu plată.', 'Парковка платная.', 'Паркування платне.'),
    ],
    expressions: [
      w('motorină', 'дизель', 'дизель'),
      w('plinul', 'полный бак', 'повний бак'),
      w('parcare', 'парковка', 'паркування'),
      w('rovinietă', 'виньетка (дорожный сбор)', 'віньєтка (дорожній збір)'),
    ],
    remember: bi(
      'Для дорог за городом в Румынии нужна **rovinieta** — электронная виньетка, её покупают онлайн или на заправке.',
      'Для доріг за містом у Румунії потрібна **rovinieta** — електронна віньєтка, її купують онлайн або на заправці.',
    ),
    practice: [
      task('Где ближайшая заправка?', 'Де найближча заправка?', ['Unde e cea mai apropiată benzinărie', 'Unde este cea mai apropiată benzinărie']),
      task('Где можно припарковаться?', 'Де можна припаркуватися?', ['Unde pot să parchez', 'Unde pot parca', 'Unde pot să parchez mașina']),
      task('Дизель.', 'Дизель.', ['Motorină', 'Motorina']),
    ],
  },
];

export const findCard = (id: string) => CARDS.find((c) => c.id === id);

/** Words and phrases rotate as the word of the day; topics are only in the library. */
const DAILY = CARDS.filter((c) => c.kind !== 'topic');

/** The same card all day, a different one tomorrow; `date` is a local YYYY-MM-DD. */
export function cardOfDay(date: string): LearnCard {
  const [y, m, d] = date.split('-').map(Number);
  const n = Math.floor(Date.UTC(y, m - 1, d) / 86_400_000);
  return DAILY[((n % DAILY.length) + DAILY.length) % DAILY.length];
}
