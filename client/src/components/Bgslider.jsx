import React, { useState } from 'react';
import { assets } from '../assets/assets';

function Bgslider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (event) => {
    setSliderPosition(event.target.value);
  };

  return (
    <div className="pb-10 md:py-20 mx-2">
      {/* Title */}
      <h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mb-10 font-semibold bg-gradient-to-r from-gray-900 to-gray-300 bg-clip-text text-transparent hover:scale-105 transition-all duration-500">
        Remove The BackGround With <br />
        High Quality And Accuracy
      </h1>

      {/* Slider Comparison Container */}
      <div className="relative max-w-3xl overflow-hidden mx-auto rounded-xl">
        {/* Background image */}
        <img 
          src={assets.image_w_bg}
          alt="With Background"
          className="abso"
        />

        {/* Foreground image with dynamic clip */}
        <img
          src={assets.image_wo_bg}
          alt="Without Background"
          className="w-full h-auto absolute top-0 left-0"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
          }}
        />
    {/* Vertical white line indicator */}
  <div
    className="absolute top-0 bottom-0 w-[2px] bg-white z-20"
    style={{ left: `${sliderPosition}%` }}
  />
        {/* Range Slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider "
        />
      </div>
    </div>
  );
}

export default Bgslider;
