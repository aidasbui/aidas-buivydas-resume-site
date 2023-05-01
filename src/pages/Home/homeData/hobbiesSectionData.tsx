import { ReactComponent as ExtLink_SVG } from 'assets/icons/external-link.svg';
import { ReactComponent as Gamepad_SVG } from 'assets/icons/gamepad.svg';

type THobbiesSectionData = {
  hobbiesDescription: string;
  hobbyListDescription: string;
  hobbyList: string[];
  hobbyLinksDescription: string;
  hobbyLinks: {
    title: string;
    link: string;
  }[];
};

export const hobbiesSectionData: THobbiesSectionData = {
  hobbiesDescription: `These days, I mostly play drums in band and tinker with VCV Rack, though I play the guitar, too.`,

  hobbyListDescription: `Here are a few activities in which I love to partake (the list is incomplete and inevitably indefinite):`,
  hobbyList: [
    'Sound design/music production',
    'Coffee brewing (I prefer V60)',
    'Learning Linux (by configuring my Arch system)',
    'Cinephilia',
    'Chess and other tabletops (Go, D&D and such)',
    'Analog photography',
    'Ceramics',
  ],

  hobbyLinksDescription: `Some links:`,

  hobbyLinks: [
    {
      title: 'My Spotify playlists',
      link: 'https://open.spotify.com/user/11100180654?si=b90279530cc84450',
    },
    { title: 'My Letterboxd account', link: 'https://letterboxd.com/aidasbui/' },
    {
      title: 'DJ sets',
      link: 'https://www.mixcloud.com/ViolentIntentions/',
    },
    {
      title: 'Karakumai festival',
      link: 'https://www.facebook.com/karakumukarakumai',
    },
  ],
};

export const renderHobbies = () => {
  const {
    hobbiesDescription,
    hobbyListDescription,
    hobbyList,
    hobbyLinksDescription,
    hobbyLinks,
  } = hobbiesSectionData;

  const anchorStyles =
    'flex items-center gap-4 rounded-xl text-center transition-colors duration-75 hover:text-color-secondary pb-2';

  return (
    <section className="pb-6">
      <p className="whitespace-pre-line pb-4">{hobbiesDescription}</p>
      <p className="whitespace-pre-line">{hobbyListDescription}</p>
      <ul className="pb-12 pl-10">
        {hobbyList.map((hobby) => {
          return (
            <li key={hobby}>
              <div>
                <h3 className="relative pb-0 pr-4 font-jetbrainsMono text-base leading-tight">
                  <Gamepad_SVG
                    aria-hidden="true"
                    className="relative -left-10 top-6 w-6 text-color-secondary"
                  />
                  {hobby}
                </h3>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="whitespace-pre-line pb-4">{hobbyLinksDescription}</p>
      <ul>
        {hobbyLinks.map((linkObject) => {
          return (
            <li key={linkObject.link}>
              <a
                className={anchorStyles}
                href={linkObject.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={linkObject.title}
              >
                <ExtLink_SVG aria-hidden="true" className="h-6 w-6" />
                {linkObject.title}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
