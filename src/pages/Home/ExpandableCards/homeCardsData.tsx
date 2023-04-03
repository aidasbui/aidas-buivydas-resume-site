import { ReactComponent as AcademicCap_SVG } from '/src/assets/icons/academic-cap.svg';
import { ReactComponent as CheckmarkCirle_SVG } from '/src/assets/icons/checkmark-circle.svg';
import { ReactComponent as Coffee_SVG } from '/src/assets/icons/coffee.svg';
import { ReactComponent as GitBranch_SVG } from '/src/assets/icons/git-branch.svg';
import { ReactComponent as Experience_SVG } from '/src/assets/icons/internship.svg';

import { renderCompletedCourses } from '../courses';
import { renderSkillsList } from '../skills';

type THomeCardsData = {
  title: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  content: () => JSX.Element;
  assets?: string;
  iconIsShiftedDown: boolean;
}[];

export const homeCardsData: THomeCardsData = [
  {
    title: 'Courses',
    icon: AcademicCap_SVG,
    content: renderCompletedCourses,
    iconIsShiftedDown: true,
    // assets:,
  },
  {
    title: 'Skills',
    icon: CheckmarkCirle_SVG,
    content: renderSkillsList,
    iconIsShiftedDown: true,
    // assets:,
  },
  {
    title: 'Experience',
    icon: Experience_SVG,
    content: renderCompletedCourses, //TODO: add section content and render
    iconIsShiftedDown: true,
    // assets:,
  },
  {
    title: 'Hobbies',
    icon: Coffee_SVG,
    content: renderCompletedCourses, //TODO: add section content and render
    iconIsShiftedDown: false,
    // assets:,
  },
  {
    title: 'About This Page',
    icon: GitBranch_SVG,
    content: renderCompletedCourses, //TODO: add section content and render
    iconIsShiftedDown: true,
    // assets:,
  },
];
