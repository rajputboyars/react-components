import React, { useState } from 'react';
import dayjs from 'dayjs';

// Sample initial data for reports
const salesData = [
  { date: '2025-01-01', product: 'Laptop', category: 'Electronics', sales: 500, quantity: 5 },
  { date: '2025-01-02', product: 'Shirt', category: 'Clothing', sales: 120, quantity: 12 },
  { date: '2025-01-03', product: 'Washing Machine', category: 'Home Appliances', sales: 800, quantity: 1 },
  // Add more sample data here...
];

const userData = [
  { user: 'john_doe', registrationDate: '2025-01-01', ordersPlaced: 2 },
  { user: 'jane_smith', registrationDate: '2025-01-05', ordersPlaced: 3 },
  // Add more sample data here...
];

const productData = [
  { product: 'Laptop', sales: 500, views: 1200 },
  { product: 'Shirt', sales: 120, views: 800 },
  { product: 'Washing Machine', sales: 800, views: 300 },
  // Add more sample data here...
];

const ReportsAndAnalytics = () => {
  const [selectedReport, setSelectedReport] = useState('sales');
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });
  const [filteredSalesData, setFilteredSalesData] = useState(salesData);
  const [filteredUserData, setFilteredUserData] = useState(userData);
  const [filteredProductData, setFilteredProductData] = useState(productData);

  const handleDateChange = (e, type) => {
    setDateRange({
      ...dateRange,
      [type]: e.target.value,
    });
  };

  const filterSalesData = () => {
    const { startDate, endDate } = dateRange;
    const filtered = salesData.filter((data) => {
      const date = dayjs(data.date);
      return (
        (!startDate || date.isAfter(dayjs(startDate).subtract(1, 'day'))) &&
        (!endDate || date.isBefore(dayjs(endDate).add(1, 'day')))
      );
    });
    setFilteredSalesData(filtered);
  };

  const filterUserData = () => {
    const { startDate, endDate } = dateRange;
    const filtered = userData.filter((data) => {
      const date = dayjs(data.registrationDate);
      return (
        (!startDate || date.isAfter(dayjs(startDate).subtract(1, 'day'))) &&
        (!endDate || date.isBefore(dayjs(endDate).add(1, 'day')))
      );
    });
    setFilteredUserData(filtered);
  };

  const filterProductData = () => {
    const { startDate, endDate } = dateRange;
    // Assuming you would apply filtering based on product performance data's sale or views by date range
    // For now, we don't have date-based filtering for product data, so just return all
    setFilteredProductData(productData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Reports and Analytics</h2>

      {/* Report Type Selection */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setSelectedReport('sales')}
          className={`px-4 py-2 rounded ${selectedReport === 'sales' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Sales Report
        </button>
        <button
          onClick={() => setSelectedReport('users')}
          className={`px-4 py-2 rounded ${selectedReport === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          User Reports
        </button>
        <button
          onClick={() => setSelectedReport('product')}
          className={`px-4 py-2 rounded ${selectedReport === 'product' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Product Performance
        </button>
      </div>

      {/* Date Range Picker */}
      <div className="flex space-x-4 mb-6">
        <input
          type="date"
          className="p-2 border border-gray-300 rounded"
          value={dateRange.startDate}
          onChange={(e) => handleDateChange(e, 'startDate')}
        />
        <input
          type="date"
          className="p-2 border border-gray-300 rounded"
          value={dateRange.endDate}
          onChange={(e) => handleDateChange(e, 'endDate')}
        />
        <button
          onClick={() => {
            filterSalesData();
            filterUserData();
            filterProductData();
          }}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Apply Date Range
        </button>
      </div>

      {/* Report Content */}
      {selectedReport === 'sales' && (
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">Sales Report</h3>
          <table className="min-w-full table-auto mb-6">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Product</th>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Sales</th>
                <th className="px-4 py-2 border">Quantity Sold</th>
              </tr>
            </thead>
            <tbody>
              {filteredSalesData.map((sale) => (
                <tr key={sale.date}>
                  <td className="px-4 py-2 border">{sale.date}</td>
                  <td className="px-4 py-2 border">{sale.product}</td>
                  <td className="px-4 py-2 border">{sale.category}</td>
                  <td className="px-4 py-2 border">${sale.sales}</td>
                  <td className="px-4 py-2 border">{sale.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedReport === 'users' && (
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">User Reports</h3>
          <table className="min-w-full table-auto mb-6">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Username</th>
                <th className="px-4 py-2 border">Registration Date</th>
                <th className="px-4 py-2 border">Orders Placed</th>
              </tr>
            </thead>
            <tbody>
              {filteredUserData.map((user) => (
                <tr key={user.user}>
                  <td className="px-4 py-2 border">{user.user}</td>
                  <td className="px-4 py-2 border">{dayjs(user.registrationDate).format('MM/DD/YYYY')}</td>
                  <td className="px-4 py-2 border">{user.ordersPlaced}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedReport === 'product' && (
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">Product Performance</h3>
          <table className="min-w-full table-auto mb-6">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Product</th>
                <th className="px-4 py-2 border">Sales</th>
                <th className="px-4 py-2 border">Views</th>
              </tr>
            </thead>
            <tbody>
              {filteredProductData.map((product) => (
                <tr key={product.product}>
                  <td className="px-4 py-2 border">{product.product}</td>
                  <td className="px-4 py-2 border">${product.sales}</td>
                  <td className="px-4 py-2 border">{product.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReportsAndAnalytics;
