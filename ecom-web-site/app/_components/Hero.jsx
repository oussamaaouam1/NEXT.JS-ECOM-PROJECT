import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-[url('/backgroundImg2.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l "></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-start lg:px-8">
        <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-primary sm:text-5xl">
            ACTIVE <span className="text-white">sports wear</span>
            <strong className="block font-extra text-lighter pt-4">
              {" "}
              POWER YOUR WORKOUT.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed text-start">
            Gear up for the ultimate run with lightweight, breathable clothing
            and footwear. Stay ahead in style and comfort on every stride.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center ">
            <a
              href="#"
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-rose-500 sm:w-auto duration-500"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-light px-12 py-3 text-sm font-medium text-black shadow hover:text-white focus:outline-none focus:ring active:text-rose-500 sm:w-auto duration-500"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
