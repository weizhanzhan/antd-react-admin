/**
 * 项目默认配置项
 * primaryColor - 默认主题色, 如果修改颜色不生效，请清理 localStorage
 * navTheme - sidebar theme ['dark', 'light'] 两种主题
 * colorWeak - 色盲模式
 * layout - 整体布局方式 ['sidemenu', 'topmenu'] 两种布局
 * fixedHeader - 固定 Header : boolean
 * fixSiderbar - 固定左侧菜单栏 ： boolean
 * autoHideHeader - 向下滚动时，隐藏 Header : boolean
 * contentWidth - 内容区布局： 流式 |  固定
 *
 * storageOptions: {} - Vue-ls 插件配置项 (localStorage/sessionStorage)
 *
 */

export default {
    primaryColor: '#2F54E8', // primary color of ant design
    colors:['#F5222D','#FA541C','#FAAD14','#13C2C2','#52C41A','#1890FF','#2F54E8','#722ED1'],
    rgbColors:[
      'rgb(245, 34, 45)',
      'rgb(250, 84, 28)',
      'rgb(250, 173, 20)',
      'rgb(19, 194, 194)',
      'rgb(82, 196, 26)',
      'rgb(24, 144, 255)',
      'rgb(47, 84, 235)',
      'rgb(114, 46, 209)'
    ],
    navTheme: 'dark', // theme for nav menu
    layout: 'sidemenu', // nav menu position: sidemenu or topmenu
    contentWidth: 'Fixed', // layout of content: Fluid or Fixed, only works when layout is topmenu
    fixedHeader: false, // sticky header
    fixSiderbar: false, // sticky siderbar
    autoHideHeader: false, //  auto hide header
    colorWeak: false,
    multiTab: false,
    production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true',
    // vue-ls options
    storageOptions: {
      namespace: 'pro__', // key prefix
      name: 'ls', // name variable Vue.[ls] or this.[$ls],
      storage: 'local' // storage name session, local, memory
    }
  }