"use client";

import { useState } from "react";
import { Button } from "@/components/button/Button";
import { StatusBar } from "./StatusBar";

export default function StatusBarDemo() {
  const [progress, setProgress] = useState(45);

  return (
    <>
      <StatusBar progress={progress} status="Processing" />
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setProgress((p) => Math.max(0, p - 10))}
        >
          -10
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setProgress((p) => Math.min(100, p + 10))}
        >
          +10
        </Button>
      </div>
    </>
  );
}
