"use client";

import { IoSettingsOutline } from "react-icons/io5";
import { DropdownMenu } from "@/components/menu/Menu";
import { useTheme } from "@/hooks/useTheme";
import type { Theme } from "@/providers/ThemeProvider";
// import type { Profile } from "@/providers/ThemeProvider";

const THEMES: { label: string; value: Theme }[] = [
  { label: "Dark", value: "dark" },
  { label: "Light", value: "light" },
];

// const PROFILES: { label: string; value: Profile }[] = [
//   { label: "Dev", value: "dev" },
//   { label: "Designer", value: "designer" },
// ];

export function ThemeSwitcher() {
  // const { theme, profile, setTheme, switchProfile } = useTheme();

  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu
      align="right"
      trigger={<IoSettingsOutline size={20} />}
      groups={[
        {
          heading: "Theme",
          items: THEMES.map((t) => ({
            label: t.label,
            value: t.value,
            active: theme === t.value,
            onClick: () => setTheme(t.value),
          })),
        },
        // {
        //   heading: "Profile",
        //   items: PROFILES.map((p) => ({
        //     label: p.label,
        //     value: p.value,
        //     active: profile === p.value,
        //     onClick: () => switchProfile(p.value),
        //   })),
        // },
      ]}
    />
  );
}
