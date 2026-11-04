"use client";
import "../chunk-FJBZBVPE.mjs";
import React, { createContext, useEffect, useState } from "react";
const ThemeCntxt = createContext({
  theme: "dark",
  profile: "dev",
  font: "sans",
  setTheme: () => {
  },
  switchProfile: () => {
  },
  setFont: () => {
  }
});
function ThemeProvider({ children }) {
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
  return /* @__PURE__ */ React.createElement(
    ThemeCntxt,
    {
      value: { theme, profile, font, setTheme, switchProfile, setFont }
    },
    children
  );
}
export {
  ThemeCntxt,
  ThemeProvider
};
//# sourceMappingURL=ThemeProvider.mjs.map