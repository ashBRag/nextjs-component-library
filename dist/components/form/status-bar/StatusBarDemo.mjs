"use client";
import "../../../chunk-FJBZBVPE.mjs";
import { useState } from "react";
import { Button } from "@/components/button/Button";
import { StatusBar } from "./StatusBar";
function StatusBarDemo() {
  const [progress, setProgress] = useState(45);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(StatusBar, { progress, status: "Processing" }), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "outline",
      size: "sm",
      onClick: () => setProgress((p) => Math.max(0, p - 10))
    },
    "-10"
  ), /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "outline",
      size: "sm",
      onClick: () => setProgress((p) => Math.min(100, p + 10))
    },
    "+10"
  )));
}
export {
  StatusBarDemo as default
};
//# sourceMappingURL=StatusBarDemo.mjs.map