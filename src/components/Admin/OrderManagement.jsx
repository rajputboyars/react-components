import React, { useState } from 'react';

// Sample initial data for orders
const initialOrders = [
  { 
    id: 1, 
    customer: 'John Doe', 
    email: 'john@example.com', 
    products: ['Product 1', 'Product 2'], 
    status: 'Processing', 
    payment: 'Paid', 
    shipping: '123 Main St, City, Country',
    orderDate: '2023-01-01'
  },
  { 
    id: 2, 
    customer: 'Jane Smith', 
    email: 'jane@example.com', 
    products: ['Product 3'], 
    status: 'Shipped', 
    payment: 'Paid', 
    shipping: '456 Another St, City, Country',
    orderDate: '2023-02-15'
  },
  { 
    id: 3, 
    customer: 'Alice Johnson', 
    email: 'alice@example.com', 
    products: ['Product 4', 'Product 5'], 
    status: 'Completed', 
    payment: 'Paid', 
    shipping: '789 Example Rd, City, Country',
    orderDate: '2023-03-25'
  },
];

const OrderManagement = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedOrders, setSelectedOrders] = useState([]);

  const handleUpdateStatus = (id, status) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status } : order
    ));
  };

  const handleViewOrderDetails = (id) => {
    const orderDetails = orders.find(order => order.id === id);
    setSelectedOrder(orderDetails);
  };

  const handleRefundOrder = (id) => {
    const updatedOrders = orders.map(order => 
      order.id === id ? { ...order, status: 'Refunded' } : order
    );
    setOrders(updatedOrders);
  };

  const handleBulkUpdateStatus = (status) => {
    setOrders(
      orders.map((order) =>
        selectedOrders.includes(order.id) ? { ...order, status } : order
      )
    );
    setSelectedOrders([]);
  };

  const handleBulkRefund = () => {
    setOrders(
      orders.map((order) =>
        selectedOrders.includes(order.id) ? { ...order, status: 'Refunded' } : order
      )
    );
    setSelectedOrders([]);
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Management</h2>

      {/* Order List */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Order List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Select</th>
                <th className="px-4 py-2 border">Customer</th>
                <th className="px-4 py-2 border">Order Date</th>
                <th className="px-4 py-2 border">Products</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Payment</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-4 py-2 border">
                    <input
                      type="checkbox"
                      checked={selectedOrders.includes(order.id)}
                      onChange={() =>
                        setSelectedOrders((prevSelected) =>
                          prevSelected.includes(order.id)
                            ? prevSelected.filter((id) => id !== order.id)
                            : [...prevSelected, order.id]
                        )
                      }
                    />
                  </td>
                  <td className="px-4 py-2 border">{order.customer}</td>
                  <td className="px-4 py-2 border">{order.orderDate}</td>
                  <td className="px-4 py-2 border">{order.products.join(', ')}</td>
                  <td className="px-4 py-2 border">{order.status}</td>
                  <td className="px-4 py-2 border">{order.payment}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleViewOrderDetails(order.id)}
                      className="text-blue-600"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleRefundOrder(order.id)}
                      className="ml-4 text-red-600"
                    >
                      Refund
                    </button>
                    <button
                      onClick={() => handleDeleteOrder(order.id)}
                      className="ml-4 text-gray-600"
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

      {/* Bulk Actions */}
      <div className="mb-6 flex items-center space-x-4">
        <button
          onClick={() => handleBulkUpdateStatus('Shipped')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Mark as Shipped
        </button>
        <button
          onClick={handleBulkRefund}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Refund Selected
        </button>
      </div>

      {/* View Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Order Details</h3>
            <div className="space-y-4">
              <p><strong>Customer:</strong> {selectedOrder.customer}</p>
              <p><strong>Email:</strong> {selectedOrder.email}</p>
              <p><strong>Shipping Address:</strong> {selectedOrder.shipping}</p>
              <p><strong>Products:</strong> {selectedOrder.products.join(', ')}</p>
              <p><strong>Status:</strong> {selectedOrder.status}</p>
              <p><strong>Payment:</strong> {selectedOrder.payment}</p>
              <p><strong>Order Date:</strong> {selectedOrder.orderDate}</p>
              <div className="mt-4">
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;
