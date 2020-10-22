/***
 * @auth: dmx
 * @time: 2020/6/16
 * @func:
 ***/
import { createRoutine, promisifyRoutine } from 'redux-saga-routines';
import extendRoutine from '../extendRoutine';
import NAME_SPACE from '../../../constants/name-space';

// 超时提示  咱们发送请求，如果失败了，那么，就会重试请求，
// 超过约定的重试次数过后（axios 二次封装的时候，去做处理），就会触发这个action 就会提示用户请求超时
export const setRetryTip = createRoutine(`${NAME_SPACE.COMMON}`);

