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

export function Breadcrumbs({
  items,
  separator = "/",
  ariaLabel = "Breadcrumb",
  className = "",
}: BreadcrumbsProps) {
  return (
    <nav className={`breadcrumbs ${className}`.trim()} aria-label={ariaLabel}>
      <ol className="breadcrumbs__list">
        {items.map((item, index) => {
          const isCurrent = item.current ?? index === items.length - 1;
          const content = (
            <>
              {item.icon && (
                <span className="breadcrumbs__icon" aria-hidden="true">
                  {item.icon}
                </span>
              )}
              <span className="breadcrumbs__label">{item.label}</span>
            </>
          );

          return (
            <li className="breadcrumbs__item" key={index}>
              {item.href && !isCurrent ? (
                <a className="breadcrumbs__link" href={item.href}>
                  {content}
                </a>
              ) : (
                <span
                  className="breadcrumbs__current"
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {content}
                </span>
              )}

              {index < items.length - 1 && (
                <span className="breadcrumbs__separator" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
