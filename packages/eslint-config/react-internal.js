import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import { config as baseConfig } from "./base.js";

/** @type {import("eslint").Linter.Config[]} */
export const config = [
  ...baseConfig,
  reactHooks.configs["recommended-latest"],
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.serviceworker },
    },
  },
];

export default config;
