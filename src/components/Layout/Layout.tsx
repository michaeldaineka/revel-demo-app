import React, { Suspense } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import s from './Layout.module.less';
import layoutSchema, { layoutRoutes } from './schema/layoutSchema';

const Layout = function () {
  const location = useLocation();
  return (
    <div className={s.layout}>
      {layoutRoutes.includes(location.pathname) ? <Sidebar /> : null}
      <main className={s.content}>
        {layoutRoutes.includes(location.pathname) ? <Header /> : null}
        <Suspense fallback={<p>loading...</p>}>
          <Switch>
            {layoutSchema.map((item) => (
              <Route {...item} />
            ))}
          </Switch>
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
