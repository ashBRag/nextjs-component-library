"use client";

import { Card } from "./Card";
import { Grid } from "../grid/Grid";

export default function CardDemo() {
  return (
    <>
      <Grid columns={1} columnsMd={2} columnsLg={3} gap="md">
        <Card title="Basic Card" subtitle="A subtitle" />
        <Card title="With Corner Brackets" showCorners />
        <Card title="Sm Card" size="sm" />

        <Card title="Large Card" size="lg" />

        <Card title="Compact Card" size="compact" />
        <Card title="Shadow: sm" shadow="sm" />
        <Card title="Shadow: md" shadow="md" />
        <Card title="Shadow: lg" shadow="lg" />
        <Card title="Shadow: glow" shadow="glow" />
        <Card title="With Divider + Children" showDivider>
          <p>Children below the divider.</p>
        </Card>
        <Card title="Glass: sm" glass="sm" />
        <Card title="Glass: md" glass="md" />
        <Card title="Glass: lg + Shadow: lg" glass="lg" shadow="lg" />
        <Card
          title="Accent Title"
          titleColor="accent"
          subtitle="Muted subtitle"
          subtitleColor="muted"
        />
      </Grid>
    </>
  );
}
