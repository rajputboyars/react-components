import React, { useEffect, useRef } from 'react';
import { getIconSvg } from './Icon.tsx';

// Define interfaces for the header data structure (aligned with Header.tsx and Navbar.tsx)
interface TabContent {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

interface Tab {
  name: string;
  content: TabContent[];
}

interface NavLink {
  label: string;
  href?: string;
  type?: 'tabbedDropdown';
  tabs?: Tab[];
}

// Define props interface for the Tab component
interface TabProps {
  handleMouseEnter: (dropdownName: string) => void;
  handleMouseLeave: (dropdownName: string) => void;
  openDropdowns: { [key: string]: boolean };
  setActiveMyPlanCareTab: React.Dispatch<React.SetStateAction<string>>;
  activeMyPlanCareTab: string;
  link: NavLink;
}

const Tab: React.FC<TabProps> = ({
  handleMouseEnter,
  handleMouseLeave,
  openDropdowns,
  setActiveMyPlanCareTab,
  activeMyPlanCareTab,
  link,
}) => {
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (openDropdowns[link.label]) {
      // Focus the first tab button when the dropdown opens
      if (tabRefs.current[0]) {
        tabRefs.current[0].focus();
      }
    } else {
      // When the dropdown closes, return focus to the main dropdown button
      if (dropdownButtonRef.current) {
        dropdownButtonRef.current.focus();
      }
    }
  }, [openDropdowns[link.label], link.label]);

  // Keyboard navigation for the main dropdown button
  const handleMainButtonKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape') {
      handleMouseLeave(link.label); // Close dropdown
    } else if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent scrolling
      if (!openDropdowns[link.label]) {
        handleMouseEnter(link.label);
      }
      // Move focus to the first tab once opened (handled by useEffect)
    }
  };

  // Keyboard navigation for the inner tab buttons
  const handleTabKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    tabName: string,
    index: number
  ) => {
    const tabs = link.tabs || [];
    const currentTabElement = tabRefs.current[index];

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = (index + 1) % tabs.length;
        setActiveMyPlanCareTab(tabs[nextIndex].name);
        tabRefs.current[nextIndex]?.focus();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = (index - 1 + tabs.length) % tabs.length;
        setActiveMyPlanCareTab(tabs[prevIndex].name);
        tabRefs.current[prevIndex]?.focus();
        break;
      case 'Home':
        event.preventDefault();
        setActiveMyPlanCareTab(tabs[0].name);
        tabRefs.current[0]?.focus();
        break;
      case 'End':
        event.preventDefault();
        setActiveMyPlanCareTab(tabs[tabs.length - 1].name);
        tabRefs.current[tabs.length - 1]?.focus();
        break;
      case 'Escape':
        event.preventDefault();
        handleMouseLeave(link.label); // Close the main dropdown
        break;
      case 'Enter':
      case ' ':
        event.preventDefault(); // Prevent default button action (e.g., spacebar scrolls)
        setActiveMyPlanCareTab(tabName);
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => handleMouseEnter(link.label)}
      onMouseLeave={() => handleMouseLeave(link.label)}
    >
      <button
        className="flex items-center text-gray-700 hover:text-gray-400 py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        ref={dropdownButtonRef}
        aria-haspopup="true"
        aria-expanded={openDropdowns[link.label]}
        aria-controls={`dropdown-menu-${link.label.replace(/\s+/g, '-')}`}
        id={`dropdown-button-${link.label.replace(/\s+/g, '-')}`}
        onClick={() => {
          if (openDropdowns[link.label]) {
            handleMouseLeave(link.label);
          } else {
            handleMouseEnter(link.label);
          }
        }}
        onKeyDown={handleMainButtonKeyDown}
      >
        {link.label}
        <svg
          className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
            openDropdowns[link.label] ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {openDropdowns[link.label] && (
        <div
          id={`dropdown-menu-${link.label.replace(/\s+/g, '-')}`}
          role="menu"
          className="absolute top-full left-0 w-max bg-white rounded-b-2xl border border-gray-200 overflow-hidden z-10 flex min-h-[320px]"
        >
          {/* Left Column: Vertical Tabs */}
          <div
            role="tablist"
            aria-orientation="vertical"
            className="flex flex-col space-y-2 pr-8 border-r border-gray-200 bg-[#f8f3f2] p-4"
          >
            {link.tabs?.map((tab, tabIndex) => (
              <button
                key={tabIndex}
                ref={(el) => (tabRefs.current[tabIndex] = el)}
                role="tab"
                aria-selected={activeMyPlanCareTab === tab.name}
                aria-controls={`panel-${tab.name.replace(/\s+/g, '-')}`}
                tabIndex={activeMyPlanCareTab === tab.name ? 0 : -1}
                id={`tab-${tab.name.replace(/\s+/g, '-')}`}
                onClick={() => setActiveMyPlanCareTab(tab.name)}
                onKeyDown={(e) => handleTabKeyDown(e, tab.name, tabIndex)}
                className={`flex p-3 text-sm justify-between items-center text-left font-semibold min-w-[220px] ${
                  activeMyPlanCareTab === tab.name
                    ? 'bg-blue-900 text-white rounded-full'
                    : 'text-blue-900'
                }`}
              >
                {tab.name}
                <svg
                  className={`ml-2 h-4 w-4 transform transition-transform duration-200 inline-block ${
                    activeMyPlanCareTab === tab.name ? 'rotate-180 text-white' : 'text-blue-900'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            ))}
          </div>
          {/* Right Column: Tab Content */}
          <div className="flex flex-col space-y-4 pl-8 min-w-[420px] p-4">
            {link.tabs?.map(
              (tab, tabIndex) =>
                activeMyPlanCareTab === tab.name && (
                  <div
                    key={tabIndex}
                    id={`panel-${tab.name.replace(/\s+/g, '-')}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${tab.name.replace(/\s+/g, '-')}`}
                    className={`${
                      tab.content.length > 4 ? 'grid grid-cols-2 gap-x-8 gap-y-8' : 'flex flex-col gap-y-8'
                    }`}
                  >
                    {tab.content.map((contentItem, contentIndex) => (
                      <a
                        key={contentIndex}
                        className="flex items-start group hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        href={contentItem.href || '#'}
                        role="menuitem"
                      >
                        {contentItem.icon && getIconSvg(contentItem.icon)}
                        <div className="flex flex-col gap-2">
                          <h4 className="font-semibold text-gray-800 text-sm group-hover:text-blue-700">
                            {contentItem.title}
                          </h4>
                          <p className="text-gray-600 text-xs">{contentItem.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tab;