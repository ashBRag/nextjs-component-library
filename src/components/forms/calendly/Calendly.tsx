import React, { useEffect, useRef } from "react";
import { LuX } from "react-icons/lu";

interface CalendlyPopupProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const CalendlyPopup: React.FC<CalendlyPopupProps> = ({
  url,
  isOpen,
  onClose,
  title = "* Choose your meeting time!",
}) => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && window.Calendly && widgetRef.current) {
      widgetRef.current.innerHTML = "";

      window.Calendly.initInlineWidget({
        url,
        parentElement: widgetRef.current,
      });
    }
  }, [isOpen, url]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4"
      style={{ zIndex: 10000 }} // Extra high z-index
    >
      <div className="bg-gradient-to-b from-blue-900 to-purple-900 border-4 border-yellow-400 rounded-lg w-full max-w-4xl flex flex-col h-[90vh] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b-2 border-yellow-400 flex-shrink-0">
          <h3 className="text-yellow-300 font-mono font-bold text-lg">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-yellow-300 hover:text-red-400 transition-colors"
          >
            <LuX size={20} />
          </button>
        </div>

        {/* Calendly Widget Container */}
        <div ref={widgetRef} className="flex-1 bg-white overflow-hidden" />
      </div>
    </div>
  );
};
