import React from 'react';

import { connect } from 'react-redux'
import { login } from '../store/action'
const Login = ({ dispatch, test,history}:{dispatch:Function,test:any,history:any}) => (
  <div className="App">
    <h1>登录页</h1>
    {JSON.stringify(test)}
    {/* <Link to="/">登录</Link> */}
    <button onClick={()=>{
      dispatch(login({userName:'weizhan',password:'123456'}))
      history?.push('/performance')
    }}>登录</button>
  </div>
);

const mapStateToProps = (state:any) => ({
  test: state
})


export default connect(
  mapStateToProps,
)(Login);