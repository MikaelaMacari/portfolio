import globals from "globals";

import { config } from "@repo/eslint-config/base";

// Only for stray config/script files that live directly at the repo root
// (e.g. lint-staged.config.mjs). Every app/package under apps/* and
// packages/* has its own eslint.config.mjs, which ESLint finds first.
/** @type {import("eslint").Linter.Config[]} */
export default [
  ...config,
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    ignores: ["apps/**", "packages/**"],
  },
];
