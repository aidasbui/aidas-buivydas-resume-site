import { ReactComponent as Checkbox_SVG } from '../../../assets/icons/checkbox.svg';

type Tskills = string[];

export const skills: Tskills = [
  'React.js',
  'TypeScript',
  'JavaScript',
  'Semantic HTML',
  'CSS',
  'SASS',
  'Tailwind CSS',
  'Git',
  'Agile Methodologies',
  'BEM',
  'Arch Linux',
  'WebPack',
  'Vite.js',
  'Web Project Structure',
  'Dynamic Components',
];

export const renderSkillsList = () => {
  return (
    <section className="flex flex-col justify-center pb-6">
      <p className="pb-6">The skills I&apos;ve achieved:</p>
      <ul className="flex flex-col px-8 md:h-80 md:flex-wrap md:items-start md:justify-center md:gap-x-48">
        {skills.map((skill) => {
          return (
            <li key={skill} className="">
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
    </section>
  );
};
