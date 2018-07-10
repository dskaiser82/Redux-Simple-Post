import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './view/App';

import { createStore } from 'redux';


const store = createStore()


ReactDOM.render(<App />, document.getElementById('root'));
