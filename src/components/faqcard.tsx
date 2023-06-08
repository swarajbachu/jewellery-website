'use client'
import React, { useState } from 'react';
import { motion, AnimateSharedLayout, LayoutGroup } from 'framer-motion';
import PropTypes from 'prop-types';

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LayoutGroup>
      <motion.div
        layout
        className="p-6 mb-4 shadow-lg cursor-pointer bg-slate-50 rounded-lg"
        onClick={toggleOpen}
      >
        <motion.h5
          layout
          className="text-gray-900 text-xl font-medium mb-2"
        >
          {question}
        </motion.h5>
        {isOpen && (
          <motion.p
            layout
            className="text-gray-700 text-base mt-4 mb-4"
          >
            {answer}
          </motion.p>
        )}
      </motion.div>
    </LayoutGroup>
  );
};

export default Accordion;

Accordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
