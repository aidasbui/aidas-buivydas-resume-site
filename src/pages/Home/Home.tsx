import { LayoutGroup, motion } from 'framer-motion';
import React from 'react';

import { ReactComponent as AcademicCap_SVG } from '../../assets/icons/academic-cap.svg';
import { ReactComponent as CheckmarkCirle_SVG } from '../../assets/icons/github.svg';
import ExpandableCard from '../../components/ExpandableCard';
import { useLevitate as Levitate } from '../../hooks/useLevitate';
import { TTextContent } from '../../types/text-content';

const Home = () => {
  const heroHeading: TTextContent = `Welcome!`;

  const heroParagraph: TTextContent = `You've encountered my personal website.

  I'm a front-end web developer, who works on bringing eye-pleasing UI solutions to end users with the help of React, TypeScript and a load of other tools.
  
  I also make music! Feel free to check out a few of my recent DJ sets on MixCloud.`;

  return (
    <div className="w-full">
      <section>
        <motion.h2>
          <Levitate>{heroHeading}</Levitate>
        </motion.h2>
        <p className="whitespace-pre-line">{heroParagraph}</p>
      </section>
      <section className="flex flex-col items-center justify-evenly gap-5 py-16">
        <LayoutGroup>
          <ExpandableCard
            key="courses"
            title="Courses"
            renderLeftIcon={() => (
              <AcademicCap_SVG className="relative top-[0.2rem] h-6 w-6" />
            )}
          >
            <p>Zdrw</p>
          </ExpandableCard>
          <ExpandableCard
            key="skills"
            title="Skills"
            renderLeftIcon={() => (
              <CheckmarkCirle_SVG className="relative top-[0.2rem] h-6 w-6" />
            )}
          >
            <p>Zdrw</p>
          </ExpandableCard>
        </LayoutGroup>
      </section>

      {/* <ExpandableCard title="Internships" />
        <ExpandableCard title="Hobbies" />
        <ExpandableCard title="About This Page" /> */}
    </div>
  );
};

export default Home;
