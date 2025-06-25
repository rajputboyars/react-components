/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
// import HeaderDropDown from "~/components/HeaderDropDown/HeaderDropDown.client";
// import TabContent from "~/components/LinkWithSubtitle/LinkWithSubtitle.client";
// import { generateId, stringToBoolean } from "~/utils/helper";
import HeaderDropDown from "./HeaderDropDown.client";
import TabContent from "./LinkWithSubtitle.client";
import { generateId, stringToBoolean } from "./helper";

type NavLinksClientProps = {
  navItem: any;
};

const NavLinksClient: React.FC<NavLinksClientProps> = ({ navItem }) => {
  // console.log(navItem);

  const [openDropdown, setOpenDropdown] = useState<{ [key: string]: boolean }>({});
  const [activeTabs, setActiveTabs] = useState<{ [key: string]: string }>({});
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabContentRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const getFirstTabLabel = (navItem: any): string => {
    if (Array.isArray(navItem.children) && navItem.children.length > 0) {
      return navItem.children[0]?.tabLabel || "";
    }
    return "";
  };

  const toggleDropdown = (
    navItem: any,
    open: boolean,
    focusFirstTab: boolean = false,
  ) => {
    const label = navItem.label;
    setOpenDropdown((prev) => ({
      ...prev,
      [label]: open,
    }));
    if (open) {
      tabContentRefs.current = []; // Clear refs for new dropdown
      setActiveTabs((tabs) => ({
        ...tabs,
        [label]: getFirstTabLabel(navItem),
      }));
      if (focusFirstTab && tabRefs.current[0]) {
        setTimeout(() => tabRefs.current[0]?.focus(), 0);
      }
    }
  };




  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>,
    type: "nav" | "tab" | "content",
    navItem: any,
    navItemIndex: number,
    index: number,
    tabLabel: string = "",
  ) => {
    if (type === "nav") {
      // console.log(type, "first-type");

      if (e.key === "Enter") {
        e.preventDefault();
        if (stringToBoolean(navItem.headerDropDownEnable)) {
          toggleDropdown(navItem, !openDropdown[navItem.label], true);
        } else {
          navItemRefs.current[index]?.click();
        }
      } else if (e.key === "Space" && !stringToBoolean(navItem.headerDropDownEnable)) {
        e.preventDefault();
        navItemRefs.current[index]?.click();
      } else if (e.key === "Escape" && openDropdown[navItem.label]) {
        e.preventDefault();
        toggleDropdown(navItem, false);
        navItemRefs.current[navItemIndex]?.focus();
      }
    } else if (type === "tab" && e.key === "Tab" && !e.shiftKey) {
      // console.log(type, "second-type");

      e.preventDefault();
      if (tabContentRefs.current[0]) {
        // console.log(tabContentRefs.current[0], "tabContentRefs.current[0]");

        tabContentRefs.current[0]?.focus();
      }
    } else if (type === "content" && e.key === "Tab" && !e.shiftKey) {
      // console.log(type, "third-type");

      e.preventDefault();
      const tabCount = tabRefs.current.length;
      const contentCount = tabContentRefs.current.length;
      const currentTabIndex = tabRefs.current.findIndex(
        (ref) => ref?.getAttribute("aria-selected") === "true",
      );
      // console.log(type, "third-type", tabCount, "tabCount", contentCount, "contentCountindex", index, "index", contentCount, "contentCount", currentTabIndex, "currentTabIndex");

      if (index < contentCount - 1) {
        // console.log(type, "third-type", index, contentCount, "index,contentCount");
        // console.log("4444");
        if (tabContentRefs.current[index + 1] == null) {
          toggleDropdown(navItem, false);
          navItemRefs.current[navItemIndex+1]?.focus();
        }
        tabContentRefs.current[index + 1]?.focus();
        // console.log(tabContentRefs.current[index + 1], "tabContentRefs.current[index + 1]");

      } else if (currentTabIndex < tabCount - 1) {
        if (tabRefs.current[currentTabIndex + 1] == null) {
          toggleDropdown(navItem, false);
          navItemRefs.current[navItemIndex+1]?.focus();
        }
        // console.log(tabRefs.current[currentTabIndex + 1], "tabRefs.current[currentTabIndex + 1]");
        tabRefs.current[currentTabIndex + 1]?.click();
        setTimeout(() => tabRefs.current[currentTabIndex + 1]?.focus(), 0);
      } else {
        navItemRefs.current[navItemIndex + 1]?.focus();
        toggleDropdown(navItem, false);
        // console.log(navItemRefs.current[navItemIndex + 1], "navItemRefs.current[navItemIndex + 1]");

        if (stringToBoolean(navItem[navItemIndex + 1]?.headerDropDownEnable)) {
          toggleDropdown(navItem[navItemIndex + 1], true, true);
        }
      }
    } else if (e.key === "Escape") {
      // console.log(navItemRefs.current[navItemIndex], "navItemRefs.current[navItemIndex]");
      e.preventDefault();
      toggleDropdown(navItem, false);
      navItemRefs.current[navItemIndex]?.focus();
    }
  };

  return (
    <nav
      // role="navigation"
      aria-label="Main navigation"
      className="flex items-center"
    >
      {navItem.map((item, index) => {
        const isOpen = openDropdown[item?.label] || false;
        const activeTab = activeTabs[item?.label] || "";
        const headerDropDownEnable = stringToBoolean(item.headerDropDownEnable);
        const id = generateId(item.label);

        return (
          <div
            key={item?.label}
            className="relative inline-flex flex-col group"
            onMouseEnter={() => toggleDropdown(item, true)}
            onMouseLeave={() => toggleDropdown(item, false)}
          >
            <a
              ref={(el) => { navItemRefs.current[index] = el; }}
              target={item.linkType === "external" ? "_blank" : "_self"}
              {...(!headerDropDownEnable ? { href: item.url || "#" } : {})}
              //   aria-label={headerDropDownEnable ? `Toggle ${item.label} dropdown` : item.label}
              aria-expanded={headerDropDownEnable ? isOpen : undefined}
              aria-controls={headerDropDownEnable ? `panel-${id}` : undefined}
              tabIndex={0}
              onClick={() => headerDropDownEnable && toggleDropdown(item, !isOpen)}
              onKeyDown={(e) => handleKeyDown(e, "nav", item, index, index)}
              className={`text-[#1A1A1A] flex items-center gap-2 text-base font-semibold p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${isOpen
                ? "border-b-2 border-[#A51155]"
                : "hover:border-b-2 hover:border-[#A51155] hover:text-[#4A4A4A]"
                }`}
            >
              {item.label}
              {headerDropDownEnable && (
                <svg
                  className={`ml-2 h-4 w-4 transform transition-transform duration-200 text-[#A51155] ${isOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
            {isOpen && headerDropDownEnable && (
              <div
                id={`panel-${id}`}
                className="absolute top-full left-0 w-max bg-white rounded-b-2xl border border-gray-200 overflow-hidden z-10 flex"
                role="region"
                aria-labelledby={`nav-${id}`}
              >
                <HeaderDropDown
                  tabs={item?.children || []}
                  activeTab={activeTab}
                  setActiveTab={(tab) =>
                    setActiveTabs((tabs) => ({
                      ...tabs,
                      [item?.label]: tab,
                    }))
                  }
                  onKeyDown={(e, tabLabel, tabIndex) =>
                    handleKeyDown(e, "tab", item, index, tabIndex, tabLabel)
                  }
                  tabRefs={tabRefs}
                />
                <TabContent
                  tabs={item?.children || []}
                  activeTab={activeTab}
                  tabContentRefs={tabContentRefs}
                  onKeyDown={(e, contentIndex) =>
                    handleKeyDown(e, "content", item, index, contentIndex)
                  }
                />
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default NavLinksClient;