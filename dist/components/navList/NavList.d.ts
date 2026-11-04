import React from "react";
import "./navList.base.css";
interface NavListItem {
    id: string;
    name: string;
    icon?: React.ReactNode;
    content: React.ReactNode;
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
export default function NavList({ tabs, defaultActiveTab, className, tabsClassName, contentClassName, animated, horizontal, }: NavListProps): React.JSX.Element;
export {};
