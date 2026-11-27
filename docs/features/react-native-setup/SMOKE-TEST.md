# React Native setup verification

- `npm install`: passed; lockfile generated.
- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npx expo export --platform web`: passed.
- iOS/Android simulator or physical device: not launched in this session.

`npm audit --omit=dev` reports three moderate findings along the Expo → `@expo/fingerprint` → `minimatch` dependency chain. npm only offers an Expo SDK downgrade as an automatic fix, so keep the current official SDK and review when Expo publishes a compatible update.
