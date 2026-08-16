import "../../chunk-FJBZBVPE.mjs";
import React from "react";
import "./divider.base.css";
function Divider({ spacing = "md", label, className = "" }) {
  const cls = ["divider", `divider--${spacing}`, className].filter(Boolean).join(" ");
  if (label) {
    return /* @__PURE__ */ React.createElement("div", { className: `${cls} divider--labeled`, role: "separator" }, /* @__PURE__ */ React.createElement("span", { className: "divider__line" }), /* @__PURE__ */ React.createElement("span", { className: "divider__label" }, label), /* @__PURE__ */ React.createElement("span", { className: "divider__line" }));
  }
  return /* @__PURE__ */ React.createElement("hr", { className: cls, role: "separator" });
}
export {
  Divider
};
//# sourceMappingURL=Divider.mjs.map