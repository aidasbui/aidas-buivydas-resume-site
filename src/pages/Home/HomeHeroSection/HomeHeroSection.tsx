import { ReactComponent as SaveFloppy_SVG } from 'assets/icons/save-floppy.svg';
import Button from 'components/Button';
import { motion } from 'framer-motion';
import { Levitate } from 'hooks/useLevitate';
import React from 'react';

import { homeHeroData } from './homeHeroData';

const HomeHeroSection = () => {
  return (
    <section className="mb-48 flex w-full flex-col gap-12 sm:max-w-lg md:max-w-3xl lg:mb-12 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
      <div>
        <motion.h2>
          <Levitate>{homeHeroData.heading}</Levitate>
        </motion.h2>
        <p className="whitespace-pre-line">{homeHeroData.paragraph}</p>
      </div>

      <div className="flex justify-center">
        <Button href={homeHeroData.asset} download="Aidas Buivydas CV">
          <div className="flex items-center justify-center gap-2">
            <SaveFloppy_SVG className="relative h-6 w-6" aria-hidden="true" />
            Download CV
          </div>
        </Button>
      </div>
    </section>
  );
};

export default HomeHeroSection;
