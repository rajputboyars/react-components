import React, { useState } from 'react';

// Sample initial data for categories
const initialCategories = [
  { id: 1, name: 'Electronics', subcategories: ['Mobile Phones', 'Laptops'] },
  { id: 2, name: 'Clothing', subcategories: ['Shirts', 'Pants'] },
  { id: 3, name: 'Home Appliances', subcategories: ['Washing Machines', 'Refrigerators'] },
];

const CategoryManagement = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [categoryName, setCategoryName] = useState('');
  const [subcategoryName, setSubcategoryName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddCategory = () => {
    if (categoryName) {
      setCategories([
        ...categories,
        { id: categories.length + 1, name: categoryName, subcategories: [] },
      ]);
      setCategoryName('');
    }
  };

  const handleEditCategory = (id) => {
    setSelectedCategory(categories.find((category) => category.id === id));
  };

  const handleUpdateCategory = () => {
    setCategories(
      categories.map((category) =>
        category.id === selectedCategory.id
          ? { ...category, name: categoryName, subcategories: selectedCategory.subcategories }
          : category
      )
    );
    setSelectedCategory(null);
    setCategoryName('');
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  const handleAddSubcategory = (categoryId) => {
    if (subcategoryName) {
      setCategories(
        categories.map((category) =>
          category.id === categoryId
            ? { ...category, subcategories: [...category.subcategories, subcategoryName] }
            : category
        )
      );
      setSubcategoryName('');
    }
  };

  const handleCategoryAssignment = (categoryId, productId) => {
    // Assuming you will integrate product-category assignment logic here.
    // This method would assign the product to the category.
    console.log(`Assigning product ${productId} to category ${categoryId}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Category Management</h2>

      {/* Add Category */}
      <div className="mb-6">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded w-full mb-2"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button
          onClick={handleAddCategory}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Category
        </button>
      </div>

      {/* Category List */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Category List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Category Name</th>
                <th className="px-4 py-2 border">Subcategories</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="px-4 py-2 border">{category.name}</td>
                  <td className="px-4 py-2 border">
                    {category.subcategories.length > 0
                      ? category.subcategories.join(', ')
                      : 'No subcategories'}
                  </td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleEditCategory(category.id)}
                      className="text-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(category.id)}
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

      {/* Edit Category Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Edit Category: {selectedCategory.name}
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Category Name"
              />
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  value={subcategoryName}
                  onChange={(e) => setSubcategoryName(e.target.value)}
                  placeholder="Add Subcategory"
                />
                <button
                  onClick={() => handleAddSubcategory(selectedCategory.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add Subcategory
                </button>
              </div>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleUpdateCategory}
              >
                Update Category
              </button>
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded mt-2"
                onClick={() => setSelectedCategory(null)}
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

export default CategoryManagement;
