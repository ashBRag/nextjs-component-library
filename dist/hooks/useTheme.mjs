"use client";
import "../chunk-FJBZBVPE.mjs";
import { use } from "react";
import { ThemeCntxt } from "../providers/ThemeProvider";
function useTheme() {
  const ctx = use(ThemeCntxt);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
export {
  useTheme
};
//# sourceMappingURL=useTheme.mjs.map