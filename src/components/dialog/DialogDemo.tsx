"use client";

import { useState } from "react";
import { Button } from "@/components/button/Button";
import { Dialog } from "./Dialog";

export default function DialogDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm action"
        footer={
          <>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Confirm
            </Button>
          </>
        }
      >
        <p>Are you sure you want to proceed with this action?</p>
      </Dialog>
    </>
  );
}
