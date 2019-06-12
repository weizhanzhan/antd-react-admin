import React,{Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import '../index.less'
import Router from '../../../router'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
const { Sider } = Layout;
const { SubMenu } = Menu;

class WSider extends Component{
    constructor(props){
        super(props)

        //改变方法内this指向
        this.onOpenChange = this.onOpenChange.bind(this)
    }
    state = {
        openKeys: [],
    };

    componentWillReceiveProps(){
        /*
         * 该生命周期函数内 改变state属性 不会导致无限循环
         * 在这里根据路由地址（this.props.history.location.pathname ！！！注意是props.history 不是 props.location ,后者是开始跳转的地址，前者才是跳转后的地址） 
         * 根据地址解析openKeys（展开的subMenu）
         * 自己定义的路由表是有规则的，比方说 /dashboard/analysis, 那么我的以及路由就定义为/dashboard,二级路由为 /dashboard/analysis,
         * 那么我解析默认展开的subMenu的原理就是 通过二级地址/dashboard/analysis 去解析得到一级路由 /dashboard(三级路由以及多级路由以此类推)
         * 和这个生命周期函数能实现一样操作的方法，见我componentDidMount的方法 history.listen 一样可以监听到路由的变化
         */
        this.setRouteChangeMenuState()   
    }
    componentDidMount(){
        this.setRouteChangeMenuState()   
        // this.props.history.listen(() => {
        //     this.setRouteChangeMenuState()
        // })
    }
    render(){
    
        const { location:{ pathname } ,collapsed ,onCollapse} = this.props
        return(
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} theme="dark" >
                <div className="logo" ></div>
                <Menu 
                    theme="dark"
                    selectedKeys={[pathname]} 
                    mode="inline" 
                    onOpenChange={this.onOpenChange}
                    openKeys={this.state.openKeys}
                >
                    {this.initMenus(Router)}
                </Menu>
            </Sider>
        )
    }
    setRouteChangeMenuState(){
        //路由改变会触发该方法，在这设置menu高亮
        let keysArr,openKeys=[]
        keysArr = this.props.history.location.pathname
        keysArr= keysArr.split('/').filter(key=>!!key)//去掉第一位空格
        keysArr.pop()
   
        keysArr.forEach((key,i)=>{
            openKeys.push(`/${keysArr.slice(0,i+1).join('/')}`)
        })
        this.setState({ openKeys });
    }
    onOpenChange = (openKeys) => {
        const currentKeys = openKeys.length?openKeys[openKeys.length-1]:''
      
        if(!!currentKeys.match(this.state.openKeys[this.state.openKeys.length-1])){
            this.setState({
                openKeys:[...this.state.openKeys,currentKeys]
            });
        }else{
            this.setState({
                openKeys:[currentKeys]
            });
        }
       
      }
    
    initMenus(routes){
        const menus = []
        routes.forEach(router =>{
            if('children' in router){
                const route = (
                     <SubMenu
                        key={router.path}
                        title={
                            <span>
                                <Icon type={router.meta.icon} />
                                <span>{router.title}</span>
                            </span>
                        }
                    >
                        {this.initMenus(router.children)}      
                    </SubMenu>
                )
                menus.push(route)
            }else{
                const route = ( <Menu.Item key={router.path}>
                    {router.title}
                     <Link to={router.path}>{router.title}</Link>
                </Menu.Item>)
                menus.push(route)
            }
        })
        return menus
    }
}
export default withRouter(WSider)