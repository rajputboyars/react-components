/* eslint-disable @typescript-eslint/no-explicit-any */
import _map from "lodash/map";
import { generateId } from "./helper";
// import { generateId } from "";

interface VerticalTabsProps {
  tabs: any[];
  activeTab: string;
  setActiveTab: (label: string) => void;
  onKeyDown: (
    e: React.KeyboardEvent<HTMLButtonElement>,
    tabLabel: string,
    tabIndex: number,
  ) => void;
  tabRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
}

export default function HeaderDropDown({
  tabs,
  activeTab,
  setActiveTab,
  onKeyDown,
  tabRefs,
}: VerticalTabsProps) {
  return (
    <div
      role="tablist"
      aria-orientation="vertical"
      className="flex flex-col gap-4 pr-8 border-r border-gray-200 bg-[#F8F3F2] p-4"
    >
      {_map(tabs, (tab, index) => {
        const id = generateId(tab.tabLabel);
        return (
          <button
            key={index}
            type="button"
            role="tab"
            ref={(el) => { tabRefs.current[index] = el; }}
            aria-selected={activeTab === tab.tabLabel}
            aria-controls={`panel-${id}`}
            aria-label={`Select ${tab.tabLabel}`}
            tabIndex={activeTab === tab.tabLabel ? 0 : -1}
            id={`tab-${id}`}
            onClick={() => setActiveTab(tab.tabLabel)}
            onKeyDown={(e) => onKeyDown(e, tab.tabLabel, index)}
            className={`flex p-3 text-[16px] justify-between items-center font-semibold min-w-[220px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
              activeTab === tab.tabLabel
                ? "bg-[#1B3760] text-white rounded-full"
                : "text-[#1A1A1A]"
            }`}
          >
            {tab.tabLabel}
            <svg
              className={`ml-2 h-4 w-4 transform duration-200 ${
                activeTab === tab.tabLabel ? "rotate-180 text-white" : "text-[#1A1A1A]"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        );
      })}
    </div>
  );
}