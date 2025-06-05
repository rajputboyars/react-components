import React, { useRef, useState } from 'react';

// Define interfaces for the header data structure (aligned with Header.tsx)
interface DropdownItem {
  label: string;
  href: string;
}

interface TopBarItem {
  label: string;
  type: 'text' | 'dropdown';
  isPill?: boolean;
  items?: DropdownItem[];
}

interface TopBar {
  leftItems: TopBarItem[];
  rightItems: TopBarItem[];
}

interface TabContent {
  icon: string;
  title: string;
  description: string;
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

interface UtilityIcon {
  icon?: string;
  label?: string;
  type: 'button';
  isPill?: boolean;
}

interface MainNav {
  logo: {
    src: string;
    alt: string;
  };
  links: NavLink[];
  utilityIcons: UtilityIcon[];
}

interface HeaderData {
  topBar: TopBar;
  mainNav: MainNav;
}

// Define props interface for the SiteHeader component
interface SiteHeaderProps {
  handleMouseEnter: (dropdownName: string) => void;
  handleMouseLeave: (dropdownName: string) => void;
  openDropdowns: { [key: string]: boolean };
  headerData: HeaderData;
}

const SiteHeader: React.FC<SiteHeaderProps> = ({
  handleMouseEnter,
  handleMouseLeave,
  openDropdowns,
  headerData,
}) => {
  const dropdownRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const [selectedPlan, setSelectedPlan] = useState('Active Plan 93536');

  // Array of plan data
  const plans = [
    {
      id: 'Active Plan 93536',
      status: 'Active Plan',
      number: '93536',
      description: 'Medica Employee Benefit Plan',
    },
    {
      id: 'Inactive Plan 93536-1',
      status: 'Inactive Plan',
      number: '93536',
      description: 'Medica Benefit Plan',
    },
    {
      id: 'Inactive Plan 93536-2',
      status: 'Inactive Plan',
      number: '93536',
      description: 'Medica Employee Benefit Plan Pro Premier',
    },
  ];

  const handleDropdownKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    itemLabel: string,
    subItems?: DropdownItem[]
  ) => {
    const isOpen = openDropdowns[itemLabel];
    const currentButton = dropdownRefs.current[itemLabel];

    

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          handleMouseEnter(itemLabel);
          setTimeout(() => {
            const firstMenuItem = currentButton?.nextElementSibling?.querySelector<HTMLAnchorElement>('[role="menuitem"]');
            if (firstMenuItem) {
              firstMenuItem.focus();
            }
          }, 0);
        } else {
          const firstMenuItem = currentButton?.nextElementSibling?.querySelector<HTMLAnchorElement>('[role="menuitem"]');
          if (firstMenuItem) {
            firstMenuItem.focus();
          }
        }
        break;
      case 'Escape':
        if (isOpen) {
          handleMouseLeave(itemLabel);
          currentButton?.focus();
        }
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (isOpen) {
          handleMouseLeave(itemLabel);
        } else {
          handleMouseEnter(itemLabel);
          setTimeout(() => {
            const firstMenuItem = currentButton?.nextElementSibling?.querySelector<HTMLAnchorElement>('[role="menuitem"]');
            if (firstMenuItem) {
              firstMenuItem.focus();
            }
          }, 0);
        }
        break;
      default:
        break;
    }
  };

  const handleMenuItemKeyDown = (
    event: React.KeyboardEvent<HTMLAnchorElement>,
    itemLabel: string,
    subIndex: number,
    subItems?: DropdownItem[]
  ) => {
    const menuItems = Array.from(event.currentTarget.parentNode?.children || []) as HTMLElement[];
    const currentMenuItem = event.currentTarget;

    
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = (subIndex + 1) % menuItems.length;
        menuItems[nextIndex].focus();
        break;
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = (subIndex - 1 + menuItems.length) % menuItems.length;
        menuItems[prevIndex].focus();
        break;
      case 'Home':
        event.preventDefault();
        menuItems[0].focus();
        break;
      case 'End':
        event.preventDefault();
        menuItems[menuItems.length - 1].focus();
        break;
      case 'Escape':
        event.preventDefault();
        handleMouseLeave(itemLabel);
        dropdownRefs.current[itemLabel]?.focus();
        break;
      default:
        break;
    }
  };

// Handler for plan selection
  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  return (
    <header className="bg-white shadow-sm px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center max-lg:hidden">
        {/* Left section: Document Hub, My Account, Language */}
        <nav aria-label="Utility Navigation" role="menubar" className="flex items-center space-x-4">
          {headerData.topBar.leftItems.map((item, index) => (
            <div key={index} role="none">
              {item.type === 'text' && (
                <span
                  className="text-gray-700 text-sm hidden md:block py-4"
                  tabIndex={0}
                  aria-hidden="true"
                >
                  {item.label}
                </span>
              )}
              {item.type === 'dropdown' && (
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={() => handleMouseLeave(item.label)}
                >
                  <button
                    ref={(el) => (dropdownRefs.current[item.label] = el)}
                    id={`dropdown-button-${item.label.replace(/\s+/g, '-')}`}
                    className="flex items-center text-gray-700 text-sm py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    aria-haspopup="true"
                    aria-expanded={openDropdowns[item.label]}
                    aria-controls={`dropdown-menu-${item.label.replace(/\s+/g, '-')}`}
                    onClick={() => {
                      if (openDropdowns[item.label]) {
                        handleMouseLeave(item.label);
                      } else {
                        handleMouseEnter(item.label);
                      }
                    }}
                    onKeyDown={(e) => handleDropdownKeyDown(e, item.label, item.items)}
                    role="menuitem"
                  >
                    {item.label}
                    <svg
                      className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${openDropdowns[item.label] ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {openDropdowns[item.label] && (
                    <div
                      id={`dropdown-menu-${item.label.replace(/\s+/g, '-')}`}
                      role="menu"
                      aria-labelledby={`dropdown-button-${item.label.replace(/\s+/g, '-')}`}
                      className="absolute border top-full left-0 w-48 bg-white rounded-b-md shadow-lg z-10"
                      tabIndex={-1}
                    >
                      {item.items?.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          role="menuitem"
                          tabIndex={0}
                          onKeyDown={(e) => handleMenuItemKeyDown(e, item.label, subIndex, item.items)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right section: Active Plan Dropdown */}
        <nav aria-label="Account Navigation" role="menubar" className="flex items-center space-x-2 rounded-full border border-black">
          {headerData.topBar.rightItems.map((item, index) => (
            <div key={index} role="none">
              {item.type === 'text' && (
                <span className="text-gray-700 text-sm hidden md:block" aria-hidden="true">
                  {item.label}
                </span>
              )}
              {item.type === 'dropdown' && (
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={() => handleMouseLeave(item.label)}
                >
                  <button
                    ref={(el) => (dropdownRefs.current[item.label] = el)}
                    id={`dropdown-button-${item.label.replace(/\s+/g, '-')}`}
                    className={`flex items-center text-blue-700 px-3 py-2 rounded-full text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${item.isPill ? 'bg-blue-100' : ''
                      }`}
                    aria-haspopup="true"
                    aria-expanded={openDropdowns[item.label]}
                    aria-controls={`dropdown-menu-${item.label.replace(/\s+/g, '-')}`}
                    onClick={() => {
                      if (openDropdowns[item.label]) {
                        handleMouseLeave(item.label);
                      } else {
                        handleMouseEnter(item.label);
                      }
                    }}
                    onKeyDown={(e) => handleDropdownKeyDown(e, item.label, item.items)}
                    role="menuitem"
                  >
                    {item.label}
                    <svg
                      className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${openDropdowns[item.label] ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {openDropdowns[item.label] && (
                    <div className=" absolute right-0 flex items-center justify-center p-4 font-inter">
                      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                        {/* Header */}
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Select a Plan</h2>

                        {/* Plan selection options */}
                        <div className="space-y-4 mb-8">
                          {plans.map((plan) => (
                            <div
                              key={plan.id}
                              className={`
                flex items-center justify-between p-4 border rounded-lg cursor-pointer
                ${selectedPlan === plan.id ? 'border-pink-600 ring-2 ring-pink-300' : 'border-gray-300'}
              `}
                              onClick={() => handlePlanSelect(plan.id)}
                            >
                              <div>
                                <p className={`font-medium ${selectedPlan === plan.id ? 'text-pink-600' : 'text-gray-800'}`}>
                                  {plan.status} {plan.number}
                                </p>
                                <p className={`text-sm ${selectedPlan === plan.id ? 'text-pink-600' : 'text-gray-600'}`}>
                                  {plan.description}
                                </p>
                              </div>
                              <input
                                type="radio"
                                name="plan"
                                value={plan.id}
                                checked={selectedPlan === plan.id}
                                onChange={() => handlePlanSelect(plan.id)}
                                className="form-radio h-5 w-5 text-pink-600 border-gray-300 focus:ring-pink-500"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex justify-end space-x-4">
                          <button
                            className="px-6 py-2 bg-pink-600 text-white font-semibold rounded-full shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-75 transition duration-200 ease-in-out"
                            onClick={() => console.log('Confirm selected plan:', selectedPlan)}
                          >
                            Confirm
                          </button>
                          <button
                            className="px-6 py-2 border border-pink-600 text-pink-600 font-semibold rounded-full shadow-md hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-75 transition duration-200 ease-in-out"
                            onClick={() => console.log('Cancel')}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;