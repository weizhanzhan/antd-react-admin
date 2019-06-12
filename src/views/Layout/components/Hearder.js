import React,{ Component } from 'react';
import { Row, Col,  Menu, Dropdown, Icon, Avatar  } from 'antd';
import { Layout, message } from 'antd';
import { Link } from 'react-router-dom'
import './Header.less'
const { Header } = Layout;
class WHeader extends Component {

    state = {
        colors:[
            'rgb(245, 34, 45)',
            'rgb(250, 84, 28)',
            'rgb(250, 173, 20)',
            'rgb(19, 194, 194)',
            'rgb(82, 196, 26)',
            'rgb(24, 144, 255)',
            'rgb(47, 84, 235)',
            'rgb(114, 46, 209)'
        ]
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
                            return (
                                <div 
                                    key={color}
                                    className="w_theme_color_block" 
                                    onClick={this.changeColor.bind(this,color)}
                                    style={{backgroundColor: color}} 
                                />
                            )
                        })
                    }
                </div>
                {/* <Divider /> */}
                {/* <h3 className="w_theme_select_title">Menu Color</h3>
                <div className="w_theme_content">
                    
                </div> */}
            </div>
        )
        return(
            <Header style={{ background: '#fff', padding: 0 }} >
                <Row type="flex" justify="end">
                    <Dropdown overlay={Account}>
                        <Col className="w_col" xs={10} sm={10} md={8} lg={6} xl={3}>
                            <div style={{lineHeight:4}}>
                                <Avatar size="small" src="http://blog.zhanwei.xyz/ico.png" />
                                <span>  zhanzhan.wei</span>
                            </div>
                        </Col>
                    </Dropdown>
                    <Dropdown overlay={Lang}>
                        <Col className="w_col" xs={5} sm={4} md={3} lg={2} xl={1}>
                        <Icon type="global" className="w_icon" />                    
                        </Col>
                    </Dropdown>
                    <Dropdown overlay={Theme}>
                        <Col className="w_col"  xs={5} sm={4} md={3} lg={2} xl={1}>
                            <Icon type="bg-colors"  className="w_icon theme" />
                        </Col>
                    </Dropdown>
                </Row> 
            </Header>
        )
    }
    componentDidMount(){
        console.log(this.color,window.less)
    }
    changeColor(color){
        window.less
            .modifyVars(
                {
                    '@primary-color': color,
                    '@link-color': 'color',
                    '@btn-primary-bg': color,
                }
            )
            .then(res => { message.success('主题更换成功！') })
            .catch(error => { message.error(`主题更换失败！`) });
        }
}
export default WHeader