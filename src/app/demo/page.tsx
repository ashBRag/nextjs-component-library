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
import { Badge } from "@/components/badge/Badge";
import { Button } from "@/components/button/Button";
import Card from "@/components/card/Card";
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

      {/* Badge */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Badge</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>
        <div className="flex gap-4 flex-wrap items-center">
          <Badge variant="primary" size="sm">Small</Badge>
          <Badge variant="primary" size="md">Medium</Badge>
          <Badge variant="primary" size="lg">Large</Badge>
        </div>
        <div className="flex gap-4 flex-wrap items-center">
          <Badge variant="primary" shape="rounded">Rounded</Badge>
          <Badge variant="primary" shape="squared">Squared</Badge>
          <Badge variant="success" shape="rounded">Rounded</Badge>
          <Badge variant="success" shape="squared">Squared</Badge>
        </div>
      </section>

      {/* Button */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Button</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary" size="sm">
            Primary SM
          </Button>
          <Button variant="secondary" size="md">
            Secondary MD
          </Button>
          <Button variant="outline" size="lg">
            Outline LG
          </Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Card */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Card</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Basic Card"
            subtitle="A subtitle"
            description="This is a card with basic props."
            size="md"
          />
          <Card
            title="Compact Card"
            description="Compact size, no corners."
            size="compact"
            showCorners={false}
          />
        </div>
      </section>

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

      {/* DropdownMenu */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">DropdownMenu</h2>
        <DropdownMenu
          trigger={<Button variant="outline">Open Menu</Button>}
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

      {/* Timeline */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Timeline</h2>
        <Timeline items={timelineItems} animated />
      </section>

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
