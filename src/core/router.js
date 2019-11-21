
import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { routes } from '@core/routes';
import history from '@core/history';

const RouteWithSub = ( routesData ) =>
  routesData.map((route, key) => {
    if (route.redirect && !route.component) {
      return <Redirect key={key} to={route.redirect} />;
    }
    if (!route.routes) {
      return (
        <Route
          key={key}
          path={route.path}
          exact={route.exact}
          render={props => (
            <route.component {...props} />
          )}
        />
      );
    }
    return (
      <Route
        key={key}
        path={route.path}
        exact={route.exact}
        render={props => (
          <route.component {...props} >
            {RouteWithSub(route.routes)}
          </route.component>
        )}
      />
    );
  });

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          {RouteWithSub(routes)}
        </Switch>  
      </Router>
    )
  }
}