import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import rootReducer from './reducer';
import { routerMiddleware } from 'connected-react-router';
export const history = createBrowserHistory();


// 创建一个增强器函数
// 大家不必要非要完全理解这段代码，主要是在逻辑上
const composeEnhancer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;


const store = createStore(
  rootReducer( history ),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),

  ),
));

export default store;