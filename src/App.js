import React from 'react';
import Login from './views/Login'
import Layout from './views/Layout'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <Router>

        <Route path="/" exact component={Layout} />
        <Route path="/login/" component={Login} />
        <Route path="/users/" component={Users} />

    </Router>
  );
}

export default App;
