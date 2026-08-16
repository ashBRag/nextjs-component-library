import React__default from 'react';

interface BreadcrumbItem {
    /** The content shown for this level of navigation. */
    label: React__default.ReactNode;
    /** Destination for navigable breadcrumb items. */
    href?: string;
    /** Optional icon displayed before the label. */
    icon?: React__default.ReactNode;
    /** Marks this item as the current page. The final item is current by default. */
    current?: boolean;
}
interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    /** Visual element placed between items. */
    separator?: React__default.ReactNode;
    /** Accessible label for the navigation landmark. */
    ariaLabel?: string;
    className?: string;
}
declare function Breadcrumbs({ items, separator, ariaLabel, className, }: BreadcrumbsProps): React__default.JSX.Element;

export { type BreadcrumbItem, Breadcrumbs, type BreadcrumbsProps };
