import createReducer from 'utils/createReducer';
import {
  WIKI_LOAD_LABELS_REQUEST,
  WIKI_LOAD_LABELS_SUCCESS,
  WIKI_UPDATE_NEW_ITEM,
  WIKI_SAVE_ITEM_REQUEST,
  WIKI_SAVE_ITEM_SUCCESS
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
  },
  busy: false
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
  },

  [WIKI_SAVE_ITEM_REQUEST](state, action) {
    const { item } = action;
    return setState(state, {
      busy: true
    });
  },

  [WIKI_SAVE_ITEM_SUCCESS](state, action) {
    const { response, isNew } = action;
    if (isNew) {
      state = setState(state, {
        newItem: {
          title: '',
          labels: [],
          content: ''
        }
      });
    }
    return setState(state, {
      busy: false
    });
  }
});
