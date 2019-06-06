
import React,{Component} from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import { Button ,message} from 'antd';
class BlogList extends Component{
   
    render(){
        const size= 'large'
        return(
            <div>
                <h1>个人主页More</h1>
                <Link to='/account/more/role'>role</Link>
                <Button type="primary" onClick={this.changeColor.bind(this,'#1DA57A')}>antd组件1变色</Button>
                <Button type="primary" onClick={this.changeColor.bind(this,'red')}>antd组件2变色</Button>
                <Button type="primary" onClick={this.changeColor.bind(this,'#00dd00')}>antd组件3变色</Button>
                <Button type="primary" onClick={this.changeColor.bind(this,'#1890ff')}>antd组件4变色</Button>
            </div>
        )
    }
    changeColor(color){
        window.less
            .modifyVars(
                {
                    '@primary-color': color,
                    '@link-color': 'color',
                    '@btn-primary-bg': color,
                }
            )
            .then(() => { message.success('主题更换成功！') })
            .catch(error => { message.error(`主题更换失败！`) });
        }
}
export default withRouter(BlogList)