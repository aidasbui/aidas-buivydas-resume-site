import aidasbuivydas_JPEG from 'assets/images/aidas-buivydas.jpeg';
import useMediaQuery from 'hooks/useMediaQuery';
import { ParallaxScroll } from 'hooks/useParallaxScroll';
import React from 'react';

import ContactsSection from '../ContactsSection/ContactsSection';

const Header = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <ParallaxScroll>
      <header className="left-0 top-0 z-50 mx-auto flex h-full flex-col items-center justify-center px-8 py-5 text-center shadow-xl backdrop-blur-lg backdrop-opacity-50 lg:flex-row lg:py-4 lg:text-left ">
        <div className="flex w-full lg:max-w-5xl lg:justify-between xl:max-w-6xl 2xl:max-w-7xl">
          <div className="flex w-full flex-col items-center lg:flex-row lg:gap-6">
            <div className="h-28 w-28 rounded-full border-2 border-color-purple-700 bg-color-purple-500 lg:h-28 lg:w-28 ">
              <img
                className="h-[full] w-full rounded-full object-cover"
                src={aidasbuivydas_JPEG}
                alt="Aidas Buivydas"
              />
            </div>
            <div className="lg:flex lg:flex-col lg:justify-center">
              <h1 className="py-2 text-left">Aidas Buivydas</h1>
              <div className=" font-vt323 text-xl">Front-end Web Developer</div>
            </div>
          </div>
          {isDesktop && (
            <div>
              <ContactsSection />
            </div>
          )}
        </div>
      </header>
    </ParallaxScroll>
  );
};

export default Header;
