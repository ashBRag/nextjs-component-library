/*
This is a demo page showcasing various components from the design system.
Each section demonstrates the usage and styling of the components in a practical context.
This page serves as a reference for developers to see how to implement and use the components effectively in their projects.
*/

"use client";

import React, { useState } from "react";
import BadgeDemo from "@/components/badge/BadgeDemo";
import BreadcrumbsDemo from "@/components/breadcrumbs/BreadcrumbsDemo";
import ButtonDemo from "@/components/button/ButtonDemo";
import CardDemo from "@/components/card/CardDemo";
import ChipDemo from "@/components/chip/ChipDemo";
import DialogDemo from "@/components/dialog/DialogDemo";
import DividerDemo from "@/components/divider/DividerDemo";
import DrawerDemo from "@/components/drawer/DrawerDemo";
import RadioGroupDemo from "@/components/form/radio-group/RadioGroupDemo";
import GridDemo from "@/components/grid/GridDemo";
import SelectDemo from "@/components/form/select/SelectDemo";
import StatusBarDemo from "@/components/form/status-bar/StatusBarDemo";
import TextFieldDemo from "@/components/form/text-field/TextFieldDemo";
import MenuDemo from "@/components/menu/MenuDemo";
import NavListDemo from "@/components/navList/NavListDemo";
import TableDemo from "@/components/table/TableDemo";
import TabsDemo from "@/components/tabs/TabsDemo";
import TimelineDemo from "@/components/timeline/TimelineDemo";
import WavyTimelineDemo from "@/components/timeline/WavyTimelineDemo";
import ToastDemo from "@/components/toast/ToastDemo";
import TypographyDemo from "@/components/typography/TypographyDemo";
import CenterWrapperDemo from "@/components/wrapper/CenterWrapperDemo";
import { SideMenu } from "@/components/sideMenu/SideMenu";
import SideMenuDemo from "@/components/sideMenu/SideMenuDemo";
import {
  ThemeProfileDemo,
  ThemeProfileInterface,
  ColorPlaygroundDemo,
  ColorPlaygroundInterface,
} from "./ThemeColorPlayground";
import generatedProps from "./generatedProps.json";
import { Card, Tabs, Typography } from "@/components";

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
      { id: "grid", label: "Grid" },
      { id: "screen-center-wrapper", label: "ScreenCenterWrapper" },
    ],
  },
  {
    label: "Feedback",
    items: [{ id: "toast", label: "Toast" }],
  },
];

const sideMenuItems = sideMenuGroups.flatMap((g) => g.items);

const sectionContent: Record<string, React.ReactNode> = {
  "theme-profile": <ThemeProfileDemo />,
  "color-playground": <ColorPlaygroundDemo />,
  typography: <TypographyDemo />,
  badge: <BadgeDemo />,
  chip: <ChipDemo />,
  button: <ButtonDemo />,
  card: <CardDemo />,
  divider: <DividerDemo />,
  grid: <GridDemo />,
  table: <TableDemo />,
  breadcrumbs: <BreadcrumbsDemo />,
  dialog: <DialogDemo />,
  drawer: <DrawerDemo />,
  "text-field": <TextFieldDemo />,
  "radio-group": <RadioGroupDemo />,
  select: <SelectDemo />,
  "status-bar": <StatusBarDemo />,
  "dropdown-menu": <MenuDemo />,
  tabs: <TabsDemo />,
  "nav-list": <NavListDemo />,
  "side-menu": <SideMenuDemo />,
  timeline: <TimelineDemo />,
  "wavy-timeline": <WavyTimelineDemo />,
  "screen-center-wrapper": <CenterWrapperDemo />,
  toast: <ToastDemo />,
};

const interfaceOverrides: Record<string, React.ReactNode> = {
  "theme-profile": <ThemeProfileInterface />,
  "color-playground": <ColorPlaygroundInterface />,
};

function InterfaceBlock({ id }: { id: string }) {
  if (interfaceOverrides[id]) return interfaceOverrides[id];

  const source = generatedProps[id as keyof typeof generatedProps];
  if (!source) return null;

  return (
    <Card title="" size="compact" showCorners={false}>
      <pre className="text-xs overflow-x-auto">
        <code className="whitespace-pre">{source}</code>
      </pre>
    </Card>
  );
}

export default function DemoPage() {
  const [activeSection, setActiveSection] = useState(sideMenuItems[0].id);
  const activeSectionLabel = sideMenuItems.find(
    (item) => item.id === activeSection
  )?.label;
  const [activeTab, setActiveTab] = useState("tab-interface");

  return (
    <div className="p-8 max-w-6xl mx-auto flex gap-8 items-start">
      <SideMenu
        groups={sideMenuGroups}
        activeId={activeSection}
        onSelect={setActiveSection}
        title="Components"
        variant="right"
      />
      <div className="space-y-12 flex-1 min-w-0">
        {activeSectionLabel && (
          <section id={activeSection} className="space-y-4">
            <Typography variant="h2">{activeSectionLabel}</Typography>
            <Tabs
              activeTab={activeTab}
              onTabChange={(tabId) => {
                setActiveTab(tabId);
              }}
              tabs={[
                {
                  id: "tab-interface",
                  label: "Interface",
                  content: <InterfaceBlock id={activeSection} />,
                },
                {
                  id: "tab-demo",
                  label: "Demo",
                  content: sectionContent[activeSection],
                },
              ]}
            ></Tabs>
          </section>
        )}
      </div>
    </div>
  );
}
