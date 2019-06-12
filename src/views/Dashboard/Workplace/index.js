import React,{Component} from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
class Workplace extends Component{
    render(){
        return(
            <div>
                <h1>Workplace</h1>
                <Link to='/account/more/role'>role</Link>
            </div>
        )
    }
}
export default withRouter(Workplace)