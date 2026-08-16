import React__default from 'react';

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
declare const TextField: React__default.FC<TextFieldProps>;

export { TextField };
