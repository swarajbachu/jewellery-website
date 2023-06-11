'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import HeroSection from "./herosection";

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    <HeroSection key={0} heading="Just heading 1 for slide 1" subheading="subheading for slide 1" img="/hero.jpeg"/>,
    <HeroSection key={1} heading="Just heading 2 for slide 2" subheading="subheading for slide 2" img="/hero.jpeg"/>,
    <HeroSection key={2} heading="Just heading 3 for slide 3" subheading="subheading for slide 3" img="/hero.jpeg"/>,
  ];

  return (
    <div className="relative">

    <AnimatePresence mode='wait'>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
      >
        {slides[currentIndex]}
      </motion.div>
        <BsFillArrowLeftCircleFill
          className="left-2 text-3xl top-1/2 text-gray-600 cursor-pointer absolute z-40"
          onClick={() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
          }}
        />
        <BsFillArrowRightCircleFill
          className="absolute cursor-pointer top-1/2 text-gray-600 text-3xl right-2  z-[200]"
          onClick={() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
          }}
        />
    </AnimatePresence>
    </div>

  );
};

export default Slideshow;