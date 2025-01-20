import React, { useState } from 'react';

const AllProducts = () => {
  // Simulated products data (20 products)
  const allProducts = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: (Math.random() * 100).toFixed(2),
    quantity: Math.floor(Math.random() * 100) + 1,
    sale: Math.floor(Math.random() * 100) + 1,
    stock: Math.floor(Math.random() * 100) + 1,
  }));

  // State for handling pagination and page size
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const startIndex = (page - 1) * itemsPerPage;
  const selectedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="p-6 bg-zinc-100 space-y-5">
      {/* Header Section */}
      <h2 className="text-2xl font-semibold">All Products</h2>

      <div className='shadow-lg bg-white p-8 rounded-md border'>
        <div className="flex items-center justify-between mb-4">
          {/* Search Input and Items Per Page Dropdown */}
          <div className="flex items-center justify-between space-x-4 w-full">
            {/* Items per Page Dropdown */}
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="border border-gray-300 p-2 rounded-md"
            >
              <option value={10}>10 items per page</option>
              <option value={20}>20 items per page</option>
              <option value={30}>30 items per page</option>
            </select>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search Products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 p-2 rounded-md md:min-w-96"
            />

            {/* Add New Product Button */}
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
              Add New
            </button>
          </div>
        </div>

        {/* Table of Products */}
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className='text-left'>
              <th className="border-b px-4 py-2">Product</th>
              <th className="border-b px-4 py-2">Product ID</th>
              <th className="border-b px-4 py-2">Price</th>
              <th className="border-b px-4 py-2">Quantity</th>
              <th className="border-b px-4 py-2">Sale</th>
              <th className="border-b px-4 py-2">Stock</th>
            </tr>
          </thead>
          <tbody>
            {selectedProducts.map((product) => (
              <tr key={product.id}>
                <td className="border-b px-4 py-2">{product.name}</td>
                <td className="border-b px-4 py-2">{product.id}</td>
                <td className="border-b px-4 py-2">${product.price}</td>
                <td className="border-b px-4 py-2">{product.quantity}</td>
                <td className="border-b px-4 py-2">{product.sale}</td>
                <td className="border-b px-4 py-2">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination and Entries Display */}
        <div className="flex items-center justify-between mt-4">
          {/* Entries Showing Text */}
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1} to {startIndex + selectedProducts.length} of {filteredProducts.length} entries
          </div>

          {/* Pagination Buttons */}
          <div className="space-x-2">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AllProducts;
