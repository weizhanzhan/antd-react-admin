/***
 * @auth: wzz
 * @time: 2020/10/22
 * @func: 主要用于书写组件的时候 无dispatch感知  方便使用
 ***/
import { useMemo, DependencyList } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
// 这个主要是用于配合saga  处理异步请求

import {
  bindPromiseCreators,
  PromiseCreator,
  ActionCreatorFunction,
  Routine,
} from 'redux-saga-routines';

type actionType = Routine | PromiseCreator | ActionCreatorFunction;

// hooks 一定要以use开头
function useActions(
  actions: {
    [kye: string]: actionType;
  },
  deps?: DependencyList | undefined
): any {

  const dispatch = useDispatch();

  return useMemo(() => {
    const newActions = actions;
    const keys = Object.keys(actions);
    keys.forEach((key: string) => {
      if( newActions[key].length === 2 ) {
        newActions[key] = bindPromiseCreators((actions[key] as PromiseCreator), dispatch);
      } else {
        newActions[key] = bindActionCreators((actions[key] as Routine), dispatch);
      }
    })

    return newActions;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps ? [dispatch, ...deps] : [dispatch]);


}

export default useActions;

