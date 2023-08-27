"use client";
import { Delete, DeleteIcon, ShoppingBag, Trash, Trash2 } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import HomeProd from "../../components/assets/home_prod.png";

const Cart = () => {
  const [isItems, setIsItems] = useState(true);

  return (
    <div className="md:p-12">
      <h2 className=" text-2xl md:text-3xl font-bold">Shopping Cart</h2>
      <div>
        {isItems ? (
          <div className="flex flex-col gap-5 lg:grid grid-cols-3 py-10 lg:gap-10">
            <div className="flex flex-col md:flex-row gap-5 col-span-2">
              <div className="w-full md:w-64 ">
                <Image
                  className="w-full rounded-xl"
                  src={HomeProd}
                  alt="image"
                />
              </div>
              <div className="w-full flex flex-col justify-between">
                <div className="flex justify-between">
                  <p className="text-2xl">FlexSweatShirt</p>
                  <Trash2 />
                </div>
                <p className="text-gray-700">DRESS</p>
                <p>Delivery Estimation</p>
                <p className="text-amber-500">5 Working Days</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">$195.00</p>
                  <p className="flex items-center gap-5">
                    <span className="bg-gray-100 p-2 rounded border font-bold text-2xl">
                      -
                    </span>
                    1
                    <span className="bg-gray-100 p-2 rounded border font-bold text-2xl">
                      +
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="order_summary flex flex-col gap-5 p-3 md:p-7 bg-gray-50">
              <h2 className="font-bold text-2xl">Order Summary</h2>
              <div className="flex justify-between items-center">
                <p>Quatity :</p>
                <p>1</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Sub Total :</p>
                <p>$195.00</p>
              </div>
              <button className="w-full bg-black text-white py-2">
                Process to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center my-5">
            <ShoppingBag size={100} />
            <h1 className="text-xl sm:text-4xl font-bold">
              Your Shopping bag is empty
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
