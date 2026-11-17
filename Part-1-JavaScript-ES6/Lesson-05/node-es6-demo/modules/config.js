// This module combines one default export with several named exports.
const config = {
  apiUrl: "/api",
};

export const timeout = 5000;

export function connect() {
  return "Connected";
}

export default config;
