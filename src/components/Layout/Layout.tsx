import React, { PropsWithChildren } from 'react';

import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="  flex min-h-screen flex-col justify-between bg-background-noise bg-cover bg-center">
      <div className="top-0 left-0">
        <Header />
      </div>
      <main className="mx-auto my-0 min-h-screen p-12">{children}</main>
      <div className="my-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
