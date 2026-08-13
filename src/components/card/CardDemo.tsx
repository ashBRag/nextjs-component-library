"use client";

import { Card } from "./Card";

export default function CardDemo() {
  return (
    <>
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Basic</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Basic Card"
            subtitle="A subtitle"
            description="This is a card with basic props."
            size="md"
          />
          <Card
            title="Compact Card"
            description="Compact size, no corners."
            size="compact"
            showCorners={false}
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Shadow variations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Shadow: sm"
            description="Small shadow, elevates on hover."
            size="md"
            shadow="sm"
          />
          <Card
            title="Shadow: md"
            description="Medium shadow, elevates on hover."
            size="md"
            shadow="md"
          />
          <Card
            title="Shadow: lg"
            description="Large shadow, elevates on hover."
            size="md"
            shadow="lg"
          />
          <Card
            title="Shadow: glow"
            description="Accent-colored glow, intensifies on hover."
            size="md"
            shadow="glow"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Divider</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="With Divider"
            description="Separates header from content."
            content={<p>Content below the divider.</p>}
            showDivider
          />
          <Card
            title="With Divider + Children"
            description="Separates header from children."
            showDivider
          >
            <p>Children below the divider.</p>
          </Card>
        </div>
      </div>
    </>
  );
}
