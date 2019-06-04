
const router = [
    {
        path:'/blog',title:'Blog',
        children:[
            { path:'/blog/list',title:"List" ,component:()=>import('../views/Blog/List')},
            { path:'/blog/create',title:"Create" ,component:()=>import('../views/Blog/Create')}
        ]
    },
    {
        path:'/account',title:'Account',
        children:[
            { path:'/account/index',title:"Index" ,component:()=>import('../views/Account/index')},
            { path:'/account/setting',title:"Setting" ,component:()=>import('../views/Account/Setting')},
            { path:'/account/more',title:"More" ,component:()=>import('../views/Account/More'),
              children:[
                  { path:'/account/more/role' ,title:'Role' ,component:()=>import('../views/Account/Role')}
              ]
            }
        ]
    }
]
export default router