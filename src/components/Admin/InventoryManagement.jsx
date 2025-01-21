import React, { useState } from 'react';

// Sample initial data for products
const initialProducts = [
  { id: 1, name: 'Product 1', stock: 50, price: 30, sales: 100 },
  { id: 2, name: 'Product 2', stock: 10, price: 20, sales: 45 },
  { id: 3, name: 'Product 3', stock: 3, price: 50, sales: 80 },
  { id: 4, name: 'Product 4', stock: 20, price: 15, sales: 200 },
  { id: 5, name: 'Product 5', stock: 100, price: 25, sales: 350 },
];

const InventoryManagement = () => {
  const [products, setProducts] = useState(initialProducts);
  const [updatedStock, setUpdatedStock] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleUpdateStock = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, stock: updatedStock } : product
      )
    );
    setUpdatedStock(0);
  };

  const handleLowStockAlert = (stock) => {
    return stock <= 5 ? (
      <span className="text-red-600 font-bold">Low Stock</span>
    ) : (
      <span className="text-green-600">In Stock</span>
    );
  };

  const handleViewInventoryReport = () => {
    const totalSales = products.reduce((acc, product) => acc + product.sales, 0);
    const totalStock = products.reduce((acc, product) => acc + product.stock, 0);
    const avgStock = totalStock / products.length;
    const avgSales = totalSales / products.length;

    alert(
      `Inventory Report:\n- Total Products: ${products.length}\n- Total Stock: ${totalStock}\n- Average Stock: ${avgStock}\n- Total Sales: ${totalSales}\n- Average Sales per Product: ${avgSales}`
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Inventory Management</h2>

      {/* Inventory Report */}
      <div className="mb-6">
        <button
          onClick={handleViewInventoryReport}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          View Inventory Report
        </button>
      </div>

      {/* Product List */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Product List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Product Name</th>
                <th className="px-4 py-2 border">Stock</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Sales</th>
                <th className="px-4 py-2 border">Low Stock Alert</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-4 py-2 border">{product.name}</td>
                  <td className="px-4 py-2 border">{product.stock}</td>
                  <td className="px-4 py-2 border">${product.price}</td>
                  <td className="px-4 py-2 border">{product.sales}</td>
                  <td className="px-4 py-2 border">
                    {handleLowStockAlert(product.stock)}
                  </td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="text-blue-600"
                    >
                      Update Stock
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Stock Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Update Stock for {selectedProduct.name}
            </h3>
            <div className="space-y-4">
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                value={updatedStock}
                onChange={(e) => setUpdatedStock(Number(e.target.value))}
                placeholder="Enter new stock"
              />
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => handleUpdateStock(selectedProduct.id)}
              >
                Update Stock
              </button>
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded mt-2"
                onClick={() => setSelectedProduct(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryManagement;
