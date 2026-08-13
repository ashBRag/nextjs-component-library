"use client";

import { DropdownMenu } from "./Menu";

export default function MenuDemo() {
  return (
    <DropdownMenu
      trigger={<span>Open Menu</span>}
      groups={[
        {
          heading: "Actions",
          items: [
            { label: "Edit", value: "edit", onClick: () => {} },
            {
              label: "Duplicate",
              value: "duplicate",
              onClick: () => {},
            },
          ],
        },
        {
          heading: "Danger",
          items: [
            {
              label: "Delete",
              value: "delete",
              active: true,
              onClick: () => {},
            },
          ],
        },
      ]}
    />
  );
}
