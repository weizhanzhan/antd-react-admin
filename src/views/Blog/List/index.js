
import React,{Component} from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
class BlogList extends Component{
    render(){
        return(
            <div>
                <h1>个人主页More</h1>
                <Link to='/account/more/role'>role</Link>
            </div>
        )
    }
}
export default withRouter(BlogList)