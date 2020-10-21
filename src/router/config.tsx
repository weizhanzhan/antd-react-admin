import Auth from "./Auth";
import Layout from '../layout';
import Loadable from 'react-loadable';
import Dashboard from '../views/dashboard'
import loadings from "./loading";
import RouteWithSubRouters from "./RouteWithSubRouters";
export default [
  {
    // 顶级路由 是一个单纯的路基组件，没有任何icon name这些和路由导航相关的东西
    // 路由鉴权 不管什么情况，都是需要走这个组件的 都是必须先过这个组件的关卡
    component:Auth,
    routes:[
      {
        //1级路由
        path:'/login',
        component:Loadable({
          loader:()=>import('../views/Login'),
          ...loadings
        })
      },
      {
        // 404
        path: '/404',
        component: Loadable({
          loader: () => import('../components/not-found/NotFound'),
          ...loadings,
        }),
      },
      {
        // 403 暂无权限
        path: '/403',
        component: Loadable({
          loader: () => import('../components/not-found/NotFound'),
          ...loadings,
        }),
      },
      {
        path:'/',
        component:Layout,
        routes:[
          {
             // 1级级路由
             component: Dashboard,
             name: '工作台',
             icon:'',
             path: '/dashboard',
          },
          {
            //1级路由
            component:RouteWithSubRouters,
            name:'个人中心',
            path:'/person',
            icon:'',
            routes:[
              {
                // 2级级路由
                component: Loadable({
                  loader: () => import('../views/person/center'),
                  ...loadings,
                }),
                icon:'',
                path:'/center',
                name: '个人中心',
              },
            ]
          }
        ]
      } 
    ]
  }
]