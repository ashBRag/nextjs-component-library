// tsup runs with `bundle: false`, so relative imports keep their extensionless
// specifiers (e.g. `from "../typography/Typography"`). Bundlers then resolve
// those to the CJS `.js` file even from `.mjs` modules, mixing formats and
// breaking CSS side-effect imports. Rewrite each relative specifier to point at
// the file of the same format: `.mjs` -> `.mjs`, `.js` -> `.js`.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import path from "node:path";

const DIST = "dist";

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (/\.(m?js)$/.test(entry.name)) out.push(full);
  }
  return out;
}

function resolveSpecifier(fromFile, spec, ext) {
  if (path.extname(spec)) return spec; // already has an extension (.css, .mjs, …)
  const base = path.resolve(path.dirname(fromFile), spec);
  if (existsSync(base + ext)) return spec + ext;
  if (existsSync(base) && statSync(base).isDirectory() && existsSync(path.join(base, "index" + ext))) {
    return spec.replace(/\/?$/, "/index" + ext);
  }
  return spec;
}

// import/export ... from "./x", import "./x", import("./x"), require("./x")
const PATTERN = /(\bfrom\s*|\bimport\s*\(?\s*|\brequire\s*\(\s*)(["'])(\.{1,2}\/[^"']*)\2/g;

let changed = 0;
for (const file of await walk(DIST)) {
  const ext = file.endsWith(".mjs") ? ".mjs" : ".js";
  const src = await readFile(file, "utf8");
  const next = src.replace(PATTERN, (m, lead, q, spec) => {
    const fixed = resolveSpecifier(file, spec, ext);
    return fixed === spec ? m : `${lead}${q}${fixed}${q}`;
  });
  if (next !== src) {
    await writeFile(file, next);
    changed++;
  }
}
console.log(`fix-import-extensions: updated ${changed} file(s)`);
