/***
 * @auth: dmx
 * @time: 2020/6/15
 * @func: rootSaga
 ***/
import { all, fork } from 'redux-saga/effects';
import user from './user/user';

const rootSaga = function* () {
  yield all([
    fork(user()),
  ])
}

export default rootSaga;