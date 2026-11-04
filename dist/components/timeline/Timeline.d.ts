import React from "react";
import "./timeline.base.css";
export interface TimelineItem {
    id: string;
    title: string;
    date: string;
    description?: string;
    badge?: {
        text: string;
        variant?: "primary" | "secondary" | "success" | "warning";
    };
    icon?: React.ReactNode;
    action?: {
        href?: string;
        onClick?: () => void;
        external?: boolean;
    };
}
interface TimelineProps {
    items: TimelineItem[];
    className?: string;
    animated?: boolean;
    selectedId?: string;
    onSelect?: (id: string) => void;
}
export default function Timeline({ items, className, animated, selectedId, onSelect, }: TimelineProps): import("react/jsx-runtime").JSX.Element;
export {};
