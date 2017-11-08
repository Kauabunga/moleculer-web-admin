import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { applicationReducer } from './application/application.reducer';
import { persistReducer } from './persist/persist.reducer';
import { nodesReducer } from './nodes/nodes.reducer';
import { servicesReducer } from './services/services.reducer';

const createGlobalReducer = () =>
  combineReducers({
    persist: persistReducer,
    application: applicationReducer,
    nodes: nodesReducer,
    services: servicesReducer,
    router: routerReducer,
  });

export default createGlobalReducer;
