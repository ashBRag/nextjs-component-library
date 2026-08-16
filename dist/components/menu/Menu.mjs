"use client";
import "../../chunk-FJBZBVPE.mjs";
import React, { useEffect, useRef, useState } from "react";
import "./menu.base.css";
function DropdownMenu({
  trigger,
  groups,
  align = "right",
  className = ""
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const alignCls = align === "right" ? "right-0" : "left-0";
  return /* @__PURE__ */ React.createElement("div", { ref, className: `relative inline-block ${className}` }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setOpen((p) => !p),
      className: "dropdown__trigger",
      "aria-haspopup": "true",
      "aria-expanded": open
    },
    trigger
  ), open && /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `dropdown__panel absolute ${alignCls} mt-2 z-50`,
      role: "menu"
    },
    groups.map((group, gi) => /* @__PURE__ */ React.createElement("div", { key: gi, className: "dropdown__group" }, group.heading && /* @__PURE__ */ React.createElement("p", { className: "dropdown__heading" }, group.heading), group.items.map((item) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: item.value,
        role: "menuitem",
        className: [
          "dropdown__item",
          item.active && "dropdown__item--active"
        ].filter(Boolean).join(" "),
        onClick: () => {
          item.onClick();
          setOpen(false);
        }
      },
      item.active && /* @__PURE__ */ React.createElement("span", { className: "dropdown__item-dot", "aria-hidden": true }),
      item.label
    )), gi < groups.length - 1 && /* @__PURE__ */ React.createElement("hr", { className: "dropdown__divider" })))
  ));
}
export {
  DropdownMenu
};
//# sourceMappingURL=Menu.mjs.map