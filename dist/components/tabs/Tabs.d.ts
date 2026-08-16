import React__default from 'react';

interface Tab {
    id: string;
    label: string;
    content: React__default.ReactNode;
    icon?: React__default.ReactNode;
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
declare function Tabs({ tabs, activeTab, onTabChange, className, animated, contentHeight, mobileBottomMenu, variant, bordered, }: TabsProps): React__default.JSX.Element;

export { Tabs as default };
