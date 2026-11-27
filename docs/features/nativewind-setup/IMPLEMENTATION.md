# NativeWind setup

Goal: enable Tailwind utility classes for the Expo React Native app.

Acceptance: NativeWind and Tailwind are installed from the stable v4 guide, Metro and Babel are configured, TypeScript accepts `className`, and an app screen uses a utility class. Lint, typecheck, and web bundling must pass.

Decision: use stable NativeWind v4 and Tailwind v3. NativeWind v5 is a release candidate and explicitly marked unsuitable for production use in its docs. Expo SDK 58 compatibility is verified by bundling rather than assumed from the guide's SDK 57 note.

Scope: preserve the existing starter layout and shared components. NativeWind is available for new UI; migrate existing styles only as they are touched by feature work.
