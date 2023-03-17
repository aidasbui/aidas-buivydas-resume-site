import React from 'react';

import { ReactComponent as SVG_Katiniukas } from '../../assets/images/katiniukas.svg';
import Button from '../../components/Button';
import { useOverflowHidden } from '../../hooks/useOverflowHidden';

const NotFound = () => {
  useOverflowHidden();

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex-between flex flex-col pb-5">
        <h1 className="text-8xl">404</h1>
        <p>Oops! It looks like the page you&#39;re looking for doesn&#39;t exist.</p>
      </div>
      <Button text="Home"></Button>
      <SVG_Katiniukas className="fixed bottom-0 w-96" />
    </div>
  );
};

export default NotFound;
