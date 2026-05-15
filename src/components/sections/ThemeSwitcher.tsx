"use client";

import { IoSettingsOutline } from "react-icons/io5";
import { DropdownMenu } from "@/components/ui/components/menu/Menu";
import { useTheme } from "@/components/hooks/useTheme";
import type { Profile, Theme } from "@/components/providers/ThemeProvider";

const THEMES: { label: string; value: Theme }[] = [
  { label: "Dark", value: "dark" },
  { label: "Light", value: "light" },
];

const PROFILES: { label: string; value: Profile }[] = [
  { label: "Dev", value: "dev" },
  { label: "Designer", value: "designer" },
];

export function ThemeSwitcher() {
  const { theme, profile, setTheme, switchProfile } = useTheme();

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
        {
          heading: "Profile",
          items: PROFILES.map((p) => ({
            label: p.label,
            value: p.value,
            active: profile === p.value,
            onClick: () => switchProfile(p.value),
          })),
        },
      ]}
    />
  );
}
