import { existsSync, copyFileSync, chmodSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const scriptsDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(scriptsDir, "..");
const gitHooksDir = join(repoRoot, ".git", "hooks");

// no-op when installed as a dependency in a consumer project (no .git/hooks here)
if (!existsSync(gitHooksDir)) {
  process.exit(0);
}

const src = join(scriptsDir, "pre-commit");
const dest = join(gitHooksDir, "pre-commit");
copyFileSync(src, dest);
chmodSync(dest, 0o755);
