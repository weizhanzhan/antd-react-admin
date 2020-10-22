/***
 * @auth: wzz
 * @time: 2020/10/22
 * @func: 用户信息相关的东西
 ***/
import { createRoutine, promisifyRoutine } from 'redux-saga-routines';
import extendRoutine from '../extendRoutine';
import NAME_SPACE from '../../../constants/name-space';

export const loginAction = extendRoutine(
  createRoutine(`${NAME_SPACE.USER}`),
  [
    {
      type: 'LOG_OUT',
      action: 'logOut',
    }
  ]
);

export const loginActionPromise = promisifyRoutine( loginAction );
