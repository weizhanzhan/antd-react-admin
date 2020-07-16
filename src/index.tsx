import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import mainReducer from './store/reducers'

import { Provider } from 'react-redux'



let store = createStore(mainReducer)

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root') 
);
