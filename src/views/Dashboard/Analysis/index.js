import React,{Component} from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
class Analysis extends Component{
    render(){
        return(
            <div>
                <h1>Analysis</h1>
                <Link to='/dashboard/analysis'>Analysis</Link>
            </div>
        )
    }
}
export default withRouter(Analysis)