import React__default from 'react';

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
declare const RadioGroup: React__default.FC<RadioGroupProps>;

export { RadioGroup };
