
const router = [
    {
        path:'/blog',title:'Blog',name:'blog',
        children:[
            { path:'/blog/list',title:"List",name:'list' ,component:()=>import('../views/Blog/List')},
            { path:'/blog/create',title:"Create",name:'create' ,component:()=>import('../views/Blog/Create')}
        ]
    },
    {
        path:'/account',title:'Account',name:'account',
        children:[
            { path:'/account/index',title:"Index",name:'index' ,component:()=>import('../views/Account/index')},
            { path:'/account/setting',title:"Setting",name:'setting' ,component:()=>import('../views/Account/Setting')},
            { path:'/account/more',title:"More" ,name:'more',component:()=>import('../views/Account/More'),
              children:[
                  { path:'/account/more/role',name:'role' ,title:'Role' ,component:()=>import('../views/Account/Role')}
              ]
            }
        ]
    }
]
export default router