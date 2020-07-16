import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { RouteWithSubRoutes } from '../../assets/common';
import { RouteInterface } from '../../assets/interface';
import { RouteComponentProps } from 'react-router-dom';
interface HomePageProps extends RouteComponentProps{
  routes:Array<RouteInterface>
 }
 
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Home extends React.Component<Partial<RouteComponentProps>>{
  
  render(){
    const childRoutes = (this.props as HomePageProps).routes
    const defaultOpenKeys = this.getInitSubMenuKey.call(this,childRoutes)
    return (
      <Layout className="wz-layout">
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">模块一</Menu.Item>
          <Menu.Item key="2">模块二</Menu.Item>
          <Menu.Item key="3">模块三</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            onClick={this.hanleChangeMenu.bind(this)}
            mode="inline"
            selectedKeys={[this.props.location?.pathname as string]}
            defaultOpenKeys= {defaultOpenKeys}
            style={{ height: '100%', borderRight: 0 }}
          >
            { childRoutes.map(route=>{
              if(route.routes){
                return (
                  <SubMenu key={route.path} icon={<UserOutlined />} title={route.path}>
                    { route.routes.map(r=> <Menu.Item key={r.path}>{r.path}</Menu.Item> )  }
                  </SubMenu>
                )
              }
              return  <Menu.Item key={route.path}>{route.path}</Menu.Item>
            })} 
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >   
          {/* <Router>*/}
            {/* <Switch>  */}
             { this.getChildRoute.call(this,childRoutes) }   
            {/* </Switch>       */}
          {/* </Router> */}
                
                  
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
  getChildRoute(childRoutes:Array<RouteInterface>){
    const allRoutes:Array<JSX.Element> = []
    childRoutes.forEach((route) => {
      if(route.routes){
        allRoutes.push(...this.getChildRoute(route.routes))
      }else{
        allRoutes.push(RouteWithSubRoutes(route))
      }
    })
    return allRoutes
  }
  getInitSubMenuKey(childRoutes:Array<RouteInterface>,parentName?:string):Array<string>{
    const currentPath = this.props.location?.pathname
    
    const openedSubKeys:Array<string> = []
    childRoutes.forEach(route=>{
      if(route.path === currentPath){
        openedSubKeys.push(parentName as string)
        openedSubKeys.push(route.path)
      }else if(route.routes){
        openedSubKeys.push(...this.getInitSubMenuKey(route.routes,route.path))
      }
    })
    return openedSubKeys
  }
  hanleChangeMenu(e:any){
    this.props.history?.push(e.key)
  }
}


export default Home;