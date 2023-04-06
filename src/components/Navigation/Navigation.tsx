import React from 'react';

import { homeCardsData } from '../../pages/Home/ExpandableCards/homeCardsData';
import NavigationButton from './NavigationButton/NavigationButton';

const Navigation = () => {
  return (
    <nav className="flex gap-4">
      {homeCardsData.map((cardData) => {
        const { icon: NavigationButtonIcon, iconIsShiftedDown, title } = cardData;
        const cardShiftedDownStyle = iconIsShiftedDown ? 'top-[0.2rem]' : '';

        return (
          <NavigationButton
            key={title}
            title={title}
            setActiveCard={() => console.log('Setting active card')}
            renderLeftIcon={() => (
              <NavigationButtonIcon
                aria-hidden="true"
                className={`relative h-6 w-6 ${cardShiftedDownStyle}`}
              />
            )}
          >
            {title}
          </NavigationButton>
        );
      })}
    </nav>
  );
};

export default Navigation;
