import React__default from 'react';

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
declare const Toast: React__default.FC<ToastProps>;
declare const ToastContainer: React__default.FC<ToastContainerProps>;

export { Toast, ToastContainer, type ToastEntry, type ToastType, type ToastVariant };
