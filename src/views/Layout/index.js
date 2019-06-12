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
    };
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };
    render(){
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <WSider collapsed={this.state.collapsed} onCollapse={this.onCollapse}/>
                <Layout>
                    <WHeader/>
                    <Content style={{ margin: '0 16px' }}>
                        <WBreadcrumb/>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
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
}
export default Layouts