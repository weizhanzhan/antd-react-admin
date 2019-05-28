import React,{ Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import WSider from './components/Sider'
import BlogList from '../Blog/List'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const { Header, Content, Footer,  } = Layout;

function test1(){
    return(
        <div>Hello</div>
    )
}

function test2(){
    return(
        <div>Hello2</div>
    )
}

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
                         <Link to="/layout/test1">test1</Link>
                         <Link to="/layout/test2">test2</Link>
                         <Route path="/layout/test1" exact  component={test1} />
                         <Route path="/layout/test2" exact  component={test2} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
        )
    }
}
export default Layouts