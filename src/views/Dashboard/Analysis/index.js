import React,{Component} from 'react';
import { Row, Col } from 'antd' 
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import { IconSlider } from '../../../components/IconSlider'
import './index.less'
class Analysis extends Component{
    render(){
        return(
            <div>
                <Row gutter={16}>
                    <Col className="w_menu_card" xs={24} sm={24} md={12} lg={12} xl={6}>
                        <div className="w_card_content">
                            <h5>Computer Technologies</h5>
                            <h2>$ 5000</h2>
                            <IconSlider min={0} max={20}/>    
                        </div>
                    </Col>
                    <Col className="w_menu_card" xs={24} sm={24} md={12} lg={12} xl={6}>
                        <div className="w_card_content">
                            <h5>Accounting Technologies</h5>
                            <h2>$ 5000</h2>
                            <IconSlider min={0} max={20}/>    
                        </div>
                    </Col>
                    <Col className="w_menu_card" xs={24} sm={24} md={12} lg={12} xl={6}>
                        <div className="w_card_content">
                            <h5>Electrical Engineering</h5>
                            <h2>$ 5000</h2>
                            <IconSlider min={0} max={20}/>    
                        </div>
                    </Col>
                    <Col className="w_menu_card" xs={24} sm={24} md={12} lg={12} xl={6}>
                        <div className="w_card_content">
                            <h5>Chemical Engineering</h5>
                            <h2>$ 5000</h2>
                            <IconSlider min={0} max={20}/>    
                        </div>
                    </Col>
                </Row>
                <div style={{width:'100%',height:'400px',background:'#fff',marginTop:'10px',padding:'24px'}}>

                    <Link to='/dashboard/analysis'>Hello,Welcome!</Link>
                </div>
                
            </div>
        )
    }
}
export default withRouter(Analysis)