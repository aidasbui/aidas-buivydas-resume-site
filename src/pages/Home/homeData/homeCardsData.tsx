import { ReactComponent as AcademicCap_SVG } from '/src/assets/icons/academic-cap.svg';
import { ReactComponent as CheckmarkCirle_SVG } from '/src/assets/icons/checkmark-circle.svg';
import { ReactComponent as Coffee_SVG } from '/src/assets/icons/coffee.svg';
import { ReactComponent as GitBranch_SVG } from '/src/assets/icons/git-branch.svg';
import { ReactComponent as Experience_SVG } from '/src/assets/icons/internship.svg';

import { renderAboutThisPageSection } from '../homeData/aboutThisPageSection';
import { renderCompletedCourses } from './coursesSectionData';
import { renderExperiences } from './experienceSectionData';
import { renderHobbies } from './hobbiesSectionData';
import { renderSkillsList } from './skillsSectionData';

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
  },
  {
    title: 'Skills',
    icon: CheckmarkCirle_SVG,
    content: renderSkillsList,
    iconIsShiftedDown: true,
  },
  {
    title: 'Experience',
    icon: Experience_SVG,
    content: renderExperiences,
    iconIsShiftedDown: true,
  },
  {
    title: 'Hobbies',
    icon: Coffee_SVG,
    content: renderHobbies,
    iconIsShiftedDown: false,
  },
  {
    title: 'About This Page',
    icon: GitBranch_SVG,
    content: renderAboutThisPageSection,
    iconIsShiftedDown: true,
  },
];
