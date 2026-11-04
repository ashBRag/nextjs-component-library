import React from "react";
import "./breadcrumbs.base.css";
export interface BreadcrumbItem {
    /** The content shown for this level of navigation. */
    label: React.ReactNode;
    /** Destination for navigable breadcrumb items. */
    href?: string;
    /** Optional icon displayed before the label. */
    icon?: React.ReactNode;
    /** Marks this item as the current page. The final item is current by default. */
    current?: boolean;
}
export interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    /** Visual element placed between items. */
    separator?: React.ReactNode;
    /** Accessible label for the navigation landmark. */
    ariaLabel?: string;
    className?: string;
}
export declare function Breadcrumbs({ items, separator, ariaLabel, className, }: BreadcrumbsProps): import("react/jsx-runtime").JSX.Element;
