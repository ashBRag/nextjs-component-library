import React__default from 'react';

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
    trigger: React__default.ReactNode;
    groups: DropdownGroup[];
    align?: "left" | "right";
    className?: string;
}
declare function DropdownMenu({ trigger, groups, align, className, }: DropdownMenuProps): React__default.JSX.Element;

export { DropdownMenu };
