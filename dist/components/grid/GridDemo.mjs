"use client";
import "../../chunk-FJBZBVPE.mjs";
import { Grid, GridItem } from "./Grid";
function Box({ children }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "rounded-md border p-4 text-sm text-center",
      style: { borderColor: "var(--color-border)" }
    },
    children
  );
}
function GridDemo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Responsive columns"), /* @__PURE__ */ React.createElement(Grid, { columns: 1, columnsSm: 2, columnsMd: 3, gap: "md" }, Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ React.createElement(Box, { key: i }, "Item ", i + 1)))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Item spans"), /* @__PURE__ */ React.createElement(Grid, { columns: 4, gap: "md" }, /* @__PURE__ */ React.createElement(GridItem, { span: 2 }, /* @__PURE__ */ React.createElement(Box, null, "span 2")), /* @__PURE__ */ React.createElement(GridItem, { span: 1 }, /* @__PURE__ */ React.createElement(Box, null, "span 1")), /* @__PURE__ */ React.createElement(GridItem, { span: 1 }, /* @__PURE__ */ React.createElement(Box, null, "span 1")), /* @__PURE__ */ React.createElement(GridItem, { span: 4 }, /* @__PURE__ */ React.createElement(Box, null, "span 4 (full width)")))));
}
export {
  GridDemo as default
};
//# sourceMappingURL=GridDemo.mjs.map