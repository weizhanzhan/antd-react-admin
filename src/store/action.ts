/*
 * action 类型
 */

export const LOGIN = 'LOGIN';


export function login(info:{userName:string,password:string}) {
  return { type: LOGIN,  userName:info.userName,password:info.password }
}