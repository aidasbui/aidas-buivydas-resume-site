import { AnimatePresence, motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';
import useMeasure from 'react-use-measure';

/*
    Replacer function to JSON.stringify that ignores
    circular references and internal React properties.
    https://github.com/facebook/react/issues/8669#issuecomment-531515508
  */
const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: string, value: unknown) => {
    if (key.startsWith('_')) return; // Don't compare React's internal props.
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};

const ResizablePanel = ({ children }: PropsWithChildren) => {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div id={`${height}`} animate={{ height }} className="relative w-full">
      <AnimatePresence>
        <motion.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:flex lg:w-full lg:flex-col lg:items-start lg:justify-start"
        >
          <div
            ref={ref}
            className={`${height ? 'absolute' : 'relative'} px-4 md:px-12 lg:w-full`}
          >
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ResizablePanel;
