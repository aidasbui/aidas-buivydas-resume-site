import React, { useState } from 'react';

import Card from '../../../components/Card/Card';
import Navigation from '../../../components/Navigation/Navigation';
import ResizablePanel from '../../../utils/ResizablePanel';
import { homeCardsData, TSectionTitle } from '../homeData/homeCardsData';

const TabbedCards = () => {
  const [activeTab, setActiveTab] = useState<TSectionTitle>('Courses');

  return (
    <div>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <Card>
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="pb-8">{activeTab}</h1>
          <ResizablePanel>
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
