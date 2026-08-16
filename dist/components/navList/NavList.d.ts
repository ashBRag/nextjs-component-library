import React__default from 'react';

interface NavListItem {
    id: string;
    name: string;
    icon?: React__default.ReactNode;
    content: React__default.ReactNode;
    disabled?: boolean;
    href?: string;
    onClick?: (item: NavListItem) => void;
}
interface NavListProps {
    tabs: NavListItem[];
    defaultActiveTab?: string;
    className?: string;
    tabsClassName?: string;
    contentClassName?: string;
    animated?: boolean;
    horizontal?: boolean;
}
declare function NavList({ tabs, defaultActiveTab, className, tabsClassName, contentClassName, animated, horizontal, }: NavListProps): React__default.JSX.Element;

export { NavList as default };
