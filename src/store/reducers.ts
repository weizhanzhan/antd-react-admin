import { combineReducers } from 'redux'
import { LOGIN } from './action'


function loginReducer(state={userName:'',password:''},action:any){
  switch (action.type) {
    case LOGIN:
      const { userName,password} = action
      return { userName,password }
    default:
      return state
  }
}

const mainReducer = combineReducers({
  loginReducer
})

export default mainReducer