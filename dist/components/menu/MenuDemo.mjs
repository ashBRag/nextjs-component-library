"use client";
import "../../chunk-FJBZBVPE.mjs";
import { DropdownMenu } from "./Menu";
function MenuDemo() {
  return /* @__PURE__ */ React.createElement(
    DropdownMenu,
    {
      trigger: /* @__PURE__ */ React.createElement("span", null, "Open Menu"),
      groups: [
        {
          heading: "Actions",
          items: [
            { label: "Edit", value: "edit", onClick: () => {
            } },
            {
              label: "Duplicate",
              value: "duplicate",
              onClick: () => {
              }
            }
          ]
        },
        {
          heading: "Danger",
          items: [
            {
              label: "Delete",
              value: "delete",
              active: true,
              onClick: () => {
              }
            }
          ]
        }
      ]
    }
  );
}
export {
  MenuDemo as default
};
//# sourceMappingURL=MenuDemo.mjs.map