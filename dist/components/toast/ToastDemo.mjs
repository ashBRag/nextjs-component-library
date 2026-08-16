"use client";
import "../../chunk-FJBZBVPE.mjs";
import { useState } from "react";
import { Button } from "@/components/button/Button";
import { ToastContainer } from "./Toast";
function ToastDemo() {
  const [toasts, setToasts] = useState([]);
  const addToast = (type, variant) => {
    setToasts((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        type,
        variant,
        message: `This is a ${variant} ${type} toast`
      }
    ]);
  };
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium opacity-80" }, "Outline (default)"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 flex-wrap" }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", onClick: () => addToast("success", "outline") }, "Success"), /* @__PURE__ */ React.createElement(Button, { variant: "secondary", size: "sm", onClick: () => addToast("error", "outline") }, "Error"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", onClick: () => addToast("warning", "outline") }, "Warning"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", onClick: () => addToast("info", "outline") }, "Info"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium opacity-80" }, "Filled"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 flex-wrap" }, /* @__PURE__ */ React.createElement(Button, { variant: "primary", size: "sm", onClick: () => addToast("success", "filled") }, "Success"), /* @__PURE__ */ React.createElement(Button, { variant: "secondary", size: "sm", onClick: () => addToast("error", "filled") }, "Error"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", onClick: () => addToast("warning", "filled") }, "Warning"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", onClick: () => addToast("info", "filled") }, "Info"))), /* @__PURE__ */ React.createElement(ToastContainer, { toasts, onRemove: removeToast }));
}
export {
  ToastDemo as default
};
//# sourceMappingURL=ToastDemo.mjs.map