import { motion } from 'framer-motion';
import React from 'react'


interface kenburn{
  src: string;
  alt: string;
}


 function TextAnimation({src,alt}: kenburn) {

    const Varient = {
        hidden: { x: -100, opacity: 0, transition: { duration: 1 } },
        visible: {
          x: 0,
          opacity: 1,
          transition: { duration: 1, delay: 0.5 },
        },
      };

  return (
    <motion.div
    className="font-light text-gray-600 sm:text-lg dark:text-gray-300"
    initial="hidden"
    whileInView="visible"
    variants={Varient}
  >
    <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
  <img
    src={src}
    className="max-w-xs rounded-md transition duration-300 ease-in-out hover:scale-110"
    alt={alt} />
</div>
  </motion.div>
  )
}

export default TextAnimation
