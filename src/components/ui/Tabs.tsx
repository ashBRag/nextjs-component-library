"use client"

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export default function Tabs({ tabs, activeTab, onTabChange, className = "" }: TabsProps) {
  return (
    <div className={className}>
      {/* Tab Headers */}
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
          {tabs.map((tab) => (
            <li key={tab.id} className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                    : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                }`}
                onClick={() => onTabChange(tab.id)}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${
              activeTab === tab.id ? 'block' : 'hidden'
            } p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}