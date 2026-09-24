/**
 * Privacy policy and account-deletion instructions. The App Store and Google Play both
 * require a public URL for each; the web build serves them at /privacy and /delete-account.
 * Keep the text in step with what the app actually does — reviewers check it against the app.
 */

/** Address for privacy questions and deletion requests. Shown on both pages. */
export const CONTACT_EMAIL = 'partners@seajobs.pro';

export const UPDATED = '2026-09-24';

type Section = { h: string; p: string[] };
export type LegalDoc = { title: string; intro: string; sections: Section[] };
type Legal = { privacy: LegalDoc; deletion: LegalDoc };

const ru: Legal = {
  privacy: {
    title: 'Политика конфиденциальности',
    intro:
      'Română — приложение для изучения румынского языка. Мы собираем только то, без чего не работает сохранение прогресса, и ничего не продаём и не передаём рекламодателям.',
    sections: [
      {
        h: 'Без аккаунта',
        p: [
          'Приложением можно пользоваться без регистрации. Тогда прогресс (пройденные уроки, опыт, серия дней) и настройки хранятся только на вашем устройстве и никуда не отправляются.',
        ],
      },
      {
        h: 'С аккаунтом',
        p: [
          'Если вы создаёте аккаунт, мы храним адрес электронной почты, пароль в зашифрованном (хешированном) виде и ваш учебный прогресс: какие уроки пройдены, лучшая точность, опыт, серия дней, дата последнего занятия, цель дня и слова, сохранённые в кошелёк.',
          'Эти данные нужны только для того, чтобы вы могли войти и продолжить обучение на другом устройстве. Почту мы используем лишь для писем о подтверждении адреса и восстановлении пароля.',
          'При входе через Google пароль не создаётся: Google передаёт нам адрес почты, имя и ссылку на фото профиля. Больше ничего из вашего аккаунта Google мы не получаем.',
        ],
      },
      {
        h: 'Где хранятся данные',
        p: [
          'Аккаунты и прогресс хранятся в Supabase (дата-центр во Франкфурте, ЕС). Веб-версию обслуживает Vercel, который, как любой хостинг, ведёт технические журналы запросов (например, IP-адрес) для работы и защиты сервиса.',
        ],
      },
      {
        h: 'Чего мы не делаем',
        p: [
          'Нет рекламы, нет рекламных трекеров и сторонней аналитики. Мы не продаём и не передаём ваши данные третьим лицам для маркетинга.',
          'Озвучка румынских слов работает через синтезатор речи вашего устройства: текст не отправляется на наши серверы. Приложение не использует микрофон, камеру и геолокацию.',
        ],
      },
      {
        h: 'Удаление данных',
        p: [
          'Удалить аккаунт и весь сохранённый прогресс можно в самом приложении: значок 👤 → «Удалить аккаунт». Удаление происходит сразу и навсегда. Подробности — на странице «Удаление аккаунта».',
        ],
      },
      {
        h: 'Ваши права',
        p: [
          'Вы можете запросить копию своих данных, исправить или удалить их. Приложение не предназначено специально для детей младше 13 лет.',
        ],
      },
    ],
  },
  deletion: {
    title: 'Удаление аккаунта',
    intro: 'Аккаунт и весь связанный с ним прогресс можно удалить в любой момент.',
    sections: [
      {
        h: 'В приложении или на сайте',
        p: [
          '1. Откройте Română и войдите в аккаунт.',
          '2. Нажмите значок 👤 в правом верхнем углу.',
          '3. Нажмите «Удалить аккаунт» и подтвердите.',
        ],
      },
      {
        h: 'Что будет удалено',
        p: [
          'Сразу и безвозвратно удаляются адрес почты, пароль и весь сохранённый прогресс. Резервные копии базы данных перезаписываются в течение 7 дней.',
          'Прогресс, сохранённый на самом устройстве без входа, удаляется вместе с приложением.',
        ],
      },
    ],
  },
};

const ua: Legal = {
  privacy: {
    title: 'Політика конфіденційності',
    intro:
      'Română — застосунок для вивчення румунської мови. Ми збираємо лише те, без чого не працює збереження прогресу, і нічого не продаємо та не передаємо рекламодавцям.',
    sections: [
      {
        h: 'Без акаунта',
        p: [
          'Застосунком можна користуватися без реєстрації. Тоді прогрес (пройдені уроки, досвід, серія днів) і налаштування зберігаються лише на вашому пристрої й нікуди не надсилаються.',
        ],
      },
      {
        h: 'З акаунтом',
        p: [
          'Якщо ви створюєте акаунт, ми зберігаємо адресу електронної пошти, пароль у зашифрованому (гешованому) вигляді та ваш навчальний прогрес: які уроки пройдено, найкращу точність, досвід, серію днів, дату останнього заняття, мету дня та слова, збережені в гаманець.',
          'Ці дані потрібні лише для того, щоб ви могли увійти й продовжити навчання на іншому пристрої. Пошту ми використовуємо тільки для листів про підтвердження адреси та відновлення пароля.',
          'Під час входу через Google пароль не створюється: Google передає нам адресу пошти, ім’я та посилання на фото профілю. Більше нічого з вашого акаунта Google ми не отримуємо.',
        ],
      },
      {
        h: 'Де зберігаються дані',
        p: [
          'Акаунти й прогрес зберігаються в Supabase (дата-центр у Франкфурті, ЄС). Вебверсію обслуговує Vercel, який, як будь-який хостинг, веде технічні журнали запитів (наприклад, IP-адресу) для роботи й захисту сервісу.',
        ],
      },
      {
        h: 'Чого ми не робимо',
        p: [
          'Немає реклами, рекламних трекерів і сторонньої аналітики. Ми не продаємо й не передаємо ваші дані третім особам для маркетингу.',
          'Озвучення румунських слів працює через синтезатор мовлення вашого пристрою: текст не надсилається на наші сервери. Застосунок не використовує мікрофон, камеру й геолокацію.',
        ],
      },
      {
        h: 'Видалення даних',
        p: [
          'Видалити акаунт і весь збережений прогрес можна в самому застосунку: значок 👤 → «Видалити акаунт». Видалення відбувається одразу й назавжди. Подробиці — на сторінці «Видалення акаунта».',
        ],
      },
      {
        h: 'Ваші права',
        p: [
          'Ви можете запросити копію своїх даних, виправити або видалити їх. Застосунок не призначений спеціально для дітей молодше 13 років.',
        ],
      },
    ],
  },
  deletion: {
    title: 'Видалення акаунта',
    intro: 'Акаунт і весь повʼязаний із ним прогрес можна видалити будь-коли.',
    sections: [
      {
        h: 'У застосунку або на сайті',
        p: [
          '1. Відкрийте Română та увійдіть в акаунт.',
          '2. Натисніть значок 👤 у правому верхньому куті.',
          '3. Натисніть «Видалити акаунт» і підтвердьте.',
        ],
      },
      {
        h: 'Що буде видалено',
        p: [
          'Одразу й безповоротно видаляються адреса пошти, пароль і весь збережений прогрес. Резервні копії бази даних перезаписуються протягом 7 днів.',
          'Прогрес, збережений на самому пристрої без входу, видаляється разом із застосунком.',
        ],
      },
    ],
  },
};

/** App Store and Google Play reviewers read English. */
const en: Legal = {
  privacy: {
    title: 'Privacy Policy',
    intro:
      'Română is an app for learning Romanian. We collect only what saving your progress requires, and we never sell data or share it with advertisers.',
    sections: [
      {
        h: 'Without an account',
        p: [
          'The app works without signing up. Your progress (completed lessons, XP, streak) and settings then stay on your device only and are never sent anywhere.',
        ],
      },
      {
        h: 'With an account',
        p: [
          'If you create an account, we store your email address, your password in hashed form, and your learning progress: completed lessons, best accuracy, XP, streak, the date of your last lesson, your daily goal and the words saved to your wallet.',
          'This data exists only so you can sign in and continue on another device. Your email is used only for address confirmation and password reset messages.',
          'If you sign in with Google, no password is created: Google shares your email address, name and a link to your profile photo with us. We receive nothing else from your Google account.',
        ],
      },
      {
        h: 'Where data is stored',
        p: [
          'Accounts and progress are stored with Supabase (Frankfurt data centre, EU). The web version is hosted on Vercel, which, like any host, keeps technical request logs (such as IP addresses) to run and protect the service.',
        ],
      },
      {
        h: 'What we do not do',
        p: [
          'No ads, no advertising trackers, no third-party analytics. We do not sell your data or share it with third parties for marketing.',
          'Romanian pronunciation uses your device’s own text-to-speech; the text is not sent to our servers. The app does not use the microphone, camera or location.',
        ],
      },
      {
        h: 'Deleting your data',
        p: [
          'You can delete your account and all saved progress in the app: 👤 icon → “Delete account”. Deletion is immediate and permanent. See the “Account deletion” page for details.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          'You may request a copy of your data, its correction or deletion. The app is not directed at children under 13.',
        ],
      },
    ],
  },
  deletion: {
    title: 'Account deletion',
    intro: 'You can delete your account and all related progress at any time.',
    sections: [
      {
        h: 'In the app or on the website',
        p: [
          '1. Open Română and sign in.',
          '2. Tap the 👤 icon in the top right corner.',
          '3. Tap “Delete account” (Удалить аккаунт) and confirm.',
        ],
      },
      {
        h: 'What is deleted',
        p: [
          'Your email address, password and all saved progress are deleted immediately and permanently. Database backups are overwritten within 7 days.',
          'Progress kept on the device without an account is removed together with the app.',
        ],
      },
    ],
  },
};

export const LEGAL = { ru, ua, en };
