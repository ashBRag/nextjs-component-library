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
      <component>.base.css   # component-scoped styles (BEM-ish: .name, .name--variant)
    form/
      <field>/                # form-specific components (text-field, select, radio-group, status-bar)
  styles/
    globals.css               # global resets/imports
    themes/
      light.css
      dark.css
    profiles/
      designer/index.css
      dev/                    # dev-profile styles + Background.tsx, form-fields.css, navList.css
  app/
    demo/
      componentConfig.ts       # registers each component + its demo variants/sections
      generatedProps.json      # auto-generated Props interface snapshots (do not hand-edit)
```

Existing components: `badge`, `button`, `card`, `chip`, `dialog`, `divider`, `drawer`, `menu`, `navList`, `sideMenu`, `table`, `tabs`, `timeline`, `toast`, `typography`, `wrapper` (`CenterWrapper`), and form components: `text-field`, `select`, `radio-group`, `status-bar`.

### Adding a new component

1. Create `src/components/<name>/<Name>.tsx` exporting the component and a `<Name>Props` interface.
2. Add `src/components/<name>/<name>.base.css` for scoped styles, and import it at the top of the `.tsx` file (`import "./<name>.base.css"`).
3. Register it in `src/app/demo/componentConfig.ts`: import the component and add a `ComponentGroup` entry (`id`, `title`, `component`, `sourceFile`, `sections` with variants).
4. If the Props interface should show up in the demo's generated docs, add an entry to `extraSources` in `scripts/extract-props.mjs` (only needed if `sourceFile` in `componentConfig.ts` doesn't already point at the right file), then run `pnpm run extract-props`.

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

Installing runs the library's `prepare` script automatically, which builds `dist/` (compiled JS/ESM/CJS + type declarations + CSS) from source — no separate build step needed on your end.

Then import components, hooks, providers, lib, and utils from the package root:

```tsx
import { Button, Card, useForm, ThemeProvider, fetchApi } from "nextjs-component-library";
```

Import the compiled stylesheet once, near your app root (e.g. `layout.tsx` or `_app.tsx`):

```tsx
import "nextjs-component-library/styles/globals.css";
```

This single stylesheet includes Tailwind's compiled output, every component's scoped CSS, and both theme (`light`/`dark`) and profile (`dev`/`designer`) variants — `ThemeProvider` toggles between them at runtime via `data-theme`/`data-profile` attributes on `<html>`, so nothing else needs to be imported separately.

```tsx
<ThemeProvider>
  <YourApp />
</ThemeProvider>
```

Notes:

- `react` and `react-dom` are `peerDependencies` (^19.0.0) — the consuming project must already have them installed; they aren't bundled.
- `globals.css` references `--font-fira` and `--font-major` CSS variables for typography. This repo defines them via `next/font`; consumers should define their own font variables with those names (or override them) to avoid falling back to `monospace`.
- The public API surface is defined in `src/index.ts` (and per-folder barrels under `src/components`, `src/hooks`, `src/providers`, `src/lib`, `src/utils`, `src/types`). Anything not re-exported there isn't part of the package's public API.

## Deployment

This project deploys to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`. It builds a static export (`next build` with `output: "export"`) and publishes the `out/` directory.
