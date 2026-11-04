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
export declare function SideMenu({ groups, activeId, onSelect, title, variant, className, }: SideMenuProps): import("react/jsx-runtime").JSX.Element;
export {};
