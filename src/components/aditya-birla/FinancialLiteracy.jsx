import React from "react";
import Heading from "./Heading";

const features = [
  {
    title: "Empowers Better Money Management",
    description:
      "Learn to budget, save, and invest wisely to avoid debt and build financial security.",
  },
  {
    title: "Prepares for Life’s Uncertainties",
    description:
      "Understand insurance, emergency funds, and risk management to stay financially stable during unexpected events.",
  },
  {
    title: "Ensures Long-Term Financial Freedom",
    description:
      "Plan for retirement, wealth creation, and passive income to achieve financial independence and peace of mind.",
  },
];

const stats = [
  { title: "Male", value: "35%", icon: "👤" },
  { title: "Female", value: "20%", icon: "👩" },
  { title: "Urban", value: "33%", icon: "🏙️" },
  { title: "Rural", value: "24%", icon: "🌾" },
];

const FinancialLiteracy = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <Heading boldText="Why Financial Literacy" regularText="Matters" />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="flex flex-col items-center relative p-20">
          <ImagePlaceholder />
          <div className="mt-4 grid grid-cols-2 gap-4 absolute">
            <StatsCard title="Male" value="35%" icon="👤" />
            <StatsCard title="Female" value="20%" icon="👩" />
            <StatsCard title="Urban" value="33%" icon="🏙️" />
            <StatsCard title="Rural" value="24%" icon="🌾" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg mb-4 space-y-4">
      <h3 className="text-gray-700 text-2xl font-bold">{title}</h3>
      <p className="text-gray-400 text-xl font-semibold">{description}</p>
    </div>
  );
};

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2">
      <span className="text-xl">{icon}</span>
      <div>
        <p className="font-bold">
          {title} - {value}
        </p>
      </div>
    </div>
  );
};

const ImagePlaceholder = () => {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center rounded-lg">
      <span className="text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </span>
    </div>
  );
};

export default FinancialLiteracy;
