import { useEffect, useRef, useState } from "react";

const ScrollAnimation = () => {
  const sectionRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
console.log(scrollProgress,"smksmkdk");

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When the section top reaches the viewport top, make it sticky
      if (rect.top <= 0 && Math.abs(rect.top) < section.offsetHeight - windowHeight) {
        setIsSticky(true);
        // Calculate progress inside sticky section
        setScrollProgress(Math.min(1, Math.abs(rect.top) / (section.offsetHeight - windowHeight)));
      } else {
        setIsSticky(false);
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-[200vh] bg-gray-900 text-white">
      {/* Sticky Section */}
      <div ref={sectionRef} className={`relative h-screen flex flex-col justify-center items-center ${isSticky ? "sticky top-0" : ""}`}>
        <h1 className="text-5xl font-bold mb-8">Welcome to Our Section</h1>

        {/* Cards - Slide in on Scroll */}
        <div className="w-full max-w-lg space-y-6 overflow-hidden">
          {[...Array(4)].map((_, index) => {
            console.log(scrollProgress,"scrollprog");
            console.log(index,"index");
            
            const cardVisible = scrollProgress > index / 4;
            console.log(cardVisible,"card");
            
            return (
              <div
                key={index}
                className={`card w-80 p-6 bg-gray-700 rounded-lg shadow-md transition-all duration-700 ease-in-out ${
                  cardVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
              >
                <h2 className="text-2xl font-semibold">Card {index + 1}</h2>
                <p className="mt-2 text-gray-300">This is card content.</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
