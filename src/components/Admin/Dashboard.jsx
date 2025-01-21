import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Data for Sales Trends (Line Chart)
  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [500, 1000, 1500, 2000, 2500, 3000],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const salesOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Sales Trends (Last 6 months)',
      },
    },
  };

  // Data for Recent Activity (Bar Chart)
  const recentActivityData = {
    labels: ['Product Views', 'Add to Cart', 'Purchases', 'Returned', 'Abandoned Carts'],
    datasets: [
      {
        label: 'Recent Activity',
        data: [5000, 3000, 1500, 200, 800],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const activityOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Recent Activity',
      },
    },
  };

  // Website stats
  const stats = [
    { label: 'Total Sales', value: '$50,000' },
    { label: 'Total Orders', value: '1,250' },
    { label: 'Total Products', value: '150' },
    { label: 'Total Users', value: '3,000' },
  ];

  return (
    <div className=" p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Overview Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-lg text-gray-500">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Links Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#products" className="bg-blue-500 text-white p-4 rounded-lg text-center shadow-md hover:bg-blue-600">
              <p className="text-xl">Product Management</p>
            </a>
            <a href="#users" className="bg-green-500 text-white p-4 rounded-lg text-center shadow-md hover:bg-green-600">
              <p className="text-xl">User Management</p>
            </a>
            <a href="#orders" className="bg-yellow-500 text-white p-4 rounded-lg text-center shadow-md hover:bg-yellow-600">
              <p className="text-xl">Order Management</p>
            </a>
            <a href="#reports" className="bg-purple-500 text-white p-4 rounded-lg text-center shadow-md hover:bg-purple-600">
              <p className="text-xl">View Reports</p>
            </a>
          </div>
        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Trends Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Line data={salesData} options={salesOptions} />
          </div>

          {/* Recent Activity Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Bar data={recentActivityData} options={activityOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
