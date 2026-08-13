"use client";

import { Card } from "./Card";

export default function CardDemo() {
  return (
    <>
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Basic</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Basic Card" subtitle="A subtitle" size="md" />
          <Card title="Compact Card" size="compact" showCorners={false} />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Shadow variations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Shadow: sm" size="md" shadow="sm" />
          <Card title="Shadow: md" size="md" shadow="md" />
          <Card title="Shadow: lg" size="md" shadow="lg" />
          <Card title="Shadow: glow" size="md" shadow="glow" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Divider</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="With Divider + Children" showDivider>
            <p>Children below the divider.</p>
          </Card>
        </div>
      </div>
    </>
  );
}
