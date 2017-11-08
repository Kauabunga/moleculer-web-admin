import { combineEpics } from 'redux-observable';
import nodesEpic from './nodes/nodes.epic';
import servicesEpic from './services/services.epic';

export default combineEpics(nodesEpic, servicesEpic);
