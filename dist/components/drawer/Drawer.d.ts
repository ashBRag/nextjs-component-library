import React from "react";
import "./drawer.base.css";
interface DrawerProps {
    open: boolean;
    onClose: () => void;
    title?: string | React.ReactNode;
    footer?: React.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
    size?: "sm" | "md" | "lg";
    closeOnOverlayClick?: boolean;
    className?: string;
    children?: React.ReactNode;
}
export declare function Drawer({ open, onClose, title, footer, side, size, closeOnOverlayClick, className, children, }: DrawerProps): import("react/jsx-runtime").JSX.Element | null;
export {};
