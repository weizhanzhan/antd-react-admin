import React,{Component} from 'react';
import { Row, Col } from 'antd' 
import { withRouter } from 'react-router';
import { IconSlider } from '../../../components/IconSlider'
import Chart from './Chart'
import './index.less'
class Analysis extends Component{
    render(){
        return(
            <div>
                <Row gutter={16}>
                    <Col className="w_menu_card" xs={24} sm={24} md={12} lg={12} xl={6}>
                        <div className="w_card_content">
                            <h5>
                                <span>Vue.js</span>
                                <span className="w_card_title">Evan You</span>
                            </h5>
                            <h2>
                                <span>141,000</span>
                                <span className="w_card_remark">stars</span>
                            </h2>
                            <IconSlider min={0} max={20}/>    
                        </div>
                    </Col>
                    <Col className="w_menu_card" xs={24} sm={24} md={12} lg={12} xl={6}>
                        <div className="w_card_content">
                            <h5>
                                <span>React.js</span>
                                <span className="w_card_title">Facebook</span>
                            </h5>
                            <h2>
                                <span>131,000</span>
                                <span className="w_card_remark">stars</span>
                            </h2>
                            <IconSlider min={0} max={20}/>    
                        </div>
                    </Col>
                    <Col className="w_menu_card" xs={24} sm={24} md={12} lg={12} xl={6}>
                        <div className="w_card_content">
                            <h5>
                                <span>Angular.js</span>
                                <span className="w_card_title">Google</span>
                            </h5>
                            <h2>
                                <span>50,000</span>
                                <span className="w_card_remark">stars</span>
                            </h2>
                            <IconSlider min={0} max={20}/>    
                        </div>
                    </Col>
                    <Col className="w_menu_card" xs={24} sm={24} md={12} lg={12} xl={6}>
                        <div className="w_card_content">
                            <h5>
                                <span>Jquery.js</span>
                                <span className="w_card_title">John Resig</span>
                            </h5>
                            <h2>
                                <span>51,000</span>
                                <span className="w_card_remark">stars</span>
                            </h2>
                            <IconSlider min={0} max={20}/>    
                        </div>
                    </Col>
                </Row>
                <div style={{width:'100%',height:'400px',background:'#fff',marginTop:'10px',padding:'24px'}}>
                    <Chart/>
                </div>
                
            </div>
        )
    }
}
export default withRouter(Analysis)