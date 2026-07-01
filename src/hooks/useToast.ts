import { useState } from "react";

// useToast Hook
type ToastType = "success" | "error" | "warning" | "info";

interface ToastEntry {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

const useToast = () => {
  const [, setToasts] = useState<ToastEntry[]>([]);

  const addToast = (type: ToastType, message: string, duration?: number) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, message, duration }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return {
    addToast,
    removeToast,
    success: (msg: string, duration?: number) =>
      addToast("success", msg, duration),
    error: (msg: string, duration?: number) => addToast("error", msg, duration),
    warning: (msg: string, duration?: number) =>
      addToast("warning", msg, duration),
    info: (msg: string, duration?: number) => addToast("info", msg, duration),
  };
};

export { useToast };
