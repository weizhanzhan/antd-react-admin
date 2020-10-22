/***
 * @auth: dmx
 * @time: 2020/6/17
 * @func: user reducer
 ***/
import { loginAction } from '../../actions/user';

const initialStateSetter: IUser = {
  isLogin: false,
  loading: false,
}

export default function (state = initialStateSetter, action: ActionParams) {

  switch (action.type) {
    case loginAction.TRIGGER: {
      return {
        ...state,
        loading: true,
      }
    }

    case loginAction.SUCCESS: {
      return {
        ...state,
        isLogin: true,
        loading: false,
        // 这里是预防，这里暂时用不着这么写，但是万一将来需求有变化。
        ...action.payload,
      }
    }
    case loginAction.FAILURE: {
      return {
        ...state,
        loading: false,
      }
    }

    case loginAction.FULFILL: {
      return {
        ...state,
        loading: false,
      }
    }

    default:
      return state;

  }

}