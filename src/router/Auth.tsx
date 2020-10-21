/***
 * @auth: wzz
 * @time: 2020/10/21
 * @func: 路由鉴权文件
 ***/
import React, {memo} from 'react';
import {renderRoutes, RouteConfigComponentProps} from 'react-router-config';

interface IProps extends RouteConfigComponentProps{
}

const Auth: React.FC<IProps> = (props) => {
  const { route } = props;

  return (
    <>
      {
        route && route.routes && renderRoutes( route.routes )
      }
    </>
  );

}

export default memo(Auth);