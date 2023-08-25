import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex justify-center items-center px-24 py-40">
      <div className="text-7xl sm:text-9xl font-bold text-gray-100">
        Newsletter
      </div>
      <div className="absolute">
        <h1 className="text-center text-2xl sm:text-4xl font-bold mb-4">
          Subscribe Our Newsletter
        </h1>
        <p className="text-center text-sm sm:text-base   text-gray-700 mb-6">
          Get the latest information and promo offers directly
        </p>
        <div className="flex justify-center gap-2 items-center w-full">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 py-2 px-3 active:outline border border-gray-500"
          />
          <button className="bg-black py-2 px-3 text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
