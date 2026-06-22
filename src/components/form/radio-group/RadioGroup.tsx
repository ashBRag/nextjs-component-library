"use client";

import React from "react";
import "./radio-group.base.css";

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

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  value,
  onChange,
  error,
  name = "radio-group",
  className = "",
}) => {
  return (
    <div className={`radio-group ${className}`}>
      <span className="radio-group__label">
        <span className="radio-group__label-prefix" aria-hidden="true" />
        {label}
      </span>

      <div className="radio-group__options">
        {options.map((option) => {
          const isSelected = value === option.value;
          return (
            <label key={option.value} className="radio-group__item">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={isSelected}
                onChange={(e) => onChange(e.target.value)}
                className="radio-group__input"
              />
              <div
                className={`radio-group__option ${
                  isSelected ? "radio-group__option--selected" : ""
                }`}
              >
                {isSelected && (
                  <span className="radio-group__corners" aria-hidden="true">
                    <span className="radio-group__corner radio-group__corner--tl" />
                    <span className="radio-group__corner radio-group__corner--tr" />
                    <span className="radio-group__corner radio-group__corner--bl" />
                    <span className="radio-group__corner radio-group__corner--br" />
                  </span>
                )}

                <div className="radio-group__option-inner">
                  <div className="radio-group__option-label">
                    {option.label}
                  </div>
                  {option.description && (
                    <div className="radio-group__option-description">
                      {option.description}
                    </div>
                  )}
                </div>
              </div>
            </label>
          );
        })}
      </div>

      {error && <p className="radio-group__error">{error}</p>}
    </div>
  );
};
