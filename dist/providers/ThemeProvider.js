"use client";
import { jsx as _jsx } from "react/jsx-runtime";
/*
  ThemeProvider component manages the application's theme and profile settings.
  It provides a context that allows child components to access and update the current theme and profile.
  All theme/profile CSS ships in a single compiled stylesheet and is scoped via
  [data-theme]/[data-profile] attribute selectors, so switching is a synchronous
  attribute toggle rather than a dynamic asset load.
*/
import { createContext, useEffect, useState } from "react";
export const ThemeCntxt = createContext({
    theme: "dark",
    profile: "dev",
    font: "sans",
    setTheme: () => { },
    switchProfile: () => { },
    setFont: () => { },
});
/*
    1. Manages theme, profile and font state.
    2. Toggles [data-theme]/[data-profile]/[data-font] attributes on <html>.
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
export function ThemeProvider({ children }) {
    const [theme, setThemeState] = useState("dark");
    const [profile, setProfile] = useState("dev");
    const [font, setFont] = useState("sans");
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    useEffect(() => {
        document.documentElement.setAttribute("data-profile", profile);
    }, [profile]);
    useEffect(() => {
        document.documentElement.setAttribute("data-font", font);
    }, [font]);
    function setTheme(t) {
        setThemeState(t);
    }
    function switchProfile(p) {
        setProfile(p);
    }
    return (_jsx(ThemeCntxt, { value: { theme, profile, font, setTheme, switchProfile, setFont }, children: children }));
}
//# sourceMappingURL=ThemeProvider.js.map