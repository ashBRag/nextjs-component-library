"use client";
import "../../../chunk-FJBZBVPE.mjs";
import { useState } from "react";
import { RadioGroup } from "./RadioGroup";
function RadioGroupDemo() {
  const [value, setValue] = useState("a");
  return /* @__PURE__ */ React.createElement(
    RadioGroup,
    {
      label: "Pick an option",
      options: [
        { value: "a", label: "Option A", description: "First option" },
        { value: "b", label: "Option B", description: "Second option" },
        { value: "c", label: "Option C" }
      ],
      value,
      onChange: setValue
    }
  );
}
export {
  RadioGroupDemo as default
};
//# sourceMappingURL=RadioGroupDemo.mjs.map