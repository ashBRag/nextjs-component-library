"use client";
import "../../chunk-FJBZBVPE.mjs";
import React from "react";
import { CornerBrackets } from "../corner/CornerBrackets";
import "./timeline.base.css";
function Timeline({
  items,
  className = "",
  animated = false,
  selectedId,
  onSelect
}) {
  const handleCardClick = (item) => {
    if (!item.action) return;
    onSelect == null ? void 0 : onSelect(item.id);
    if (item.action.onClick) {
      item.action.onClick();
    } else if (item.action.href && item.action.external) {
      window.open(item.action.href, "_blank", "noopener,noreferrer");
    }
  };
  const getCardMods = (item) => {
    if (!item.action) return "";
    if (selectedId === item.id) return "timeline__card--selected";
    return "timeline__card--interactive";
  };
  const renderCardContent = (item) => {
    var _a;
    return /* @__PURE__ */ React.createElement("div", { className: `timeline__card ${getCardMods(item)}` }, /* @__PURE__ */ React.createElement(CornerBrackets, { wrapped: true, size: "lg", color: "corner-token" }), /* @__PURE__ */ React.createElement("div", { className: "timeline__card-inner" }, /* @__PURE__ */ React.createElement("div", { className: "timeline__card-header" }, /* @__PURE__ */ React.createElement("div", { className: "timeline__title-wrapper" }, /* @__PURE__ */ React.createElement("h3", { className: "timeline__title" }, item.title)), item.badge && /* @__PURE__ */ React.createElement(
      "span",
      {
        className: `timeline__badge timeline__badge--${(_a = item.badge.variant) != null ? _a : "primary"}`
      },
      item.badge.text
    )), /* @__PURE__ */ React.createElement("time", { className: "timeline__date" }, item.date), item.description && /* @__PURE__ */ React.createElement("p", { className: "timeline__description" }, item.description)));
  };
  const renderCard = (item) => {
    if (!item.action) {
      return renderCardContent(item);
    }
    if (item.action.href && !item.action.external) {
      return /* @__PURE__ */ React.createElement("a", { href: item.action.href, className: "timeline__card-link" }, renderCardContent(item));
    }
    return /* @__PURE__ */ React.createElement("div", { onClick: () => handleCardClick(item) }, renderCardContent(item));
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `timeline ${animated ? "timeline--animated" : ""} ${className}`
    },
    /* @__PURE__ */ React.createElement("ol", { className: "timeline__list" }, items.map((item) => /* @__PURE__ */ React.createElement("li", { key: item.id, className: "timeline__item" }, /* @__PURE__ */ React.createElement("span", { className: "timeline__node" }, item.icon), renderCard(item))))
  );
}
export {
  Timeline as default
};
//# sourceMappingURL=Timeline.mjs.map