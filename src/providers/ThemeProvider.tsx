"use client";
/*
  ThemeProvider component manages the application's theme and profile settings. 
  It provides a context that allows child components to access and update the current theme and profile. 
  The component also handles dynamic imports of profile-specific styles, 
  ensuring that only the necessary styles are loaded when a profile is selected.
*/
import React, { createContext, useEffect, useRef, useState } from "react";

export type Theme = "light" | "dark";
export type Profile = "dev" | "designer";

// Defines the shape of the theme context value
export interface ThemeContextValue {
  theme: Theme;
  profile: Profile;
  profileLoading: boolean;
  setTheme: (t: Theme) => void;
  switchProfile: (p: Profile) => void;
}
// Map of profile names to their dynamic import functions for styles
const profileImports: Partial<Record<Profile, () => Promise<unknown>>> = {
  designer: () => import("@/styles/profiles/designer/index.css"),
};

export const ThemeCntxt = createContext<ThemeContextValue>({
  theme: "dark",
  profile: "dev",
  profileLoading: false,
  setTheme: () => {},
  switchProfile: () => {},
});

/*
    1. Manages theme and profile state. 
    2. Dynamically imports profile styles on demand.
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
  const [profileLoading, setProfileLoading] = useState(false);
  const loadedProfiles = useRef<Set<Profile>>(new Set(["dev"]));

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-profile", profile);
  }, [profile]);

  function setTheme(t: Theme) {
    setThemeState(t);
  }

  async function switchProfile(p: Profile) {
    if (p === profile) return;

    if (loadedProfiles.current.has(p)) {
      setProfile(p);
      return;
    }

    setProfileLoading(true);
    try {
      await profileImports[p]?.();
      loadedProfiles.current.add(p);
      setProfile(p);
    } finally {
      setProfileLoading(false);
    }
  }

  return (
    <ThemeCntxt
      value={{ theme, profile, profileLoading, setTheme, switchProfile }}
    >
      {children}
    </ThemeCntxt>
  );
}
