import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import React, { ReactNode } from 'react';

type TuseParallaxScroll = {
  children: ReactNode;
  transformPixelInput?: number[];
  transformPercentOutput?: string[];
  animationDirection?: 'x' | 'y';
};

const useParallaxScroll = ({
  children,
  transformPixelInput = [0, 1],
  transformPercentOutput = ['0', '-10%'],
  animationDirection = 'y',
}: TuseParallaxScroll) => {
  const { scrollYProgress } = useScroll();
  const y = useSpring(scrollYProgress, {
    stiffness: 600,
    damping: 70,
    mass: 0.1,
  });
  const yRange = useTransform(y, transformPixelInput, transformPercentOutput);

  return (
    <motion.div style={{ [animationDirection]: yRange, position: 'relative' }}>
      {children}
    </motion.div>
  );
};

export { useParallaxScroll as ParallaxScroll };
