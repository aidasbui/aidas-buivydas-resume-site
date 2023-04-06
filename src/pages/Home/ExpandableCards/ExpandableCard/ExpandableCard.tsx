import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import useMeasure from 'react-use-measure';

import { ReactComponent as ChevronDown_SVG } from '/src/assets/icons/chevron-down.svg';
import { ReactComponent as ChevronUp_SVG } from '/src/assets/icons/chevron-up.svg';

import { Levitate } from '../../../../hooks/useLevitate';

type TExpandableCardProps = {
  children?: ReactNode;
  title: string;
  renderLeftIcon: () => JSX.Element;
};

type TResizablePanel = {
  children: ReactNode;
};

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

function ResizablePanel({ children }: TResizablePanel) {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div id={`${height}`} animate={{ height }} className="relative">
      <AnimatePresence>
        <motion.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div ref={ref} className={`${height ? 'absolute' : 'relative'} px-4 md:px-12`}>
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

//TODO: try implementing height animation with 0 to auto: https://www.joshuawootonn.com/how-to-animate-width-and-height-with-framer-motion

const ExpandableCard = ({ title, renderLeftIcon, children }: TExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const cardRef = useRef<HTMLButtonElement | null>(null);

  const expandedButtonStyles = 'text-color-secondary';

  const expandedCardStyles =
    '!bg-color-purple-600 !bg-opacity-50 border-color-secondary hover:border-color-secondary';

  const expandCardHandler = () => {
    setIsExpanded((prevState) => !prevState);
  };

  useEffect(() => {
    if (!isExpanded || !cardRef) {
      return;
    }

    const intoView = () => {
      cardRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };
    const scrollTimeout = setTimeout(intoView, 200);

    return () => clearTimeout(scrollTimeout);
  }, [isExpanded, cardRef]);

  const levitateIconHandler = () => {
    setIsHovered((prevState) => !prevState);
  };

  const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      expandCardHandler();
    }
  };

  return (
    <motion.div
      tabIndex={0}
      onKeyDown={handleKeypress}
      className={`${
        isExpanded && expandedCardStyles
      } h-full w-full transform-gpu overflow-hidden rounded-xl border-2 bg-color-purple-800 bg-opacity-50 shadow-2xl transition-colors duration-75 hover:border-color-purple-500 hover:bg-color-purple-600 hover:bg-opacity-50 focus:outline-none focus-visible:outline-dashed focus-visible:outline-offset-8 focus-visible:outline-color-secondary active:border-color-secondary active:bg-color-purple-600 active:bg-opacity-50 sm:max-w-lg md:max-w-3xl
  `}
      whileHover={{ scale: isExpanded ? 1 : 1.03 }}
      whileTap={{
        scale: isExpanded ? 1 : 0.97,
      }}
      style={{ borderRadius: '0.75rem' }}
    >
      <motion.button
        tabIndex={-1}
        aria-label={isExpanded ? `Expand ${title} card` : `Collapse ${title} card`}
        aria-controls="expandable card"
        aria-expanded={isExpanded ? 'true' : 'false'}
        className={`h-16 w-full items-center justify-between border-none text-center ${
          isExpanded && expandedButtonStyles
        }`}
        onClick={expandCardHandler}
        onMouseOver={levitateIconHandler}
        onMouseOut={levitateIconHandler}
        ref={cardRef}
      >
        <motion.div className="leading-0 flex items-center justify-between px-4 md:px-12">
          <motion.div className="flex justify-start gap-4">
            <>{isHovered ? <Levitate>{renderLeftIcon()}</Levitate> : renderLeftIcon()}</>
            <h3 className="p-0 text-xl">{title}</h3>
          </motion.div>
          {isExpanded ? (
            <ChevronUp_SVG aria-hidden="true" className="w-6" />
          ) : (
            <ChevronDown_SVG aria-hidden="true" className="w-6" />
          )}
        </motion.div>
      </motion.button>
      <ResizablePanel>{isExpanded && children}</ResizablePanel>
    </motion.div>
  );
};

export default ExpandableCard;
