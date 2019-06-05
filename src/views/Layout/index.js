import React,{ Component } from 'react'
import { Layout, Breadcrumb } from 'antd';
import { Route, Switch } from 'react-router-dom'
import WSider from './components/Sider'
import BlogList from '../Blog/List'
import BlogCreate from '../Blog/Create'
import AccountIndex from '../Account/index'
import AccountSetting from '../Account/Setting'
import AccountMore from '../Account/More'
import AccountRole from '../Account/Role'
const { Header, Content, Footer,  } = Layout;


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
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Switch>
                            <Route path="/blog/list"   component={BlogList} />
                            <Route path="/blog/create"  component={BlogCreate} />
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