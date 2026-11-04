import "../../chunk-FJBZBVPE.mjs";
import React from "react";
import "./typography.base.css";
const defaultTag = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  "body-sm": "p",
  "body-lg": "p",
  caption: "span",
  label: "span"
};
function Typography({
  variant = "body",
  color = "default",
  as,
  className = "",
  children
}) {
  const Tag = as != null ? as : defaultTag[variant];
  const cls = [
    "typography",
    `typography--${variant}`,
    color !== "default" && `typography--color-${color}`,
    className
  ].filter(Boolean).join(" ");
  return React.createElement(Tag, { className: cls }, children);
}
export {
  Typography
};
//# sourceMappingURL=Typography.mjs.map