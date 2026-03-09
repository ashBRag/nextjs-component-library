"use client";

import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import { useAppSelector } from "@/components/store/hooks";

type IconMapKey = "skills" | "services" | "contact";

interface IconComponentProps {
  name?: string;
  id?: string;
  section: IconMapKey; // which slice of iconMap to look in
  iconClass?: string;
  divClass?: string;
  show?: boolean;
}

export default function IconComponent({
  name,
  id,
  section,
  iconClass = "w-8 h-8",
  divClass = "flex flex-col items-center gap-2",
  show = true,
}: IconComponentProps) {
  const iconMap = useAppSelector((state) => {
    //console.log(state);
    return state.portfolio.iconMap[section];
  });

  const iconConfig = iconMap.find(
    (icon) => icon.id === id || icon.name === name
  ) ?? { icon: "", color: "#ffffff", name: "" };

  const IconElement =
    (SiIcons as Record<string, any>)[iconConfig.icon] ||
    (FaIcons as Record<string, any>)[iconConfig.icon];

  return (
    <div className={divClass}>
      {IconElement && (
        <IconElement color={iconConfig.color} className={iconClass} />
      )}
      {show && <span className="text-xs">{name}</span>}
    </div>
  );
}
