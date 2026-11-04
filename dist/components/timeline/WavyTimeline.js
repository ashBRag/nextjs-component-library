"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import "./wavy-timeline.base.css";
const STEP_X = 220;
const BASELINE_Y = 160;
const AMPLITUDE = 90;
const PADDING_X = 60;
const RISE_PER_POINT = 70;
function buildSmoothPath(coords) {
    if (coords.length < 2)
        return "";
    let d = `M ${coords[0].x} ${coords[0].y}`;
    for (let i = 0; i < coords.length - 1; i++) {
        const p0 = coords[i - 1] ?? coords[i];
        const p1 = coords[i];
        const p2 = coords[i + 1];
        const p3 = coords[i + 2] ?? p2;
        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;
        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;
        d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return d;
}
export default function WavyTimeline({ points, className = "", ascending = false, labelPosition = "bottom", selectedId, onSelect, }) {
    const resolveSide = (point, i) => point.side ?? (labelPosition === "alternate"
        ? i % 2 === 0
            ? "bottom"
            : "top"
        : labelPosition);
    const { path, coords, width, height } = useMemo(() => {
        const lastIndex = Math.max(0, points.length - 1);
        const cs = points.map((point, i) => {
            const wiggleUp = i % 2 === 0;
            const baseline = ascending
                ? BASELINE_Y + AMPLITUDE - (lastIndex - i) * RISE_PER_POINT
                : BASELINE_Y;
            const y = wiggleUp ? baseline - AMPLITUDE : baseline + AMPLITUDE;
            return { x: PADDING_X + i * STEP_X, y };
        });
        const w = PADDING_X * 2 + lastIndex * STEP_X;
        const minY = Math.min(...cs.map((c) => c.y));
        const maxY = Math.max(...cs.map((c) => c.y));
        const h = maxY - minY + AMPLITUDE * 2;
        const offsetY = AMPLITUDE - minY;
        const shifted = cs.map((c) => ({ x: c.x, y: c.y + offsetY }));
        return {
            path: buildSmoothPath(shifted),
            coords: shifted,
            width: w,
            height: h,
        };
    }, [points, ascending]);
    const selectedIndex = points.findIndex((p) => p.id === selectedId);
    const selectedPoint = selectedIndex >= 0 ? points[selectedIndex] : undefined;
    let selectedCorner = "top-left";
    if (selectedIndex >= 0) {
        const y = coords[selectedIndex]?.y;
        const next = coords[selectedIndex + 1];
        const prev = coords[selectedIndex - 1];
        const reference = next ?? prev;
        const rising = reference
            ? next
                ? next.y < y
                : y < reference.y
            : true;
        selectedCorner = rising ? "top-left" : "top-right";
    }
    return (_jsxs("div", { className: `wavy-timeline ${className}`, children: [_jsxs("div", { className: "wavy-timeline__scroll", style: { aspectRatio: `${width} / ${height}` }, children: [_jsx("svg", { className: "wavy-timeline__svg", viewBox: `0 0 ${width} ${height}`, preserveAspectRatio: "none", role: "presentation", "aria-hidden": "true", children: _jsx("path", { d: path, className: "wavy-timeline__path", fill: "none", vectorEffect: "non-scaling-stroke" }) }), _jsx("ol", { className: "wavy-timeline__list", children: points.map((point, i) => {
                            const side = resolveSide(point, i);
                            const isSelected = selectedId === point.id;
                            const { x, y } = coords[i];
                            return (_jsxs("li", { className: `wavy-timeline__point wavy-timeline__point--${side}`, style: { left: `${(x / width) * 100}%`, top: `${(y / height) * 100}%` }, children: [_jsx("button", { type: "button", className: `wavy-timeline__dot wavy-timeline__dot--${isSelected ? "lg" : "md"} ${isSelected ? "wavy-timeline__dot--selected" : ""}`, "aria-pressed": isSelected, "aria-label": point.label, onClick: () => onSelect?.(point.id) }), _jsxs("div", { className: `wavy-timeline__stem wavy-timeline__stem--${side}`, children: [_jsx("span", { className: "wavy-timeline__stub", "aria-hidden": "true" }), _jsx("span", { className: "wavy-timeline__label", children: point.label })] })] }, point.id));
                        }) }), selectedPoint?.children && (_jsx("div", { className: `wavy-timeline__callout wavy-timeline__callout--${selectedCorner}`, children: _jsx("div", { className: "wavy-timeline__content wavy-timeline__content--selected", children: selectedPoint.children }) }))] }), _jsx("ol", { className: "wavy-timeline__stacked", children: points.map((point) => {
                    const isSelected = selectedId === point.id;
                    return (_jsxs("li", { className: "wavy-timeline__stacked-item", children: [_jsx("button", { type: "button", className: `wavy-timeline__dot wavy-timeline__dot--${isSelected ? "lg" : "md"} ${isSelected ? "wavy-timeline__dot--selected" : ""}`, "aria-pressed": isSelected, "aria-label": point.label, onClick: () => onSelect?.(point.id) }), _jsxs("div", { className: "wavy-timeline__content", children: [_jsx("span", { className: "wavy-timeline__label", children: point.label }), isSelected && point.children] })] }, point.id));
                }) })] }));
}
//# sourceMappingURL=WavyTimeline.js.map