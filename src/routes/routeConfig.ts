import { ComponentType, lazy, LazyExoticComponent } from 'react';

const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/NotFound'));

export type TRoutes = Record<string, string>;

export type TRouteConfigKeys<T extends TRoutes> = {
  [K in keyof T]: {
    path: T[K];
    component: LazyExoticComponent<ComponentType<unknown>>;
  };
};

export const routes: TRoutes = {
  home: '/',
  notFound: '*',
};

export const routeConfig: TRouteConfigKeys<typeof routes> = {
  home: {
    path: routes.home,
    component: Home,
  },
  notFound: {
    path: routes.notFound,
    component: NotFound,
  },
};
