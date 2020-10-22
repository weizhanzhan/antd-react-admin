/***
 * @auth: dmx
 * @time: 2020/6/15
 * @func: 公共reducer数据 比如 超时提示，公共的数据接口之类的
 ***/
import { setRetryTip } from '../../actions/common';

const initialStateSetter = {
  retryTip: false,
}

export default ( state = initialStateSetter, action: ActionParams ) => {

  switch (action.type) {
    // TRIGGER ==> 发起请求的时候
    // SUCCESS ==> 成功的时候
    // FAILURE ==> 失败的时候
    // FULFILL ==> 完成的时候
    // REQUEST ==> 一般不在这里使用
    case setRetryTip.TRIGGER: {
      return {
        ...state,
        retryTip: true,
      }
    }
  }

  return state;
};