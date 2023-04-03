import { motion } from 'framer-motion';
import React from 'react';

const LoadingSpinner = () => {
  const animationDuration = 1.5;

  const spinnerVariants = {
    flip: {
      rotate: 180,
      scale: [1, 1.2, 1],
      transition: {
        ease: 'easeInOut',
        type: 'spring',
        duration: animationDuration,
        repeat: Infinity,
        delay: animationDuration,
        repeatDelay: animationDuration,
      },
    },
  };

  return (
    <motion.div className="flex items-center justify-center">
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="mt-32 h-16 w-16 text-color-secondary"
      >
        {' '}
        <motion.path
          d="M18 2H6v6h2v2h2v4H8v2H6v6h12v-6h-2v-2h-2v-4h2V8h2V2zm-2 6h-2v2h-4V8H8V4h8v4zm-2 6v2h2v4H8v-4h2v-2h4z"
          animate={'flip'}
          variants={spinnerVariants}
        />{' '}
      </svg>
    </motion.div>
  );
};

export default LoadingSpinner;
