import Image from "next/image";
import React from "react";
import mainImage from "../../assets/header.webp";
import Featured1 from "../../assets/Featured1.webp";
import Featured2 from "../../assets/Featured2.webp";
import Featured3 from "../../assets/Featured3.webp";
import Featured4 from "../../assets/Featured4.webp";
import { ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex lg:justify-center items-center gap-5 mt-5 ">
      <div className="flex flex-col items-start justify-between lg:mr-10 gap-10 lg:w-2/5 md:w-full">
        <span className="bg-blue-100 py-2 px-4 rounded text-blue-700">
          Sale 70%
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-6xl font-extrabold">
          An Industrial Take on Streetwear
        </h1>
        <p className="md:text-xl text-left text-lg text-gray-700">
          Anyone can beat you but no one can <br className="md:hidden" />
          beat your outfit as long as you wear <br className="md:hidden" /> Dine
          outfits.
        </p>
        <button className="flex gap-2 bg-black text-white p-5 font-bold">
          <ShoppingCart />
          Start Shopping
        </button>
        <div className="flex w-full lg:gap-5 justify-between ">
          <Image src={Featured1} alt="feature1" />
          <Image src={Featured2} alt="feature2" />
          <Image src={Featured3} alt="feature3" />
          <Image src={Featured4} alt="feature4" />
        </div>
      </div>
      <div className="hidden md:hidden lg:flex justify-center items-center bg-amber-400 rounded-full w-3/5 ">
        <Image src={mainImage} alt="haader image" />
      </div>
    </div>
  );
};

export default Hero;
