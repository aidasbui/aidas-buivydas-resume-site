import React from 'react';

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
        <h2>
          <Levitate>{heroHeading}</Levitate>
        </h2>
        <p className="whitespace-pre-line">{heroParagraph}</p>
      </section>
    </div>
  );
};

export default Home;
