import { ReactComponent as ChevronDown_SVG } from 'assets/icons/chevron-down.svg';
import { ReactComponent as ChevronUp_SVG } from 'assets/icons/chevron-up.svg';
import { AnimatePresence, motion, useWillChange } from 'framer-motion';
import { Levitate } from 'hooks/useLevitate';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import scrollIntoView from 'utils/scrollIntoView';

type TExpandableCardProps = {
  children?: ReactNode;
  title: string;
  renderLeftIcon: () => JSX.Element;
};

// TODO: fix expandable card performance on phones (mainly iPhone, but Android also presents the issue at times)

const ExpandableCard = ({ title, renderLeftIcon, children }: TExpandableCardProps) => {
  const willChange = useWillChange();
  const [hasTouch, setHasTouch] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const expandedButtonStyles = 'text-color-secondary';

  const expandedCardStyles =
    '!bg-color-purple-600 !bg-opacity-50 [@media(hover:hover)]:hover:border-color-secondary border-color-purple-500';

  const expandCardHandler = () => {
    setIsExpanded((wasExpanded) => !wasExpanded);
  };

  const touchStartHandler = () => {
    setHasTouch(true);
  };

  const levitateIconHandler = () => {
    if (!hasTouch) {
      setIsHovered((wasHovered) => !wasHovered);
    }
  };

  const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsExpanded((wasExpanded) => !wasExpanded);
    }
  };

  useEffect(() => {
    if (!isExpanded || !cardRef) return;

    const scrollTimeout = scrollIntoView(isExpanded, cardRef);

    return () => {
      clearTimeout(scrollTimeout);
    };
  }, [isExpanded, cardRef]);

  return (
    <motion.div
      ref={cardRef}
      layout="position"
      transition={{ duration: 0.5, type: 'spring' }}
      tabIndex={0}
      onKeyDown={handleKeypress}
      className={`${
        isExpanded && expandedCardStyles
      } h-full w-full transform-gpu overflow-hidden rounded-xl border-2 bg-color-purple-800 bg-opacity-50 shadow-2xl transition-colors duration-75 focus:outline-none focus-visible:outline-dashed focus-visible:outline-offset-8 focus-visible:outline-color-secondary active:border-color-secondary active:bg-color-purple-600 active:bg-opacity-50 sm:max-w-lg md:max-w-3xl [@media(hover:hover)]:hover:border-color-purple-500 [@media(hover:hover)]:hover:bg-color-purple-600 [@media(hover:hover)]:hover:bg-opacity-50
  `}
      whileHover={{ scale: isExpanded ? 1 : 1.03 }}
      whileTap={{
        scale: isExpanded ? 1 : 0.97,
      }}
      style={{ borderRadius: '0.75rem', willChange }}
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
        onTouchStart={touchStartHandler}
        style={{ willChange }}
      >
        <div className="leading-0 flex items-center justify-between px-4 md:px-12">
          <div className="flex justify-start gap-4">
            <>
              {isHovered || isExpanded ? (
                <Levitate>{renderLeftIcon()}</Levitate>
              ) : (
                renderLeftIcon()
              )}
            </>
            <h3 className="p-0 text-xl">{title}</h3>
          </div>
          {isExpanded ? (
            <ChevronUp_SVG aria-hidden="true" className="w-6" />
          ) : (
            <ChevronDown_SVG aria-hidden="true" className="w-6" />
          )}
        </div>
      </motion.button>

      <div className="relative overflow-hidden lg:flex lg:w-full lg:flex-col lg:items-start lg:justify-start">
        <AnimatePresence mode="popLayout">
          {isExpanded && (
            <motion.div
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relatve w-full"
              key={title}
            >
              {/* TODO: style ExpandableCard insides to what they were before; fix distortions on close */}
              <div className={`flex flex-col px-4 md:px-12 lg:w-full`}>{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ExpandableCard;
