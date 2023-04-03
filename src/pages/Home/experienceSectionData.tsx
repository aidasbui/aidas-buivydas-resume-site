import SourceryAcademyCertificate from '../../assets/files/Aidas-Buivydas_sourcery-academy-certificate.pdf';
import { ReactComponent as BriefcaseCheck_SVG } from '../../assets/icons/briefcase-check.svg';
import { ReactComponent as SaveFloppy_SVG } from '../../assets/icons/save-floppy.svg';
import Button from '../../components/Button/Button';

type TExperienceSectionData = {
  experienceTitle: string;
  experienceDateStart?: string;
  experienceDateEnd?: string;
  experienceDescription: string;
  experienceAsset?: string;
}[];

export const experienceSectionData: TExperienceSectionData = [
  {
    experienceTitle: 'Sourcery Academy for Front-End (DevBridge, Cognizant Softvision)',
    experienceDateStart: '2022-10',
    experienceDateEnd: '2023-01',
    experienceDescription: `I graduated the 3-month high intensity program at DevBridge, Cognizant Softvision.

    Together with a team of 4 students (in total), I worked on a web project that had a provided custom Figma design. On top of that, the academy held weekly lectures (click on the button below to download the graduation certificate, which lists all the topics).

    The experience has taught me a great deal about working in a team and what a front-end engineer's day looks like. There's no better feeling than pushing your skills to the limit!
    `,
    experienceAsset: SourceryAcademyCertificate,
  },
];

export const renderExperiences = () => {
  return (
    <section className="pb-4">
      <ul className="px-8">
        {experienceSectionData.map(
          ({
            experienceTitle,
            experienceDescription,
            experienceDateStart,
            experienceDateEnd,
            experienceAsset,
          }) => {
            return (
              <li key={experienceTitle}>
                <div className="pb-6">
                  <h3 className="relative pb-2 font-jetbrainsMono text-base text-color-secondary">
                    <BriefcaseCheck_SVG
                      aria-hidden="true"
                      className="relative -left-8 top-6 w-6"
                    />
                    {experienceTitle}
                  </h3>
                  {experienceDateStart && (
                    <small className="text-xs text-gray-200 content-['']">
                      <p>
                        <time dateTime={experienceDateStart}>{experienceDateStart}</time>{' '}
                        {' - '}
                        <time dateTime={experienceDateEnd ? experienceDateEnd : ''}>
                          {experienceDateEnd ? experienceDateEnd : 'Present'}
                        </time>
                      </p>
                    </small>
                  )}
                  <p className="whitespace-pre-line pb-4">{experienceDescription}</p>
                </div>

                <div className="flex justify-center">
                  <Button href={experienceAsset} download="Aidas Buivydas CV">
                    <div className="flex items-center justify-center gap-2">
                      <SaveFloppy_SVG
                        className="relative h-6 w-6"
                        aria-hidden="true"
                        aria-label="download certificate"
                      />
                      Certificate
                    </div>
                  </Button>
                </div>
              </li>
            );
          },
        )}
      </ul>
    </section>
  );
};
