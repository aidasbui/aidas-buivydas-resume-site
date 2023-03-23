import './styles/global.css';

import React, { PropsWithChildren, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

import Layout from './components/Layout';
import { RouteManager } from './routes';

const ScrollToTop = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Optional if you want to skip the scrolling animation. About the any: https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1195
    } as any); // eslint-disable-line
  }, [location.pathname]);
  return <>{children}</>;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <Layout>
          <RouteManager />
        </Layout>
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
);
