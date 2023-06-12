"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import TestimonialCard from "./testimonialcard";
import { testimonials } from "./testimonials";
import { useState } from "react";
import { Typography } from "@material-tailwind/react";

const SlidingTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="testimonials">
      <h2 className="text-center text-4xl font-bold">Testimonials</h2>
      <div className="relative mx-auto  max-w-screen-xl gap-4 center py-8 px-4 sm:py-16 lg:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            exit={{ x: -100, opacity: 0 }}
          >
            <TestimonialCard
              key={currentIndex}
              testimonial={testimonials[currentIndex].testimonial}
              name={testimonials[currentIndex].name}
            />
          </motion.div>
          <BsFillArrowLeftCircleFill
            className="left-2 text-3xl top-1/2 text-gray-600 cursor-pointer absolute z-40"
            onClick={() => {
              setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % testimonials.length
              );
            }}
          />
          <BsFillArrowRightCircleFill
            className="absolute cursor-pointer top-1/2 text-gray-600 text-3xl right-2 z-[200]"
            onClick={() => {
              setCurrentIndex(
                (prevIndex) =>
                  (prevIndex - 1 + testimonials.length) % testimonials.length
              );
            }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SlidingTestimonial;
