import React, { useState } from 'react';
import SiteHeader from './SiteHeader.tsx';
import Logo from './Logo.tsx';
import Navbar from './Navbar.tsx';
import Button from './Button.tsx';
import { headerData } from './global.constant.ts';




// Main Header component
const Header: React.FC = () => {
  const [activeMyPlanCareTab, setActiveMyPlanCareTab] = useState<string>(
    headerData.mainNav.links.find(link => link.type === 'tabbedDropdown')?.tabs?.[0]?.name || ''
  );

  // State for hover-based dropdowns
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  const handleMouseEnter = (dropdownName: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [dropdownName]: true }));
  };

  const handleMouseLeave = (dropdownName: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [dropdownName]: false }));
  };


  return (
    <div className="bg-gray-100 font-sans antialiased" role="banner">
      {/* Header */}
      <SiteHeader
        headerData={headerData}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        openDropdowns={openDropdowns}
      />

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm lg:px-8 px-2 max-lg:py-1 border-t border-gray-200" aria-label="Main Navigation" role="navigation">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            {/* Logo */}
            <Logo logoImg={headerData.mainNav.logo.src} logoAtl={headerData.mainNav.logo.alt} />

            {/* Navigation links */}
            <Navbar
              headerData={headerData}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              openDropdowns={openDropdowns}
              setActiveMyPlanCareTab={setActiveMyPlanCareTab}
              activeMyPlanCareTab={activeMyPlanCareTab}
            />
          </div>

          {/* Right utility icons */}
          <div className="flex items-center space-x-4" role="menubar">
            {headerData.mainNav.utilityIcons.map((iconItem, index) => (
              <Button key={index} index={index} iconItem={iconItem} />
            ))}
          </div>
        </div>
      </nav>

      {/* Example content to show header in context */}
      <main id="main-content" role="main" tabIndex={-1} className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Document Hub</h1>
        <p className="text-gray-600">
          This is a placeholder for your main content. The header component is displayed above.
        </p>
      </main>
    </div>
  );
};

export default Header;