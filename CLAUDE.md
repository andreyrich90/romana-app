@AGENTS.md

## Project

A Duolingo-style app for learning Romanian. Explanations are in Russian (`ru`) and Ukrainian (`ua`); every learner-facing string exists in both, enforced by the `Bi` type in `src/content/types.ts`. Interface copy lives in `src/i18n/ui.ts`.

- **Course content** is plain TypeScript data: `src/content/course.ts` is the map, one file per lesson under `src/content/lessons/`. The plan for the rest of A1 is `docs/curriculum-a1.md`.
- **`src/engine/`** has no React in it: `check.ts` grades answers (normalization, diacritics-tolerant and one-typo-tolerant typed answers), `session.ts` is the lesson reducer (hearts, re-queueing wrong answers, progress, XP). Keep it that way so it stays easy to test.
- **Progress** is local (`AsyncStorage`, `src/state/progress.tsx`). No backend yet.
- Speech is `expo-speech` with `ro-RO`; quality depends on the device's installed voices.

Package installs in this environment need `EXPO_OFFLINE=1 npx expo install <pkg>` (the Expo API is not reachable). `react` and `react-dom` must stay on the same exact version.
