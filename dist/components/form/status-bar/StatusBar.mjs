"use client";
import "../../../chunk-FJBZBVPE.mjs";
import React from "react";
import "../form.base.css";
const StatusBar = ({
  progress,
  status = "Ready"
}) => {
  const clamped = Math.min(100, Math.max(0, progress));
  return /* @__PURE__ */ React.createElement("div", { className: "status-bar" }, /* @__PURE__ */ React.createElement("div", { className: "status-bar__inner" }, /* @__PURE__ */ React.createElement("span", { className: "status-bar__status" }, /* @__PURE__ */ React.createElement("span", { className: "status-bar__status-prefix", "aria-hidden": "true" }), "Status: ", status), /* @__PURE__ */ React.createElement("span", { className: "status-bar__progress-label" }, "Progress: ", clamped, "%"), /* @__PURE__ */ React.createElement("div", { className: "status-bar__track" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "status-bar__fill",
      style: { "--status-progress": `${clamped}%` }
    }
  ))));
};
export {
  StatusBar
};
//# sourceMappingURL=StatusBar.mjs.map