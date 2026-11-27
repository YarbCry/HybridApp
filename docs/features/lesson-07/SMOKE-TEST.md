# Lesson 7 verification

- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npx expo export --platform ios`: passed.
- `npx expo export --platform web`: passed.
- Device interaction: not checked in a simulator or on a phone.

The app's actual bottom tabs and the three-route drawer use Expo Router. The two in-screen tabs demonstrate local tab state rather than a separate top-tab navigator.
