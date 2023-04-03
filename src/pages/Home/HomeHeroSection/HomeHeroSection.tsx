import { motion } from 'framer-motion';
import React from 'react';

import { ReactComponent as SaveFloppy_SVG } from '../../../assets/icons/save-floppy.svg';
import Button from '../../../components/Button';
import { Levitate } from '../../../hooks/useLevitate';
import { homeHeroData } from './homeHeroData';

const HomeHeroSection = () => {
  return (
    <section className="mb-48 flex w-full flex-col gap-12">
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
