/***
 * @auth: dmx
 * @time: 2020/6/15
 * @func: 此文件只接受两个reducer  1个是sagaReducer  1个是thunkReducer
 ***/
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import sagaReducer from './saga/reducers';

// combineReducers接受一个对象， 对象里面是一个一个的小的reducer
// const obj = {a: 1, B: 2}
const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  ...sagaReducer,
});

export default rootReducer;