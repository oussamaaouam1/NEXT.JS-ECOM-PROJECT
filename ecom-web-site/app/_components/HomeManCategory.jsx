import React from "react";

const HomeManCategory = () => {
  return (
    <section className="relative w-full md:h-[550px] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full  object-cover"
      >
        <source src="./manVID.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Layer */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50 text-white sm:text-[100px] font-sans font-extrabold text-[24px] ">
        <p className="text-start">Man's wear</p>
      </div>
    </section>
  );
};

export default HomeManCategory;
