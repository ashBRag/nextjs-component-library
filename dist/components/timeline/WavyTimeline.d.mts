import React__default from 'react';

interface WavyTimelinePoint {
    id: string;
    label: string;
    /** Overrides labelPosition for this point only. */
    side?: "top" | "bottom";
    children?: React__default.ReactNode;
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
declare function WavyTimeline({ points, className, ascending, labelPosition, selectedId, onSelect, }: WavyTimelineProps): React__default.JSX.Element;

export { type WavyTimelinePoint, WavyTimeline as default };
