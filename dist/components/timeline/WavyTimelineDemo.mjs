"use client";
import "../../chunk-FJBZBVPE.mjs";
import { useState } from "react";
import WavyTimeline from "./WavyTimeline";
const wavyTimelinePoints = [
  {
    id: "1998",
    label: "1998",
    children: /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "Founder opens the doors of the company.")
  },
  {
    id: "2000",
    label: "2000",
    children: /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "Added new therapy and service offerings.")
  },
  {
    id: "2001",
    label: "2001",
    children: /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "Introduced a new flagship treatment system.")
  },
  {
    id: "2002",
    label: "2002",
    children: /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "Second clinic and offices open.")
  },
  {
    id: "2013",
    label: "2013",
    children: /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "Opened a new clinic location.")
  },
  {
    id: "2015",
    label: "2015",
    children: /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "Opened another chiropractic clinic.")
  },
  {
    id: "2016",
    label: "2016",
    children: /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, "Opened a full-service clinic.")
  }
];
function WavyTimelineDemo() {
  const [selected, setSelected] = useState("2001");
  return /* @__PURE__ */ React.createElement(
    WavyTimeline,
    {
      points: wavyTimelinePoints,
      ascending: true,
      selectedId: selected,
      onSelect: setSelected
    }
  );
}
export {
  WavyTimelineDemo as default
};
//# sourceMappingURL=WavyTimelineDemo.mjs.map