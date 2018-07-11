import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './view/App';
import postReducer from './reducers/postReducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //npm install



//createStore always takes the reducer as an argument
const store = createStore(postReducer,
  composeWithDevTools(
   applyMiddleware(),
   // other store enhancers if any
 ));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
 );
