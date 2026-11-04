"use client";
import { use } from "react";
import { ThemeCntxt } from "../providers/ThemeProvider.js";
export function useTheme() {
    const ctx = use(ThemeCntxt);
    if (!ctx)
        throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}
//# sourceMappingURL=useTheme.js.map