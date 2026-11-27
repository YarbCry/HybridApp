# React Native setup

Goal: add a runnable React Native app for the university project without disturbing the ES6 lessons.

Acceptance: the app is isolated in `mobile/`, uses the current Expo starter with TypeScript and routing, installs reproducibly from its lockfile, and passes its available static checks.

Structure: keep route files in `mobile/app/`, shared UI in `mobile/components/`, assets in `mobile/assets/`, and app configuration at `mobile/` root. Add feature folders only when a real feature exists.

Verification: install dependencies, run lint and TypeScript checks, and report simulator or device limitations. No product flow is specified yet, so retain the starter screen rather than inventing one.
