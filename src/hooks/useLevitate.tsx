import { motion } from 'framer-motion';
import React from 'react';

type TUseLevitateProps = {
  children: React.ReactNode;
  initialY?: number;
  animateY?: number;
  duration?: number;
};

export const useLevitate = ({
  children,
  initialY = 0,
  animateY = -0.1,
  duration: transitionDuration = 0.8,
}: TUseLevitateProps) => {
  return (
    <motion.span
      className="inline-block"
      initial={{ y: initialY + 'rem' }}
      animate={{ y: animateY + 'rem' }}
      transition={{
        duration: transitionDuration,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      {children}
    </motion.span>
  );
};
