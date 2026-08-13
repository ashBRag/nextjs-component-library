"use client";

import { Badge } from "./Badge";

export default function BadgeDemo() {
  return (
    <>
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Variants</h3>
        <div className="flex gap-4 flex-wrap items-center">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Sizes</h3>
        <div className="flex gap-4 flex-wrap items-center">
          <Badge variant="primary" size="sm">Small</Badge>
          <Badge variant="primary" size="md">Medium</Badge>
          <Badge variant="primary" size="lg">Large</Badge>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Shapes</h3>
        <div className="flex gap-4 flex-wrap items-center">
          <Badge variant="primary" shape="rounded">Rounded</Badge>
          <Badge variant="primary" shape="squared">Squared</Badge>
          <Badge variant="success" shape="rounded">Rounded</Badge>
          <Badge variant="success" shape="squared">Squared</Badge>
        </div>
      </div>
    </>
  );
}
