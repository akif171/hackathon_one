import React from "react";
import ProductCard from "../ProductCard";
import HomeProd1 from "../../assets/home_prod.png";
import HomeProd2 from "../../assets/home_prod2.png";
import HomeProd3 from "../../assets/home_prod3.png";
import { getHomeProducts } from "../../../../sanity/sanity.query";
import { Product } from "../../../../types";
import Link from "next/link";

const Products = async () => {
  const products: Product[] = await getHomeProducts();

  const isHome = true;

  return (
    <div className="my-10">
      <p className="text-center text-sm text-blue-700">PRODUCTS</p>
      <h2 className="text-center text-3xl lg:text-4xl font-bold py-5">
        Check What We Offer
      </h2>
      <div className="flex justify-between items-center flex-col md:flex-row gap-3 my-10">
        {products.map((product) => (
          <Link href={`/${product.tag}/${product.slug}`}>
            <ProductCard
              productImage={product.productImage}
              name={product.name}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
