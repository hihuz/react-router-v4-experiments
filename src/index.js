import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom'
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

import App from './App';
import './index.css';

// const rootReducer = (state, action) => state;

// const store = createStore(rootReducer);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

