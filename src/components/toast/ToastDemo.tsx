"use client";

import { useState } from "react";
import { Button } from "@/components/button/Button";
import { ToastContainer } from "./Toast";
import type { ToastEntry, ToastType, ToastVariant } from "./Toast";

export default function ToastDemo() {
  const [toasts, setToasts] = useState<ToastEntry[]>([]);

  const addToast = (type: ToastType, variant: ToastVariant) => {
    setToasts((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        type,
        variant,
        message: `This is a ${variant} ${type} toast`,
      },
    ]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="space-y-2">
        <p className="text-sm font-medium opacity-80">Outline (default)</p>
        <div className="flex gap-2 flex-wrap">
          <Button variant="primary" size="sm" onClick={() => addToast("success", "outline")}>
            Success
          </Button>
          <Button variant="secondary" size="sm" onClick={() => addToast("error", "outline")}>
            Error
          </Button>
          <Button variant="outline" size="sm" onClick={() => addToast("warning", "outline")}>
            Warning
          </Button>
          <Button variant="outline" size="sm" onClick={() => addToast("info", "outline")}>
            Info
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium opacity-80">Filled</p>
        <div className="flex gap-2 flex-wrap">
          <Button variant="primary" size="sm" onClick={() => addToast("success", "filled")}>
            Success
          </Button>
          <Button variant="secondary" size="sm" onClick={() => addToast("error", "filled")}>
            Error
          </Button>
          <Button variant="outline" size="sm" onClick={() => addToast("warning", "filled")}>
            Warning
          </Button>
          <Button variant="outline" size="sm" onClick={() => addToast("info", "filled")}>
            Info
          </Button>
        </div>
      </div>

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </>
  );
}
