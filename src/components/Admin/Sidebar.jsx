import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const Sidebar = () => {
  const [ecommerceOpen, setEcommerceOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [attributeOpen, setAttributeOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [roleOpen, setRoleOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  const toggleDropdown = (setStateFunction, currentState) => {
    setStateFunction(!currentState);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 h-[87vh] overflow-auto p-4 space-y-6" style={{
        scrollbarWidth:"none"
      }}>
        {/* Dashboard Section */}
        <div>
          <Link to="/admin" className="block text-lg font-semibold p-2 hover:bg-gray-700 rounded">
            Dashboard
          </Link>
        </div>

        {/* Ecommerce Section */}
        <div>
          <div
            className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-700 rounded"
            onClick={() => toggleDropdown(setEcommerceOpen, ecommerceOpen)}
          >
            <span className="text-lg font-semibold">eCommerce</span>
            {ecommerceOpen ? <HiChevronUp /> : <HiChevronDown />}
          </div>
          {ecommerceOpen && (
            <div className="ml-4 space-y-2">
              <Link to="/admin/productmanagement" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">All Products</Link>
              <Link to="/admin/usermanagement" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">User</Link>
              <Link to="/admin/ordermanagement" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Order</Link>
              <Link to="/admin/inventorymanagement" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Inventory</Link>
              <Link to="/admin/categorymanagement" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Category</Link>
              <Link to="/admin/couponmanagement" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Coupon</Link>
              <Link to="/admin/reportsandanalytics" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Reports & Analytics</Link>
              <Link to="/admin/paymentmanagement" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Payment Management</Link>
              <Link to="/admin/shippingmanagement" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Shipping Management</Link>
              <Link to="/admin/sitesettings" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Site Settings</Link>
              <Link to="/admin/contentmanagement" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Content Management</Link>
              <Link to="/admin/securityandauthentication" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Security & Authentication</Link>
              <Link to="/admin/activitylogs" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Activity Logs</Link>
              <Link to="/admin/notificationsandalerts" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Notifications & Alerts</Link>
              
              {/* Category Section */}
              {/* <div>
                <div
                  className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-700 rounded"
                  onClick={() => toggleDropdown(setCategoryOpen, categoryOpen)}
                >
                  <span className="text-lg font-semibold">Categories</span>
                  {categoryOpen ? <HiChevronUp /> : <HiChevronDown />}
                </div>
                {categoryOpen && (
                  <div className="ml-4 space-y-2">
                    <Link to="/categories" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Category List</Link>
                    <Link to="/add-category" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Add New Category</Link>
                  </div>
                )}
              </div> */}

              {/* Attributes Section */}
              {/* <div>
                <div
                  className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-700 rounded"
                  onClick={() => toggleDropdown(setAttributeOpen, attributeOpen)}
                >
                  <span className="text-lg font-semibold">Attributes</span>
                  {attributeOpen ? <HiChevronUp /> : <HiChevronDown />}
                </div>
                {attributeOpen && (
                  <div className="ml-4 space-y-2">
                    <Link to="/attributes" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">All Attributes</Link>
                    <Link to="/add-attribute" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Add New Attribute</Link>
                  </div>
                )}
              </div> */}

              {/* Orders Section */}
              {/* <div>
                <div
                  className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-700 rounded"
                  onClick={() => toggleDropdown(setOrderOpen, orderOpen)}
                >
                  <span className="text-lg font-semibold">Orders</span>
                  {orderOpen ? <HiChevronUp /> : <HiChevronDown />}
                </div>
                {orderOpen && (
                  <div className="ml-4 space-y-2">
                    <Link to="/orders" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Order List</Link>
                    <Link to="/order-details" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Order Details</Link>
                    <Link to="/order-tracking" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Order Tracking</Link>
                  </div>
                )}
              </div> */}
            </div>
          )}
        </div>

        {/* Users Section */}
        {/* <div>
          <div
            className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-700 rounded"
            onClick={() => toggleDropdown(setUserOpen, userOpen)}
          >
            <span className="text-lg font-semibold">Users</span>
            {userOpen ? <HiChevronUp /> : <HiChevronDown />}
          </div>
          {userOpen && (
            <div className="ml-4 space-y-2">
              <Link to="/users" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">All Users</Link>
              <Link to="/add-user" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Add New User</Link>
              <Link to="/login" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Login</Link>
              <Link to="/sign-up" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Sign Up</Link>
            </div>
          )}
        </div> */}

        {/* Roles Section */}
        <div>
          <div
            className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-700 rounded"
            onClick={() => toggleDropdown(setRoleOpen, roleOpen)}
          >
            <span className="text-lg font-semibold">Roles</span>
            {roleOpen ? <HiChevronUp /> : <HiChevronDown />}
          </div>
          {roleOpen && (
            <div className="ml-4 space-y-2">
              <Link to="/roles" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">All Roles</Link>
              <Link to="/create-role" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Create Role</Link>
            </div>
          )}
        </div>

        {/* Gallery */}
        <div>
          <Link to="/gallery" className="block text-lg font-semibold p-2 hover:bg-gray-700 rounded">
            Gallery
          </Link>
        </div>

        {/* Reports */}
        <div>
          <Link to="/reports" className="block text-lg font-semibold p-2 hover:bg-gray-700 rounded">
            Reports
          </Link>
        </div>

        {/* Settings */}
        <div>
          <Link to="/settings" className="block text-lg font-semibold p-2 hover:bg-gray-700 rounded">
            Settings
          </Link>
        </div>

        {/* Support Section */}
        <div>
          <div
            className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-700 rounded"
            onClick={() => toggleDropdown(setSupportOpen, supportOpen)}
          >
            <span className="text-lg font-semibold">Support</span>
            {supportOpen ? <HiChevronUp /> : <HiChevronDown />}
          </div>
          {supportOpen && (
            <div className="ml-4 space-y-2">
              <Link to="/help-center" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Help Center</Link>
              <Link to="/faqs" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">FAQs</Link>
              <Link to="/privacy-policy" className="block text-gray-300 p-2 hover:bg-gray-600 rounded">Privacy Policy</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
