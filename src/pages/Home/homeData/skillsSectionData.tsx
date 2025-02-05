import { ReactComponent as Checkbox_SVG } from 'assets/icons/checkbox.svg';

type Tskills = string[];

export const skills: Tskills = [
  'Next.js',
  'React.js',
  'TypeScript',
  'JavaScript',
  'Prisma',
  'Tailwind CSS',
  'PostgreSQL',
  'Docker',
  'Semantic HTML',
  'CSS',
  'SASS',
  'Git',
  'BEM',
  'Arch Linux',
  'WebPack',
  'Vite',
];

export const renderSkillsList = () => {
  return (
    <section className="flex flex-col justify-center pb-6 lg:items-center">
      <p className="pb-6">The skills I&apos;ve achieved:</p>
      <div className="lg:flex lg:w-1/2">
        <ul className="flex flex-col px-8 md:h-80 md:flex-wrap md:items-start md:justify-center md:gap-x-48 lg:justify-start lg:gap-x-40 lg:px-0">
          {skills.map((skill) => {
            return (
              <li key={skill}>
                <h3 className="relative pb-2 pl-2 font-jetbrainsMono text-lg text-color-white">
                  <Checkbox_SVG
                    aria-hidden="true"
                    className="absolute -left-8 top-[0.2rem] w-6 text-color-secondary"
                  />
                  {skill}
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
