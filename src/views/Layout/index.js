import React,{ Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './index.css'
import WSider from './components/Sider'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class Layouts extends Component{
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render(){
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <WSider collapsed={this.state.collapsed}/>
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
        )
    }
}
export default Layouts