import { motion } from 'framer-motion';
import React from 'react'




 function TextAnimation({children,}: {children: React.ReactNode}) {

    const textVariant = {
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
    variants={textVariant}
  >
      {children}
    </motion.div>
  )
}

export default TextAnimation
