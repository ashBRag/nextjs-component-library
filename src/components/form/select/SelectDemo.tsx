"use client";

import { useState } from "react";
import { Select } from "./Select";

export default function SelectDemo() {
  const [value, setValue] = useState("opt1");

  return (
    <Select
      label="Choose one"
      options={[
        { value: "opt1", label: "Option 1" },
        { value: "opt2", label: "Option 2" },
        { value: "opt3", label: "Option 3" },
      ]}
      value={value}
      onChange={setValue}
    />
  );
}
