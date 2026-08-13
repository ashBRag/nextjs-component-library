"use client";

import { useState } from "react";
import { Button } from "@/components/button/Button";
import { Drawer } from "./Drawer";

export default function DrawerDemo() {
  const [side, setSide] = useState<"left" | "right" | "top" | "bottom" | null>(
    null
  );

  return (
    <>
      <div className="flex gap-2 flex-wrap">
        <Button variant="outline" onClick={() => setSide("left")}>
          Open Left
        </Button>
        <Button variant="outline" onClick={() => setSide("right")}>
          Open Right
        </Button>
        <Button variant="outline" onClick={() => setSide("top")}>
          Open Top
        </Button>
        <Button variant="outline" onClick={() => setSide("bottom")}>
          Open Bottom
        </Button>
      </div>
      <Drawer
        open={side !== null}
        onClose={() => setSide(null)}
        side={side ?? "right"}
        title="Drawer title"
        footer={
          <Button variant="primary" onClick={() => setSide(null)}>
            Done
          </Button>
        }
      >
        <p>Drawer content slides in from the {side} side.</p>
      </Drawer>
    </>
  );
}
