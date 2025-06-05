import React from "react";
import SynergyCard from "./SynergyCard";
import synergiesData from "../../data/synergies.json";

const MergerSynergies = () => {
  const { title, description, synergies } = synergiesData;
  const coloredTitle = title.split(" ").slice(0, 1).join(" ");
  const simpleTitle = title.split(" ").slice(1).join(" ");

  console.log(coloredTitle, "colored");
  console.log(simpleTitle, "simpleTitle");

  return (
    <div className="max-w-[1200px] mx-auto py-12 px-4">
      {/* Title */}
      <h2 className="text-[32px] leading-[40px] mb-4">
        <span className="text-[#B50020]">{coloredTitle} </span>
        <span>{simpleTitle}</span>
      </h2>

      {/* Description */}
      <div className="mb-10">
        {description.map((des, index) => {
          return (
            <p key={index} className="text-[20px] leading-[32px] font-medium mb-6">
              {des}
            </p>
          );
        })}
      </div>

      {/* Synergies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {synergies.map((synergy, index) => (
          <SynergyCard
            key={index}
            title={synergy.title}
            description={synergy.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MergerSynergies;
