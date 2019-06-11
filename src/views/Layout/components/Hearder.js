import React,{ Component } from 'react';
import { Row, Col,  Menu, Dropdown, Icon  } from 'antd';
import { Layout } from 'antd';
import { message} from 'antd';
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
            </div>
        )
        return(
            <Header style={{ background: '#fff', padding: 0 }} >
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8} offset={8}>
                      <Row>
                        <Col className="w_col" span={8}>col-8</Col>
                        <Dropdown overlay={Theme}>
                            <Col className="w_col" span={4}>
                                <Icon type="bg-colors"  className="w_icon theme" />
                            </Col>
                        </Dropdown>
                        <Dropdown overlay={menu}>
                          <Col className="w_col" span={8}>
                            <span>
                              Hover me <Icon type="down" />
                            </span>                     
                          </Col>
                        </Dropdown>
                      </Row>
                    </Col>
                </Row> 
            </Header>
        )
    }
    componentDidMount(){
        console.log(this.color,window.less)
    }
    changeColor(color){
       
      //  message.info('正在切换主题');
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