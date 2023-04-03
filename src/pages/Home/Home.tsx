import React from 'react';

import ContactsSection from '../../components/ContactsSection';
import { ParallaxScroll } from '../../hooks/useParallaxScroll';
import ExpandableCards from './ExpandableCards/ExpandableCards';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';

const Home = () => {
  return (
    <div className="relative flex w-full flex-col gap-12">
      {/* TODO: implement prefers reduced motion with framer-motion */}
      <ParallaxScroll transformPercentOutput={['0%', '-10%']} animationDirection="y">
        <HomeHeroSection />
      </ParallaxScroll>

      <ParallaxScroll transformPercentOutput={['0%', '-5%']}>
        <ExpandableCards />
      </ParallaxScroll>

      <ParallaxScroll transformPercentOutput={['0', '-50%']}>
        <div className="px-[1.1rem]">
          <ContactsSection />
        </div>
      </ParallaxScroll>
    </div>
  );
};

export default Home;
