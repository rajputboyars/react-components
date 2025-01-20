import React, { useEffect, useState } from 'react';

const CounterSection = ({ data }) => {
  const { title, subtitle, counters, images } = data;

  // Counter logic for each counter in the array
  const counterLogic = (startValue, endValue, duration = 2000) => {
    const [value, setValue] = useState(startValue);
    useEffect(() => {
      let startTime;
      const animateCounter = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const newValue = Math.floor(startValue + progress * (endValue - startValue));
        setValue(newValue);
        if (progress < 1) {
          requestAnimationFrame(animateCounter);
        }
      };
      requestAnimationFrame(animateCounter);
    }, [startValue, endValue, duration]);

    return value;
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-lg mb-8">{subtitle}</p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {counters.map((counter, index) => (
          <div key={index} className="counter">
            <h2 className="text-2xl font-semibold">{counter.label}</h2>
            <p className="text-xl">
              {counterLogic(counter.startValue, counter.endValue)}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Logo ${index + 1}`} className="h-16" />
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
