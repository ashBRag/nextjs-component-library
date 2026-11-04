# Next.js + Tailwind CSS Component Library

A Next.js boilerplate and Tailwind CSS component library — a starting point for building UI component sets with the App Router, plus a live demo of the included components.

## Getting Started

First, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts), [Tailwind CSS v4](https://tailwindcss.com), and React 19 for styling and UI.

Other scripts:

```bash
pnpm run lint            # next lint
pnpm run extract-props   # regenerate src/app/demo/generatedProps.json from component Props interfaces
```

## Components

You can check out the live demo at https://ashbrag.github.io/nextjs-component-library/demo

### Directory structure

```
src/
  components/
    <component>/
      <Component>.tsx        # component implementation + exported Props interface
      <Component>Demo.tsx    # colocated demo used by the /demo page
      <component>.base.css   # component-scoped styles (BEM-ish: .name, .name--variant)
    form/
      <field>/                # form-specific components (text-field, select, radio-group, status-bar)
  styles/
    globals.css               # global resets/imports (also lists every component's .base.css import)
    fonts.css                 # --font-major / --font-fira + [data-font] options: Google Fonts import + var contract
    themes/
      light.css
      dark.css
    profiles/
      base/                   # derived --color-* tokens shared by every profile (index.css)
      dev/                    # dev-profile palette + Background.tsx + corner.css (dev-only decorative brackets)
      gravitova/
      calma/
  app/
    demo/
      page.tsx                 # sideMenuGroups (nav) + sectionContent (id -> <ComponentDemo />) drive the page;
                                # each section renders in an Interface/Demo Tabs split
      ThemeColorPlayground.tsx # theme/profile + color playground demos (not tied to one component)
      generatedProps.json      # auto-generated Props interface snapshots (do not hand-edit)
```

Existing components: `badge`, `breadcrumbs`, `button`, `card`, `chip`, `dialog`, `divider`, `drawer`, `grid`, `menu`, `navList`, `sideMenu`, `table`, `tabs`, `timeline`, `toast`, `typography`, `wrapper` (`CenterWrapper`), and form components: `text-field`, `select`, `radio-group`, `status-bar`.

### Adding a new component

1. Create `src/components/<name>/<Name>.tsx` exporting the component and a `<Name>Props` interface.
2. Add `src/components/<name>/<name>.base.css` for scoped styles, import it at the top of the `.tsx` file (`import "./<name>.base.css"`), and add a matching `@import` line in `src/styles/globals.css`.
3. Create `src/components/<name>/<Name>Demo.tsx` — a small self-contained component (its own `useState` if it needs interaction) that renders a representative usage of `<Name>`. Keep demo data/state inside this file, not in `page.tsx`.
4. Wire it into `src/app/demo/page.tsx`:
   - Import the demo component.
   - Add `{ id: "<name>", label: "<Name>" }` to the relevant group in `sideMenuGroups` (or a new group).
   - Add `<name>: <NameDemo />` to the `sectionContent` map.
5. Add `<name>: "src/components/<name>/<Name>.tsx"` to the `sources` map in `scripts/extract-props.mjs`, then run `pnpm run extract-props` to regenerate `generatedProps.json` (powers the "Interface" tab on the demo page). If the component has no single Props interface to show (e.g. it's not tied to one component), add a `<name>: <YourInterfaceContent />` entry to the `interfaceOverrides` map in `page.tsx` instead.
6. If the component should be part of the published package's public API, add a subpath entry to `package.json`'s `exports` field (see "Available subpaths" below) and re-export it from `src/index.ts` / the relevant folder barrel.

Two sections on the demo page — Theme & Profile and Color Playground — aren't tied to a single component (they exercise `ThemeProvider`/CSS variables globally), so their demo code lives in `src/app/demo/ThemeColorPlayground.tsx` rather than under `src/components/`.

## Using this as a dependency in another project

This repo doubles as a component library. Add it to another project's `package.json` via a git dependency:

```json
"dependencies": {
  "nextjs-component-library": "git+https://github.com/ashBRag/nextjs-component-library.git"
}
```

or:

```bash
pnpm add git+https://github.com/ashBRag/nextjs-component-library.git
```

`dist/` (compiled ESM JavaScript + type declarations + CSS) is committed to this repo, so installing needs no build step on your end. The package is ESM-only (`"type": "module"`) — import it, don't `require()` it.

### Importing (tree-shakeable, recommended)

Import each component, hook, etc. from its own subpath — this pulls in only that module's code, not the rest of the library:

```tsx
import { Button } from "nextjs-component-library/button";
import { Card } from "nextjs-component-library/card";
import { useForm } from "nextjs-component-library/use-form";
import { ThemeProvider } from "nextjs-component-library/theme-provider";
import { fetchApi } from "nextjs-component-library/api";
```

Available subpaths: `/badge`, `/breadcrumbs`, `/button`, `/card`, `/chip`, `/dialog`, `/divider`, `/drawer`, `/grid`, `/radio-group`, `/select`, `/status-bar`, `/text-field`, `/menu`, `/nav-list`, `/side-menu`, `/table`, `/tabs`, `/timeline`, `/toast`, `/typography`, `/center-wrapper`, `/use-form`, `/use-scroll`, `/use-theme`, `/use-toast`, `/theme-provider`, `/api`, `/lib-utils`, `/form-validations`, `/types`.

### Importing from the root barrel (convenience, not tree-shakeable)

```tsx
import {
  Button,
  Card,
  useForm,
  ThemeProvider,
  fetchApi,
} from "nextjs-component-library";
```

The root barrel re-exports everything through one entry point. Because the build emits one file per source module (unbundled, so `"use client"` directives survive), bundlers can't safely tree-shake this path — importing even one component this way loads the whole library's JS. Fine for quick prototyping; prefer subpath imports for production apps, especially anywhere bundle size or render performance matters.

Import the compiled stylesheet once, near your app root (e.g. `layout.tsx` or `_app.tsx`):

```tsx
import "nextjs-component-library/styles/globals.css";
```

This single stylesheet includes Tailwind's compiled output, every component's scoped CSS, and both theme (`light`/`dark`) and profile (`dev`/`gravitova`/`calma`) variants — `ThemeProvider` toggles between them at runtime via `data-theme`/`data-profile` attributes on `<html>`, so nothing else needs to be imported separately.

```tsx
<ThemeProvider>
  <YourApp />
</ThemeProvider>
```

Notes:

- `react` and `react-dom` are `peerDependencies` (^19.0.0) — the consuming project must already have them installed; they aren't bundled.
- `globals.css` loads Inter (`--font-major`, body/UI text) and Fira Code (`--font-fira`, code blocks) from Google Fonts by default — typography works out of the box, same as the shipped theme/profile styling. See "Updating fonts" below to change this.
- The public API surface is defined in `src/index.ts` (and per-folder barrels under `src/components`, `src/hooks`, `src/providers`, `src/lib`, `src/utils`, `src/types`). Anything not re-exported there isn't part of the package's public API.

### Card options

```tsx
<Card title="Glass card" glass="md" shadow="lg" showCorners />
```

- `glass`: `"none"` (default) | `"sm"` | `"md"` | `"lg"` — translucent surface + backdrop blur; higher levels are more transparent with stronger blur. Tinted from the active profile's `--color-elevated`, so it adapts per profile/theme. Only visible over non-flat content (images, gradients, other elements). Combine with `shadow` independently.
- `shadow`: `"none"` (default) | `"sm"` | `"md"` | `"lg"` | `"glow"`.
- `showCorners`: defaults to `false`. Pass `showCorners` to render the corner brackets (dev profile only). **Breaking:** previously defaulted to `true` — cards that relied on the default no longer show brackets.

### Updating fonts

Every component's `font-family` resolves through two CSS variables: `--font-major` for UI/body text, `--font-fira` for code blocks (`<pre>`/`<code>`). The library ships Inter, Fira Code and JetBrains Mono via a Google Fonts `@import` in `src/styles/fonts.css`.

**Font option** — `ThemeProvider` sets `data-font` on `<html>` (`useTheme().setFont(...)`), which switches `--font-major`:

| `font` | UI font (`--font-major`) |
|---|---|
| `"sans"` (default) | Inter (`--font-inter`) |
| `"fira"` | Fira Code (`--font-fira`) |
| `"mono"` | JetBrains Mono (`--font-jetbrains`) |

Code blocks always use `--font-fira`. Family variables are declared under `:where(:root)` (zero specificity), so overriding `--font-inter` / `--font-fira` / `--font-jetbrains` anywhere wins; an override of `--font-major` on `:root` applies to the default `"sans"` option only.

**As a consumer** — override either variable in your own CSS, loaded _after_ `nextjs-component-library/styles/globals.css` so it wins the cascade (same pattern as overriding `--color-*` tokens):

```css
/* your-theme.css, imported after the library stylesheet */
:root {
  --font-major: "Your UI Font", sans-serif;
  --font-fira: "Your Mono Font", monospace;
}
```

To self-host instead of using Google Fonts at runtime, load your font with [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) and point the same two variables at its generated CSS variable:

```tsx
// layout.tsx
import { Inter } from "next/font/google"; // or next/font/local
const inter = Inter({ variable: "--your-ui-font", subsets: ["latin"] });
```

```css
:root {
  --font-major: var(--your-ui-font), sans-serif;
}
```

**As a maintainer of this repo** (changing the library's shipped default for every consumer) — edit `src/styles/fonts.css`: swap the `@import url(...)` for a different Google Fonts URL, and update the family variables (`--font-inter`/`--font-fira`/`--font-jetbrains`) and `[data-font]` mappings to match. That's the only file to touch; `globals.css` already imports it first. This repo's own demo app (`src/app/layout.tsx`) self-hosts the three fonts via `next/font`, setting `--font-inter`/`--font-fira`/`--font-jetbrains` on `<html>`; those win over `fonts.css`'s zero-specificity defaults.

### Updating to the latest version

A plain `pnpm install` in the consuming project won't notice new commits pushed here — package managers cache by resolved commit, not by branch. To pull the latest changes:

```bash
pnpm update nextjs-component-library
```

If that doesn't pick up the change, force a fresh resolve:

```bash
pnpm remove nextjs-component-library
pnpm add git+https://github.com/ashBRag/nextjs-component-library.git
```

Either way, this pulls the `dist/` committed at that commit.

For reproducible installs (recommended over floating on `main`), tag releases here:

```bash
git tag v1.1.0
git push origin v1.1.0
```

and have consumers pin to that tag instead of the branch:

```json
"nextjs-component-library": "git+https://github.com/ashBRag/nextjs-component-library.git#v1.1.0"
```

Bumping the tag in the consumer's `package.json` and running `pnpm install` then pulls in exactly that version, and never changes underneath them until they bump it again.

### Building and distribution (maintainers)

- `pnpm run build:lib` compiles `src/` to `dist/` with `tsc -p tsconfig.build.json` (one ESM `.js` + `.d.ts` per source file, `*Demo.tsx` and `src/app` excluded), copies component CSS, and builds `dist/styles/globals.css` with Tailwind. The pre-commit hook (`pnpm run setup-hooks`) runs this and stages `dist/` on every commit.
- Relative imports in library source must include the `.ts`/`.tsx` extension (e.g. `from "../typography/Typography.tsx"`). `tsc` rewrites them to `.js` on emit (`rewriteRelativeImportExtensions`), so the output resolves under Node and every bundler without post-processing. Extensionless relative imports will emit broken specifiers.

> **Note — planned: stop committing `dist/`.** `dist/` is currently committed because consumers install straight from git. The recommended replacement is publishing to **GitHub Packages** (or a private npm registry): `prepublishOnly` already runs `build:lib`, consumers get prebuilt output with normal semver ranges, and `dist/` can be removed from git and added to `.gitignore`. One-time cost: an `.npmrc` with a read token in each consumer repo. (Fallback if staying on git URLs: a GitHub Action that builds on `v*` tags and commits `dist/` to a `release` branch, keeping `main` clean.) Avoid a `prepare`-script build in consumers — pnpm 10 blocks dependency build scripts by default, so `dist/` would silently be missing.

## Deployment

This project deploys to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`. It builds a static export (`next build` with `output: "export"`) and publishes the `out/` directory.
