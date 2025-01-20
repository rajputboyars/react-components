import React from "react";
import PropTypes from "prop-types";

export function AccordionDemo({
  items,
  type = "single",
  collapsible = true,
  className = "w-full",
}) {
  return (
    <div className={`accordion ${className}`}>
      {items.map((item) => (
        <div
          key={item.value}
          className="border-b border-gray-300 last:border-none"
        >
          <button
            className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
            onClick={() => item.onClick && item.onClick(item.value)}
          >
            {item.title}
          </button>
          <div
            className={`p-4 transition-all ${
              item.isOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

AccordionDemo.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      isOpen: PropTypes.bool,
      onClick: PropTypes.func,
    })
  ).isRequired,
  type: PropTypes.oneOf(["single", "multiple"]),
  collapsible: PropTypes.bool,
  className: PropTypes.string,
};

AccordionDemo.defaultProps = {
  type: "single",
  collapsible: true,
  className: "w-full",
};
