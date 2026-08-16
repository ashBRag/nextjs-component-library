"use client";
import "../../chunk-FJBZBVPE.mjs";
import React, { useState } from "react";
import { CornerBrackets } from "../corner/CornerBrackets";
import "./navList.base.css";
function NavList({
  tabs,
  defaultActiveTab,
  className = "",
  tabsClassName = "",
  contentClassName = "",
  animated = true,
  horizontal = false
}) {
  var _a, _b, _c, _d;
  const [activeTab, setActiveTab] = useState(
    (_b = defaultActiveTab != null ? defaultActiveTab : (_a = tabs[0]) == null ? void 0 : _a.id) != null ? _b : ""
  );
  const handleTabClick = (item) => {
    var _a2;
    if (item.disabled) return;
    (_a2 = item.onClick) == null ? void 0 : _a2.call(item, item);
    if (!item.href) setActiveTab(item.id);
  };
  const getItemMods = (item, isActive) => {
    if (item.disabled) return "nav-list__trigger--disabled";
    if (isActive) return "nav-list__trigger--active";
    return "";
  };
  const getIconMods = (item, isActive) => {
    if (item.disabled) return "nav-list__icon--disabled";
    if (isActive && animated) return "nav-list__icon--active";
    return "";
  };
  const renderInner = (item, isActive) => /* @__PURE__ */ React.createElement(React.Fragment, null, isActive && /* @__PURE__ */ React.createElement(CornerBrackets, { wrapped: true, color: "nav-active" }), item.icon && /* @__PURE__ */ React.createElement(
    "span",
    {
      className: `nav-list__icon ${getIconMods(item, isActive)}`,
      "aria-hidden": "true"
    },
    item.icon
  ), /* @__PURE__ */ React.createElement("span", { className: "nav-list__label" }, /* @__PURE__ */ React.createElement("span", { className: "nav-list__label-prefix", "aria-hidden": "true" }), item.name), isActive && /* @__PURE__ */ React.createElement("span", { className: "nav-list__indicator", "aria-hidden": "true" }));
  const renderItem = (item) => {
    const isActive = activeTab === item.id;
    const modClass = getItemMods(item, isActive);
    if (item.href && !item.disabled) {
      return /* @__PURE__ */ React.createElement(
        "a",
        {
          href: item.href,
          className: `nav-list__trigger nav-list__trigger--link ${modClass}`
        },
        renderInner(item, isActive)
      );
    }
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `nav-list__trigger ${modClass}`,
        onClick: () => handleTabClick(item),
        disabled: item.disabled,
        "aria-current": isActive ? "page" : void 0,
        type: "button"
      },
      renderInner(item, isActive)
    );
  };
  const activeContent = (_d = (_c = tabs.find((t) => t.id === activeTab)) == null ? void 0 : _c.content) != null ? _d : null;
  const rootMods = [
    horizontal ? "nav-list--horizontal" : "nav-list--vertical",
    animated ? "nav-list--animated" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ React.createElement("div", { className: `nav-list ${rootMods} ${className}` }, /* @__PURE__ */ React.createElement("ul", { className: `nav-list__list ${tabsClassName}` }, tabs.map((item) => /* @__PURE__ */ React.createElement("li", { key: item.id, className: "nav-list__item" }, renderItem(item)))), /* @__PURE__ */ React.createElement("div", { className: `nav-list__content ${contentClassName}` }, /* @__PURE__ */ React.createElement("div", { className: "nav-list__content-inner" }, activeContent)));
}
export {
  NavList as default
};
//# sourceMappingURL=NavList.mjs.map