# Portfolio

Mihaela Macari — frontend developer portfolio, built as a Turborepo monorepo.

> 🚧 Actively in development.

## Stack

- **Turborepo** + **pnpm** workspaces (pnpm catalog for shared versions)
- **Next.js 16** (App Router) — `apps/web`, the portfolio site
- **Tailwind CSS v4** driven by shared design tokens
- **TypeScript 5.9**, **ESLint 9** (flat config), **Prettier**

## Layout

```
apps/
  web/                  Next.js 16 portfolio site
packages/
  typescript-config/    @repo/typescript-config — base / nextjs / react-library presets
  eslint-config/        @repo/eslint-config — flat-config presets (base / next / react-internal)
  tokens/               @repo/tokens — design tokens as CSS vars, Tailwind v4 theme, SCSS
  types/                @repo/types — shared domain + API contract types
```

## Getting started

```bash
pnpm install
pnpm dev          # runs apps/web on http://localhost:3000
```

## Scripts (run from the repo root)

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `pnpm dev`        | Run all apps in dev mode            |
| `pnpm build`      | Build everything through Turborepo  |
| `pnpm lint`       | ESLint across the workspace         |
| `pnpm type-check` | `tsc --noEmit` across the workspace |
| `pnpm test`       | Run package test suites             |
| `pnpm format`     | Prettier write                      |
