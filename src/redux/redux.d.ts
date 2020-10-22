interface ActionParams<T = any> {
  type: string;
  payload: Object<T>
}
// 咱们在这里定义真个项目的状态树的 接口类型
interface IState {
  common: {
    retryTip: boolean;
  };
  user: IUser;
  menu: IMenu;
}