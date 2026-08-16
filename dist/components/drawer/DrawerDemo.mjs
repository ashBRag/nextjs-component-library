"use client";
import "../../chunk-FJBZBVPE.mjs";
import { useState } from "react";
import { Button } from "@/components/button/Button";
import { Drawer } from "./Drawer";
function DrawerDemo() {
  const [side, setSide] = useState(
    null
  );
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 flex-wrap" }, /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: () => setSide("left") }, "Open Left"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: () => setSide("right") }, "Open Right"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: () => setSide("top") }, "Open Top"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: () => setSide("bottom") }, "Open Bottom")), /* @__PURE__ */ React.createElement(
    Drawer,
    {
      open: side !== null,
      onClose: () => setSide(null),
      side: side != null ? side : "right",
      title: "Drawer title",
      footer: /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: () => setSide(null) }, "Done")
    },
    /* @__PURE__ */ React.createElement("p", null, "Drawer content slides in from the ", side, " side.")
  ));
}
export {
  DrawerDemo as default
};
//# sourceMappingURL=DrawerDemo.mjs.map