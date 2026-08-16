"use client";
import "../../chunk-FJBZBVPE.mjs";
import Timeline from "./Timeline";
const timelineItems = [
  {
    id: "1",
    title: "Project Started",
    date: "Jan 2024",
    description: "Initial project setup and planning."
  },
  {
    id: "2",
    title: "First Release",
    date: "Mar 2024",
    badge: { text: "v1.0", variant: "success" },
    description: "Launched the first version."
  },
  {
    id: "3",
    title: "Major Update",
    date: "Jun 2024",
    badge: { text: "v2.0", variant: "primary" },
    description: "Added new features and improvements."
  }
];
function TimelineDemo() {
  return /* @__PURE__ */ React.createElement(Timeline, { items: timelineItems, animated: true });
}
export {
  TimelineDemo as default
};
//# sourceMappingURL=TimelineDemo.mjs.map