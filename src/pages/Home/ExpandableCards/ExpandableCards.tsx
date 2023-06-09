import { LayoutGroup } from 'framer-motion';
import React from 'react';

import { homeCardsData } from '../homeData/homeCardsData';
import ExpandableCard from './ExpandableCard/ExpandableCard';

const ExpandableCards = () => {
  return (
    <section className="mb-24 flex flex-col items-start justify-evenly gap-5">
      <LayoutGroup>
        {homeCardsData.map((cardData) => {
          const { icon: ExpandableCardIcon } = cardData;
          const cardShiftedDownStyle = cardData.iconIsShiftedDown ? 'top-[0.2rem]' : '';

          return (
            <ExpandableCard
              key={`${cardData.title}-expandableCard${Math.random()}`}
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
    </section>
  );
};

export default ExpandableCards;
