import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import store, { history} from './redux'
ReactDOM.render( 
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root') 
);
