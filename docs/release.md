# Публикация в App Store и Google Play

Сборка идёт в облаке Expo (EAS) — Mac и Android Studio не нужны. Все команды выполняются на компьютере в папке проекта.

## Один раз: аккаунты

| Что | Где | Стоимость |
|-----|-----|-----------|
| Expo | https://expo.dev/signup | бесплатно |
| Apple Developer Program | https://developer.apple.com/programs/enroll/ | $99 в год, проверка 1–2 дня |
| Google Play Console | https://play.google.com/console/signup | $25 один раз, проверка личности до нескольких дней |

Новым личным аккаунтам Google Play перед публикацией нужно провести **закрытое тестирование: 12 тестировщиков в течение 14 дней**. Начните его как можно раньше.

## Один раз: подключить проект к Expo

```bash
npm install -g eas-cli
eas login
eas init            # создаст проект в Expo и впишет его id в app.json
```

Ключи Supabase для сборок (такие же, как на Vercel):

```bash
eas env:create --environment production --name EXPO_PUBLIC_SUPABASE_URL --value https://gepxgtpcbjigjfowlkva.supabase.co --visibility plaintext
eas env:create --environment production --name EXPO_PUBLIC_SUPABASE_ANON_KEY --value <anon-ключ> --visibility plaintext
eas env:create --environment production --name EXPO_PUBLIC_SITE_URL --value https://romana-app-seven.vercel.app --visibility plaintext
```

Для `preview` — те же три команды с `--environment preview`.

## Проверочная сборка для Android (APK)

```bash
eas build --platform android --profile preview
```

Через 10–20 минут придёт ссылка на APK — его можно установить на любой Android-телефон и показать знакомым.

## Сборка и отправка в магазины

```bash
eas build --platform all --profile production
eas submit --platform ios --latest       # в App Store Connect → TestFlight
eas submit --platform android --latest   # в Google Play Console
```

При первой сборке для iOS EAS сам создаст сертификаты — нужно будет войти своим Apple ID. Для Android первую загрузку в Google Play Console удобнее сделать вручную (файл `.aab` со страницы сборки), дальше `eas submit` работает сам.

## Вход через Google и App Store

Правило App Store 4.8: если приложение предлагает вход через Google, оно должно предложить и равноценный «приватный» вход — на практике **Sign in with Apple**. Собственный вход по почте и паролю ревьюеры обычно заменой не считают. Перед отправкой в App Store нужно либо добавить «Войти через Apple» (Supabase это поддерживает), либо выключить Google для iOS-сборки. Google Play такого требования не ставит.

## Карточка в магазине

Тексты, ссылки на политику конфиденциальности и удаление аккаунта, ответы на анкету о данных — в `docs/store-listing.md`.

## Обновления

- **Новые уроки и исправления** без новой проверки в магазинах: `eas update --channel production --message "…"` (нужен пакет `expo-updates`, подключим перед первой публикацией).
- **Новая версия приложения**: поднять `version` в `app.json`, затем снова `eas build` и `eas submit`. Номера сборок EAS увеличивает сам (`autoIncrement`).
