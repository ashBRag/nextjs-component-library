import React from "react";
import "./tabs.base.css";
interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}
type TabsVariant = "underline" | "boxed";
interface TabsProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange?: (tabId: string) => void;
    className?: string;
    animated?: boolean;
    contentHeight?: string | number;
    mobileBottomMenu?: boolean;
    /** Active-tab trigger style. Default "underline". */
    variant?: TabsVariant;
    /** Whether the outer container has a border/rounded box. Default true. */
    bordered?: boolean;
}
export default function Tabs({ tabs, activeTab, onTabChange, className, animated, contentHeight, mobileBottomMenu, variant, bordered, }: TabsProps): import("react/jsx-runtime").JSX.Element;
export {};
