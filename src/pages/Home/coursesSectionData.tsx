import { ReactComponent as Checkmark_SVG } from '../../assets/icons/check.svg';
import { Levitate } from '../../hooks/useLevitate';

type Tcourses = {
  title: string;
  inProgress: boolean;
}[];

export const courses: Tcourses = [
  {
    title: 'Understanding Typescript, Academind GmbH',
    inProgress: false,
  },
  {
    title: 'React and TypeScript (v2), Frontend Masters',
    inProgress: false,
  },
  {
    title: 'React - The Complete Guide, Academind GmbH',
    inProgress: true,
  },
  {
    title: 'JavaScript - The Complete Guide, Academind GmbH',
    inProgress: false,
  },
  {
    title: 'CSS - The Complete Guide, Academind GmbH',
    inProgress: false,
  },
];

export const renderCompletedCourses = () => {
  return (
    <section className="pb-4">
      <p className="pb-6">
        Here are the courses I&apos;ve completed or am currently going through:
      </p>
      <ul className="px-8">
        {courses.map(({ title, inProgress }) => {
          return (
            <li key={title} className="pb-4">
              <h3 className="relative pb-2 font-jetbrainsMono text-lg text-color-secondary">
                <Levitate>
                  <Checkmark_SVG
                    aria-hidden="true"
                    className="absolute -left-8 -top-[1.1rem] w-6"
                  />
                </Levitate>
                {title}
              </h3>
              <small className="text-xs text-gray-200 content-['']">
                {inProgress ? '(In Progress)' : ''}
              </small>
            </li>
          );
        })}
      </ul>
    </section>
  );
};