import React from 'react';

import { ReactComponent as SVG_Katiniukas } from '../../assets/images/katiniukas.svg';
import { useOverflowHidden } from '../../hooks/useOverflowHidden';

const NotFound = () => {
  useOverflowHidden();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex-between flex flex-col">
        <h1>Oops!</h1>
        <p> It looks like the page you&#39;re looking for doesn&#39;t exist</p>
      </div>

      <SVG_Katiniukas className="fixed bottom-0 w-96" />
    </div>
  );
};

export default NotFound;
