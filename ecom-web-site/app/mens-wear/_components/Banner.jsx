import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div
      className="flex h-[80vh] w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('/man1.png')`,
      }}
    />
  );
}

export default Banner;
