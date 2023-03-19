import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }: PropsWithChildren) => {
  const { scrollY } = useScroll();
  const y = useSpring(scrollY, {
    stiffness: 280,
    damping: 60,
    velocity: 0,
    mass: 0.1,
  });
  const yRange = useTransform(y, [0, 5000], ['0%', '100%']);

  return (
    <>
      <div className="relative -z-50 flex min-h-screen flex-col justify-between overflow-hidden bg-color-primary">
        <motion.div
          className="absolute -z-40 h-full w-full bg-background-noise  bg-center"
          style={{ backgroundPositionY: yRange }}
        />
        <div className="top-0 left-0">
          <Header />
        </div>
        <main className="mx-auto my-0 min-h-screen p-12">{children}</main>
        <div className="my-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
