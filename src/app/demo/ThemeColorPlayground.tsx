"use client";

import { useState } from "react";
import { Button } from "@/components/button/Button";
import { RadioGroup } from "@/components/form/radio-group/RadioGroup";
import { TextField } from "@/components/form/text-field/TextField";
import type { Profile, Theme } from "@/providers/ThemeProvider";

const themeProfileUsage = `// app/layout.tsx
import type { ReactNode } from "react";
import { ThemeProvider } from "nextjs-component-library/theme-provider";
import "nextjs-component-library/styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

// ThemeSwitcher.tsx
"use client";

import { useTheme } from "nextjs-component-library/use-theme";

export function ThemeSwitcher() {
  const { theme, profile, setTheme, switchProfile } = useTheme();

  return (
    <>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Switch theme
      </button>
      <button onClick={() => switchProfile("dev")}>
        Switch profile
      </button>
    </>
  );
}`;

const customColorsUsage = `// app/layout.tsx
import type { ReactNode } from "react";
import { ThemeProvider } from "nextjs-component-library/theme-provider";
import "nextjs-component-library/styles/globals.css";
// Import your own overrides AFTER the library stylesheet so they win.
import "./my-theme.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

// my-theme.css
// Override the same CSS variables the profile CSS defines.
// Scope to [data-theme]/[data-profile] to only affect that
// combination, or use :root to apply regardless of theme/profile.
[data-profile="dev"] {
  --color-accent: #bf5b45;
  --color-accent-rgb: 191 91 69;
  --color-bg-elevated: #ffffff;
}

[data-profile="dev"][data-theme="light"] {
  --color-text-primary: #2f2722;
}`;

const themeProfileTypes = `export type Theme = "light" | "dark";

export type Profile =
  | "dev"
  | "gravitova"
  | "calma";

export interface ThemeContextValue {
  theme: Theme;
  profile: Profile;
  setTheme: (theme: Theme) => void;
  switchProfile: (profile: Profile) => void;
}`;

const playgroundVars: { key: string; label: string; rgbKey?: string }[] = [
  { key: "--color-background", label: "Background" },
  { key: "--color-bg-elevated", label: "Bg elevated" },
  { key: "--color-accent", label: "Accent", rgbKey: "--color-accent-rgb" },
  { key: "--color-neutral", label: "Neutral", rgbKey: "--color-neutral-rgb" },
  { key: "--color-success", label: "Success", rgbKey: "--color-success-rgb" },
  { key: "--color-warning", label: "Warning", rgbKey: "--color-warning-rgb" },
  { key: "--color-error", label: "Error", rgbKey: "--color-error-rgb" },
  { key: "--color-info", label: "Info" },
  { key: "--color-field-bg", label: "Field bg" },
  { key: "--color-border-subtle", label: "Border subtle" },
  { key: "--color-text-primary", label: "Text primary" },
  { key: "--color-text-secondary", label: "Text secondary" },
  { key: "--color-text-muted", label: "Text muted" },
  { key: "--color-white", label: "White" },
];

function hexToRgbTriplet(hex: string): string | null {
  const match = /^#?([0-9a-fA-F]{6})$/.exec(hex);
  if (!match) return null;
  const int = parseInt(match[1], 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `${r} ${g} ${b}`;
}

function CodeBlock({ title, source }: { title: string; source: string }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium">{title}</h3>
      <pre
        className="text-xs p-4 rounded-md overflow-x-auto border"
        style={{ borderColor: "var(--color-border)" }}
      >
        <code>{source}</code>
      </pre>
    </div>
  );
}

export function ThemeProfileInterface() {
  return (
    <>
      <CodeBlock title="How to use" source={themeProfileUsage} />
      <CodeBlock title="Types & interface" source={themeProfileTypes} />
      <CodeBlock
        title="Custom colors from your own CSS"
        source={customColorsUsage}
      />
    </>
  );
}

export function ThemeProfileDemo() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [profile, setProfile] = useState<Profile>("dev");

  const applyTheme = (value: string) => {
    if (value === "dark" || value === "light") {
      setTheme(value);
      document.documentElement.setAttribute("data-theme", value);
    }
  };

  const applyProfile = (value: string) => {
    if (value === "dev" || value === "gravitova" || value === "calma") {
      setProfile(value);
      document.documentElement.setAttribute("data-profile", value);
    }
  };

  return (
    <>
      <p className="text-sm opacity-80 max-w-3xl">
        Import the stylesheet once, wrap the application with{" "}
        <code>ThemeProvider</code>, then use <code>useTheme</code> in client
        components. The provider updates the <code>data-theme</code> and{" "}
        <code>data-profile</code> attributes on the document root.
      </p>
      <div className="flex gap-8 flex-wrap">
        <RadioGroup
          label="Theme"
          name="theme"
          options={[
            { value: "dark", label: "Dark" },
            { value: "light", label: "Light" },
          ]}
          value={theme}
          onChange={applyTheme}
        />
        <RadioGroup
          label="Profile"
          name="profile"
          options={[
            { value: "dev", label: "Dev" },
            { value: "gravitova", label: "Gravitova" },
            { value: "calma", label: "Calma" },
          ]}
          value={profile}
          onChange={applyProfile}
        />
      </div>
    </>
  );
}

const colorPlaygroundUsage = `// Override any --color-* variable the active profile defines,
// scoped to a profile/theme combination so it doesn't leak elsewhere.
[data-profile="dev"][data-theme="dark"] {
  --color-accent: #bf5b45;
  --color-accent-rgb: 191 91 69;
}`;

export function ColorPlaygroundInterface() {
  return <CodeBlock title="How to use" source={colorPlaygroundUsage} />;
}

export function ColorPlaygroundDemo() {
  const [theme] = useState<Theme>(
    () =>
      (document.documentElement.getAttribute("data-theme") as Theme) ?? "dark"
  );
  const [customColors, setCustomColors] = useState<Record<string, string>>({});
  const [cssCopied, setCssCopied] = useState(false);
  const [importCss, setImportCss] = useState("");
  const [importError, setImportError] = useState("");

  const applyCustomColor = (key: string, value: string, rgbKey?: string) => {
    document.documentElement.style.setProperty(key, value);
    const rgbTriplet = rgbKey ? hexToRgbTriplet(value) : null;
    setCustomColors((prev) => {
      const next = { ...prev, [key]: value };
      if (rgbKey && rgbTriplet) next[rgbKey] = rgbTriplet;
      return next;
    });
    if (rgbKey && rgbTriplet) {
      document.documentElement.style.setProperty(rgbKey, rgbTriplet);
    }
  };

  const resetCustomColors = () => {
    for (const key of Object.keys(customColors)) {
      document.documentElement.style.removeProperty(key);
    }
    setCustomColors({});
  };

  const generateCustomColorsCss = () => {
    const entries = Object.entries(customColors);
    if (entries.length === 0) return "";
    const declarations = entries
      .map(([key, value]) => `  ${key}: ${value};`)
      .join("\n");
    return `[data-profile="custom"][data-theme="${theme}"] {\n${declarations}\n}`;
  };

  const copyCustomColorsCss = async () => {
    const css = generateCustomColorsCss();
    if (!css) return;
    await navigator.clipboard.writeText(css);
    setCssCopied(true);
    setTimeout(() => setCssCopied(false), 2000);
  };

  const applyImportedCss = () => {
    const declarations = Array.from(
      importCss.matchAll(/(--color-[a-z0-9-]+)\s*:\s*([^;]+);/gi)
    );
    if (declarations.length === 0) {
      setImportError("No --color-* declarations found.");
      return;
    }
    setImportError("");
    setCustomColors((prev) => {
      const next = { ...prev };
      for (const [, key, rawValue] of declarations) {
        const value = rawValue.trim();
        document.documentElement.style.setProperty(key, value);
        next[key] = value;
      }
      return next;
    });
  };

  return (
    <>
      <p className="text-sm opacity-80 max-w-3xl">
        Override the active profile&apos;s CSS variables directly to preview a
        custom palette. Changes apply live as inline styles on the document root
        and are cleared when you switch profile or reset.
      </p>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={resetCustomColors}>
          Reset overrides
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={copyCustomColorsCss}
          disabled={Object.keys(customColors).length === 0}
        >
          {cssCopied ? "Copied!" : "Copy CSS"}
        </Button>
      </div>

      <div className="space-y-2 max-w-2xl">
        <h3 className="text-lg font-medium">Import CSS</h3>
        <p className="text-sm opacity-80">
          Paste a block containing <code>--color-*</code> declarations (e.g.
          copied from your own stylesheet) to load them into the playground.
        </p>
        <TextField
          label="CSS"
          value={importCss}
          onChange={setImportCss}
          placeholder={`--color-accent: #bf5b45;\n--color-accent-rgb: 191 91 69;`}
          rows={5}
        />
        {importError && (
          <p className="text-sm" style={{ color: "var(--color-error)" }}>
            {importError}
          </p>
        )}
        <Button variant="outline" size="sm" onClick={applyImportedCss}>
          Import
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {playgroundVars.map(({ key, label, rgbKey }) => {
          const value = customColors[key] ?? "";
          const rgbValue = rgbKey ? customColors[rgbKey] ?? "" : "";
          return (
            <div key={key} className="flex items-end gap-2">
              <input
                type="color"
                aria-label={`${label} swatch`}
                value={/^#[0-9a-fA-F]{6}$/.test(value) ? value : "#000000"}
                onChange={(e) => applyCustomColor(key, e.target.value, rgbKey)}
                className="h-9 w-9 shrink-0 rounded-md border cursor-pointer"
                style={{ borderColor: "var(--color-border)" }}
              />
              <div className="flex-1">
                <TextField
                  label={label}
                  value={value}
                  onChange={(v) => applyCustomColor(key, v, rgbKey)}
                  placeholder={key}
                />
              </div>
              {rgbKey && (
                <div className="flex-1">
                  <TextField
                    label={`${label} (rgb)`}
                    value={rgbValue}
                    onChange={(v) =>
                      setCustomColors((prev) => {
                        document.documentElement.style.setProperty(rgbKey, v);
                        return { ...prev, [rgbKey]: v };
                      })
                    }
                    placeholder={rgbKey}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {Object.keys(customColors).length > 0 && (
        <CodeBlock title="Generated CSS" source={generateCustomColorsCss()} />
      )}
    </>
  );
}
