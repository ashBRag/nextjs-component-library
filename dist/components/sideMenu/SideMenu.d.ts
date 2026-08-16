import React__default from 'react';

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
declare function SideMenu({ groups, activeId, onSelect, title, variant, className, }: SideMenuProps): React__default.JSX.Element;

export { SideMenu };
