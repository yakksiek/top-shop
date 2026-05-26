# Top-Shop Refactor Plan

> Living contract for the refactor work. Edit by amendment, not rewrite.
> Last updated: 2026-05-26

## Context & goal

Top-shop is the personal project closest in scope to the role being targeted: **UX Engineer at Sartiq (Shootify)**. This refactor prepares it as a portfolio piece. The job listing emphasises:

- "You know everything about CSS"
- Portfolio showing interactions, animation, accessibility, and design-system work
- Maintaining a design system's **motion language**
- Sensible AI workflow usage

Sartiq's site (Next.js, image-heavy, scroll-driven transitions, no 3D) is the visual reference.

## Workflow rules

1. **One branch per phase.** Merge to `main` before the next phase begins.
2. **Explanation before implementation.** Each phase opens with a walkthrough of what will change and why. Implementation starts only after the user confirms understanding. Comprehension-check questions are welcome.
3. **Decisions deferred.** Phase 4 (Clerk specifics) and Phase 5d (scroll showcase) are deliberately not pre-decided. Those decisions happen at the start of each phase.
4. **Amend, don't rewrite.** Changes to this plan are appended or edited inline; we don't start over.

## Naming conventions

**Rule of thumb**: follow the most popular TS/React community convention. No Hungarian notation.

| Kind | Pattern | Example |
|---|---|---|
| Domain entity | `Noun` | `Product`, `User`, `Order` |
| String-union "kind" | `Noun` (no `Types` suffix) | `Gender`, `Category`, `Subcategory` |
| Component props | `<Component>Props` | `ProductCardProps` |
| Styled component props | `Styled<Name>Props` | `StyledOverlayProps` |
| Hook arguments | `Use<Name>Options` | `UseProductsOptions` |
| Form values | `<Name>FormValues` | `LoginFormValues` |
| API request body | `<Action>Request` | `CreateOrderRequest`, `LoginRequest` |
| API response body | `<Action>Response` | `GetProductsResponse` |
| API query params | `<Action>Params` | `GetProductsParams` |
| Discriminated union | `Noun` for union, `kind`/`type` lowercase for discriminator | `Notification { kind: 'success' \| 'error' }` |

**Forbidden**:
- `I`-prefix on interfaces. Universally rejected — TS team, Microsoft, Google, AirBnB.
- `Types` / `Data` suffix on plain domain types.
- Duplicate type names across files (current offenders: `FormData` ×3, `SidebarProps` ×3, `CartProductListProps` ×2).

**File naming for type modules**: one type per file when reused across the app, named after the type (`Product.ts`, not `ProductTypes.ts`). Co-locate component-specific types inside the component file.

## Error handling — tiered model

Three tiers based on severity and recoverability:

| Tier | Trigger | UI | Recovery |
|---|---|---|---|
| **1. Inline** | Form validation, single-action mutation failure, expected auth issue ("wrong password", "please log in") | Inline message under the field/button (existing `SubmitMessage`) | User adjusts and retries |
| **2. Section** | A page/section's loader or query fails | Section-level error UI replacing the broken feature, with "Try again" button | User retries or navigates away |
| **3. Global modal + redirect** | Unrecoverable: session lost mid-use, uncaught render error, network gone, `ServerError` | Full-screen modal "Something went wrong" + single "Go home" button | User clicks → cache reset → navigate to `/` |

**Tier 3 implementation rules**:
- **User-dismissed only.** No auto-redirect timer (accessibility + jarring UX).
- Modal uses existing modal vocabulary (`SidebarModal` portal pattern).
- "Go home" resets React Query cache, clears contexts, then `navigate('/', { replace: true })`.

**Mapping**:
- `ValidationError`, expected `AuthError` → Tier 1
- `NotFoundError`, loader/query failure scoped to a section → Tier 2
- Unexpected `AuthError`, `ServerError`, `NetworkError`, uncaught renders → Tier 3

---

## Phase 1 — Remove Supabase

### Findings
- `src/api/supabase.ts` exists with hardcoded URL + anon key.
- No file imports it (already-confirmed via grep).
- `.env` no longer contains Supabase keys.
- `@supabase/supabase-js` still in `package.json`.

### Changes
1. Delete `src/api/supabase.ts`.
2. Remove `@supabase/supabase-js` from `package.json`. Regenerate `package-lock.json` via `npm install`.
3. Run `npm run build` to confirm no fallout.

### Manual step (user)
Rotate the Supabase anon key in the Supabase dashboard (or delete the project), since the key was committed to git history. Anon keys are designed to be public, but rotation is hygiene.

### Branch: `phase/1-remove-supabase`

---

## Phase 2 — API restructure + type conventions

### Findings
- `src/api/` mixes data fetchers and route loaders.
- Loaders inline their own `fetch` URLs instead of calling api functions.
- `favouritesLoader.ts` is dead code (not referenced in `routes.tsx`).
- Naming inconsistencies: `Types` suffix on 8 domain type files; collisions for `FormData`, `SidebarProps`, `CartProductListProps`.

### Target layout
```
src/api/
├── http.ts          # fetchJson<T> helper (throws typed errors from Phase 3)
├── errors.ts        # error classes (Phase 3)
├── types.ts         # all API Request/Response DTOs
├── products.ts      # was apiProducts.ts
└── auth.ts          # was apiAuth.ts (refactored in Phase 4)
src/routing/
└── loaders/
    ├── mainPageLoader.ts
    ├── productListLoader.ts
    └── productLoader.ts
```

### Changes
1. Create `src/api/types.ts`, define `*Request`/`*Response` DTOs.
2. Move loaders to `src/routing/loaders/`; loaders call api functions, not inline `fetch`.
3. Delete `src/api/favouritesLoader.ts` (dead).
4. Update `routes.tsx` imports.
5. Naming sweep:
   - Drop `Types` suffix: `GenderTypes` → `Gender`, `CategoryTypes` → `Category`, `SubcategoryTypes` → `Subcategory`, `MyProfileCardTypes` → `MyProfileCardKind`, `ProductFilterKeyTypes` → `ProductFilterKey`, `OverviewCategoryTypes` → `OverviewCategory`, `ServicesItemTypes` → `ServicesItem`.
   - Rename file containers to match.
   - File-only rename: `FavouritesListTypes.ts` → `FavouritesList.ts` (type identifier `FavouritesList` already clean; missed in original findings, added by amendment during step 8 execution).
   - Dedupe `FormData` → `LoginFormValues` / `SignupFormValues` / `PasswordRecoveryFormValues`.
   - Dedupe `SidebarProps` (consolidate into one source of truth).
   - Dedupe `CartProductListProps`.
   - Rename `interface User` (collision with Clerk's) → `AppUser` or remove if Clerk's covers it.
6. Write `CONVENTIONS.md` with the table from this plan.

### Branch: `phase/2-api-and-conventions`

---

## Phase 3 — Global error handling

### Findings
- `react-error-boundary` is in `package.json` but never imported.
- Only root `errorElement: <ErrorPage />` exists.
- API funcs throw generic `Error('Failed to load products')` — no status/code/class.
- 4 different `onError` styles across mutation hooks.
- No global React Query error handler.

### Changes
1. **`src/api/errors.ts`** — typed classes:
   ```
   ApiError(status, code, body) extends Error
   ValidationError      // 400 / 422
   AuthError            // 401 / 403
   NotFoundError        // 404
   ServerError          // 5xx
   NetworkError         // fetch rejected entirely
   ```
2. **`src/api/http.ts`** — `fetchJson<T>(url, init?)`. Parses response, throws the right subclass, returns typed JSON.
3. **`useErrorHandler` hook** — classifies any error into `{ tier, message }`. Mutation `onError` callbacks delegate to it.
4. **`GlobalErrorContext` + `<GlobalErrorModal />`** — context any caller can push to; renders Tier 3 modal.
5. **`<ErrorBoundary>`** (from `react-error-boundary`) wrapping `<RouterProvider />` in `main.tsx`. Pushes to `GlobalErrorContext` on uncaught render errors.
6. **Per-feature `<ErrorBoundary>`** around `Dashboard`, `ProductDetails`, `ProductsList` for Tier 2.
7. **React Query `QueryCache` / `MutationCache`** global `onError` → `useErrorHandler` → appropriate tier.
8. Replace all `throw new Error(...)` in `api/` with typed throws.
9. Keep `<ErrorPage />` as React Router `errorElement` for loader failures.

### Branch: `phase/3-error-handling`

---

## Phase 4 — Clerk login refactor

### Findings
- `App.tsx` is dead code with a duplicate `<ClerkProvider>` (only `main.tsx` is used).
- Custom `useUser` wraps `window.Clerk.user` in React Query — wrong layer; Clerk ships its own reactive `useUser`/`useAuth`.
- `apiAuth.ts` uses `window.Clerk` everywhere — fragile, causes `Clerk not initialized` failures.
- `LoginFrom.tsx` (typo for `LoginForm`) uses `setTimeout(() => navigate('/dashboard'), 500)` as a workaround.
- `useUpadateUserPassword.ts` (typo for `useUpdateUserPassword`).
- `ProtectedRoute` uses `useEffect`+`navigate()` (flash of empty content). Better: `<Navigate>` or `redirect()`.

### Approach
**Implement strictly per the official Clerk React docs.** Fetch the docs at the start of this phase and align the implementation to the documented patterns. No custom abstractions on top of Clerk unless the docs explicitly endorse them.

### Likely changes (subject to docs review)
1. Delete `src/App.tsx`.
2. Delete custom `src/features/authentication/useUser.ts`; replace all call sites with Clerk's built-in `useUser` / `useAuth`.
3. Rewrite `api/auth.ts` to use Clerk's React hooks (`useSignIn`, `useSignUp`, `useClerk`) instead of `window.Clerk`.
4. Rename `LoginFrom.tsx` → `LoginForm.tsx` (fix typo, fix exported name).
5. Rename `useUpadateUserPassword.ts` → `useUpdateUserPassword.ts`.
6. Drop the `setTimeout` hack — derive navigation from Clerk's reactive `isSignedIn`.
7. Gate dev test credentials behind `import.meta.env.DEV`.
8. Use new `AuthError` class (Phase 3) for typed failures.
9. Refactor `ProtectedRoute` to use `<Navigate>` or react-router `redirect()`.
10. Reconsider `unsafeMetadata.favourites` — verify Clerk's reactivity now that we're using the real `useUser`.

### Branch: `phase/4-clerk-refactor`

---

## Phase 5 — Motion language

### Findings
- Only motion token: `--animation-and-timing: 400ms ease` used in ~12 places.
- Most CSS uses inline `0.3s ease` numbers, inconsistent.
- Only animation library in use: styled-components `keyframes` for two spinners.
- `react-slick` for carousels.
- No `prefers-reduced-motion` handling.

### 5a — Motion token system (GlobalStyles.ts)
```css
--duration-instant:   100ms;
--duration-fast:      180ms;
--duration-base:      280ms;
--duration-slow:      480ms;
--duration-emphasis:  700ms;

--ease-standard:      cubic-bezier(0.2, 0, 0, 1);
--ease-emphasized:    cubic-bezier(0.3, 0, 0, 1);
--ease-in:            cubic-bezier(0.4, 0, 1, 1);
--ease-out:           cubic-bezier(0, 0, 0.2, 1);
```
- Remove `--animation-and-timing`; replace its ~12 callers with token pairs.
- Sweep inline `0.3s ease` etc. → tokens.

### 5b — Reduced motion
Global CSS rule honouring `prefers-reduced-motion: reduce` — disables non-essential motion at the document level.

### 5c — Add `motion` (Framer Motion)
Two showcase patterns:
- **Route transitions** in `AppLayout` — `<AnimatePresence>` around `<Outlet />`, subtle fade+translate.
- **Product card stagger on scroll** — `motion.li` with `whileInView` + stagger in `ProductListItem`.

### 5d — DEFERRED: Sartiq-style scroll showcase
Scroll-driven hero on `MainPage` (image morphs/cross-fades on scroll, mimicking Sartiq's still-life → on-model transitions). Decided at the start of Phase 5 based on remaining time and energy.

### 5e — Document motion language
Short `MOTION.md`: token table, when-to-use rules, reduced-motion contract.

### Branch: `phase/5-motion`

---

## Phase 6 — Documentation

Expand README with:
- Conventions (link to `CONVENTIONS.md`)
- Architecture overview
- Error handling model
- Motion system (link to `MOTION.md`)

Goal: a reader-friendly portfolio piece. Short, crisp, with rationale.

### Branch: `phase/6-docs`

---

## Open / deferred decisions

- **Phase 1**: rotate Supabase anon key (manual user step, flagged).
- **Phase 4**: full Clerk implementation details, fetched from docs at phase start.
- **Phase 5d**: scroll-driven hero yes/no, decided at phase start.
