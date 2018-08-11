import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './stores/configureStore';
import App from './components/App';
import './static/index.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();