import React,{ Component } from 'react';
import { Row, Col,  Menu, Dropdown, Icon, Avatar , Switch  } from 'antd';
import { Layout, message } from 'antd';
import { Link } from 'react-router-dom'
import { updateTheme } from '../../../config/Theme'
import config from '../../../config/DefaultSettings'
import './Header.less'
const { Header } = Layout;
const { colors } = config 
class WHeader extends Component {
    state = {
        colors:colors,
        activeColor:config.primaryColor,
        themeVisible:false
    } 
    render(){
        const Account = (
            <Menu>
              <Menu.Item key="0"> 
                <Link to="/account/center"><Icon type="user" /> 个人中心</Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/account/setting"><Icon type="setting" /><span> 个人设置</span></Link>         
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3" >
                <Icon type="logout" /><span>退出</span>
              </Menu.Item>
            </Menu>
        );
        const Lang = (
            <Menu>
              <Menu.Item>
                <span> CN 简体中文 </span>
              </Menu.Item>
              <Menu.Item>
                <span>  GB English </span>
              </Menu.Item>
            </Menu>
        );
        const Theme = (
            <div className="w_theme_select">
                <h3 className="w_theme_select_title">Theme Color</h3>
                <div className="w_theme_content">
                    {
                        this.state.colors.map(color=>{
                            const isCurrent = (color === this.state.activeColor)
                            return (
                                <div 
                                    key={color}
                                    className="w_theme_color_block" 
                                    onClick={this.changeColor.bind(this,color)}
                                    style={{backgroundColor: color}} 
                                >
                                    {isCurrent ? <Icon type="check" /> : ''}
                                </div>
                            )
                        })
                    }
                </div>
                <h3 className="w_theme_select_title">
                    Menu Color
                </h3>
                <div>
                <Switch 
                    onChange={this.handSwitchChange}
                    checkedChildren="Dark" 
                    unCheckedChildren="Light" 
                    defaultChecked 
                />
                </div>
            </div>
        )
        return(
            <Header style={{ background: '#fff', padding: 0 }} >
                <Row>
                    <Col span={1} style={{textAlign:'right'}}>
                        <Icon
                            className="w_icon"
                            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.props.onCollapse}
                        />
                    </Col>
                    <Col span={23}>
                         <Row type="flex" justify="end">
                            <Dropdown overlay={Lang}>
                                <Col className="w_col" xs={5} sm={4} md={3} lg={2} xl={1}>
                                    <Icon type="global" className="w_icon theme" />                    
                                </Col>
                            </Dropdown>
                            <Dropdown 
                                overlay={Theme} 
                                onVisibleChange={this.handleVisibleChange}
                                visible={this.state.themeVisible}>
                                <Col className="w_col"  xs={5} sm={4} md={3} lg={2} xl={1}>
                                    <Icon type="bg-colors"  className="w_icon theme" />
                                </Col>
                            </Dropdown>
                            <Dropdown overlay={Account}>
                                <Col className="w_col" xs={8} sm={7} md={5} lg={4} xl={3}>
                                    <div style={{lineHeight:4}}>
                                        <Avatar size="small" src="http://blog.zhanwei.xyz/ico.png" />
                                        <span>  zhanzhan.wei</span>
                                    </div>
                                </Col>
                            </Dropdown>
                        </Row> 
                    </Col>
                </Row>
               
            </Header>
        )
    }
    handleVisibleChange = flag => {
        this.setState({ themeVisible: flag });
    };
    handSwitchChange = checked => {
        const theme = checked?'dark':'light'
        this.props.changeMenuTheme(theme)
    }
    changeColor(color){
        this.setState({ activeColor:color })
        updateTheme(color)
    }
}
export default WHeader