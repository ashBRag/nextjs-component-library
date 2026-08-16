"use client";
import "../../chunk-FJBZBVPE.mjs";
import { useState } from "react";
import { SideMenu } from "./SideMenu";
const sampleGroups = [
  {
    label: "Workspace",
    items: [
      { id: "overview", label: "Overview" },
      { id: "members", label: "Members" }
    ]
  },
  {
    label: "Configuration",
    items: [
      { id: "integrations", label: "Integrations" },
      { id: "billing", label: "Billing" }
    ]
  }
];
function SideMenuDemo() {
  const [active, setActive] = useState("overview");
  return /* @__PURE__ */ React.createElement("div", { className: "flex gap-12 flex-wrap" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium mb-2 opacity-80" }, 'variant="left" (default)'), /* @__PURE__ */ React.createElement(
    SideMenu,
    {
      title: "Project settings",
      variant: "left",
      activeId: active,
      onSelect: setActive,
      className: "w-56",
      groups: sampleGroups
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium mb-2 opacity-80" }, 'variant="right"'), /* @__PURE__ */ React.createElement(
    SideMenu,
    {
      title: "Project settings",
      variant: "right",
      activeId: active,
      onSelect: setActive,
      className: "w-56",
      groups: sampleGroups
    }
  )));
}
export {
  SideMenuDemo as default
};
//# sourceMappingURL=SideMenuDemo.mjs.map