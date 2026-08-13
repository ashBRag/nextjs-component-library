"use client";

import { Card } from "./Card";

export default function CardDemo() {
  return (
    <>
      <div className="space-y-2">
        <Card title="Basic Card" subtitle="A subtitle" />
        <Card title="Sm Card" size="sm" />

        <Card title="Large Card" size="lg" />

        <Card
          title="Compact Card, No Border"
          size="compact"
          showCorners={false}
        />
        <Card title="Shadow: sm" shadow="sm" />
        <Card title="Shadow: md" shadow="md" />
        <Card title="Shadow: lg" shadow="lg" />
        <Card title="Shadow: glow" shadow="glow" />
        <Card title="With Divider + Children" showDivider>
          <p>Children below the divider.</p>
        </Card>
      </div>
    </>
  );
}
