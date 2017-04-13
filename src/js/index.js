import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import{Router, Route, browserHistory, IndexRoute} from 'react-router';
import store from './store.js';
import Home from './components/Home.js'

ReactDOM.render(
  <Provider store={store}>
      <Home />
  </Provider>,
  document.getElementById('root')
);