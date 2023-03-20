import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }: PropsWithChildren) => {
  const { scrollY } = useScroll();
  const y = useSpring(scrollY, {
    stiffness: 300,
    damping: 70,
    mass: 0.1,
  });
  const yRange = useTransform(y, [0, 5000], ['0%', '40%']);

  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-between">
        <motion.div
          className="absolute -z-40 h-full w-full bg-color-primary  bg-background-noise bg-center"
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
