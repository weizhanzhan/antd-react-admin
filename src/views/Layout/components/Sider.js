import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import '../index.css'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function WSider (props){
    return(
        <Sider collapsible collapsed={props.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
                </Menu.Item>
                <SubMenu
                key="sub1"
                title={
                    <span>
                    <Icon type="user" />
                    <span>User</span>
                    </span>
                }
                >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu
                key="sub2"
                title={
                    <span>
                    <Icon type="team" />
                    <span>Team</span>
                    </span>
                }
                >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}
export default WSider