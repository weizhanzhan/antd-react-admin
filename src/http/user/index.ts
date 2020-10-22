import http from '../http';

// 从目前，到开发博客阶段为止 大家都可以直接用这个接口，
// 然后，后面开发博客的时候，会专门起一个后台来专门处理各种api

// 登录
export const login = (options: ILogin) => http.post('/login', options);

// 刷新token
export const refreshToken = (authToken: string) => http.put('/auth/tokens', {refreshToken}, null);