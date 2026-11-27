# NativeWind setup verification

- `npm run lint`: passed.
- `npx tsc --noEmit`: passed, including a `className` on React Native `Text`.
- `npx expo export --platform web`: passed; Tailwind CSS emitted in the web bundle.
- `npx expo export --platform ios`: passed.
- Visual check on a physical device or simulator: not run in this session.
