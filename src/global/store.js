import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createGlobalReducer from './reducer';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';

export const history = createHistory();
const epicMiddleware = createEpicMiddleware(rootEpic);

const rootReducer = createGlobalReducer();
const enhancers = [];
const middlewares = [
  // Middleware for intercepting and dispatching navigation actions
  routerMiddleware(history),
  epicMiddleware,
];

// Redux dev tools
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
