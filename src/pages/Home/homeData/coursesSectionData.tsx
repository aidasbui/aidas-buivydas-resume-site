import { ReactComponent as Checkmark_SVG } from 'assets/icons/check.svg';

type Tcourses = {
  title: string;
  inProgress: boolean;
}[];

export const courses: Tcourses = [
  {
    title: 'Java Programming I (MOOC), University of Helsinki',
    inProgress: true,
  },
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
    inProgress: false,
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
    <section className="pb-4 lg:flex lg:flex-col lg:items-center">
      <p className="pb-6">
        Here are the courses I&apos;ve completed or am currently going through:
      </p>
      <div className="lg:flex lg:justify-center">
        <ul className="pl-10">
          {courses.map(({ title, inProgress }) => {
            return (
              <li key={title} className="pb-4">
                <h3 className="relative pb-0 font-jetbrainsMono text-lg text-color-secondary">
                  <Checkmark_SVG
                    aria-hidden="true"
                    className="-top absolute -left-10 w-6"
                  />
                  {title}
                </h3>
                <small className="text-xs text-gray-200 content-['']">
                  {inProgress ? '(In Progress)' : ''}
                </small>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
