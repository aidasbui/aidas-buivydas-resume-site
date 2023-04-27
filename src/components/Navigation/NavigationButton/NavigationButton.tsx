import { motion } from 'framer-motion';
import { Levitate } from 'hooks/useLevitate';
import { TSectionTitle } from 'pages/Home/homeData/homeCardsData';
import React, { Dispatch, ReactNode, useEffect, useRef, useState } from 'react';
import scrollIntoView from 'utils/scrollIntoView';

type TNavigationButtonProps = {
  children: ReactNode;
  title: TSectionTitle;
  setActiveTab: Dispatch<React.SetStateAction<TSectionTitle>>;
  isActive: boolean;
  renderLeftIcon: () => JSX.Element;
};

const NavigationButton = ({
  children,
  title,
  setActiveTab,
  renderLeftIcon,
  isActive,
}: TNavigationButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const cardRef = useRef<HTMLButtonElement | null>(null);
  const mountedRef = useRef<boolean>(false);
  const activeNavigationButtonStyles = '!text-color-secondary';

  const activeCardHandler = () => {
    mountedRef.current = true;
    setActiveTab(title);
  };

  const levitateIconHandler = () => {
    setIsHovered((prevState) => !prevState);
  };

  const handleKeypress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      activeCardHandler();
    }
  };

  useEffect(() => {
    if (!mountedRef.current || !isActive || !cardRef) return;

    const scrollTimeout = scrollIntoView(isActive, cardRef, 'start');

    return () => {
      mountedRef.current = false;
      clearTimeout(scrollTimeout);
    };
  }, [isActive, cardRef]);

  return (
    <motion.button
      ref={cardRef}
      onKeyDown={handleKeypress}
      aria-label={`Show ${title} card`}
      aria-controls="card section content"
      aria-expanded={isActive ? 'true' : 'false'}
      className={`${
        isActive && activeNavigationButtonStyles
      } flex h-16 w-full items-center justify-center rounded-xl border-none text-center transition-colors duration-75 focus:outline-none focus-visible:outline-dashed focus-visible:-outline-offset-8 focus-visible:outline-color-secondary active:border-color-secondary active:text-color-secondary [@media(hover:hover)]:hover:text-color-secondary`}
      onClick={activeCardHandler}
      onMouseOver={levitateIconHandler}
      onMouseOut={levitateIconHandler}
      whileHover={{ scale: isActive ? 1 : 1.03 }}
      whileTap={{
        scale: 0.97,
      }}
    >
      <motion.div className="leading-0 flex items-center justify-between px-4">
        <motion.div className="flex justify-start gap-4">
          <>
            {isActive || isHovered ? (
              <Levitate>{renderLeftIcon()}</Levitate>
            ) : (
              renderLeftIcon()
            )}
          </>
          <h3 className="p-0 text-xl">{children}</h3>
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default NavigationButton;
