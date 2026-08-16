import React__default from 'react';

interface DrawerProps {
    open: boolean;
    onClose: () => void;
    title?: string | React__default.ReactNode;
    footer?: React__default.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
    size?: "sm" | "md" | "lg";
    closeOnOverlayClick?: boolean;
    className?: string;
    children?: React__default.ReactNode;
}
declare function Drawer({ open, onClose, title, footer, side, size, closeOnOverlayClick, className, children, }: DrawerProps): React__default.JSX.Element | null;

export { Drawer };
