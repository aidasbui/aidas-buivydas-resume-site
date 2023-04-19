import { motion, useScroll } from 'framer-motion';
import React from 'react';

//TODO: Fix scroll progress not updating on page height change bug

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      key="scroll-progress"
      className="sticky left-0 right-0 top-0 z-50 h-[2px] w-full origin-left self-start bg-color-secondary"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
