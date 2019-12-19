import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from './store';
import history from './history';

import './assets/scss/wabbajack.scss';

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root')
);
