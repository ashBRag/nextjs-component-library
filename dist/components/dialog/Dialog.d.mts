import React__default from 'react';

interface DialogProps {
    open: boolean;
    onClose: () => void;
    title?: string | React__default.ReactNode;
    footer?: React__default.ReactNode;
    size?: "sm" | "md" | "lg";
    closeOnOverlayClick?: boolean;
    className?: string;
    children?: React__default.ReactNode;
}
declare function Dialog({ open, onClose, title, footer, size, closeOnOverlayClick, className, children, }: DialogProps): React__default.JSX.Element | null;

export { Dialog };
