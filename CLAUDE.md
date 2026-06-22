# Project Rules

These rules apply to all AI agents operating in this codebase.

## Context Policy

- Never read, scan, or glob files unless the user has explicitly named them in the current message.
- If context is needed to proceed, ask: "I need to see [specific file/function] — please confirm the path." Do not infer or explore.
- Accepted context forms: absolute path, relative path, `path:FunctionName`, or pasted text. Treat anything else as insufficient.
- Do not read `package.json`, `tsconfig.json`, directory trees, or config files unless explicitly asked or referenced by a STOP Gate check.
- `.claudeignore` controls filesystem exclusions; this policy controls behavior.

## Response Style

- Code changes: output only the changed block or a diff — not the full file.
- No explanation of what you did unless asked.
- No "I'll now...", "Next, I will...", or narration of steps.
- If a decision requires tradeoffs, state them in ≤3 bullet points, then stop.
- Thinking mode: use only for architectural decisions or cross-cutting refactors. Disable for single-function edits, renames, type changes, or formatting.

---

## STOP Gates

Hard interrupts. Do not proceed past any of these without explicit human confirmation (`"yes"`, `"proceed"`, `"approved"`, or equivalent) in the current session. Flag it and STOP.

- Change touches more than one file → list all affected files, then STOP
- A new dependency is needed
- An existing interface or contract would change
- The correct approach is genuinely ambiguous
- A lint, type, or test failure is encountered mid-task
- A structural file has no readable contract
- Change touches auth, session handling, cryptography, or role enforcement
- **Library resolution:** check `package.json` before referencing any library. If absent, flag and STOP.
- **Test gate:** if a test file exists, state "Test file found. Update to cover the change, leave as-is, or update tests only?" and STOP. If none exists, state "No test file found. Proceed without tests, or write tests first?" and STOP. Never silently skip or add tests.

---

## TypeScript

- Prefer `interface` for object shapes; `type` for unions, intersections, and mapped types.
- Never use non-null assertion (`!`) unless a preceding guard makes it provably safe.
- If interface merging or module augmentation is intentional, document it at the declaration site.
- Export types from the module that owns them; re-export from `index.ts` if needed.

---

## React / Next.js

> Pinned: **Next.js 15.x**, App Router.

- Server Components are the default. Add `"use client"` only when state, effects, or browser APIs are required.
- No prop drilling beyond two levels — use composition or context.
- Async Server Components fetch data inline; never use `useEffect` for data fetching.
- `loading.tsx` and `error.tsx` required for every route segment that fetches data.
- `generateStaticParams` required for dynamic segments statically knowable at build time. Document the `dynamicParams` fallback decision as a comment in the route segment.

### Client/Server Boundary

Props crossing `"use client"` must be serializable: no functions, class instances, `Date`, `Map`, `Set`, or `undefined` in object positions. Use plain JSON-compatible types, or transfer as strings and parse on the client. If a value cannot be serialized, lift the logic into the Server Component or pass through a context provider inside the client subtree.

## Data Fetching & Caching

- Always state cache intent explicitly — never rely on defaults.
- Server Component fetching: use `fetch` with `cache` or `next.revalidate` inline.
- Within-render deduplication: use `React.cache()`.
- Invalidation after mutation: use `revalidatePath` or `revalidateTag` inside Server Actions or Route Handlers.

---

## Data Mutations

- **Server Actions** — mutations from the component tree. Co-locate in the route segment or a sibling `actions.ts`.
- **Route Handlers** — HTTP-addressable endpoints only: webhooks, third-party callbacks, non-browser clients.
- Never call a Route Handler from your own client components to perform a mutation.
- Validate all Server Action inputs with Zod at the top of the action, before any business logic.

### Server Action Return Shape

All Server Actions must return a discriminated union:

- Validation errors (`fieldErrors` populated): return via `useActionState`. Do not throw.
- Unexpected failures (`fieldErrors: null`): throw so the nearest error boundary catches. Log the full error with `Logger` before throwing.
- Never return raw `Error` instances or stack traces to the client.

## State Management

Resolve in this order:

1. **Server state?** → TanStack Query (`useQuery` / `useMutation`).
2. **Local to ≤ 2 levels?** → `useState` / `useReducer`.
3. **Stable, cross-cutting config?** → `useContext`.

### useContext

- Use for stable, low-frequency values: auth identity, theme, locale, feature flags.
- Split contexts by update frequency. Memoize value with `useMemo` if the provider re-renders often.

## Suspense Boundaries

- Default: one boundary per route segment at the segment root.
- Move lower only when a subset of UI is meaningfully useful without deferred data — document why with a comment.
- Move higher only when two or more async components always resolve together.
- Do not wrap every async component individually.

## Environment Variables

- Validate all env vars at startup with Zod in a single `env.ts`. Import from there; never access `process.env` directly elsewhere.
- `NEXT_PUBLIC_` prefix only for values explicitly safe to expose to the browser. Treat as a security rule.
- For server-only vars, use the `server-only` package to hard-fail on accidental client imports.

## Error Handling

- Catch errors at the boundary closest to the failure.
- Log the full error (including stack) with `Logger` before any re-throw or return.
- Re-throw unexpected errors as `AppError`: `{ message: string; data?: unknown }`.
  - `message`: human-readable, caller-safe — no stack or internals.
  - `data`: structured context (IDs, inputs) relevant to the failure.
- Use `instanceof AppError` for upstream narrowing (error boundaries, middleware).
- Validation errors from Server Actions are not `AppError` — return as structured `fieldErrors`.

## Middleware

- Permitted: auth guards, redirects, locale detection, edge-safe logic.
- Always export a `matcher` config. Never run on all routes by default.
- Auth: re-validate identity inside Server Actions and Route Handlers — middleware guards alone are not sufficient.
