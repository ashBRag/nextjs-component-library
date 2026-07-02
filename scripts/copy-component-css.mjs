import { cp, mkdir } from "node:fs/promises";
import { glob } from "node:fs";
import { promisify } from "node:util";
import path from "node:path";

const globAsync = promisify(glob);

const files = await globAsync("src/components/**/*.css");

for (const file of files) {
  const dest = path.join("dist", path.relative("src", file));
  await mkdir(path.dirname(dest), { recursive: true });
  await cp(file, dest);
}

await mkdir("dist/types", { recursive: true });
await cp("src/types/css.d.ts", "dist/types/css.d.ts");
