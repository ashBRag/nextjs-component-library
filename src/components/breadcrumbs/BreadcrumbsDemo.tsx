"use client";

import { Breadcrumbs } from "./Breadcrumbs";

export default function BreadcrumbsDemo() {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium">Navigation paths</h3>
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium mb-2 opacity-80">
            Default separator
          </p>
          <Breadcrumbs
            items={[
              { label: "Home", href: "#home" },
              { label: "Components", href: "#components" },
              { label: "Breadcrumbs" },
            ]}
          />
        </div>
        <div>
          <p className="text-sm font-medium mb-2 opacity-80">
            Custom separator
          </p>
          <Breadcrumbs
            separator=">"
            items={[
              { label: "Home", href: "#home" },
              { label: "Library", href: "#library" },
              { label: "Current page" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
