import React from 'react';
import Login from './views/Login'
import Layout from './views/Layout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login"  component={Login} />
        <Route  component={Layout} />
      </Switch>   
    </Router>
  );
}

export default App;
