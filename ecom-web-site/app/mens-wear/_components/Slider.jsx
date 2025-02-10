"use client";
import React, { useState, useEffect } from "react";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Array of texts to display
  const slides = [
    "Welcome to Men's Wear",
    "Discover Latest Trends",
    "Premium Quality Clothing",
    "Exclusive Collections",
    "10% discount for the 1st order",
  ];

  useEffect(() => {
    // Set up the interval for automatic sliding
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full min-h-[50px] bg-slate-200 flex items-center justify-center  lg:mt-16 mt-14 md:mt-16 ">
      <div className="text-center">
        {/* Animated heading */}
        <h1
          className=" font-bold transition-opacity duration-500 ease-in-out text-black"
          style={{
            opacity: 1,
            animation: "fadeInOut 3s infinite",
          }}
        >
          {slides[currentSlide]}
        </h1>
      </div>

      {/* Add this CSS for the animation */}
      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          20% {
            opacity: 1;
            transform: translateY(0);
          }
          80% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}

export default Slider;
