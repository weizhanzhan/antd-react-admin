import React,{ Component } from 'react'
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom'
import WSider from './components/Sider'
import WHeader from './components/Hearder'
import WBreadcrumb from './components/Breadcrumb'
import Analysis from '../Dashboard/Analysis'
import Workplace from '../Dashboard/Workplace'
import AccountIndex from '../Account/index'
import AccountSetting from '../Account/Setting'
import AccountMore from '../Account/More'
import AccountRole from '../Account/Role'
const { Content, Footer } = Layout;


class Layouts extends Component{
    state = {
        collapsed: false,
        menuTheme:'dark',
        openKeys: [],
        cacheKeys:[]
    };
    onCollapse = () => {
        const collapsed = !this.state.collapsed
        if(!collapsed){   
            this.setState({ 
                openKeys:this.state.cacheKeys ,
                collapsed:!this.state.collapsed
            })
        }else{
            this.setState({ 
                cacheKeys:this.state.openKeys,
                openKeys:[],
                collapsed:!this.state.collapsed
             })
        }
    }
    changeMenuTheme = theme => {
        this.setState({menuTheme:theme})
    }
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
    }
    render(){
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <WSider 
                    openKeys={this.state.openKeys}
                    collapsed={this.state.collapsed} 
                    onOpenChange={this.onOpenChange}
                    menuTheme={this.state.menuTheme}
                />
                <Layout >
                    <WHeader 
                        collapsed={this.state.collapsed} 
                        onCollapse={this.onCollapse}
                        changeMenuTheme={ this.changeMenuTheme}
                     />
                    <Content style={{ margin: '0 16px' }}>
                        <WBreadcrumb/>
                        <div style={{ minHeight: 360 }}>
                            <Switch>
                                <Route path="/dashboard/analysis"   component={Analysis} />
                                <Route path="/dashboard/workplace"  component={Workplace} />
                                <Route path="/account/index"   component={AccountIndex} />
                                <Route path="/account/setting"  component={AccountSetting} />              
                                <Route path="/account/more/role" component={ AccountRole }/>
                                <Route path="/account/more" component={ AccountMore }/>
                            </Switch>              
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
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
        this.setState({ 
            openKeys,
            cacheKeys:openKeys
         });
    }
    onOpenChange = (openKeys) => {
        const currentKeys = openKeys.length?openKeys[openKeys.length-1]:''
        const openedKeys = [...this.state.openKeys]
        if(!!currentKeys.match(openedKeys[openedKeys.length-1]))
            this.setState({ openKeys:[...openedKeys,currentKeys] });
        else
            this.setState({  openKeys:[currentKeys] });
    
       
      }
    
}
export default Layouts