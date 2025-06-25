/* eslint-disable @typescript-eslint/no-explicit-any */
import _map from "lodash/map";
import { generateId } from "./helper";
// import { generateId } from "~/utils/helper";

interface TabContentProps {
  tabs: any[];
  activeTab: string;
  tabContentRefs: React.MutableRefObject<(HTMLAnchorElement | null)[]>;
  onKeyDown: (e: React.KeyboardEvent<HTMLAnchorElement>, contentIndex: number) => void;
}

export default function TabContent({ tabs, activeTab, tabContentRefs, onKeyDown }: TabContentProps) {
  return (
    <div className="flex flex-col space-y-4 min-w-[420px] p-4">
      {_map(tabs, (tab, i) => {
        if (activeTab !== tab.tabLabel) return null;

        const panelId = generateId(tab.tabLabel);

        return (
          <div
            key={i}
            id={`panel-${panelId}`}
            role="tabpanel"
            aria-labelledby={`tab-${panelId}`}
            className={`pl-8 p-4 ${
              tab.children.length > 4 ? "grid grid-cols-2 gap-x-2 gap-y-6" : "flex flex-col gap-y-2"
            }`}
          >
            {_map(tab.children, (item: any, index: number) => (
              <a
                key={index}
                ref={(el) => { tabContentRefs.current[index] = el; }}
                target={item.linkType === "external" ? "_blank" : "_self"}
                href={item.linkHref || "#"}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => onKeyDown(e, index)}
                // aria-label={item.subtitle ? `${item.title}: ${item.subtitle}` : item.title}
                className="flex items-start group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 hover:bg-gray-200 p-2.5"
              >
                {item.image && (
                  <span className="mr-2">
                    <img
                      className="w-6 h-6 object-contain inline-block"
                      src={item.image}
                      alt={item.title || "Icon for link"}
                    />
                  </span>
                )}
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-[#1A1A1A] text-sm">{item.title}</h4>
                  <p className="text-[#4A4A4A] text-xs">{item.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        );
      })}
    </div>
  );
}