/***
 * @auth: dmx
 * @time: 2020/7/17
 * @func:
 * @params:
 * @return:
 * @updateTime:
 ***/
import React, {
  memo,
} from 'react';
import {Spin, Result, Button} from 'antd';
import { LoadingComponentProps } from 'react-loadable';

const PageLoading: React.FC<LoadingComponentProps> = (props) => {

  const {
    error,
    isLoading,
    timedOut,
    pastDelay,
  } = props;

  if( isLoading && pastDelay ) return <Spin className="spin-center" />
  // 如果有错误信息呢。 或者超过咱们定义的加载时间
  if( error || timedOut ) {
    return (
      <Result
        status="error"
        title="组件加载失败"
        subTitle="有可能当前正在发布新版本，或者您的网络出现了问题，请重试，如果多次重试失败，请联系管理员!!!"
        extra={(
          <Button
            onClick={() => window.location.reload()}
            type="primary"
          >
            重试
          </Button>
        )}
      />
    )
  }

  return null;
};

export default memo(PageLoading);