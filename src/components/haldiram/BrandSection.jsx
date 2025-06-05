import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import separator from "../../../public/haldiram/separator.png";

const BrandSection = ({
  title,
  description,
  buttons,
  downloadButton,
  exploreButton,
}) => {
  console.log(downloadButton);

  return (
    <div className="flex flex-col items-start py-10 px-4 bg-gray-100 min-h-[200px] w-full">
      <div className="flex w-full flex-col md:flex-row mb-6 md:mb-10">
        <div className="w-full">
          {/* Title */}
          <h1 className="text-[24px] leading-[32px] uppercase w-2/3">
            {title}
          </h1>
          <img src={separator} alt="" className="my-4" />
          {/* Description */}
          <p className="text-base leading-[24px] text-black/80 font-medium">
            {description}
          </p>
        </div>
        <div className=" w-full flex md:items-start md:justify-end">
          <ButtonWithIcon
            text={downloadButton.text}
            icon={downloadButton.icon}
            link={downloadButton.link}
          />
        </div>
      </div>
      {/* Buttons */}

      <ButtonWithIcon
        text={exploreButton.text}
        icon={exploreButton.icon}
        link={exploreButton.link}
      />
    </div>
  );
};

export default BrandSection;
