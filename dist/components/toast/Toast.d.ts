import React from "react";
import "./toast.base.css";
type ToastType = "success" | "error" | "warning" | "info";
type ToastVariant = "outline" | "filled";
interface ToastProps {
    type: ToastType;
    message: string;
    variant?: ToastVariant;
    duration?: number;
    onClose?: () => void;
}
interface ToastEntry {
    id: string;
    type: ToastType;
    message: string;
    variant?: ToastVariant;
    duration?: number;
}
interface ToastContainerProps {
    toasts: ToastEntry[];
    onRemove: (id: string) => void;
}
declare const Toast: React.FC<ToastProps>;
declare const ToastContainer: React.FC<ToastContainerProps>;
export { Toast, ToastContainer };
export type { ToastType, ToastVariant, ToastEntry };
