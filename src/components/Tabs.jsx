import React from "react";
import PropTypes from "prop-types";

const Tabs = ({ tabs, orientation }) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]?.id || "");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const isVertical = orientation === "vertical";

  return (
    <div
      className={`tabs panelcontainer ${isVertical ? "flex" : "flex flex-col"}`}
    >
      <div
        className={`cmp-tabs ${
          isVertical ? "cmp-tabs-vertical" : "cmp-tabs-horizontal"
        }`}
        role="tablist"
      >
        <div
          className={`cmp-tabs__tablist ${
            isVertical ? "flex flex-col border-r" : "flex border-b"
          }`}
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              role="tab"
              id={`${tab.id}-tab`}
              className={`cmp-tabs__tab px-4 py-2 cursor-pointer text-nowrap ${
                activeTab === tab.id
                  ? "text-blue-500 border-blue-500"
                  : "text-gray-500"
              } ${isVertical ? "border-b-0 border-r" : "border-b-2"}`}
              aria-controls={`${tab.id}-tabpanel`}
              tabIndex={0}
              aria-selected={activeTab === tab.id}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      <div className={`cmp-tabs__panels ${isVertical ? "pl-4" : "pt-4"}`}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`${tab.id}-tabpanel`}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
            tabIndex={0}
            className={`cmp-tabs__tabpanel ${
              activeTab === tab.id ? "block" : "hidden"
            } p-4`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
};

Tabs.defaultProps = {
  tabs: [
    {
      id: "tab1",
      title: "Tab 1",
      content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>,
    },
    {
      id: "tab2",
      title: "Tab 2",
      content: <p>Hac habitasse platea dictumst quisque sagittis purus.</p>,
    },
    {
      id: "tab3",
      title: "Tab 3",
      content: <p>Libero id faucibus nisl tincidunt eget nullam non nisi.</p>,
    },
  ],
  orientation: "horizontal",
};

export default Tabs;
