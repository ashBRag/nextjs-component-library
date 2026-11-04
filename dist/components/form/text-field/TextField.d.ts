import React from "react";
import "../form.base.css";
interface TextFieldProps {
    label?: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    placeholder?: string;
    rows?: number;
    className?: string;
}
export declare const TextField: React.FC<TextFieldProps>;
export {};
