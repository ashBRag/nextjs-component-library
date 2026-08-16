import "../../chunk-FJBZBVPE.mjs";
import React from "react";
import "./badge.base.css";
function Badge({
  variant = "primary",
  size = "md",
  shape = "rounded",
  children,
  className = ""
}) {
  const cls = ["badge", `badge--${variant}`, `badge--${size}`, `badge--${shape}`, className].filter(Boolean).join(" ");
  return /* @__PURE__ */ React.createElement("span", { className: cls }, children);
}
export {
  Badge
};
//# sourceMappingURL=Badge.mjs.map