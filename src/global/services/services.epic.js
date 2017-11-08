import { combineEpics } from 'redux-observable';
import { LOAD_ACTIONS_REQUEST, LOAD_SERVICES_REQUEST } from './services.constants';
import { loadActionsSuccess, loadServicesSuccess, loadStatsSuccess } from './services.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { ajax } from 'rxjs/observable/dom/ajax';

export const loadServicesRequest = action$ =>
  action$
    .ofType(LOAD_SERVICES_REQUEST)
    .mergeMap(action =>
      ajax
        .getJSON(`http://localhost:3000/~node/services`)
        .map(response => loadServicesSuccess(response)),
    );

export const loadActionsRequest = action$ =>
  action$
    .ofType(LOAD_ACTIONS_REQUEST)
    .mergeMap(action =>
      ajax
        .getJSON(`http://localhost:3000/~node/actions`)
        .map(response => loadActionsSuccess(response)),
    );

export const loadStatsRequest = action$ =>
  action$
    .ofType(LOAD_ACTIONS_REQUEST)
    .mergeMap(action =>
      ajax.getJSON(`http://localhost:3000/~node/stats`).map(response => loadStatsSuccess(response)),
    );

export default combineEpics(loadServicesRequest, loadActionsRequest, loadStatsRequest);
