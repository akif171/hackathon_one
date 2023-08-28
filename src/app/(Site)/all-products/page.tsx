import React from "react";
import ProductCard from "@/components/views/ProductCard";
import { getProducts } from "../../../../sanity/sanity.query";
import { Product } from "../../../../types";
import Link from "next/link";

const page = async () => {
  const products: Product[] = await getProducts();
  console.log(products);

  return (
    <div className=" sm:grid grid-cols-2 md:grid-cols-4 gap-5 w-full">
      {products.map((product) => (
        <Link key={product._id} href={`/all-products/${product.slug}`}>
          <ProductCard
            productImage={product.productImage}
            name={product.name}
            price={product.price}
          />
        </Link>
      ))}
    </div>
  );
};

export default page;
