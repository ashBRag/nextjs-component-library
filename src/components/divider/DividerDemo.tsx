"use client";

import { Divider } from "./Divider";

export default function DividerDemo() {
  return (
    <div className="flex gap-4 flex-wrap items-center">
      <Divider spacing="sm" />
      <Divider spacing="md" />
      <Divider spacing="lg" />
      <Divider label="OR" />
    </div>
  );
}
