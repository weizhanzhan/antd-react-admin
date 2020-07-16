import Home from '../views/Home/index';
import Login from '../views/Login';
import Performance from '../views/Performance/index'
import Center from '../views/Center';
import DataSheet from '../views/Performance/data-sheet';
const routes = [
 
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home,
    routes:[
      {
        path: '/performance-sub',
        routes:[
          {
            path: '/data-sheet',
            component:DataSheet
          },
          {
            path: '/performance',
            component:Performance
          },
         
        ]
      },
      {
        path:'/center',
        component:Center
      }
    ]
  },
];

export default routes;