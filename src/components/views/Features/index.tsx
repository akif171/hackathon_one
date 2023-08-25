import Image from "next/image";
import React from "react";
import Feature from "../../assets/feature.webp";

const Features = () => {
  return (
    <div className=" w-full my-40">
      <div className="flex  lg:justify-end ">
        <h1 className=" text-3xl sm:text-5xl font-bold -mt-24">
          Unique and <br /> Authentic Vintage <br /> Designer <br /> Jewellery
        </h1>
      </div>
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row w-full mt-5">
        <div className="features_left lg:w-1/2">
          <div className="text-8xl sm:text-9xl font-bold absolute -z-10 text-gray-100 ">
            Different <br /> From <br /> Others
          </div>

          <div className="grid grid-cols-2 w-full h-full">
            <div className="features_grid">
              <h3 className="">
                Using Good <br className="hidden lg:flex" /> Quality Materials
              </h3>
              <p>
                Lorem ipsum dolor <br className="hidden lg:flex" /> sit amt,
                consectetur <br className="hidden lg:flex" />
                adipiscing elit.
              </p>
            </div>
            <div className="features_grid">
              <h3 className="">
                100% Handmade <br className="hidden lg:flex" /> Products
              </h3>
              <p>
                Lorem ipsum dolor <br className="hidden lg:flex" /> sit amt,
                consectetur <br className="hidden lg:flex" /> adipiscing elit.
              </p>
            </div>
            <div className="features_grid">
              <h3 className="">
                Modern Fashion <br className="hidden lg:flex" /> Design
              </h3>
              <p>
                Lorem ipsum dolor <br className="hidden lg:flex" /> sit amt,
                consectetur <br className="hidden lg:flex" /> adipiscing elit.
              </p>
            </div>
            <div className="features_grid">
              <h3 className="">
                Discount for Bulk <br className="hidden lg:flex" /> Orders
              </h3>
              <p>
                Lorem ipsum dolor <br className="hidden lg:flex" /> sit amt,
                consectetur <br className="hidden lg:flex" /> adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="features_right flex justify-center items-center flex-col gap-5 lg:flex-row lg:w-1/2">
          <Image src={Feature} alt="feature image" />
          <div>
            <p className="text-xl text-justify text-gray-700  ">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <button className="bg-black text-white py-2 px-3 mt-5">
              See all Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
