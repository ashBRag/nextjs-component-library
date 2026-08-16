import "../../chunk-FJBZBVPE.mjs";
import React, { useState, useEffect, useCallback } from "react";
import "./toast.base.css";
const Toast = ({
  type,
  message,
  variant = "outline",
  duration = 4e3,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => onClose == null ? void 0 : onClose(), 300);
  }, [onClose]);
  useEffect(() => {
    const enterTimer = setTimeout(() => setIsVisible(true), 50);
    const exitTimer = setTimeout(() => handleClose(), duration);
    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [duration, handleClose]);
  const visibilityMod = isVisible && !isExiting ? "toast--visible" : "toast--hidden";
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `toast toast--${type} toast--${variant} ${visibilityMod}`,
      style: { "--toast-duration": `${duration}ms` }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `toast__progress ${isExiting ? "toast__progress--exiting" : ""}`
      }
    ),
    /* @__PURE__ */ React.createElement("div", { className: "toast__message" }, message),
    /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "toast__close",
        onClick: handleClose,
        type: "button",
        "aria-label": "Dismiss notification"
      },
      "\xD7"
    )
  );
};
const ToastContainer = ({
  toasts,
  onRemove
}) => /* @__PURE__ */ React.createElement("div", { className: "toast-container" }, toasts.map((t) => /* @__PURE__ */ React.createElement(
  Toast,
  {
    key: t.id,
    type: t.type,
    message: t.message,
    variant: t.variant,
    duration: t.duration,
    onClose: () => onRemove(t.id)
  }
)));
export {
  Toast,
  ToastContainer
};
//# sourceMappingURL=Toast.mjs.map