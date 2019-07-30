import {  message } from 'antd';
import defaultSetting from './DefaultSettings'
const updateTheme  = (color = defaultSetting.primaryColor) =>{
    console.log(1234)
    if(!window.less){
        return
    }
    const hideMessage = message.loading('正在编译主题...', 0)
    setTimeout(() => {
        window.less
        .modifyVars(
            {
                '@primary-color': color,
                '@link-color': 'color',
                '@btn-primary-bg': color,
            }
        )
        .then(() => { 
            hideMessage()
        })
        .catch(() => { 
            hideMessage()
        });
    },200)
   
}
export {
    updateTheme
}
  