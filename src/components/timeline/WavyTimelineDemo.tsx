"use client";

import { useState } from "react";
import WavyTimeline from "./WavyTimeline";
import type { WavyTimelinePoint } from "./WavyTimeline";

const wavyTimelinePoints: WavyTimelinePoint[] = [
  {
    id: "1998",
    label: "1998",
    children: <p className="text-sm">Founder opens the doors of the company.</p>,
  },
  {
    id: "2000",
    label: "2000",
    children: <p className="text-sm">Added new therapy and service offerings.</p>,
  },
  {
    id: "2001",
    label: "2001",
    children: (
      <p className="text-sm">Introduced a new flagship treatment system.</p>
    ),
  },
  {
    id: "2002",
    label: "2002",
    children: <p className="text-sm">Second clinic and offices open.</p>,
  },
  {
    id: "2013",
    label: "2013",
    children: <p className="text-sm">Opened a new clinic location.</p>,
  },
  {
    id: "2015",
    label: "2015",
    children: <p className="text-sm">Opened another chiropractic clinic.</p>,
  },
  {
    id: "2016",
    label: "2016",
    children: <p className="text-sm">Opened a full-service clinic.</p>,
  },
];

export default function WavyTimelineDemo() {
  const [selected, setSelected] = useState("2001");

  return (
    <WavyTimeline
      points={wavyTimelinePoints}
      ascending
      selectedId={selected}
      onSelect={setSelected}
    />
  );
}
