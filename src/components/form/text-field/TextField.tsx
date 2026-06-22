"use client";

import React from "react";
import "./text-field.base.css";

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

export const TextField: React.FC<TextFieldProps> = ({
  label = "",
  type = "text",
  value = "",
  onChange,
  error,
  placeholder = "",
  rows,
  className = "",
}) => {
  const isTextarea = Boolean(rows && rows > 0);
  const fieldMod = error ? "text-field--error" : "";

  return (
    <div className={`text-field ${className}`}>
      {label && (
        <label className="text-field__label">
          <span className="text-field__label-prefix" aria-hidden="true" />
          {label}
        </label>
      )}

      {isTextarea ? (
        <textarea
          rows={rows}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`text-field__input text-field__input--textarea ${fieldMod}`}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`text-field__input ${fieldMod}`}
          placeholder={placeholder}
        />
      )}

      {error && <p className="text-field__error">{error}</p>}
    </div>
  );
};
