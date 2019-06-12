import React,{Component} from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
class AccountRole extends Component{
    render(){
        return(
            <div>
                <h1>AccountRole</h1>
                <Link to='/dashboard/analysis'>list</Link>
            </div>
        )
    }
}
export default withRouter(AccountRole)