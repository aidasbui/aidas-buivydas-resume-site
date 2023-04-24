import { AnimatePresence, motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import ScrollProgress from './ScrollProgress';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative flex min-h-screen flex-col justify-between">
      <motion.div className="absolute top-0 -z-40 h-full w-full bg-color-primary bg-background-noise bg-center" />
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
