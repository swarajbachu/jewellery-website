'use client'

import React from "react";
import Image from "next/image";
import Button from "../button";


interface Props {
  heading: string;
  subheading: string;
  img: string;
}


const HeroSection = ({heading,subheading,img}:Props) => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center lg:p-24 sm:p-20 p-10">
      <div className="absolute z-10 top-0 left-0 w-full h-screen bg-black sm:opacity-25 lg:opacity-50 opacity-40 " />
      <Image
        src={img}
        layout="fill"
        objectFit="cover"
        alt={""}
        className="absolute bg-fixed "
      />
      <div className=" text-white z-20 flex flex-col gap-4 lg:w-[40vw]">

        <h1 className="text-2xl ">
          {heading}
        </h1>
        <p className="">
          {subheading}
        </p>
        <Button text="Contact Us" onClick={() => {}} />
      </div>
    </div>
  );
};

export default HeroSection;
