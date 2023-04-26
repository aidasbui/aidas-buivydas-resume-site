import ContactsSection from 'components/ContactsSection';
import { motion } from 'framer-motion';
import useMediaQuery from 'hooks/useMediaQuery';
import { ParallaxScroll } from 'hooks/useParallaxScroll';

import ExpandableCards from './ExpandableCards/ExpandableCards';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';
import TabbedCards from './TabbedCards/TabbedCards';

const Home = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="relative flex w-full flex-col gap-12">
      {/* TODO: implement prefers reduced motion with framer-motion */}
      <ParallaxScroll transformPercentOutput={['0%', '-10%']}>
        <HomeHeroSection />
      </ParallaxScroll>

      {/* <LayoutGroup> */}
      <div className="flex w-full flex-col">
        <ParallaxScroll transformPercentOutput={['0%', '-5%']}>
          <div>{isDesktop ? <TabbedCards /> : <ExpandableCards />}</div>
        </ParallaxScroll>

        {!isDesktop && (
          <motion.div layout="position" className="flex justify-start px-[1.1rem]">
            <ParallaxScroll transformPercentOutput={['0', '-50%']}>
              <ContactsSection />
            </ParallaxScroll>
          </motion.div>
        )}
      </div>
      {/* </LayoutGroup> */}
    </div>
  );
};

export default Home;
