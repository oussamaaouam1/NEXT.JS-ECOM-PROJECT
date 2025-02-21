import React from "react";
import Slider from "./_components/Slider";
import Banner from "./_components/Banner";
import Products from "./_components/Products";

function MansWear() {
  return (
    <div className="bg-slate-300">
      <Slider />
      <Banner />
      <Products />
    </div>
  );
}

export default MansWear;
