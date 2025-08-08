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
  const keyRef = useRef(0);

  useEffect(() => {
    if (isOpen && window.Calendly && widgetRef.current) {
      // Increment key to force re-render
      keyRef.current += 1;

      // Clear previous widget content
      widgetRef.current.innerHTML = "";

      // Initialize inline widget instead of popup
      window.Calendly.initInlineWidget({
        url,
        parentElement: widgetRef.current,
      });
    }
  }, [isOpen, url]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (window.Calendly && window.Calendly.closePopupWidget) {
        window.Calendly.closePopupWidget();
      }
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-blue-900 to-purple-900 border-4 border-yellow-400 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b-2 border-yellow-400">
          <h3 className="text-yellow-300 font-mono font-bold text-xl">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-yellow-300 hover:text-red-400 transition-colors"
          >
            <LuX size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
