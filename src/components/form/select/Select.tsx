"use client";

import React from "react";
import "./select.base.css";

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

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  error,
  className = "",
}) => {
  return (
    <div className={`select-field ${className}`}>
      <label className="select-field__label">
        <span className="select-field__label-prefix" aria-hidden="true" />
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`select-field__input ${
          error ? "select-field__input--error" : ""
        }`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="select-field__error">{error}</p>}
    </div>
  );
};
