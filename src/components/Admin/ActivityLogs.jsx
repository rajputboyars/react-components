import React, { useState } from 'react';

// Simulated log data
const initialUserActivityLogs = [
  { id: 1, action: 'Admin logged in', timestamp: '2025-01-21 10:00 AM' },
  { id: 2, action: 'User JohnDoe logged in', timestamp: '2025-01-21 11:00 AM' },
  { id: 3, action: 'Admin logged out', timestamp: '2025-01-21 11:30 AM' },
];

const initialActionLogs = [
  { id: 1, action: 'Product "Winter Jacket" updated', timestamp: '2025-01-21 09:00 AM' },
  { id: 2, action: 'User "JaneDoe" deleted', timestamp: '2025-01-21 10:15 AM' },
  { id: 3, action: 'Order #12345 marked as shipped', timestamp: '2025-01-21 11:05 AM' },
];

const ActivityLogs = () => {
  // State for Activity Logs
  const [userActivityLogs, setUserActivityLogs] = useState(initialUserActivityLogs);
  const [actionLogs, setActionLogs] = useState(initialActionLogs);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Activity Logs</h2>

      {/* User Activity Logs */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">User Activity Log</h3>
        
        {/* User Activity Log List */}
        <div className="space-y-4">
          {userActivityLogs.map((log) => (
            <div key={log.id} className="p-4 border border-gray-300 rounded mb-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-800">{log.action}</p>
                <span className="text-sm text-gray-500">{log.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Logs */}
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4">Action Logs</h3>
        
        {/* Action Log List */}
        <div className="space-y-4">
          {actionLogs.map((log) => (
            <div key={log.id} className="p-4 border border-gray-300 rounded mb-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-800">{log.action}</p>
                <span className="text-sm text-gray-500">{log.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityLogs;
