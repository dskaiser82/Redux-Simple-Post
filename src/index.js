import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './view/App';
import postReducer from './reducers/postReducer'
import { createStore } from 'redux';

import { Provider } from 'react-redux';



//createStore always takes the reducer as an argument
const store = createStore(postReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
 );
