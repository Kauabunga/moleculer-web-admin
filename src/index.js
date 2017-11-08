import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './global/store';
import router from './global/router';
import { unregister } from './registerServiceWorker';
import ReactGA from 'react-ga';
import './polyfill';
import 'typeface-roboto';
import initReactFastclick from 'react-fastclick';

initReactFastclick();

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_CODE, { debug: false });
}

ReactDOM.render(<Provider store={store}>{router}</Provider>, document.getElementById('root'));

// Service Worker registration
// registerServiceWorker();
unregister();
