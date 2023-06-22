'use client'

import { Carousel } from "@material-tailwind/react";
 
export default function CarouselPage() {
  return (
    <Carousel
      className="w-full sm:h-full h-screen relative"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >

      <img
        src="/img.png"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/img2.png"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}