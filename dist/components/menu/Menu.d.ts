import React from "react";
import "./menu.base.css";
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
export declare function DropdownMenu({ trigger, groups, align, className, }: DropdownMenuProps): React.JSX.Element;
export {};
