import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import useMeasure from 'react-use-measure';

type TResizablePanel = {
  children: ReactNode;
  title: string;
};

const ResizablePanel = ({ children, title }: TResizablePanel) => {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div id={`${height}`} animate={{ height }} className="relative w-full">
      <AnimatePresence>
        <motion.div
          key={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:flex lg:w-full lg:flex-col lg:items-start lg:justify-start"
        >
          <div
            ref={ref}
            className={`${
              height ? 'absolute' : 'relative'
            } flex flex-col px-4 md:px-12 lg:w-full`}
          >
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ResizablePanel;
