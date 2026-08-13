"use client";

import { Button } from "./Button";

function PlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1={12} y1={5} x2={12} y2={19} />
      <line x1={5} y1={12} x2={19} y2={12} />
    </svg>
  );
}

export default function ButtonDemo() {
  return (
    <>
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Variants & sizes</h3>
        <div className="flex gap-4 flex-wrap items-center">
          <Button variant="primary" size="sm">Primary SM</Button>
          <Button variant="secondary" size="md">Secondary MD</Button>
          <Button variant="outline" size="lg">Outline LG</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Regular with icon</h3>
        <div className="flex gap-4 flex-wrap items-center">
          <Button variant="primary" size="md" iconBefore={<PlusIcon />}>
            Add Item
          </Button>
          <Button variant="secondary" size="md" iconAfter={<PlusIcon />}>
            Add Item
          </Button>
          <Button variant="outline" size="md" iconBefore={<PlusIcon />}>
            Add Item
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Icon variant</h3>
        <div className="flex gap-4 flex-wrap items-center">
          <Button variant="icon" size="sm" aria-label="Add" iconBefore={<PlusIcon />} />
          <Button variant="icon" size="md" aria-label="Add" iconBefore={<PlusIcon />} />
          <Button variant="icon" size="lg" aria-label="Add" iconBefore={<PlusIcon />} />
          <Button variant="icon" size="md" aria-label="Add" disabled iconBefore={<PlusIcon />} />
        </div>
      </div>
    </>
  );
}
