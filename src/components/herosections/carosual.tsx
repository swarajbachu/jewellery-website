'use client'

import { Carousel } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
 
export default function CarouselPage() {

  const router = useRouter()

  return (
    <Carousel
      className="w-full mt-[80px] sm:mt-0 relative"
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
      <div className="relative">
      <img
        src="/img.png"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <button className="absolute bottom-3 right-3 bg-gray-700 rounded-md text-white text-xs sm:text-md lg:text-lg font-sans px-5 py-2 font-light"
      onClick={() => {
        router.push("/contact")
      }}
      >
        Contact Us
      </button>
      </div>
      <img
        src="/img2.png"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}