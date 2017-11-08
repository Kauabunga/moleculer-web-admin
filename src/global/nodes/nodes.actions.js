import { LOAD_NODES_REQUEST, LOAD_NODES_SUCCESS, LOAD_NODES_FAILURE } from './nodes.constants';

export const loadNodesRequest = () => ({
  type: LOAD_NODES_REQUEST,
});

export const loadNodesSuccess = nodes => ({
  type: LOAD_NODES_SUCCESS,
  nodes,
});

export const loadNodesFailure = error => ({
  type: LOAD_NODES_FAILURE,
  error,
});
