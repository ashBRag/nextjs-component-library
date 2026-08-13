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
import { Chip } from "@/components/chip/Chip";
import { Dialog } from "@/components/dialog/Dialog";
import { Drawer } from "@/components/drawer/Drawer";
import { RadioGroup } from "@/components/form/radio-group/RadioGroup";
import { Select } from "@/components/form/select/Select";
import { StatusBar } from "@/components/form/status-bar/StatusBar";
import { TextField } from "@/components/form/text-field/TextField";
import { DropdownMenu } from "@/components/menu/Menu";
import NavList from "@/components/navList/NavList";
import Tabs from "@/components/tabs/Tabs";
import Timeline from "@/components/timeline/Timeline";
import WavyTimeline from "@/components/timeline/WavyTimeline";
// import { Toast, ToastContainer } from "@/components/toast/Toast";
import { ScreenCenterWrapper } from "@/components/wrapper/CenterWrapper";
import { SideMenu } from "@/components/sideMenu/SideMenu";
import type { TimelineItem } from "@/components/timeline/Timeline";
import type { WavyTimelinePoint } from "@/components/timeline/WavyTimeline";
import type { Profile, Theme } from "@/providers/ThemeProvider";
// import type { ToastEntry } from "@/components/toast/Toast";
import { componentGroups } from "./componentConfig";
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

const layoutCls: Record<"flex" | "grid" | "stack", string> = {
  flex: "flex gap-4 flex-wrap items-center",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  stack: "space-y-6",
};

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

function ComponentGroupSection({
  groupId,
  activeSection,
}: {
  groupId: string;
  activeSection: string;
}) {
  const group = componentGroups.find((g) => g.id === groupId);
  if (!group || group.id !== activeSection) return null;

  const Component = group.component;

  return (
    <section id={group.id} className="space-y-4 scroll-mt-8">
      <h2 className="text-xl font-semibold">{group.title}</h2>
      <InterfaceBlock id={group.id} />
      {group.sections.map((section, si) => (
        <div key={si} className="space-y-2">
          {section.label && (
            <h3 className="text-lg font-medium">{section.label}</h3>
          )}
          <div className={layoutCls[section.layout ?? "flex"]}>
            {section.variants.map((variant) => (
              <div key={variant.name} className={variant.className}>
                {section.layout === "stack" && (
                  <p className="text-sm font-medium mb-2 opacity-80">
                    {variant.name}
                  </p>
                )}
                <Component {...variant.props}>{variant.children}</Component>
                {variant.note && (
                  <p className="text-xs opacity-70 mt-1">{variant.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default function DemoPage() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [profile, setProfile] = useState<Profile>("dev");
  const [radioValue, setRadioValue] = useState("a");
  const [selectValue, setSelectValue] = useState("opt1");
  const [textValue, setTextValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [activeTab, setActiveTab] = useState("tab1");
  const [wavyTimelineSelected, setWavyTimelineSelected] = useState("2001");
  // const [toasts, setToasts] = useState<ToastEntry[]>([]);
  const [progress, setProgress] = useState(45);
  const [chips, setChips] = useState(["React", "TypeScript", "Next.js"]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerSide, setDrawerSide] = useState<
    "left" | "right" | "top" | "bottom" | null
  >(null);
  const [activeSection, setActiveSection] = useState(sideMenuItems[0].id);
  const [activeSampleMenuItem, setActiveSampleMenuItem] = useState("overview");

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

  const timelineItems: TimelineItem[] = [
    {
      id: "1",
      title: "Project Started",
      date: "Jan 2024",
      description: "Initial project setup and planning.",
    },
    {
      id: "2",
      title: "First Release",
      date: "Mar 2024",
      badge: { text: "v1.0", variant: "success" },
      description: "Launched the first version.",
    },
    {
      id: "3",
      title: "Major Update",
      date: "Jun 2024",
      badge: { text: "v2.0", variant: "primary" },
      description: "Added new features and improvements.",
    },
  ];

  const wavyTimelinePoints: WavyTimelinePoint[] = [
    {
      id: "1998",
      label: "1998",
      children: (
        <p className="text-sm">Founder opens the doors of the company.</p>
      ),
    },
    {
      id: "2000",
      label: "2000",
      children: (
        <p className="text-sm">Added new therapy and service offerings.</p>
      ),
    },
    {
      id: "2001",
      label: "2001",
      children: (
        <p className="text-sm">Introduced a new flagship treatment system.</p>
      ),
    },
    {
      id: "2002",
      label: "2002",
      children: <p className="text-sm">Second clinic and offices open.</p>,
    },
    {
      id: "2013",
      label: "2013",
      children: <p className="text-sm">Opened a new clinic location.</p>,
    },
    {
      id: "2015",
      label: "2015",
      children: <p className="text-sm">Opened another chiropractic clinic.</p>,
    },
    {
      id: "2016",
      label: "2016",
      children: <p className="text-sm">Opened a full-service clinic.</p>,
    },
    {
      id: "1998",
      label: "1998",
      children: (
        <p className="text-sm">Founder opens the doors of the company.</p>
      ),
    },
    {
      id: "2000",
      label: "2000",
      children: (
        <p className="text-sm">Added new therapy and service offerings.</p>
      ),
    },
    {
      id: "2001",
      label: "2001",
      children: (
        <p className="text-sm">Introduced a new flagship treatment system.</p>
      ),
    },
    {
      id: "2002",
      label: "2002",
      children: <p className="text-sm">Second clinic and offices open.</p>,
    },
    {
      id: "2013",
      label: "2013",
      children: <p className="text-sm">Opened a new clinic location.</p>,
    },
    {
      id: "2015",
      label: "2015",
      children: <p className="text-sm">Opened another chiropractic clinic.</p>,
    },
    {
      id: "2016",
      label: "2016",
      children: <p className="text-sm">Opened a full-service clinic.</p>,
    },
  ];

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
        <ComponentGroupSection
          groupId="typography"
          activeSection={activeSection}
        />

        {/* Badge */}
        <ComponentGroupSection groupId="badge" activeSection={activeSection} />

        {/* Chip */}
        {activeSection === "chip" && (
          <>
            <ComponentGroupSection
              groupId="chip"
              activeSection={activeSection}
            />
            <section className="space-y-2">
              <h3 className="text-lg font-medium">Removable</h3>
              <div className="flex gap-2 flex-wrap items-center">
                {chips.map((chip) => (
                  <Chip
                    key={chip}
                    variant="outline"
                    onRemove={() =>
                      setChips((prev) => prev.filter((c) => c !== chip))
                    }
                  >
                    {chip}
                  </Chip>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Button */}
        <ComponentGroupSection groupId="button" activeSection={activeSection} />

        {/* Card */}
        <ComponentGroupSection groupId="card" activeSection={activeSection} />

        {/* Divider */}
        <ComponentGroupSection
          groupId="divider"
          activeSection={activeSection}
        />

        {/* Table */}
        <ComponentGroupSection groupId="table" activeSection={activeSection} />

        {/* Breadcrumbs */}
        <ComponentGroupSection
          groupId="breadcrumbs"
          activeSection={activeSection}
        />

        {/* Dialog */}
        {activeSection === "dialog" && (
          <section id="dialog" className="space-y-4">
            <h2 className="text-xl font-semibold">Dialog</h2>
            <InterfaceBlock id="dialog" />
            <Button variant="primary" onClick={() => setDialogOpen(true)}>
              Open Dialog
            </Button>
            <Dialog
              open={dialogOpen}
              onClose={() => setDialogOpen(false)}
              title="Confirm action"
              footer={
                <>
                  <Button
                    variant="outline"
                    onClick={() => setDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => setDialogOpen(false)}
                  >
                    Confirm
                  </Button>
                </>
              }
            >
              <p>Are you sure you want to proceed with this action?</p>
            </Dialog>
          </section>
        )}

        {/* Drawer */}
        {activeSection === "drawer" && (
          <section id="drawer" className="space-y-4">
            <h2 className="text-xl font-semibold">Drawer</h2>
            <InterfaceBlock id="drawer" />
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline" onClick={() => setDrawerSide("left")}>
                Open Left
              </Button>
              <Button variant="outline" onClick={() => setDrawerSide("right")}>
                Open Right
              </Button>
              <Button variant="outline" onClick={() => setDrawerSide("top")}>
                Open Top
              </Button>
              <Button variant="outline" onClick={() => setDrawerSide("bottom")}>
                Open Bottom
              </Button>
            </div>
            <Drawer
              open={drawerSide !== null}
              onClose={() => setDrawerSide(null)}
              side={drawerSide ?? "right"}
              title="Drawer title"
              footer={
                <Button variant="primary" onClick={() => setDrawerSide(null)}>
                  Done
                </Button>
              }
            >
              <p>Drawer content slides in from the {drawerSide} side.</p>
            </Drawer>
          </section>
        )}

        {/* TextField */}
        {activeSection === "text-field" && (
          <section id="text-field" className="space-y-4">
            <h2 className="text-xl font-semibold">TextField</h2>
            <InterfaceBlock id="text-field" />
            <TextField
              label="Name"
              value={textValue}
              onChange={setTextValue}
              placeholder="Enter your name"
            />
            <TextField
              label="Message"
              value={textareaValue}
              onChange={setTextareaValue}
              placeholder="Write a message..."
              rows={3}
            />
            <TextField
              label="With Error"
              value=""
              onChange={() => {}}
              error="This field is required"
            />
          </section>
        )}

        {/* RadioGroup */}
        {activeSection === "radio-group" && (
          <section id="radio-group" className="space-y-4">
            <h2 className="text-xl font-semibold">RadioGroup</h2>
            <InterfaceBlock id="radio-group" />
            <RadioGroup
              label="Pick an option"
              options={[
                { value: "a", label: "Option A", description: "First option" },
                { value: "b", label: "Option B", description: "Second option" },
                { value: "c", label: "Option C" },
              ]}
              value={radioValue}
              onChange={setRadioValue}
            />
          </section>
        )}

        {/* Select */}
        {activeSection === "select" && (
          <section id="select" className="space-y-4">
            <h2 className="text-xl font-semibold">Select</h2>
            <InterfaceBlock id="select" />
            <Select
              label="Choose one"
              options={[
                { value: "opt1", label: "Option 1" },
                { value: "opt2", label: "Option 2" },
                { value: "opt3", label: "Option 3" },
              ]}
              value={selectValue}
              onChange={setSelectValue}
            />
          </section>
        )}

        {/* StatusBar */}
        {activeSection === "status-bar" && (
          <section id="status-bar" className="space-y-4">
            <h2 className="text-xl font-semibold">StatusBar</h2>
            <InterfaceBlock id="status-bar" />
            <StatusBar progress={progress} status="Processing" />
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setProgress((p) => Math.max(0, p - 10))}
              >
                -10
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setProgress((p) => Math.min(100, p + 10))}
              >
                +10
              </Button>
            </div>
          </section>
        )}

        {/* DropdownMenu */}
        {activeSection === "dropdown-menu" && (
          <section id="dropdown-menu" className="space-y-4">
            <h2 className="text-xl font-semibold">DropdownMenu</h2>
            <InterfaceBlock id="dropdown-menu" />
            <DropdownMenu
              trigger={<span>Open Menu</span>}
              groups={[
                {
                  heading: "Actions",
                  items: [
                    { label: "Edit", value: "edit", onClick: () => {} },
                    {
                      label: "Duplicate",
                      value: "duplicate",
                      onClick: () => {},
                    },
                  ],
                },
                {
                  heading: "Danger",
                  items: [
                    {
                      label: "Delete",
                      value: "delete",
                      active: true,
                      onClick: () => {},
                    },
                  ],
                },
              ]}
            />
          </section>
        )}

        {/* Tabs */}
        {activeSection === "tabs" && (
          <section id="tabs" className="space-y-4">
            <h2 className="text-xl font-semibold">Tabs</h2>
            <InterfaceBlock id="tabs" />
            <Tabs
              tabs={[
                {
                  id: "tab1",
                  label: "Tab One",
                  content: <p className="p-4">Content for tab one.</p>,
                },
                {
                  id: "tab2",
                  label: "Tab Two",
                  content: <p className="p-4">Content for tab two.</p>,
                },
                {
                  id: "tab3",
                  label: "Tab Three",
                  content: <p className="p-4">Content for tab three.</p>,
                },
              ]}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              contentHeight="200px"
              mobileBottomMenu={false}
            />
          </section>
        )}

        {/* NavList */}
        {activeSection === "nav-list" && (
          <section id="nav-list" className="space-y-4">
            <h2 className="text-xl font-semibold">NavList</h2>
            <InterfaceBlock id="nav-list" />
            <NavList
              tabs={[
                {
                  id: "nav1",
                  name: "Dashboard",
                  content: <p>Dashboard content</p>,
                },
                {
                  id: "nav2",
                  name: "Settings",
                  content: <p>Settings content</p>,
                },
                {
                  id: "nav3",
                  name: "Profile",
                  content: <p>Profile content</p>,
                  disabled: true,
                },
              ]}
              horizontal
            />
          </section>
        )}

        {/* SideMenu */}
        {activeSection === "side-menu" && (
          <section id="side-menu" className="space-y-4">
            <h2 className="text-xl font-semibold">SideMenu</h2>
            <InterfaceBlock id="side-menu" />
            <div className="flex gap-12 flex-wrap">
              <div className="space-y-2">
                <p className="text-sm font-medium mb-2 opacity-80">
                  variant=&quot;left&quot; (default)
                </p>
                <SideMenu
                  title="Project settings"
                  variant="left"
                  activeId={activeSampleMenuItem}
                  onSelect={setActiveSampleMenuItem}
                  className="w-56"
                  groups={[
                    {
                      label: "Workspace",
                      items: [
                        { id: "overview", label: "Overview" },
                        { id: "members", label: "Members" },
                      ],
                    },
                    {
                      label: "Configuration",
                      items: [
                        { id: "integrations", label: "Integrations" },
                        { id: "billing", label: "Billing" },
                      ],
                    },
                  ]}
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium mb-2 opacity-80">
                  variant=&quot;right&quot;
                </p>
                <SideMenu
                  title="Project settings"
                  variant="right"
                  activeId={activeSampleMenuItem}
                  onSelect={setActiveSampleMenuItem}
                  className="w-56"
                  groups={[
                    {
                      label: "Workspace",
                      items: [
                        { id: "overview", label: "Overview" },
                        { id: "members", label: "Members" },
                      ],
                    },
                    {
                      label: "Configuration",
                      items: [
                        { id: "integrations", label: "Integrations" },
                        { id: "billing", label: "Billing" },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
          </section>
        )}

        {/* Timeline */}
        {activeSection === "timeline" && (
          <section id="timeline" className="space-y-4">
            <h2 className="text-xl font-semibold">Timeline</h2>
            <InterfaceBlock id="timeline" />
            <Timeline items={timelineItems} animated />
          </section>
        )}

        {/* WavyTimeline */}
        {activeSection === "wavy-timeline" && (
          <section id="wavy-timeline" className="space-y-4">
            <h2 className="text-xl font-semibold">WavyTimeline</h2>
            <InterfaceBlock id="wavy-timeline" />
            <WavyTimeline
              points={wavyTimelinePoints}
              ascending
              selectedId={wavyTimelineSelected}
              onSelect={setWavyTimelineSelected}
            />
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
            <div className="border border-dashed border-gray-500 h-48">
              <ScreenCenterWrapper className="h-48 !min-h-0">
                <p>Centered content</p>
              </ScreenCenterWrapper>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
