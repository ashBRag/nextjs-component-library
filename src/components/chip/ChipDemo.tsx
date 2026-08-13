"use client";

import { useState } from "react";
import { Chip } from "./Chip";

export default function ChipDemo() {
  const [chips, setChips] = useState(["React", "TypeScript", "Next.js"]);

  return (
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
  );
}
