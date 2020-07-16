import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import routes from './routes';
import { RouteWithSubRoutes } from './assets/common';
import { RouteInterface } from './assets/interface';
import './App.less';

const App:React.FC = () => (
  <Router>
    <div className="App">
      <Switch>
        {routes.map((route: RouteInterface) => {
          return RouteWithSubRoutes(route)
        })}
      </Switch>
    </div>
  </Router>
);

export default App;