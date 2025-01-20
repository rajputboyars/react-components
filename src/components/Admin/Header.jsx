import React, { useState } from 'react';
import { HiSearch, HiBell, HiMail, HiUser, HiCog, HiLogout, HiInbox, HiSupport, HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = () => {
    const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is active
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu state

    const handleToggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="bg-white shadow-md p-4 flex items-center justify-between sticky top-0">
            {/* Left Side: Search Input */}
            <div className="flex items-center space-x-4 w-full sm:w-auto max-md:hidden">
                <div className="relative w-full sm:w-60 md:w-96">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-2xl text-gray-700"
                onClick={handleMobileMenuToggle}
            >
                <HiMenu />
            </button>

            {/* Right Side: Icons and Profile */}
            <div className={`flex  md:space-x-6 max-md:space-y-4 md:flex flex-col md:flex-row max-md:absolute top-16 left-0 max-md:w-full md:items-center bg-white p-4 max-md:shadow-lg  ${mobileMenuOpen ? '' : 'max-md:hidden items-center'}`}>
                {/* Notification Icon */}
                <button onClick={() => handleToggleDropdown('notifications')} className="relative">
                    <div className='flex items-center'>
                        <HiBell className="text-2xl text-gray-700" />
                        <p className='md:hidden'>Notification</p>
                    </div>
                    {activeDropdown === 'notifications' && (
                        <div className="absolute right-0 w-64 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-700">Notifications</h3>
                                <ul className="mt-2 space-y-2">
                                    <li className="text-sm text-gray-600">New order placed</li>
                                    <li className="text-sm text-gray-600">Product out of stock</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </button>

                {/* Message Icon */}
                <button onClick={() => handleToggleDropdown('messages')} className="relative">
                    <div className='flex items-center'>
                        <HiMail className="text-2xl text-gray-700" />
                        <p className='md:hidden'>Message</p>
                    </div>
                    {activeDropdown === 'messages' && (
                        <div className="absolute right-0 w-64 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-700">Messages</h3>
                                <ul className="mt-2 space-y-2">
                                    <li className="text-sm text-gray-600">Message from John</li>
                                    <li className="text-sm text-gray-600">New inquiry</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </button>

                {/* Profile Icon and Name */}
                <div className="relative">
                    <button onClick={() => handleToggleDropdown('profile')} className="flex items-center space-x-2">
                        <img
                            src="/path-to-your-profile-image.jpg" // Replace with your admin profile image path
                            alt="Admin"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-gray-700 font-medium">Admin</span>
                    </button>

                    {/* Profile Dropdown */}
                    {activeDropdown === 'profile' && (
                        <div className="absolute md:right-0 w-48 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                            <div className="py-2">
                                <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    <HiCog className="inline-block mr-2 text-gray-600" />
                                    Account
                                </Link>
                                <Link to="/inbox" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    <HiInbox className="inline-block mr-2 text-gray-600" />
                                    Inbox
                                </Link>
                                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    <HiCog className="inline-block mr-2 text-gray-600" />
                                    Settings
                                </Link>
                                <Link to="/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    <HiSupport className="inline-block mr-2 text-gray-600" />
                                    Support
                                </Link>
                                <button className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100">
                                    <HiLogout className="inline-block mr-2 text-gray-600" />
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
