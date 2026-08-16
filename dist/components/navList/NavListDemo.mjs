"use client";
import "../../chunk-FJBZBVPE.mjs";
import NavList from "./NavList";
function NavListDemo() {
  return /* @__PURE__ */ React.createElement(
    NavList,
    {
      tabs: [
        {
          id: "nav1",
          name: "Dashboard",
          content: /* @__PURE__ */ React.createElement("p", null, "Dashboard content")
        },
        {
          id: "nav2",
          name: "Settings",
          content: /* @__PURE__ */ React.createElement("p", null, "Settings content")
        },
        {
          id: "nav3",
          name: "Profile",
          content: /* @__PURE__ */ React.createElement("p", null, "Profile content"),
          disabled: true
        }
      ],
      horizontal: true
    }
  );
}
export {
  NavListDemo as default
};
//# sourceMappingURL=NavListDemo.mjs.map