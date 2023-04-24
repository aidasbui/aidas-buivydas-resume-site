import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import React, { PropsWithChildren, useLayoutEffect, useRef, useState } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import ScrollProgress from './ScrollProgress';

const Layout = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const { scrollY } = useScroll();

  useLayoutEffect(() => {
    if (!ref.current) return;
    setOffsetTop(ref?.current?.offsetTop);
  }, [ref]);

  const y = useSpring(scrollY, {
    stiffness: 300,
    damping: 70,
    mass: 0.1,
  });

  const yRange = useTransform(y, [offsetTop - 300, offsetTop + 300], ['0%', '10%']);

  return (
    <div className="relative flex min-h-screen flex-col justify-between overflow-y-hidden">
      <motion.div
        ref={ref}
        className="absolute -top-96 -z-40 h-[300vh] w-full bg-color-primary bg-background-noise bg-center"
        style={{ translateY: yRange }}
      />
      <div className="left-0 top-0 z-50">
        <Header />
      </div>
      <AnimatePresence>
        <ScrollProgress />
      </AnimatePresence>
      <main className="mx-auto my-0 min-h-screen px-8 py-12">{children}</main>
      <div className="my-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
