"use client";

import { useState } from "react";
import { RadioGroup } from "./RadioGroup";

export default function RadioGroupDemo() {
  const [value, setValue] = useState("a");

  return (
    <RadioGroup
      label="Pick an option"
      options={[
        { value: "a", label: "Option A", description: "First option" },
        { value: "b", label: "Option B", description: "Second option" },
        { value: "c", label: "Option C" },
      ]}
      value={value}
      onChange={setValue}
    />
  );
}
