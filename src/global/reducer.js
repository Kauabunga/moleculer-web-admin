import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { kickOffReducer } from '../containers/KickOff/KickOff.reducer';
import { applicationReducer } from './application/application.reducer';
import { persistReducer } from './persist/persist.reducer';

const containersReducer = {
  containers: combineReducers({
    kickOffReducer,
  }),
};

const createGlobalReducer = () =>
  combineReducers({
    ...containersReducer,
    persist: persistReducer,
    application: applicationReducer,
    router: routerReducer,
  });

export default createGlobalReducer;
