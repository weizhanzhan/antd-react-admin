import React from 'react';
import {
  Route
} from 'react-router-dom';
import { RouteInterface } from './interface';

const RouteWithSubRoutes = (route: RouteInterface) => {
  return (
    <Route
      key={route.path}
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    >
    </Route>
  );
}

export {
  RouteWithSubRoutes
}