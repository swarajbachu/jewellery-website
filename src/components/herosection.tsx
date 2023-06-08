import React from "react";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";


const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center lg:p-24 sm:p-20 p-10">
      <div className="absolute z-10 top-0 left-0 w-full h-screen bg-black sm:opacity-25 lg:opacity-10 opacity-40 " />
      <Image
        src="/hero.jpeg"
        layout="fill"
        objectFit="cover"
        alt={""}
        className="absolute bg-fixed z-1"
      />
      <div className="sm:text-black text-white z-20 flex flex-col gap-4 lg:w-[40vw]">
        <h1 className="text-xl sm:text-gray-600 text-gray-200 tracking-wider ">
          JUNJUNWALA JEWELERS
        </h1>
        <h2 className="text-2xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
