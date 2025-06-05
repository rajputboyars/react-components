import React from 'react';
import TabComponent from './Tab';
// import Tab from './Tab';

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

// Define props interface for the Navbar component
interface NavbarProps {
  handleMouseEnter: (dropdownName: string) => void;
  handleMouseLeave: (dropdownName: string) => void;
  openDropdowns: { [key: string]: boolean };
  setActiveMyPlanCareTab: React.Dispatch<React.SetStateAction<string>>;
  activeMyPlanCareTab: string;
  headerData: HeaderData;
}

const Navbar: React.FC<NavbarProps> = ({
  handleMouseEnter,
  handleMouseLeave,
  openDropdowns,
  setActiveMyPlanCareTab,
  activeMyPlanCareTab,
  headerData,
}) => {
  return (
    <div className="lg:flex items-center space-x-6 max-lg:hidden">
      {headerData.mainNav.links.map((link, index) => (
        <div key={index}>
          {link.type === 'tabbedDropdown' ? (
            <TabComponent
              activeMyPlanCareTab={activeMyPlanCareTab}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              link={link}
              openDropdowns={openDropdowns}
              setActiveMyPlanCareTab={setActiveMyPlanCareTab}
            />
          ) : (
            <a
              href={link.href}
              className="block md:inline-block text-gray-700 hover:text-gray-400 py-6"
            >
              {link.label}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navbar;