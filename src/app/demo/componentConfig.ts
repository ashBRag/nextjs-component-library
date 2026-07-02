import React from "react";
import { Badge } from "@/components/badge/Badge";
import { Button } from "@/components/button/Button";
import { Card } from "@/components/card/Card";
import { Chip } from "@/components/chip/Chip";
import { Divider } from "@/components/divider/Divider";
import { Table } from "@/components/table/Table";
import { Typography } from "@/components/typography/Typography";

export interface ComponentVariant {
  name: string;
  props?: Record<string, unknown>;
  children?: React.ReactNode;
  className?: string;
  note?: string;
}

export interface VariantSection {
  label?: string;
  layout?: "flex" | "grid" | "stack";
  variants: ComponentVariant[];
}

export interface ComponentGroup {
  id: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- generic component slot, intentionally untyped per group's own props
  component: React.ComponentType<any>;
  sourceFile: string;
  sections: VariantSection[];
}

function PlusIcon() {
  return React.createElement(
    "svg",
    {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    React.createElement("line", { x1: 12, y1: 5, x2: 12, y2: 19 }),
    React.createElement("line", { x1: 5, y1: 12, x2: 19, y2: 12 }),
  );
}

export const componentGroups: ComponentGroup[] = [
  {
    id: "typography",
    title: "Typography",
    component: Typography,
    sourceFile: "src/components/typography/Typography.tsx",
    sections: [
      {
        layout: "flex",
        variants: [
          { name: "H1", props: { variant: "h1" }, children: "Heading 1" },
          { name: "H2", props: { variant: "h2" }, children: "Heading 2" },
          { name: "H3", props: { variant: "h3" }, children: "Heading 3" },
          { name: "H4", props: { variant: "h4" }, children: "Heading 4" },
          {
            name: "Body",
            props: { variant: "body" },
            children: "Body text used for standard paragraph content.",
          },
          {
            name: "Caption",
            props: { variant: "caption" },
            children: "Caption text, accent colored.",
          },
          {
            name: "Label",
            props: { variant: "label" },
            children: "Label text",
          },
          {
            name: "Body as div",
            props: { variant: "body", as: "div" },
            children: "Body variant rendered as a div via the `as` prop.",
            note: "Uses the `as` override",
          },
        ],
      },
    ],
  },
  {
    id: "badge",
    title: "Badge",
    component: Badge,
    sourceFile: "src/components/badge/Badge.tsx",
    sections: [
      {
        label: "Variants",
        layout: "flex",
        variants: [
          { name: "Primary", props: { variant: "primary" }, children: "Primary" },
          { name: "Secondary", props: { variant: "secondary" }, children: "Secondary" },
          { name: "Success", props: { variant: "success" }, children: "Success" },
          { name: "Warning", props: { variant: "warning" }, children: "Warning" },
        ],
      },
      {
        label: "Sizes",
        layout: "flex",
        variants: [
          { name: "Small", props: { variant: "primary", size: "sm" }, children: "Small" },
          { name: "Medium", props: { variant: "primary", size: "md" }, children: "Medium" },
          { name: "Large", props: { variant: "primary", size: "lg" }, children: "Large" },
        ],
      },
      {
        label: "Shapes",
        layout: "flex",
        variants: [
          { name: "Rounded", props: { variant: "primary", shape: "rounded" }, children: "Rounded" },
          { name: "Squared", props: { variant: "primary", shape: "squared" }, children: "Squared" },
          { name: "Success Rounded", props: { variant: "success", shape: "rounded" }, children: "Rounded" },
          { name: "Success Squared", props: { variant: "success", shape: "squared" }, children: "Squared" },
        ],
      },
    ],
  },
  {
    id: "chip",
    title: "Chip",
    component: Chip,
    sourceFile: "src/components/chip/Chip.tsx",
    sections: [
      {
        label: "Variants",
        layout: "flex",
        variants: [
          { name: "Primary", props: { variant: "primary" }, children: "Primary" },
          { name: "Secondary", props: { variant: "secondary" }, children: "Secondary" },
          { name: "Outline", props: { variant: "outline" }, children: "Outline" },
          { name: "Disabled", props: { variant: "primary", disabled: true }, children: "Disabled" },
        ],
      },
      {
        label: "Sizes",
        layout: "flex",
        variants: [
          { name: "Small", props: { variant: "primary", size: "sm" }, children: "Small" },
          { name: "Medium", props: { variant: "primary", size: "md" }, children: "Medium" },
          { name: "Large", props: { variant: "primary", size: "lg" }, children: "Large" },
        ],
      },
    ],
  },
  {
    id: "button",
    title: "Button",
    component: Button,
    sourceFile: "src/components/button/Button.tsx",
    sections: [
      {
        label: "Variants & sizes",
        layout: "flex",
        variants: [
          { name: "Primary SM", props: { variant: "primary", size: "sm" }, children: "Primary SM" },
          { name: "Secondary MD", props: { variant: "secondary", size: "md" }, children: "Secondary MD" },
          { name: "Outline LG", props: { variant: "outline", size: "lg" }, children: "Outline LG" },
          { name: "Disabled", props: { disabled: true }, children: "Disabled" },
        ],
      },
      {
        label: "Regular with icon",
        layout: "flex",
        variants: [
          {
            name: "Primary + icon before",
            props: { variant: "primary", size: "md", iconBefore: React.createElement(PlusIcon) },
            children: "Add Item",
          },
          {
            name: "Secondary + icon after",
            props: { variant: "secondary", size: "md", iconAfter: React.createElement(PlusIcon) },
            children: "Add Item",
          },
          {
            name: "Outline + icon before",
            props: { variant: "outline", size: "md", iconBefore: React.createElement(PlusIcon) },
            children: "Add Item",
          },
        ],
      },
      {
        label: "Icon variant",
        layout: "flex",
        variants: [
          {
            name: "Icon SM",
            props: { variant: "icon", size: "sm", "aria-label": "Add", iconBefore: React.createElement(PlusIcon) },
          },
          {
            name: "Icon MD",
            props: { variant: "icon", size: "md", "aria-label": "Add", iconBefore: React.createElement(PlusIcon) },
          },
          {
            name: "Icon LG",
            props: { variant: "icon", size: "lg", "aria-label": "Add", iconBefore: React.createElement(PlusIcon) },
          },
          {
            name: "Icon Disabled",
            props: { variant: "icon", size: "md", "aria-label": "Add", disabled: true, iconBefore: React.createElement(PlusIcon) },
          },
        ],
      },
    ],
  },
  {
    id: "card",
    title: "Card",
    component: Card,
    sourceFile: "src/components/card/Card.tsx",
    sections: [
      {
        label: "Basic",
        layout: "grid",
        variants: [
          {
            name: "Basic Card",
            props: {
              title: "Basic Card",
              subtitle: "A subtitle",
              description: "This is a card with basic props.",
              size: "md",
            },
          },
          {
            name: "Compact Card",
            props: {
              title: "Compact Card",
              description: "Compact size, no corners.",
              size: "compact",
              showCorners: false,
            },
          },
        ],
      },
      {
        label: "Shadow variations",
        layout: "grid",
        variants: [
          {
            name: "Shadow: sm",
            props: {
              title: "Shadow: sm",
              description: "Small shadow, elevates on hover.",
              size: "md",
              shadow: "sm",
            },
          },
          {
            name: "Shadow: md",
            props: {
              title: "Shadow: md",
              description: "Medium shadow, elevates on hover.",
              size: "md",
              shadow: "md",
            },
          },
          {
            name: "Shadow: lg",
            props: {
              title: "Shadow: lg",
              description: "Large shadow, elevates on hover.",
              size: "md",
              shadow: "lg",
            },
          },
          {
            name: "Shadow: glow",
            props: {
              title: "Shadow: glow",
              description: "Accent-colored glow, intensifies on hover.",
              size: "md",
              shadow: "glow",
            },
          },
        ],
      },
      {
        label: "Divider",
        layout: "grid",
        variants: [
          {
            name: "With Divider",
            props: {
              title: "With Divider",
              description: "Separates header from content.",
              content: React.createElement("p", null, "Content below the divider."),
              showDivider: true,
            },
          },
          {
            name: "With Divider + Children",
            props: {
              title: "With Divider + Children",
              description: "Separates header from children.",
              showDivider: true,
            },
            children: React.createElement("p", null, "Children below the divider."),
          },
        ],
      },
    ],
  },
  {
    id: "table",
    title: "Table",
    component: Table,
    sourceFile: "src/components/table/Table.tsx",
    sections: [
      {
        label: "Variants",
        layout: "stack",
        variants: [
          {
            name: "Default",
            props: {
              columns: [
                { key: "name", label: "Name" },
                { key: "role", label: "Role" },
                { key: "status", label: "Status" },
              ],
              data: [
                { name: "Ada Lovelace", role: "Engineer", status: "Active" },
                { name: "Alan Turing", role: "Researcher", status: "Active" },
                { name: "Grace Hopper", role: "Admiral", status: "Retired" },
              ],
            },
          },
          {
            name: "Striped",
            props: {
              striped: true,
              columns: [
                { key: "name", label: "Name" },
                { key: "role", label: "Role" },
                { key: "status", label: "Status" },
              ],
              data: [
                { name: "Ada Lovelace", role: "Engineer", status: "Active" },
                { name: "Alan Turing", role: "Researcher", status: "Active" },
                { name: "Grace Hopper", role: "Admiral", status: "Retired" },
              ],
            },
          },
          {
            name: "Bordered",
            props: {
              bordered: true,
              columns: [
                { key: "name", label: "Name" },
                { key: "role", label: "Role" },
                { key: "status", label: "Status" },
              ],
              data: [
                { name: "Ada Lovelace", role: "Engineer", status: "Active" },
                { name: "Alan Turing", role: "Researcher", status: "Active" },
                { name: "Grace Hopper", role: "Admiral", status: "Retired" },
              ],
            },
          },
          {
            name: "Compact",
            props: {
              compact: true,
              columns: [
                { key: "name", label: "Name" },
                { key: "role", label: "Role" },
                { key: "status", label: "Status" },
              ],
              data: [
                { name: "Ada Lovelace", role: "Engineer", status: "Active" },
                { name: "Alan Turing", role: "Researcher", status: "Active" },
                { name: "Grace Hopper", role: "Admiral", status: "Retired" },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: "divider",
    title: "Divider",
    component: Divider,
    sourceFile: "src/components/divider/Divider.tsx",
    sections: [
      {
        label: "Spacing",
        layout: "flex",
        variants: [
          { name: "Small spacing", props: { spacing: "sm" } },
          { name: "Medium spacing", props: { spacing: "md" } },
          { name: "Large spacing", props: { spacing: "lg" } },
          { name: "Labeled", props: { label: "OR" } },
        ],
      },
    ],
  },
];
