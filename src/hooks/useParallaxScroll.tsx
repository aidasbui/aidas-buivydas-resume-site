import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import React, { ReactNode } from 'react';

type TuseParallaxScroll = {
  children: ReactNode;
  transformPixelInput?: number[];
  transformPercentOutput?: number[];
};

const useParallaxScroll = ({
  children,
  transformPixelInput = [0, 5000],
  transformPercentOutput = [0, -30],
}: TuseParallaxScroll) => {
  const { scrollY } = useScroll();
  const y = useSpring(scrollY, {
    stiffness: 600,
    damping: 70,
    mass: 0.1,
  });
  const yRange = useTransform(
    y,
    transformPixelInput,
    transformPercentOutput.map((value) => value.toString() + '%'),
  );

  return <motion.div style={{ y: yRange }}>{children}</motion.div>;
};

export { useParallaxScroll as ParallaxScroll };
