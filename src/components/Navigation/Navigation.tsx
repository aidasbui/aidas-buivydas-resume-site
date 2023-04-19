import { homeCardsData, TSectionTitle } from 'pages/Home/homeData/homeCardsData';
import React, { Dispatch } from 'react';

import NavigationButton from './NavigationButton/NavigationButton';

type TNavigationProps = {
  setActiveTab: Dispatch<React.SetStateAction<TSectionTitle>>;
  activeTab: TSectionTitle;
};

const Navigation = ({ setActiveTab, activeTab }: TNavigationProps) => {
  return (
    <nav className="flex gap-4">
      {homeCardsData.map((cardData) => {
        const { icon: NavigationButtonIcon, iconIsShiftedDown, title } = cardData;
        const cardShiftedDownStyle = iconIsShiftedDown ? 'top-[0.2rem]' : '';

        return (
          <NavigationButton
            key={title}
            title={title}
            setActiveTab={setActiveTab}
            isActive={activeTab === title}
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
