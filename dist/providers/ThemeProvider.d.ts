import React from "react";
export type Theme = "light" | "dark";
export type Profile = "dev" | "gravitova" | "calma";
/** UI font (--font-major): sans = Inter, fira = Fira Code, mono = JetBrains Mono. */
export type Font = "sans" | "fira" | "mono";
export interface ThemeContextValue {
    theme: Theme;
    profile: Profile;
    font: Font;
    setTheme: (t: Theme) => void;
    switchProfile: (p: Profile) => void;
    setFont: (f: Font) => void;
}
export declare const ThemeCntxt: React.Context<ThemeContextValue>;
export declare function ThemeProvider({ children }: {
    children: React.ReactNode;
}): React.JSX.Element;
