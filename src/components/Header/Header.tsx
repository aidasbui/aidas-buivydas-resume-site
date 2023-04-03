import React from 'react';

import { ParallaxScroll } from '../../hooks/useParallaxScroll';

const Header = () => {
  return (
    <ParallaxScroll>
      <header className="left-0 top-0 z-50 flex h-full flex-col items-center justify-center px-8 py-5 text-center shadow-xl backdrop-blur-lg backdrop-opacity-50">
        <div className="h-28 w-28 rounded-full border-2 border-color-purple-700 bg-color-purple-500">
          <img
            className="h-full w-full rounded-full object-cover"
            src="/src/assets/images/aidas-buivydas.jpeg"
            alt="Aidas Buivydas"
          />
        </div>
        <h1 className="py-2 text-left">Aidas Buivydas</h1>
        <div className=" font-vt323 text-xl">Front-end Web Developer</div>
      </header>
    </ParallaxScroll>
  );
};

export default Header;
