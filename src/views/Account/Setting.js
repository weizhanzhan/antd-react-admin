import React,{Component} from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
class AccountSetting extends Component{
    render(){
        return(
            <div>
                <h1>个人设置</h1>
                <Link to='/dashboard/analysis'>list</Link>
            </div>
        )
    }
}
export default withRouter(AccountSetting)