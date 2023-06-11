'use client'

import KenBurn from "@/utils/kenburn";
import React from "react";

const Gallery = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
        <h2 className="text-3xl my-4 font-bold">
            Our Products
        </h2>

      <div className="grid lg:w-[80%] grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </div>
        <ImageWithText src="/about-1.jpg" text="About" />
      </div>
    </section>
  );
};

interface ImageWithTextProps{
    src: string;
    text: string;
}

function ImageWithText({src, text}: ImageWithTextProps){
    return(
        <div className="relative group">
            <KenBurn 
            src={src}
            alt={text}
            />
            <span className="absolute  bottom-0 w-full bg-black py-2 ease-in-out tranistion duration-300 text-white text-center hidden group-hover:block">
                {text}
            </span>
        </div>
    )
}

export default Gallery;
