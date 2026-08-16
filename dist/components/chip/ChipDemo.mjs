"use client";
import "../../chunk-FJBZBVPE.mjs";
import { useState } from "react";
import { Chip } from "./Chip";
function ChipDemo() {
  const [chips, setChips] = useState(["React", "TypeScript", "Next.js"]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Variants"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 flex-wrap items-center" }, /* @__PURE__ */ React.createElement(Chip, { variant: "primary" }, "Primary"), /* @__PURE__ */ React.createElement(Chip, { variant: "secondary" }, "Secondary"), /* @__PURE__ */ React.createElement(Chip, { variant: "outline" }, "Outline"), /* @__PURE__ */ React.createElement(Chip, { variant: "primary", disabled: true }, "Disabled"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Sizes"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 flex-wrap items-center" }, /* @__PURE__ */ React.createElement(Chip, { variant: "primary", size: "sm" }, "Small"), /* @__PURE__ */ React.createElement(Chip, { variant: "primary", size: "md" }, "Medium"), /* @__PURE__ */ React.createElement(Chip, { variant: "primary", size: "lg" }, "Large"))), /* @__PURE__ */ React.createElement("section", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Removable"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 flex-wrap items-center" }, chips.map((chip) => /* @__PURE__ */ React.createElement(
    Chip,
    {
      key: chip,
      variant: "outline",
      onRemove: () => setChips((prev) => prev.filter((c) => c !== chip))
    },
    chip
  )))));
}
export {
  ChipDemo as default
};
//# sourceMappingURL=ChipDemo.mjs.map