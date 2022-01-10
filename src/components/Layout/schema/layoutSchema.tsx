import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const Error = lazy(() => import('pages/error'));
const Dashboard = lazy(() => import('pages/dashboard'));

const schema: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Dashboard
  },
  {
    component: Error
  }
];

export default schema;

export const layoutRoutes = (function () {
  return schema.map((item) => item.path);
})();
