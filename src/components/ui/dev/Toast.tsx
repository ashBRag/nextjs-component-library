import React, { useState, useEffect } from "react";
import { LuX, LuCircle, LuInfo, LuTriangle } from "react-icons/lu";

// Toast Component
interface ToastProps {
  type: "success" | "error" | "warning" | "info";
  message: string;
  duration?: number;
  onClose?: () => void;
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
    setTimeout(() => setIsVisible(true), 50);

    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => onClose?.(), 300);
  };

  const getToastStyles = () => {
    const typeStyles = {
      success: "bg-[#1E2D3D]/95 border-[#98C379] shadow-[#98C379]/10",
      error: "bg-[#1E2D3D]/95 border-[#E06C75] shadow-[#E06C75]/10",
      warning: "bg-[#1E2D3D]/95 border-[#E5C07B] shadow-[#E5C07B]/10",
      info: "bg-[#1E2D3D]/95 border-[#C778DD] shadow-[#C778DD]/10",
    };

    return `
      relative flex items-center gap-3 p-4 rounded-lg border backdrop-blur-sm 
      shadow-xl min-w-[320px] max-w-[480px] font-mono text-sm text-white
      transition-all duration-300 ease-out transform
      ${
        isVisible && !isExiting
          ? "translate-x-0 opacity-100 scale-100"
          : "translate-x-full opacity-0 scale-95"
      }
      ${typeStyles[type]}
    `;
  };

  const getIcon = () => {
    const colors = {
      success: "text-[#98C379]",
      error: "text-[#E06C75]",
      warning: "text-[#E5C07B]",
      info: "text-[#C778DD]",
    };

    const iconProps = { size: 20, className: `flex-shrink-0 ${colors[type]}` };

    switch (type) {
      case "success":
        return <LuCircle {...iconProps} />;
      case "error":
        return <LuCircle {...iconProps} />;
      case "warning":
        return <LuTriangle {...iconProps} />;
      case "info":
        return <LuInfo {...iconProps} />;
    }
  };

  const getProgressBarColor = () => {
    const colors = {
      success: "#98C379",
      error: "#E06C75",
      warning: "#E5C07B",
      info: "#C778DD",
    };
    return colors[type];
  };

  return (
    <div className={getToastStyles()}>
      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 h-1 rounded-b-lg transition-all duration-300 ease-linear"
        style={{
          backgroundColor: getProgressBarColor(),
          width: isExiting ? "0%" : "100%",
          transitionDuration: `${duration}ms`,
        }}
      />

      {/* Icon */}
      {getIcon()}

      {/* Message */}
      <div className="flex-1 leading-relaxed">{message}</div>

      {/* Close button */}
      <button
        onClick={handleClose}
        className="flex-shrink-0 p-1 rounded hover:bg-white/10 transition-colors duration-200"
      >
        <LuX size={16} className="text-[#ABB2BF] hover:text-white" />
      </button>
    </div>
  );
};

// useToast Hook
const useToast = () => {
  const [toasts, setToasts] = useState<
    Array<{
      id: string;
      type: "success" | "error" | "warning" | "info";
      message: string;
      duration?: number;
    }>
  >([]);

  const addToast = (
    type: "success" | "error" | "warning" | "info",
    message: string,
    duration?: number,
  ) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, message, duration }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const ToastContainer = () => (
    <div className="fixed bottom-4 right-4 z-50 space-y-reverse space-y-3">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type}
          message={toast.message}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );

  return {
    addToast,
    ToastContainer,
    success: (message: string, duration?: number) =>
      addToast("success", message, duration),
    error: (message: string, duration?: number) =>
      addToast("error", message, duration),
    warning: (message: string, duration?: number) =>
      addToast("warning", message, duration),
    info: (message: string, duration?: number) =>
      addToast("info", message, duration),
  };
};

export { Toast, useToast };
