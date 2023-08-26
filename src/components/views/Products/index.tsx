import React from "react";
import ProductCard from "../ProductCard";
import HomeProd1 from "../../assets/home_prod.png";
import HomeProd2 from "../../assets/home_prod2.png";
import HomeProd3 from "../../assets/home_prod3.png";

const Products = () => {
  return (
    <div className="my-10">
      <p className="text-center text-sm text-blue-700">PRODUCTS</p>
      <h2 className="text-center text-3xl lg:text-4xl font-bold py-5">
        Check What We Offer
      </h2>
      <div className="flex justify-center items-center flex-col md:flex-row gap-3 my-10">
        <ProductCard  />
        <ProductCard  />
        <ProductCard  />
      </div>
    </div>
  );
};

export default Products;
