import Card from 'components/Card/Card';
import Navigation from 'components/Navigation/Navigation';
import React, { useState } from 'react';
import ResizablePanel from 'utils/ResizablePanel';

import { homeCardsData, TSectionTitle } from '../homeData/homeCardsData';

const TabbedCards = () => {
  const [activeTab, setActiveTab] = useState<TSectionTitle>('Courses');

  return (
    <div>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <Card>
        <div className="flex w-full flex-col items-center justify-center">
          <ResizablePanel title={activeTab} active={!!activeTab}>
            <h1 className="self-center pb-8">{activeTab}</h1>
            {homeCardsData
              .find((sectionData) => sectionData.title === activeTab)
              ?.content()}
          </ResizablePanel>
        </div>
      </Card>
    </div>
  );
};

export default TabbedCards;
