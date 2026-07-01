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
- Tabs
- NavList
- Timeline
- Toast
- ScreenCenterWrapper

This page serves as a reference for developers to see how to implement and use the components effectively in their projects.
*/

"use client";

import React, { useState } from "react";
import { Button } from "@/components/button/Button";
import { Chip } from "@/components/chip/Chip";
import { Dialog } from "@/components/dialog/Dialog";
import { Divider } from "@/components/divider/Divider";
import { RadioGroup } from "@/components/form/radio-group/RadioGroup";
import { Select } from "@/components/form/select/Select";
import { StatusBar } from "@/components/form/status-bar/StatusBar";
import { TextField } from "@/components/form/text-field/TextField";
import { DropdownMenu } from "@/components/menu/Menu";
import NavList from "@/components/navList/NavList";
import Tabs from "@/components/tabs/Tabs";
import Timeline from "@/components/timeline/Timeline";
// import { Toast, ToastContainer } from "@/components/toast/Toast";
import { ScreenCenterWrapper } from "@/components/wrapper/CenterWrapper";
import type { TimelineItem } from "@/components/timeline/Timeline";
// import type { ToastEntry } from "@/components/toast/Toast";
import { componentGroups } from "./componentConfig";

const layoutCls: Record<"flex" | "grid" | "stack", string> = {
  flex: "flex gap-4 flex-wrap items-center",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  stack: "space-y-6",
};

function ComponentGroupSection({
  groupId,
}: {
  groupId: string;
}) {
  const group = componentGroups.find((g) => g.id === groupId);
  if (!group) return null;

  const Component = group.component;

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">{group.title}</h2>
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
  const [theme, setTheme] = useState("dark");
  const [profile, setProfile] = useState("dev");
  const [radioValue, setRadioValue] = useState("a");
  const [selectValue, setSelectValue] = useState("opt1");
  const [textValue, setTextValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [activeTab, setActiveTab] = useState("tab1");
  // const [toasts, setToasts] = useState<ToastEntry[]>([]);
  const [progress, setProgress] = useState(45);
  const [chips, setChips] = useState(["React", "TypeScript", "Next.js"]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const applyTheme = (value: string) => {
    setTheme(value);
    document.documentElement.setAttribute("data-theme", value);
  };

  const applyProfile = (value: string) => {
    setProfile(value);
    document.documentElement.setAttribute("data-profile", value);
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

  return (
    <div className="p-8 space-y-12 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Component Demo</h1>

      {/* Theme & Profile */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Theme & Profile</h2>
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
            ]}
            value={profile}
            onChange={applyProfile}
          />
        </div>
      </section>

      <Divider />

      {/* Typography */}
      <ComponentGroupSection groupId="typography" />

      <Divider />

      {/* Badge */}
      <ComponentGroupSection groupId="badge" />

      <Divider />

      {/* Chip */}
      <ComponentGroupSection groupId="chip" />
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

      <Divider />

      {/* Button */}
      <ComponentGroupSection groupId="button" />

      <Divider />

      {/* Card */}
      <ComponentGroupSection groupId="card" />

      <Divider />

      {/* Divider */}
      <ComponentGroupSection groupId="divider" />

      <Divider />

      {/* Table */}
      <ComponentGroupSection groupId="table" />

      <Divider />

      {/* Dialog */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dialog</h2>
        <Button variant="primary" onClick={() => setDialogOpen(true)}>
          Open Dialog
        </Button>
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          title="Confirm action"
          footer={
            <>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setDialogOpen(false)}>
                Confirm
              </Button>
            </>
          }
        >
          <p>Are you sure you want to proceed with this action?</p>
        </Dialog>
      </section>

      <Divider />

      {/* TextField */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">TextField</h2>
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

      <Divider />

      {/* RadioGroup */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">RadioGroup</h2>
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

      <Divider />

      {/* Select */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Select</h2>
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

      <Divider />

      {/* StatusBar */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">StatusBar</h2>
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

      <Divider />

      {/* DropdownMenu */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">DropdownMenu</h2>
        <DropdownMenu
          trigger={<span>Open Menu</span>}
          groups={[
            {
              heading: "Actions",
              items: [
                { label: "Edit", value: "edit", onClick: () => {} },
                { label: "Duplicate", value: "duplicate", onClick: () => {} },
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

      <Divider />

      {/* Tabs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tabs</h2>
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

      <Divider />

      {/* NavList */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">NavList</h2>
        <NavList
          tabs={[
            {
              id: "nav1",
              name: "Dashboard",
              content: <p>Dashboard content</p>,
            },
            { id: "nav2", name: "Settings", content: <p>Settings content</p> },
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

      <Divider />

      {/* Timeline */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Timeline</h2>
        <Timeline items={timelineItems} animated />
      </section>

      <Divider />

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
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">ScreenCenterWrapper</h2>
        <div className="border border-dashed border-gray-500 h-48">
          <ScreenCenterWrapper className="h-48 !min-h-0">
            <p>Centered content</p>
          </ScreenCenterWrapper>
        </div>
      </section>
    </div>
  );
}
