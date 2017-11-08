import Immutable from 'seamless-immutable';
import {
  LOAD_SERVICES_REQUEST,
  LOAD_SERVICES_SUCCESS,
  LOAD_SERVICES_FAILURE,
  LOAD_ACTIONS_REQUEST,
  LOAD_ACTIONS_SUCCESS,
  LOAD_ACTIONS_FAILURE,
  LOAD_STATS_REQUEST,
  LOAD_STATS_SUCCESS,
  LOAD_STATS_FAILURE,
} from './services.constants';

const initialState = Immutable({
  loading: false,
  services: {},
  actions: {},
  stats: {},
});

export const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SERVICES_REQUEST:
      return state.merge({ loading: true });
    case LOAD_SERVICES_SUCCESS:
      const services = action.services.reduce(
        (acc, current) => Object.assign(acc, { [current.name]: current }),
        {},
      );
      return state.merge({ services, loading: false });
    case LOAD_SERVICES_FAILURE:
      return state.merge({ error: action.error, loading: false });

    case LOAD_ACTIONS_REQUEST:
      return state.merge({ loading: true });
    case LOAD_ACTIONS_SUCCESS:
      const actions = action.actions.reduce(
        (acc, current) => Object.assign(acc, { [current.name]: current }),
        {},
      );
      return state.merge({ actions, loading: false });
    case LOAD_ACTIONS_FAILURE:
      return state.merge({ error: action.error, loading: false });

    case LOAD_STATS_REQUEST:
      return state.merge({ loading: true });
    case LOAD_STATS_SUCCESS:
      const stats = action.stats;
      return state.merge({ stats, loading: false });
    case LOAD_STATS_FAILURE:
      return state.merge({ error: action.error, loading: false });

    default:
      return state;
  }
};
