import React from "react";
import "./dialog.base.css";
interface DialogProps {
    open: boolean;
    onClose: () => void;
    title?: string | React.ReactNode;
    footer?: React.ReactNode;
    size?: "sm" | "md" | "lg";
    closeOnOverlayClick?: boolean;
    className?: string;
    children?: React.ReactNode;
}
export declare function Dialog({ open, onClose, title, footer, size, closeOnOverlayClick, className, children, }: DialogProps): import("react/jsx-runtime").JSX.Element | null;
export {};
