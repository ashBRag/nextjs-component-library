"use client";

import React, { useState } from "react";
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

export default function NavList({
  tabs,
  defaultActiveTab,
  className = "",
  tabsClassName = "",
  contentClassName = "",
  animated = true,
  horizontal = false,
}: NavListProps) {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab ?? tabs[0]?.id ?? ""
  );

  const handleTabClick = (item: NavListItem) => {
    if (item.disabled) return;
    item.onClick?.(item);
    if (!item.href) setActiveTab(item.id);
  };

  const getItemMods = (item: NavListItem, isActive: boolean): string => {
    if (item.disabled) return "nav-list__trigger--disabled";
    if (isActive) return "nav-list__trigger--active";
    return "";
  };

  const getIconMods = (item: NavListItem, isActive: boolean): string => {
    if (item.disabled) return "nav-list__icon--disabled";
    if (isActive && animated) return "nav-list__icon--active";
    return "";
  };

  const renderInner = (
    item: NavListItem,
    isActive: boolean
  ): React.ReactNode => (
    <>
      {isActive && (
        <span className="nav-list__corners" aria-hidden="true">
          <span className="nav-list__corner nav-list__corner--tl" />
          <span className="nav-list__corner nav-list__corner--tr" />
          <span className="nav-list__corner nav-list__corner--bl" />
          <span className="nav-list__corner nav-list__corner--br" />
        </span>
      )}

      {item.icon && (
        <span
          className={`nav-list__icon ${getIconMods(item, isActive)}`}
          aria-hidden="true"
        >
          {item.icon}
        </span>
      )}

      <span className="nav-list__label">
        <span className="nav-list__label-prefix" aria-hidden="true" />
        {item.name}
      </span>

      {isActive && <span className="nav-list__indicator" aria-hidden="true" />}
    </>
  );

  const renderItem = (item: NavListItem): React.ReactNode => {
    const isActive = activeTab === item.id;
    const modClass = getItemMods(item, isActive);

    if (item.href && !item.disabled) {
      return (
        <a
          href={item.href}
          className={`nav-list__trigger nav-list__trigger--link ${modClass}`}
        >
          {renderInner(item, isActive)}
        </a>
      );
    }

    return (
      <button
        className={`nav-list__trigger ${modClass}`}
        onClick={() => handleTabClick(item)}
        disabled={item.disabled}
        aria-current={isActive ? "page" : undefined}
        type="button"
      >
        {renderInner(item, isActive)}
      </button>
    );
  };

  const activeContent: React.ReactNode =
    tabs.find((t) => t.id === activeTab)?.content ?? null;

  const rootMods = [
    horizontal ? "nav-list--horizontal" : "nav-list--vertical",
    animated ? "nav-list--animated" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`nav-list ${rootMods} ${className}`}>
      <ul className={`nav-list__list ${tabsClassName}`}>
        {tabs.map((item) => (
          <li key={item.id} className="nav-list__item">
            {renderItem(item)}
          </li>
        ))}
      </ul>

      <div className={`nav-list__content ${contentClassName}`}>
        <div className="nav-list__content-inner">{activeContent}</div>
      </div>
    </div>
  );
}
