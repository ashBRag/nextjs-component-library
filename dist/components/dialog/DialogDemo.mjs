"use client";
import "../../chunk-FJBZBVPE.mjs";
import { useState } from "react";
import { Button } from "@/components/button/Button";
import { Dialog } from "./Dialog";
function DialogDemo() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: () => setOpen(true) }, "Open Dialog"), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open,
      onClose: () => setOpen(false),
      title: "Confirm action",
      footer: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: () => setOpen(false) }, "Cancel"), /* @__PURE__ */ React.createElement(Button, { variant: "primary", onClick: () => setOpen(false) }, "Confirm"))
    },
    /* @__PURE__ */ React.createElement("p", null, "Are you sure you want to proceed with this action?")
  ));
}
export {
  DialogDemo as default
};
//# sourceMappingURL=DialogDemo.mjs.map