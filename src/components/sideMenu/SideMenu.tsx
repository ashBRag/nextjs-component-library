"use client";

import React from "react";
import "./sideMenu.base.css";

interface SideMenuItem {
  id: string;
  label: string;
}

interface SideMenuGroup {
  label: string;
  items: SideMenuItem[];
}

interface SideMenuProps {
  groups: SideMenuGroup[];
  activeId: string | null;
  onSelect: (id: string) => void;
  title?: string;
  variant?: "left" | "right";
  className?: string;
}

export function SideMenu({
  groups,
  activeId,
  onSelect,
  title,
  variant = "left",
  className = "",
}: SideMenuProps) {
  return (
    <nav className={`side-menu side-menu--${variant} ${className}`}>
      {title && <p className="side-menu__title">{title}</p>}
      {groups.map((group, gi) => (
        <div key={group.label} className="side-menu__group">
          <p className="side-menu__group-label">{group.label}</p>
          <ul className="side-menu__list">
            {group.items.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onSelect(item.id)}
                  className={[
                    "side-menu__link",
                    `side-menu__link--${variant}`,
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
          {gi < groups.length - 1 && <hr className="side-menu__divider" />}
        </div>
      ))}
    </nav>
  );
}
