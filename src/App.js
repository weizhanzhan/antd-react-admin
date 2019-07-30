import React from 'react';
import Login from './views/Login'
import Layout from './views/Layout'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import {updateTheme} from './config/Theme'

function App() {
  updateTheme()
  return (
    <Router>
      <Switch>
        <Route path='/' exact render={()=> (
            <Redirect to="/dashboard/analysis"/>
        )}/>
        <Route path="/login"  component={Login} />
        <Route component={Layout}/>
      </Switch>   
    </Router>
  );
}

export default App;
