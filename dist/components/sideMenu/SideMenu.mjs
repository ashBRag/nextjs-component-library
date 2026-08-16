"use client";
import "../../chunk-FJBZBVPE.mjs";
import React from "react";
import "./sideMenu.base.css";
function SideMenu({
  groups,
  activeId,
  onSelect,
  title,
  variant = "left",
  className = ""
}) {
  return /* @__PURE__ */ React.createElement("nav", { className: `side-menu side-menu--${variant} ${className}` }, title && /* @__PURE__ */ React.createElement("p", { className: "side-menu__title" }, title), groups.map((group, gi) => /* @__PURE__ */ React.createElement("div", { key: group.label, className: "side-menu__group" }, /* @__PURE__ */ React.createElement("p", { className: "side-menu__group-label" }, group.label), /* @__PURE__ */ React.createElement("ul", { className: "side-menu__list" }, group.items.map((item) => /* @__PURE__ */ React.createElement("li", { key: item.id }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      onClick: () => onSelect(item.id),
      className: [
        "side-menu__link",
        `side-menu__link--${variant}`,
        activeId === item.id && "side-menu__link--active"
      ].filter(Boolean).join(" ")
    },
    item.label
  )))), gi < groups.length - 1 && /* @__PURE__ */ React.createElement("hr", { className: "side-menu__divider" }))));
}
export {
  SideMenu
};
//# sourceMappingURL=SideMenu.mjs.map