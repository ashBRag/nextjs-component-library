"use client";
import "../../chunk-FJBZBVPE.mjs";
import { Card } from "./Card.mjs";
import { Grid } from "../grid/Grid.mjs";
function CardDemo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Grid, { columns: 1, columnsMd: 2, columnsLg: 3, gap: "md" }, /* @__PURE__ */ React.createElement(Card, { title: "Basic Card", subtitle: "A subtitle" }), /* @__PURE__ */ React.createElement(Card, { title: "With Corner Brackets", showCorners: true }), /* @__PURE__ */ React.createElement(Card, { title: "Sm Card", size: "sm" }), /* @__PURE__ */ React.createElement(Card, { title: "Large Card", size: "lg" }), /* @__PURE__ */ React.createElement(Card, { title: "Compact Card", size: "compact" }), /* @__PURE__ */ React.createElement(Card, { title: "Shadow: sm", shadow: "sm" }), /* @__PURE__ */ React.createElement(Card, { title: "Shadow: md", shadow: "md" }), /* @__PURE__ */ React.createElement(Card, { title: "Shadow: lg", shadow: "lg" }), /* @__PURE__ */ React.createElement(Card, { title: "Shadow: glow", shadow: "glow" }), /* @__PURE__ */ React.createElement(Card, { title: "With Divider + Children", showDivider: true }, /* @__PURE__ */ React.createElement("p", null, "Children below the divider.")), /* @__PURE__ */ React.createElement(Card, { title: "Glass: sm", glass: "sm" }), /* @__PURE__ */ React.createElement(Card, { title: "Glass: md", glass: "md" }), /* @__PURE__ */ React.createElement(Card, { title: "Glass: lg + Shadow: lg", glass: "lg", shadow: "lg" }), /* @__PURE__ */ React.createElement(
    Card,
    {
      title: "Accent Title",
      titleColor: "accent",
      subtitle: "Muted subtitle",
      subtitleColor: "muted"
    }
  )));
}
export {
  CardDemo as default
};
//# sourceMappingURL=CardDemo.mjs.map