import React from "react";
import Synergies from "../../../public/haldiram/synergiesIcon.png";

const SynergyCard = ({ title, description }) => {
  return (
    <div className="bg-[#FFF5F0] px-4 py-6 rounded-[20px] shadow-md flex flex-col">
      {/* Placeholder for the icon (you can replace this with an actual icon or image) */}
      <div className=" mb-4 flex items-center justify-between">
        <h3 className="text-[24px] leading-[32px] font-bold text-red-600 mb-2">
          {title}
        </h3>
        <div className="w-[64px] h-[64px] flex justify-center items-center">
          <img src={Synergies} alt="icon" className="w-[42px]" />
        </div>
      </div>
      <p className="text-[20px] leading-[32px] text-black/80">{description}</p>
    </div>
  );
};

export default SynergyCard;
