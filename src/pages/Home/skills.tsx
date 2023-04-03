import { ReactComponent as Checkbox_SVG } from '../../assets/icons/checkbox.svg';

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
    <section className="pb-4">
      <p className="pb-6">The skills I&apos;ve achieved:</p>
      <ul className="px-8">
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
    </section>
  );
};
