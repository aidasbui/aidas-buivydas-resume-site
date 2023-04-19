import { ReactComponent as AcademicCap_SVG } from 'assets/icons/academic-cap.svg';
import { ReactComponent as CheckmarkCirle_SVG } from 'assets/icons/checkmark-circle.svg';
import { ReactComponent as Coffee_SVG } from 'assets/icons/coffee.svg';
import { ReactComponent as GitBranch_SVG } from 'assets/icons/git-branch.svg';
import { ReactComponent as Experience_SVG } from 'assets/icons/internship.svg';
import { ObjectValues } from 'types/helpers';

import { renderAboutThisPageSection } from '../homeData/aboutThisPageSection';
import { renderCompletedCourses } from './coursesSectionData';
import { renderExperiences } from './experienceSectionData';
import { renderHobbies } from './hobbiesSectionData';
import { renderSkillsList } from './skillsSectionData';

const sectionTitlesEnum = {
  COURSES: 'Courses',
  SKILLS: 'Skills',
  EXPERIENCE: 'Experience',
  HOBBIES: 'Hobbies',
  ABOUT_THIS_PAGE: 'About This Page',
} as const;

export type TSectionTitle = ObjectValues<typeof sectionTitlesEnum>;

type THomeCardsData = {
  title: TSectionTitle;
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
