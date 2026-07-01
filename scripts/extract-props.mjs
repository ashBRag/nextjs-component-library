import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const configPath = join(rootDir, "src/app/demo/componentConfig.ts");
const outPath = join(rootDir, "src/app/demo/generatedProps.json");

const extraSources = {
  dialog: "src/components/dialog/Dialog.tsx",
  drawer: "src/components/drawer/Drawer.tsx",
  "text-field": "src/components/form/text-field/TextField.tsx",
  "radio-group": "src/components/form/radio-group/RadioGroup.tsx",
  select: "src/components/form/select/Select.tsx",
  "status-bar": "src/components/form/status-bar/StatusBar.tsx",
  "dropdown-menu": "src/components/menu/Menu.tsx",
  tabs: "src/components/tabs/Tabs.tsx",
  "nav-list": "src/components/navList/NavList.tsx",
  timeline: "src/components/timeline/Timeline.tsx",
  "screen-center-wrapper": "src/components/wrapper/CenterWrapper.tsx",
};

function extractInterfaceBlock(source) {
  const match = source.match(/interface\s+\w*Props\s*\{/);
  if (!match) return null;

  const start = match.index + match[0].length - 1;
  let depth = 0;
  for (let i = start; i < source.length; i++) {
    if (source[i] === "{") depth++;
    if (source[i] === "}") {
      depth--;
      if (depth === 0) {
        return source.slice(match.index, i + 1);
      }
    }
  }
  return null;
}

function main() {
  const configSource = readFileSync(configPath, "utf-8");
  const groupPattern = /id:\s*"([^"]+)",[\s\S]*?sourceFile:\s*"([^"]+)",/g;

  const result = {};
  let m;
  while ((m = groupPattern.exec(configSource)) !== null) {
    const [, id, relPath] = m;
    const absPath = join(rootDir, relPath);
    try {
      const source = readFileSync(absPath, "utf-8");
      const block = extractInterfaceBlock(source);
      result[id] = block ?? "// No Props interface found";
    } catch (err) {
      result[id] = `// Could not read ${relPath}: ${err.message}`;
    }
  }

  for (const [id, relPath] of Object.entries(extraSources)) {
    const absPath = join(rootDir, relPath);
    try {
      const source = readFileSync(absPath, "utf-8");
      const block = extractInterfaceBlock(source);
      result[id] = block ?? "// No Props interface found";
    } catch (err) {
      result[id] = `// Could not read ${relPath}: ${err.message}`;
    }
  }

  writeFileSync(outPath, JSON.stringify(result, null, 2) + "\n");
  console.log(`Wrote ${Object.keys(result).length} interface entries to ${outPath}`);
}

main();
