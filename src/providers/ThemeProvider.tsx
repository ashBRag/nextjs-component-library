"use client";
/*
  ThemeProvider component manages the application's theme and profile settings.
  It provides a context that allows child components to access and update the current theme and profile.
  All theme/profile CSS ships in a single compiled stylesheet and is scoped via
  [data-theme]/[data-profile] attribute selectors, so switching is a synchronous
  attribute toggle rather than a dynamic asset load.
*/
import React, { createContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";
export type Profile = "dev" | "designer";

// Defines the shape of the theme context value
export interface ThemeContextValue {
  theme: Theme;
  profile: Profile;
  setTheme: (t: Theme) => void;
  switchProfile: (p: Profile) => void;
}

export const ThemeCntxt = createContext<ThemeContextValue>({
  theme: "dark",
  profile: "dev",
  setTheme: () => {},
  switchProfile: () => {},
});

/*
    1. Manages theme and profile state.
    2. Toggles [data-theme]/[data-profile] attributes on <html>.
    3. Provides context to the app for theme/profile access.

    This allows the app to switch themes and profiles without a full reload,
    enhancing user experience and customization options.

  @param {React.ReactNode} children - The child components that will consume the theme context.
  @returns {JSX.Element} The ThemeProvider component that wraps its children with the theme context.
  @example
  <ThemeProvider>
    <App />
    </ThemeProvider>
*/
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [profile, setProfile] = useState<Profile>("dev");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-profile", profile);
  }, [profile]);

  function setTheme(t: Theme) {
    setThemeState(t);
  }

  function switchProfile(p: Profile) {
    setProfile(p);
  }

  return (
    <ThemeCntxt value={{ theme, profile, setTheme, switchProfile }}>
      {children}
    </ThemeCntxt>
  );
}
