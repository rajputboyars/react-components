import React, { useState } from 'react';

// Simulated notification data
const initialAdminNotifications = [
  { id: 1, message: 'Stock for Product "Winter Jacket" is running low.', timestamp: '2025-01-21 09:30 AM' },
  { id: 2, message: 'Order #12345 has been shipped.', timestamp: '2025-01-21 10:00 AM' },
  { id: 3, message: 'Price update for "Sports Shoes" completed.', timestamp: '2025-01-21 10:45 AM' },
];

const initialUserNotifications = [
  { id: 1, message: 'Your order #12345 has been shipped.', status: 'unread' },
  { id: 2, message: 'Promotion: Get 20% off on all winter wear!', status: 'read' },
  { id: 3, message: 'Your order #12346 has been delivered.', status: 'unread' },
];

const NotificationsAndAlerts = () => {
  // State for Admin and User Notifications
  const [adminNotifications, setAdminNotifications] = useState(initialAdminNotifications);
  const [userNotifications, setUserNotifications] = useState(initialUserNotifications);

  // Mark user notifications as read
  const markUserNotificationAsRead = (id) => {
    setUserNotifications(userNotifications.map((notif) =>
      notif.id === id ? { ...notif, status: 'read' } : notif
    ));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Notifications and Alerts</h2>

      {/* Admin Notifications */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Admin Notifications</h3>

        {/* Admin Notifications List */}
        <div className="space-y-4">
          {adminNotifications.map((notif) => (
            <div key={notif.id} className="p-4 border border-gray-300 rounded mb-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-800">{notif.message}</p>
                <span className="text-sm text-gray-500">{notif.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Notifications */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4">User Notifications</h3>

        {/* User Notifications List */}
        <div className="space-y-4">
          {userNotifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-4 border border-gray-300 rounded mb-4 ${notif.status === 'unread' ? 'bg-yellow-100' : 'bg-white'}`}
            >
              <div className="flex items-center justify-between">
                <p className={`text-gray-800 ${notif.status === 'unread' ? 'font-semibold' : ''}`}>
                  {notif.message}
                </p>
                <span className="text-sm text-gray-500">{notif.status === 'unread' ? 'New' : 'Read'}</span>
              </div>
              {notif.status === 'unread' && (
                <button
                  onClick={() => markUserNotificationAsRead(notif.id)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Mark as Read
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsAndAlerts;
