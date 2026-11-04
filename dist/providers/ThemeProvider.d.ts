import React from "react";
export type Theme = "light" | "dark";
export type Profile = "dev" | "gravitova" | "calma";
export interface ThemeContextValue {
    theme: Theme;
    profile: Profile;
    setTheme: (t: Theme) => void;
    switchProfile: (p: Profile) => void;
}
export declare const ThemeCntxt: React.Context<ThemeContextValue>;
export declare function ThemeProvider({ children }: {
    children: React.ReactNode;
}): React.JSX.Element;
