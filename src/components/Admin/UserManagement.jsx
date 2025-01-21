import React, { useState } from 'react';

// Sample initial data
const initialUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', registrationDate: '2022-01-01' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Customer', registrationDate: '2023-05-15' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Customer', registrationDate: '2023-08-20' },
  // Add more users as necessary
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Customer',
  });
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.password) {
      alert("Please fill all fields.");
      return;
    }
    const newUserData = { ...newUser, id: users.length + 1, registrationDate: new Date().toISOString().split('T')[0] };
    setUsers([...users, newUserData]);
    setNewUser({ name: '', email: '', password: '', role: 'Customer' });
    setShowAddUserModal(false);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleBulkDelete = () => {
    setUsers(users.filter((user) => !selectedUsers.includes(user.id)));
    setSelectedUsers([]);
  };

  const handleUpdateUser = (id) => {
    const userToUpdate = users.find((user) => user.id === id);
    setSelectedUser(userToUpdate);
    setShowUserDetailsModal(true);
  };

  const handleSaveUpdatedUser = () => {
    setUsers(
      users.map((user) => (user.id === selectedUser.id ? selectedUser : user))
    );
    setSelectedUser(null);
    setShowUserDetailsModal(false);
  };

  const handleRoleChange = (e) => {
    setSelectedUser({ ...selectedUser, role: e.target.value });
  };

  const handleBulkRoleChange = () => {
    const newRole = prompt('Enter new role for selected users (e.g., Admin, Customer):');
    if (newRole) {
      setUsers(
        users.map((user) =>
          selectedUsers.includes(user.id) ? { ...user, role: newRole } : user
        )
      );
      setSelectedUsers([]);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when search term changes
  };

  // Filtered users based on search term
  const filteredUsers = users.filter((user) => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Total pages
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* Page Title and Add New User Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">User Management</h2>
        <button
          onClick={() => setShowAddUserModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add New User
        </button>
      </div>

      {/* Add New User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Add New User</h3>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              />
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              />
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              >
                <option value="Customer">Customer</option>
                <option value="Admin">Admin</option>
              </select>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                onClick={handleAddUser}
              >
                Add User
              </button>
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded mt-4 ml-2"
                onClick={() => setShowAddUserModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search Input and Items per Page Dropdown */}
      <div className="mb-6 flex items-center space-x-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Search by name, email, or role..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="border p-2 rounded"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Select</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Registration Date</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="cursor-pointer" onClick={() => handleUpdateUser(user.id)}>
                <td className="px-4 py-2 border">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() =>
                      setSelectedUsers((prevSelected) =>
                        prevSelected.includes(user.id)
                          ? prevSelected.filter((id) => id !== user.id)
                          : [...prevSelected, user.id]
                      )
                    }
                  />
                </td>
                <td className="px-4 py-2 border">{user.name}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">{user.role}</td>
                <td className="px-4 py-2 border">{user.registrationDate}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUpdateUser(user.id);
                    }}
                    className="text-blue-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteUser(user.id);
                    }}
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

      {/* Pagination and Items Display */}
      <div className="flex justify-between items-center">
        <div>
          <span>
            Showing {indexOfFirstUser + 1} to {Math.min(indexOfLastUser, filteredUsers.length)} of {filteredUsers.length} users
          </span>
        </div>
        <div className="flex items-center space-x-2">
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

      {/* Single User Details Modal */}
      {showUserDetailsModal && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-medium text-gray-800 mb-4">Update User</h3>
            <div className="space-y-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedUser.name}
                onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
              />
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedUser.email}
                onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
              />
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedUser.role}
                onChange={handleRoleChange}
              >
                <option value="Customer">Customer</option>
                <option value="Admin">Admin</option>
              </select>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                onClick={handleSaveUpdatedUser}
              >
                Save Changes
              </button>
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded mt-4 ml-2"
                onClick={() => setShowUserDetailsModal(false)}
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

export default UserManagement;
