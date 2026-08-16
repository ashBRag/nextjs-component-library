"use client";
import "../chunk-FJBZBVPE.mjs";
import React, { createContext, useEffect, useState } from "react";
const ThemeCntxt = createContext({
  theme: "dark",
  profile: "dev",
  setTheme: () => {
  },
  switchProfile: () => {
  }
});
function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("dark");
  const [profile, setProfile] = useState("dev");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  useEffect(() => {
    document.documentElement.setAttribute("data-profile", profile);
  }, [profile]);
  function setTheme(t) {
    setThemeState(t);
  }
  function switchProfile(p) {
    setProfile(p);
  }
  return /* @__PURE__ */ React.createElement(ThemeCntxt, { value: { theme, profile, setTheme, switchProfile } }, children);
}
export {
  ThemeCntxt,
  ThemeProvider
};
//# sourceMappingURL=ThemeProvider.mjs.map