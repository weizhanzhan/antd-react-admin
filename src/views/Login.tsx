/***
 * @auth: dmx
 * @time: 2020/6/19
 * @func: 登录组件
 ***/
import React, {memo} from 'react';
interface IProps {

}

const Login: React.FC<IProps> = (props) => {
  return (
    <div className="login">
      <div className="login-layout">
        <div className='login-layout-header' />
        login页面
        <div className='login-layout-footer' />
       
      </div>
    </div>
  );
};

export default memo(Login);
