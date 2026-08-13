"use client";

import { useState } from "react";
import Tabs from "./Tabs";

const sampleTabs = [
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
];

export default function TabsDemo() {
  const [underlineTab, setUnderlineTab] = useState("tab1");
  const [boxedTab, setBoxedTab] = useState("tab1");

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-sm font-medium opacity-80">
          variant=&quot;underline&quot; (default), bordered=true
        </p>
        <Tabs
          tabs={sampleTabs}
          activeTab={underlineTab}
          onTabChange={setUnderlineTab}
          contentHeight="200px"
          mobileBottomMenu={false}
        />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium opacity-80">
          variant=&quot;boxed&quot;, bordered=false
        </p>
        <Tabs
          tabs={sampleTabs}
          activeTab={boxedTab}
          onTabChange={setBoxedTab}
          contentHeight="200px"
          mobileBottomMenu={false}
          variant="boxed"
          bordered={false}
        />
      </div>
    </div>
  );
}
