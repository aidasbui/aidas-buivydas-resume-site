import { ReactComponent as Home_SVG } from 'assets/icons/home.svg';
// import { ReactComponent as Katiniukas_SVG } from 'assets/images/katiniukas.svg';
import Button from 'components/Button';
import { Levitate } from 'hooks/useLevitate';
import { useOverflowHidden } from 'hooks/useOverflowHidden';
import { routes } from 'routes';

const NotFound = () => {
  useOverflowHidden();

  return (
    <div className="flex h-[50vh] flex-col items-center justify-center text-center">
      <div className="flex-between flex flex-col pb-12">
        <h1 className="text-8xl">
          <Levitate>404</Levitate>
        </h1>
        <p>Oops! It looks like the page you&#39;re looking for doesn&#39;t exist.</p>
      </div>

      <Button to={routes.home} ariaLabel="Navigate to the home page">
        <div className="relative flex items-center justify-center">
          <Home_SVG
            className="absolute -left-8 h-6 w-6"
            aria-hidden="true"
            aria-label="Navigate to the home page"
          />
          Home
        </div>
      </Button>
      {/* TODO: fix Katiniukas_SVG not visible in Firefox in large screens and changes GithubSVG color due to inline styles that Katiniukas_SVG applies */}
      {/* <Katiniukas_SVG className="fixed bottom-0 -z-10 max-w-[120px]" /> */}
    </div>
  );
};

export default NotFound;
