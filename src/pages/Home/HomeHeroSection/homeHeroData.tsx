import AidasBuivydas_CV from 'assets/files/Aidas-Buivydas-CV.pdf';

type THomeHeroData = {
  heading: string;
  paragraph: string;
  asset: string;
};

export const homeHeroData: THomeHeroData = {
  heading: `Welcome!`,
  paragraph: `You've stumbled upon my personal website.
  
          I'm a full-stack web developer, focusing on front-end, who works on bringing eye-pleasing UI solutions to end users with the help of Next.js, React, TypeScript and a load of other tools.
          
          I also make music! You'll find a link to my DJ sets in the hobbies' section below.
          (TEST TEST - Looks like GithubActions are working via a self-hosted runner!)`,
  asset: AidasBuivydas_CV,
};
