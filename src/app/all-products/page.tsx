import React from "react";
import ProductCard from "@/components/views/ProductCard";

const page = () => {
  return (
    <div className="grid grid-cols2 md:grid-cols-4 gap-5 w-full">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default page;
