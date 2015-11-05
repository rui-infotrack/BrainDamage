import createReducer from 'utils/createReducer';
import {
  WIKI_LOAD_REQUEST,
  WIKI_LOAD_SUCCESS,
  WIKI_LOAD_FAILURE,
  WIKI_SELECT_FILTER
} from 'constants/ActionTypes';
import setState from './setState';

const defaultState = {
  activeLabelId: -1,
  labels: [],
  items: [],
  loading: false
};

export default createReducer(defaultState, {
  [WIKI_LOAD_REQUEST](state) {
    return setState(state, {
      loading: true
    });
  },

  [WIKI_LOAD_SUCCESS](state, action) {
    const { response: { items, labels } } = action;
    return setState(state, {
      labels,
      items,
      loading: false
    });
  },

  [WIKI_SELECT_FILTER](state, action) {
    const { labelId } = action;

    return setState(state, {
      activeLabelId: labelId
    });
  }
});
