import React, { useState } from 'react';

const AddNewProduct = () => {
    // States for form fields
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productSale, setProductSale] = useState('');
    const [productStock, setProductStock] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [message, setMessage] = useState('');

    // Handle file upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProductImage(URL.createObjectURL(file)); // Store a temporary URL for the image
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!productName || !productPrice || !productQuantity || !productSale || !productStock || !productImage) {
            setMessage('All fields are required.');
            return;
        }

        // Create a new product object
        const newProduct = {
            name: productName,
            price: parseFloat(productPrice),
            quantity: parseInt(productQuantity),
            sale: parseInt(productSale),
            stock: parseInt(productStock),
            imageUrl: productImage, // Temporary image URL
        };

        // Simulate saving the product (you would usually send this data to an API)
        console.log('New Product:', newProduct);

        // Clear form
        setProductName('');
        setProductPrice('');
        setProductQuantity('');
        setProductSale('');
        setProductStock('');
        setProductImage(null);
        setMessage('Product added successfully!');
    };

    return (
        <div className="p-6 bg-zinc-100 rounded-md">
            <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>
            <div className=' border rounded-lg p-8 shadow-lg bg-white'>
                {message && <p className="text-green-500 mb-4">{message}</p>}

                <form onSubmit={handleSubmit} className=" gap-8 grid grid-cols-1 md:grid-cols-2 ">
                    {/* Product Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Product Name</label>
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter product name"
                        />
                    </div>

                    {/* Product Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Product Price</label>
                        <input
                            type="number"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter product price"
                        />
                    </div>

                    {/* Product Quantity */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Product Quantity</label>
                        <input
                            type="number"
                            value={productQuantity}
                            onChange={(e) => setProductQuantity(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter product quantity"
                        />
                    </div>

                    {/* Product Sale */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Sale Percentage</label>
                        <input
                            type="number"
                            value={productSale}
                            onChange={(e) => setProductSale(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter sale percentage"
                        />
                    </div>

                    {/* Product Stock */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Product Stock</label>
                        <input
                            type="number"
                            value={productStock}
                            onChange={(e) => setProductStock(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Enter product stock"
                        />
                    </div>

                    {/* Product Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Product Image</label>
                        <input
                            type="file"
                            onChange={handleImageChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Preview Image */}
                    {productImage && (
                        <div className="mt-4">
                            <p className="text-sm font-medium text-gray-700">Preview Image:</p>
                            <img src={productImage} alt="Preview" className="w-32 h-32 object-cover mt-2 rounded-md" />
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                        Add Product
                    </button>
                </form>
            </div>

        </div>
    );
};

export default AddNewProduct;
