"use client";
import "../../chunk-FJBZBVPE.mjs";
import { useState } from "react";
import Tabs from "./Tabs";
const sampleTabs = [
  {
    id: "tab1",
    label: "Tab One",
    content: /* @__PURE__ */ React.createElement("p", { className: "p-4" }, "Content for tab one.")
  },
  {
    id: "tab2",
    label: "Tab Two",
    content: /* @__PURE__ */ React.createElement("p", { className: "p-4" }, "Content for tab two.")
  },
  {
    id: "tab3",
    label: "Tab Three",
    content: /* @__PURE__ */ React.createElement("p", { className: "p-4" }, "Content for tab three.")
  }
];
function TabsDemo() {
  const [underlineTab, setUnderlineTab] = useState("tab1");
  const [boxedTab, setBoxedTab] = useState("tab1");
  return /* @__PURE__ */ React.createElement("div", { className: "space-y-8" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium opacity-80" }, 'variant="underline" (default), bordered=true'), /* @__PURE__ */ React.createElement(
    Tabs,
    {
      tabs: sampleTabs,
      activeTab: underlineTab,
      onTabChange: setUnderlineTab,
      contentHeight: "200px",
      mobileBottomMenu: false
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium opacity-80" }, 'variant="boxed", bordered=false'), /* @__PURE__ */ React.createElement(
    Tabs,
    {
      tabs: sampleTabs,
      activeTab: boxedTab,
      onTabChange: setBoxedTab,
      contentHeight: "200px",
      mobileBottomMenu: false,
      variant: "boxed",
      bordered: false
    }
  )));
}
export {
  TabsDemo as default
};
//# sourceMappingURL=TabsDemo.mjs.map