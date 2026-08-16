import React__default from 'react';

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
declare const Select: React__default.FC<SelectProps>;

export { Select };
