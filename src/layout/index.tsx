import React, { memo } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'


interface IProps extends RouteConfigComponentProps{}

const Layout:React.FC<IProps> = (props) =>{

  const { route } = props;
  return (
    <div>
      {
        renderRoutes(route?.routes)
      }
    </div>
  )
}

export default memo(Layout)