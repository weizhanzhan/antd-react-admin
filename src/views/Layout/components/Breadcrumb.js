import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { withRouter } from 'react-router';
import routes from '../../../router'
class WBreadcrumb extends Component {
    state = {
        completeBreadcrumbs:[]
    }
    componentDidMount(){
        this.getBreadcrumb()
    }
    componentWillReceiveProps(){
        this.getBreadcrumb()
    }
    getBreadcrumb(){
        let completePaths = []
        let pathSnippets = this.props.history.location.pathname.split('/').filter(i => i)
        pathSnippets.forEach((route,i)=>{
            completePaths.push(`/${pathSnippets.slice(0,i+1).join('/')}`)
        })
        let allCompleteRoutes = this.handleRoutes(routes)
        let breadcrumbItems = completePaths.map( path =>{
            return(
                <Breadcrumb.Item key={path}>
                    {/* <Link to={path}> */}
                        {allCompleteRoutes[path]}
                    {/* </Link> */}
                </Breadcrumb.Item>
            )
        })
        this.setState({
            completeBreadcrumbs:breadcrumbItems
        })
    }
    handleRoutes(routes){
        let routeObj = {}
        routes.forEach(route=>{
            routeObj[route.path]=route.title
            if(!!route.children){
                Object.assign(routeObj,this.handleRoutes(route.children))
            }       
        })       
        return routeObj
    }
    render(){
        return(
            <Breadcrumb style={{ margin: '16px 0' }}>
                {this.state.completeBreadcrumbs}
            </Breadcrumb>
        )
    }
}
export default withRouter(WBreadcrumb)