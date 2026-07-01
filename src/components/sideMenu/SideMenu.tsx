"use client";

import React from "react";
import "./sideMenu.base.css";

interface SideMenuItem {
  id: string;
  label: string;
}

interface SideMenuProps {
  items: SideMenuItem[];
  activeId: string | null;
  onSelect: (id: string) => void;
  title?: string;
  className?: string;
}

export function SideMenu({
  items,
  activeId,
  onSelect,
  title,
  className = "",
}: SideMenuProps) {
  return (
    <nav className={`side-menu ${className}`}>
      {title && <p className="side-menu__title">{title}</p>}
      <ul className="side-menu__list">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => onSelect(item.id)}
              className={[
                "side-menu__link",
                activeId === item.id && "side-menu__link--active",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
