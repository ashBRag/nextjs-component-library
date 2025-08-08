"use client";
import Tabs from "@/components/ui/undertale/Tabs";

interface TabbedSectionProps {
  title?: string;
  tabs: Array<{
    id: string;
    label: string;
    content: React.ReactNode;
  }>;
  defaultActiveTab?: string;
  className?: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function TabbedSection({
  title,
  tabs,
  className = "",
  activeTab,
  setActiveTab,
}: TabbedSectionProps) {
  return (
    <section className={className}>
      {title && (
        <h2 className="text-3xl font-bold text-center m-12">{title}</h2>
      )}

      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        className="m-10"
      />
    </section>
  );
}
