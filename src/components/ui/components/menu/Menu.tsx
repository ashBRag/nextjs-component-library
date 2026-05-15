"use client";

import { useEffect, useRef, useState } from "react";

interface DropdownItem {
  label: string;
  value: string;
  active?: boolean;
  onClick: () => void;
}

interface DropdownGroup {
  heading?: string;
  items: DropdownItem[];
}

interface DropdownMenuProps {
  trigger: React.ReactNode;
  groups: DropdownGroup[];
  align?: "left" | "right";
  className?: string;
}

export function DropdownMenu({
  trigger,
  groups,
  align = "right",
  className = "",
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const alignCls = align === "right" ? "right-0" : "left-0";

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="dropdown__trigger"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {trigger}
      </button>

      {/* Panel */}
      {open && (
        <div
          className={`dropdown__panel absolute ${alignCls} mt-2 z-50`}
          role="menu"
        >
          {groups.map((group, gi) => (
            <div key={gi} className="dropdown__group">
              {group.heading && (
                <p className="dropdown__heading">{group.heading}</p>
              )}
              {group.items.map((item) => (
                <button
                  key={item.value}
                  role="menuitem"
                  className={[
                    "dropdown__item",
                    item.active && "dropdown__item--active",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => {
                    item.onClick();
                    setOpen(false);
                  }}
                >
                  {item.active && (
                    <span className="dropdown__item-dot" aria-hidden />
                  )}
                  {item.label}
                </button>
              ))}
              {gi < groups.length - 1 && <hr className="dropdown__divider" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
