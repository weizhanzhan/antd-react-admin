/***
 * @auth: wzz
 * @time: 2020/10/22
 * @func: 登录表单的实现
 ***/
import React, { memo } from 'react'
import { Form, Button, Input, notification } from 'antd';
import MD5 from 'crypto-js/md5';
interface ILogin {
  username: string;
  password: string;
}

interface IProps {
  fetch: (values: ILogin) => Promise<any>;
  loading: boolean;
}
const { Item } = Form;
const LoginMain:React.FC<IProps> = (props) =>{

  const { loading, fetch } = props;

  // values 是咱们这个表单的数据集合
  // 加入要给 某个表单项赋予初始值，就需要给它传递一个参数initialValues
  // 接受一个对象 键名就是 Item里边定义的name
  const handleLogin = async ( values: any ) => {
    if( !values.username || !values.password ) {
      notification.warn({
        message: '验证失败',
        description: '用户名或密码错误',
      })
    } else {

      const { REACT_APP_MD5_SUFFIX } = process.env;
      // 加密密码
      const newPassword = MD5(`${values.password}${REACT_APP_MD5_SUFFIX}`).toString();

      // 执行登录的逻辑
      // 希望成功登录 使用这个加密过后的密码
      // 51059a4712331fa67d5ea10854b477a6
      try {
        console.log('进来了?s')
        await fetch({
          username: values.username,
          password: newPassword,
        });
      } catch ( error ) {
        console.log(error)
      }


    }

  };
  return (
    <div className="login-layout-main">
      <div className='main-form'>
        <h2>欢迎登录react_blog</h2>
        <Form
          className="main-form-box"
          onFinish={handleLogin}
        >
          <Item name="username">
            <Input placeholder="请输入用户名" />
          </Item>
          <Item name="password">
            <Input type="password" placeholder="请输入密码" />
          </Item>
          <Item>
            <Button
              type="primary"
              className="main-form-box_button"
              htmlType="submit"
              loading={loading}
            >
              登录
            </Button>
          </Item>
          <Item>
            <div className="main-form-box_other">
              <p>其他登录方式</p>
              <div className='any'>
                <span>QQ</span>
                <span>微信</span>
                <span>GitHub</span>
              </div>
            </div>
          </Item>
        </Form>
      </div>
    </div>
  );
}

export default memo(LoginMain);