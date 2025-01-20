import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ menuItems }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleSubDropdownToggle = (index) => {
    setOpenSubDropdown(openSubDropdown === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setOpenDropdown(null);
      setOpenSubDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className=" text-white z-10">
      <div className="bg-gray-800">

        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-xl font-bold">Brand</div>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden block focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6" ref={dropdownRef}>
            {menuItems.map((item, index) => (
              <li key={index} className="relative group z-10">
                <button
                  className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  onClick={() => handleDropdownToggle(index)}
                >
                  {item.label}
                </button>
                {item.children && (
                  <ul
                    className={`absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg transition-opacity duration-300 ${openDropdown === index ? "opacity-100" : "opacity-0 invisible"
                      }`}
                  >
                    {item.children.map((subItem, subIndex) => (
                      <li key={subIndex} className="relative">
                        {subItem.children ? (
                          <button
                            className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                            onClick={() => handleSubDropdownToggle(subIndex)}
                          >
                            {subItem.label}
                          </button>
                        ) : (
                          <a
                            href={subItem.link}
                            className="block w-full px-4 py-2 hover:bg-gray-100"
                          >
                            {subItem.label}
                          </a>
                        )}
                        {subItem.children && (
                          <ul
                            className={`absolute right-full top-0 mt-0 w-48 bg-white text-black rounded-md shadow-lg transition-opacity duration-300 ${openSubDropdown === subIndex
                                ? "opacity-100"
                                : "opacity-0 invisible"
                              }`}
                          >
                            {subItem.children.map((nestedItem, nestedIndex) => (
                              <li
                                key={nestedIndex}
                                className="px-4 py-2 hover:bg-gray-100"
                              >
                                <a className="w-full block" href={nestedItem.link}>{nestedItem.label}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all bg-gray-800 duration-500 ${isMenuOpen ? "max-h-screen" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                onClick={() => handleDropdownToggle(index)}
              >
                {item.label}
              </button>
              {item.children && openDropdown === index && (
                <ul className="pl-4">
                  {item.children.map((subItem, subIndex) => (
                    <li key={subIndex} className="relative">
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                        onClick={() => handleSubDropdownToggle(subIndex)}
                      >
                        {subItem.label}
                      </button>
                      {subItem.children && openSubDropdown === subIndex && (
                        <ul className="pl-4">
                          {subItem.children.map((nestedItem, nestedIndex) => (
                            <li
                              key={nestedIndex}
                              className="px-4 py-2 hover:bg-gray-500"
                            >
                              <a href={nestedItem.link}>
                                {nestedItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          link: PropTypes.string,
        })
      ),
    })
  ),
};

Navbar.defaultProps = {
  menuItems: [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Services",
      children: [
        { label: "Web Development", link: "/web-development" },
        { label: "SEO", link: "/seo" },
        {
          label: "More",
          children: [
            { label: "Consulting", link: "/consulting" },
            { label: "Support", link: "/support" },
          ],
        },
      ],
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ],
};

export default Navbar;
