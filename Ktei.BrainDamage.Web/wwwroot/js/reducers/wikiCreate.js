import createReducer from 'utils/createReducer';
import {
  WIKI_LOAD_LABELS_REQUEST,
  WIKI_LOAD_LABELS_SUCCESS,
  WIKI_UPDATE_NEW_ITEM
} from 'constants/ActionTypes';
import setState from './setState';

const defaultState = {
  labelsLoading: false,
  labelsLoaded: false,
  labels: [],
  newItem: {
    title: '',
    labels: [],
    content: ''
  }
};

export default createReducer(defaultState, {
  [WIKI_LOAD_LABELS_REQUEST](state) {
    return setState(state, {
      labelsLoading: true
    });
  },

  [WIKI_LOAD_LABELS_SUCCESS](state, action) {
    const { response } = action;
    return setState(state, {
      labels: response,
      labelsLoading: false,
      labelsLoaded: true
    });
  },

  [WIKI_UPDATE_NEW_ITEM](state, action) {
    const { newItem } = action;
    return setState(state, {
      newItem
    });
  }
});
