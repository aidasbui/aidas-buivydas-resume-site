import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 flex h-full flex-col items-center justify-center border-b-2 border-color-purple-700 py-4 px-12 text-center shadow-xl">
      <div className="h-28 w-28 rounded-full border-2 border-color-purple-700 bg-color-purple-500">
        <img
          className="h-full w-full rounded-full object-cover"
          src="/src/assets/images/aidas-buivydas.jpeg"
          alt="Aidas Buivydas"
        />
      </div>
      <h1 className="py-2">Aidas Buivydas</h1>
      <div className=" font-vt323 text-xl">Front-end Web Developer</div>
    </header>
  );
};

export default Header;
