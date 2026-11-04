"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../form.base.css";
export const StatusBar = ({ progress, status = "Ready", }) => {
    const clamped = Math.min(100, Math.max(0, progress));
    return (_jsx("div", { className: "status-bar", children: _jsxs("div", { className: "status-bar__inner", children: [_jsxs("span", { className: "status-bar__status", children: [_jsx("span", { className: "status-bar__status-prefix", "aria-hidden": "true" }), "Status: ", status] }), _jsxs("span", { className: "status-bar__progress-label", children: ["Progress: ", clamped, "%"] }), _jsx("div", { className: "status-bar__track", children: _jsx("div", { className: "status-bar__fill", style: { "--status-progress": `${clamped}%` } }) })] }) }));
};
//# sourceMappingURL=StatusBar.js.map