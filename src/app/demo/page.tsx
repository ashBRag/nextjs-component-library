/*
This is a demo page showcasing various components from the design system.
It includes examples of buttons, cards, form elements, navigation, and more.
Each section demonstrates the usage and styling of the components in a practical context.
Components included:
- Button
- Card
- TextField
- RadioGroup
- Select
- StatusBar
- DropdownMenu
- Breadcrumbs
- Tabs
- NavList
- SideMenu
- Timeline
- WavyTimeline
- Toast
- ScreenCenterWrapper

This page serves as a reference for developers to see how to implement and use the components effectively in their projects.
*/

"use client";

import React, { useState } from "react";
import { Button } from "@/components/button/Button";
import BadgeDemo from "@/components/badge/BadgeDemo";
import BreadcrumbsDemo from "@/components/breadcrumbs/BreadcrumbsDemo";
import ButtonDemo from "@/components/button/ButtonDemo";
import CardDemo from "@/components/card/CardDemo";
import ChipDemo from "@/components/chip/ChipDemo";
import DialogDemo from "@/components/dialog/DialogDemo";
import DividerDemo from "@/components/divider/DividerDemo";
import DrawerDemo from "@/components/drawer/DrawerDemo";
import RadioGroupDemo from "@/components/form/radio-group/RadioGroupDemo";
import { RadioGroup } from "@/components/form/radio-group/RadioGroup";
import SelectDemo from "@/components/form/select/SelectDemo";
import StatusBarDemo from "@/components/form/status-bar/StatusBarDemo";
import { TextField } from "@/components/form/text-field/TextField";
import TextFieldDemo from "@/components/form/text-field/TextFieldDemo";
import MenuDemo from "@/components/menu/MenuDemo";
import NavListDemo from "@/components/navList/NavListDemo";
import TableDemo from "@/components/table/TableDemo";
import TabsDemo from "@/components/tabs/TabsDemo";
import TimelineDemo from "@/components/timeline/TimelineDemo";
import WavyTimelineDemo from "@/components/timeline/WavyTimelineDemo";
import TypographyDemo from "@/components/typography/TypographyDemo";
// import { Toast, ToastContainer } from "@/components/toast/Toast";
import CenterWrapperDemo from "@/components/wrapper/CenterWrapperDemo";
import { SideMenu } from "@/components/sideMenu/SideMenu";
import SideMenuDemo from "@/components/sideMenu/SideMenuDemo";
import type { Profile, Theme } from "@/providers/ThemeProvider";
// import type { ToastEntry } from "@/components/toast/Toast";
import generatedProps from "./generatedProps.json";

const sideMenuGroups = [
  {
    label: "General",
    items: [
      { id: "theme-profile", label: "Theme & Profile" },
      { id: "color-playground", label: "Color Playground" },
      { id: "typography", label: "Typography" },
    ],
  },
  {
    label: "Data Display",
    items: [
      { id: "badge", label: "Badge" },
      { id: "chip", label: "Chip" },
      { id: "card", label: "Card" },
      { id: "table", label: "Table" },
    ],
  },
  {
    label: "Actions",
    items: [
      { id: "button", label: "Button" },
      { id: "dropdown-menu", label: "DropdownMenu" },
    ],
  },
  {
    label: "Overlays",
    items: [
      { id: "dialog", label: "Dialog" },
      { id: "drawer", label: "Drawer" },
    ],
  },
  {
    label: "Forms",
    items: [
      { id: "text-field", label: "TextField" },
      { id: "radio-group", label: "RadioGroup" },
      { id: "select", label: "Select" },
      { id: "status-bar", label: "StatusBar" },
    ],
  },
  {
    label: "Navigation",
    items: [
      { id: "breadcrumbs", label: "Breadcrumbs" },
      { id: "tabs", label: "Tabs" },
      { id: "nav-list", label: "NavList" },
      { id: "side-menu", label: "SideMenu" },
      { id: "timeline", label: "Timeline" },
      { id: "wavy-timeline", label: "WavyTimeline" },
    ],
  },
  {
    label: "Layout",
    items: [
      { id: "divider", label: "Divider" },
      { id: "screen-center-wrapper", label: "ScreenCenterWrapper" },
    ],
  },
];

const sideMenuItems = sideMenuGroups.flatMap((g) => g.items);

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
      <button onClick={() => switchProfile(profile === "dev" ? "designer" : "dev")}>
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

const themeProfileTypes = `export type Theme = "light" | "dark";

export type Profile =
  | "dev"
  | "designer"
  | "gravitova"
  | "calma";

export interface ThemeContextValue {
  theme: Theme;
  profile: Profile;
  setTheme: (theme: Theme) => void;
  switchProfile: (profile: Profile) => void;
}`;

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

function InterfaceBlock({ id }: { id: string }) {
  const source = generatedProps[id as keyof typeof generatedProps];
  if (!source) return null;

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium">Interface</h3>
      <pre
        className="text-xs p-4 rounded-md overflow-x-auto border"
        style={{ borderColor: "var(--color-border)" }}
      >
        <code>{source}</code>
      </pre>
    </div>
  );
}

export default function DemoPage() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [profile, setProfile] = useState<Profile>("dev");
  const [activeSection, setActiveSection] = useState(sideMenuItems[0].id);

  const applyTheme = (value: string) => {
    if (value === "dark" || value === "light") {
      setTheme(value);
      document.documentElement.setAttribute("data-theme", value);
    }
  };

  const [customColors, setCustomColors] = useState<Record<string, string>>({});

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

  const [cssCopied, setCssCopied] = useState(false);

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

  const [importCss, setImportCss] = useState("");
  const [importError, setImportError] = useState("");

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

  const applyProfile = (value: string) => {
    if (
      value === "dev" ||
      value === "designer" ||
      value === "gravitova" ||
      value === "calma"
    ) {
      setProfile(value);
      document.documentElement.setAttribute("data-profile", value);
      resetCustomColors();
    }
  };

  // const addToast = (type: ToastEntry["type"]) => {
  //   setToasts((prev) => [
  //     ...prev,
  //     { id: crypto.randomUUID(), type, message: `This is a ${type} toast` },
  //   ]);
  // };

  // const removeToast = (id: string) => {
  //   setToasts((prev) => prev.filter((t) => t.id !== id));
  // };

  return (
    <div className="p-8 max-w-6xl mx-auto flex gap-8 items-start">
      <SideMenu
        groups={sideMenuGroups}
        activeId={activeSection}
        onSelect={setActiveSection}
        title="Components"
        className="hidden lg:block w-56 shrink-0"
      />
      <div className="space-y-12 flex-1 min-w-0">
        <h1 className="text-2xl font-bold">Component Demo</h1>

        {/* Theme & Profile */}
        {activeSection === "theme-profile" && (
          <section id="theme-profile" className="space-y-4">
            <h2 className="text-xl font-semibold">Theme & Profile</h2>
            <p className="text-sm opacity-80 max-w-3xl">
              Import the stylesheet once, wrap the application with{" "}
              <code>ThemeProvider</code>, then use <code>useTheme</code> in
              client components. The provider updates the{" "}
              <code>data-theme</code> and <code>data-profile</code> attributes
              on the document root.
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
                  { value: "designer", label: "Designer" },
                  { value: "gravitova", label: "Gravitova" },
                  { value: "calma", label: "Calma" },
                ]}
                value={profile}
                onChange={applyProfile}
              />
            </div>
            <CodeBlock title="How to use" source={themeProfileUsage} />
            <CodeBlock title="Types & interface" source={themeProfileTypes} />
            <CodeBlock
              title="Custom colors from your own CSS"
              source={customColorsUsage}
            />
          </section>
        )}

        {/* Color Playground */}
        {activeSection === "color-playground" && (
          <section id="color-playground" className="space-y-4">
            <h2 className="text-xl font-semibold">Color Playground</h2>
            <p className="text-sm opacity-80 max-w-3xl">
              Override the active profile&apos;s CSS variables directly to
              preview a custom palette. Changes apply live as inline styles on
              the document root and are cleared when you switch profile or
              reset.
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
                Paste a block containing <code>--color-*</code> declarations
                (e.g. copied from your own stylesheet) to load them into the
                playground.
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
                      value={
                        /^#[0-9a-fA-F]{6}$/.test(value) ? value : "#000000"
                      }
                      onChange={(e) =>
                        applyCustomColor(key, e.target.value, rgbKey)
                      }
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
                              document.documentElement.style.setProperty(
                                rgbKey,
                                v
                              );
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
              <CodeBlock
                title="Generated CSS"
                source={generateCustomColorsCss()}
              />
            )}
          </section>
        )}

        {/* Typography */}
        {activeSection === "typography" && (
          <section id="typography" className="space-y-4">
            <h2 className="text-xl font-semibold">Typography</h2>
            <InterfaceBlock id="typography" />
            <TypographyDemo />
          </section>
        )}

        {/* Badge */}
        {activeSection === "badge" && (
          <section id="badge" className="space-y-4">
            <h2 className="text-xl font-semibold">Badge</h2>
            <InterfaceBlock id="badge" />
            <BadgeDemo />
          </section>
        )}

        {/* Chip */}
        {activeSection === "chip" && (
          <section id="chip" className="space-y-4">
            <h2 className="text-xl font-semibold">Chip</h2>
            <InterfaceBlock id="chip" />
            <ChipDemo />
          </section>
        )}

        {/* Button */}
        {activeSection === "button" && (
          <section id="button" className="space-y-4">
            <h2 className="text-xl font-semibold">Button</h2>
            <InterfaceBlock id="button" />
            <ButtonDemo />
          </section>
        )}

        {/* Card */}
        {activeSection === "card" && (
          <section id="card" className="space-y-4">
            <h2 className="text-xl font-semibold">Card</h2>
            <InterfaceBlock id="card" />
            <CardDemo />
          </section>
        )}

        {/* Divider */}
        {activeSection === "divider" && (
          <section id="divider" className="space-y-4">
            <h2 className="text-xl font-semibold">Divider</h2>
            <InterfaceBlock id="divider" />
            <DividerDemo />
          </section>
        )}

        {/* Table */}
        {activeSection === "table" && (
          <section id="table" className="space-y-4">
            <h2 className="text-xl font-semibold">Table</h2>
            <InterfaceBlock id="table" />
            <TableDemo />
          </section>
        )}

        {/* Breadcrumbs */}
        {activeSection === "breadcrumbs" && (
          <section id="breadcrumbs" className="space-y-4">
            <h2 className="text-xl font-semibold">Breadcrumbs</h2>
            <InterfaceBlock id="breadcrumbs" />
            <BreadcrumbsDemo />
          </section>
        )}

        {/* Dialog */}
        {activeSection === "dialog" && (
          <section id="dialog" className="space-y-4">
            <h2 className="text-xl font-semibold">Dialog</h2>
            <InterfaceBlock id="dialog" />
            <DialogDemo />
          </section>
        )}

        {/* Drawer */}
        {activeSection === "drawer" && (
          <section id="drawer" className="space-y-4">
            <h2 className="text-xl font-semibold">Drawer</h2>
            <InterfaceBlock id="drawer" />
            <DrawerDemo />
          </section>
        )}

        {/* TextField */}
        {activeSection === "text-field" && (
          <section id="text-field" className="space-y-4">
            <h2 className="text-xl font-semibold">TextField</h2>
            <InterfaceBlock id="text-field" />
            <TextFieldDemo />
          </section>
        )}

        {/* RadioGroup */}
        {activeSection === "radio-group" && (
          <section id="radio-group" className="space-y-4">
            <h2 className="text-xl font-semibold">RadioGroup</h2>
            <InterfaceBlock id="radio-group" />
            <RadioGroupDemo />
          </section>
        )}

        {/* Select */}
        {activeSection === "select" && (
          <section id="select" className="space-y-4">
            <h2 className="text-xl font-semibold">Select</h2>
            <InterfaceBlock id="select" />
            <SelectDemo />
          </section>
        )}

        {/* StatusBar */}
        {activeSection === "status-bar" && (
          <section id="status-bar" className="space-y-4">
            <h2 className="text-xl font-semibold">StatusBar</h2>
            <InterfaceBlock id="status-bar" />
            <StatusBarDemo />
          </section>
        )}

        {/* DropdownMenu */}
        {activeSection === "dropdown-menu" && (
          <section id="dropdown-menu" className="space-y-4">
            <h2 className="text-xl font-semibold">DropdownMenu</h2>
            <InterfaceBlock id="dropdown-menu" />
            <MenuDemo />
          </section>
        )}

        {/* Tabs */}
        {activeSection === "tabs" && (
          <section id="tabs" className="space-y-4">
            <h2 className="text-xl font-semibold">Tabs</h2>
            <InterfaceBlock id="tabs" />
            <TabsDemo />
          </section>
        )}

        {/* NavList */}
        {activeSection === "nav-list" && (
          <section id="nav-list" className="space-y-4">
            <h2 className="text-xl font-semibold">NavList</h2>
            <InterfaceBlock id="nav-list" />
            <NavListDemo />
          </section>
        )}

        {/* SideMenu */}
        {activeSection === "side-menu" && (
          <section id="side-menu" className="space-y-4">
            <h2 className="text-xl font-semibold">SideMenu</h2>
            <InterfaceBlock id="side-menu" />
            <SideMenuDemo />
          </section>
        )}

        {/* Timeline */}
        {activeSection === "timeline" && (
          <section id="timeline" className="space-y-4">
            <h2 className="text-xl font-semibold">Timeline</h2>
            <InterfaceBlock id="timeline" />
            <TimelineDemo />
          </section>
        )}

        {/* WavyTimeline */}
        {activeSection === "wavy-timeline" && (
          <section id="wavy-timeline" className="space-y-4">
            <h2 className="text-xl font-semibold">WavyTimeline</h2>
            <InterfaceBlock id="wavy-timeline" />
            <WavyTimelineDemo />
          </section>
        )}

        {/* Toast */}
        {/* <section className="space-y-4">
        <h2 className="text-xl font-semibold">Toast</h2>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant="primary"
            size="sm"
            onClick={() => addToast("success")}
          >
            Success
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => addToast("error")}
          >
            Error
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => addToast("warning")}
          >
            Warning
          </Button>
          <Button variant="outline" size="sm" onClick={() => addToast("info")}>
            Info
          </Button>
        </div>
        <ToastContainer toasts={toasts} onRemove={removeToast} />
      </section> */}

        {/* ScreenCenterWrapper */}
        {activeSection === "screen-center-wrapper" && (
          <section id="screen-center-wrapper" className="space-y-4">
            <h2 className="text-xl font-semibold">ScreenCenterWrapper</h2>
            <InterfaceBlock id="screen-center-wrapper" />
            <CenterWrapperDemo />
          </section>
        )}
      </div>
    </div>
  );
}
