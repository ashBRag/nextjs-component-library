import React from "react";
import "../form.base.css";
interface RadioOption {
    value: string;
    label: string;
    description?: string;
}
interface RadioGroupProps {
    label: string;
    options: RadioOption[];
    value: string;
    onChange: (value: string) => void;
    error?: string;
    name?: string;
    className?: string;
}
export declare const RadioGroup: React.FC<RadioGroupProps>;
export {};
