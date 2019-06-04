import React,{Component} from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
class AccountIndex extends Component{
    render(){
        return(
            <div>
                <h1>个人主页</h1>
                <Link to='/blog/list'>list</Link>
            </div>
        )
    }
}
export default withRouter(AccountIndex)