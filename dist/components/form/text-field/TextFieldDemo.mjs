"use client";
import "../../../chunk-FJBZBVPE.mjs";
import { useState } from "react";
import { TextField } from "./TextField";
function TextFieldDemo() {
  const [textValue, setTextValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: "Name",
      value: textValue,
      onChange: setTextValue,
      placeholder: "Enter your name"
    }
  ), /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: "Message",
      value: textareaValue,
      onChange: setTextareaValue,
      placeholder: "Write a message...",
      rows: 3
    }
  ), /* @__PURE__ */ React.createElement(
    TextField,
    {
      label: "With Error",
      value: "",
      onChange: () => {
      },
      error: "This field is required"
    }
  ));
}
export {
  TextFieldDemo as default
};
//# sourceMappingURL=TextFieldDemo.mjs.map