"use client";

import type { ReactNode } from "react";
import { Grid, GridItem } from "./Grid";

function Box({ children }: { children: ReactNode }) {
  return (
    <div
      className="rounded-md border p-4 text-sm text-center"
      style={{ borderColor: "var(--color-border)" }}
    >
      {children}
    </div>
  );
}

export default function GridDemo() {
  return (
    <>
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Responsive columns</h3>
        <Grid columns={1} columnsSm={2} columnsMd={3} gap="md">
          {Array.from({ length: 6 }).map((_, i) => (
            <Box key={i}>Item {i + 1}</Box>
          ))}
        </Grid>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Item spans</h3>
        <Grid columns={4} gap="md">
          <GridItem span={2}>
            <Box>span 2</Box>
          </GridItem>
          <GridItem span={1}>
            <Box>span 1</Box>
          </GridItem>
          <GridItem span={1}>
            <Box>span 1</Box>
          </GridItem>
          <GridItem span={4}>
            <Box>span 4 (full width)</Box>
          </GridItem>
        </Grid>
      </div>
    </>
  );
}
