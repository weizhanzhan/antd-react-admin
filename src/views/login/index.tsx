/***
 * @auth: wzz
 * @time: 2020/10/22
 * @func: 登录组件
 ***/
import React, {memo} from 'react';
import LoginMain from './login-layout/LoginMain'
import {useSelector} from 'react-redux';
import useActions from '../../hooks/useActions';
import { loginActionPromise } from '../../redux/saga/actions/user';
import { Redirect } from 'react-router-dom';

import './index.less'

interface IProps {

}

const Login:React.FC<IProps> = (props) =>{
  const { isLogin, loading } = useSelector((state: IState) => state.user );
  const actions = useActions({
    loginActionPromise,
  });

  console.log(isLogin)

   // 如果登陆状态为已经登陆 （ true ） 就跳转到/路径下
   if( isLogin ) return <Redirect to="/" />
  return (
    <div className="login">
      <div className="login-layout">
        <div className='login-layout-header' />
        <LoginMain
          loading={loading}
          fetch={actions.loginActionPromise}
        />
        <div className='login-layout-footer' />
       
      </div>
    </div>
  )
}

export default memo(Login)