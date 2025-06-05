import React from "react";
import BrandCard from "./BrandCard";
// import data from "../brandsData.json";

const BrandSearchSection = ({ title, filters, brands }) => {
  return (
    <div className="py-10 p-4 bg-gray-100 min-h-screen w-full">
      {/* Title */}
      <h1 className="text-[24px] leading-[24px] mb-10">
        {title}
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search here"
            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === "Popular"
                ? "bg-pink-100 text-pink-600"
                : "bg-gray-200 text-gray-700"
            } hover:bg-gray-300 transition`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Brand Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {brands.map((brand, index) => (
          <BrandCard
            key={index}
            name={brand.name}
            image={brand.image}
            link={brand.link}
          />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-200 transition">
          Load More
        </button>
      </div>
    </div>
  );
};

export default BrandSearchSection;