"use client";

import { useState } from "react";
import { SideMenu } from "./SideMenu";

const sampleGroups = [
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
];

export default function SideMenuDemo() {
  const [active, setActive] = useState("overview");

  return (
    <div className="flex gap-12 flex-wrap">
      <div className="space-y-2">
        <p className="text-sm font-medium mb-2 opacity-80">
          variant=&quot;left&quot; (default)
        </p>
        <SideMenu
          title="Project settings"
          variant="left"
          activeId={active}
          onSelect={setActive}
          className="w-56"
          groups={sampleGroups}
        />
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium mb-2 opacity-80">
          variant=&quot;right&quot;
        </p>
        <SideMenu
          title="Project settings"
          variant="right"
          activeId={active}
          onSelect={setActive}
          className="w-56"
          groups={sampleGroups}
        />
      </div>
    </div>
  );
}
