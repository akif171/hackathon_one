"use client";
import Image from "next/image";
import React, { use, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { getSingleProduct } from "../../../../../sanity/sanity.query";
import { Product } from "../../../../../types";

const page = ({ params }: { params: {slug:string} }) => {
  const { slug } = params;

  const product: Product = use(getSingleProduct(slug));

  console.log(product);

  const [image, setImage] = useState(product.productImage[0]);

  return (
    <div className="main_container">
      <div className="flex flex-col lg:flex-row gap-10 w-full mt-10">
        <div className="flex gap-5 w-full lg:w-3/5">
          <div className="slider_images flex flex-col gap-2">
            {product.productImage.map((image: string, index: number) => (
              <Image
                key={index}
                src={image}
                alt={product.name}
                width={100}
                height={100}
                className="hover:cursor-pointer"
              />
            ))}
          </div>
          <div className="main_image h-full w-full">
            <Image
              src={image}
              alt={product.name}
              className="h-full w-full"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="product_details flex flex-col gap-10 w-full lg:w-2/5">
          <div>
            <h3 className="text-2xl ">Cameryn Sash Tie Dress</h3>
            <p className="text-gray-700 mt-2 text-xl">Dress</p>
          </div>
          <div>
            <p className="text-sm font-bold">SELECT SIZE</p>
            <ul className="product_sizes flex gap-5">
              <li>XS</li>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
            </ul>
          </div>
          <div className="quantity_btn flex items-center gap-6">
            <p className="font-bold">Quantity : </p>
            <span className="text-3xl border p-2 bg-gray-100 rounded">-</span>1
            <span className="text-3xl border p-2 bg-gray-100 rounded">+</span>
          </div>
          <div className="flex items-center gap-10">
            <button className="flex gap-2 bg-black text-white font-bold py-2 px-4">
              <ShoppingCart /> Add TO Cart
            </button>
            <p className="text-2xl font-bold">$195.00</p>
          </div>
        </div>
      </div>
      <div className="product_info flex flex-col gap-5 py-7 lg:py-14 ">
        <div className="border-b-2 flex items-center relative">
          <div className="text-6xl font-bold md:text-7xl lg:text-9xl text-gray-50">
            OVERVIEW
          </div>
          <h2 className="absolute text-xl md:text-2xl font-bold">
            Product Information
          </h2>
        </div>
        <div className="flex flex-col justify-center sm:grid grid-cols-3">
          <h2 className="py-3 sm:py-0">PRODUCTS DETAILS</h2>
          <p className="col-span-2 text-sm  text-gray-700 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            asperiores accusamus dolorum perferendis ab numquam eius, eum
            possimus velit sed reprehenderit magnam impedit labore sit vitae?
            Unde doloribus at iusto!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus asperiores accusamus dolorum perferendis
            ab numquam eius, eum possimus velit sed reprehenderit magnam impedit
            labore sit vitae? Unde doloribus at iusto!
          </p>
        </div>
        <div className="flex flex-col sm:grid grid-cols-3">
          <h2 className="py-3 sm:py-0">PRODUCT CARE</h2>
          <ul className="col-span-2 text-sm text-gray-700  list-item">
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
