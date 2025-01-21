import React, { useState } from 'react';

// Sample data for payment methods and transaction history
const paymentMethodsData = [
  { id: 1, name: 'PayPal', isEnabled: true },
  { id: 2, name: 'Stripe', isEnabled: true },
  { id: 3, name: 'Bank Transfer', isEnabled: false },
];

const transactionHistoryData = [
  { id: 1, transactionId: 'TX12345', amount: 100, method: 'PayPal', status: 'Success', date: '2025-01-10' },
  { id: 2, transactionId: 'TX12346', amount: 150, method: 'Stripe', status: 'Failed', date: '2025-01-12' },
  { id: 3, transactionId: 'TX12347', amount: 75, method: 'PayPal', status: 'Success', date: '2025-01-15' },
];

const PaymentManagement = () => {
  const [paymentMethods, setPaymentMethods] = useState(paymentMethodsData);
  const [transactions, setTransactions] = useState(transactionHistoryData);
  const [newPaymentMethod, setNewPaymentMethod] = useState('');
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleTogglePaymentMethod = (id) => {
    setPaymentMethods(
      paymentMethods.map((method) =>
        method.id === id ? { ...method, isEnabled: !method.isEnabled } : method
      )
    );
  };

  const handleAddPaymentMethod = () => {
    if (newPaymentMethod) {
      const newMethod = {
        id: paymentMethods.length + 1,
        name: newPaymentMethod,
        isEnabled: true,
      };
      setPaymentMethods([...paymentMethods, newMethod]);
      setNewPaymentMethod('');
    }
  };

  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleCloseTransactionDetails = () => {
    setSelectedTransaction(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Management</h2>

      {/* Payment Methods Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Payment Methods</h3>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div key={method.id} className="flex items-center justify-between">
              <span className="text-gray-700">{method.name}</span>
              <button
                onClick={() => handleTogglePaymentMethod(method.id)}
                className={`px-4 py-2 rounded ${
                  method.isEnabled ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
                }`}
              >
                {method.isEnabled ? 'Disable' : 'Enable'}
              </button>
            </div>
          ))}
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded w-full"
              placeholder="New Payment Method"
              value={newPaymentMethod}
              onChange={(e) => setNewPaymentMethod(e.target.value)}
            />
            <button
              onClick={handleAddPaymentMethod}
              className="ml-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Payment Method
            </button>
          </div>
        </div>
      </div>

      {/* Transaction History Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4">Transaction History</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto mb-6">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Transaction ID</th>
                <th className="px-4 py-2 border">Amount</th>
                <th className="px-4 py-2 border">Payment Method</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.transactionId}
                  onClick={() => handleTransactionClick(transaction)}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <td className="px-4 py-2 border">{transaction.transactionId}</td>
                  <td className="px-4 py-2 border">${transaction.amount}</td>
                  <td className="px-4 py-2 border">{transaction.method}</td>
                  <td className="px-4 py-2 border">
                    <span
                      className={`px-2 py-1 rounded-full text-white ${
                        transaction.status === 'Success' ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 border">{transaction.date}</td>
                  <td className="px-4 py-2 border text-blue-500">Details</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transaction Details Modal */}
      {selectedTransaction && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Transaction Details: {selectedTransaction.transactionId}
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Amount:</span>
                <span className="text-gray-700">${selectedTransaction.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Payment Method:</span>
                <span className="text-gray-700">{selectedTransaction.method}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Status:</span>
                <span
                  className={`px-2 py-1 rounded-full text-white ${
                    selectedTransaction.status === 'Success' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                >
                  {selectedTransaction.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Date:</span>
                <span className="text-gray-700">{selectedTransaction.date}</span>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={handleCloseTransactionDetails}
                className="bg-gray-300 text-black px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentManagement;
