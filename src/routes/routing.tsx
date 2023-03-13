import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// import LoadingSpinner from '../components/LoadingSpinner';
import { routeConfig } from './routeConfig';

export const RouteManager = React.memo(() => {
  return (
    <Routes>
      {Object.entries(routeConfig).map(([key, route]) => {
        const { component: Component, path } = route;
        return (
          <Route
            key={key}
            path={path}
            element={
              <Suspense fallback={<h1>404 Not Found</h1>}>
                <Component />
              </Suspense>
            }
          ></Route>
        );
      })}
    </Routes>
  );
});

RouteManager.displayName = 'RouteManager';
