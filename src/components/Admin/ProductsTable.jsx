import React, { useState } from 'react';

const ProductsTable = ({ products, onSelectProduct, onDeleteProduct, onBulkDelete, onBulkUpdatePrice, selectedProducts, setSelectedProducts }) => {
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');

    // Filtered products based on search term
    const filteredProducts = products.filter((product) => {
        const searchTermLower = searchTerm.toLowerCase();
      
        // Filter by name, price, stock, or status
        return (
          product.name.toLowerCase().includes(searchTermLower) ||
          product.price.toString().toLowerCase().includes(searchTermLower) ||
          product.stock.toString().toLowerCase().includes(searchTermLower) ||
          product.status?.toLowerCase().includes(searchTermLower)
        );
      });

    // Pagination logic
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Total pages
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Handle items per page change
    const handleItemsPerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page when items per page change
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page when search term changes
    };

    return (
        <div className='bg-white p-8 rounded-md border shadow-lg mb-8'>
            {/* Search Input */}
            <div className="mb-4 flex justify-between">
                <select
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                    className="border p-2 rounded"
                >
                    <option value={10}>10 item per page</option>
                    <option value={20}>20 item per page</option>
                    <option value={30}>30 item per page</option>
                </select>
                <input
                    type="text"
                    className="border p-2 rounded"
                    placeholder="Search by product name..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="overflow-x-auto mb-6">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Select</th>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Stock</th>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProducts.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-100">
                                <td className="px-4 py-2 border">
                                    <input
                                        type="checkbox"
                                        checked={selectedProducts.includes(product.id)}
                                        onChange={() =>
                                            setSelectedProducts((prevSelected) =>
                                                prevSelected.includes(product.id)
                                                    ? prevSelected.filter((id) => id !== product.id)
                                                    : [...prevSelected, product.id]
                                            )
                                        }
                                    />
                                </td>
                                <td
                                    className="px-4 py-2 border cursor-pointer"
                                    onClick={() => onSelectProduct(product)}
                                >
                                    {product.name}
                                </td>
                                <td className="px-4 py-2 border">{product.price}</td>
                                <td className="px-4 py-2 border">{product.stock}</td>
                                <td className="px-4 py-2 border">{product.status}</td>
                                <td className="px-4 py-2 border">
                                    <button
                                        onClick={() => onSelectProduct(product)}
                                        className="text-blue-600"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => onDeleteProduct(product.id)}
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

            {/* Pagination and Items per page */}
            <div className="flex justify-between items-center">
                <div>
                    <span>
                        Showing {indexOfFirstProduct + 1} to {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
                    </span>
                </div>
                <div className="flex items-center space-x-2">


                    <div>
                        <button
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                        >
                            Prev
                        </button>
                        <span className="px-4 py-2">{currentPage} / {totalPages}</span>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsTable;
