import React, { useState, useEffect } from "react";
import { LuX, LuCircle, LuInfo, LuTriangle } from "react-icons/lu";
import "./toast.base.css";

type ToastType = "success" | "error" | "warning" | "info";

interface ToastProps {
  type: ToastType;
  message: string;
  duration?: number;
  onClose?: () => void;
}

interface ToastEntry {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

interface ToastContainerProps {
  toasts: ToastEntry[];
  onRemove: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({
  type,
  message,
  duration = 4000,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const enterTimer = setTimeout(() => setIsVisible(true), 50);
    const exitTimer = setTimeout(() => handleClose(), duration);
    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => onClose?.(), 300);
  };

  const getIcon = () => {
    const props = { size: 20 };
    switch (type) {
      case "success":
        return <LuCircle {...props} />;
      case "error":
        return <LuCircle {...props} />;
      case "warning":
        return <LuTriangle {...props} />;
      case "info":
        return <LuInfo {...props} />;
    }
  };

  const visibilityMod =
    isVisible && !isExiting ? "toast--visible" : "toast--hidden";

  return (
    <div
      className={`toast toast--${type} ${visibilityMod}`}
      style={{ "--toast-duration": `${duration}ms` } as React.CSSProperties}
    >
      <div
        className={`toast__progress ${
          isExiting ? "toast__progress--exiting" : ""
        }`}
      />
      <span className="toast__icon">{getIcon()}</span>
      <div className="toast__message">{message}</div>
      <button
        className="toast__close"
        onClick={handleClose}
        type="button"
        aria-label="Dismiss notification"
      >
        <LuX size={16} />
      </button>
    </div>
  );
};

const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  onRemove,
}) => (
  <div className="toast-container">
    {toasts.map((t) => (
      <Toast
        key={t.id}
        type={t.type}
        message={t.message}
        duration={t.duration}
        onClose={() => onRemove(t.id)}
      />
    ))}
  </div>
);

export { Toast, ToastContainer };
export type { ToastType, ToastEntry };
