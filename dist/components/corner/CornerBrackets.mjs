import "../../chunk-FJBZBVPE.mjs";
import React from "react";
const ALL_CORNERS = ["tl", "tr", "bl", "br"];
function CornerBrackets({
  corners = ALL_CORNERS,
  size = "sm",
  inset = "inside",
  color = "accent",
  wrapped = false,
  className = ""
}) {
  const spans = corners.map((corner) => /* @__PURE__ */ React.createElement(
    "span",
    {
      key: corner,
      className: [
        "corner",
        `corner--${corner}`,
        `corner--${size}`,
        `corner--${inset}`,
        `corner--${color}`,
        className
      ].filter(Boolean).join(" "),
      "aria-hidden": "true"
    }
  ));
  if (!wrapped) return /* @__PURE__ */ React.createElement(React.Fragment, null, spans);
  return /* @__PURE__ */ React.createElement("span", { className: "corners-wrapper", "aria-hidden": "true" }, spans);
}
export {
  CornerBrackets
};
//# sourceMappingURL=CornerBrackets.mjs.map