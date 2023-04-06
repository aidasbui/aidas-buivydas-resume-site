import { ReactComponent as CodeBracket_SVG } from '/src/assets/icons/code-bracket.svg';
import { ReactComponent as Gamepad_SVG } from '/src/assets/icons/gamepad.svg';

type TAboutThisPageSectionData = {
  aboutThisPageDescription: string;
  toolsHeading: string;
  toolsDescription: string;
  toolsList: string[];
};

export const aboutThisPageSectionData: TAboutThisPageSectionData = {
  aboutThisPageDescription: `This is my personal project that acts as a resume or portfolio.`,

  toolsHeading: `Tools used:`,
  toolsDescription: `You can check out my GitHub repo for full information.

  Note: it's my first time using TailWind CSS and setting up a project with Vite (nice opportunity to learn). Feel free to comment the project, I'd love to learn some new tricks!`,
  toolsList: [
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Vite',
    'React Router v6',
    'ESLint and Prettier',
  ],
};

export const renderAboutThisPageSection = () => {
  const { aboutThisPageDescription, toolsHeading, toolsDescription, toolsList } =
    aboutThisPageSectionData;

  return (
    <section className="pb-8">
      <p className="whitespace-pre-line pb-4">{aboutThisPageDescription}</p>
      <h3 className="whitespace-pre-line pb-0 font-jetbrainsMono text-base">
        {toolsHeading}
      </h3>

      <ul className="px-12 pb-10">
        {toolsList.map((tool) => {
          return (
            <li key={tool}>
              <div>
                <h4 className="relative pb-0 pr-4 font-jetbrainsMono text-base leading-tight">
                  <Gamepad_SVG
                    aria-hidden="true"
                    className="relative -left-10 top-[1.42rem] w-6 text-color-secondary"
                  />
                  {tool}
                </h4>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="whitespace-pre-line">{toolsDescription}</p>
    </section>
  );
};
