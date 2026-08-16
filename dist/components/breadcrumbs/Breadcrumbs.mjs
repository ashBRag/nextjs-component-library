import "../../chunk-FJBZBVPE.mjs";
import React from "react";
import "./breadcrumbs.base.css";
function Breadcrumbs({
  items,
  separator = "/",
  ariaLabel = "Breadcrumb",
  className = ""
}) {
  return /* @__PURE__ */ React.createElement("nav", { className: `breadcrumbs ${className}`.trim(), "aria-label": ariaLabel }, /* @__PURE__ */ React.createElement("ol", { className: "breadcrumbs__list" }, items.map((item, index) => {
    var _a;
    const isCurrent = (_a = item.current) != null ? _a : index === items.length - 1;
    const content = /* @__PURE__ */ React.createElement(React.Fragment, null, item.icon && /* @__PURE__ */ React.createElement("span", { className: "breadcrumbs__icon", "aria-hidden": "true" }, item.icon), /* @__PURE__ */ React.createElement("span", { className: "breadcrumbs__label" }, item.label));
    return /* @__PURE__ */ React.createElement("li", { className: "breadcrumbs__item", key: index }, item.href && !isCurrent ? /* @__PURE__ */ React.createElement("a", { className: "breadcrumbs__link", href: item.href }, content) : /* @__PURE__ */ React.createElement(
      "span",
      {
        className: "breadcrumbs__current",
        "aria-current": isCurrent ? "page" : void 0
      },
      content
    ), index < items.length - 1 && /* @__PURE__ */ React.createElement("span", { className: "breadcrumbs__separator", "aria-hidden": "true" }, separator));
  })));
}
export {
  Breadcrumbs
};
//# sourceMappingURL=Breadcrumbs.mjs.map