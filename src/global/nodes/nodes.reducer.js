import Immutable from 'seamless-immutable';
import { LOAD_NODES_REQUEST, LOAD_NODES_SUCCESS, LOAD_NODES_FAILURE } from './nodes.constants';

const initialState = Immutable({
  loading: false,
  nodes: [],
});

export const nodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NODES_REQUEST:
      return state.merge({ loading: true });
    case LOAD_NODES_SUCCESS:
      const nodes = action.nodes.reduce(
        (acc, current) => Object.assign(acc, { [current.id]: current }),
        {},
      );
      return state.merge({ nodes, loading: false });
    case LOAD_NODES_FAILURE:
      return state.merge({ error: action.error, loading: false });

    default:
      return state;
  }
};
