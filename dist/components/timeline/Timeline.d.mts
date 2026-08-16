import React__default from 'react';

interface TimelineItem {
    id: string;
    title: string;
    date: string;
    description?: string;
    badge?: {
        text: string;
        variant?: "primary" | "secondary" | "success" | "warning";
    };
    icon?: React__default.ReactNode;
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
declare function Timeline({ items, className, animated, selectedId, onSelect, }: TimelineProps): React__default.JSX.Element;

export { type TimelineItem, Timeline as default };
