import React,{Component} from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
class CreateBlog extends Component{
    render(){
        return(
            <div>
                <h1>Create</h1>
                <Link to='/blog/list'>list</Link>
            </div>
        )
    }
}
export default withRouter(CreateBlog)