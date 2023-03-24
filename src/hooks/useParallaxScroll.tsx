import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

const useParallaxScroll = ({ children }: PropsWithChildren) => {
  const { scrollY } = useScroll();
  const y = useSpring(scrollY, {
    stiffness: 600,
    damping: 70,
    mass: 0.1,
  });
  const yRange = useTransform(y, [0, 5000], ['0%', '-30%']);

  return <motion.div style={{ y: yRange }}>{children}</motion.div>;
};

export { useParallaxScroll as ParallaxScroll };
