import React from 'react';
import routes from './router';
import { ConnectedRouter } from 'connected-react-router';

import { History } from 'history';

interface IApp {
  history: History;
}
function App ({ history }: IApp)  {
  return (
    <ConnectedRouter history={history}>
      {
        routes
      }
    </ConnectedRouter>
  );
}
  

export default App;