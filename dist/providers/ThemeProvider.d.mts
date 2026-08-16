import React__default from 'react';

type Theme = "light" | "dark";
type Profile = "dev" | "gravitova" | "calma";
interface ThemeContextValue {
    theme: Theme;
    profile: Profile;
    setTheme: (t: Theme) => void;
    switchProfile: (p: Profile) => void;
}
declare const ThemeCntxt: React__default.Context<ThemeContextValue>;
declare function ThemeProvider({ children }: {
    children: React__default.ReactNode;
}): React__default.JSX.Element;

export { type Profile, type Theme, ThemeCntxt, type ThemeContextValue, ThemeProvider };
