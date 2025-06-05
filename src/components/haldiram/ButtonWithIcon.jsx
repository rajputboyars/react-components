import React from "react";

const ButtonWithIcon = ({ text, icon, link }) => {
  return (
    <a
      href={link}
      className="flex items-center gap-2 py-1 text-[#8B5E3C] text-lg leading-[24px]  hover:bg-gray-200 transition"
    >
      <span>{text}</span>
      {icon === "download" && (
        <div className="w-6 h-6  bg-[#8B5E3C] rounded-full flex justify-center items-center">
          <svg
            className="w-3 h-3 text-white "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 16v-8m0 0l-4 4m4-4l4 4"
            />
          </svg>
        </div>
      )}
      {icon === "circle" && (
        <div className="w-6 h-6  bg-[#8B5E3C] rounded-full flex justify-center items-center"></div>
      )}
    </a>
  );
};

export default ButtonWithIcon;
