import React from 'react';

import { ReactComponent as SVG_Katiniukas } from '../../assets/images/katiniukas.svg';
import Button from '../../components/Button';
import { useLevitate as Levitate } from '../../hooks/useLevitate';
import { useOverflowHidden } from '../../hooks/useOverflowHidden';
import { routes } from '../../routes';

const NotFound = () => {
  useOverflowHidden();

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex-between flex flex-col pb-12">
        <h1 className="text-8xl">
          <Levitate>404</Levitate>
        </h1>
        <p>Oops! It looks like the page you&#39;re looking for doesn&#39;t exist.</p>
      </div>

      <Button to={routes.home} ariaLabel="Navigate to the home page">
        Home
      </Button>

      <SVG_Katiniukas className="fixed bottom-0 -z-10 max-w-[120px]" />
    </div>
  );
};

export default NotFound;
