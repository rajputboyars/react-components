// Define interfaces for the header data structure
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


// Define the header data structure
export const headerData: HeaderData = {
  topBar: {
    leftItems: [
      { label: "Document Hub", type: "text" },
      {
        label: "My Account",
        type: "dropdown",
        items: [
          { label: "Profile", href: "#" },
          { label: "Settings", href: "#" },
          { label: "Logout", href: "#" },
        ],
      },
      {
        label: "English",
        type: "dropdown",
        items: [
          { label: "Spanish", href: "#" },
          { label: "French", href: "#" },
        ],
      },
    ],
    rightItems: [
      { label: "Active Plan", type: "text" },
      {
        label: "93536",
        type: "dropdown",
        isPill: true,
        items: [
          { label: "Plan Details", href: "#" },
          { label: "Change Plan", href: "#" },
        ],
      },
    ],
  },
  mainNav: {
    logo: {
      src: "https://placehold.co/120x30/800080/FFFFFF?text=DeanHealthPlan",
      alt: "Dean-HealthPlan by Medica",
    },
    links: [
      {
        label: "My Plan + Care",
        type: "tabbedDropdown",
        tabs: [
          {
            name: "My Plan",
            content: [
              {
                icon: "document-text",
                title: "My benefits + plans",
                description: "View your coverage and benefit details",
              },
              {
                icon: "chart-bar",
                title: "Spending summary",
                description: "Get a rundown of your costs and savings",
              },
              {
                icon: "wallet",
                title: "HSA, HRA, + FSA",
                description: "Stay updated on your savings accounts",
              },
              {
                icon: "wallet",
                title: "Explore my plan",
                description: "See all details about your plan",
              },
            ],
          },
          {
            name: "Pharmacy",
            content: [
              {
                icon: "clipboard-list",
                title: "Your medications",
                description: "See current meds, get refills, and learn about specialty meds",
              },
            ],
          },
          {
            name: "Comprehensive Care",
            content: [
              {
                icon: "heart",
                title: "Preventative care",
                description: "Routine checkups that keep you healthy.",
              },
              {
                icon: "cube",
                title: "Complex care",
                description: "Get help for serious or chronic conditions",
              },
              {
                icon: "user-group",
                title: "Behavioral care",
                description: "Care for your whole self",
              },
              {
                icon: "plane",
                title: "Travel programs",
                description: "Search in-network care while traveling",
              },
              {
                icon: "desktop-computer",
                title: "Virtual care",
                description: "Care from the comfort of home",
              },
              {
                icon: "truck",
                title: "Medical equipment",
                description: "Find supplies like walkers, oxygen tanks, and more",
              },
              {
                icon: "truck",
                title: "Explore comprehensive care",
                description: "View all your care benefits in one place",
              },
            ],
          },
          {
            name: "Health Programs",
            content: [
              {
                icon: "sparkles",
                title: "My Health Rewards",
                description: "Build healthy habits and reach your goals.",
              },
              {
                icon: "user-add",
                title: "Pregnancy care",
                description: "Find support through your parenthood journey",
              },
              {
                icon: "beaker",
                title: "Diabetes prevention + support",
                description: "Get help to reduce your risk or manage your glucose",
              },
              {
                icon: "beaker",
                title: "Explore health programs",
                description: "Find all your extra programs in one spot",
              },
            ],
          },
        ],
      },
      { label: "My Payments", href: "#" },
      { label: "My Claims", href: "#" },
      { label: "Find Care", href: "#" },
    ],
    utilityIcons: [
      { icon: "search", type: "button" },
      { label: "ID Card", icon: "credit-card", type: "button", isPill: true },
    ],
  },
};
