import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import useMeasure from 'react-use-measure';

type TResizablePanel = {
  children: ReactNode;
  title: string;
  active: boolean;
};

const ResizablePanel = ({ children, title, active }: TResizablePanel) => {
  const [ref, { height }] = useMeasure({
    debounce: 200,
    scroll: false,
  });

  return (
    <motion.div id={`${height}`} animate={{ height }} className="relative w-full">
      <AnimatePresence>
        <motion.div
          key={`${title}-${Math.random()}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="lg:flex lg:w-full lg:flex-col lg:items-start lg:justify-start"
        >
          <div
            ref={ref}
            className={`${
              active ? 'absolute' : 'relative'
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
