"use client"

import { useState } from 'react';
import Tabs from '@/components/ui/undertale/Tabs';

interface TabbedSectionProps {
  title?: string;
  tabs: Array<{
    id: string;
    label: string;
    content: React.ReactNode;
  }>;
  defaultActiveTab?: string;
  className?: string;
}

export default function TabbedSection({ 
  title, 
  tabs, 
  defaultActiveTab, 
  className = "" 
}: TabbedSectionProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  return (
    <section className={`py-16 ${className}`}>
      <div className="container">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        )}
        
        <Tabs 
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          className=""
        />
      </div>
    </section>
  );
}