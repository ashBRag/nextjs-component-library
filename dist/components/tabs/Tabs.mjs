"use client";
import "../../chunk-FJBZBVPE.mjs";
import React, { useState, useEffect } from "react";
import { CornerBrackets } from "../corner/CornerBrackets";
import "./tabs.base.css";
function Tabs({
  tabs,
  activeTab,
  onTabChange,
  className = "",
  animated = true,
  contentHeight = "77vh",
  mobileBottomMenu = true,
  variant = "underline",
  bordered = true
}) {
  const [computedHeight, setComputedHeight] = useState("77vh");
  useEffect(() => {
    const calculate = () => {
      if (typeof contentHeight === "number") {
        setComputedHeight(`${contentHeight}px`);
      } else if (contentHeight.includes("%")) {
        setComputedHeight(`${parseFloat(contentHeight)}vh`);
      } else {
        setComputedHeight(contentHeight);
      }
    };
    calculate();
    if (typeof contentHeight === "string" && contentHeight.includes("%")) {
      window.addEventListener("resize", calculate);
      return () => window.removeEventListener("resize", calculate);
    }
  }, [contentHeight]);
  const rootMod = animated ? "tabs--animated" : "";
  const TabHeaders = ({ isMobile = false }) => {
    const headerMod = isMobile ? "tabs__header--mobile" : "tabs__header--desktop";
    return /* @__PURE__ */ React.createElement("div", { className: `tabs__header ${headerMod}` }, /* @__PURE__ */ React.createElement("ul", { className: "tabs__list", role: "tablist" }, tabs.map((tab) => {
      var _a;
      const isActive = activeTab === tab.id;
      const itemMod = isActive ? "tabs__item--active" : "";
      const btnMod = [
        `tabs__trigger--${variant}`,
        isActive ? "tabs__trigger--active" : "",
        isMobile ? "tabs__trigger--mobile" : "tabs__trigger--desktop"
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ React.createElement(
        "li",
        {
          key: tab.id,
          className: `tabs__item ${itemMod} ${(_a = tab.className) != null ? _a : ""}`,
          role: "presentation"
        },
        /* @__PURE__ */ React.createElement(
          "button",
          {
            className: `tabs__trigger ${btnMod}`,
            onClick: () => {
              onTabChange == null ? void 0 : onTabChange(tab.id);
            },
            type: "button",
            role: "tab",
            "aria-controls": tab.id,
            "aria-selected": isActive
          },
          /* @__PURE__ */ React.createElement("span", { className: "tabs__trigger-inner" }, tab.icon && /* @__PURE__ */ React.createElement(
            "span",
            {
              className: `tabs__icon ${isActive ? "tabs__icon--active" : ""}`
            },
            tab.icon
          ), /* @__PURE__ */ React.createElement("span", { className: "tabs__label" }, /* @__PURE__ */ React.createElement("span", { className: "tabs__label-prefix", "aria-hidden": "true" }), tab.label, /* @__PURE__ */ React.createElement("span", { className: "tabs__label-suffix", "aria-hidden": "true" }))),
          isActive && /* @__PURE__ */ React.createElement(
            "span",
            {
              className: `tabs__indicator ${isMobile ? "tabs__indicator--mobile" : "tabs__indicator--desktop"}`,
              "aria-hidden": "true"
            }
          )
        )
      );
    })));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `tabs tabs--desktop ${bordered ? "tabs--bordered" : ""} ${rootMod} ${className}`,
      style: { "--tabs-content-height": computedHeight }
    },
    bordered && /* @__PURE__ */ React.createElement(CornerBrackets, { color: "tab-active" }),
    /* @__PURE__ */ React.createElement(TabHeaders, null),
    /* @__PURE__ */ React.createElement("div", { className: "tabs__panels" }, tabs.map((tab) => {
      var _a;
      const isActive = activeTab === tab.id;
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          id: tab.id,
          key: tab.id,
          className: `tabs__panel ${isActive ? "tabs__panel--active" : "tabs__panel--hidden"} ${(_a = tab.className) != null ? _a : ""}`,
          role: "tabpanel",
          "aria-labelledby": `${tab.id}-tab`
        },
        /* @__PURE__ */ React.createElement(CornerBrackets, { color: "tab-active" }),
        /* @__PURE__ */ React.createElement("div", { className: "tabs__panel-content" }, tab.content),
        /* @__PURE__ */ React.createElement("span", { className: "tabs__panel-indicator", "aria-hidden": "true" })
      );
    }))
  ), mobileBottomMenu && /* @__PURE__ */ React.createElement("div", { className: "tabs tabs--mobile" }, /* @__PURE__ */ React.createElement("div", { className: "tabs__panels tabs__panels--mobile" }, tabs.map((tab) => {
    var _a;
    const isActive = activeTab === tab.id;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        id: tab.id,
        key: `mobile-${tab.id}`,
        className: `tabs__panel ${isActive ? "tabs__panel--active" : "tabs__panel--hidden"} ${(_a = tab.className) != null ? _a : ""}`,
        role: "tabpanel",
        "aria-labelledby": `${tab.id}-tab`
      },
      tab.content
    );
  })), /* @__PURE__ */ React.createElement("div", { className: "tabs__mobile-bar" }, /* @__PURE__ */ React.createElement(CornerBrackets, { corners: ["tl", "tr"], color: "tab-active" }), /* @__PURE__ */ React.createElement(TabHeaders, { isMobile: true }))));
}
export {
  Tabs as default
};
//# sourceMappingURL=Tabs.mjs.map