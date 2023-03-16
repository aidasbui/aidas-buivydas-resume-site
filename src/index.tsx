import './sass/global.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout';
import { RouteManager } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <RouteManager />
      </Layout>
    </Router>
  </React.StrictMode>,
);
