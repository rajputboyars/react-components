import React, { useState, useEffect } from 'react';
import ProductsTable from './ProductsTable';
import data from "../../data.json"
const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    stock: '',
    description: '',
    categories: '',
    images: '',
    status: 'Active',
  });
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showUpdateProductModal, setShowUpdateProductModal] = useState(false);

  useEffect(() => {
    setProducts(data)
    // Simulating fetching data from a JSON file
    // fetch(data)
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));
  }, []);

  const handleAddProduct = () => {
    const newProductData = {
      ...newProduct,
      id: products.length + 1, // Auto-generate an ID
      categories: newProduct.categories.split(',').map((category) => category.trim()),
      images: newProduct.images.split(',').map((image) => image.trim()),
    };
    setProducts([...products, newProductData]);
    setNewProduct({
      name: '',
      price: '',
      stock: '',
      description: '',
      categories: '',
      images: '',
      status: 'Active',
    });
    setShowAddProductModal(false);
  };

  const handleUpdateProduct = () => {
    const updatedProduct = {
      ...selectedProduct,
      categories: selectedProduct.categories.split(',').map((category) => category.trim()),
      images: selectedProduct.images.split(',').map((image) => image.trim()),
    };
    setProducts(products.map((product) => (product.id === selectedProduct.id ? updatedProduct : product)));
    setShowUpdateProductModal(false);
    setSelectedProduct(null);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleBulkDelete = () => {
    setProducts(products.filter((product) => !selectedProducts.includes(product.id)));
    setSelectedProducts([]);
  };

  const handleBulkUpdatePrice = () => {
    const newPrice = prompt('Enter the new price for selected products:');
    if (newPrice) {
      setProducts(
        products.map((product) =>
          selectedProducts.includes(product.id) ? { ...product, price: newPrice } : product
        )
      );
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setShowUpdateProductModal(true);
  };

  return (
    <div className="p-6">
      <div className='flex justify-between pb-4'>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Product Management</h2>
        <button
          onClick={() => setShowAddProductModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      {/* Add Product Modal */}
      {showAddProductModal && (
        <div className="modal bg-black bg-opacity-95 z-20 w-screen fixed top-0 left-0 h-screen flex justify-center items-center">
          <div className="modal-content bg-white bg-opacity-100 rounded-lg p-8 pt-4">
            <div className='flex justify-between items-center relative pb-4'>
              <h3 className="text-3xl font-medium text-gray-800">Add New Product</h3>
              <button
                className="text-red-600 font-extrabold absolute  right-0"
                onClick={() => setShowAddProductModal(false)}
              >
                X
              </button>
            </div>
            {/* Form for adding a new product */}
            <div className="space-y-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Stock Quantity"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
              />
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Description"
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              />
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Categories (comma separated)"
                value={newProduct.categories}
                onChange={(e) => setNewProduct({ ...newProduct, categories: e.target.value })}
              />
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Images (comma separated URLs)"
                value={newProduct.images}
                onChange={(e) => setNewProduct({ ...newProduct, images: e.target.value })}
              />
              <div className='flex gap-10'>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                  onClick={handleAddProduct}
                >
                  Add Product
                </button>
                <button
                  className="text-red-600 mt-4 border border-red-500 px-8 rounded-lg"
                  onClick={() => setShowAddProductModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Update Product Modal */}
      {showUpdateProductModal && selectedProduct && (
        <div className="modal bg-black bg-opacity-95 z-20 w-screen fixed top-0 left-0 h-screen flex justify-center items-center">
          <div className="modal-content bg-white bg-opacity-100 rounded-lg p-8 pt-4">
            <div className='flex justify-between items-center relative pb-4'>
              <h3 className="text-3xl font-medium text-gray-800 mb-3">Update Product</h3>
              <button
                className="text-red-600 font-extrabold absolute  right-0"
                onClick={() => setShowUpdateProductModal(false)}
              >
                X
              </button>
            </div>
            {/* Form for updating the product */}
            <div className="space-y-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedProduct.name}
                onChange={(e) =>
                  setSelectedProduct({ ...selectedProduct, name: e.target.value })
                }
              />
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedProduct.price}
                onChange={(e) =>
                  setSelectedProduct({ ...selectedProduct, price: e.target.value })
                }
              />
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedProduct.stock}
                onChange={(e) =>
                  setSelectedProduct({ ...selectedProduct, stock: e.target.value })
                }
              />
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedProduct.description}
                onChange={(e) =>
                  setSelectedProduct({ ...selectedProduct, description: e.target.value })
                }
              />
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedProduct.categories}
                onChange={(e) =>
                  setSelectedProduct({ ...selectedProduct, categories: e.target.value })
                }
              />
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedProduct.images}
                onChange={(e) =>
                  setSelectedProduct({ ...selectedProduct, images: e.target.value })
                }
              />
              <div className='flex gap-10'>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                  onClick={handleUpdateProduct}
                >
                  Update Product
                </button>
                <button
                  className="text-red-600 mt-4 border border-red-500 px-8 py-2 rounded-lg"
                  onClick={() => setShowUpdateProductModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product List */}
      <ProductsTable
        products={products}
        onSelectProduct={handleSelectProduct}
        onDeleteProduct={handleDeleteProduct}
        onBulkDelete={handleBulkDelete}
        onBulkUpdatePrice={handleBulkUpdatePrice}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />

      {/* Bulk Actions */}
      <div className="mb-6 flex items-center space-x-4">
        <button
          onClick={handleBulkDelete}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete Selected
        </button>
        <button
          onClick={handleBulkUpdatePrice}
          className="bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Update Price for Selected
        </button>
      </div>

    </div>
  );
};

export default ProductManagement;
