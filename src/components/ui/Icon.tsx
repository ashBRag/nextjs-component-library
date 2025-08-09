/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

interface IconConfig {
  name: string;
  icon: string;
  color: string;
}

interface IconComponentProps {
  name: string;
  iconMap: IconConfig[];
  iconClass?: string;
  divClass?: string;
}

export default function IconComponent({
  name,
  iconMap,
  iconClass = "w-10 h-10",
  divClass = "flex flex-col items-center gap-2",
}: IconComponentProps) {
  const iconConfig = iconMap.find((icon) => icon.name === name) || {
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
      <span className="text-lg sm:text-xs">{name}</span>
    </div>
  );
}
