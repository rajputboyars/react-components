// --- Child Component: Card ---
// Renders a single service card. It's reusable and focuses only on presentation.
export default function Card({ icon, title, description, link }) {
  // Screen reader accessibility: Add a more descriptive label to the link.
  const accessibleLinkText = `${title}, opens in a new tab`;

  return (
    <div className="bg-white/50  rounded-lg p-[1.5rem_2.125rem_2.375rem_1.5rem] flex flex-col gap-4 items-start h-full">
      <div className="space-y-4">
        <div>
          {/* The icon is decorative, so we hide it from screen readers */}
          <img src={icon} alt="" className="w-6" />
        </div>
        <h3 className="text-lg font-semibold leading-[150%] text-[#22272D]">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 rounded-sm  space-x-2 flex items-center"
            aria-label={accessibleLinkText}
          >
            {title}
            {/* External link icon for visual cue */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block ml-1 text-[#C81766]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </h3>
      </div>
      <p className="text-[#22272D] text-base leading-[150%]">{description}</p>
    </div>
  );
}
