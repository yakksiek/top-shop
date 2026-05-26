# Conventions

Naming and type-organization rules for this codebase. Consult before adding a new type, prop interface, or DTO. For the broader refactor context, see [context/foundation/REFACTOR_PLAN.md](context/foundation/REFACTOR_PLAN.md).

Rule of thumb: **follow the most popular TS/React community convention. No Hungarian notation.**

## Type naming

| Kind | Pattern | Example |
|---|---|---|
| Domain entity | `Noun` | `Product`, `Order` |
| String-union "kind" | `Noun` (no `Types` suffix) | `Gender`, `Category`, `Subcategory` |
| Component props | `<Component>Props` | `ProductCardProps` |
| Styled component props | `Styled<Name>Props` | `StyledOverlayProps`, `StyledSidebarProps` |
| Hook arguments | `Use<Name>Options` | `UseProductsOptions` |
| Form values | `<Name>FormValues` | `LoginFormValues`, `CreateAccountFormValues` |
| API request body | `<Action>Request` | `LoginRequest`, `CreateOrderRequest` |
| API response body | `<Action>Response` | `GetProductsResponse` |
| API query params | `<Action>Params` | `GetProductsParams` |
| Discriminated union | `Noun` for union, lowercase `kind` / `type` for the discriminator | `Notification { kind: 'success' \| 'error' }` |

## Forbidden

- **`I`-prefix on interfaces** (`IProduct`, `IUser`). Universally rejected by the TS team, Microsoft, Google, AirBnB. Interfaces and types are interchangeable to the consumer; the prefix leaks implementation detail.
- **`Types` / `Data` suffix on plain domain types** (`ProductTypes`, `UserData`). The suffix adds noise without disambiguating anything — a `Product` is already a type. Reserved for genuinely ambiguous cases (rare).
- **Duplicate type names across files.** If two files declare `interface FormData`, pick component-specific names (`LoginFormValues`, `SignupFormValues`) instead. IDE search and refactoring tools rely on names being unique.

## File naming for type modules

- **One type per file** when the type is reused across the app, named after the type: `Product.ts`, not `ProductTypes.ts`.
- **Co-locate component-specific types** inside the component file. A `Sidebar.tsx` declaring its own `SidebarProps` is fine — that type doesn't need its own module.
- **DTOs live together** in `src/api/types.ts`, not in `src/types/`. Domain types are app concepts; DTOs describe the wire.

## Worked examples (from this refactor)

| Before | After | Why |
|---|---|---|
| `interface FormData` (×4 in auth forms) | `LoginFormValues`, `CreateAccountFormValues`, `PasswordRecoveryFormValues`, `ChangePasswordFormValues` | Same name for different shapes; rename per-component matches the form-values convention. |
| `interface CategoryTypes` | `interface Category` | `Types` suffix on a domain type adds noise. |
| `GenderTypes.ts` | `Gender.ts` | File named after its type. |
| `interface User` (over-broad, 13 fields, 4 used once) | inline `{ name, surname, email, password }` at call site | Collided with Clerk's `User`; over-broad shapes get inlined or split into focused DTOs. |
| `interface SidebarProps` (in `Sidebar.styled.ts`) | `interface StyledSidebarProps` | Styled-component transient props use `Styled<Name>Props`. |
