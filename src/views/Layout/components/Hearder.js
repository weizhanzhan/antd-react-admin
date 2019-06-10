import React,{ Component } from 'react';
import { Row, Col,  Menu, Dropdown, Icon  } from 'antd';
import { Layout } from 'antd';
const { Header } = Layout;
class WHeader extends Component {
    render(){
        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                  1st menu item
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                  2nd menu item
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                  3rd menu item
                </a>
              </Menu.Item>
            </Menu>
          );
        return(
            <Header style={{ background: '#fff', padding: 0 }} >
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8} offset={8}>
                        <Dropdown overlay={menu}>
                            <span className="ant-dropdown-link">
                            Hover me <Icon type="down" />
                            </span>
                        </Dropdown>
                    </Col>
                </Row> 
            </Header>
        )
    }
}
export default WHeader