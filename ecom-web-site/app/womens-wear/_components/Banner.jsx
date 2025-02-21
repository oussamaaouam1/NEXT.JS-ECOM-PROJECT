'use client'
import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <section className="relative bg-[url('/women1.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l "></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-start lg:px-8">
        <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-primary sm:text-5xl">
            WOMEN's ACTIVE <span className="text-white">sports wear</span>
            <strong className="block font-extra text-secondary pt-4">
              {" "}
              STRENGTH IN STYLE.{" "}
            </strong>
          </h1>

          <div className="mt-8 flex flex-wrap gap-4 text-center ">
            <a
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight * 1.06, // Scroll to products
                  behavior: "smooth", // Smooth scrolling effect
                });
              }}
              href="#"
              className="block w-full rounded-full bg-primary px-12 py-3 text-md font-bold  text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-rose-500 sm:w-auto duration-500"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
