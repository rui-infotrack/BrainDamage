import createAction from 'utils/createAction';
import {
  WIKI_LOAD_REQUEST,
  WIKI_LOAD_SUCCESS,
  WIKI_LOAD_FAILURE,
  WIKI_SELECT_FILTER,
  WIKI_LOAD_LABELS_REQUEST,
  WIKI_LOAD_LABELS_SUCCESS,
  WIKI_LOAD_LABELS_FAILURE,
  WIKI_UPDATE_NEW_ITEM
} from 'constants/ActionTypes';

export function loadWiki() {
  return {
    types: [WIKI_LOAD_REQUEST, WIKI_LOAD_SUCCESS, WIKI_LOAD_FAILURE],
    callAPI: () => $.getJSON('/api/wiki')
  };
};

export const selectFilter = createAction(WIKI_SELECT_FILTER, 'labelId');

export function loadWikiLabels() {
  return {
    types: [WIKI_LOAD_LABELS_REQUEST, WIKI_LOAD_LABELS_SUCCESS, WIKI_LOAD_LABELS_REQUEST],
    callAPI: () => $.getJSON('/api/wiki/labels')
  }
};

export const updateNewItem = createAction(WIKI_UPDATE_NEW_ITEM, 'newItem');
