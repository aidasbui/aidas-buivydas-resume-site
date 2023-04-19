import AidasBuivydas_CV from 'assets/files/Aidas-Buivydas-CV.pdf';

type THomeHeroData = {
  heading: string;
  paragraph: string;
  asset: string;
};

export const homeHeroData: THomeHeroData = {
  heading: `Welcome!`,
  paragraph: `You've stumbled upon my personal website.
  
          I'm a front-end web developer, who works on bringing eye-pleasing UI solutions to end users with the help of React, TypeScript and a load of other tools.
          
          I also make music! You'll find a link to my DJ sets in the hobbies' section below.`,
  asset: AidasBuivydas_CV,
};
