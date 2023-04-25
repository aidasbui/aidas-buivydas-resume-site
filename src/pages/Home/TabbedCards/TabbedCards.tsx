import Card from 'components/Card/Card';
import Navigation from 'components/Navigation/Navigation';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import { homeCardsData, TSectionTitle } from '../homeData/homeCardsData';

const TabbedCards = () => {
  const [activeTab, setActiveTab] = useState<TSectionTitle>('Courses');

  return (
    <>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <motion.div layout="size">
        <Card>
          <motion.div
            layout="position"
            className="relative flex w-full flex-col items-center justify-center"
          >
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={`${activeTab}-${Math.random()}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:flex lg:w-full lg:flex-col lg:items-start lg:justify-start"
              >
                <div className={`flex flex-col px-4 md:px-12 lg:w-full`}>
                  <h1 className="self-center pb-8">{activeTab}</h1>
                  {homeCardsData
                    .find((sectionData) => sectionData.title === activeTab)
                    ?.content()}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Card>
      </motion.div>
    </>
  );
};

export default TabbedCards;
