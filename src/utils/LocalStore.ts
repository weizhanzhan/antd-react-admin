/***
 * @auth: dmx
 * @time: 2020/6/14
 * @func: 简单封装本地存储 供外部调用
 ***/

const store = window.localStorage;

class LocalStore {

  /*
  * 设置数据： 如果value 是 object 会调用JSON.stringify 自动转换为字符串
  * */
  public static set(key: string, value: any) {
    if( !store ) {
      return;
    }
    // 备份一份
    let v = value;

    try {
      if( typeof value === 'object') {
        v = JSON.stringify(v);
      }

      store.setItem(key, v);
    } catch( error ) {
      // 做错误处理
    }

  }

  /*
  * 直接获取 --- 原始数据
  * */
  public static get (key: string) {
    if( !store ) {
      return;
    }

    return store.getItem(key);
  }

  /*
  * 获取的同时 转换为JOSN
  * */
  public static get2Json (key: string) {
    if( !store ) {
      return;
    }

    const data =  store.getItem(key);
    if( data ) {
      try {
        return JSON.parse(data);
      } catch( error ) {
        // do ..
      }
    }

    return null;
  }

  /*
  * 删除
  * */
  public static remove (key: string) {
    if( !store ) {
      return;
    }

    try {
      store.removeItem(key);
    } catch( error ) {
      // do...
    }


  }


}


export default LocalStore;