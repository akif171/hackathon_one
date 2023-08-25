import Image from "next/image";
import React from "react";
import HomeProd from "../../assets/home_prod.png";

const SingleProduct = ({ imagesrc }) => {
  return (
    <div className="w-full md:hover:scale-110 transition my-5 md:my-0">
      <Image src={imagesrc} alt="home product" className="w-full" />
      <p className="text-xl font-bold my-2">Brushed Raglan Sweatshirt</p>
      <p className="text-xl font-bold">$195</p>
    </div>
  );
};

export default SingleProduct;
