import { LayoutGroup, motion } from 'framer-motion';
import React from 'react';

import AidasBuivydas_CV from '../../assets/files/Aidas-Buivydas-CV.pdf';
import { ReactComponent as AcademicCap_SVG } from '../../assets/icons/academic-cap.svg';
import { ReactComponent as CheckmarkCirle_SVG } from '../../assets/icons/checkmark-circle.svg';
import { ReactComponent as Coffee_SVG } from '../../assets/icons/coffee.svg';
import { ReactComponent as GitBranch_SVG } from '../../assets/icons/git-branch.svg';
import { ReactComponent as Internship_SVG } from '../../assets/icons/internship.svg';
import { ReactComponent as SaveFloppy_SVG } from '../../assets/icons/save-floppy.svg';
import Button from '../../components/Button';
import ContactsSection from '../../components/ContactsSection';
import ExpandableCard from '../../components/ExpandableCard';
import { useLevitate as Levitate } from '../../hooks/useLevitate';
import { ParallaxScroll } from '../../hooks/useParallaxScroll';
import { TTextContent } from '../../types/text-content';

const Home = () => {
  const heroHeading: TTextContent = `Welcome!`;

  const heroParagraph: TTextContent = `You've encountered my personal website.

  I'm a front-end web developer, who works on bringing eye-pleasing UI solutions to end users with the help of React, TypeScript and a load of other tools.
  
  I also make music! Feel free to check out a few of my recent DJ sets on MixCloud.`;

  return (
    <div className="relative flex w-full flex-col gap-12">
      <ParallaxScroll>
        {/* TO DO: ParallaxScroll causes the height of the root div go up when cards are opened. Possible fix - wrap sections in separate ParallaxScrolls. Animation looks sexy though. ;) */}
        <section className="flex w-full flex-col gap-12">
          <div>
            <motion.h2>
              <Levitate>{heroHeading}</Levitate>
            </motion.h2>
            <p className="whitespace-pre-line">{heroParagraph}</p>
          </div>

          <div className="flex justify-center">
            <Button href={AidasBuivydas_CV} download="Aidas Buivydas CV">
              <div className="flex items-center justify-center gap-2">
                <SaveFloppy_SVG className="relative h-6 w-6" aria-hidden="true" />
                Download CV
              </div>
            </Button>
          </div>
        </section>
        <section className="flex flex-col items-center justify-evenly gap-5 py-16">
          <LayoutGroup>
            <ExpandableCard
              key="courses"
              title="Courses"
              renderLeftIcon={() => (
                <AcademicCap_SVG
                  aria-hidden="true"
                  className="relative top-[0.2rem] h-6 w-6"
                />
              )}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
                laudantium consequuntur iste a soluta blanditiis quisquam cumque provident
                hic. Autem recusandae iusto dicta incidunt laboriosam blanditiis?
                Eligendi, velit labore! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Unde accusamus iste deserunt fugiat saepe numquam sed
                voluptatem minima pariatur! Nesciunt dolor soluta nam laboriosam sequi
                illo consequuntur asperiores, facilis nostrum?
              </p>
            </ExpandableCard>

            <ExpandableCard
              key="skills"
              title="Skills"
              renderLeftIcon={() => (
                <CheckmarkCirle_SVG
                  aria-hidden="true"
                  className="relative top-[0.2rem] h-6 w-6"
                />
              )}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
                laudantium consequuntur iste a soluta blanditiis quisquam cumque provident
                hic. Autem recusandae iusto dicta incidunt laboriosam blanditiis?
                Eligendi, velit labore! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Unde accusamus iste deserunt fugiat saepe numquam sed
                voluptatem minima pariatur! Nesciunt dolor soluta nam laboriosam sequi
                illo consequuntur asperiores, facilis nostrum?
              </p>
            </ExpandableCard>

            <ExpandableCard
              key="internships"
              title="Internships"
              renderLeftIcon={() => (
                <Internship_SVG
                  aria-hidden="true"
                  className="relative top-[0.2rem] h-6 w-6"
                />
              )}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
                laudantium consequuntur iste a soluta blanditiis quisquam cumque provident
                hic. Autem recusandae iusto dicta incidunt laboriosam blanditiis?
                Eligendi, velit labore! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Unde accusamus iste deserunt fugiat saepe numquam sed
                voluptatem minima pariatur! Nesciunt dolor soluta nam laboriosam sequi
                illo consequuntur asperiores, facilis nostrum?
              </p>
            </ExpandableCard>

            <ExpandableCard
              key="hobbies"
              title="Hobbies"
              renderLeftIcon={() => (
                <Coffee_SVG
                  aria-hidden="true"
                  className="relative top-[0.2rem] h-6 w-6"
                />
              )}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
                laudantium consequuntur iste a soluta blanditiis quisquam cumque provident
                hic. Autem recusandae iusto dicta incidunt laboriosam blanditiis?
                Eligendi, velit labore! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Unde accusamus iste deserunt fugiat saepe numquam sed
                voluptatem minima pariatur! Nesciunt dolor soluta nam laboriosam sequi
                illo consequuntur asperiores, facilis nostrum?
              </p>
            </ExpandableCard>

            <ExpandableCard
              key="about-this-page"
              title="About this page"
              renderLeftIcon={() => (
                <GitBranch_SVG
                  aria-hidden="true"
                  className="relative top-[0.2rem] h-6 w-6"
                />
              )}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
                laudantium consequuntur iste a soluta blanditiis quisquam cumque provident
                hic. Autem recusandae iusto dicta incidunt laboriosam blanditiis?
                Eligendi, velit labore! Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Unde accusamus iste deserunt fugiat saepe numquam sed
                voluptatem minima pariatur! Nesciunt dolor soluta nam laboriosam sequi
                illo consequuntur asperiores, facilis nostrum?
              </p>
            </ExpandableCard>
          </LayoutGroup>
        </section>
        <div className="px-[1.1rem]">
          <ContactsSection />
        </div>
      </ParallaxScroll>
    </div>
  );
};

export default Home;
