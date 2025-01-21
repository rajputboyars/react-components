import React, { useState } from 'react';

// Simulate authentication states
const initialState = {
  isAuthenticated: false,
  is2FAEnabled: false,
  ipWhitelist: ['192.168.1.1', '203.0.113.5'],
  ipBlacklist: ['198.51.100.2'],
};

const SecurityAndAuthentication = () => {
  const [authState, setAuthState] = useState(initialState);
  const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });
  const [otp, setOtp] = useState('');
  const [ip, setIp] = useState('');
  const [isTwoFA, setIsTwoFA] = useState(false);

  // Handle login input changes
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  // Handle OTP input change
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  // Simulate login
  const handleLogin = () => {
    // Here, you should add the logic for secure password validation
    if (loginDetails.username === 'admin' && loginDetails.password === 'password123') {
      setAuthState({ ...authState, isAuthenticated: true });
      setIsTwoFA(true); // Assume 2FA is enabled for the demo.
    } else {
      alert('Invalid credentials!');
    }
  };

  // Simulate logout
  const handleLogout = () => {
    setAuthState({ ...authState, isAuthenticated: false });
    setIsTwoFA(false);
  };

  // Simulate OTP verification
  const verifyOtp = () => {
    if (otp === '123456') { // Assume OTP verification is successful with '123456'
      alert('2FA verification successful!');
      setIsTwoFA(false); // Reset 2FA
    } else {
      alert('Invalid OTP!');
    }
  };

  // Handle IP Whitelisting and Blacklisting
  const handleIpChange = (e) => {
    setIp(e.target.value);
  };

  const handleWhitelistIp = () => {
    if (!authState.ipWhitelist.includes(ip)) {
      alert('IP added to the whitelist!');
      authState.ipWhitelist.push(ip);
    } else {
      alert('IP already whitelisted!');
    }
  };

  const handleBlacklistIp = () => {
    if (!authState.ipBlacklist.includes(ip)) {
      alert('IP added to the blacklist!');
      authState.ipBlacklist.push(ip);
    } else {
      alert('IP already blacklisted!');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Security & Authentication</h2>

      {!authState.isAuthenticated ? (
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Admin Login</h3>
          <div className="space-y-4 mb-6">
            <input
              type="text"
              name="username"
              value={loginDetails.username}
              onChange={handleLoginChange}
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              name="password"
              value={loginDetails.password}
              onChange={handleLoginChange}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-6 py-2 rounded"
            >
              Login
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Admin Dashboard</h3>
          {!isTwoFA ? (
            <div>
              <p className="text-green-600 mb-4">You are successfully logged in!</p>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-2 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-4">Two-Factor Authentication (2FA)</h4>
              <input
                type="text"
                value={otp}
                onChange={handleOtpChange}
                placeholder="Enter OTP"
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <button
                onClick={verifyOtp}
                className="bg-blue-500 text-white px-6 py-2 rounded"
              >
                Verify OTP
              </button>
            </div>
          )}
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">IP Whitelisting & Blacklisting</h3>
        <div className="space-y-4 mb-6">
          <input
            type="text"
            value={ip}
            onChange={handleIpChange}
            placeholder="Enter IP Address"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <div className="flex space-x-2">
            <button
              onClick={handleWhitelistIp}
              className="bg-green-500 text-white px-6 py-2 rounded"
            >
              Whitelist IP
            </button>
            <button
              onClick={handleBlacklistIp}
              className="bg-red-500 text-white px-6 py-2 rounded"
            >
              Blacklist IP
            </button>
          </div>
        </div>
        <div className="mt-4">
          <h5 className="font-medium text-gray-800">Whitelisted IPs:</h5>
          <ul>
            {authState.ipWhitelist.map((ip, index) => (
              <li key={index} className="text-gray-600">{ip}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h5 className="font-medium text-gray-800">Blacklisted IPs:</h5>
          <ul>
            {authState.ipBlacklist.map((ip, index) => (
              <li key={index} className="text-gray-600">{ip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecurityAndAuthentication;
