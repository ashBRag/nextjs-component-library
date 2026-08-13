"use client";

import { useState } from "react";
import { TextField } from "./TextField";

export default function TextFieldDemo() {
  const [textValue, setTextValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <>
      <TextField
        label="Name"
        value={textValue}
        onChange={setTextValue}
        placeholder="Enter your name"
      />
      <TextField
        label="Message"
        value={textareaValue}
        onChange={setTextareaValue}
        placeholder="Write a message..."
        rows={3}
      />
      <TextField
        label="With Error"
        value=""
        onChange={() => {}}
        error="This field is required"
      />
    </>
  );
}
