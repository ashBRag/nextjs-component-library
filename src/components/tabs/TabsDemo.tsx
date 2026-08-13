"use client";

import { useState } from "react";
import Tabs from "./Tabs";

export default function TabsDemo() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
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
  );
}
