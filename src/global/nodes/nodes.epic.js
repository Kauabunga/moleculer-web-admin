import { combineEpics } from 'redux-observable';
import { LOAD_NODES_REQUEST } from './nodes.constants';
import { loadNodesSuccess } from './nodes.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { ajax } from 'rxjs/observable/dom/ajax';

export const loadNodesRequest = action$ =>
  action$
    .ofType(LOAD_NODES_REQUEST)
    .mergeMap(action =>
      ajax.getJSON(`http://localhost:3000/~node/list`).map(response => loadNodesSuccess(response)),
    );

export default combineEpics(loadNodesRequest);
