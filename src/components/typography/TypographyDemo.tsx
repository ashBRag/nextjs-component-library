"use client";

import { Typography } from "./Typography";

export default function TypographyDemo() {
  return (
    <div className="flex gap-4 flex-wrap items-center">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="body">
        Body text used for standard paragraph content.
      </Typography>
      <Typography variant="caption">Caption text, accent colored.</Typography>
      <Typography variant="label">Label text</Typography>
      <div>
        <Typography variant="body" as="div">
          Body variant rendered as a div via the `as` prop.
        </Typography>
        <p className="text-xs opacity-70 mt-1">Uses the `as` override</p>
      </div>
    </div>
  );
}
