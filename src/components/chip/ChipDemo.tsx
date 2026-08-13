"use client";

import { useState } from "react";
import { Chip } from "./Chip";

export default function ChipDemo() {
  const [chips, setChips] = useState(["React", "TypeScript", "Next.js"]);

  return (
    <>
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Variants</h3>
        <div className="flex gap-2 flex-wrap items-center">
          <Chip variant="primary">Primary</Chip>
          <Chip variant="secondary">Secondary</Chip>
          <Chip variant="outline">Outline</Chip>
          <Chip variant="primary" disabled>
            Disabled
          </Chip>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Sizes</h3>
        <div className="flex gap-2 flex-wrap items-center">
          <Chip variant="primary" size="sm">Small</Chip>
          <Chip variant="primary" size="md">Medium</Chip>
          <Chip variant="primary" size="lg">Large</Chip>
        </div>
      </div>

      <section className="space-y-2">
        <h3 className="text-lg font-medium">Removable</h3>
        <div className="flex gap-2 flex-wrap items-center">
          {chips.map((chip) => (
            <Chip
              key={chip}
              variant="outline"
              onRemove={() => setChips((prev) => prev.filter((c) => c !== chip))}
            >
              {chip}
            </Chip>
          ))}
        </div>
      </section>
    </>
  );
}
