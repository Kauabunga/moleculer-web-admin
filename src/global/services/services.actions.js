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

export const loadServicesRequest = () => ({
  type: LOAD_SERVICES_REQUEST,
});

export const loadServicesSuccess = services => ({
  type: LOAD_SERVICES_SUCCESS,
  services,
});

export const loadServicesFailure = error => ({
  type: LOAD_SERVICES_FAILURE,
  error,
});

export const loadActionsRequest = () => ({
  type: LOAD_ACTIONS_REQUEST,
});

export const loadActionsSuccess = actions => ({
  type: LOAD_ACTIONS_SUCCESS,
  actions,
});

export const loadActionsFailure = error => ({
  type: LOAD_ACTIONS_FAILURE,
  error,
});

export const loadStatsRequest = () => ({
  type: LOAD_STATS_REQUEST,
});

export const loadStatsSuccess = stats => ({
  type: LOAD_STATS_SUCCESS,
  stats,
});

export const loadStatsFailure = error => ({
  type: LOAD_STATS_FAILURE,
  error,
});
