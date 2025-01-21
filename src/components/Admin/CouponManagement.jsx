import React, { useState } from 'react';
import dayjs from 'dayjs'; // For date manipulation

// Sample initial data for coupons
const initialCoupons = [
  { id: 1, code: 'SUMMER2025', type: 'percentage', value: 15, expiresAt: '2025-06-30', isActive: true },
  { id: 2, code: 'BLACKFRIDAY2025', type: 'fixed', value: 25, expiresAt: '2025-11-27', isActive: false },
  { id: 3, code: 'WELCOME2025', type: 'percentage', value: 10, expiresAt: '2025-02-28', isActive: true },
];

const CouponManagement = () => {
  const [coupons, setCoupons] = useState(initialCoupons);
  const [couponCode, setCouponCode] = useState('');
  const [discountType, setDiscountType] = useState('percentage'); // or 'fixed'
  const [discountValue, setDiscountValue] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const handleAddCoupon = () => {
    if (couponCode && discountValue && expirationDate) {
      const newCoupon = {
        id: coupons.length + 1,
        code: couponCode,
        type: discountType,
        value: parseFloat(discountValue),
        expiresAt: expirationDate,
        isActive: dayjs(expirationDate).isAfter(dayjs()), // Activate if expiration date is in the future
      };

      setCoupons([...coupons, newCoupon]);
      setCouponCode('');
      setDiscountValue('');
      setExpirationDate('');
    }
  };

  const handleUpdateCoupon = () => {
    if (selectedCoupon) {
      setCoupons(
        coupons.map((coupon) =>
          coupon.id === selectedCoupon.id
            ? {
                ...coupon,
                code: couponCode,
                type: discountType,
                value: parseFloat(discountValue),
                expiresAt: expirationDate,
                isActive: dayjs(expirationDate).isAfter(dayjs()), // Update active status
              }
            : coupon
        )
      );
      setSelectedCoupon(null);
      setCouponCode('');
      setDiscountValue('');
      setExpirationDate('');
    }
  };

  const handleDeleteCoupon = (id) => {
    setCoupons(coupons.filter((coupon) => coupon.id !== id));
  };

  const handleEditCoupon = (coupon) => {
    setSelectedCoupon(coupon);
    setCouponCode(coupon.code);
    setDiscountType(coupon.type);
    setDiscountValue(coupon.value);
    setExpirationDate(coupon.expiresAt);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Coupon and Discount Management</h2>

      {/* Add New Coupon */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Add New Coupon</h3>
        <div className="space-y-4">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded w-full"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <div className="flex space-x-4">
            <input
              type="number"
              className="p-2 border border-gray-300 rounded w-1/2"
              placeholder="Discount Value"
              value={discountValue}
              onChange={(e) => setDiscountValue(e.target.value)}
            />
            <select
              className="p-2 border border-gray-300 rounded w-1/2"
              value={discountType}
              onChange={(e) => setDiscountType(e.target.value)}
            >
              <option value="percentage">Percentage</option>
              <option value="fixed">Fixed Amount</option>
            </select>
          </div>
          <input
            type="date"
            className="p-2 border border-gray-300 rounded w-full"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
          <button
            onClick={handleAddCoupon}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Coupon
          </button>
        </div>
      </div>

      {/* Coupon List */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Coupon List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Coupon Code</th>
                <th className="px-4 py-2 border">Discount Type</th>
                <th className="px-4 py-2 border">Value</th>
                <th className="px-4 py-2 border">Expiration Date</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon) => (
                <tr key={coupon.id}>
                  <td className="px-4 py-2 border">{coupon.code}</td>
                  <td className="px-4 py-2 border">{coupon.type}</td>
                  <td className="px-4 py-2 border">{coupon.value}</td>
                  <td className="px-4 py-2 border">{dayjs(coupon.expiresAt).format('MM/DD/YYYY')}</td>
                  <td className="px-4 py-2 border">
                    {coupon.isActive ? (
                      <span className="text-green-600">Active</span>
                    ) : (
                      <span className="text-red-600">Expired</span>
                    )}
                  </td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleEditCoupon(coupon)}
                      className="text-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCoupon(coupon.id)}
                      className="ml-4 text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Coupon Modal */}
      {selectedCoupon && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Edit Coupon: {selectedCoupon.code}
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Coupon Code"
              />
              <div className="flex space-x-4">
                <input
                  type="number"
                  className="w-1/2 p-2 border border-gray-300 rounded"
                  value={discountValue}
                  onChange={(e) => setDiscountValue(e.target.value)}
                  placeholder="Discount Value"
                />
                <select
                  className="w-1/2 p-2 border border-gray-300 rounded"
                  value={discountType}
                  onChange={(e) => setDiscountType(e.target.value)}
                >
                  <option value="percentage">Percentage</option>
                  <option value="fixed">Fixed Amount</option>
                </select>
              </div>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
              <div className="flex justify-between">
                <button
                  onClick={handleUpdateCoupon}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Update Coupon
                </button>
                <button
                  onClick={() => setSelectedCoupon(null)}
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CouponManagement;
