import { motion } from 'framer-motion';
import React, { ReactNode, useState } from 'react';

import { ReactComponent as ChevronDown_SVG } from '../../assets/icons/chevron-down.svg';
import { ReactComponent as ChevronUp_SVG } from '../../assets/icons/chevron-up.svg';
import { useLevitate as Levitate } from '../../hooks/useLevitate';

type Props = {
  children?: ReactNode;
  title: string;
  renderLeftIcon: () => JSX.Element;
};

const ExpandableCard = ({ title, renderLeftIcon }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const expandedButtonStyles = ' text-color-secondary';

  const expandedCardStyles = '!bg-color-purple-600 border-color-secondary pb-4';

  const expandCardHandler = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const levitateIconHandler = () => {
    setIsHovered((prevState) => !prevState);
  };

  return (
    <motion.div
      className={`${
        isExpanded && expandedCardStyles
      } h-full w-full max-w-sm transform-gpu overflow-hidden rounded-xl border-2 bg-color-purple-800 px-4 shadow-2xl transition-colors duration-75 hover:bg-color-purple-600 active:border-color-secondary active:bg-color-purple-600
  `}
      whileHover={{ scale: isExpanded ? 1 : 1.03 }}
      whileTap={{
        scale: isExpanded ? 1 : 0.97,
      }}
      style={{ borderRadius: '0.75rem' }}
    >
      <motion.button
        key="expandable-card-button"
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
        <motion.div className="leading-0 flex items-center justify-between">
          <motion.div className="flex justify-start gap-4">
            <>{isHovered ? <Levitate>{renderLeftIcon()}</Levitate> : renderLeftIcon()}</>
            <h3 className="p-0 text-xl">{title}</h3>
          </motion.div>
          {isExpanded ? (
            <ChevronUp_SVG className="w-6" />
          ) : (
            <ChevronDown_SVG className="w-6" />
          )}
        </motion.div>
      </motion.button>

      {isExpanded && (
        <motion.div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id delectus eius
            dolor unde. Tempora natus, consequatur consequuntur debitis doloribus soluta.
            Fugit inventore eveniet molestiae ipsum earum quas alias ab accusantium. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quod! Suscipit
            sequi est dolorem obcaecati quibusdam in cupiditate ullam hic explicabo
            voluptates, autem velit facilis architecto eaque distinctio, ipsum non.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExpandableCard;
