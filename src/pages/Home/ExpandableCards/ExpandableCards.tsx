import { LayoutGroup, motion } from 'framer-motion';
import React from 'react';

import { homeCardsData } from '../homeData/homeCardsData';
import ExpandableCard from './ExpandableCard/ExpandableCard';

const ExpandableCards = () => {
  return (
    <motion.section
      layout="position"
      className="mb-24 flex flex-col items-start justify-evenly gap-5"
    >
      <LayoutGroup>
        {homeCardsData.map((cardData) => {
          const { icon: ExpandableCardIcon } = cardData;
          const cardShiftedDownStyle = cardData.iconIsShiftedDown ? 'top-[0.2rem]' : '';

          return (
            <ExpandableCard
              key={cardData.title}
              title={cardData.title}
              renderLeftIcon={() => (
                <ExpandableCardIcon
                  aria-hidden="true"
                  className={`relative h-6 w-6 ${cardShiftedDownStyle}`}
                />
              )}
            >
              {cardData.content()}
            </ExpandableCard>
          );
        })}
      </LayoutGroup>
    </motion.section>
  );
};

export default ExpandableCards;
