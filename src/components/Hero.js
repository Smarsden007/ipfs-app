import React from "react";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center w-full p-10 bg-gradient-to-b from-pink-600 to-blue-200">
      <div className="w-full mx-auto">
        <div className="mx-auto text-left w-7/12">
          <h1
            className="text-7xl text-bolder font-sans leading-[5.25rem]"
            style={{ fontWeight: "bolder" }}
          >
            Building The Next Generation of Crypto Research & Trading
            Technologies,{" "}
            <span
              style={{ fontWeight: "lighter", background: "black" }}
              className="bg-black-900 text-white"
            >
              {" "}
              at scale
            </span>
          </h1>
          <div className="w-6/12">
          <h2 className="text-2xl">
            We're a 6 years old crypto hedge fund that focuses on systematic
            tradic and HTF,<span> on CEX & DEX</span>
          </h2>
          </div>
        </div>
        <div className="mx-auto text-left w-96"></div>
      </div>
    </div>
  );
};
