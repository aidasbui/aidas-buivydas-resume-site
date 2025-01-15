import { ReactComponent as ExtLink_SVG } from 'assets/icons/external-link.svg';
import { ReactComponent as Gamepad_SVG } from 'assets/icons/gamepad.svg';

type TAboutThisPageSectionData = {
  aboutThisPageDescription: string;
  toolsHeading: string;
  toolsList: string[];
};

export const aboutThisPageSectionData: TAboutThisPageSectionData = {
  aboutThisPageDescription: `This is my personal project that acts as a resume or portfolio.`,

  toolsHeading: `Tools used:`,
  toolsList: [
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Vite',
    'React Router v6',
    'ESLint and Prettier',
    'Docker',
    'Nginx Proxy Manager',
    'Debian 12',
  ],
};

const anchorStyles =
  'inline-flex items-center gap-2 rounded-xl text-center transition-colors duration-75 hover:text-color-secondary h-full leading-[0] relative top-[3px]';

export const renderAboutThisPageSection = () => {
  const { aboutThisPageDescription, toolsHeading, toolsList } = aboutThisPageSectionData;

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
      <p className="whitespace-pre-line">
        {`You can check out my `}{' '}
        <a
          href="https://github.com/aidasbui/aidas-buivydas-resume-site/tree/master"
          className={anchorStyles}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="aidasbui.com Github repository"
        >
          <ExtLink_SVG aria-hidden="true" className="h-4 w-4" />
          GitHub repo
        </a>
        {` for full information.`}
      </p>
    </section>
  );
};
