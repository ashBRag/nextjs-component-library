import React from "react";
import "../form.base.css";
interface SelectOption {
    value: string;
    label: string;
}
interface SelectProps {
    label: string;
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    error?: string;
    className?: string;
}
export declare const Select: React.FC<SelectProps>;
export {};
