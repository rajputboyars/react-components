import React, { useState } from "react";

const Header = ({ logo, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-black shadow-md fixed top-52 left-0 w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <a href="/">
            {logo.startsWith("http") ? (
              <img src={logo} alt="Logo" className="h-8" />
            ) : (
              logo
            )}
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-200 hover:text-gray-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-white focus:outline-none md:hidden"
          onClick={handleToggle}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-600 text-white transition-all duration-300 ${
          isOpen ? "w-full md:w-0" : "w-0"
        } overflow-hidden`}
      >
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={handleClose}
          aria-label="Close Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex bg-gray-600 flex-col items-center justify-center h-full space-y-6">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-lg hover:text-gray-400"
                onClick={handleClose}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
