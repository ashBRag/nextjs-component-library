import "../../chunk-FJBZBVPE.mjs";
import React from "react";
import "./typography.base.css";
const defaultTag = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  caption: "span",
  label: "span"
};
function Typography({
  variant = "body",
  as,
  className = "",
  children
}) {
  const Tag = as != null ? as : defaultTag[variant];
  const cls = ["typography", `typography--${variant}`, className].filter(Boolean).join(" ");
  return React.createElement(Tag, { className: cls }, children);
}
export {
  Typography
};
//# sourceMappingURL=Typography.mjs.map