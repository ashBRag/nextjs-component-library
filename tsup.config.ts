import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/**/*.{ts,tsx}",
    "!src/app/**",
    "!src/styles/profiles/dev/Background.tsx",
    "!src/types/css.d.ts",
  ],
  format: ["esm", "cjs"],
  dts: true,
  tsconfig: "tsconfig.build.json",
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", /\.css$/],
  bundle: false,
});
