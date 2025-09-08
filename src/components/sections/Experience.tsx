"use client";
import { useEffect, useRef, useState } from "react";
import Tabs from "@/components/ui/undertale/Tabs";

interface TabbedSectionProps {
  tabs: Array<{
    id: string;
    label: string;
    content: React.ReactNode;
    className?: string;
  }>;
  defaultActiveTab?: string;
  className?: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function TabbedSection({
  tabs,
  className = "",
  activeTab,
  setActiveTab,
}: TabbedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenSeen) {
          setHasBeenSeen(true);
          // Only start the delay when element comes into view for the first time
          setTimeout(() => {
            setIsVisible(true);
          }, 500); // Delay after above section animation
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -200px 0px", // Trigger animation later (when more in view)
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasBeenSeen]);

  return (
    <div
      ref={elementRef}
      className={`${isVisible ? "" : "slide-down-hidden"} m-[2.5vw] ${className}`}
    >
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
