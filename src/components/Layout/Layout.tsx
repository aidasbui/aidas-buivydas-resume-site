import React, { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-color-primary">
      {/* <Header /> */}
      <main className="mx-auto my-0 p-12">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
