import React, { useState } from 'react';

// Sample data for Blog/News Posts and Static Pages
const initialBlogPosts = [
  { id: 1, title: 'New Year Sale', content: 'Big discounts on our store this New Year!', date: '2025-01-01' },
  { id: 2, title: 'Winter Collection', content: 'Check out our exclusive winter collection!', date: '2025-01-10' },
];

const initialStaticPages = [
  { id: 1, title: 'About Us', content: 'We are a leading e-commerce platform providing the best products.' },
  { id: 2, title: 'Contact Us', content: 'You can reach us at support@myecommerce.com' },
];

const ContentManagement = () => {
  // State for Blog/News Management
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [newBlogPost, setNewBlogPost] = useState({ title: '', content: '' });
  const [editingPost, setEditingPost] = useState(null);

  // State for Page Builder
  const [staticPages, setStaticPages] = useState(initialStaticPages);
  const [newPage, setNewPage] = useState({ title: '', content: '' });
  const [editingPage, setEditingPage] = useState(null);

  // Handle blog post changes
  const handleBlogPostChange = (e) => {
    const { name, value } = e.target;
    setNewBlogPost({ ...newBlogPost, [name]: value });
  };

  const handlePageChange = (e) => {
    const { name, value } = e.target;
    setNewPage({ ...newPage, [name]: value });
  };

  // Handle add, edit, and delete blog posts
  const handleAddBlogPost = () => {
    if (newBlogPost.title && newBlogPost.content) {
      const newPost = {
        id: blogPosts.length + 1,
        title: newBlogPost.title,
        content: newBlogPost.content,
        date: new Date().toLocaleDateString(),
      };
      setBlogPosts([...blogPosts, newPost]);
      setNewBlogPost({ title: '', content: '' });
    }
  };

  const handleEditBlogPost = (id) => {
    const post = blogPosts.find((post) => post.id === id);
    setNewBlogPost({ title: post.title, content: post.content });
    setEditingPost(id);
  };

  const handleDeleteBlogPost = (id) => {
    setBlogPosts(blogPosts.filter((post) => post.id !== id));
  };

  // Handle add, edit, and delete static pages
  const handleAddPage = () => {
    if (newPage.title && newPage.content) {
      const newPageData = {
        id: staticPages.length + 1,
        title: newPage.title,
        content: newPage.content,
      };
      setStaticPages([...staticPages, newPageData]);
      setNewPage({ title: '', content: '' });
    }
  };

  const handleEditPage = (id) => {
    const page = staticPages.find((page) => page.id === id);
    setNewPage({ title: page.title, content: page.content });
    setEditingPage(id);
  };

  const handleDeletePage = (id) => {
    setStaticPages(staticPages.filter((page) => page.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Content Management</h2>

      {/* Blog/News Management */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Blog/News Management</h3>

        {/* Blog Post Form */}
        <div className="space-y-4 mb-6">
          <input
            type="text"
            name="title"
            value={newBlogPost.title}
            onChange={handleBlogPostChange}
            placeholder="Enter Post Title"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="content"
            value={newBlogPost.content}
            onChange={handleBlogPostChange}
            placeholder="Enter Post Content"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleAddBlogPost}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            {editingPost ? 'Update Post' : 'Add Post'}
          </button>
        </div>

        {/* Blog Post List */}
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex items-center justify-between p-4 border border-gray-300 rounded mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{post.title}</h4>
                <p className="text-gray-600">{post.content}</p>
                <small className="text-gray-500">Posted on {post.date}</small>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEditBlogPost(post.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteBlogPost(post.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Static Pages Management */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4">Page Builder</h3>

        {/* Page Form */}
        <div className="space-y-4 mb-6">
          <input
            type="text"
            name="title"
            value={newPage.title}
            onChange={handlePageChange}
            placeholder="Enter Page Title (e.g., About Us)"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="content"
            value={newPage.content}
            onChange={handlePageChange}
            placeholder="Enter Page Content"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleAddPage}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            {editingPage ? 'Update Page' : 'Add Page'}
          </button>
        </div>

        {/* Static Pages List */}
        <div className="space-y-4">
          {staticPages.map((page) => (
            <div key={page.id} className="flex items-center justify-between p-4 border border-gray-300 rounded mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{page.title}</h4>
                <p className="text-gray-600">{page.content}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEditPage(page.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePage(page.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentManagement;
