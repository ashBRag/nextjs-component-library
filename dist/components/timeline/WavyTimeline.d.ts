import React from "react";
import "./wavy-timeline.base.css";
export interface WavyTimelinePoint {
    id: string;
    label: string;
    /** Overrides labelPosition for this point only. */
    side?: "top" | "bottom";
    children?: React.ReactNode;
}
interface WavyTimelineProps {
    points: WavyTimelinePoint[];
    className?: string;
    /** Trend the curve upward across points, left to right. Default false (flat baseline). */
    ascending?: boolean;
    /** Where labels/content render relative to the curve. Default "bottom". */
    labelPosition?: "top" | "bottom" | "alternate";
    selectedId?: string;
    onSelect?: (id: string) => void;
}
export default function WavyTimeline({ points, className, ascending, labelPosition, selectedId, onSelect, }: WavyTimelineProps): import("react/jsx-runtime").JSX.Element;
export {};
