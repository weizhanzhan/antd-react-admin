import React,{ Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import Router from '../../../router'
import '../index.less'
const { Sider } = Layout;
const { SubMenu } = Menu;

class WSider extends Component{
    render(){
        const { location:{ pathname } ,collapsed,openKeys,onOpenChange, menuTheme } = this.props
        return(
            <Sider  collapsed={collapsed} theme={this.props.menuTheme} >
                <div className="logo" >
                    <img src="/ico.png" alt=""></img>
                    <span className={collapsed?`menu_theme ${menuTheme} hide`:`menu_theme ${menuTheme} show`} href="">React Admin</span>
                </div>
                <Menu 
                    theme={menuTheme}
                    selectedKeys={[pathname]} 
                    mode="inline"
                    onOpenChange={onOpenChange}
                    openKeys={openKeys}
                >
                    {this.initMenus(Router)}
                </Menu>
            </Sider>
        )
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