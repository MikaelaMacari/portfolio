import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import turbo from "eslint-plugin-turbo";

/**
 * Wraps the officially supported `eslint-config-next` and adds the
 * monorepo-wide turbo + prettier rules.
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  ...nextVitals,
  ...nextTs,
  {
    plugins: { turbo },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  eslintConfigPrettier,
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default config;
