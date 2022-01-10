import { Route, RouteProps, Switch } from 'react-router-dom';
import React from 'react';
import { useAppSelector } from 'hooks/redux';
import Layout from 'components/Layout';
import Auth from 'pages/auth';
import Error from 'pages/error';

const CustomRoute = React.memo(function CustomRouteComponent({ ...props }: RouteProps) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <Route {...props} component={Layout} />
  ) : (
    <Switch>
      <Route {...props} exact component={Auth} />
      <Route component={Error} />
    </Switch>
  );
});

export default CustomRoute;
