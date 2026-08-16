"use client";
import "../../chunk-FJBZBVPE.mjs";
import { Button } from "./Button";
function PlusIcon() {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    /* @__PURE__ */ React.createElement("line", { x1: 12, y1: 5, x2: 12, y2: 19 }),
    /* @__PURE__ */ React.createElement("line", { x1: 5, y1: 12, x2: 19, y2: 12 })
  );
}
function ButtonDemo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Variants & sizes"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 flex-wrap items-center" }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm" }, "Primary SM"), /* @__PURE__ */ React.createElement(Button, { variant: "secondary", size: "md" }, "Secondary MD"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "lg" }, "Outline LG"), /* @__PURE__ */ React.createElement(Button, { disabled: true }, "Disabled"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Regular with icon"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 flex-wrap items-center" }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "md", iconBefore: /* @__PURE__ */ React.createElement(PlusIcon, null) }, "Add Item"), /* @__PURE__ */ React.createElement(Button, { variant: "secondary", size: "md", iconAfter: /* @__PURE__ */ React.createElement(PlusIcon, null) }, "Add Item"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "md", iconBefore: /* @__PURE__ */ React.createElement(PlusIcon, null) }, "Add Item"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Icon variant"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 flex-wrap items-center" }, /* @__PURE__ */ React.createElement(Button, { variant: "icon", size: "sm", "aria-label": "Add", iconBefore: /* @__PURE__ */ React.createElement(PlusIcon, null) }), /* @__PURE__ */ React.createElement(Button, { variant: "icon", size: "md", "aria-label": "Add", iconBefore: /* @__PURE__ */ React.createElement(PlusIcon, null) }), /* @__PURE__ */ React.createElement(Button, { variant: "icon", size: "lg", "aria-label": "Add", iconBefore: /* @__PURE__ */ React.createElement(PlusIcon, null) }), /* @__PURE__ */ React.createElement(Button, { variant: "icon", size: "md", "aria-label": "Add", disabled: true, iconBefore: /* @__PURE__ */ React.createElement(PlusIcon, null) }))));
}
export {
  ButtonDemo as default
};
//# sourceMappingURL=ButtonDemo.mjs.map