import createAction from 'utils/createAction';
import {
  WIKI_LOAD_REQUEST,
  WIKI_LOAD_SUCCESS,
  WIKI_LOAD_FAILURE,
  WIKI_SELECT_FILTER,
  WIKI_LOAD_LABELS_REQUEST,
  WIKI_LOAD_LABELS_SUCCESS,
  WIKI_LOAD_LABELS_FAILURE,
  WIKI_UPDATE_NEW_ITEM,
  WIKI_SAVE_ITEM_REQUEST,
  WIKI_SAVE_ITEM_SUCCESS,
  WIKI_SAVE_ITEM_FAILURE
} from 'constants/ActionTypes';
import { post } from 'utils/ajax';

export function load() {
  return {
    types: [WIKI_LOAD_REQUEST, WIKI_LOAD_SUCCESS, WIKI_LOAD_FAILURE],
    callAPI: () => $.getJSON('/api/wiki/items')
  };
};

export const selectFilter = createAction(WIKI_SELECT_FILTER, 'labelId');

export function loadLabels() {
  return {
    types: [WIKI_LOAD_LABELS_REQUEST, WIKI_LOAD_LABELS_SUCCESS, WIKI_LOAD_LABELS_FAILURE],
    callAPI: () => $.getJSON('/api/wiki/labels')
  }
};

export const updateNewItem = createAction(WIKI_UPDATE_NEW_ITEM, 'newItem');

export function saveItem(item) {
  return (dispatch, getState) => {
    const state = getState();
    const { labels, items } = state.wikiIndex;
    const isNew = !item.id;
    const type = isNew ? 'PUT' : 'POST';
    item.id = items.length + 2;
    item.updatedAt = new Date().toISOString();
    const func = () => {
      return {
        types: [WIKI_SAVE_ITEM_REQUEST, WIKI_SAVE_ITEM_SUCCESS, WIKI_SAVE_ITEM_FAILURE],
        callAPI: () => post(
          '/api/wiki/items',
          { labels, items: items.concat(item) }
        ),
        payload: { isNew },
        redirect: '/wiki'
      };
    };
    dispatch(func());
  };
};
