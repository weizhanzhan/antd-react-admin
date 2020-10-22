/***
 * @auth: wzz
 * @time: 2020/10/22
 * @func: 用于扩展 redux-saga-routines 的基本参数
 * 简单介绍一下：redux-saga-routines 默认提供了5个action.type参数： TRIGGER， REQUEST， SUCCESS， FAILURE， FULFILL
 * 也有5个action create trigger， request， success， failure， fulfill，
 *
 * @example
 * import { createRoutine } from 'redux-saga-routines';
 * import extendRoutine from './extendRoutine;
 *
 * const common = extendRoutine(
 *  createRoutine('common'),
 *  [
 *    {
 *      type: 'SET_TRY_TIP',
 *      action: 'setTryTip',
 *    },
 *  ]
 * )
 *
 ***/

import { createAction } from 'redux-actions';
// redux-saga-routines 定义的ts类型文件，
import { Routine, ActionCreatorFunction } from 'redux-saga-routines';

type Key = string;

type ExtendRoutineReturn<T extends Key, A extends Key> = Routine
  & { [key in T]: string }
  & { [key in A]: ActionCreatorFunction };

const createActionCreator = (
  {type, typePrefix}: {type: string, typePrefix: string}
) => createAction(`${typePrefix}/${type}`);

export default function extendRoutine<T extends Key, A extends Key>(
  routine: any,
  types: {
    type: T;
    action: A;
  }[],
): ExtendRoutineReturn<T, A> {

  // 逻辑的处理
  const typePrefix = routine.toString().replace(/\/([^/]+)\/?$/, '');
  const newRoutine = routine;

  types.forEach(({type, action}) => {
    const actionCreators = createActionCreator({ type, typePrefix });

    newRoutine[action] = actionCreators;
    newRoutine[type] = actionCreators.toString();
  });

  return newRoutine;
}
