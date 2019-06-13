
const router = [
    {
        path:'/dashboard',title:'Dashboard',name:'Dashboard', meta:{ icon : 'dashboard' },
        children:[
            { path:'/dashboard/analysis',title:"Analysis",name:'Analysis' ,component:()=>import('../views/Dashboard/Analysis')},
            { path:'/dashboard/workplace',title:"Workplace",name:'dashboard' ,component:()=>import('../views/Dashboard/Workplace')}
        ]
    },
    {
        path:'/account',title:'Account',name:'account', meta:{ icon : 'user' },
        children:[
            { path:'/account/center',title:"Account Center",name:'center' ,component:()=>import('../views/Account/index')},
            { path:'/account/setting',title:"Account Setting",name:'setting' ,component:()=>import('../views/Account/Setting')},
            { path:'/account/more',title:"More" ,name:'more',component:()=>import('../views/Account/More'),
                meta:{ icon : 'user-add' },
                children:[
                    { path:'/account/more/role',name:'role' ,title:'Account Role' ,component:()=>import('../views/Account/Role')}
              ]
            }
        ]
    }
]
export default router