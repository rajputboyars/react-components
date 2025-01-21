import React, { useState } from 'react';

// Sample data for Site Settings
const initialGeneralSettings = {
  siteTitle: 'My E-Commerce Site',
  logo: '',
  timezone: 'UTC',
  currency: 'USD',
};

const initialEmailSettings = {
  orderConfirmation: true,
  shippingUpdate: true,
  customerAccount: false,
};

const initialSeoSettings = {
  metaTitle: 'My E-Commerce Site',
  metaDescription: 'Best products at the best prices.',
  metaKeywords: 'ecommerce, products, sale, best prices',
  urlStructure: 'https://www.myecommerce.com/products/{slug}',
};

const SiteSettings = () => {
  const [generalSettings, setGeneralSettings] = useState(initialGeneralSettings);
  const [emailSettings, setEmailSettings] = useState(initialEmailSettings);
  const [seoSettings, setSeoSettings] = useState(initialSeoSettings);

  const handleGeneralSettingChange = (e) => {
    const { name, value } = e.target;
    setGeneralSettings({ ...generalSettings, [name]: value });
  };

  const handleEmailSettingChange = (e) => {
    const { name, checked } = e.target;
    setEmailSettings({ ...emailSettings, [name]: checked });
  };

  const handleSeoSettingChange = (e) => {
    const { name, value } = e.target;
    setSeoSettings({ ...seoSettings, [name]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Site Settings</h2>

      {/* General Settings Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">General Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Site Title</label>
            <input
              type="text"
              name="siteTitle"
              value={generalSettings.siteTitle}
              onChange={handleGeneralSettingChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter Site Title"
            />
          </div>
          <div>
            <label className="block text-gray-700">Logo URL</label>
            <input
              type="text"
              name="logo"
              value={generalSettings.logo}
              onChange={handleGeneralSettingChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter Logo URL"
            />
          </div>
          <div>
            <label className="block text-gray-700">Timezone</label>
            <select
              name="timezone"
              value={generalSettings.timezone}
              onChange={handleGeneralSettingChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            >
              <option value="UTC">UTC</option>
              <option value="EST">EST</option>
              <option value="CST">CST</option>
              <option value="PST">PST</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Currency</label>
            <select
              name="currency"
              value={generalSettings.currency}
              onChange={handleGeneralSettingChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
            </select>
          </div>
        </div>
      </div>

      {/* Email Notifications Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Email Notifications</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="orderConfirmation"
              checked={emailSettings.orderConfirmation}
              onChange={handleEmailSettingChange}
              className="mr-2"
            />
            <span className="text-gray-700">Order Confirmation Email</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="shippingUpdate"
              checked={emailSettings.shippingUpdate}
              onChange={handleEmailSettingChange}
              className="mr-2"
            />
            <span className="text-gray-700">Shipping Update Email</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="customerAccount"
              checked={emailSettings.customerAccount}
              onChange={handleEmailSettingChange}
              className="mr-2"
            />
            <span className="text-gray-700">Customer Account Email</span>
          </div>
        </div>
      </div>

      {/* SEO Settings Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4">SEO Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Meta Title</label>
            <input
              type="text"
              name="metaTitle"
              value={seoSettings.metaTitle}
              onChange={handleSeoSettingChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter Meta Title"
            />
          </div>
          <div>
            <label className="block text-gray-700">Meta Description</label>
            <textarea
              name="metaDescription"
              value={seoSettings.metaDescription}
              onChange={handleSeoSettingChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter Meta Description"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Meta Keywords</label>
            <input
              type="text"
              name="metaKeywords"
              value={seoSettings.metaKeywords}
              onChange={handleSeoSettingChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter Meta Keywords (comma-separated)"
            />
          </div>
          <div>
            <label className="block text-gray-700">URL Structure</label>
            <input
              type="text"
              name="urlStructure"
              value={seoSettings.urlStructure}
              onChange={handleSeoSettingChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter URL Structure"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => alert('Settings saved successfully!')}
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SiteSettings;
