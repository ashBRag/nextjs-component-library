import { cp, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

async function findCssFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findCssFiles(fullPath)));
    } else if (entry.name.endsWith(".css")) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = await findCssFiles("src/components");

for (const file of files) {
  const dest = path.join("dist", path.relative("src", file));
  await mkdir(path.dirname(dest), { recursive: true });
  await cp(file, dest);
}

await mkdir("dist/types", { recursive: true });
await cp("src/types/css.d.ts", "dist/types/css.d.ts");
