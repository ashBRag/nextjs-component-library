/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import { IconConfig } from "@/types/iconMap";

interface IconComponentProps {
  name?: string;
  id?: string;
  iconMap: IconConfig[];
  iconClass?: string;
  divClass?: string;
}

export default function IconComponent({
  name,
  id,
  iconMap,
  iconClass = "w-8 h-8",
  divClass = "flex flex-col items-center gap-2",
}: IconComponentProps) {
  const iconConfig = iconMap.find(
    (icon) => icon.id === id || icon.name === name,
  ) || {
    icon: "",
    color: "#ffffff",
    name: "",
  };

  const IconElement =
    (SiIcons as Record<string, any>)[iconConfig.icon] ||
    (FaIcons as Record<string, any>)[iconConfig.icon];

  return (
    <div className={divClass}>
      {IconElement && (
        <IconElement color={iconConfig.color} className={iconClass} />
      )}
      {name && (
        <span className="text-xs sm:text-xs md:text-sm lg:text-sm">{name}</span>
      )}
    </div>
  );
}
