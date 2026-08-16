"use client";
import "../../../chunk-FJBZBVPE.mjs";
import { useState } from "react";
import { Select } from "./Select";
function SelectDemo() {
  const [value, setValue] = useState("opt1");
  return /* @__PURE__ */ React.createElement(
    Select,
    {
      label: "Choose one",
      options: [
        { value: "opt1", label: "Option 1" },
        { value: "opt2", label: "Option 2" },
        { value: "opt3", label: "Option 3" }
      ],
      value,
      onChange: setValue
    }
  );
}
export {
  SelectDemo as default
};
//# sourceMappingURL=SelectDemo.mjs.map