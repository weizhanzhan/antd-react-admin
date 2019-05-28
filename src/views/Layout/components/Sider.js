import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import '../index.css'
const { Sider } = Layout;
const { SubMenu } = Menu;

function WSider (props){
    return(
        <Sider collapsible collapsed={props.collapsed} onCollapse={props.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                        <Icon type="user" />
                        <span>Blog</span>
                        </span>
                    }
                >
                    <Menu.Item key="3">List</Menu.Item>
                    <Menu.Item key="4">Create</Menu.Item>
                </SubMenu>
                <Menu.Item key="9">
                    <Icon type="setting" />
                    <span>Setting</span>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}
export default WSider