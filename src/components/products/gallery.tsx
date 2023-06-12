"use client";

import KenBurn from "@/utils/kenburn";
import React from "react";

const Gallery = () => {
  const Images = [
    {
      src: "/Rings.png",
      alt: "Rings",
    },
    
    {
      src: "/Earring.webp",
      alt: "Earrings",
    },
    {
      src: "/Necklace.webp",
      alt: "Necklaces",
    },
    {
      src: "/Bracelets.webp",
      alt: "Bracelets",
    },
    {
      src: "/Pendant.webp",
      alt: "Pendant",
    },
    {
      src: "/Tanmaniyas.webp",
      alt: "Tanmaniyas",
    },
  ];

  return (
    <section id="products" className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-3xl my-4 font-bold">Our Featured Products</h2>

      <div className="grid  grid-cols-2 md:grid-cols-3 mx-auto max-w-screen-xl gap-4 center py-8 px-4 sm:py-16 lg:px-6">
        {Images.map((image) => (
          <ImageWithText src={image.src} text={image.alt} />
        ))}
      </div>
    </section>
  );
};

interface ImageWithTextProps {
  src: string;
  text: string;
}

function ImageWithText({ src, text }: ImageWithTextProps) {
  return (
    <div className="relative group">
      <KenBurn src={src} alt={text} />
      <span className="absolute  bottom-0 w-full bg-black py-2 ease-in-out tranistion duration-300 text-white text-center hidden group-hover:block">
        {text}
      </span>
    </div>
  );
}

export default Gallery;
