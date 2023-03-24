import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode, useState } from 'react';
import useMeasure from 'react-use-measure';

import { ReactComponent as ChevronDown_SVG } from '../../assets/icons/chevron-down.svg';
import { ReactComponent as ChevronUp_SVG } from '../../assets/icons/chevron-up.svg';
import { useLevitate as Levitate } from '../../hooks/useLevitate';

type TExpandableCardProps = {
  children?: ReactNode;
  title: string;
  renderLeftIcon: () => JSX.Element;
};

const ExpandableCard = ({ title, renderLeftIcon, children }: TExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const expandedButtonStyles = ' text-color-secondary';

  const expandedCardStyles = '!bg-color-purple-600 border-color-secondary pb-4';

  const expandCardHandler = () => {
    setIsExpanded((prevState) => !prevState);
    window.scrollBy({ top: 1 }); //TO DO: Fix scroll progress not updating on body height change (framer updates values outside of the react render cycle for performance)
  };

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
      } h-full w-full max-w-sm transform-gpu overflow-hidden rounded-xl border-2 bg-color-purple-800 shadow-2xl transition-colors duration-75 hover:border-color-purple-500 hover:bg-color-purple-600 focus:outline-dashed focus:outline-offset-4 focus:outline-color-secondary active:border-color-secondary active:bg-color-purple-600
  `}
      whileHover={{ scale: isExpanded ? 1 : 1.03 }}
      whileTap={{
        scale: isExpanded ? 1 : 0.97,
      }}
      style={{ borderRadius: '0.75rem' }}
      layout="position"
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
      >
        <motion.div className="leading-0 flex items-center justify-between px-4">
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

type TResizablePanel = {
  children: ReactNode;
};

function ResizablePanel({ children }: TResizablePanel) {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div id={`${height}`} animate={{ height }} className="relative ">
      <AnimatePresence>
        <motion.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div ref={ref} className={`${height ? 'absolute' : 'relative'} px-4`}>
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

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

export default ExpandableCard;
