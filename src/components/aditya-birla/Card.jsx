import React from "react";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-xs w-full bg-zinc-100  rounded-lg overflow-hidden p-6">
      {/* Image Section */}
      <div className="bg-zinc-200 w-fit p-2 rounded-lg">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-48 object-cover"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        )}
      </div>

      {/* Content Section */}
      <div className="">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-600">{title}</h2>

        {/* Description */}
        <p className="mt-2 text-gray-600 text-xl font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
