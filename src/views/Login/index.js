import React, { Component } from 'react'

import { withRouter } from 'react-router';
class Login extends Component{
  constructor(props){
    super(props)
    this.push = this.push.bind(this)
  }
  render(){
    return (
      <div className="App">
        <h1>Login</h1>
        <button onClick={this.push}>Login</button>
      </div>
    );
   
  }
  push(){
    this.props.history.push('/')
  }
}

export default withRouter(Login);
