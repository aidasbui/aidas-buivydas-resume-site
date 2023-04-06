import React, { PropsWithChildren } from 'react';

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="m-auto flex h-full w-full max-w-4xl flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-color-purple-500 bg-color-purple-800 bg-opacity-50 px-6 pb-4 pt-8 shadow-2xl focus:outline-none focus-visible:outline-dashed focus-visible:outline-offset-8 focus-visible:outline-color-secondary lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
      {children}
    </div>
  );
};

export default Card;
