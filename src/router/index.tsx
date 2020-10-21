import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import config from './config';


const routes = (
  <BrowserRouter>
    {
      renderRoutes(config)
    }
  </BrowserRouter>
)
export default routes;
