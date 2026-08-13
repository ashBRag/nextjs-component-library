"use client";

import NavList from "./NavList";

export default function NavListDemo() {
  return (
    <NavList
      tabs={[
        {
          id: "nav1",
          name: "Dashboard",
          content: <p>Dashboard content</p>,
        },
        {
          id: "nav2",
          name: "Settings",
          content: <p>Settings content</p>,
        },
        {
          id: "nav3",
          name: "Profile",
          content: <p>Profile content</p>,
          disabled: true,
        },
      ]}
      horizontal
    />
  );
}
