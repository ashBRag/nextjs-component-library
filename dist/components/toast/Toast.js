import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import "./toast.base.css";
const Toast = ({ type, message, variant = "outline", duration = 4000, onClose, }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const handleClose = useCallback(() => {
        setIsExiting(true);
        setTimeout(() => onClose?.(), 300);
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
    return (_jsxs("div", { className: `toast toast--${type} toast--${variant} ${visibilityMod}`, style: { "--toast-duration": `${duration}ms` }, children: [_jsx("div", { className: `toast__progress ${isExiting ? "toast__progress--exiting" : ""}` }), _jsx("div", { className: "toast__message", children: message }), _jsx("button", { className: "toast__close", onClick: handleClose, type: "button", "aria-label": "Dismiss notification", children: "\u00D7" })] }));
};
const ToastContainer = ({ toasts, onRemove, }) => (_jsx("div", { className: "toast-container", children: toasts.map((t) => (_jsx(Toast, { type: t.type, message: t.message, variant: t.variant, duration: t.duration, onClose: () => onRemove(t.id) }, t.id))) }));
export { Toast, ToastContainer };
//# sourceMappingURL=Toast.js.map