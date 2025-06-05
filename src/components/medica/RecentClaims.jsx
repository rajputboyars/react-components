import React from 'react';

// Reusable ClaimCard component
const ClaimCard = ({ provider, member, serviceDate, status })=> {
  // Determine status pill styling based on status
  const statusClasses = {
    Approved: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Denied: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between h-full">
      <div>
        <p className="text-gray-500 text-sm mb-1">Provider {provider}</p>
        {/* <h3 className="text-gray-800 font-medium mb-3 truncate">{provider}</h3> */}
        <p className="text-gray-500 text-sm mb-1">Member {member}</p>
        {/* <p className="text-gray-800 font-medium mb-3">{member}</p> */}
        <p className="text-gray-500 text-sm mb-1">Service Date {serviceDate}</p>
        {/* <p className="text-gray-800 font-medium mb-4">{serviceDate}</p> */}
      </div>
      <div className="flex items-center justify-between">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusClasses[status]}`}
        >
          {status}
        </span>
        <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

// Main RecentClaims component
export default function RecentClaims() {
  const claims = [
    {
      provider: 'North Suburban Pediatrics, S....',
      member: 'John Doe',
      serviceDate: '03/20/2025',
      status: 'Approved',
    },
    {
      provider: 'North Suburban Pediatrics, S....',
      member: 'John Doe',
      serviceDate: '03/20/2025',
      status: 'Pending',
    },
    {
      provider: 'North Suburban Pediatrics, S....',
      member: 'John Doe',
      serviceDate: '03/20/2025',
      status: 'Denied',
    },
  ];

  return (
    <div className="container mx-auto p-4 sm:p-8 bg-gray-100 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">My Recent Claims</h2>
        <a href="#" className="flex items-center text-purple-700 hover:text-purple-800 font-semibold">
          View All Claims
          <svg
            className="ml-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {claims.map((claim, index) => (
          <ClaimCard
            key={index}
            provider={claim.provider}
            member={claim.member}
            serviceDate={claim.serviceDate}
            status={claim.status}
          />
        ))}
      </div>
    </div>
  );
}
