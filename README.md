
# HybridApp

This is our university exercise project.

## React Native app

The app lives in [`mobile/`](mobile/). It uses Expo, React Native, TypeScript, Expo Router, and NativeWind for Tailwind utility classes, following the [React Native setup guide](https://reactnative.dev/docs/environment-setup) and [NativeWind installation guide](https://www.nativewind.dev/docs/getting-started/installation).

```sh
cd mobile
npm ci
npm start
```

Use the QR code with Expo Go on a phone, or press `i` for the iOS simulator / `a` for an Android emulator after installing the corresponding platform tools. Run `npm run lint` and `npx tsc --noEmit` before submitting changes.

The `Part-1-JavaScript-ES6/` folder contains the earlier standalone lessons. Keep app routes in `mobile/src/app/`, reusable UI in `mobile/src/components/`, and images/fonts in `mobile/assets/`. Add feature folders under `mobile/src/` as the project gains actual features.

For new screens, style React Native components with `className`, for example `<Text className="text-lg font-semibold">Hello</Text>`. Tailwind scans files under `mobile/src/`; restart Metro after changing its configuration.

## Team
- Happy
- Phalan
- Ten
