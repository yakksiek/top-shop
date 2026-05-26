# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Active refactor — read first

A multi-phase refactor is in progress; the contract lives at [context/foundation/REFACTOR_PLAN.md](context/foundation/REFACTOR_PLAN.md). **It is the source of truth for active work — consult it before any non-trivial change.** The plan defines:

- Naming conventions and DTO patterns
- The tiered error-handling model
- Per-phase scope (what's planned, what's done)
- Deferred decisions (Phase 4 Clerk specifics, Phase 5d scroll showcase)
- Workflow rules (one branch per phase, explain-before-implement)

If you're unsure whether a change falls inside a phase's scope, scan the plan first. When the plan and CLAUDE.md disagree, the plan wins (it's the more recent authority on active decisions).

The repo is being prepared as a portfolio piece for a UX Engineer role. Decisions that increase demonstrable design-system / motion / accessibility signal are favoured over generic ones.

## Commands

```bash
npm install       # install deps
npm run dev       # vite dev server (with --host so it's reachable on LAN)
npm run build     # tsc && vite build (typecheck + production build)
npm run lint      # eslint . --ext ts,tsx --max-warnings 0
npm run preview   # preview the production build locally
```

No test runner is wired up — `package.json` has no `test` script and there are no test files. Tests are listed in the README's "possible future features."

`npm run build` is the typecheck — TS is configured `noEmit: true`, so `tsc` only validates.

## Architecture

**Stack**: React 18 + TypeScript + Vite. Deploys to Vercel (see [vercel.json](vercel.json)).

**Auth**: Clerk (`@clerk/clerk-react`). The README still claims Supabase — it's outdated. The Supabase client at `src/api/supabase.ts` is dead code scheduled for deletion in Phase 1 of the refactor.

**Backend**: external JSON API at `BASE_URL` ([src/constants/api.ts](src/constants/api.ts)) — `https://verbal-topshop.vercel.app`. Endpoints follow JSON Server conventions (`?_limit`, `?_page`, `?_expand=product`, `X-Total-Count` header, `?key_like=value` filters, etc.).

### Data fetching — two paths

The codebase intentionally splits data fetching between two systems:

1. **React Router data loaders** ([src/routing/loaders/](src/routing/loaders/), wired in [src/routing/routes.tsx](src/routing/routes.tsx)) — for route-level data that should block navigation. Loaders call fetcher functions in [src/api/products.ts](src/api/products.ts); they don't `fetch` directly.
2. **TanStack Query** — for user data (`useUser`), mutations (`useLogin`, `useSignup`, etc.), and anything fetched after navigation. `QueryClientProvider` is set up in [src/main.tsx](src/main.tsx).

When adding new data: loader if the route can't render without it, Query otherwise.

### Entry point quirk

[src/main.tsx](src/main.tsx) is the real entry. [src/App.tsx](src/App.tsx) is **dead code** — it re-wraps `<ClerkProvider>` around `<AppLayout />` but is never imported. Don't add logic there; it'll be deleted in Phase 4.

### Folder layout

```
src/
├── api/             # data fetchers + DTO types (types.ts)
├── components/      # shared cross-feature UI (Button, Header, Form/, Sidebar/, etc.)
├── constants/       # API base URL, pagination, currencies
├── contexts/        # 6 React contexts for app-wide UI state (Cart, Favourites, modal toggles, search)
├── db/              # static JSON/TS data (menu config, country codes, form definitions)
├── features/        # feature folders: authentication, cart, dashboard, product
├── routing/         # routes.tsx + loaders/
├── styles/          # GlobalStyles.ts (CSS variables), breakpoints.ts
├── types/           # shared TS types (Product, User, gender/category unions, etc.)
├── utils/           # helpers, formatters
└── views/           # page components, one per route
```

Each feature folder mirrors the pattern: components/, custom hooks (`useX.ts`), and feature-specific styled components.

### Styling

styled-components with CSS custom properties declared in [src/styles/GlobalStyles.ts](src/styles/GlobalStyles.ts). Breakpoints via `device` from [src/styles/breakpoints.ts](src/styles/breakpoints.ts) (mobile ≤768px, tablet ≥769px, desktop ≥1024px). Font is `FuturaLight` (custom), loaded from `src/font/`.

A single motion token exists today (`--animation-and-timing: 400ms ease`), used inconsistently. A full motion token system is planned in Phase 5 of the refactor.

### State & contexts

Six contexts handle cross-cutting UI state. They're nested in `main.tsx` in a specific order (Modal → Favourites → LoginModal → Cart → SidebarNavigation → SearchInput) — preserve the order when adding new providers, inner contexts may depend on outer ones (`FavouritesContext` reads `useUser`).

### Auth flow — known issues

- **Custom `useUser`** at [src/features/authentication/useUser.ts](src/features/authentication/useUser.ts) wraps `window.Clerk.user` in React Query. This is an anti-pattern (Clerk ships its own reactive `useUser`); it's slated for replacement in Phase 4.
- **`apiAuth.ts`** uses `window.Clerk` directly rather than Clerk's React hooks — same Phase 4 target.
- **Filename typos** scheduled for fix in Phase 4: `LoginFrom.tsx` → `LoginForm.tsx`, `useUpadateUserPassword.ts` → `useUpdateUserPassword.ts`.
- `LoginFrom.tsx` ships **hardcoded test credentials** as default form values — fine for now, will move behind `import.meta.env.DEV` in Phase 4.
- `setTimeout(() => navigate('/dashboard'), 500)` in the login flow is a workaround for the broken `useUser` reactivity — don't replicate this pattern.

## Conventions

Naming and type conventions are defined in [context/foundation/REFACTOR_PLAN.md](context/foundation/REFACTOR_PLAN.md). Highlights:

- No `I`-prefix on interfaces.
- Component props use `<Component>Props`.
- API DTOs use `<Action>Request` / `<Action>Response` (introduced in Phase 2).
- Domain types are plain nouns: `Product`, `Gender` — drop the `Types` suffix where the type isn't a meaningful discriminant.

ESLint is strict: `--max-warnings 0`. TS is strict + `noUnusedLocals` + `noUnusedParameters` + `noFallthroughCasesInSwitch`. The lint command fails on any warning.

## Environment

Only one env var is required: `VITE_CLERK_PUBLISHABLE_KEY` (in `.env`). The `.env` file is gitignored. Reading `.env*` is blocked at the permission layer.
