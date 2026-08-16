"use client";
import "../../chunk-FJBZBVPE.mjs";
import { Breadcrumbs } from "./Breadcrumbs";
function BreadcrumbsDemo() {
  return /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-medium" }, "Navigation paths"), /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium mb-2 opacity-80" }, "Default separator"), /* @__PURE__ */ React.createElement(
    Breadcrumbs,
    {
      items: [
        { label: "Home", href: "#home" },
        { label: "Components", href: "#components" },
        { label: "Breadcrumbs" }
      ]
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium mb-2 opacity-80" }, "Custom separator"), /* @__PURE__ */ React.createElement(
    Breadcrumbs,
    {
      separator: ">",
      items: [
        { label: "Home", href: "#home" },
        { label: "Library", href: "#library" },
        { label: "Current page" }
      ]
    }
  ))));
}
export {
  BreadcrumbsDemo as default
};
//# sourceMappingURL=BreadcrumbsDemo.mjs.map