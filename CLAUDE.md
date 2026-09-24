@AGENTS.md

## Project

A Duolingo-style app for learning Romanian. Explanations are in Russian (`ru`) and Ukrainian (`ua`); every learner-facing string exists in both, enforced by the `Bi` type in `src/content/types.ts`. Interface copy lives in `src/i18n/ui.ts`.

- **Course content** is plain TypeScript data: `src/content/course.ts` is the map, one file per lesson under `src/content/lessons/`. The plan for the rest of A1 is `docs/curriculum-a1.md`.
- **`src/engine/`** has no React in it: `check.ts` grades answers (normalization, diacritics-tolerant and one-typo-tolerant typed answers), `session.ts` is the lesson reducer (hearts, re-queueing wrong answers, progress, XP), `practice.ts` builds the "Тренировка" session from spaced-repetition state, `level.ts` and `achievements.ts` derive level and badges from progress (nothing about them is stored). Keep it that way so it stays easy to test.
- **Progress** is kept locally (`AsyncStorage`, `src/state/progress.tsx`) and, once signed in, mirrored to Supabase (`progress` table, one JSON row per user; schema in `supabase/schema.sql`). `src/state/model.ts` holds the pure parts: `merge()` takes the larger value of every field (streak, `lastDay` and freezes come together from the copy with the later `lastDay`; `recall` entries by the later `t`), so it is safe to run repeatedly and in any order — keep it that way. Settings (`lang`, `wordBank`, `dailyGoal`) stay per device and are not synced.
- **Daily goal and streak**: XP is counted per local day in `xpByDay`; the streak grows on the day the goal is first reached, not on any lesson. Missed days are covered by freezes (one per 7 streak days, at most `MAX_FREEZES`). **Spaced repetition**: every graded answer calls `recordAnswer("lessonId#index", ok)`, which moves the exercise between Leitner boxes (`INTERVALS`). Exercise keys are positional, so reordering exercises inside a finished lesson reshuffles its review history — append instead.
- **Auth** (`src/state/auth.tsx`) is email + password. `src/lib/supabase.ts` exports `null` when `EXPO_PUBLIC_SUPABASE_URL` / `EXPO_PUBLIC_SUPABASE_ANON_KEY` are missing; every account feature must keep working as guest mode in that case. Account deletion (`delete_my_account` RPC) is required by the App Store — do not remove it.
- `EXPO_PUBLIC_*` values are inlined at build time; after changing them locally, export with `--clear` or Metro serves the old bundle.
- Speech is `expo-speech` with `ro-RO`; quality depends on the device's installed voices.

Package installs in this environment need `EXPO_OFFLINE=1 npx expo install <pkg>` (the Expo API is not reachable). `react` and `react-dom` must stay on the same exact version.
