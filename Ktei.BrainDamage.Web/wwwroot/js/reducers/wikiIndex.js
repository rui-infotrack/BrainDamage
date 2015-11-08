import createReducer from 'utils/createReducer';
import {
  WIKI_LOAD_REQUEST,
  WIKI_LOAD_SUCCESS,
  WIKI_LOAD_FAILURE,
  WIKI_SELECT_FILTER,
  WIKI_SAVE_ITEM_SUCCESS
} from 'constants/ActionTypes';
import setState from './setState';

const defaultState = {
  loading: false,
  loaded: false,
  labels: [],
  items: [],
  activeLabelId: -1
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
      loading: false,
      loaded: true
    });
  },

  [WIKI_SELECT_FILTER](state, action) {
    const { labelId } = action;

    return setState(state, {
      activeLabelId: labelId
    });
  },

  [WIKI_SAVE_ITEM_SUCCESS](state, action) {
    const { response } = action;

    return setState(state, response);
  }
});
