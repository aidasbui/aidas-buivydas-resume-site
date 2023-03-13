import { ComponentType, lazy, LazyExoticComponent } from 'react';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const NotFound = lazy(() => import('../pages/NotFound'));

export type TRoutes = Record<string, string>;

export type TRouteConfigKeys<T extends TRoutes> = {
  [K in keyof T]: {
    path: T[K];
    component: LazyExoticComponent<ComponentType<unknown>>;
  };
};

export const routes: TRoutes = {
  home: '/',
  about: '/about',
  notFound: '*',
};

export const routeConfig: TRouteConfigKeys<typeof routes> = {
  home: {
    path: routes.home,
    component: Home,
  },
  about: {
    path: routes.about,
    component: About,
  },
  notFound: {
    path: routes.notFound,
    component: NotFound,
  },
};
