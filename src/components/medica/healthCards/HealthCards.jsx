import React from "react";
import Card from "./Card";

// --- Data: Storing content in a JSON-like array ---
// This makes it easy to add, remove, or change cards without touching the component logic.
const servicesData = [
  {
    id: 1,
    title: "Behavioral Health",
    description: "Find care options, claims, and EOBs.",
    link: "#",
    icon: "/public/medica/brain-head-1.png",
  },
  {
    id: 2,
    title: "HSA, HRA + FSA",
    description: "Savings and spending accounts to fit your needs.",
    link: "#",
    icon: "/public/medica/Group.png",
  },
  {
    id: 3,
    title: "Express Scripts®",
    description: "Explore your pharmacy benefits.",
    link: "#",
    icon: "/public/medica/saving-piggy-coins-alternate.png",
  },
];

// --- Parent Component: App ---
// The main component that lays out the cards.
export default function HealthCard() {
  return (
    <div className="bg-[#F9F3F2] min-h-screen w-full">
      <div className=" flex items-center justify-end p-4 sm:p-6 lg:p-8 font-sans max-w-[1270px]">
        <div className="w-full max-w-[946px] ">
          {/* - We use a responsive grid.
          - On small screens (mobile), it's a 1-column grid (items stack vertically).
          - On medium screens and up (tablets/desktops), it becomes a 3-column grid.
          - `gap-6` provides consistent spacing between cards.
        */}
          <h4 className="my-6 font-semibold text-2xl">My Health + Savings</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map over the data array to render a Card for each item */}
            {servicesData.map((service) => (
              <Card
                key={service.id} // The key is crucial for React's rendering performance.
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
