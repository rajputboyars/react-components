import React from "react";

const BrandCard = ({ name, image, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <div className="w-full h-48 bg-gray-200">
        {/* Placeholder for the image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => (e.target.src = "https://via.placeholder.com/150")} // Fallback image
        />
      </div>

      {/* Brand Name and Button */}
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <a
          href={link}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <span>Know More</span>
          <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
        </a>
      </div>
    </div>
  );
};

export default BrandCard;