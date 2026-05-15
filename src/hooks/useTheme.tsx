"use client";
import { use } from "react";
import { ThemeCntxt, ThemeContextValue } from "@/providers/ThemeProvider";

export function useTheme(): ThemeContextValue {
  const ctx = use(ThemeCntxt);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
