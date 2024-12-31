import React, { useState } from "react";

const SearchHeader = ({ logo, links }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSearchToggle = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const handleSearch = () => {
        if (searchQuery.trim()) {
            console.log("Searching for:", searchQuery);
            // Add your search logic here (e.g., redirect or API call)
        }
    };

    const handleSearchEnter = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-primary shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4 flex items-center justify-between py-4">
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

                <div className="flex items-center">

                    {/* Search Bar (Desktop) */}
                    <div className="hidden md:flex mr-4 pl-1 items-center rounded-full border border-white bg-white space-x-2">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearchEnter}
                            className="w-60 pl-4 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-primary rounded-full text-white px-4 py-1 hover:bg-gray-dark"
                        >
                            Search
                        </button>
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
                </div>


                {/* Mobile Icons */}
                <div className="flex md:hidden items-center space-x-4">
                    {/* Search Icon */}
                    <button
                        className="text-white focus:outline-none"
                        onClick={handleSearchToggle}
                        aria-label="Toggle Search"
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
                                d="M11 5a7 7 0 100 14 7 7 0 000-14zm0 0l6 6"
                            />
                        </svg>
                    </button>

                    {/* Menu Icon */}
                    <button
                        className="text-white focus:outline-none"
                        onClick={handleMenuToggle}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
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
            </div>

            {/* Mobile Search Bar */}
            {isSearchOpen && (
                <div className="absolute top-16 left-0 w-full bg-secondary px-4 py-2 flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleSearchEnter}
                        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-gray-dark"
                    >
                        Search
                    </button>
                </div>
            )}

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full bg-gray-600 text-white transition-all duration-300 ${isMenuOpen ? "w-full" : "w-0"
                    } overflow-hidden`}
            >
                <button
                    className="absolute top-4 right-4 text-white focus:outline-none"
                    onClick={handleCloseMenu}
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
                <ul className="flex flex-col items-center justify-center h-full space-y-6">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                className="text-lg hover:text-gray-400"
                                onClick={handleCloseMenu}
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

export default SearchHeader;
